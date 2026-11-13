import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Code2,
  Cpu,
  Download,
  Figma,
  Flame,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Menu,
  Moon,
  Palette,
  Smartphone,
  Sparkles,
  Sun,
  Upwork,
  X,
} from 'lucide-react';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  { icon: Code2, title: 'HTML, CSS, JavaScript', description: 'Modern front-end implementation with semantic structure and responsive design.' },
  { icon: Flame, title: 'React.js', description: 'Component-driven interfaces with reusable architecture and smooth state flows.' },
  { icon: Smartphone, title: 'Flutter', description: 'Cross-platform mobile application development with polished experiences.' },
  { icon: Figma, title: 'Figma', description: 'Interface design, prototyping, design systems, and UX exploration.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Human-centered design that balances clarity, consistency, and delight.' },
  { icon: Cpu, title: 'AI-Assisted Development', description: 'Using AI to accelerate ideation, prototyping, and product iteration.' },
];

const projects = [
  {
    title: 'SaaS Dashboard',
    description: 'A modern analytics dashboard for product teams with insights, performance charts, and clean workflows.',
    tags: ['React', 'Tailwind', 'Charts'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    live: '#',
    code: '#',
  },
  {
    title: 'E-Commerce Mobile UI',
    description: 'Mobile-first shopping experience designed to improve conversions, trust, and product discovery.',
    tags: ['Flutter', 'UI/UX', 'Figma'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    live: '#',
    code: '#',
  },
  {
    title: 'AI Content Planner',
    description: 'A planning dashboard that blends workflow automation, content strategy, and AI-assisted generation.',
    tags: ['React', 'AI', 'Productivity'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    live: '#',
    code: '#',
  },
];

const services = [
  { icon: Globe, title: 'Web Development', description: 'Responsive, high-performing websites and web applications tailored to business goals.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Modern mobile interfaces and app experiences built for usability and engagement.' },
  { icon: Layers3, title: 'UI/UX Design', description: 'Thoughtful product design that turns complexity into simple, meaningful interactions.' },
  { icon: Sparkles, title: 'AI-Assisted Prototyping', description: 'Fast concept validation, idea exploration, and design iteration powered by AI.' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Upwork', href: 'https://www.upwork.com', icon: Upwork },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-[#070b17] dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-100/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#070b17]/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 font-black text-white shadow-glow">
              L
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">Lams</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-violet-500 dark:text-slate-300 dark:hover:text-violet-400">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white/95 p-4 dark:border-white/10 dark:bg-slate-900/95 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-violet-600 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-hero-glow">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300">
                <Sparkles size={14} />
                AI-Assisted Web & Mobile Experience
              </div>

              <div className="space-y-4">
                <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m a Web &amp; Mobile App Developer
                </h1>
                <p className="text-xl font-semibold text-violet-600 dark:text-violet-400">
                  I Design and Build Digital Experiences with AI.
                </p>
                <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  I help founders and businesses turn ideas into elegant, responsive digital products through web development, mobile experiences, and thoughtful UI/UX design.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2"><Briefcase size={16} /> Web &amp; Mobile</div>
                <div className="flex items-center gap-2"><Code2 size={16} /> UI/UX + AI</div>
                <div className="flex items-center gap-2"><Globe size={16} /> Design Systems</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="rounded-full bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                    Available for work
                  </span>
                </div>

                <div className="space-y-5 p-2 pt-6">
                  <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800/80">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Current focus</p>
                    <h3 className="mt-2 text-2xl font-bold">AI-driven product design</h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-5 text-white shadow-glow">
                      <p className="text-sm text-blue-100">Projects</p>
                      <p className="mt-3 text-3xl font-black">12+</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 p-5 text-white shadow-glow">
                      <p className="text-sm text-violet-100">Experience</p>
                      <p className="mt-3 text-3xl font-black">3 yrs</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-800/80">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Core stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['React', 'Flutter', 'Figma', 'AI Tools', 'Node', 'Tailwind'].map((tool) => (
                        <span key={tool} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About Me"
            title="Turning ideas into product experiences that feel intuitive and memorable."
            description="I am a developer and designer who enjoys building digital products that balance functionality, aesthetics, and user value. I use AI to speed up prototyping and improve product thinking without losing the human-centered perspective."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/70">
              <div className="rounded-[22px] bg-gradient-to-br from-slate-200 via-slate-100 to-violet-100 p-3 dark:from-slate-700 dark:via-slate-800 dark:to-violet-950">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                  alt="Profile portrait"
                  className="h-[440px] w-full rounded-[18px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/70">
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                  I’m passionate about web development, mobile app development, and UI/UX design. My approach combines product thinking, design craft, and technical execution to create digital experiences that are both beautiful and useful.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-800/80">
                  <p className="text-2xl font-black text-violet-600 dark:text-violet-400">Web</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Responsive experiences</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-800/80">
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400">Mobile</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Cross-platform products</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-800/80">
                  <p className="text-2xl font-black text-pink-600 dark:text-pink-400">UX</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Human-centered design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-200/50 py-20 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Skills"
              title="Tools and strengths I use to design and build digital products."
              description="I combine front-end engineering, mobile development, UX strategy, and AI-assisted workflows to create polished and practical solutions."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => (
                <SkillCard key={skill.title} {...skill} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work that reflects my design and development approach."
            description="These sample projects demonstrate the kind of digital product work I enjoy creating: clean interfaces, thoughtful interactions, and user-focused problem solving."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </section>

        <section id="services" className="bg-slate-200/50 py-20 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Services"
              title="Support for product design and digital product delivery."
              description="Whether you need a website, mobile app experience, or a design system foundation, I can help shape the product from concept to launch."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <SectionTitle
                eyebrow="Contact"
                title="Let’s build thoughtful digital experiences together."
                description="I’m available for freelance projects, product design support, and collaborative product work. Reach out with your idea and I’ll help shape the next steps."
              />

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300"><Github size={18} /></span>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-violet-600">github.com/yourname</a>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Linkedin size={18} /></span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-violet-600">linkedin.com/in/yourname</a>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"><Upwork size={18} /></span>
                  <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="transition hover:text-violet-600">Upwork Profile</a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm text-slate-600 dark:text-slate-300">© 2026 Your Name. All rights reserved.</p>

          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-violet-600">
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-500">
            Back to Top
            <ArrowRight size={16} className="rotate-[-90deg]" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
