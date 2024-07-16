import styles from "./BotonHeader.module.css";

function BotonHeader({ text }) {
  return (
    <button className={styles.BotonEncabezado}>
      {text}
    </button>
  );
}

export default BotonHeader;
