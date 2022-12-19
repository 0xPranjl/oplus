import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import Brands from "./component/Brand";
import { Icon } from '@iconify/react';
import Scan from './pages/Scan';
import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
    <>
     {/* <h1>oplus</h1>
     <Brands naam="simple-icons:nike" click={}/>
     <Brands naam="simple-icons:adidas"/>
     <Brands naam="simple-icons:puma"/> */}
      <Container>
      <Navbar expand="xxl" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#"><h1>Oplus</h1></Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/scan/:brand" element={<Scan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
