import logo from './assets/GraceAromasLogo.png';
import './App.css';
import NavBar from "./components/NavBar";


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

      </div>
    </header>
  );
}

export default App;
