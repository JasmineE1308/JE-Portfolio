import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, GraduationCap, Award, Briefcase, Code2 } from 'lucide-react'
import Section from './components/Section.jsx'

export default function App() {
  const resumeUrl = '/JE-Resume.pdf' // placed in public/

  const NavLink = ({ href, children }) => (
    <a href={href} className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
      {children}
    </a>
  )

  const projects = [
    {
      title: 'Shopping cart_MERN',
      desc: 'A full-stack MERN shopping cart app with user authentication, product management, cart, and order handling.',
      techstack: 'React, Node.js, Express, MongoDB',
      link: {
        githubFrontend: "https://github.com/JasmineE1308/shoppingmern",
        githubBackend: "https://github.com/JasmineE1308/shoppingmern",
        liveFrontend: "https://jasminee1308.github.io/shop/#/",
      },
    },
    {
      title: 'Real-Time News Application (MERN)',
      desc: 'News feed with live updates, category filters and search. Built as a capstone FSD project.',
      techstack: 'MongoDB, Express, React, JWT, Node',
      link: {
        githubFrontend: "https://github.com/JasmineE1308/url-newsapi",
        githubBackend: "https://github.com/JasmineE1308/newsurlapi-backend",
        liveFrontend: "https://urldev-react-times.netlify.app/home",
      },
    },
    {
      title: 'MERN Movie app',
      desc: 'A MERN stack movie search app that integrates with the OMDb API to let users search movies, view details, and save favorites. Includes JWT authentication, MongoDB storage, and a responsive React frontend.',
      techstack: 'React, Javascript, Express, TailwindCSS, JWT, Node',
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
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
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
            <a href="https://github.com/JasmineE1308" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:bg-gray-100 rounded-xl">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/jasmine-e-0395491a7" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:bg-gray-100 rounded-xl">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-indigo-600 text-white text-sm font-medium hover:opacity-90">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-wider text-xs font-semibold text-indigo-600">Full Stack Developer (MERN)</p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mt-3">
              Hi, I'm <span className="text-indigo-600">Jasmine</span>. I build clean, modern web apps.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Enthusiastic and detail-oriented developer with a strong foundation in web technologies. Quick learner with a passion for problem solving and innovative thinking.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl bg-indigo-600 text-white hover:opacity-90">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl border border-gray-300 hover:bg-gray-50">Contact Me</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Chennai, India</span>
              <a className="inline-flex items-center gap-2 hover:underline" href="mailto:Jasminechristo2@gmail.com"><Mail className="h-4 w-4" /> Jasminechristo2@gmail.com</a>
              <a className="inline-flex items-center gap-2 hover:underline" href="tel:+919442005785"><Phone className="h-4 w-4" /> +91 94420 05785</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
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
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-2">Profile</h3>
              <p className="text-gray-700">
                Enthusiastic and detail-oriented trained in Full Stack Development with a strong foundation in web technologies. Eager to apply fresh knowledge and skills in software engineering to contribute effectively to team projects and deliver high-quality solutions. Quick learner with a passion for problem-solving and innovative thinking.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <ul className="space-y-4 text-sm">
                <li className="border-l-2 border-indigo-200 pl-4">
                  <div className="font-medium">Master of Engineering — Power Electronics</div>
                  <div className="text-gray-600">PSNACET, Dindigul • CGPA 94.5 • 08/2023</div>
                </li>
                <li className="border-l-2 border-indigo-200 pl-4">
                  <div className="font-medium">Bachelor of Engineering — Electrical Engineering</div>
                  <div className="text-gray-600">SSMIET, Dindigul • CGPA 85.6 • 04/2021</div>
                </li>
                <li className="border-l-2 border-indigo-200 pl-4">
                  <div className="font-medium">HSC — Bio-Maths</div>
                  <div className="text-gray-600">St Joseph's Matric Hr Sec School • 83% • 05/2017</div>
                </li>
                <li className="border-l-2 border-indigo-200 pl-4">
                  <div className="font-medium">SSLC</div>
                  <div className="text-gray-600">St Joseph's Matric Hr Sec School • 95% • 05/2015</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={Code2}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { h: 'Front-end', t: 'HTML, CSS, JavaScript' },
            { h: 'Back-end', t: 'Node.js, Express.js' },
            { h: 'Database', t: 'MongoDB, SQL' },
            { h: 'Programming', t: 'C, C++' },
            { h: 'Tools', t: 'Git, GitHub' },
            { h: 'Others', t: 'Matlab operations' },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200">
              <div className="p-4">
                <h4 className="font-medium">{s.h}</h4>
                <p className="text-sm text-gray-600 mt-1">{s.t}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={ExternalLink}>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <a className="text-sm font-medium inline-flex items-center gap-1 text-indigo-600 hover:underline" href={p.link} target="_blank" rel="noreferrer">
                    View on GitHub <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-700 mt-2">{p.desc}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">Stack: {p.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={Briefcase}>
        <div className="rounded-2xl border border-gray-200">
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold">Faculty — Academic Intern • SSMIET, Dindigul <span className="text-gray-500 text-sm font-normal">(Sep 2023 – May 2024)</span></h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Developed engaging presentation slides and detailed lab manuals to enhance teaching efficacy.</li>
              <li>Researched educational trends to integrate innovative teaching methods.</li>
              <li>Assisted in organizing academic workshops and seminars, promoting interactive learning.</li>
              <li>Transitioned from teaching to pursue opportunities in the IT field.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Certifications & Achievements */}
      <Section id="certs" title="Certifications & Achievements" icon={Award}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold">Certification</h3>
              <p className="text-sm text-gray-700 mt-2">
                Full Stack Development — GUVI (Oct 2024 – Jan 2025). Built projects and completed assessments.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold">Accomplishments</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 mt-2">
                <li>2nd prize — National Level Technical Symposium.</li>
                <li>Paper presented at ICLTSET'23 — Karpagam Institute of Technology.</li>
                <li>2nd prize — Technical symposium at Kumaraswamy College of Engineering.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Mail}>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-gray-200">
            <div className="p-4 sm:p-6 space-y-3 text-sm">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p>I'm open to full-time roles and exciting projects. Reach out and let's build something great!</p>
              <div className="flex flex-col gap-2">
                <a className="inline-flex items-center gap-2 hover:underline" href="mailto:Jasminechristo2@gmail.com"><Mail className="h-4 w-4" /> Jasminechristo2@gmail.com</a>
                <a className="inline-flex items-center gap-2 hover:underline" href="tel:+919442005785"><Phone className="h-4 w-4" /> +91 94420 05785</a>
                <a className="inline-flex items-center gap-2 hover:underline" href="https://www.linkedin.com/in/jasmine-e-0395491a7" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> linkedin.com/in/jasmine-e-0395491a7</a>
                <a className="inline-flex items-center gap-2 hover:underline" href="https://github.com/JasmineE1308" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> github.com/JasmineE1308</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-3">Quick message</h3>
              <form action="mailto:Jasminechristo2@gmail.com" method="post" encType="text/plain" className="space-y-3">
                <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                <input name="email" type="email" required placeholder="Your email" className="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                <textarea name="message" required placeholder="Your message" rows={4} className="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl bg-indigo-600 text-white hover:opacity-90">Send</button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Jasmine E. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/JasmineE1308" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:underline"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/jasmine-e-0395491a7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:underline"><Download className="h-4 w-4" /> Resume</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
