import styles from "./Card.module.css";

function Card() {
  return (
    <>
      <h5 className={styles.especialidad}>Challenge React</h5>
      <div className={styles.Card}>
        <h4> Este challenge es una forma de aprendizaje. 
          Es un mecanismo donde podrás comprometerte
          en la resolución de un problema para poder 
          aplicar todos los conocimientos adquiridos 
          en la formación React. </h4>
      </div>
    </>
  );
}

export default Card;
