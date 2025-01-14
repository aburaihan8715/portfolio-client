import React from "react";
import Heading from "@/components/common/heading";
import emailImage from "@/assets/images/email.png";
import Image from "next/image";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section id="contact" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto px-2">
        <div className="mb-20 flex justify-center">
          <Heading text={`Contact`} />
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-10 ">
          <div className="flex-1 rounded-md flex justify-end">
            <Image className="w-[70%]" src={emailImage} alt="email image" />
          </div>
          <div className="flex-1 p-3 rounded-md bg-gray-900">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
