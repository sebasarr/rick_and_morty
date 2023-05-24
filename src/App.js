import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Form from './components/Form/Form';
import About from './components/About/About';
import Detail from './components/Detail/Detail';

const email = 'sebas@gmail.com'
const password = '1234567'

function App() {
   const location = useLocation();
   const navegate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navegate('/home')
      }
   };

   useEffect(() => {
      !access && navegate('/')
   }, [access]) 

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => { 
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character =>
         character.id !== Number(id))
         setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         {
            // location.pathname !== '/'
            // ? <Nav onSearch={onSearch}/>
            // : null
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
            
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/> 
            <Route path='/home' element={<Cards characters=
            {characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
