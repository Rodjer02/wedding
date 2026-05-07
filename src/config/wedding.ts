export type ThemeVariant = "classic" | "floral" | "traditional";

export const themeLabels: Record<ThemeVariant, string> = {
  classic: "Классикалық",
  floral: "Гүлді",
  traditional: "Дәстүрлі",
};

export const weddingData = {
  groom: {
    name: "Айбат",
    surname: "Серікұлы",
  },
  bride: {
    name: "Жұлдыз",
    surname: "Болатқызы",
  },
  date: "2026-07-17T17:00:00+06:00",
  invitation: {
    greeting: "Қымбатты достар мен туыстар!",
    intro:
      "Біздің өміріміздегі ең қуанышты күнге Сіздерді шақырамыз — біз отбасы құрып жатырмыз.",
    closing: "Сіздердің қатысуыңыз — ең қымбат сыйлық.",
  },
  venue: {
    name: "«Ұлытау» мейрамханасы",
    address: "Қаныш Сәтбаев көшесі, 22/1, Астана қ.",
    twogis: {
      orgId: "70000001083350446",
      city: "astana",
      mapUrl: "https://2gis.kz/astana/geo/70000001083350446",
      routeUrl: "https://2gis.kz/astana/geo/70000001083350446",
    },
  },
  schedule: [
    { time: "15:30", title: "Қонақтарды күтіп алу", description: "Welcome-аймақта" },
    { time: "16:00", title: "Неке қию салты", description: "Бас залда" },
    { time: "17:00", title: "Той бастау", description: "Дәстүрлі сәлем-сауқат" },
    { time: "18:00", title: "Кешкі ас", description: "Қазақ дастарханы" },
    { time: "20:00", title: "Би кеші", description: "DJ және әртістер" },
    { time: "23:00", title: "Кеш қорытындысы", description: "Ыстық ықылас, рахмет!" },
  ],
  story: [
    {
      year: "2022",
      title: "Танысу",
      description: "Достардың үйленуі тойында бір-бірімізді алғаш кездестірдік.",
    },
    {
      year: "2023",
      title: "Алғашқы сапар",
      description: "Бірге Бурабайға саяхат — осында бәрі басталды.",
    },
    {
      year: "2025",
      title: "Ұсыныс",
      description: "Алматының таңында, Көк-Төбеде сақина сыйладым.",
    },
    {
      year: "2026",
      title: "Үйлену тойы",
      description: "Енді — ең маңызды күн. Сіздермен бірге!",
    },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200", alt: "Ерлі-зайыпты 1" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200", alt: "Ерлі-зайыпты 2" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200", alt: "Ерлі-зайыпты 3" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200", alt: "Ерлі-зайыпты 4" },
    { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200", alt: "Ерлі-зайыпты 5" },
    { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200", alt: "Ерлі-зайыпты 6" },
  ],
  dressCode: {
    title: "Киім үлгісі",
    description:
      "Той салтанатына сай — кешкі немесе салтанатты киім. Палитра түстерін қолдасаңыз — ризамыз.",
    palette: [
      { name: "Кремді", hex: "#f5ecd9" },
      { name: "Алтын", hex: "#c9a14a" },
      { name: "Зүмірет", hex: "#1f3a32" },
      { name: "Інжу", hex: "#e8e4dc" },
    ],
  },
  gifts: {
    title: "Сыйлық туралы",
    description:
      "Сіздердің қатысуыңыз — ең үлкен сыйлық. Қосымша қаражатпен қолдаймын десеңіз — реквизиттер төменде.",
    bank: "Halyk Bank",
    cardHolder: "ARMAN SERIKULY",
    cardNumber: "4400 4302 0000 0000",
    iban: "KZ00 0000 0000 0000 0000",
  },
  contacts: [
    { role: "Күйеу жігіт", name: "Арман", phone: "+7 (777) 000-00-01" },
    { role: "Қалыңдық", name: "Айгерім", phone: "+7 (777) 000-00-02" },
    { role: "Тойбасы", name: "Ербол аға", phone: "+7 (777) 000-00-03" },
  ],
} as const;

export type WeddingData = typeof weddingData;
