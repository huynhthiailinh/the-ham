import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <div id="work" className="container">
        <div className="grid wide">
          <div className="row" id="general-title-format">
            <div className="col c-12 m-12 l-12 head-title">
              <div className="title-wrapper">
                <div className="title">Our amazing work</div>
                <div className="first-line">
                  <div className="second-line" />
                </div>
              </div>
            </div>
            <div className="col c-12 m-12 l-12 navigation">
              <div className="nav-item active">All</div>
              <div className="nav-item">Graphic design</div>
              <div className="nav-item">Web design</div>
              <div className="nav-item">Landing pages</div>
              <div className="nav-item">Wordpress</div>
            </div>
            <div className="col c-12 m-12 l-12 work-wrapper">
              <div className="row">
                <div className="col c-3 m-3 l-3 work-item" />
                <div className="col c-3 m-3 l-3 work-item grey-back" />
                <div className="col c-3 m-3 l-3 work-item dark-green-back" />
                <div className="col c-3 m-3 l-3 work-item grey-back" />
                <div className="col c-3 m-3 l-3 work-item grey-back" />
                <div className="col c-3 m-3 l-3 work-item dark-green-back" />
                <div className="col c-3 m-3 l-3 work-item grey-back" />
                <div className="col c-3 m-3 l-3 work-item dark-green-back" />
                <div className="col c-3 m-3 l-3 work-item dark-green-back" />
                <div className="col c-3 m-3 l-3 work-item grey-back" />
                <div className="col c-3 m-3 l-3 work-item dark-green-back" />
                <div className="col c-3 m-3 l-3 work-item grey-back" />
              </div>
            </div>
            <div className="col c-12 m-12 l-12 load-more-button-wrapper">
              <div className="load-more-button">
                <i className="plus-icon fas fa-plus" />
                Load more
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
