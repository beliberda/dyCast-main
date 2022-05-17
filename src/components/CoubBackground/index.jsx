import React from 'react';
import './style.css';
import BigCoube from "../../assets/RoundCube-Blue-big.png";
import MiddleCoube from "../../assets/RoundCube-Blue-middle.png";
import Small_1 from "../../assets/RoundCube-Blue-small-1.png";
import Small_2 from "../../assets/RoundCube-Blue-small-2.png";
import Small_3 from "../../assets/RoundCube-Blue-small-3.png";
import Vector_Group from "../../assets/Vector-group-1.svg";
import Vector_Group_2 from "../../assets/Vector-group-2.svg";
export default function CoubBack() {
  return (
   <div className="background">
     <img src={BigCoube} alt="" className="big-coube" />
     <img src={Vector_Group} alt="" className="Vector-group" />
     <img src={Vector_Group_2} alt="" className="Vector-group-2" />
     <img src={Small_1} alt="" className="small-coube" />
     <img src={Small_2} alt="" className="small-2-coube" />
     <img src={Small_3} alt="" className="small-3-coube" />
     <img src={MiddleCoube} alt="" className="middle-coube" />
   </div>
  );
}
