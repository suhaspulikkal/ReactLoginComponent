import React from "react";

function Button(props){
  return (<div>
  <button className= {props.name +'btn'}> {props.name}</button>
  </div>
)}

export default Button;