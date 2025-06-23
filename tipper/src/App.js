import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <HashRouter>        
      <Routes>      
        <Route path="/" element={<Home/>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
