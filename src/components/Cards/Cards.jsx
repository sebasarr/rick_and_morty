import Card from '../Card/Card.jsx';

export default function Cards({ characters }) {
   return (
      <div style={{display:"flex" , justifyContent: "space-between"}}>
         {
            characters.map(({ id, name, status, species,
            gender, origin, image }) => {
               return (
                  <Card 
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  onClose={() => alert('Emulamos que se cierra la card')}
               />
               )
         }) 
      }
   </div>
   )
}
