const services = [
  {
    title: 'Overseas Placement Assistance',
    description:
      'Structured support for qualified applicants seeking overseas employment opportunities through a compliant and professional recruitment process.',
  },
  {
    title: 'Employer and Job Matching',
    description:
      'Careful coordination between candidate profiles and available roles to help align skills, qualifications, and deployment requirements.',
  },
  {
    title: 'Document Processing Support',
    description:
      'Guidance on employment-related documentation, pre-departure requirements, and submission readiness for a more organized application journey.',
  },
  {
    title: 'Pre-Deployment Assistance',
    description:
      'End-to-end support for successful candidates, including next-step coordination, compliance reminders, and deployment preparation guidance.',
  },
];

const industries = [
  'Hospitality',
  'Construction',
  'Healthcare',
  'Engineering',
  'Administrative Support',
  'Skilled Trades',
];

const steps = [
  'Initial Screening',
  'Qualification Review',
  'Employer Matching',
  'Document Compliance',
  'Pre-Deployment Processing',
  'Deployment Support',
];

const stats = [
  { label: 'DMW Positioning', value: 'Registered & Accredited' },
  { label: 'Focus', value: 'Ethical Recruitment' },
  { label: 'Support', value: 'End-to-End Applicant Guidance' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-blue-900">Generic Agency</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Placement & Recruitment</p>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-red-700">About</a>
            <a href="#services" className="hover:text-red-700">Services</a>
            <a href="#process" className="hover:text-red-700">Process</a>
            <a href="#contact" className="hover:text-red-700">Inquiry</a>
          </nav>
          <a href="#contact" className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800">
            Apply Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-red-500 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
                DMW-Registered and Accredited Recruitment Services
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Connecting Talent With Global Opportunities
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
                We are a professional placement and recruitment agency committed to ethical hiring, organized processing, and dependable support for applicants pursuing overseas employment opportunities.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02]">
                  Inquire Now
                </a>
                <a href="#services" className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  View Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/60">{stat.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Built On</p>
                <h3 className="mt-3 text-2xl font-semibold">Compliance</h3>
                <p className="mt-2 text-white/75">
                  A process-oriented approach aligned with professional recruitment and documentation standards.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Driven By</p>
                <h3 className="mt-3 text-2xl font-semibold">Integrity</h3>
                <p className="mt-2 text-white/75">
                  Clear communication, responsible handling, and applicant-focused support throughout the process.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Industries Served</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <span key={industry} className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-700">About Us</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A reliable recruitment partner for overseas employment opportunities
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our agency is focused on helping applicants and employers connect through a structured, transparent, and professionally managed recruitment process. From screening and job matching to documentation and pre-deployment guidance, we aim to make each stage clear and efficient.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">What applicants value most</h3>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>• Clear job opportunity guidance</li>
              <li>• Transparent recruitment process</li>
              <li>• Professional document support</li>
              <li>• Timely updates and coordination</li>
              <li>• Proper pre-deployment assistance</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-700">Services</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Recruitment and placement services designed for responsible global hiring</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-700">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A structured pathway from screening to deployment</h2>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-700 font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-red-700 to-blue-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Why Choose Us</p>
            <h3 className="mt-3 text-3xl font-bold">Professional recruitment with trust and accountability</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-bold">01</p>
                <p className="mt-2 text-white/80">Organized and documented recruitment workflow</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-bold">02</p>
                <p className="mt-2 text-white/80">Applicant-centered communication and support</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-bold">03</p>
                <p className="mt-2 text-white/80">DMW-accredited and compliance-oriented positioning</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-bold">04</p>
                <p className="mt-2 text-white/80">Preparation support through deployment stage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Inquiry</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Start your journey toward overseas employment</h2>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Contact us to learn more about available opportunities, qualifications, and the recruitment process. Our team is here to help you move forward with clarity and confidence.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              Replace this area with your final office address, DMW license or accreditation details, email address, contact numbers, and office hours before going live.
            </div>
          </div>

          <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none" placeholder="Full Name" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none" placeholder="Email Address" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none" placeholder="Preferred Job Category" />
            <textarea className="min-h-[130px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none" placeholder="Tell us about your experience or inquiry" />

            <div className="space-y-3">
              <label className="text-sm text-white/70">Upload Passport</label>
              <input
                type="file"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white file:mr-4 file:rounded-xl file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-900"
              />

              <label className="text-sm text-white/70">Upload Resume / CV</label>
              <input
                type="file"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white file:mr-4 file:rounded-xl file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-900"
              />
            </div>

            <button className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:scale-[1.01]">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-semibold text-slate-900">Generic Recruitment Agency</p>
            <p>DMW-registered and accredited placement and recruitment agency website template.</p>
          </div>
          <p>© 2026 Generic Recruitment Agency. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
