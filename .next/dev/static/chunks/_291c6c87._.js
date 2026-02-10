(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const translations = {
    da: {
        // Navigation
        'nav.about': 'Om Forsøget',
        'nav.how': 'Sådan Deltager Du',
        'nav.team': 'Forskerne',
        'nav.enroll': 'Tilmeld Interesse',
        // Hero Section
        'hero.subtitle': 'Klinisk Forskningsstudie ved Syddansk Universitet',
        'hero.title': 'CLARA Forsøget',
        'hero.headline': 'Pulserende lys i gamma-frekvensområdet som ny behandling mod ADHD-symptomer hos Voksne',
        'hero.intro': 'Vi undersøger en ny, lysbaseret behandlingsmetode, som kan hjælpe voksne med ADHD med at forbedre koncentration og livskvalitet',
        'hero.contribution': 'Din deltagelse bidrager til vigtig forskning, der kan forme fremtidens behandling af ADHD hos voksne.',
        'hero.cta.primary': 'Er dette noget for dig?',
        'hero.cta.secondary': 'Sådan foregår det',
        // What is CLARA
        'what.label': 'Kort Fortalt',
        'what.title': 'Hvad handler CLARA om?',
        'what.p1': 'CLARA er et klinisk forsøg, der undersøger om',
        'what.p1.bold': 'gamma-neurostimulering via lys',
        'what.p1.cont': 'kan forbedre opmærksomhed og daglig funktion hos voksne med ADHD.',
        'what.p2': 'Behandlingen er',
        'what.p2.bold': 'ikke-medicinsk',
        'what.p2.cont': 'og foregår i dit eget hjem med en lille, bærbar lysenhed. Teknologien bruger usynlig spektral flimmer for at minimere ubehag.',
        'what.p3': 'Forsøget ledes af forskere ved Syddansk Universitet og følger strenge videnskabelige standarder for klinisk forskning.',
        'what.facts.title': 'Nøglefakta',
        'what.facts.duration': 'Varighed:',
        'what.facts.duration.value': '12 uger med daglig lysterapi',
        'what.facts.time': 'Tid per dag:',
        'what.facts.time.value': 'Ca. 1 time',
        'what.facts.visits': 'Besøg:',
        'what.facts.visits.value': '3-4 gange på hospitalet',
        'what.facts.price': 'Pris:',
        'what.facts.price.value': 'Gratis at deltage',
        'what.facts.age': 'Aldersgruppe:',
        'what.facts.age.value': '18-65 år',
        // Device Section
        'device.label': 'Teknologien',
        'device.title': 'EVY LIGHT® Enheden',
        'device.p1': 'Lysenheden er udviklet af',
        'device.p1.cont': 'og bruger patenteret',
        'device.p1.tech': 'invisible spectral flicker',
        'device.p1.cont2': '-teknologi til at levere gamma-neurostimulering uden den synlige flimren, der normalt er forbundet med lysterapi.',
        'device.p2': 'Enheden er designet til daglig brug i hjemmet og er nem at betjene. Du kan nemt bruge den',
        'device.p2.bold': 'samtidig med andre aktiviteter',
        'device.p2.cont': '— læs en bog, tjek din telefon, arbejd ved computeren eller se TV mens behandlingen foregår.',
        'device.feature1': 'Kompakt og bærbar design',
        'device.feature2': 'Minimal synlig flimmer',
        'device.feature3': '40 Hz gamma-stimulering',
        'device.caption1': 'EVY LIGHT® enheden fra',
        'device.caption2': 'Behandlingen kan nemt integreres i din hverdag',
        // How it works
        'how.label': 'Trin for Trin',
        'how.title': 'Sådan Deltager Du',
        'how.step1.title': 'Tilmeld Interesse',
        'how.step1.desc': 'Udfyld formularen nederst. Vi kontakter dig inden for få dage.',
        'how.step2.title': 'Screening',
        'how.step2.desc': 'Et kort møde hvor vi vurderer om forsøget passer til dig.',
        'how.step3.title': '12 Ugers Behandling',
        'how.step3.desc': 'Du bruger lysenheden derhjemme ca. 1 time dagligt.',
        'how.step4.title': 'Afslutning',
        'how.step4.desc': 'Evalueringsbesøg og tilbagemelding om dine resultater.',
        // Benefits
        'benefits.title': 'Hvad Får Du?',
        'benefits.item1': 'Gratis adgang til ny, innovativ behandling',
        'benefits.item2': 'Grundig ADHD-vurdering af specialister',
        'benefits.item3': 'Tæt opfølgning og støtte gennem hele forløbet',
        'benefits.item4': 'Bidrag til forskning der kan hjælpe andre med ADHD',
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
        'eligibility.can.item3': 'Kan bruge lysenheden dagligt derhjemme',
        'eligibility.can.item4': 'Kan møde op til 3-4 besøg i Odense',
        'eligibility.can.item5': 'Har stabil medicinering (hvis du tager medicin)',
        'eligibility.cannot.title': 'Du Kan Ikke Deltage Hvis Du:',
        'eligibility.cannot.item1': 'Har epilepsi eller er lysoverfølsom',
        'eligibility.cannot.item2': 'Er gravid eller planlægger graviditet',
        'eligibility.cannot.item3': 'Deltager i andre kliniske forsøg',
        'eligibility.cannot.item4': 'Har neurodegenerativ eller neuroplastisk sygdom',
        'eligibility.cannot.item5': 'Har betydelig synsnedsættelse',
        'eligibility.note': 'Usikker på om du kan deltage?',
        'eligibility.note.bold': 'Udfyld interesseformularen alligevel',
        'eligibility.note.cont': '— vi afklarer det sammen.',
        // Team
        'team.label': 'Mød Forskerne',
        'team.title': 'Hvem Står Bag?',
        'team.intro': 'CLARA forsøget ledes af erfarne forskere ved Syddansk Universitet med speciale i ADHD og innovativ behandling.',
        'team.publications': 'Publikationer',
        // Enrollment
        'enroll.label': 'Næste Skridt',
        'enroll.title': 'Tilmeld Din Interesse',
        'enroll.intro': 'Udfyld formularen — det tager under 2 minutter. Vi kontakter dig for en uforpligtende samtale om forsøget.',
        'enroll.success.title': 'Tak for Din Interesse!',
        'enroll.success.p1': 'Vi har modtaget dine oplysninger. En fra vores team kontakter dig inden for 2-3 hverdage for at fortælle mere om forsøget.',
        'enroll.success.p2': 'Har du spørgsmål i mellemtiden? Skriv til',
        'enroll.form.disclaimer': 'Dette er kun en interessetilkendegivelse — du forpligter dig ikke til noget ved at udfylde formularen.',
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
        'enroll.form.submit': 'Send min interesse',
        'enroll.form.privacy': 'Dine oplysninger behandles fortroligt og bruges kun til at kontakte dig om forsøget. Du kan til enhver tid bede om at få dem slettet.',
        // Footer
        'footer.description': 'Et klinisk forskningsforsøg ved Syddansk Universitet, der undersøger lysterapi som behandling for ADHD hos voksne.',
        'footer.shortcuts': 'Genveje',
        'footer.contact': 'Kontakt',
        'footer.copyright': '© 2024 CLARA Forsøget — Syddansk Universitet',
        'footer.privacy': 'Privatlivspolitik',
        'footer.data': 'Om Persondata'
    },
    en: {
        // Navigation
        'nav.about': 'About the Study',
        'nav.how': 'How to Participate',
        'nav.team': 'Researchers',
        'nav.enroll': 'Register Interest',
        // Hero Section
        'hero.subtitle': 'Clinical Research Study at the University of Southern Denmark',
        'hero.title': 'The CLARA Study',
        'hero.headline': 'Pulsed light in the gamma frequency range as a new treatment for ADHD symptoms in adults',
        'hero.intro': 'We are investigating a new light-based treatment method that can help adults with ADHD improve concentration and quality of life',
        'hero.contribution': 'Your participation contributes to important research that can shape the future treatment of ADHD in adults.',
        'hero.cta.primary': 'Is this for you?',
        'hero.cta.secondary': 'How it works',
        // What is CLARA
        'what.label': 'In Brief',
        'what.title': 'What is CLARA about?',
        'what.p1': 'CLARA is a clinical trial investigating whether',
        'what.p1.bold': 'gamma neurostimulation via light',
        'what.p1.cont': 'can improve attention and daily functioning in adults with ADHD.',
        'what.p2': 'The treatment is',
        'what.p2.bold': 'non-medicinal',
        'what.p2.cont': 'and takes place in your own home with a small, portable light device. The technology uses invisible spectral flicker to minimize discomfort.',
        'what.p3': 'The trial is led by researchers at the University of Southern Denmark and follows strict scientific standards for clinical research.',
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
        // Device Section
        'device.label': 'The Technology',
        'device.title': 'The EVY LIGHT® Device',
        'device.p1': 'The light device is developed by',
        'device.p1.cont': 'and uses patented',
        'device.p1.tech': 'invisible spectral flicker',
        'device.p1.cont2': 'technology to deliver gamma neurostimulation without the visible flicker normally associated with light therapy.',
        'device.p2': 'The device is designed for daily home use and is easy to operate. You can easily use it',
        'device.p2.bold': 'simultaneously with other activities',
        'device.p2.cont': '— read a book, check your phone, work at the computer, or watch TV while the treatment is ongoing.',
        'device.feature1': 'Compact and portable design',
        'device.feature2': 'Minimal visible flicker',
        'device.feature3': '40 Hz gamma stimulation',
        'device.caption1': 'The EVY LIGHT® device from',
        'device.caption2': 'The treatment can easily be integrated into your daily life',
        // How it works
        'how.label': 'Step by Step',
        'how.title': 'How to Participate',
        'how.step1.title': 'Register Interest',
        'how.step1.desc': 'Fill out the form below. We will contact you within a few days.',
        'how.step2.title': 'Screening',
        'how.step2.desc': 'A brief meeting where we assess if the study is right for you.',
        'how.step3.title': '12 Week Treatment',
        'how.step3.desc': 'You use the light device at home for approx. 1 hour daily.',
        'how.step4.title': 'Completion',
        'how.step4.desc': 'Evaluation visit and feedback on your results.',
        // Benefits
        'benefits.title': 'What Do You Get?',
        'benefits.item1': 'Free access to new, innovative treatment',
        'benefits.item2': 'Thorough ADHD assessment by specialists',
        'benefits.item3': 'Close follow-up and support throughout',
        'benefits.item4': 'Contribute to research that can help others with ADHD',
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
        'eligibility.can.item4': 'Can attend 3-4 visits in Odense',
        'eligibility.can.item5': 'Have stable medication (if taking medication)',
        'eligibility.cannot.title': 'You Cannot Participate If You:',
        'eligibility.cannot.item1': 'Have epilepsy or are photosensitive',
        'eligibility.cannot.item2': 'Are pregnant or planning pregnancy',
        'eligibility.cannot.item3': 'Are participating in other clinical trials',
        'eligibility.cannot.item4': 'Have neurodegenerative or neuroplastic disease',
        'eligibility.cannot.item5': 'Have significant visual impairment',
        'eligibility.note': 'Unsure if you can participate?',
        'eligibility.note.bold': 'Fill out the interest form anyway',
        'eligibility.note.cont': '— we will clarify it together.',
        // Team
        'team.label': 'Meet the Researchers',
        'team.title': 'Who is Behind This?',
        'team.intro': 'The CLARA study is led by experienced researchers at the University of Southern Denmark specializing in ADHD and innovative treatment.',
        'team.publications': 'Publications',
        // Enrollment
        'enroll.label': 'Next Step',
        'enroll.title': 'Register Your Interest',
        'enroll.intro': 'Fill out the form — it takes less than 2 minutes. We will contact you for a no-obligation conversation about the study.',
        'enroll.success.title': 'Thank You for Your Interest!',
        'enroll.success.p1': 'We have received your information. Someone from our team will contact you within 2-3 business days to tell you more about the study.',
        'enroll.success.p2': 'Have questions in the meantime? Write to',
        'enroll.form.disclaimer': 'This is only an expression of interest — you are not committing to anything by filling out the form.',
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
        'enroll.form.submit': 'Submit my interest',
        'enroll.form.privacy': 'Your information is treated confidentially and only used to contact you about the study. You can request deletion at any time.',
        // Footer
        'footer.description': 'A clinical research trial at the University of Southern Denmark investigating light therapy as a treatment for ADHD in adults.',
        'footer.shortcuts': 'Shortcuts',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2024 CLARA Study — University of Southern Denmark',
        'footer.privacy': 'Privacy Policy',
        'footer.data': 'About Personal Data'
    }
};
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('da');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/contexts/LanguageContext.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "v4uMswv8ChHFO+kKBQoiRsgUfQM=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_291c6c87._.js.map