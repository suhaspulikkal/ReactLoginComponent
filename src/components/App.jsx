import React from "react";
import Register from './Register';


const isRegisteredUser = false;

function App(){
  return <div className="">

  {isRegisteredUser ? <Register 
  title='Login' /> :

  <Register 
  title='Register' />
  }

  </div>
};

export default App;