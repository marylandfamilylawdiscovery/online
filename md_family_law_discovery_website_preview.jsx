import React from 'react';

// Clean, compact, and VALID React component.
// Fixes footer tag mismatch by ensuring exactly one <footer> that is properly closed.
// Keeps your services, pricing, disclaimers, links, and wording.

const INTAKE_FORM_URL = "https://docs.google.com/forms/d/10U4BtOW1Fdj1WfMmij83nq2bI7VFfuCVBdfSWJF7r0U/viewform";
const CONTACT_EMAIL = "maryland.family.law.discovery@gmail.com";

const PRICE_INTERROGATORIES = 450;
const PRICE_RFP = 500;
const PRICE_BUNDLE = 899;
const PRICE_TEMPLATES = 150;
const PRICE_REVIEW_HOURLY = 250;

export default function SitePreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-white to-gray-50 text-gray-900">
      {/* ================= Header ================= */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-amber-500" aria-hidden="true" />
            <span className="font-semibold tracking-tight">Maryland Family Law Discovery</span>
          </div>
          <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-amber-500 text-white hover:bg-amber-600">Start Intake</a>
        </div>
      </header>

      <main id="main">
        {/* ================= Hero ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-amber-50/30">
          {/* Subtle sunflower / lotus outline */}
          <svg aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 h-[360px] w-[360px] opacity-10" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="60" fill="#FDE68A" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x = 100 + 85 * Math.cos(angle);
              const y = 100 + 85 * Math.sin(angle);
              return <ellipse key={i} cx={x} cy={y} rx="22" ry="40" fill="#FCD34D" transform={`rotate(${i * 30} ${x} ${y})`} />
            })}
          </svg>

          <div className="mx-auto max-w-5xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
                Limited‑Scope<br />
                <span className="text-amber-700">Legal Services for</span><br />
                <span className="whitespace-nowrap">Maryland Family Law</span> Discovery
              </h1>
              <p className="mt-4 text-gray-700">
                Virtual‑only help focused <em>exclusively</em> on discovery—understanding timelines, preparing requests, and responding with proper objections.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Who we serve:</strong> Self‑represented (pro se) Maryland family‑law litigants. If you already have a lawyer, please speak to them about your discovery strategy and needs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="#services" className="rounded-2xl px-5 py-3 bg-amber-500 text-white hover:bg-amber-600">Services</a>
                <a href="#pricing" className="rounded-2xl px-5 py-3 border border-gray-300 hover:bg-white">Pricing</a>
                <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-3 border border-amber-400 text-amber-800 hover:bg-white">Open Intake</a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow p-6 border border-gray-100">
              <h2 className="font-medium text-gray-900">What we help with</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />Understanding discovery purpose & timelines</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />Requesting discovery timely & sufficiently</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />Respond & Object to Discovery Requests</li>
              </ul>
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium text-gray-900">Limited‑scope only</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Legal services website; discovery assistance only</li>
                  <li>No courtroom representation</li>
                  <li>No attorney‑client relationship beyond this scope</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Services (condensed) ================= */}
        <section id="services" className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-medium text-gray-900">Understand Discovery</h3>
              <p className="mt-2 text-gray-700">Free plain‑language guide to purpose, scope, and timelines.</p>
              <a href="#discovery-101" className="mt-3 inline-block text-amber-700 underline">Read Discovery 101</a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-medium text-gray-900">Request Discovery</h3>
              <p className="mt-2 text-gray-700">Interrogatories & Requests for Production drafted for your case.</p>
              <a href="#pricing" className="mt-3 inline-block text-amber-700 underline">See Pricing</a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-medium text-gray-900">Respond & Object to Discovery Requests</h3>
              <p className="mt-2 text-gray-700">Templates or a 1‑on‑1 Zoom review to plan responses & objections.</p>
              <a href="#responding" className="mt-3 inline-block text-amber-700 underline">How We Help</a>
            </div>
          </div>
        </section>

        {/* ================= Discovery 101 (free, concise) ================= */}
        <section id="discovery-101" className="py-12 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-semibold">Discovery 101 (Free)</h2>
            <p className="mt-2 text-gray-700">Discovery is the exchange of information between parties; it’s generally <span className="font-medium">exchanged with the other party</span>, not filed with the court. The purpose is to gather what you need to advance or defend your claims.</p>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
              <li>Track deadlines from service and your Scheduling Order</li>
              <li>Be specific & proportional; avoid overbreadth</li>
              <li>Keep proofs of service and organized sets</li>
            </ul>
          </div>
        </section>

        {/* ================= Timeline Reminder ================= */}
        <section id="timeline" className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-semibold">IMPORTANT: Discovery Timeline</h2>
            <div className="mt-3 rounded-2xl border border-amber-300 bg-amber-50 p-4">
              <ul className="list-disc pl-5 text-gray-800 space-y-2">
                <li>Your Scheduling Order sets the <strong>discovery completion deadline</strong>.</li>
                <li>The date listed is when <strong>responses are due</strong>.</li>
                <li>Serve your requests at least <strong>30 days before</strong> the deadline (<em>+3 days if mailing</em>).</li>
                <li>Missing deadlines can have serious consequences.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= Responding Help (condensed) ================= */}
        <section id="responding" className="py-12 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-gray-900">Templates Only</h3>
                <p className="text-2xl font-semibold">${PRICE_TEMPLATES}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>Response template for served requests</li>
                <li>Includes Notice Regarding Discovery & Certificate of Service</li>
                <li>Instructions: what to file, what to serve, how, and when</li>
                <li>Free 10‑minute consult on how to respond</li>
                <li><span className="font-medium">No document review or drafting answers</span></li>
              </ul>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Get Template</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-gray-900">One‑on‑One Review (Zoom)</h3>
                <p className="text-2xl font-semibold">${PRICE_REVIEW_HOURLY}<span className="text-base font-medium">/hour</span></p>
              </div>
              <p className="mt-2 text-gray-700">Live session to walk through requests, timelines, and discuss objections, and strategy. 60‑minute minimum.</p>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>Tailored advice for your situation</li>
                <li>Follow‑up summary of key points</li>
                <li><span className="font-medium">We do not review documents or draft your answers</span></li>
              </ul>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Book a Session</a>
            </div>
          </div>
        </section>

        {/* ================= Additional Services ================= */}
        <section id="additional-services" className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-gray-900">Letter to Resolve Discovery Dispute</h3>
                <p className="text-2xl font-semibold">Starting at $100</p>
              </div>
              <p className="mt-2 text-gray-700">Good‑faith meet‑and‑confer letter inquiring about overdue responses and proposing resolution steps.</p>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Request Quote</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-gray-900">Motion to Compel Discovery</h3>
                <p className="text-2xl font-semibold">Starting at $425</p>
              </div>
              <p className="mt-2 text-gray-700">Drafting a motion to compel responses/production consistent with Maryland Rules and your Scheduling Order.</p>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Request Quote</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-gray-900">Motion for Sanctions (Failure to Respond)</h3>
                <p className="text-2xl font-semibold">Starting at $475</p>
              </div>
              <p className="mt-2 text-gray-700">Drafting a motion seeking appropriate sanctions when a party fails to respond as required by the Rules.</p>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Request Quote</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-gray-900">Opposition to Discovery Motion Filed Against You</h3>
                <p className="text-2xl font-semibold">Starting at $375</p>
              </div>
              <p className="mt-2 text-gray-700">Drafting a written opposition to discovery motions (e.g., motion to compel/sanctions) filed against you.</p>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Request Quote</a>
            </div>
          </div>
        </section>

        {/* ================= Pricing (condensed) ================= */}
        <section id="pricing" className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-medium text-gray-900">Interrogatories</h3>
              <p className="mt-1 text-3xl font-semibold">${PRICE_INTERROGATORIES}</p>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>Up to 30 tailored questions</li>
                <li>Free Certificate of Service & Notice</li>
              </ul>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Get Started</a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-medium text-gray-900">Requests for Production</h3>
              <p className="mt-1 text-3xl font-semibold">${PRICE_RFP}</p>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>Up to 30 tailored requests</li>
                <li>Free Certificate of Service & Notice</li>
              </ul>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Get Started</a>
            </div>
            <div className="rounded-2xl border border-amber-300 bg-white p-5">
              <h3 className="font-medium text-gray-900">Bundle: Both Sets</h3>
              <p className="mt-1 text-3xl font-semibold">${PRICE_BUNDLE}</p>
              <p className="text-sm text-amber-700 mt-1">Save $51 vs. separate</p>
              <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">Get Started</a>
            </div>
          </div>
        </section>

        {/* ================= Maryland Discovery Rules & Guidelines (links only) ================= */}
        <section id="rules" className="py-12 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-medium text-gray-900">Maryland Rules – Civil Procedure (Discovery)</p>
              <a href="https://mdcourts.gov/rules" target="_blank" rel="noreferrer" className="mt-2 inline-block text-amber-700 underline">Open official site</a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-medium text-gray-900">Family Law Discovery Guidelines</p>
              <a href="https://mdcourts.gov/family" target="_blank" rel="noreferrer" className="mt-2 inline-block text-amber-700 underline">Open official site</a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-medium text-gray-900">Rule 2‑432 — Motion to Compel</p>
              <a href="https://law.justia.com/codes/maryland/maryland-rules/title-2/chapter-400/rule-2-432/" target="_blank" rel="noreferrer" className="mt-2 inline-block text-amber-700 underline">Read mirror text</a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-medium text-gray-900">Rule 2‑433 — Sanctions for Discovery Failures</p>
              <a href="https://law.justia.com/codes/maryland/maryland-rules/title-2/chapter-400/rule-2-433/" target="_blank" rel="noreferrer" className="mt-2 inline-block text-amber-700 underline">Read mirror text</a>
            </div>
          </div>
        </section>

        {/* ================= About & FAQ (compact) ================= */}
        <section id="about" className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <div className="mt-4 flex items-start gap-4">
              <div aria-label="EDB" className="h-16 w-16 rounded-full border border-amber-200 bg-amber-100 text-amber-900 flex items-center justify-center font-semibold">EDB</div>
              <p className="text-gray-700"><strong>Elizabeth Danquah‑Brobby, Esq.</strong> — Licensed Maryland attorney. Has years of experience working exclusively in Maryland Family Law—from inside the judge’s chambers to the courtroom—helping you navigate the discovery process.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4 grid gap-4">
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="font-medium text-gray-900">Do you represent me in court?</p>
              <p className="mt-2 text-gray-700">No. We provide limited‑scope discovery assistance only and do not appear in court.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="font-medium text-gray-900">Can I use this if I have my own lawyer?</p>
              <p className="mt-2 text-gray-700">No. If you are represented by a lawyer, this service is not available to you. Please speak to your lawyer about your discovery strategy and needs.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="font-medium text-gray-900">What if the other side doesn’t respond?</p>
              <p className="mt-2 text-gray-700">The Rules expect good‑faith efforts to resolve discovery disputes. First, reach out in writing to the other party (or their lawyer) about status. We can help with such a letter—see Additional Services.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="font-medium text-gray-900">Do you offer discounts?</p>
              <p className="mt-2 text-gray-700">We do our best to help those in need and prioritize our pro bono services for survivors of domestic violence and those with no and low income. Email us at <a className="underline text-amber-700" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="font-medium text-gray-900">Is this run by a licensed Maryland attorney?</p>
              <div className="mt-3 flex items-start gap-3">
                <div aria-label="EDB" className="h-12 w-12 rounded-full border border-amber-200 bg-amber-100 text-amber-900 flex items-center justify-center font-semibold">EDB</div>
                <p className="text-gray-700">Yes. This service is provided by <strong>Elizabeth Danquah‑Brobby, Esq.</strong>, a licensed Maryland attorney.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Contact ================= */}
        <section id="contact" className="py-12 bg-amber-50/60">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-2xl font-semibold">Ready to begin?</h2>
            <p className="mt-2 text-gray-700">Start the secure intake to share your case details (pro se only).</p>
            <a href={INTAKE_FORM_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-2xl bg-amber-500 px-6 py-3 text-white hover:bg-amber-600">Open Intake Form</a>
            <p className="mt-3 text-sm text-gray-700">Prefer email? <a className="underline text-amber-700" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
        </section>
      </main>

      {/* ================= Footer / Disclaimer ================= */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-600 space-y-3">
          <p><strong>Disclaimer:</strong> This is a <strong>legal services website</strong> providing <strong>limited‑scope</strong> assistance with discovery in Maryland Family Law cases. This service is for <strong>self‑represented individuals only</strong>. Use of this website does not create an attorney‑client relationship beyond this limited scope. No courtroom representation or services beyond discovery are provided. If you already have a lawyer, this service is not available to you.</p>
          <p>© {new Date().getFullYear()} Maryland Family Law Discovery. All rights reserved.</p>
          <p><a href="#main" className="underline text-amber-700">Back to top</a></p>
        </div>
      </footer>
    </div>
  );
}
