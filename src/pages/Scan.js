import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import "../App.css";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";
const Scan = (props) => {
    let {brand}  = useParams();
    console.log(brand);
    const [w3,sw3]=useState(localStorage.getItem("w3")||null);
    const [account,saccount]=useState(localStorage.getItem("address")||null);
    const [data, setData] = useState("");
useEffect(()=>{
if(data!=""){
var msg="0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
let signo=w3.eth.accounts.sign(msg,"0x097b20c119d5a38697353581382902a4be67470be319dd3d46d5c1d306979ad3");
}
},[data])
  return (
     <div className="App">
<div className="box" style={{width:200,height:200}}>
<BarcodeScannerComponent
        width={200}
        height={200}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("");
        }}
      />
      <p>{data}</p>
</div>    
     </div>
   
  );
};

export default Scan;