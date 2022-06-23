import React, { Component } from "react";
import { Navbar } from "react-bootstrap/lib/";

class Navigation extends Component {
  render() {
    return (
      <div style={{padding: "16px 0px",
        borderBottom: "1px solid #e9e6e6",
        marginBottom: "28px"}}>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Nordia Stock</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
