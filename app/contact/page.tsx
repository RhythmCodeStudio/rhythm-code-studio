// import from next
import { connection } from "next/server";
// import components
import ContactFormContainer from "../../components/contact-form-container";

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
    <ContactFormContainer />
  )
}