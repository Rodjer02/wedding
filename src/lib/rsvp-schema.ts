import { z } from "zod";

export const rsvpSchema = z.object({
  name: z
    .string()
    .min(2, "Аты-жөніңізді жазыңыз")
    .max(80, "Тым ұзын"),
  attending: z.enum(["yes", "no", "maybe"], {
    errorMap: () => ({ message: "Жауапты таңдаңыз" }),
  }),
  guests: z
    .number({ invalid_type_error: "Сан енгізіңіз" })
    .int()
    .min(1, "Кем дегенде 1")
    .max(10, "Көп дегенде 10"),
});

export type RsvpInput = z.infer<typeof rsvpSchema>;
