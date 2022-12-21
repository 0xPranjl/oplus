import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import "../App.css";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
const Scan = (props) => {
    let {brand}  = useParams();
    console.log(brand);
    const [data, setData] = useState("");

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