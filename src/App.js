import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pruebas from './componentes/Pruebas';
import Navbar from './componentes/Navbar';
import CartWidget from './componentes/CartWidget';
import ItemListContainer from './componentes/ItemListContainer';
import UserProfile from './componentes/UserProfile';
function App() {
  return (
   <>
   <Navbar/>
   <ItemListContainer/>
   
   </>
  );
}

export default App;
