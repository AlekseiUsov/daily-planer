// styles
import styles from "./plannerDescription.module.scss";

// Components
import { IconCalendar } from "./iconCalendar/iconCalendar";

export const PlannerDescription = () => {
  return (
    <div className={styles.plannerDescription}>
      <IconCalendar />
      <div className={styles.plannerDescription__text}>
        в эти дни у вас запланированы дела
      </div>
    </div>
  );
};
