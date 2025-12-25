"use client";

import { useState } from "react";
import teamData from "./data/team.json";

export default function Home() {
  // Multi-step form state
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    diagnosis: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setFormStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setFormStep((prev) => Math.max(prev - 1, 1));

  const canProceed = () => {
    switch (formStep) {
      case 1: return formData.firstName && formData.lastName;
      case 2: return formData.email;
      case 3: return formData.age && formData.diagnosis;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[var(--card)]/90 backdrop-blur-xl border border-[var(--border)] rounded-full px-8 py-3">
        <div className="flex items-center gap-8">
          <a href="#" className="text-lg font-black tracking-tight">CLARA</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#what" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Hvad</a>
            <a href="#how" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Hvordan</a>
            <a href="#who" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Hvem</a>
            <a href="#join" className="bg-[var(--foreground)] text-[var(--background)] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[var(--accent)] transition-colors">
              Deltag
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] z-10" />
          <img src="/images/evy-light-in-use.jpg" alt="CLARA" className="w-full h-full object-cover opacity-30" />
        </div>
        
        <div className="relative z-20 min-h-screen flex flex-col justify-end pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <div className="inline-block bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
                  Klinisk Forsøg • SDU
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-6">
                  CLARA
                </h1>
                <p className="text-xl md:text-2xl text-[var(--muted)] max-w-2xl leading-relaxed">
                  Et banebrydende studie der undersøger lysbaseret behandling af ADHD-symptomer hos voksne.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <a href="#join" className="group bg-[var(--foreground)] text-[var(--background)] px-8 py-5 text-center font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-all">
                  Tilmeld Interesse <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#what" className="border border-[var(--border)] px-8 py-5 text-center font-bold uppercase tracking-wider hover:bg-[var(--card)] transition-all">
                  Læs Mere
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-4 bg-[var(--card)] border-y border-[var(--border)] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array(10).fill("GAMMA NEUROSTIMULERING • 40 HZ • GRATIS DELTAGELSE • ").map((text, i) => (
            <span key={i} className="text-sm font-medium uppercase tracking-widest text-[var(--muted)] mx-4">{text}</span>
          ))}
        </div>
      </div>

      {/* Bento Grid Section */}
      <section id="what" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 lg:row-span-2 bg-[var(--card)] border border-[var(--border)] p-12 flex flex-col justify-between min-h-[500px]">
              <div>
                <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest">01 — Hvad</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-4 mb-6">Lys Som<br />Behandling</h2>
              </div>
              <p className="text-xl text-[var(--muted)] leading-relaxed max-w-xl">
                CLARA undersøger om pulserende lys i gamma-frekvensområdet kan forbedre koncentration hos voksne med ADHD.
              </p>
            </div>
            
            <div className="lg:col-span-4 bg-[var(--accent)] p-8 flex flex-col justify-center text-white">
              <div className="text-7xl font-black">12</div>
              <div className="text-lg font-medium uppercase tracking-wider mt-2">Ugers Behandling</div>
            </div>
            
            <div className="lg:col-span-4 bg-[var(--card)] border border-[var(--border)] p-8 flex flex-col justify-center">
              <div className="text-7xl font-black">1t</div>
              <div className="text-lg font-medium uppercase tracking-wider mt-2 text-[var(--muted)]">Daglig Brug</div>
            </div>

            <div className="lg:col-span-6 bg-[var(--card)] border border-[var(--border)] p-8">
              <h3 className="text-xl font-bold uppercase mb-6">Fordele</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Ikke-medicinsk", "I eget hjem", "Gratis", "Grundig vurdering"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)]" />
                    <span className="text-[var(--muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 bg-[var(--card)] border border-[var(--border)] p-8">
              <h3 className="text-xl font-bold uppercase mb-6">Vigtig Info</h3>
              <p className="text-[var(--muted)]">Randomiseret, placebokontrolleret forsøg. Du kan trække dig når som helst.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Device - Full Bleed */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src="/images/evy-light-device.jpg" alt="EVY LIGHT" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest">Teknologien</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-4 mb-8">EVY<br />LIGHT<span className="text-[var(--accent)]">®</span></h2>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">Patenteret invisible spectral flicker teknologi fra Optoceutics.</p>
            <ul className="space-y-4">
              {["Kompakt & bærbar", "40 Hz gamma", "Nem betjening"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <span className="text-[var(--accent)] font-bold">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="how" className="py-24 px-6 bg-[var(--card)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest">02 — Hvordan</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-4">Din Rejse</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Tilmeld", desc: "Udfyld formularen" },
              { num: "02", title: "Screening", desc: "Møde i Odense" },
              { num: "03", title: "Behandling", desc: "12 uger derhjemme" },
              { num: "04", title: "Afslutning", desc: "Evaluering" },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--background)] border border-[var(--border)] p-8">
                <div className="text-[var(--accent)] text-5xl font-black mb-4">{item.num}</div>
                <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Eligibility */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-green-900/20 p-12 lg:p-24">
          <div className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">✓ Du Kan Deltage</div>
          <ul className="space-y-3 text-[var(--muted)]">
            {["18-65 år", "ADHD diagnose/mistanke", "Daglig brug mulig", "Kan møde i Odense"].map((item, i) => (
              <li key={i} className="flex items-center gap-3"><span className="text-green-400">—</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-900/20 p-12 lg:p-24">
          <div className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest mb-4">✕ Eksklusionskriterier</div>
          <ul className="space-y-3 text-[var(--muted)]">
            {["Epilepsi/lysfølsom", "Gravid", "Andre forsøg", "Synsnedsættelse"].map((item, i) => (
              <li key={i} className="flex items-center gap-3"><span className="text-[var(--accent)]">—</span>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="who" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest">03 — Hvem</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-4">Forskerne</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {teamData.team.map((member, index) => (
              <div key={member.id} className="group relative aspect-[4/5] overflow-hidden">
                {member.hasImage ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <div className="w-full h-full bg-[var(--card)] flex items-center justify-center">
                    <span className="text-8xl font-black text-[var(--muted)]">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2">{member.role}</div>
                  <h3 className="text-3xl font-black uppercase mb-2">{member.name}</h3>
                  <p className="text-[var(--muted)]">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section id="join" className="py-24 px-6 bg-[var(--card)]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest">04 — Deltag</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-4 mb-4">Tilmeld Dig</h2>
            <p className="text-[var(--muted)]">4 hurtige trin. Ingen forpligtelse.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-[var(--background)] border border-[var(--border)] p-16 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-400 text-4xl">✓</span>
              </div>
              <h3 className="text-3xl font-black uppercase mb-4">Tak!</h3>
              <p className="text-[var(--muted)] text-lg">Vi kontakter dig inden for 2-3 hverdage.</p>
            </div>
          ) : (
            <div className="bg-[var(--background)] border border-[var(--border)]">
              {/* Progress */}
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className={`flex items-center gap-2 ${step <= formStep ? 'text-[var(--foreground)]' : 'text-[var(--muted)]'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step < formStep ? 'bg-green-500 text-white' : step === formStep ? 'bg-[var(--accent)] text-white' : 'bg-[var(--card)] border border-[var(--border)]'
                      }`}>{step < formStep ? '✓' : step}</div>
                      <span className="hidden sm:inline text-sm uppercase tracking-wider">
                        {step === 1 ? 'Navn' : step === 2 ? 'Kontakt' : step === 3 ? 'ADHD' : 'Send'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-1 bg-[var(--card)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] transition-all duration-300" style={{ width: `${(formStep / 4) * 100}%` }} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {formStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold uppercase mb-6">Hvad hedder du?</h3>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Fornavn" className="w-full px-4 py-4 bg-[var(--card)] border border-[var(--border)] text-lg" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Efternavn" className="w-full px-4 py-4 bg-[var(--card)] border border-[var(--border)] text-lg" />
                  </div>
                )}
                {formStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold uppercase mb-6">Kontaktinfo</h3>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail *" className="w-full px-4 py-4 bg-[var(--card)] border border-[var(--border)] text-lg" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon (valgfrit)" className="w-full px-4 py-4 bg-[var(--card)] border border-[var(--border)] text-lg" />
                  </div>
                )}
                {formStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold uppercase mb-6">Om dig</h3>
                    <input type="number" name="age" min="18" max="65" value={formData.age} onChange={handleChange} placeholder="Alder (18-65)" className="w-full px-4 py-4 bg-[var(--card)] border border-[var(--border)] text-lg" />
                    <select name="diagnosis" value={formData.diagnosis} onChange={handleChange} className="w-full px-4 py-4 bg-[var(--card)] border border-[var(--border)] text-lg">
                      <option value="">ADHD Status...</option>
                      <option value="diagnosed">Har diagnose</option>
                      <option value="suspected">Har mistanke</option>
                      <option value="process">I udredning</option>
                    </select>
                  </div>
                )}
                {formStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold uppercase mb-6">Bekræft</h3>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Kommentarer (valgfrit)" className="w-full px-4 py-4 bg-[var(--card)] border border-[var(--border)] text-lg resize-none" />
                    <div className="bg-[var(--card)] border border-[var(--border)] p-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="text-[var(--muted)]">Navn:</span> {formData.firstName} {formData.lastName}</div>
                        <div><span className="text-[var(--muted)]">Email:</span> {formData.email}</div>
                        <div><span className="text-[var(--muted)]">Alder:</span> {formData.age}</div>
                        <div><span className="text-[var(--muted)]">Status:</span> {formData.diagnosis}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8 pt-8 border-t border-[var(--border)]">
                  <button type="button" onClick={prevStep} className={`px-6 py-3 border border-[var(--border)] font-bold uppercase hover:bg-[var(--card)] ${formStep === 1 ? 'invisible' : ''}`}>← Tilbage</button>
                  {formStep < 4 ? (
                    <button type="button" onClick={nextStep} disabled={!canProceed()} className="px-8 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold uppercase hover:bg-[var(--accent)] hover:text-white disabled:opacity-50">Næste →</button>
                  ) : (
                    <button type="submit" className="px-8 py-3 bg-[var(--accent)] text-white font-bold uppercase hover:bg-green-500">Send ✓</button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black uppercase">CLARA</div>
          <p className="text-sm text-[var(--muted)]">© 2024 CLARA — Syddansk Universitet</p>
          <a href="mailto:clara@sdu.dk" className="text-[var(--accent)]">clara@sdu.dk</a>
        </div>
      </footer>
    </div>
  );
}
