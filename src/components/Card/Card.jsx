import styles from "./Card.module.css";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.container}>
         <div className={styles.bobton}>
         <button onClick={onClose}>X</button>
         </div>
         <div className={styles.cletras}>
         <h2>{name}</h2>
         <h4>{status}</h4>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         <h2>{origin}</h2>
         </div>
         <img className={styles.image} src={image} alt={name} />
      </div>
   );
}
