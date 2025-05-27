import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>Hello, {name}!</p>
    <p>Thank you for reaching out, your message below has been received:</p>
    <blockquote>
      <p><i>{message}</i></p>
    </blockquote>
    <p>I will get back to you at {email} as soon as possible.</p>
    <br/>
    <p>Best regards,</p>
    <p>Yi Chang (Eric)</p>
  </div>
);
