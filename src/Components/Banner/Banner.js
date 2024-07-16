import LetreroCategoria from "../LetreroCategoria/LetreroCategoria";
import Card from "../Card/Card";
import styles from "./Banner.module.css";
import banner from "./Banner.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <LetreroCategoria categoria="FRONT END"/>
      <Card/>
    </div>
  );
}

export default Banner;
