import { Heading, Text } from "react-email";
import EmailLayout from "./email-layout";

export default function MailingListConfirmation() {
  return (
    <EmailLayout preview="Welcome to The Long Emergency...">
      <Heading
        className="text-center text-lg"
        style={{
          fontFamily: "'Special Elite', Georgia, serif",
        }}>
        Welcome to The Long Emergency Mailing List!
      </Heading>

      <Text
        className="text-center"
        style={{
          fontFamily: "'Special Elite', Georgia, serif",
          padding: "0 4rem",
        }}>
        Thank you for signing up. Keep an eye on your inbox for all the latest
        from The Long Emergency.
      </Text>
    </EmailLayout>
  );
}
