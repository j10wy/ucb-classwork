import React from "react";

let name = "Jeff Lowy"
let nums = 8;
let thinking = "pretty cool so far..."
let noVowels = (name)=>{
  let none = '';
  for(let i=0; i<name.length; i++) {
    switch (name[i]) {
      case "a": break;
      case "e": break;
      case "i": break;
      case "o": break;
      case "u": break;
      default: none += name[i];
    }
  }
  return none;
}

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {noVowels("Jeff Lowy")}</h1>
        <h2>My name has {8} letters</h2>
        <h2>I think React {thinking}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
