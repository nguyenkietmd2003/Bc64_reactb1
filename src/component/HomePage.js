import React, { Component } from "react";
import Header from "./header.js";
import BN from "./banner.js";
import Footer from "./footer.js";
import Content from "./content.js";
export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <BN />
        </div>
        <Content />
        <Footer />
      </div>
    );
  }
}
