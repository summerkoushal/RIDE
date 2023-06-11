import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
