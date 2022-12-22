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
import { Web3Button } from "@web3modal/react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {EthereumClient,modalConnectors,walletConnectProvider} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { useState } from 'react';

function App() {
  const [w3,sw3]=useState();
  const [account,saccount]=useState(localStorage.getItem("address")||"0x00");
  var web3;
  var provider = new WalletConnectProvider({
    rpc: {
      // 1: "https://cloudflare-eth.com/", 
      137: "https://polygon-rpc.com/",
    },
  });

  var connect = async () => {
    await provider.enable();

    //  Create Web3 instance
    web3 = new Web3(provider);
    sw3(web3);
    localStorage.setItem("w3",web3);
    var accounts  = await web3.eth.getAccounts(); // get all connected accounts
    var acount = accounts[0];
    saccount(acount);
    localStorage.setItem("address",acount);
    console.log(acount); // get the primary account

  }
  var dconnect = async () => {
    // Close provider session
    await provider.disconnect()
  }

  var sign = async (msg) => {
   
      return await w3.eth.personal.sign(msg, account)
      var sin=await web3.eth.personal.sign("aakriti", account);
      console.log(sin);
  }
  
  return (
  
    <>
      <Container>
      <Navbar expand="xxl" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#"><h1>Thor</h1></Navbar.Brand>
          {account=="0x00"?<button onClick={connect}>connect</button>
:<h6>{account}</h6>}
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
