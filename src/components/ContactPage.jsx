/*
    Author: Darryn Long
    Date: 09/27/2026
    Contact Page
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageIntro from "./PageIntro";

// This demo captures the form interaction locally, then returns visitors home.
export default function ContactPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate("/"), 1600);
  };

  return (
    <>
      <PageIntro eyebrow="Contact me" title="Have a good project in mind?" copy="Let's connect, create, and build together. Fill out the form below to get in touch." />
      <section className="contact-layout">
        <aside className="contact-panel"><p className="eyebrow">Find me here</p><a href="mailto:[your.email@example.com]">[your.email@example.com]</a><a href="tel:+10000000000">[+1 000 000 0000]</a><p>[Your city, province]</p><div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></aside>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label>First name<input name="firstName" required placeholder="Your First Name" /></label>
                <label>Last name<input name="lastName" required placeholder="Your Last Name" /></label>
            </div>
          <label>Email address<input name="email" type="email" required placeholder="yourEmail@example.com" /></label>
          <label>Contact number<input name="phone" type="tel" placeholder="(000) 000-0000" /></label>
          <label>Message<textarea name="message" required rows="5" placeholder="Tell me a little about your project..." /></label>
          <button className="button button-dark" type="submit">{submitted ? "Message captured" : "Send message"} <span>↗</span></button>
          {submitted && <p className="form-note">Thanks. Your message was captured for this demo and Home is loading.</p>}
        </form>
      </section>
    </>
  );
}
