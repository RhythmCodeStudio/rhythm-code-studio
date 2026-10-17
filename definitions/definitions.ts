type ProjectBase = {
  client: string;
  project: string;
  description: string;
  desktop_image: string[];
  mobile_images: string[];
  features: string[];
};

type LiveProject = ProjectBase & {
  status: "live";
  url: string;
};

type InDevelopmentProject = ProjectBase & {
  status: "in-development";
};

export type Project = LiveProject | InDevelopmentProject;

export type Client = {
  id: string;
  name: string;
  url: string;
};

export type Message = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
};

export type MusicianSurveyResponse = {
  id: string;
  date: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  bandOrArtistName: string;
  musicIs: string;
  incomeFromMusic: string;
  isInteresedInMakingMoreMoney?: boolean;
  hasWebsite: boolean;
  website?: string;
  isInterestedInWebsiteUpgrade?: boolean;
  isInterestedInNewWebsite?: boolean;
  socialMediaYouUse: string[];
  streamingPlatformsYouUse: string[];
  whatDoYouLIkeAboutSocialMedia?: string;
  whatDoYouHateAboutSocialMedia?: string;
  whatDoYouLikeAboutStreamingPlatforms?: string;
  whatDoYouHateAboutStreamingPlatforms?: string;
  howCouldTheInternetBetterHelpYou?: string;
  wouldYouBeInterestedInUsingNewLocalPlatforms?: string;
  wantFromNewLocalPlatforms?: string;
  isWillingToProvideMemberOnlyPerks?: boolean;
  potentialPerks?: string;
  whatWouldMakeLocalMusicSceneBetter?: string;
  additionalComments?: string;
};

export type MusicFanSurveyResponse = {
  id: string;
  date: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  localBandsYouLove: string[];
  localVenuesYouLove: string[];
  socialMediaYouUse: string[];
  howDoYouUseSocialMedia?: string;
  whatDoYouLikeAboutSocialMedia?: string;
  whatDoYouHateAboutSocialMedia?: string;
  streamingPlatformsYouUse: string[];
  howDoYouUseStreamingPlatforms?: string;
  whatDoYouLikeAboutStreamingPlatforms?: string;
  whatDoYouHateAboutStreamingPlatforms?: string;
  howCouldTheInternetBetterHelpYou?: string;
  wouldYouBeInterestedInUsingNewLocalPlatforms?: string;
  wantFromNewLocalPlatforms?: string;
  whatWouldMakeLocalMusicSceneBetter?: string;
  isInterestedInHostingShows?: boolean;
  additionalComments?: string;
};

export type VenueSurveyResponse = {
  id: string;
  date: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  venueName: string;
  venueType: string;
  positionAtVenue: string;
  hasWebsite: boolean;
  website?: string;
  isInterestedInWebsiteUpgrade?: boolean;
  isInterestedInNewWebsite?: boolean;
  socialMediaYouUse: string[];
  streamingPlatformsYouUse: string[];
  softwareYouUse?: string[];
  whatDoYouLikeAboutSocialMedia?: string;
  whatDoYouHateAboutSocialMedia?: string;
  whatDoYouLikeAboutStreamingPlatforms?: string;
  whatDoYouHateAboutStreamingPlatforms?: string;
  whatDoYouLikeAboutSoftware?: string;
  whatDoYouHateAboutSoftware?: string;
  howDoYouUseSoftware?: string;
  whatAreYourBiggestChallengesWithSoftware?: string;
  doYouHaveAnyProblemsThatSoftwareCouldSolve?: boolean;
  whatProblemsCouldSoftwareSolve?: string;
  howCouldTheInternetBetterHelpYou?: string;
  wouldYouBeInterestedInUsingNewLocalPlatforms?: string;
  wantFromNewLocalPlatforms?: string;
  whatWouldMakeLocalMusicSceneBetter?: string;
  whatAreYourBiggestChallenges?: string;
  whatWouldBestHelpYouAddressBiggestChallenges?: string;
  additionalComments?: string;
};

export type SoundPersonSurveyResponse = {
  id: string;
  date: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  socialMediaYouUse: string[];
  // streamingPlatformsYouUse: string[];
  softwareYouUse?: string[];
  howDoYouUseSocialMedia?: string;
  whatDoYouLikeAboutSocialMedia?: string;
  whatDoYouHateAboutSocialMedia?: string;
  // whatDoYouLikeAboutStreamingPlatforms?: string;
  // whatDoYouHateAboutStreamingPlatforms?: string;
  whatDoYouLikeAboutSoftware?: string;
  whatDoYouHateAboutSoftware?: string;
  howDoYouUseSoftware?: string;
  whatAreYourBiggestChallengesWithSoftware?: string;
  doYouHaveAnyProblemsThatSoftwareCouldSolve?: boolean;
  whatProblemsCouldSoftwareSolve?: string;
  howCouldTheInternetBetterHelpYou?: string;
  wouldYouBeInterestedInUsingNewLocalPlatforms?: string;
  wantFromNewLocalPlatforms?: string;
  whatWouldMakeLocalMusicSceneBetter?: string;
  whatAreYourBiggestChallenges?: string;
  whatWouldBestHelpYouAddressBiggestChallenges?: string;
  additionalComments?: string;
};

export type MusicSurveyResponse = {
  typeOfResponse: "musician" | "fan" | "venue" | "sound_person";
  // synthesize all of the survey response types into one master type to collect and compare responses across different types of participants
  response:
    | MusicianSurveyResponse
    | MusicFanSurveyResponse
    | VenueSurveyResponse
    | SoundPersonSurveyResponse;
};
