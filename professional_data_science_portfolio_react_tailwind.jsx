import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, Briefcase } from "lucide-react";

// Single-file, production-ready portfolio component using Tailwind CSS.
// - Drop this file into a React app (create-react-app, Vite, or Next.js page) that has Tailwind configured.
// - Add your resume.pdf at /public/resume.pdf and replace project links & texts below.
// - Deploy to Vercel or Netlify. The design is responsive and accessible.

const projects = [
  {
    title: "Customer Churn Model",
    desc: "Production-ready churn prediction with feature engineering, model explainability (SHAP), and a Flask API for scoring.",
    tags: ["Python", "scikit-learn", "Flask", "SHAP"],
    github: "https://github.com/yourname/churn-model",
    demo: "https://churn.yourdomain.com",
  },
  {
    title: "NLP Document Search",
    desc: "Semantic search over policy documents using sentence-transformers and FAISS for fast retrieval.",
    tags: ["NLP", "Transformers", "FAISS", "Docker"],
    github: "https://github.com/yourname/nlp-search",
    demo: "https://search.yourdomain.com",
  },
  {
    title: "Interactive Dashboard",
    desc: "Data product with Streamlit front-end showing KPIs, cohort analysis, and automated data pipelines.",
    tags: ["Streamlit", "ETL", "Airflow", "SQL"],
    github: "https://github.com/yourname/dashboard",
    demo: "https://dash.yourdomain.com",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-8 md:py-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-semibold shadow-lg">PM</div>
          <div>
            <h1 className="text-xl font-semibold">Parameshwaran Arrakutti Anandhakumar</h1>
            <p className="text-sm text-slate-600">Data Scientist • ML Engineer • Open-source</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm" download>
            <FileText size={16} /> Resume
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              Data scientist & ML engineer building reliable data products
            </motion.h2>
            <p className="mt-4 text-slate-700 max-w-xl">
              I build models that answer important business questions, productionize them with APIs, and create dashboards that drive decisions. I enjoy open-source, reproducible pipelines, and clear storytelling with data.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">View projects</a>
              <a href="mailto:youremail@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-sm">
                <Mail size={16} /> Contact
              </a>
            </div>

            <div className="mt-8 text-sm text-slate-600">
              <strong>Open to:</strong> Full-time roles, Freelance, Contract work. Remote or relocation.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col gap-4">
              <div className="text-slate-500 text-sm">Top Skills</div>
              <div className="flex flex-wrap gap-2">
                {['Python','SQL','TensorFlow','PyTorch','scikit-learn','Docker','Kubernetes'].map((s)=> (
                  <div key={s} className="px-3 py-1 rounded-full bg-slate-100 text-sm">{s}</div>
                ))}
              </div>

              <div className="mt-2 text-slate-500 text-sm">Contact</div>
              <div className="flex items-center gap-4">
                <a href="mailto:youremail@example.com" className="flex items-center gap-2 text-slate-700 hover:underline"><Mail size={16} /> youremail@example.com</a>
              </div>

              <div className="mt-2 text-slate-500 text-sm">Profiles</div>
              <div className="flex gap-3">
                <a href="https://github.com/yourname" aria-label="Github" className="hover:underline inline-flex items-center gap-2 text-sm"><Github size={16} /> GitHub</a>
                <a href="https://linkedin.com/in/yourname" aria-label="LinkedIn" className="hover:underline inline-flex items-center gap-2 text-sm"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-10">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="text-slate-600 mt-1">A few projects that showcase product thinking, reproducibility, and impact.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="bg-white rounded-lg shadow p-5">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-medium">{p.title}</h4>
                  <div className="text-sm text-slate-500">{p.tags.join(' • ')}</div>
                </div>
                <p className="mt-3 text-slate-700">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a href={p.github} className="text-sm inline-flex items-center gap-2 hover:underline" target="_blank" rel="noreferrer"><Github size={14} /> Code</a>
                  {p.demo && (
                    <a href={p.demo} className="text-sm inline-flex items-center gap-2 hover:underline" target="_blank" rel="noreferrer"><Briefcase size={14} /> Demo</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About & Skills */}
        <section id="about" className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold">About me</h3>
            <p className="mt-3 text-slate-700">I am a data scientist who focuses on building end-to-end solutions — from data ingestion and feature engineering to modeling, explainability, and deploying scalable APIs. I collaborate with stakeholders to translate metrics into business impact. I document work, produce tests, and prioritize reproducibility.</p>

            <h4 className="mt-6 font-medium">Impact highlights</h4>
            <ul className="list-disc ml-5 mt-2 text-slate-700">
              <li>Increased retention by 8% through an ensemble churn model and targeted campaigns.</li>
              <li>Reduced ETL runtime by 60% via optimized SQL and parallel processing.</li>
              <li>Built an internal search that improved retrieval relevance by 25% using semantic embeddings.</li>
            </ul>
          </div>

          <aside className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold">Tech & Tools</h4>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {['Python','R','SQL','Docker','K8s','AWS','GCP','Airflow'].map((t)=> (
                <div key={t} className="px-2 py-1 rounded bg-slate-100">{t}</div>
              ))}
            </div>
          </aside>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="text-slate-600 mt-1">If you'd like to work together, email me or send a short message.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm text-slate-700">Name</label>
              <input className="mt-2 w-full rounded border border-slate-200 px-3 py-2" placeholder="Your name" />

              <label className="block text-sm text-slate-700 mt-4">Email</label>
              <input className="mt-2 w-full rounded border border-slate-200 px-3 py-2" placeholder="you@example.com" />

              <label className="block text-sm text-slate-700 mt-4">Message</label>
              <textarea className="mt-2 w-full rounded border border-slate-200 px-3 py-2 h-28" placeholder="A short message and role you are hiring for" />

              <div className="mt-4 flex items-center gap-3">
                <button type="button" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
                <a href="mailto:youremail@example.com" className="inline-flex items-center gap-2 px-4 py-2 border rounded">Or email</a>
              </div>
            </form>

            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold">Quick hire kit</h4>
              <p className="text-slate-700 mt-2">A short package you can provide to recruiters / hiring managers:</p>
              <ol className="mt-3 list-decimal ml-5 text-slate-700">
                <li>1-page resume (PDF)</li>
                <li>3 project links with short README</li>
                <li>Links to GitHub & LinkedIn</li>
                <li>Availability & desired role</li>
              </ol>

              <div className="mt-4 flex gap-3">
                <a href="/resume.pdf" className="inline-flex items-center gap-2 px-3 py-2 rounded border"><FileText size={14} /> Resume</a>
                <a href="https://github.com/yourname" className="inline-flex items-center gap-2 px-3 py-2 rounded border"><Github size={14} /> GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-slate-500">
          <div className="max-w-3xl mx-auto">Made with ♥ — Open-source portfolio template · <a href="https://vercel.com" className="underline">Deploy on Vercel</a></div>
        </footer>
      </main>
    </div>
  );
}
