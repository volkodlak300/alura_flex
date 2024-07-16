import BotonHeader from "../BotonHeader/BotonHeader";
import styles from "./Header.module.css";
import LogoAlura from "./LogoAlura.png";

function Header() {
  return (
    <header className={styles.header}>
      <h2><img src={LogoAlura} alt="Alura" /></h2>
      <BotonHeader text="HOME" />
      <BotonHeader text="NUEVO VIDEO" />
    </header>
  );
}

export default Header;
