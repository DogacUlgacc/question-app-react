
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home.js";
import User from "./Components/User/User.js";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
            <Routes>
              <Route exact path="/" Component={Home}></Route>
              <Route exact path="/users/:userId" Component={User}></Route>
            </Routes>
        </BrowserRouter>  
    </div>  
  );
}

export default App;
