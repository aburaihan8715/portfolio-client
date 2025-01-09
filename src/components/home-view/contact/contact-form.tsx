/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const name = form.current["user_name"].value.trim();
    const email = form.current["user_email"].value.trim();
    const message = form.current["message"].value.trim();

    if (!name || !email || !message) {
      return toast.error("Name, Email, and Message are required!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address.");
    }

    if (message.length < 10) {
      return toast.error("Message must be at least 10 characters long.");
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm("service_ka9s2jd", "template_66c5oew", form.current, "iF2sH_wv3oxbN5Gx4");
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error: any) {
      toast.error(error.text || "Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Name</label>
        <input
          className="p-2 border-gray-700 border rounded-md bg-transparent outline-0 focus:ring-1 focus:ring-gray-700"
          type="text"
          name="user_name"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Email</label>
        <input
          className="p-2 border-gray-700 border rounded-md bg-transparent outline-0 focus:ring-1 focus:ring-gray-700"
          type="email"
          name="user_email"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Message</label>
        <textarea
          rows={5}
          className="p-2 border-gray-700 border rounded-md bg-transparent outline-0 focus:ring-1 focus:ring-gray-700"
          name="message"
          required
        />
      </div>

      <div>
        <input
          className={`p-2 border-0 rounded-md bg-transparent outline-0 ring-1 ring-gray-600 w-full text-gray-400 ${
            isSubmitting ? "cursor-not-allowed opacity-50" : "hover:bg-gray-700"
          }`}
          type="submit"
          value={isSubmitting ? "Sending..." : "Send"}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default ContactForm;
