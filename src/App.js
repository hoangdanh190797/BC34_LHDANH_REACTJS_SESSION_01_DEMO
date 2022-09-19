import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoCaulenhDieukien from "./Caulenhdieukien/DemoCaulenhDieukien";
import DemoCart from "./Demobaitapcarbasic/DemoCart";
import TrangChuSanPham from "./BTphone/TrangChuSanPham";

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <DemoCaulenhDieukien /> */}
      {/* <DemoCart /> */}
      <TrangChuSanPham />
    </div>
  );
}

export default App;
