// styles
import styles from "./app.module.scss";

// components
import { Planner } from "../../ui/planner/planner";

const App = () => {
  return (
    <div className={styles.App}>
      <Planner />
    </div>
  );
};

export default App;
