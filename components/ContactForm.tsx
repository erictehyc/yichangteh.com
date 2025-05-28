import React from "react";
import Form from "./ui/Form";

const ContactForm = () => {
  return (
    <section id="contact" className="pt-8 pb-4">
      <h1 className="heading">Get in Touch&nbsp;</h1>
      <p className="text-center text-base text-gray-600 dark:text-gray-400 mt-4">
        I would love to hear from you! Whether you have a question, want to
        collaborate, or just want to say hi, feel free to reach out.
      </p>
      <Form />
    </section>
  );
};

export default ContactForm;
