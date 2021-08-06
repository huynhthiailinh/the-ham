import React, { Component } from "react";
import logo from "./the_ham_logo.jpg";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="grid wide">
          <div className="row">
            <div className="col c-12 m-12 l-12 header-wrapper">
              <div className="the-ham-logo">
                <img src={logo} alt="the ham logo" />
              </div>
              <div className="navbar-search-wrapper">
                <div id="navigation">
                  <a href="#" className="active">
                    Home
                  </a>
                  <div className="space" />
                  <a href="#about-container">About</a>
                  <div className="space" />
                  <a href="#feature-container">Skills</a>
                  <div className="space" />
                  <a href="#service-container">Service</a>
                  <div className="space" />
                  <a href="#work">Work</a>
                  <div className="space" />
                  <a href="#price">Testimonial</a>
                  <div className="space" />
                  <a href="#blog">Blog</a>
                  <div className="space" />
                  <a href="#team-wrapper">Team</a>
                  <div className="space" />
                  <a href="#contact">Contact</a>
                </div>
                <div className="search-wrapper">
                  <i className="fas fa-search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
