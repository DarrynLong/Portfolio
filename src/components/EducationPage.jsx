/*
    Author: Darryn Long
    Date: 09/27/2026
    Education Page
*/
import PageIntro from "./PageIntro";

export default function EducationPage() {
  return (
    <>
      <PageIntro eyebrow="Education" title="Always learning. Always making." copy="In pursuit of knowledge and the joy of creation." />
      <section className="timeline">
        
        <article><span className="timeline-year">[2025-Current]</span>
            <div>
                <h2>Game Programming</h2>
                <p>Centennial College · Toronto, ON</p>
                <p className="muted">I'm currently studying Game Programming with a focus on software development, interactive systems, and game technology. My studies have covered programming, object-oriented design, databases, operating systems, game development, and 2D/3D production.</p>
                <br/><p><em>Relevant Coursework:</em></p>
                <p className="muted">Object-Oriented Programming — C# / Java • Database Concepts — Oracle SQL • Unix / Linux Operating Systems<br/>Web Application Development • 2D & 3D Game Development — Unity • 2D & 3D Asset Production — Blender / GIMP</p>
            </div>
        </article>

        <article><span className="timeline-year">[2015-2016]</span>
            <div><h2>Art Fundamentals</h2>
            <p>Sheridan College · Oakville, ON</p>
            <p className="muted">Work in progress...</p>
            </div>
        </article>

        <article><span className="timeline-year">[2024]</span>
            <div><h2>Introduction to Cybersecurity</h2>
            <p>EC-Council</p>
            <p className="muted">Work in progress...</p>
            </div>
        </article>
        
      </section>
    </>
  );
}
