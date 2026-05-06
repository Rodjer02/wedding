import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Field";
import { rsvpSchema, type RsvpInput } from "@/lib/rsvp-schema";
import { EMAILJS_CONFIG, isEmailConfigured } from "@/lib/emailConfig";
import { FloralDecor } from "@/components/decor/FloralDecor";
import styles from "./Rsvp.module.scss";

type Status = "idle" | "sending" | "ok" | "error";

const attendingLabel: Record<string, string> = {
  yes: "Иә, қатысамын",
  no: "Өкінішке орай, келе алмаймын",
  maybe: "Әлі белгісіз",
};

export function Rsvp() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attending: "yes", guests: 1 },
  });

  const onSubmit = async (data: RsvpInput) => {
    setStatus("sending");
    setErrorMsg("");

    if (isEmailConfigured()) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: data.name,
            attendance: attendingLabel[data.attending] || data.attending,
            guests: String(data.guests),
            to_email: EMAILJS_CONFIG.toEmail,
          },
          EMAILJS_CONFIG.publicKey
        );
        setStatus("ok");
        reset();
        return;
      } catch (e) {
        console.error("EmailJS failed:", e);
      }
    }

    try {
      const subject = encodeURIComponent(`RSVP — ${data.name}`);
      const body = encodeURIComponent(
        `Аты-жөні: ${data.name}\n` +
          `Қатысу: ${attendingLabel[data.attending] || data.attending}\n` +
          `Адам саны: ${data.guests}`
      );
      window.location.href = `mailto:${EMAILJS_CONFIG.toEmail}?subject=${subject}&body=${body}`;
      setTimeout(() => {
        setStatus("ok");
        reset();
      }, 500);
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Қате");
    }
  };

  return (
    <section id="rsvp" className={styles.section}>
      <span className={styles.decorLeft}>
        <FloralDecor variant="branch" rotate={-20} />
      </span>
      <span className={styles.decorRight}>
        <FloralDecor variant="branch" rotate={200} />
      </span>
      <Container>
        <SectionHeader
          eyebrow="Растау"
          title="Қатысуыңызды растаңыз"
          description="Той ұйымдастыру үшін 7 шілдеге дейін жауап беруіңізді сұраймыз."
        />

        {status === "ok" ? (
          <div className={styles.success} role="status">
            <h3>Рахмет!</h3>
            <p>Жауабыңыз қабылданды. Тойда көріскенше!</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              label="Аты-жөні"
              placeholder="Толық аты-жөніңіз"
              {...register("name")}
              error={errors.name?.message}
            />

            <Select
              label="Қатысасыз ба?"
              options={[
                { value: "yes", label: "Иә, қатысамын" },
                { value: "no", label: "Өкінішке орай, келе алмаймын" },
                { value: "maybe", label: "Әлі белгісіз" },
              ]}
              {...register("attending")}
              error={errors.attending?.message}
            />

            <Input
              type="number"
              min={1}
              max={10}
              label="Қанша адам"
              {...register("guests", { valueAsNumber: true })}
              error={errors.guests?.message}
            />

            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Жіберілуде..." : "Жауапты жіберу"}
            </Button>

            {status === "error" && (
              <p className={styles.errorMsg} role="alert">
                {errorMsg || "Жіберілмеді. Кейінірек көріңіз."}
              </p>
            )}
          </form>
        )}
      </Container>
    </section>
  );
}
