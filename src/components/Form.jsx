import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props){
  return <div className="container">
  <form>
  {props.title==='Login' && <div>

  <h1>
  {props.title}
  <i className="fa-solid fa-truck-arrow-right"></i>
</h1>

  <Input 
    type = 'text'
    placeholder = 'Username'
  />
  <Input 
    type = 'text'
    placeholder = 'Password'
  />
  <Button name ={props.title} />
  </div>}

  {props.title==='Register' && <div>
  <h1>
  <i className="fa-regular fa-address-card"> </i>
  {props.title}</h1>

<Input 
  type = 'text' 
  placeholder = 'Username' 
/>
<Input 
  type = 'password'
  placeholder = 'Password'
/>
<Input 
  type = 'password'
  placeholder = 'Confirm Password' 
/>
<Button name ={props.title} />

  </div>}
  
  </form>
  </div>
}

export default Form