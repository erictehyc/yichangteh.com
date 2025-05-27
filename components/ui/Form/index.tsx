"use client";
import React from "react";
import { Label } from "./Label";
import { Input, TextArea } from "./Input";
import { cn } from "@/lib/utils";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { ContactFormSchema } from "@/lib/emailSchema";
import { sendEmail } from "@/lib/actions";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

//   const wait = (seconds) => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };

  const processFormData = async (
    formData: z.infer<typeof ContactFormSchema>
  ) => {
    const result = await sendEmail(formData);
    // console.log('on submit.', {formData})
    //    await wait(3);
    //     console.log('on submit done.')

    if (result?.error) {
      toast.error(
        `An error occurered! Please shoot me a message at hello@yichangteh.com.`
      );
      return;
    }

    toast.success(`Email sent successfully!`);
    reset();
  };

  console.log("Form is submitting:", isSubmitting);
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit(processFormData)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            type="text"
            required
            disabled={isSubmitting}
            {...register("name")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="john@doe.com"
            type="email"
            required
            disabled={isSubmitting}
            {...register("email")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            placeholder="Your message here..."
            rows={4}
            required
            disabled={isSubmitting}
            {...register("message")}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={isSubmitting}
          style={{
            transition: "background 0.3s ease-in-out",
            color: isSubmitting ? "rgba(255, 255, 255, 0.5)" : "white",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            pointerEvents: isSubmitting ? "none" : "auto",
          }}
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <span>Send Message &rarr;</span>
          )}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
