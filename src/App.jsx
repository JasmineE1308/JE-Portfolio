import React from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  GraduationCap,
  Award,
  Briefcase,
  Code2,
} from "lucide-react"
import Section from "./components/Section.jsx"

function App() {
  const resumeUrl = "/JE-Resume.pdf" // place resume in public/

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-100 transition"
    >
      {children}
    </a>
  )

  const projects = [
    {
      title: "Shopping cart (MERN)",
      desc: "A full-stack MERN shopping cart app with user authentication, product management, cart, and order handling.",
      techstack: "React, Node.js, Express, MongoDB",
      link: {
        githubFrontend: "https://github.com/JasmineE1308/shoppingmern",
        githubBackend: "https://github.com/JasmineE1308/shoppingmern",
        liveFrontend: "https://jasminee1308.github.io/shop/#/",
      },
    },
    {
      title: "Real-Time News Application (MERN)",
      desc: "News feed with live updates, category filters, and search. Built as a capstone project.",
      techstack: "MongoDB, Express, React, Node.js, JWT",
      link: {
        githubFrontend: "https://github.com/JasmineE1308/url-newsapi",
        githubBackend: "https://github.com/JasmineE1308/newsurlapi-backend",
        liveFrontend: "https://urldev-react-times.netlify.app/",
      },
    },
    {
      title: "MERN Movie App",
      desc: "A MERN movie search app using the OMDb API. Features search, details, favorites, JWT authentication, and MongoDB storage.",
      techstack: "React, Node.js, Express, MongoDB, JWT, Tailwind",
      link: {
        githubFrontend: "https://github.com/JasmineE1308/mern-movie",
        githubBackend: "https://github.com/JasmineE1308/mern-movie",
        liveFrontend: "https://jasminee1308.github.io/movieapp/",
      },
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
          <a href="#home" className="font-bold text-lg tracking-tight">
            JASMINE <span className="text-indigo-600">E</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#certs">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/JasmineE1308"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 hover:bg-gray-100 rounded-xl"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasmine-e-0395491a7"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 hover:bg-gray-100 rounded-xl"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-indigo-600 text-white text-sm font-medium hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 pt-14 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-wider text-xs font-semibold text-indigo-600">
              Full Stack Developer (MERN)
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mt-3">
              Hi, I'm <span className="text-indigo-600">Jasmine</span>. I build
              clean, modern web apps.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Enthusiastic and detail-oriented developer with strong foundation
              in web technologies. Quick learner with passion for problem
              solving and innovation.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl bg-indigo-600 text-white hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl border border-gray-300 hover:bg-gray-50"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Chennai, India
              </span>
              <a
                className="inline-flex items-center gap-2 hover:underline"
                href="mailto:Jasminechristo2@gmail.com"
              >
                <Mail className="h-4 w-4" /> Jasminechristo2@gmail.com
              </a>
              <a
                className="inline-flex items-center gap-2 hover:underline"
                href="tel:+919442005785"
              >
                <Phone className="h-4 w-4" /> +91 94420 05785
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 shadow-inner p-3">
              <div className="w-full h-full rounded-2xl bg-white/70 border border-gray-200 flex items-center justify-center">
                <Code2 className="w-24 h-24" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About" icon={GraduationCap}>
        <p className="text-gray-700">
          Enthusiastic and detail-oriented Full Stack Developer (MERN) with
          strong foundation in web technologies. Eager to apply knowledge in
          software engineering and deliver high-quality solutions.
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={Code2}>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git/GitHub",
            "C",
            "C++",
          ].map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-xl bg-gray-100 text-sm hover:bg-indigo-100"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={ExternalLink}>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{p.desc}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
                  Stack: {p.techstack}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.link.githubFrontend && (
                    <a
                      href={p.link.githubFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
                    >
                      GitHub Frontend
                    </a>
                  )}
                  {p.link.githubBackend && (
                    <a
                      href={p.link.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
                    >
                      GitHub Backend
                    </a>
                  )}
                  {p.link.liveFrontend && (
                    <a
                      href={p.link.liveFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 text-xs bg-indigo-600 text-white rounded hover:opacity-90"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={Briefcase}>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Faculty – Academic Intern at SSMIET, Dindigul (Sep 2023 – May 2024)
          </li>
          <li>Developed presentation slides and lab manuals</li>
          <li>Organized academic workshops and seminars</li>
          <li>Transitioned from teaching to IT field</li>
        </ul>
      </Section>

      {/* Certifications */}
      <Section id="certs" title="Certifications & Achievements" icon={Award}>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Full Stack Development — GUVI (Oct 2024 – Jan 2025)</li>
          <li>2nd prize — National Level Technical Symposium</li>
          <li>Paper presented at ICLTSET'23</li>
          <li>2nd prize — Technical symposium at Kumaraswamy College</li>
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Mail}>
        <p className="text-gray-700 mb-3">
          I'm open to full-time roles and exciting projects. Reach out!
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="mailto:Jasminechristo2@gmail.com"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Mail className="h-4 w-4" /> Jasminechristo2@gmail.com
          </a>
          <a
            href="tel:+919442005785"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Phone className="h-4 w-4" /> +91 94420 05785
          </a>
          <a
            href="https://www.linkedin.com/in/jasmine-e-0395491a7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/JasmineE1308"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Jasmine E. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JasmineE1308"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jasmine-e-0395491a7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
