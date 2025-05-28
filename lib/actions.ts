"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema } from "./emailSchema";
import { ContactEmailTemplate } from "@/email/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export const sendEmail = async (data: ContactFormInputs) => {
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      error: result.error.format(),
    };
  }

  try {
    const { name, email, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Yi Chang (Eric) <hello@yichangteh.com>",
      to: [email],
      bcc: "hello@yichangteh.com",
      subject: "Thank you for reaching out!",
      react: ContactEmailTemplate({ name, email, message }),
      text: `Hello, ${name}!\n\nThank you for reaching out, your message below has been received:\n\n"${message}"\n\nI will get back to you at ${email} as soon as possible.\n\nBest regards,\nYi Chang (Eric)`,
    });
    if (!data || error) {
      throw new Error(error?.message || "Failed to send email");
    }
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
