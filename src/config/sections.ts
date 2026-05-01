export const sectionLabels = {
  hero: "Басы",
  countdown: "Кері санақ",
  story: "Біздің тарих",
  schedule: "Тойдың бағдарламасы",
  gallery: "Фотогалерея",
  location: "Мекен-жай",
  dressCode: "Киім үлгісі",
  gifts: "Сыйлық",
  rsvp: "Растау",
  contacts: "Байланыс",
} as const;

export type SectionKey = keyof typeof sectionLabels;
