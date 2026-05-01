import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { rsvpSchema, type RsvpInput } from "@/lib/rsvp-schema";
import { FloralDecor } from "@/components/decor/FloralDecor";
import styles from "./Rsvp.module.scss";

type Status = "idle" | "sending" | "ok" | "error";

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
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Қате орын алды");
      }
      setStatus("ok");
      reset();
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
          description="Той ұйымдастыру үшін 1 қыркүйекке дейін жауап беруіңізді сұраймыз."
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

            <Input
              type="tel"
              label="Телефон (қалауыңыз бойынша)"
              placeholder="+7 (___) ___-__-__"
              {...register("phone")}
              error={errors.phone?.message}
            />

            <Textarea
              label="Тілек, аллергия немесе ескерту"
              placeholder="Қосымша ақпарат..."
              {...register("message")}
              error={errors.message?.message}
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
