import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {

   const handeLogOut = () => {
      setAccess(false);
      // navigate('/')
   }

   return (
      <nav>
         <SearchBar onSearch={onSearch}/>
         <button>
            <Link to='about' >About</Link>  
         </button>
         <button>
         <Link to='home' >Home</Link>  
         </button>
         <button onClick={handeLogOut}>Log Out</button>
      </nav>
   )
}

export default Nav;