import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-xl border border-tertiary bg-primary">
        <div className="summary grid">
          <div></div>
          <div className="text">
            <h1 className="text-2xl text-tertiary">Get in touch</h1>

            <p>
              Virtuality aside, I'm very approachable and would love to speak
              with you. Feel free to shoot me an email , or find me at the
              socials below.
            </p>
            <p>Cheers.</p>
          </div>
          <div className="icons">
            <SocialLinks />
          </div>
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
