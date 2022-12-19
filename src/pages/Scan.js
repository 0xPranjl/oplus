import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
const Scan = (props) => {
    let {brand}  = useParams();
    console.log(brand);
    const [data, setData] = useState("not found");

  return (
     <div className="App">
       
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    
     </div>
   
  );
};

export default Scan;