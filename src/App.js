
import { Welcome} from './screen/welcome/welcome';
import { Login } from './screen/login/login';
import { Register } from './screen/register/register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';

function App() {
  return (
    
     <Router>
      <Routes>
        <Route path="/umap-website" element={<Navigate replace to="/" />} />
        <Route  path="/" element={<Welcome />} />
        <Route  path="login" element={<Login />} />
        <Route  path="register" element={<Register />} />
        
      </Routes>
    </Router>
  
  );
}

export default App;
