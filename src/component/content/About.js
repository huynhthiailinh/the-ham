import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about-container">
        <div id="about">
          <div className="grid">
            <div className="row">
              <div className="col c-12 m-12 l-12">
                <div className="about-wrapper">
                  <div className="about-content">
                    <div className="head">
                      The ham is <span>wordpress theme</span>
                    </div>
                    <div className="middle">We are creative</div>
                    <div className="bottom">
                      Just buy and enjoy these awesome features
                    </div>
                  </div>
                  <div className="about-button">
                    <div className="left">Explore now</div>
                    <div className="right">Purchase now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="option">
          <div className="grid">
            <div className="row line">
              <div className="col c-3 m-3 l-3 green-back" />
              <div className="col c-3 m-3 l-3" />
              <div className="col c-3 m-3 l-3 green-back" />
              <div className="col c-3 m-3 l-3" />
            </div>
            <div className="row">
              <div className="col c-3 m-3 l-3 dark-green-back option-item">
                <i className="icon fas fa-hand-point-up" />
                <div className="text">Different theme option</div>
              </div>
              <div className="col c-3 m-3 l-3 green-back option-item">
                <i className="icon fas fa-gem" />
                <div className="text">Fully customizable</div>
              </div>
              <div className="col c-3 m-3 l-3 dark-green-back option-item">
                <i className="icon fas fa-lightbulb" />
                <div className="text">Unlimited support</div>
              </div>
              <div className="col c-3 m-3 l-3 green-back option-item">
                <i className="icon fas fa-laptop-code" />
                <div className="text">Responsive all device</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
