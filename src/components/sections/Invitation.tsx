import { Container } from "@/components/ui/Container";
import { FloralDecor } from "@/components/decor/FloralDecor";
import styles from "./Invitation.module.scss";

export function Invitation() {
  return (
    <section id="invitation" className={styles.section}>
      <span className={styles.decorTop}>
        <FloralDecor variant="branch" rotate={0} />
      </span>
      <span className={styles.decorBottom}>
        <FloralDecor variant="branch" rotate={180} />
      </span>

      <Container>
        <div className={styles.inner}>
          <p className={styles.script}>Құрметті</p>

          <p className={styles.upper}>
            АҒАЙЫН-ТУЫС, БАУЫРЛАР,<br />
            ҚҰДА-ЖЕКЖАТ,<br />
            НАҒАШЫ-ЖИЕН, БӨЛЕЛЕР,<br />
            ДОС-ЖАРАН, КӨРШІЛЕР<br />
            МЕН ӘРІПТЕСТЕР!
          </p>

          <p className={styles.script}>Сіздерді</p>

          <p className={styles.scriptNames}>
            ұлымыз <em>Айбат</em><br />
            қызымыз <em>Жұлдыздың</em>
          </p>

          <p className={styles.upper}>
            ҮЙЛЕНУ ТОЙЫНА АРНАЛҒАН<br />
            АҚ ДАСТАРХАНЫМЫЗДЫҢ<br />
            ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА<br />
            ШАҚЫРАМЫЗ!
          </p>
        </div>
      </Container>
    </section>
  );
}
