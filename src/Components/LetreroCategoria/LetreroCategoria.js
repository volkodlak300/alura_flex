import styles from "./LetreroCategoria.module.css";

function LetreroCategoria({ categoria }) {
  return (
    <div className={styles.letreroBanner}>
      <h6 className={styles.textoBanner}>{categoria}</h6>
    </div>
  );
}

export default LetreroCategoria;
