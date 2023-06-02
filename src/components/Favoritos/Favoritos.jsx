import Card from "../Card/Card";
import { connect } from "react-redux";

const Favoritos = ({ myFavorites }) => {
    return (
        <div>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div> 
    )
};

const mapStatetoProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStatetoProps,
    null
)(Favoritos);