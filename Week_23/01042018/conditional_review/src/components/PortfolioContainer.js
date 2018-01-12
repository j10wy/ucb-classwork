import React, { Component } from "react";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let theComponent = null;
    switch (this.state.currentPage) {
      case "Home": theComponent = <Home / >
        break;
      case "About": theComponent = <About / >
        break; 
      case "Blog": theComponent = <Blog / >
        break; 
      case "Contact": theComponent = <Contact / >
        break;      
      default:
        break;
    }
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        
        {theComponent}
      </div>
    );
  }
}

export default PortfolioContainer;
