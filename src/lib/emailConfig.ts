export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  toEmail: import.meta.env.VITE_RSVP_TO_EMAIL || "fpvn22@gmail.com",
};

export const isEmailConfigured = () => {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId &&
      EMAILJS_CONFIG.publicKey &&
      EMAILJS_CONFIG.serviceId !== "YOUR_SERVICE_ID"
  );
};
