import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.container}>
         <div className={styles.bobton}>
         <button onClick={() => onClose(id)}>X</button>
         </div>
         <div className={styles.cletras}>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h4>{status}</h4>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         <h2>{origin}</h2>
         </div>
         <img className={styles.image} src={image} alt={name} />
      </div>
   );
}
