import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from "react";

function Card({id, name, species, gender, image, onClose,  addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id ===  id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
       
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            
         <div className={styles.bobton}>
         <button onClick={() => onClose(id)}>X</button>
         </div>
         <div className={styles.cletras}>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         </div>
         <img className={styles.image} src={image} alt={name} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);