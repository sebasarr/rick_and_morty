import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
// Esta linea sirve para conectar nuestra app con la extension 
// REDUX DEVTOOLS DEL NAVEGADOR
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) 
    // Esta linea sirve para que podamos hacer peticiones a una Api/servidor
);


export default store;

