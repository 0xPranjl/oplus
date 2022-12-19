import React from "react";
import "./Brands.css";
import { Icon } from '@iconify/react';
const Brands = (props) => {
  return (
 
      <div className="black">
      <Icon icon={props.naam} width="160" height="160" ></Icon>
      </div>
 
  );
};

export default Brands;