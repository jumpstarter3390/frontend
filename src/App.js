import { Container, Col, Row } from "react-bootstrap";
import Register from "./register";
import { Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Developers from "./DevelopmentTeam";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Login from "./Login"
import Usflash from "./usflash";
import Logout from "./Logout";
import "./flashcard.css";



function App() {
  return(
    <div className ="min-h-screen">
      <Header />
      {/* Declaring Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/development" element={<Developers />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usflash" element={<Usflash />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
);
};
export default App;
