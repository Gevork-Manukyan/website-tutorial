import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
