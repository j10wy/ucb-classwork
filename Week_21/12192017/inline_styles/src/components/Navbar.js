import React from "react";
const styles = {
  navbar: {
    background: "orange"
  },
  anchor: {
    float: "right"
  }
}

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar" style={styles.navbar}>
    <a href="/" style={styles.anchor}>Welcome</a>
  </nav>
);

export default Navbar;
