import React from 'react';
import Heading from '@/components/common/heading';
import emailImage from '@/assets/images/email.png';
import Image from 'next/image';
import ContactForm from './contact-form';
import Container from '@/components/common/container';

const Contact = () => {
  return (
    <section id="contact" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text={`Contact`} />
        </div>
        <div className="flex flex-col gap-10 md:flex-row-reverse">
          <div className="flex flex-1 justify-end rounded-md">
            <Image
              className="w-[70%]"
              src={emailImage}
              alt="email image"
            />
          </div>
          <div className="flex-1 rounded-md bg-gray-900 p-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
