"use server";
import { createHash } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { auth } from "@/auth/server";
import { redirect } from "next/navigation";
import {
  Client,
  Project,
  Message,
  MusicSurveyResponse,
  MusicianSurveyResponse,
  MusicFanSurveyResponse,
  VenueSurveyResponse,
  SoundPersonSurveyResponse,
} from "@/definitions/definitions";
import { Resend } from "resend";
import { createElement } from "react";
import MailingListConfirmation from "@/components/email/mailing-list-confirmation";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const resend = new Resend(process.env.RESEND_API_KEY);

// const sql = neon(`${process.env.NEON_DATABASE_URL}`);
const sql = neon(process.env.NEON_DATABASE_URL!);

// user authentication actions
export async function getSession() {
  const session = await auth.getSession();
  return session;
}

export async function signOut() {
  await auth.signOut();
  redirect("/");
}

export async function signUpForMailingList(email: string) {
  const entries = await sql`
    INSERT INTO mailing_list (email)
    VALUES (${email})
    ON CONFLICT (email) DO NOTHING
    RETURNING email
  `;

  if (entries.length === 0) {
    return;
  }

  const [logo, rcLogo] = await Promise.all([
    readFile(
      join(process.cwd(), "public/images/email/horizontal-full-200x119.png"),
    ),
    readFile(
      join(
        process.cwd(),
        "public/images/email/RC-Logo_Horiz-Text-Only-Tag.png",
      ),
    ),
  ]);

  const { error } = await resend.emails.send({
    from: "Rhythm Code Studio <info@rhythmcodestudio.tech>",
    to: email,
    subject: "Rhythm Code Studio Mailing List Confirmation",
    react: createElement(MailingListConfirmation),
    attachments: [
      {
        filename: "horizontal-full-200x119.png",
        content: logo,
        contentId: "company-logo",
      },
      {
        filename: "RC-Logo_Horiz-Text-Only-Tag.png",
        content: rcLogo,
        contentId: "company-logo",
      },
    ],
  });

  if (error) {
    console.error("Mailing-list confirmation failed:", error);
    throw new Error("Failed to send confirmation email.");
  }
}

export async function getMailingList() {
  const entries = await sql`
    SELECT * FROM mailing_list
  `;
  return entries;
}

export async function removeFromMailingList(email: string) {
  await sql`
    DELETE FROM mailing_list
    WHERE email = ${email}
  `;
}

export async function addMusicianSurveyResponse(
  response: MusicianSurveyResponse,
) {
  await sql`
    INSERT INTO musician_survey_responses (
      id,
      date,
      first_name,
      last_name,
      email,
      phone,
      band_or_artist_name,
      for_me_music_is,
      income_from_music,
      is_interested_in_making_more_money,
      social_media_you_use,
      how_do_you_use_social_media,
      what_do_you_like_about_social_media,
      what_do_you_hate_about_social_media,
      streaming_platforms_you_use,
      how_do_you_use_streaming_platforms,
      what_do_you_like_about_streaming_platforms,
      what_do_you_hate_about_streaming_platforms,
      how_could_the_internet_better_help_you,
      is_interested_in_using_new_local_platforms,
      want_from_new_local_platforms,
      is_willing_to_provide_member_only_perks,
      potential_perks,
      what_would_make_local_music_scene_better,
      has_website,
      website,
      is_interested_in_website_upgrade,
      is_interested_in_new_website,
      additional_comments
    )
    VALUES (
      ${response.id},
      ${response.date},
      ${response.first_name},
      ${response.last_name},
      ${response.email},
      ${response.phone},
      ${response.bandOrArtistName},
      ${response.forMeMusicIs},
      ${response.incomeFromMusic},
      ${response.isInterestedInMakingMoreMoney},
      ${response.socialMediaYouUse},
      ${response.howDoYouUseSocialMedia},
      ${response.whatDoYouLikeAboutSocialMedia},
      ${response.whatDoYouHateAboutSocialMedia},
      ${response.streamingPlatformsYouUse},
      ${response.howDoYouUseStreamingPlatforms},
      ${response.whatDoYouLikeAboutStreamingPlatforms},
      ${response.whatDoYouHateAboutStreamingPlatforms},
      ${response.howCouldTheInternetBetterHelpYou},
      ${response.isInterestedInUsingNewLocalPlatforms},
      ${response.wantFromNewLocalPlatforms},
      ${response.isWillingToProvideMemberOnlyPerks},
      ${response.potentialPerks},
      ${response.whatWouldMakeLocalMusicSceneBetter},
      ${response.hasWebsite},
      ${response.website},
      ${response.isInterestedInWebsiteUpgrade},
      ${response.isInterestedInNewWebsite},
      ${response.additionalComments}
    )
  `;
}

export async function addMusicFanSurveyResponse(
  response: MusicFanSurveyResponse,
) {
  await sql`
    INSERT INTO music_fan_survey_responses (
      id,
      date,
      first_name,
      last_name,
      email,
      phone,
      local_bands_you_love,
      local_venues_you_love,
      social_media_you_use,
      how_do_you_use_social_media,
      what_do_you_like_about_social_media,
      what_do_you_hate_about_social_media,
      streaming_platforms_you_use,
      how_do_you_use_streaming_platforms,
      what_do_you_like_about_streaming_platforms,
      what_do_you_hate_about_streaming_platforms,
      how_could_the_internet_better_help_you,
      is_interested_in_using_new_local_platforms,
      want_from_new_local_platforms,
      what_would_make_local_music_scene_better,
      is_interested_in_hosting_shows,
      additional_comments
    )
    VALUES (
      ${response.id},
      ${response.date},
      ${response.first_name},
      ${response.last_name},
      ${response.email},
      ${response.phone},
      ${response.localBandsYouLove},
      ${response.localVenuesYouLove},
      ${response.socialMediaYouUse},
      ${response.howDoYouUseSocialMedia},
      ${response.whatDoYouLikeAboutSocialMedia},
      ${response.whatDoYouHateAboutSocialMedia},
      ${response.streamingPlatformsYouUse},
      ${response.howDoYouUseStreamingPlatforms},
      ${response.whatDoYouLikeAboutStreamingPlatforms},
      ${response.whatDoYouHateAboutStreamingPlatforms},
      ${response.howCouldTheInternetBetterHelpYou},
      ${response.isInterestedInUsingNewLocalPlatforms},
      ${response.wantFromNewLocalPlatforms},
      ${response.whatWouldMakeLocalMusicSceneBetter},
      ${response.isInterestedInHostingShows},
      ${response.additionalComments}
    )
  `;
}

export async function addVenueSurveyResponse(
  response: VenueSurveyResponse,
) {
  await sql`
    INSERT INTO venue_survey_responses (
      id,
      date,
      first_name,
      last_name,
      email,
      phone,
      venue_name,
      venue_type,
      position_at_venue,
      has_website,
      website,
      is_interested_in_website_upgrade,
      is_interested_in_new_website,
      social_media_you_use,
      streaming_platforms_you_use,
      software_you_use,
      what_do_you_like_about_social_media,
      what_do_you_hate_about_social_media,
      what_do_you_like_about_streaming_platforms,
      what_do_you_hate_about_streaming_platforms,
      what_do_you_like_about_software,
      what_do_you_hate_about_software,
      how_do_you_use_software,
      what_are_your_biggest_challenges_with_software,
      do_you_have_any_problems_that_software_could_solve,
      what_problems_could_software_solve,
      how_could_the_internet_better_help_you,
      is_interested_in_using_new_local_platforms,
      want_from_new_local_platforms,
      what_would_make_local_music_scene_better,
      what_are_your_biggest_challenges,
      what_would_best_help_you_address_biggest_challenges,
      additional_comments
    )
    VALUES (
      ${response.id},
      ${response.date},
      ${response.first_name},
      ${response.last_name},
      ${response.email},
      ${response.phone},
      ${response.venueName},
      ${response.venueType},
      ${response.positionAtVenue},
      ${response.hasWebsite},
      ${response.website},
      ${response.isInterestedInWebsiteUpgrade},
      ${response.isInterestedInNewWebsite},
      ${response.socialMediaYouUse},
      ${response.streamingPlatformsYouUse},
      ${response.softwareYouUse},
      ${response.whatDoYouLikeAboutSocialMedia},
      ${response.whatDoYouHateAboutSocialMedia},
      ${response.whatDoYouLikeAboutStreamingPlatforms},
      ${response.whatDoYouHateAboutStreamingPlatforms},
      ${response.whatDoYouLikeAboutSoftware},
      ${response.whatDoYouHateAboutSoftware},
      ${response.howDoYouUseSoftware},
      ${response.whatAreYourBiggestChallengesWithSoftware},
      ${response.doYouHaveAnyProblemsThatSoftwareCouldSolve},
      ${response.whatProblemsCouldSoftwareSolve},
      ${response.howCouldTheInternetBetterHelpYou},
      ${response.isInterestedInUsingNewLocalPlatforms},
      ${response.wantFromNewLocalPlatforms},
      ${response.whatWouldMakeLocalMusicSceneBetter},
      ${response.whatAreYourBiggestChallenges},
      ${response.whatWouldBestHelpYouAddressBiggestChallenges},
      ${response.additionalComments}
    )
  `;
}

export async function addSoundPersonSurveyResponse(
  response: SoundPersonSurveyResponse,
) {
  await sql`
    INSERT INTO sound_person_survey_responses (
      id,
      date,
      first_name,
      last_name,
      email,
      phone,
      social_media_you_use,
      software_you_use,
      how_do_you_use_social_media,
      what_do_you_like_about_social_media,
      what_do_you_hate_about_social_media,
      what_do_you_like_about_software,
      what_do_you_hate_about_software,
      how_do_you_use_software,
      what_are_your_biggest_challenges_with_software,
      do_you_have_any_problems_that_software_could_solve,
      what_problems_could_software_solve,
      how_could_the_internet_better_help_you,
      is_interested_in_using_new_local_platforms,
      want_from_new_local_platforms,
      what_would_make_local_music_scene_better,
      what_are_your_biggest_challenges,
      what_would_best_help_you_address_biggest_challenges,
      additional_comments
    )
    VALUES (
      ${response.id},
      ${response.date},
      ${response.first_name},
      ${response.last_name},
      ${response.email},
      ${response.phone},
      ${response.socialMediaYouUse},
      ${response.softwareYouUse},
      ${response.howDoYouUseSocialMedia},
      ${response.whatDoYouLikeAboutSocialMedia},
      ${response.whatDoYouHateAboutSocialMedia},
      ${response.whatDoYouLikeAboutSoftware},
      ${response.whatDoYouHateAboutSoftware},
      ${response.howDoYouUseSoftware},
      ${response.whatAreYourBiggestChallengesWithSoftware},
      ${response.doYouHaveAnyProblemsThatSoftwareCouldSolve},
      ${response.whatProblemsCouldSoftwareSolve},
      ${response.howCouldTheInternetBetterHelpYou},
      ${response.isInterestedInUsingNewLocalPlatforms},
      ${response.wantFromNewLocalPlatforms},
      ${response.whatWouldMakeLocalMusicSceneBetter},
      ${response.whatAreYourBiggestChallenges},
      ${response.whatWouldBestHelpYouAddressBiggestChallenges},
      ${response.additionalComments}
    )
  `;
}

export async function addMusicSurveyResponse(
  response: MusicSurveyResponse,
) {
  switch (response.typeOfResponse) {
    case "musician":
      return addMusicianSurveyResponse(response.response as MusicianSurveyResponse);
    case "fan":
      return addMusicFanSurveyResponse(response.response as MusicFanSurveyResponse);
    case "venue":
      return addVenueSurveyResponse(response.response as VenueSurveyResponse);
    case "sound_person":
      return addSoundPersonSurveyResponse(response.response as SoundPersonSurveyResponse);
  }
}
