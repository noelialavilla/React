import logo from './assets/GraceAromasLogo.png';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <header class="container-fluid">
      <div class="row">
        <a class="navbar-brand" href="./index.html">
        <img src={logo} class="logo" alt="GALogo" title="Grace Aromas" />
        </a>
      </div>
      <div class="row col-12">

        <NavBar />
        <ItemListContainer greeting= "Bienvenido a Grace Aromas"/>

      </div>
    </header>
  );
}

export default App;
