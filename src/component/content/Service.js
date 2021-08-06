import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <div id="service-container">
        <div id="service" className="container">
          <div className="grid wide">
            <div className="row" id="general-title-format">
              <div className="col c-12 m-12 l-12 head-title">
                <div className="title-wrapper">
                  <div className="title">Our services</div>
                  <div className="first-line">
                    <div className="second-line" />
                  </div>
                </div>
              </div>
              <div className="col c-12 m-12 l-12 navigation">
                <div className="row">
                  <div className="col c-2 m-2 l-2 nav-item active">
                    Web design
                  </div>
                  <div className="col c-2 m-2 l-2 nav-item">Graphic design</div>
                  <div className="col c-2 m-2 l-2 nav-item">Online support</div>
                  <div className="col c-2 m-2 l-2 nav-item">App design</div>
                  <div className="col c-2 m-2 l-2 nav-item">
                    Online marketing
                  </div>
                  <div className="col c-2 m-2 l-2 nav-item">Seo service</div>
                </div>
              </div>
              <div className="col c-12 m-12 l-12 content">
                <div className="row">
                  <div className="col c-2 m-2 l-2 grey-block" />
                  <div className="col c-10 m-10 l-10 text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis odio ipsum reprehenderit aperiam expedita enim ducimus
                    nulla omnis eos. Ipsa eligendi iusto quis nobis repellat cum
                    voluptate facilis aliquam corrupti. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Officia, perspiciatis,
                    repudiandae modi error atque officiis, alias autem quaerat
                    quisquam incidunt sed aliquam! Dolor eos necessitatibus
                    ipsa. Totam maiores quaerat reiciendis? Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Eligendi inventore
                    veritatis possimus alias, delectus fuga deleniti maiores
                    maxime et est explicabo dolorem animi repellat. Dolorem
                    aliquam amet recusandae omnis adipisci?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="purchase-now" className="container">
          <div className="grid wide">
            <div className="row">
              <div className="col c-12 m-12 l-12 head">
                Everything is ready. Just buy and install now
              </div>
              <div className="col c-12 m-12 l-12 middle">
                Smooth reliable, responsive ready, perfect portfolio, unique
                blog layout and many many options for you
              </div>
              <div className="col c-12 m-12 l-12 purchase-now-button-wrapper">
                <div className="purchase-now-button">Purchase now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
