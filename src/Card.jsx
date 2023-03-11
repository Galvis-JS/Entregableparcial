//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import styles from "./app.module.css";


function Card({name, color}) {
  return (
    <div className={styles.containerCard}>
      <h2 className={styles.titleCard}>Hola {name}</h2>
      <p className={styles.textCard}>Tu color favorito es el:</p>
      <p style={{background:color}} className={styles.textCardColor}>{color}</p>
    </div>
  );
}

export default Card;
