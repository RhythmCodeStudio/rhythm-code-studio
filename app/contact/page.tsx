// import components
import ContactForm from "../components/contact-form";

export default function ContactPage() {
  return (
    
    <div className="flex flex-col items-center min-h-screen  ">
      <div className=" items-center justify-center">
      <p className="max-w-200 px-8 py-4 text-balance">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        blah blah blah lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
      <p className="max-w-200 px-8 p-4 text-balance">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        blah blah blah lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
      </div>

      <ContactForm />
    </div>
  );
}
