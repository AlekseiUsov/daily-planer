// styles
import styles from "./app.module.scss";

// components
import { Calendar } from "../../ui/calendar/calendar";

const App = () => {
  return (
    <div className={styles.App}>
      <Calendar />
    </div>
  );
};

export default App;
