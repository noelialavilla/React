import logo from './assets/GraceAromasLogo.png';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <header className="container-fluid">
      <div className="row">
        <a className="navbar-brand" href="./index.html">
        <img src={logo} className="logo" alt="GALogo" title="Grace Aromas" />
        </a>
      </div>
      <div className="row col-12">

        <NavBar />
        <ItemListContainer greeting= "Bienvenido a Grace Aromas"/>

      </div>
    </header>
  );
}

export default App;
