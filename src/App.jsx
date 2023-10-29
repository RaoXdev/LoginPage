import React from "react";
import { useState } from "react";
import { Outer,Pic,Username,Passwordbox,Password,Eye,Login } from "./styled-components/components"
import "./App.css";

function App() {

  const [urls,setUrl]=useState("https://cdn.icon-icons.com/icons2/3860/PNG/512/hide_eye_icon_238775.png");
  const [ps,setPs]=useState("password");
  function check(){
    if(ps==="password"){
      setPs("text");
      setUrl("https://static.thenounproject.com/png/4830332-200.png")
    }
    else{
      setPs("password");
      setUrl("https://cdn.icon-icons.com/icons2/3860/PNG/512/hide_eye_icon_238775.png")
    }
  }
  return (
    <>
    <Outer>
      <Pic/>
      <Username/>
      <Passwordbox>
        <Password type={ps}/>
        <Eye src={urls} onClick={check}/>
      </Passwordbox>
      <Login/>
    </Outer>
    </>
  )
}

export default App
