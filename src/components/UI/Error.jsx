import kuromi from "../../assets/kuromi.jpg";
import styles from "./Error.module.css";

function Error() {
  return (
    <div className={styles.error}>
      <img className={styles.kuromi} src={kuromi} />
      <div>nono</div>
    </div>
  );
}

export default Error;
