"use client";

import { useState } from "react";
import teamData from "./data/team.json";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
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
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefitCards = [
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('benefits.b4.title'),
      desc: t('benefits.b4.desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: t('benefits.b2.title'),
      desc: t('benefits.b2.desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('benefits.b3.title'),
      desc: t('benefits.b3.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </div>
            <span className="font-semibold text-[var(--foreground)]">{t('hero.title')}</span>
          </a>

          {/* Mobile: language switcher + enroll button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLanguage('da')}
              className={`transition-all ${language === 'da' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'}`}
              title="Dansk"
            >
              <span className="text-xl">🇩🇰</span>
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-all ${language === 'en' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'}`}
              title="English"
            >
              <span className="text-xl">🇬🇧</span>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors font-medium">{t('nav.about')}</a>
            <a href="#hvordan" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors font-medium">{t('nav.how')}</a>
            <a href="#team" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors font-medium">{t('nav.team')}</a>

            <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
              <button
                onClick={() => setLanguage('da')}
                className={`transition-all ${language === 'da' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'}`}
                title="Dansk"
              >
                <span className="text-xl">🇩🇰</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-all ${language === 'en' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'}`}
                title="English"
              >
                <span className="text-xl">🇬🇧</span>
              </button>
            </div>

            <a
              href="#enroll"
              className="px-5 py-2.5 bg-[var(--highlight)] text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
            >
              {t('nav.enroll')}
            </a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: Hero ── */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20 gradient-warm">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-[var(--accent)] text-xs font-bold uppercase tracking-[0.2em] bg-white/80 px-4 py-2 rounded-full border border-blue-100 mb-8">
              {t('hero.subtitle')}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-6 leading-tight animate-fade-in-up animation-delay-100">
            {t('hero.headline')}
          </h1>

          <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-4 animate-fade-in-up animation-delay-200">
            {t('hero.intro')}
          </p>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300 text-[var(--foreground)]">
            {t('hero.intro2.pre')}{' '}
            <span className="font-bold text-[var(--accent)]">{t('hero.intro2.bold1')}</span>{' '}
            {t('hero.intro2.mid')}{' '}
            <span className="font-bold text-[var(--highlight)]">{t('hero.intro2.bold2')}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-300">
            <a
              href="#enroll"
              className="px-8 py-4 bg-[var(--highlight)] text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 text-lg hover-lift"
            >
              {t('hero.cta.primary')}
            </a>
            <a
              href="#hvordan"
              className="px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] rounded-full font-semibold hover:bg-green-50 transition-all"
            >
              {t('hero.cta.secondary')}
            </a>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: Quick Benefits Strip ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-3">
              {t('hero.hook')}
            </h2>
            <p className="text-lg text-[var(--accent)] font-semibold mb-6">
              {t('hero.hook.answer')}
            </p>
            <p className="text-[var(--muted)]">{t('benefits.strip.subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {benefitCards.map((card, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border border-gray-100 hover-lift bg-white"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[var(--foreground)] mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--muted)]">{card.desc}</p>
                {i === 1 && (
                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {['TV', 'Computer', 'Læsning'].map((activity) => (
                      <span key={activity} className="text-xs px-2 py-1 bg-blue-50 text-[var(--accent)] rounded-full font-medium">
                        {activity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How It Works ── */}
      <section id="hvordan" className="py-24 gradient-cool">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-xs font-bold mb-3">
              {t('how.label')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              {t('how.title')}
            </h2>
            <div className="zen-divider" />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: "1",
                title: t('how.step1.title'),
                desc: t('how.step1.desc'),
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              },
              {
                step: "2",
                title: t('how.step2.title'),
                desc: t('how.step2.desc'),
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                step: "3",
                title: t('how.step3.title'),
                desc: t('how.step3.desc'),
                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                step: "4",
                title: t('how.step4.title'),
                desc: t('how.step4.desc'),
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-sm hover-lift h-full">
                  <div className="w-11 h-11 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                  {index === 2 && (
                    <p className="text-sm font-bold text-[var(--foreground)] mt-2">{t('how.step3.bonus')}</p>
                  )}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 text-[var(--accent)]/30 z-10">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Benefits + Important info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[var(--success)]">
              <h3 className="text-xl font-bold mb-5 text-[var(--foreground)]">{t('benefits.title')}</h3>
              <ul className="space-y-3">
                {['benefits.item1', 'benefits.item2', 'benefits.item3', 'benefits.item4'].map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[var(--muted)] text-sm">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">{t('important.title')}</h3>
              <p className="text-[var(--muted)] text-sm mb-4">
                {t('important.intro')} <strong>{t('important.intro.bold')}</strong> {t('important.intro.cont')}
              </p>
              <ul className="space-y-3">
                {['important.item1', 'important.item2', 'important.item3', 'important.item4'].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-[var(--muted)] text-sm">
                    <span className="text-[var(--accent)] mt-0.5">•</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <p className="text-[var(--muted)] text-sm mt-4 italic">{t('important.note')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Eligibility ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--foreground)]">
            {t('eligibility.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-2xl">
              <h4 className="font-bold text-[var(--success)] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {t('eligibility.can.title')}
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {['eligibility.can.item1', 'eligibility.can.item2', 'eligibility.can.item3', 'eligibility.can.item4', 'eligibility.can.item5'].map((key) => (
                  <li key={key} className="flex items-start gap-2">
                    <span className="text-[var(--success)] font-bold mt-0.5">✓</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-2xl">
              <h4 className="font-bold text-red-500 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t('eligibility.cannot.title')}
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {['eligibility.cannot.item1', 'eligibility.cannot.item2', 'eligibility.cannot.item3', 'eligibility.cannot.item4', 'eligibility.cannot.item5'].map((key) => (
                  <li key={key} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-0.5">✗</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-[var(--muted)] text-sm mt-8">
            {t('eligibility.note')} <strong className="text-[var(--accent)]">{t('eligibility.note.bold')}</strong> {t('eligibility.note.cont')}
          </p>
        </div>
      </section>

      {/* ── SECTION 5: Enrollment Form (MOVED UP) ── */}
      <section id="enroll" className="py-24" style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 60%, #3B82F6 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-blue-200 uppercase tracking-[0.2em] text-xs font-bold mb-3">{t('enroll.label')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('enroll.title')}
            </h2>
            <p className="text-blue-100 text-lg">{t('enroll.intro')}</p>
          </div>

          {formSubmitted ? (
            <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">{t('enroll.success.title')}</h3>
              <p className="text-[var(--muted)] mb-4">{t('enroll.success.p1')}</p>
              <p className="text-sm text-[var(--muted)]">
                {t('enroll.success.p2')}{' '}
                <a href="mailto:Ingrid.Barisic@rsyd.dk" className="text-[var(--accent)] hover:underline font-medium">
                  Ingrid.Barisic@rsyd.dk
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <p className="text-sm text-[var(--muted)] text-center mb-8 font-medium">
                {t('enroll.form.disclaimer')}
              </p>

              <div className="space-y-7">
                {/* Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setActiveField('firstName')}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[var(--accent)] transition-colors placeholder-transparent"
                      placeholder={t('enroll.form.firstName')}
                    />
                    <label
                      htmlFor="firstName"
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${formData.firstName || activeField === 'firstName'
                          ? 'top-0 text-xs text-[var(--accent)] font-semibold'
                          : 'top-4 text-[var(--muted)]'}`}
                    >
                      {t('enroll.form.firstName')}
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => setActiveField('lastName')}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[var(--accent)] transition-colors placeholder-transparent"
                      placeholder={t('enroll.form.lastName')}
                    />
                    <label
                      htmlFor="lastName"
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${formData.lastName || activeField === 'lastName'
                          ? 'top-0 text-xs text-[var(--accent)] font-semibold'
                          : 'top-4 text-[var(--muted)]'}`}
                    >
                      {t('enroll.form.lastName')}
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[var(--accent)] transition-colors placeholder-transparent"
                    placeholder={t('enroll.form.email')}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.email || activeField === 'email'
                        ? 'top-0 text-xs text-[var(--accent)] font-semibold'
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.email')}
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[var(--accent)] transition-colors placeholder-transparent"
                    placeholder={t('enroll.form.phone')}
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.phone || activeField === 'phone'
                        ? 'top-0 text-xs text-[var(--accent)] font-semibold'
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.phone')}
                  </label>
                </div>

                {/* Age */}
                <div className="relative">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={handleChange}
                    onFocus={() => setActiveField('age')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[var(--accent)] transition-colors placeholder-transparent"
                    placeholder={t('enroll.form.age')}
                  />
                  <label
                    htmlFor="age"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.age || activeField === 'age'
                        ? 'top-0 text-xs text-[var(--accent)] font-semibold'
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.age')}
                  </label>
                </div>

                {/* ADHD Status */}
                <div className="relative">
                  <label htmlFor="diagnosis" className="block text-xs text-[var(--accent)] font-semibold mb-2">
                    {t('enroll.form.diagnosis')}
                  </label>
                  <div className="relative">
                    <select
                      name="diagnosis"
                      id="diagnosis"
                      value={formData.diagnosis}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-white border-0 border-b-2 border-gray-200 focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer text-[var(--foreground)]"
                    >
                      <option value="">{t('enroll.form.diagnosis.placeholder')}</option>
                      <option value="diagnosed">{t('enroll.form.diagnosis.diagnosed')}</option>
                      <option value="suspected">{t('enroll.form.diagnosis.suspected')}</option>
                      <option value="process">{t('enroll.form.diagnosis.process')}</option>
                    </select>
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[var(--accent)] transition-colors resize-none placeholder-transparent"
                    placeholder={t('enroll.form.message')}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.message || activeField === 'message'
                        ? 'top-0 text-xs text-[var(--accent)] font-semibold'
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.message')}
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--highlight)] text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover-lift font-bold text-lg tracking-wide shadow-md shadow-orange-100"
                >
                  {t('enroll.form.submit')}
                </button>

                <p className="text-xs text-[var(--muted)] text-center">
                  {t('enroll.form.privacy')}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── SECTION 6: About + Device (combined, simplified) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-xs font-bold mb-3">
                {t('about.label')}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-6">
                {t('about.title')}
              </h2>
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-[var(--muted)] mb-6 leading-relaxed">
                {t('about.p2')}
              </p>
              {/* Key facts as simple pills */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: t('what.facts.duration'), value: t('what.facts.duration.value') },
                  { label: t('what.facts.time'), value: t('what.facts.time.value') },
                  { label: t('what.facts.visits'), value: t('what.facts.visits.value') },
                  { label: t('what.facts.age'), value: t('what.facts.age.value') },
                ].map((fact, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-[var(--muted)] font-medium">{fact.label}</p>
                    <p className="text-sm font-bold text-[var(--foreground)]">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/evy-light-in-use.jpg"
                  alt="Person der bruger EVY LIGHT® lampen hjemme"
                  className="w-full h-auto"
                  style={{ filter: 'brightness(1.05) contrast(1.02)' }}
                />
              </div>
              <p className="text-xs text-[var(--muted)] text-center">
                {t('about.device.caption')} –{' '}
                <a
                  href="https://optoceutics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Optoceutics
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Team ── */}
      <section id="team" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-xs font-bold mb-3">
              {t('team.label')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              {t('team.title')}
            </h2>
            <div className="zen-divider" />
            <p className="text-[var(--muted)] max-w-2xl mx-auto">{t('team.intro')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamData.team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift group border border-gray-100"
              >
                <div className="aspect-square relative overflow-hidden">
                  {member.hasImage ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--accent)] to-blue-400 flex items-center justify-center">
                      <span className="text-7xl font-bold text-white/90">
                        {member.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-[var(--accent)] font-bold mb-1">{member.role}</p>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">{member.name}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4">{member.title}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.slice(0, 3).map((skill: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-blue-50 text-[var(--accent)] rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-[var(--muted)]">{member.publications} {t('team.publications')}</span>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-14 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <span className="font-semibold text-[var(--foreground)]">{t('hero.title')}</span>
              </div>
              <p className="text-sm text-[var(--muted)] max-w-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[var(--foreground)]">{t('footer.shortcuts')}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><a href="#about" className="hover:text-[var(--accent)] transition-colors">{t('nav.about')}</a></li>
                <li><a href="#hvordan" className="hover:text-[var(--accent)] transition-colors">{t('nav.how')}</a></li>
                <li><a href="#team" className="hover:text-[var(--accent)] transition-colors">{t('nav.team')}</a></li>
                <li><a href="#enroll" className="hover:text-[var(--accent)] transition-colors">{t('nav.enroll')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[var(--foreground)]">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li className="font-medium text-[var(--foreground)]">Region Syddanmark</li>
                <li>Campusvej 55</li>
                <li>5230 Odense M</li>
                <li className="pt-2">
                  <a href="mailto:Ingrid.Barisic@rsyd.dk" className="hover:text-[var(--accent)] transition-colors">
                    Ingrid.Barisic@rsyd.dk
                  </a>
                </li>
                <li>
                  <a href="tel:+4561615593" className="hover:text-[var(--accent)] transition-colors">
                    Tlf: 61 61 55 93
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--accent)] transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors">{t('footer.data')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
