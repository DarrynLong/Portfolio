/*
    Author: Darryn Long
    Date: 09/27/2026
    Services Page
*/

import PageIntro from "./PageIntro";
import { services } from "../data/portfolioData";

// Service entries / service data are kept in portfolioData.js
export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Useful skills, thoughtfully applied." copy="A short list of the ways you can help a client, studio, or team. Keep this focused on the work you want next." />
      <section className="services-list">
        {services.map(([number, title, description]) => (
        <article key={number}>
            <div className="service-content">
                <span className="service-number">{number}</span>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <span className="service-arrow">↗</span>
            </div>
        </article>
        ))}
      </section>
    </>
  );
}
