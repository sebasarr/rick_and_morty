import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setID] = useState('');

   const handleChange = (event) => {
       setID(event.target.value)

   }
   return (  
      <div className={styles.barra}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setID('')}}>Agregar</button>
      </div>
   );
}
