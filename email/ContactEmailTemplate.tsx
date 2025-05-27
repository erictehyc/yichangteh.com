import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => {
  const previewText = `Your message has been received by Yi Chang (Eric)!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={box}>
              <Text style={paragraph}>
                Hi <span className="text-purple-300 font-semibold">{name}</span>
                ,
              </Text>
              <Text style={paragraph}>
                Thank you for reaching out, your message below has been
                received:
              </Text>
              <Container className="bg-gray-100 p-4 rounded-lg my-4">
                <Text style={paragraph}>
                  <i>{message}</i>
                </Text>
              </Container>
              <Text style={paragraph}>
                I will get back to you at{" "}
                <span className="text-purple-300 font-semibold">{email}</span>{" "}
                as soon as possible.
              </Text>
              <Text style={paragraph}>Kind regards,</Text>
              <Img
                src="/images/ycTehSignature-no-bg.png"
                width="150"
                height="50"
                alt="Yi Chang (Eric) Signature"
                aria-label="Yi Chang (Eric) Signature"
              />
              <Text style={paragraph}>Yi Chang (Eric)</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
