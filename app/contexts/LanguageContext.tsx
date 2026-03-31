"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'da' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  da: {
    // Navigation
    'nav.about': 'Om Forsøget',
    'nav.how': 'Sådan Deltager Du',
    'nav.team': 'Forskerne',
    'nav.enroll': 'Tilmeld Interesse',

    // Hero Section
    'hero.subtitle': 'CLARA Forsøget · Region Syddanmark',
    'hero.title': 'CLARA Forsøget',
    'hero.headline': 'Ny behandling mod ADHD',
    'hero.intro': 'Prøv en innovativ lyslampe derhjemme og bidrag til banebrydende forskning.',
    'hero.hook': 'Kæmper du med fokus, impulsivitet eller hverdagen?',
    'hero.hook.answer': 'Det er præcis det, vi ønsker at hjælpe med.',
    'hero.hook.pill1': 'Bedre fokus',
    'hero.hook.pill2': 'Mere overskud',
    'hero.hook.pill3': 'Lettere hverdag',
    'hero.intro2.pre': 'Det er',
    'hero.intro2.bold1': 'enkelt',
    'hero.intro2.mid': 'at deltage — og det er',
    'hero.intro2.bold2': 'helt gratis',
    'hero.cta.primary': 'Tilmeld dig',
    'hero.cta.secondary': 'Sådan foregår det',
    'hero.badge.free': 'Gratis at deltage',
    'hero.badge.home': 'Derhjemme',
    'hero.badge.time': '1 time/dag',
    'hero.badge.nomeds': 'Ingen medicin',

    // Quick Benefits Strip
    'benefits.strip.title': 'Hvad får du ud af det?',
    'benefits.strip.subtitle': 'Her er hvad det konkret betyder for dig at deltage',
    'benefits.b1.title': 'Helt gratis',
    'benefits.b1.desc': 'Ingen betaling eller skjulte krav',
    'benefits.b2.title': 'Behandling hjemmefra',
    'benefits.b2.desc': 'Brug lyslampen i din egen stue',
    'benefits.b3.title': '1 time om dagen',
    'benefits.b3.desc': 'Mens du ser TV, arbejder ved computeren eller læser – ingen spildt tid.',
    'benefits.b4.title': 'Faglig ADHD-vurdering',
    'benefits.b4.desc': 'Grundig vurdering af specialister',

    // How it works
    'how.label': 'Trin for Trin',
    'how.title': 'Sådan Deltager Du',
    'how.step1.title': 'Tilmeld Interesse',
    'how.step1.desc': 'Udfyld formularen. Vi ringer dig op inden for få dage.',
    'how.step2.title': 'Screening',
    'how.step2.desc': 'Et kort møde hvor vi tjekker om forsøget passer til dig.',
    'how.step3.title': '12 Ugers Brug',
    'how.step3.desc': 'Du bruger lyslampen derhjemme ca. 1 time dagligt.',
    'how.step3.bonus': 'Med mulighed for 12 måneder gratis brug efter studiet.',
    'how.step4.title': 'Opfølgning',
    'how.step4.desc': 'Opfølgningsbesøg efter behandlingsperioden.',

    // Benefits (detail, used in how-section)
    'benefits.title': 'Hvad Får Du?',
    'benefits.item1': 'Gratis adgang til innovativ behandling',
    'benefits.item2': 'Grundig ADHD-vurdering af specialister',
    'benefits.item3': 'Løbende støtte og opfølgning',
    'benefits.item4': 'Bidrag til forskning der hjælper andre',
    'benefits.item5': 'Fuldfører du studiet, kan du fortsætte med lampen gratis i 12 måneder',

    // Important info
    'important.title': 'Vigtigt at Vide',
    'important.intro': 'Dette er et',
    'important.intro.bold': 'randomiseret, placebokontrolleret',
    'important.intro.cont': 'forsøg. Det betyder:',
    'important.item1': 'Halvdelen af deltagerne får aktiv lysterapi',
    'important.item2': 'Halvdelen får en placebo-enhed (uden aktiv behandling)',
    'important.item3': 'Hverken du eller forskerne ved hvilken gruppe du er i',
    'important.item4': 'Dette design sikrer pålidelige, videnskabelige resultater',
    'important.note': 'Du kan til enhver tid trække dig fra forsøget uden begrundelse.',

    // Eligibility
    'eligibility.title': 'Hvem Kan Deltage?',
    'eligibility.can.title': 'Du Kan Deltage Hvis Du:',
    'eligibility.can.item1': 'Er mellem 18 og 65 år',
    'eligibility.can.item2': 'Har en ADHD-diagnose (eller stærk mistanke)',
    'eligibility.can.item3': 'Kan bruge lyslampen dagligt derhjemme',
    'eligibility.can.item4': 'Kan møde op til 3-4 besøg i Odense, Vejle eller Aabenraa',
    'eligibility.can.item5': 'Har stabil medicinering (hvis du tager medicin)',
    'eligibility.cannot.title': 'Du Kan Ikke Deltage Hvis Du:',
    'eligibility.cannot.item1': 'Har epilepsi eller er lysoverfølsom',
    'eligibility.cannot.item2': 'Er gravid eller planlægger graviditet',
    'eligibility.cannot.item3': 'Deltager i andre kliniske forsøg',
    'eligibility.cannot.item4': 'Har neurodegenerativ sygdom',
    'eligibility.cannot.item5': 'Har betydelig synsnedsættelse',
    'eligibility.note': 'Usikker på om du kan deltage?',
    'eligibility.note.bold': 'Tilmeld dig alligevel',
    'eligibility.note.cont': '— vi finder ud af det sammen.',

    // Enrollment
    'enroll.label': 'Næste Skridt',
    'enroll.title': 'Tilmeld din interesse nu',
    'enroll.intro': 'Det tager under 2 minutter. Vi kontakter dig inden for få dage.',
    'enroll.success.title': 'Tak – vi kontakter dig snart!',
    'enroll.success.p1': 'Vi har modtaget dine oplysninger og ringer dig op inden for 2-3 hverdage.',
    'enroll.success.p2': 'Har du spørgsmål? Skriv til',
    'enroll.form.disclaimer': 'Ingen forpligtelse – du kan altid sige nej.',
    'enroll.form.firstName': 'Fornavn',
    'enroll.form.lastName': 'Efternavn',
    'enroll.form.email': 'E-mail',
    'enroll.form.phone': 'Telefon (valgfrit)',
    'enroll.form.age': 'Alder',
    'enroll.form.diagnosis': 'ADHD Status',
    'enroll.form.diagnosis.placeholder': 'Vælg en mulighed...',
    'enroll.form.diagnosis.diagnosed': 'Ja, jeg har en diagnose',
    'enroll.form.diagnosis.suspected': 'Nej, men jeg har mistanke om ADHD',
    'enroll.form.diagnosis.process': 'Jeg er i udredning',
    'enroll.form.message': 'Spørgsmål eller kommentarer (valgfrit)',
    'enroll.form.submit': 'Tilmeld mig – det er gratis',
    'enroll.form.privacy': 'Dine oplysninger behandles fortroligt og bruges kun til at kontakte dig om forsøget.',

    // What is CLARA + Device (combined)
    'about.label': 'Om Forsøget',
    'about.title': 'En lyslampe mod ADHD – kan det virke?',
    'about.p1': 'Det undersøger vi i CLARA-forsøget. Lyslampen er lille, bærbar og nem at bruge derhjemme. Du kan bruge den mens du ser TV, arbejder ved computeren eller læser.',
    'about.p2': 'Behandlingen er ikke-medicinsk og foregår på dine præmisser. Forsøget ledes af erfarne forskere ved Region Syddanmark.',
    'about.device.caption': 'EVY LIGHT® – nemt at bruge derhjemme',

    // Key facts (used in about section)
    'what.facts.title': 'Nøglefakta',
    'what.facts.duration': 'Varighed:',
    'what.facts.duration.value': '12 uger med daglig brug',
    'what.facts.time': 'Tid per dag:',
    'what.facts.time.value': '1 time per dag',
    'what.facts.visits': 'Besøg:',
    'what.facts.visits.value': '3-4 gange på hospitalet',
    'what.facts.price': 'Pris:',
    'what.facts.price.value': 'Gratis at deltage',
    'what.facts.age': 'Aldersgruppe:',
    'what.facts.age.value': '18-65 år',

    // Team
    'team.label': 'Mød Forskerne',
    'team.title': 'Hvem Står Bag?',
    'team.intro': 'CLARA forsøget ledes af erfarne forskere ved Region Syddanmark med speciale i ADHD og innovativ behandling.',
    'team.publications': 'Publikationer',

    // Footer
    'footer.description': 'Et klinisk forskningsforsøg ved Region Syddanmark, der undersøger lysterapi som behandling for ADHD hos voksne.',
    'footer.shortcuts': 'Genveje',
    'footer.contact': 'Kontakt',
    'footer.copyright': '© 2025 CLARA Forsøget — Region Syddanmark',
    'footer.privacy': 'Privatlivspolitik',
    'footer.data': 'Om Persondata',
  },
  en: {
    // Navigation
    'nav.about': 'About the Study',
    'nav.how': 'How to Participate',
    'nav.team': 'Researchers',
    'nav.enroll': 'Register Interest',

    // Hero Section
    'hero.subtitle': 'Clinical Trial · Region of Southern Denmark',
    'hero.title': 'The CLARA Study',
    'hero.headline': 'New ADHD treatment – free to try',
    'hero.intro': 'Try an innovative light device at home and contribute to groundbreaking research. 1 hour a day. 12 weeks. Completely free.',
    'hero.cta.primary': 'Sign up – it\'s free',
    'hero.cta.secondary': 'How it works',
    'hero.badge.free': 'Free to participate',
    'hero.badge.home': 'At home',
    'hero.badge.time': '1 hour/day',
    'hero.badge.nomeds': 'No medication',

    // Quick Benefits Strip
    'benefits.strip.title': 'What\'s in it for you?',
    'benefits.strip.subtitle': 'Here\'s what participation concretely means for you',
    'benefits.b1.title': 'Completely free',
    'benefits.b1.desc': 'No payment or hidden requirements',
    'benefits.b2.title': 'Treatment at home',
    'benefits.b2.desc': 'Use the light device in your own living room',
    'benefits.b3.title': '1 hour a day',
    'benefits.b3.desc': 'While watching TV, working at your computer, or reading – no time wasted.',
    'benefits.b4.title': 'Expert ADHD assessment',
    'benefits.b4.desc': 'Thorough assessment by specialists',

    // How it works
    'how.label': 'Step by Step',
    'how.title': 'How to Participate',
    'how.step1.title': 'Register Interest',
    'how.step1.desc': 'Fill out the form. We\'ll call you within a few days.',
    'how.step2.title': 'Screening',
    'how.step2.desc': 'A short meeting to see if the study is right for you.',
    'how.step3.title': '12 Weeks of Use',
    'how.step3.desc': 'Use the light device at home for approx. 1 hour daily.',
    'how.step3.bonus': 'With the option of 12 months free use after the study.',
    'how.step4.title': 'Follow-up',
    'how.step4.desc': 'Follow-up visit after the treatment period.',

    // Benefits (detail)
    'benefits.title': 'What Do You Get?',
    'benefits.item1': 'Free access to innovative treatment',
    'benefits.item2': 'Thorough ADHD assessment by specialists',
    'benefits.item3': 'Ongoing support and follow-up',
    'benefits.item4': 'Contribute to research that helps others',
    'benefits.item5': 'Complete the study and keep using the device free for 12 months',

    // Important info
    'important.title': 'Important to Know',
    'important.intro': 'This is a',
    'important.intro.bold': 'randomized, placebo-controlled',
    'important.intro.cont': 'trial. This means:',
    'important.item1': 'Half of the participants receive active light therapy',
    'important.item2': 'Half receive a placebo device (without active treatment)',
    'important.item3': 'Neither you nor the researchers know which group you are in',
    'important.item4': 'This design ensures reliable, scientific results',
    'important.note': 'You can withdraw from the study at any time without giving a reason.',

    // Eligibility
    'eligibility.title': 'Who Can Participate?',
    'eligibility.can.title': 'You Can Participate If You:',
    'eligibility.can.item1': 'Are between 18 and 65 years old',
    'eligibility.can.item2': 'Have an ADHD diagnosis (or strong suspicion)',
    'eligibility.can.item3': 'Can use the light device daily at home',
    'eligibility.can.item4': 'Can attend 3-4 visits in Odense, Vejle or Aabenraa',
    'eligibility.can.item5': 'Have stable medication (if taking medication)',
    'eligibility.cannot.title': 'You Cannot Participate If You:',
    'eligibility.cannot.item1': 'Have epilepsy or are photosensitive',
    'eligibility.cannot.item2': 'Are pregnant or planning pregnancy',
    'eligibility.cannot.item3': 'Are participating in other clinical trials',
    'eligibility.cannot.item4': 'Have neurodegenerative disease',
    'eligibility.cannot.item5': 'Have significant visual impairment',
    'eligibility.note': 'Unsure if you can participate?',
    'eligibility.note.bold': 'Sign up anyway',
    'eligibility.note.cont': '— we\'ll figure it out together.',

    // Enrollment
    'enroll.label': 'Next Step',
    'enroll.title': 'Register your interest now',
    'enroll.intro': 'Takes less than 2 minutes. We\'ll contact you within a few days.',
    'enroll.success.title': 'Thank you – we\'ll be in touch!',
    'enroll.success.p1': 'We\'ve received your information and will call you within 2-3 business days.',
    'enroll.success.p2': 'Have questions? Write to',
    'enroll.form.disclaimer': 'No commitment – you can always say no.',
    'enroll.form.firstName': 'First Name',
    'enroll.form.lastName': 'Last Name',
    'enroll.form.email': 'Email',
    'enroll.form.phone': 'Phone (optional)',
    'enroll.form.age': 'Age',
    'enroll.form.diagnosis': 'ADHD Status',
    'enroll.form.diagnosis.placeholder': 'Select an option...',
    'enroll.form.diagnosis.diagnosed': 'Yes, I have a diagnosis',
    'enroll.form.diagnosis.suspected': 'No, but I suspect ADHD',
    'enroll.form.diagnosis.process': 'I am being assessed',
    'enroll.form.message': 'Questions or comments (optional)',
    'enroll.form.submit': 'Sign me up – it\'s free',
    'enroll.form.privacy': 'Your information is treated confidentially and only used to contact you about the study.',

    // What is CLARA + Device (combined)
    'about.label': 'About the Study',
    'about.title': 'A light device for ADHD – can it work?',
    'about.p1': 'That\'s what we\'re investigating in the CLARA study. The light device is small, portable, and easy to use at home. You can use it while watching TV, working at the computer, or reading.',
    'about.p2': 'The treatment is non-medicinal and happens on your terms. The study is led by experienced researchers at Region of Southern Denmark.',
    'about.device.caption': 'EVY LIGHT® – easy to use at home',

    // Key facts
    'what.facts.title': 'Key Facts',
    'what.facts.duration': 'Duration:',
    'what.facts.duration.value': '12 weeks of daily light therapy',
    'what.facts.time': 'Time per day:',
    'what.facts.time.value': 'Approx. 1 hour',
    'what.facts.visits': 'Visits:',
    'what.facts.visits.value': '3-4 times at the hospital',
    'what.facts.price': 'Price:',
    'what.facts.price.value': 'Free to participate',
    'what.facts.age': 'Age group:',
    'what.facts.age.value': '18-65 years',

    // Team
    'team.label': 'Meet the Researchers',
    'team.title': 'Who is Behind This?',
    'team.intro': 'The CLARA study is led by experienced researchers at Region of Southern Denmark specializing in ADHD and innovative treatment.',
    'team.publications': 'Publications',

    // Footer
    'footer.description': 'A clinical research trial at Region of Southern Denmark investigating light therapy as a treatment for ADHD in adults.',
    'footer.shortcuts': 'Shortcuts',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 CLARA Study — Region of Southern Denmark',
    'footer.privacy': 'Privacy Policy',
    'footer.data': 'About Personal Data',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('da');

  const t = (key: string): string => {
    const lang = translations[language] as Record<string, string>;
    return lang[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
