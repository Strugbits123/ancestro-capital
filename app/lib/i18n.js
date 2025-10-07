import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
const enTranslations = {
    heroSection: {
        title: "Financing the Latin American Energy Transition.",
        subTitle:
            "Capital solutions designed for renewable energy, EV, and sustainable infrastructure projects.",
        secondTitle: "Introducing Ancestro Green Bonds",
        secondSubTitle:
            "This is your chance to invest directly in the energy transition of a continent while securing strong, reliable returns. This is more than ROI. It’s about protecting the climate, building infrastructure, and transforming lives — one project at a time.",
    },
    greenBonds: {
        heading: "What Are Green Bonds?",
        description:
            "Green Bonds are the fastest-growing asset class in sustainable finance. Unlike traditional investments, they combine:",
        list: [
            "Attractive returns (10-12% annually).",
            "Positive impact — financing renewable energy + clean infrastructure.",
        ],
        footer:
            "With Ancestro, your investment not only earns but saves planet Earth from catastrophe",
    },
    howItWorks: {
        title: "How It Works",
        text1: "Invest in Ancestro Green Bonds.",
        text2: "Earn fixed annual returns (10–12%)",
        text3: "Invest in Ancestro Green Bonds.",
        text4: "Redeem your full principal + balloon interest at maturity (3–5 years)"
    },
    investGreenBonds: {
        title: "What You’re Investing In",
        text1: "Ancestro Green Bonds are backed by real projects across Latin America:",
        list: [
            "Solar → Long-term PPAs with creditworthy offtakers.",
            "Wind → Large-scale contracts with proven operators.",
            "Battery-as-a-Service → Backup power subscriptions.",
            "EV Charging → Building the first continent-wide fast-charge network."
        ],
        text2: "With Ancestro, your investment not only earns but saves planet Earth from catastrophe",
        list2: [
            "Assets are owned + maintained by Ancestro.",
            "Investors stay 100% passive.",
            "Monthly cash flow from projects → your returns."
        ]
    },
    portfolioAllocation: {
        title: "Portfolio Allocation",
        text: "This balance ensures both security and growth potential.",
        text1: "80% → Long-term energy contracts (stable, predictable, low risk).",
        text2: "20% → EV charging infrastructure (high upside in emerging market).",
    },
    globalExpertise: {
        title: "We combine global expertise with local execution across 18 Latin American markets.",
        text: "Ancestro Capital is represented by a team of renewable energy executives and backed by trusted partners in law, insurance, and finance.",
        btnText: "Apply Now"
    },
    learnMore: {
        title: "Ready to learn more?",
        text: "Apply now to speak directly with our investment team and receive a personal proposal.",
        btnText: "Apply Now"
    },
    form: {
        headers: ["Step 01: Personal Info", "Step 02: Investment Interest", "Step 03: Experience & Fit", "Step 04: "],
        title: "apply today to join the clean energy movement",
        fullName: "FULL NAME",
        email: "EMAIL",
        phoneNumber: "PHONE NUMBER",
        countryOfResidency: "COUNTRY OF RESIDENCY",
        // 
        InvestmentRange: {
            name: "Investment Range",
            options: ["$5k–$49k", "$50k–$99k", "$100k+"]
        },
        preferredTime: {
            name: "Preferred Term",
            options: ["3 years", "5 years", "Open to discuss"]
        },
        investTime: "How SOON ARE YOU LOOKING TO INVEST?",
        investTimeSubLabel: "(Within 30 days / 1-3 months / 3+ months)",
        individualInvestor: {
            name: "Are you investing as an individual, company, or fund?",
            options: ["INDIVIDUAL", "COMPANY", "FUND"]
        },
        investedBefore: {
            name: "Have you invested in green bonds or renewable energy before?",
            options: ["YES", "NO"]
        },
        referral: "Referral / How did you hear about Ancestro Capital? (optional)",
        accreditedInvestor: {
            name: "Are you an Accredited / Sophisticated Investor in your jurisdiction?",
            options: ["YES", "NO"]
        },
        checkAll: "(Check all that apply)",
        option1: "I acknowledge the minimum investment is $5,000 USD",
        option2: "I understand Ancestro Green Bonds are private investments with fixed 3–5 year terms and annual yields of 10–12%.",
        option3: "I would like to schedule a call with the Ancestro Capital team.",
        next: "Next",
        bookAppointment: "Submit",
    },
    footer: {
        title: "Powered by Ancestro Ecosystem",
        text1: "Address: Piso 19, 2G5F+72C, Av Paseo del Mar, Panamá, Panamá",
        text2: "Contact us: +57 300 1726236"
    }
};






// Spanish translations
const esTranslations = {
    heroSection: {
        title: "Financiando la transición energética de América Latina.",
        subTitle:
            "Soluciones de capital diseñadas para proyectos de energía renovable, vehículos eléctricos e infraestructura sostenible.",
        secondTitle: "Presentamos los Bonos Verdes de Ancestro",
        secondSubTitle:
            "Esta es tu oportunidad de invertir directamente en la transición energética de un continente mientras aseguras rendimientos sólidos y confiables.Esto es más que ROI. Se trata de proteger el clima, construir infraestructura y transformar vidas — un proyecto a la vez.",
    },
    greenBonds: {

        heading: "¿Qué son los Bonos Verdes?",
        description:
            "Los Bonos Verdes son la clase de activos de más rápido crecimiento en las finanzas sostenibles. A diferencia de las inversiones tradicionales, combinan:",
        list: [
            "Rendimientos atractivos (10-12% anuales).",
            "Impacto positivo — financiando energía renovable + infraestructura limpia.",
        ],
        footer:
            "Con Ancestro, tu inversión no solo genera ganancias sino que también salva al planeta Tierra de la catástrofe.",
    },
    howItWorks: {
        title: "Comment ça marche",
        text1: "Investissez dans les obligations vertes d’Ancestro.",
        text2: "Gagnez des rendements annuels fixes (10–12%)",
        text3: "Investissez dans les obligations vertes d’Ancestro.",
        text4: "Récupérez votre capital total + intérêts cumulés à l’échéance (3–5 ans)"
    },
    investGreenBonds: {
        title: "En Qué Estás Invirtiendo",
        text1: "Los Bonos Verdes de Ancestro están respaldados por proyectos reales en toda América Latina:",
        list: [
            "Solar → PPAs a largo plazo con compradores solventes.",
            "Eólica → Contratos a gran escala con operadores experimentados.",
            "Baterías como Servicio → Suscripciones de energía de respaldo.",
            "Carga de Vehículos Eléctricos → Construyendo la primera red de carga rápida en todo el continente."
        ],
        text2: "Con Ancestro, tu inversión no solo genera rendimientos, sino que también salva al planeta Tierra de la catástrofe.",
        list2: [
            "Los activos son propiedad y están mantenidos por Ancestro.",
            "Los inversores permanecen 100% pasivos.",
            "Flujo de caja mensual de los proyectos → tus rendimientos."
        ]
    },
    portfolioAllocation: {
        title: "Asignación de Portafolio",
        text: "Este equilibrio garantiza tanto la seguridad como el potencial de crecimiento.",
        text1: "80% → Contratos de energía a largo plazo (estables, predecibles, de bajo riesgo).",
        text2: "20% → Infraestructura de carga para vehículos eléctricos (alto potencial en un mercado emergente)."
    },
    globalExpertise: {
        title: "Combinamos experiencia global con ejecución local en 18 mercados de América Latina.",
        text: "Ancestro Capital está representado por un equipo de ejecutivos de energías renovables y respaldado por socios de confianza en derecho, seguros y finanzas.",
        btnText: "Aplica Ahora"
    },
    learnMore: {
        title: "¿Listo para saber más?",
        text: "Aplica ahora para hablar directamente con nuestro equipo de inversiones y recibir una propuesta personalizada.",
        btnText: "Aplica Ahora"
    },
    form: {
        headers: [
            "Paso 01: Información Personal",
            "Paso 02: Interés de Inversión",
            "Paso 03: Experiencia y Compatibilidad",
            "Paso 04: "
        ],
        title: "Aplica hoy para unirte al movimiento de energía limpia",
        fullName: "NOMBRE COMPLETO",
        email: "CORREO ELECTRÓNICO",
        phoneNumber: "NÚMERO DE TELÉFONO",
        countryOfResidency: "PAÍS DE RESIDENCIA",

        InvestmentRange: {
            name: "Rango de Inversión",
            options: ["$5k–$49k", "$50k–$99k", "$100k+"]
        },
        preferredTime: {
            name: "Plazo Preferido",
            options: ["3 años", "5 años", "Abierto a discutir"]
        },
        investTime: "¿CUÁN PRONTO DESEA INVERTIR?",
        investTimeSubLabel: "(Dentro de 30 días / 1-3 meses / más de 3 meses)",
        individualInvestor: {
            name: "¿Está invirtiendo como individuo, empresa o fondo?",
            options: ["INDIVIDUAL", "EMPRESA", "FONDO"]
        },
        investedBefore: {
            name: "¿Ha invertido anteriormente en bonos verdes o energía renovable?",
            options: ["SÍ", "NO"]
        },
        referral: "Referencia / ¿Cómo se enteró de Ancestro Capital? (opcional)",
        accreditedInvestor: {
            name: "¿Es un inversor acreditado / sofisticado en su jurisdicción?",
            options: ["SÍ", "NO"]
        },
        checkAll: "(Marque todo lo que corresponda)",
        option1: "Reconozco que la inversión mínima es de $5,000 USD",
        option2: "Entiendo que los Ancestro Green Bonds son inversiones privadas con plazos fijos de 3–5 años y rendimientos anuales del 10–12%.",
        option3: "Me gustaría programar una llamada con el equipo de Ancestro Capital.",
        next: "Siguiente",
        bookAppointment: "Enviar",
    },

    footer: {
        title: "Impulsado por el Ecosistema Ancestro",
        text1: "Dirección: Piso 19, 2G5F+72C, Av Paseo del Mar, Panamá, Panamá",
        text2: "Contáctanos: +57 300 1726236"
    }

};

// i18n initialization
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            es: { translation: esTranslations },
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    });

export default i18n;
