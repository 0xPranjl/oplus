import React from "react";
import { Icon } from '@iconify/react';
import Brands from "../component/Brand";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  {useNavigate} from "react-router-dom";
const Home = (props) => {
    const navigate = useNavigate();

  return (
     <div className="App">
        <br></br>
        <h2>Partner brands</h2>
        <div onClick={()=>{
          navigate("/scan/nike");
        }}>
            <Brands naam="simple-icons:nike"/>
        </div>
        <div onClick={()=>{
          navigate("/scan/adidas");
        }}>
     <Brands naam="simple-icons:adidas"/>
     </div>
     <div onClick={()=>{
          navigate("/scan/puma");
        }}>
     <Brands naam="simple-icons:puma"/> 
   </div>
   </div>
  );
};

export default Home;