import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import SignIn from './pages/signin';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
