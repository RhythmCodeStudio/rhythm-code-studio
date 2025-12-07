// import from next
import { connection } from "next/server";
// import components
import ContactFormContainer from "../../components/contact-form-container";
import ContactIconLinks from "@/components/contact-icon-links";

export const metadata = {
  title: "Sync Up | Rhythm Code Studio",
  description:
    "Sync up with Rhythm Code Studio. Custom web solutions to match your beat. Contact Rhythm Code Studio to get started on your custom web project.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage() {
  await connection();
  return (
    <div className="flex flex-col items-center justify-center">
      <ContactFormContainer />
      <ContactIconLinks orientation="horizontal" size={24} className="mt-12" />
    </div>
  )
}