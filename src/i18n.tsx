import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

interface LangOption {
    code: Lang;
    label: string;
    flag: string;
    dir: "ltr" | "rtl";
}

export const LANGUAGES: LangOption[] = [
    { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
    { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
    { code: "ar", label: "العربية", flag: "🇲🇦", dir: "rtl" },
];

const translations: Record<Lang, Record<string, string>> = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.cars": "Cars",
        "nav.whyus": "Why Us",
        "nav.reviews": "Reviews",
        "nav.faq": "FAQ",

        // Hero
        "hero.contact": "Contact Us",
        "hero.explore": "Explore Fleet",

        // About
        "about.label": "About ZiaSri car",
        "about.title1": "Your Local Travel Partner",
        "about.title2": "Since Day One",
        "about.p1": "Located in the heart of Sefrou, ZiaSri car has been providing reliable transportation solutions to both locals and tourists for years. We understand that a car is more than just a vehicle; it's your key to exploring the beautiful landscapes of Morocco.",
        "about.p2": "Our mission is simple: to offer the best car rental experience through transparent pricing, exceptionally maintained vehicles, and a 24/7 commitment to our customers' needs.",
        "about.travelers": "happy travelers",
        "about.joinedBy": "Joined by",
        "about.localExpertise": "Local Expertise",

        // Cars
        "cars.label": "Our Fleet",
        "cars.title": "Available Cars & Daily Rates",
        "cars.subtitle": "Choose from our diverse range of well-maintained vehicles. From economy city cars to spacious family SUVs.",
        "cars.perDay": "MAD / day",
        "cars.seats": "Seats",
        "cars.bookNow": "Book Now",
        "cars.whatsappMsg": "I'm interested in renting the",

        // Why Us
        "why.label": "Why ZiaSri car",
        "why.title1": "The Most Trusted Car Rental",
        "why.title2": "Service in Sefrou",
        "why.subtitle": "We pride ourselves on providing a seamless rental experience. Whether you're a local or a visitor, we make sure you have the right vehicle for your journey.",
        "why.feat1.title": "24/7 Availability",
        "why.feat1.desc": "Pick up or drop off your car at any time. We never close.",
        "why.feat2.title": "Easy WhatsApp Booking",
        "why.feat2.desc": "No complex forms. Just send us a message and book in seconds.",
        "why.feat3.title": "Well Maintained Cars",
        "why.feat3.desc": "Our fleet is regularly serviced to ensure your safety and comfort.",
        "why.feat4.title": "Transparent Pricing",
        "why.feat4.desc": "No hidden fees. What you see is what you pay.",
        "why.feat5.title": "Friendly Local Service",
        "why.feat5.desc": "We are locals who care about your experience in Sefrou.",
        "why.feat6.title": "Quick Pickup Process",
        "why.feat6.desc": "Get your keys and be on the road in less than 10 minutes.",
        "why.reviews": "Based on 29+ real reviews",

        // How it works
        "how.title": "How It Works",
        "how.subtitle": "Simple 3-step process to get you on the road.",
        "how.step1.title": "Contact Us",
        "how.step1.desc": "Reach out via WhatsApp or Call to check availability.",
        "how.step2.title": "Choose Your Car",
        "how.step2.desc": "Select the vehicle that fits your needs and budget.",
        "how.step3.title": "Pickup & Drive",
        "how.step3.desc": "Complete the quick paperwork and start your journey.",

        // Reviews
        "reviews.title": "Customer Reviews",
        "reviews.rating": "Rating",

        // Contact
        "contact.title": "Get In Touch",
        "contact.location": "Location",
        "contact.phone": "Phone",
        "contact.openHours": "Open Hours",
        "contact.directions": "Get Directions",
        "contact.whatsapp": "WhatsApp Us",

        // FAQ
        "faq.title": "Frequently Asked Questions",
        "faq.subtitle": "Everything you need to know about renting a car with us.",

        // Footer
        "footer.desc": "Your reliable partner for car rentals in Sefrou, Morocco. We provide high-quality vehicles and exceptional customer service 24/7.",
        "footer.quickLinks": "Quick Links",
        "footer.contactInfo": "Contact Info",
        "footer.open24": "Open 24 Hours",
        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.language": "Language",
    },

    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.cars": "Voitures",
        "nav.whyus": "Pourquoi nous",
        "nav.reviews": "Avis",
        "nav.faq": "FAQ",

        "hero.contact": "Contactez-nous",
        "hero.explore": "Explorer la flotte",

        "about.label": "À propos de ZiaSri car",
        "about.title1": "Votre partenaire de voyage local",
        "about.title2": "Depuis le premier jour",
        "about.p1": "Situé au cœur de Sefrou, ZiaSri car fournit des solutions de transport fiables aux habitants et aux touristes depuis des années. Nous comprenons qu'une voiture est plus qu'un véhicule ; c'est votre clé pour explorer les magnifiques paysages du Maroc.",
        "about.p2": "Notre mission est simple : offrir la meilleure expérience de location de voitures grâce à des prix transparents, des véhicules exceptionnellement entretenus et un engagement 24h/24 envers les besoins de nos clients.",
        "about.travelers": "voyageurs satisfaits",
        "about.joinedBy": "Rejoint par",
        "about.localExpertise": "Expertise locale",

        "cars.label": "Notre flotte",
        "cars.title": "Voitures disponibles et tarifs journaliers",
        "cars.subtitle": "Choisissez parmi notre gamme diversifiée de véhicules bien entretenus. Des petites citadines économiques aux SUV familiaux spacieux.",
        "cars.perDay": "MAD / jour",
        "cars.seats": "Places",
        "cars.bookNow": "Réserver",
        "cars.whatsappMsg": "Je suis intéressé par la location de",

        "why.label": "Pourquoi ZiaSri car",
        "why.title1": "Le service de location de voitures",
        "why.title2": "le plus fiable à Sefrou",
        "why.subtitle": "Nous sommes fiers de fournir une expérience de location sans faille. Que vous soyez local ou visiteur, nous nous assurons que vous ayez le bon véhicule pour votre voyage.",
        "why.feat1.title": "Disponibilité 24h/24",
        "why.feat1.desc": "Récupérez ou déposez votre voiture à tout moment. Nous ne fermons jamais.",
        "why.feat2.title": "Réservation WhatsApp facile",
        "why.feat2.desc": "Pas de formulaires complexes. Envoyez-nous un message et réservez en quelques secondes.",
        "why.feat3.title": "Voitures bien entretenues",
        "why.feat3.desc": "Notre flotte est régulièrement entretenue pour assurer votre sécurité et votre confort.",
        "why.feat4.title": "Prix transparents",
        "why.feat4.desc": "Pas de frais cachés. Ce que vous voyez est ce que vous payez.",
        "why.feat5.title": "Service local amical",
        "why.feat5.desc": "Nous sommes des locaux qui se soucient de votre expérience à Sefrou.",
        "why.feat6.title": "Prise en charge rapide",
        "why.feat6.desc": "Obtenez vos clés et prenez la route en moins de 10 minutes.",
        "why.reviews": "Basé sur 29+ avis réels",

        "how.title": "Comment ça marche",
        "how.subtitle": "Un processus simple en 3 étapes pour prendre la route.",
        "how.step1.title": "Contactez-nous",
        "how.step1.desc": "Contactez-nous via WhatsApp ou par téléphone pour vérifier la disponibilité.",
        "how.step2.title": "Choisissez votre voiture",
        "how.step2.desc": "Sélectionnez le véhicule qui correspond à vos besoins et votre budget.",
        "how.step3.title": "Récupérez et conduisez",
        "how.step3.desc": "Complétez les formalités rapides et commencez votre voyage.",

        "reviews.title": "Avis clients",
        "reviews.rating": "Note",

        "contact.title": "Contactez-nous",
        "contact.location": "Emplacement",
        "contact.phone": "Téléphone",
        "contact.openHours": "Heures d'ouverture",
        "contact.directions": "Obtenir l'itinéraire",
        "contact.whatsapp": "WhatsApp",

        "faq.title": "Questions fréquemment posées",
        "faq.subtitle": "Tout ce que vous devez savoir sur la location de voiture chez nous.",

        "footer.desc": "Votre partenaire fiable pour la location de voitures à Sefrou, Maroc. Nous fournissons des véhicules de haute qualité et un service client exceptionnel 24h/24.",
        "footer.quickLinks": "Liens rapides",
        "footer.contactInfo": "Coordonnées",
        "footer.open24": "Ouvert 24h/24",
        "footer.rights": "Tous droits réservés.",
        "footer.privacy": "Politique de confidentialité",
        "footer.terms": "Conditions d'utilisation",
        "footer.language": "Langue",
    },

    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "من نحن",
        "nav.cars": "السيارات",
        "nav.whyus": "لماذا نحن",
        "nav.reviews": "التقييمات",
        "nav.faq": "أسئلة شائعة",

        "hero.contact": "اتصل بنا",
        "hero.explore": "استكشف الأسطول",

        "about.label": "عن ZiaSri car",
        "about.title1": "شريكك المحلي في السفر",
        "about.title2": "منذ اليوم الأول",
        "about.p1": "يقع ZiaSri car في قلب صفرو، ويقدم حلول نقل موثوقة للسكان المحليين والسياح منذ سنوات. نحن نفهم أن السيارة أكثر من مجرد وسيلة نقل؛ إنها مفتاحك لاستكشاف المناظر الطبيعية الجميلة في المغرب.",
        "about.p2": "مهمتنا بسيطة: تقديم أفضل تجربة تأجير سيارات من خلال أسعار شفافة، وسيارات محفوظة بشكل استثنائي، والتزام على مدار الساعة باحتياجات عملائنا.",
        "about.travelers": "مسافر سعيد",
        "about.joinedBy": "انضم إلينا",
        "about.localExpertise": "خبرة محلية",

        "cars.label": "أسطولنا",
        "cars.title": "السيارات المتاحة والأسعار اليومية",
        "cars.subtitle": "اختر من مجموعتنا المتنوعة من السيارات المحفوظة جيداً. من سيارات المدينة الاقتصادية إلى سيارات الدفع الرباعي العائلية.",
        "cars.perDay": "درهم / يوم",
        "cars.seats": "مقاعد",
        "cars.bookNow": "احجز الآن",
        "cars.whatsappMsg": "أنا مهتم بتأجير",

        "why.label": "لماذا ZiaSri car",
        "why.title1": "خدمة تأجير السيارات",
        "why.title2": "الأكثر ثقة في صفرو",
        "why.subtitle": "نحن نفخر بتقديم تجربة تأجير سلسة. سواء كنت محلياً أو زائراً، نتأكد من أن لديك السيارة المناسبة لرحلتك.",
        "why.feat1.title": "متاح 24/7",
        "why.feat1.desc": "استلم أو أعد سيارتك في أي وقت. لا نغلق أبداً.",
        "why.feat2.title": "حجز سهل عبر واتساب",
        "why.feat2.desc": "بدون نماذج معقدة. فقط أرسل لنا رسالة واحجز في ثوانٍ.",
        "why.feat3.title": "سيارات محفوظة جيداً",
        "why.feat3.desc": "يتم صيانة أسطولنا بانتظام لضمان سلامتك وراحتك.",
        "why.feat4.title": "أسعار شفافة",
        "why.feat4.desc": "لا رسوم مخفية. ما تراه هو ما تدفعه.",
        "why.feat5.title": "خدمة محلية ودية",
        "why.feat5.desc": "نحن محليون نهتم بتجربتك في صفرو.",
        "why.feat6.title": "عملية استلام سريعة",
        "why.feat6.desc": "احصل على مفاتيحك وانطلق في أقل من 10 دقائق.",
        "why.reviews": "بناءً على 29+ تقييم حقيقي",

        "how.title": "كيف يعمل",
        "how.subtitle": "عملية بسيطة من 3 خطوات للانطلاق على الطريق.",
        "how.step1.title": "اتصل بنا",
        "how.step1.desc": "تواصل معنا عبر واتساب أو اتصل للتحقق من التوفر.",
        "how.step2.title": "اختر سيارتك",
        "how.step2.desc": "اختر السيارة التي تناسب احتياجاتك وميزانيتك.",
        "how.step3.title": "استلم وانطلق",
        "how.step3.desc": "أكمل الأوراق السريعة وابدأ رحلتك.",

        "reviews.title": "تقييمات العملاء",
        "reviews.rating": "التقييم",

        "contact.title": "تواصل معنا",
        "contact.location": "الموقع",
        "contact.phone": "الهاتف",
        "contact.openHours": "ساعات العمل",
        "contact.directions": "احصل على الاتجاهات",
        "contact.whatsapp": "واتساب",

        "faq.title": "الأسئلة الشائعة",
        "faq.subtitle": "كل ما تحتاج معرفته عن تأجير السيارات معنا.",

        "footer.desc": "شريكك الموثوق لتأجير السيارات في صفرو، المغرب. نقدم سيارات عالية الجودة وخدمة عملاء استثنائية على مدار الساعة.",
        "footer.quickLinks": "روابط سريعة",
        "footer.contactInfo": "معلومات الاتصال",
        "footer.open24": "مفتوح 24 ساعة",
        "footer.rights": "جميع الحقوق محفوظة.",
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "footer.language": "اللغة",
    },
};

interface I18nContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => string;
    dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType>({
    lang: "en",
    setLang: () => { },
    t: (key) => key,
    dir: "ltr",
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem("lang") as Lang;
        return saved && ["en", "fr", "ar"].includes(saved) ? saved : "en";
    });

    const handleSetLang = (newLang: Lang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    const t = (key: string): string => {
        return translations[lang][key] || translations["en"][key] || key;
    };

    const dir = LANGUAGES.find((l) => l.code === lang)?.dir || "ltr";

    return (
        <I18nContext.Provider value={{ lang, setLang: handleSetLang, t, dir }}>
            {children}
        </I18nContext.Provider>
    );
};
