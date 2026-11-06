
const experiences = [
  {
    role: "AI Developer Intern",
    company: "Tekora AI",
    period: "July – August 2026",
    location: "Bengaluru, India",
    points: [
      "Worked on application development, testing, debugging and API integration.",
      "Gained practical experience with Java, Spring Boot, React, REST APIs and MySQL.",
      "Used Postman for API testing and validation.",
    ],
  },
  {
    role: "Software Quality Assurance Engineering Intern",
    company: "Ministry of Defence, Government of India",
    period: "April – May 2026",
    location: "Remote",
    points: [
      "Worked on requirement analysis, research and solution evaluation.",
      "Studied technical feasibility and contributed to the Break Limits concept.",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "WebStack Academy (WSA)",
    period: "March – April 2026",
    location: "Remote",
    points: [
      "Gained hands-on experience in MERN stack development.",
      "Worked with frontend and backend development, API integration, Git and Agile practices.",
    ],
  },
];

const projects = [
  {
    name: "NyayaConnect",
    subtitle: "Full-Stack Legal Consultation Platform",
    description:
      "A digital platform designed to connect users with legal consultation services through a user-friendly web application.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Supabase", "Gemini API"],
  },
  {
    name: "Blockchain-Based Certificate Verification",
    subtitle: "Decentralised Certificate Verification",
    description:
      "A blockchain-based solution designed to support secure certificate verification and improve trust in digital credentials.",
    tech: ["React", "FastAPI", "Firebase Firestore", "Ethereum", "Solidity", "MetaMask"],
  },
  {
    name: "AgroSaarthi",
    subtitle: "AI-Powered Farmer Intelligence Platform",
    description:
      "An AI-powered platform designed to provide farmers with accessible agricultural information using AI and speech-based interaction.",
    tech: ["Python", "Vertex AI", "Gemini", "Firebase", "Speech-to-Text", "REST APIs"],
  },
  {
    name: "AI-Based Community Health Early Warning System",
    subtitle: "AI and Machine Learning",
    description:
      "A concept focused on identifying unusual patterns and potential early warning signals using machine learning and data-driven analysis.",
    tech: ["Python", "Machine Learning", "Anomaly Detection", "Firebase", "REST APIs"],
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "Python", "Java", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  },
  {
    title: "Backend & Databases",
    skills: ["Spring Boot", "REST APIs", "MySQL", "Firebase", "Supabase"],
  },
  {
    title: "AI & Emerging Technologies",
    skills: ["Generative AI", "Google Gemini API", "AI Fundamentals", "Blockchain", "Ethereum", "Solidity"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Ganache", "Remix IDE", "MetaMask"],
  },
];

const certifications = [
  "Artificial Intelligence A-Z 2026: Agentic AI, Gen AI, and RL – Udemy",
  "Build Your Own Static and Responsive Website – NxtWave",
  "Full Stack Web Development (MERN Stack) Internship Completion Certificate – WSA",
  "Software Quality Assurance Engineering Internship – Ministry of Defence",
  "AI Intern – Tekora AI",
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Certifications", "certifications"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-slate-900">
            Shreya<span className="text-blue-700">.</span>
          </a>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-600">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
            <div>
              <p className="mb-4 font-semibold text-blue-700">
                Hello, I'm
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Shreya B Yadav
              </h1>

              <h2 className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl">
                Computer Science & Engineering Student
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                I enjoy building technology-driven solutions using software
                development, artificial intelligence and emerging technologies.
                I am passionate about learning, solving problems and turning
                ideas into practical applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/Shreya-B-Yadav-Resume.pdf"
                  download
                  className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800"
                >
                  Download Resume ↓
                </a>

                <a
                  href="#projects"
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
                >
                  Explore My Work
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Davangere, Karnataka, India
              </p>
            </div>

            <div className="flex justify-center">
              <div className="rounded-full border-8 border-white shadow-2xl ring-1 ring-slate-200">
                <img
                  src="/profile for linkedin.jpg"
                  alt="Shreya B Yadav"
                  className="h-64 w-64 rounded-full object-cover object-top sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              eyebrow="Get to know me"
              title="About Me"
              description="A little about my academic journey and interests."
            />

            <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
              <div className="leading-8 text-slate-600">
                <p>
                  I am pursuing a Bachelor of Technology in Computer Science
                  and Engineering at GM University. I have a strong interest
                  in software development, AI-powered applications and
                  technology innovation.
                </p>
                <p className="mt-4">
                  Through academic projects, internships and hackathons, I
                  have explored different technologies and gained experience
                  in developing, testing and improving software solutions.
                  I believe in continuous learning and practical problem-solving.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                  Education
                </p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  B.Tech – Computer Science & Engineering
                </h3>
                <p className="mt-2 text-slate-600">GM University</p>
                <p className="mt-1 text-sm text-slate-500">
                  2024 – 2027 · Expected graduation: 2027
                </p>
                <p className="mt-4 text-3xl font-extrabold text-blue-700">
                  8.93
                </p>
                <p className="text-sm text-slate-500">CGPA</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="font-bold text-slate-900">PUC</p>
                <p className="mt-1 text-slate-600">Vyshnavi Chetana PU College</p>
                <p className="mt-1 text-sm text-slate-500">89%</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="font-bold text-slate-900">SSLC</p>
                <p className="mt-1 text-slate-600">St Mary's Convent</p>
                <p className="mt-1 text-sm text-slate-500">88%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              eyebrow="Professional journey"
              title="Internship Experience"
              description="Practical exposure through internships and hands-on technical work."
            />

            <div className="space-y-6">
              {experiences.map((item) => (
                <article
                  key={item.company}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-8"
                >
                  <div className="flex flex-wrap justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-semibold text-blue-700">
                        {item.company}
                      </p>
                    </div>
                    <div className="text-sm text-slate-500">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </div>

                  <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-slate-600">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              eyebrow="What I've built"
              title="Featured Projects"
              description="A selection of projects exploring software development, AI and blockchain technology."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-bold text-blue-700">
                    PROJECT 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              eyebrow="My toolkit"
              title="Technical Skills"
              description="Technologies and tools I have worked with during my learning and projects."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              eyebrow="Continuous learning"
              title="Certifications"
              description="Courses and internship credentials supporting my technical journey."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((certificate) => (
                <div
                  key={certificate}
                  className="flex gap-4 rounded-xl border border-slate-200 p-5"
                >
                  <span className="text-xl text-blue-700">✦</span>
                  <p className="font-medium leading-7 text-slate-700">
                    {certificate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              eyebrow="Milestones"
              title="Achievements"
              description="Recognition earned through teamwork, innovation and problem-solving."
            />

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                National-level Hackathon
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                SAMVED National Hackathon – Top 10 Finalist
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Achieved a Top 10 finalist position among 546 participating
                teams in April 2026, working on technology-driven solutions
                involving AI, Blockchain and IoT.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Let's connect
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Have an opportunity or an idea?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
              I am interested in connecting with people, exploring
              opportunities and contributing to meaningful technology projects.
            </p>

            <a
              href="mailto:shreyabyadav65@gmail.com"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Me
            </a>

            <p className="mt-5 text-sm text-slate-300">
              shreyabyadav65@gmail.com
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Davangere, Karnataka, India
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 pb-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl border-t border-slate-800 pt-6">
          © {new Date().getFullYear()} Shreya B Yadav. Built with React.
        </div>
      </footer>
    </div>
  );
}

export default App;
