// import components
import ContactForm from "../../components/contact-form";
// import copy
import { contactPageCopy } from "../lib/copy/contact-page-copy";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center sm:text-lg xl:text-xl 2xl:text-2xl">
      <div className=" items-center justify-center">
        <p className="max-w-200 px-8 py-4">
          {contactPageCopy.text_block_one}
        </p>
        <p className="max-w-200 px-8 p-4">
          {contactPageCopy.text_block_two}
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
