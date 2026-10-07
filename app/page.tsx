import { profile, projects, skills } from "@/data/portfolio";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M5.5 14.5 14 6m0 0H6m8 0v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M3.5 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a aria-label={`${profile.name} home`} className="wordmark" href="#top">
            <span aria-hidden="true" className="wordmark-mark">
              PD
            </span>
            <span>Pratyaksh Danidharia</span>
          </a>
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title" className="hero page-width" id="top">
          <div className="hero-copy">
            <p className="eyebrow hero-intro">
              <span aria-hidden="true" className="availability-dot" />
              {profile.location}
            </p>
            <h1 id="hero-title">
              Building useful things
              <br />
              {" "}
              <span>for the web.</span>
            </h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-description">
              I’m interested in full-stack applications, browser extensions,
              and practical AI tools—products that solve real problems with
              thoughtful, usable software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowIcon />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <ArrowIcon />
              </a>
            </div>
          </div>

          <aside aria-label="Profile summary" className="hero-note">
            <p className="note-label">A little about me</p>
            <p className="note-statement">
              Curious by nature.
              <br />
              Practical by design.
            </p>
            <div className="note-divider" />
            <p className="note-detail">{profile.education}</p>
            <a className="note-link" href={profile.github} rel="noreferrer" target="_blank">
              Follow my work <ArrowIcon diagonal />
            </a>
          </aside>
        </section>

        <section aria-labelledby="skills-title" className="skills-band">
          <div className="page-width skills-inner">
            <h2 className="eyebrow" id="skills-title">
              Tools I work with
            </h2>
            <ul aria-label="Skills" className="skill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="projects-title"
          className="content-section page-width"
          id="projects"
        >
          <SectionHeading
            description="A selection of team projects and the parts I contributed to."
            eyebrow="Selected work"
            title="Projects"
            titleId="projects-title"
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-top">
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.repository ? (
                    <a
                      aria-label={`View ${project.name} repository on GitHub`}
                      className="icon-link"
                      href={project.repository}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ArrowIcon diagonal />
                    </a>
                  ) : (
                    <span className="repo-unavailable">Repository not supplied</span>
                  )}
                </div>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <dl className="project-details">
                  <div>
                    <dt>My contribution</dt>
                    <dd>{project.contribution}</dd>
                  </div>
                  <div>
                    <dt>Collaboration</dt>
                    <dd>{project.collaboration}</dd>
                  </div>
                </dl>
                <ul aria-label={`${project.name} technologies`} className="technology-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {project.repository ? (
                  <a
                    className="project-repo-link"
                    href={project.repository}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View repository <ArrowIcon diagonal />
                  </a>
                ) : (
                  <span className="project-repo-link muted-link">
                    Repository link not confirmed
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="about-section"
          id="about"
        >
          <div className="page-width about-inner">
            <div>
              <SectionHeading
                eyebrow="Experience & hackathons"
                title="Build, learn, improve."
                titleId="about-title"
              />
            </div>
            <div className="about-copy">
              <p>
                My experience so far is centered on collaborative project work.
                I enjoy helping teams turn focused ideas into useful MVPs,
                learning from each iteration, and paying attention to the
                details that make a product easier to use.
              </p>
              <p>
                I’m interested in hackathons as a way to prototype thoughtfully,
                work closely with other builders, and grow through hands-on
                problem-solving.
              </p>
              <p className="education-line">{profile.education}</p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="contact-section page-width"
          id="contact"
        >
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have something useful to build?</h2>
            <p>
              I’m always glad to connect with people who care about thoughtful
              software and practical ideas.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <span>Email</span>
              <span className="contact-value">{profile.email}</span>
              <ArrowIcon diagonal />
            </a>
            <a href={profile.github} rel="noreferrer" target="_blank">
              <span>GitHub</span>
              <span className="contact-value">Praxx-07</span>
              <ArrowIcon diagonal />
            </a>
            <a href={profile.linkedin} rel="noreferrer" target="_blank">
              <span>LinkedIn</span>
              <span className="contact-value">Connect with me</span>
              <ArrowIcon diagonal />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.title}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
