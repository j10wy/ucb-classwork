import React from "react";
const styles = {
  header:{
    background: "red",
    height: "200px",
  },
  h1: {
    display:"block"
  }
  
}

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.h1}>Welcome</h1>
  </header>
);

export default Header;
