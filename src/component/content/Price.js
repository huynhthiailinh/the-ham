import React, { Component } from "react";

export default class Price extends Component {
  render() {
    return (
      <div id="price" className="container">
        <div className="grid wide">
          <div className="row" id="general-title-format">
            <div className="col c-12 m-12 l-12 head-title">
              <div className="title-wrapper">
                <div className="title">Our pricing table</div>
                <div className="first-line">
                  <div className="second-line" />
                </div>
              </div>
            </div>
            <div className="col c-12 m-12 l-12 pricing-table">
              <div className="row no-margin">
                <div className="c-3 m-3 l-3 price-item">
                  <div className="price-title border">Personal</div>
                  <div className="price border">
                    $99
                    <p>/Month</p>
                  </div>
                  <div className="space border" />
                  <div className="price-part border">1 Hosting</div>
                  <div className="price-part border">2 Email marketing</div>
                  <div className="price-part border">5 Database</div>
                  <div className="price-part border">2 Design pack</div>
                  <div className="price-part border">3 Website layouts</div>
                  <div className="price-part border">5 Header style</div>
                  <div className="price-part border">3 Online store</div>
                  <div className="buy-now-button-wrapper border">
                    <div className="buy-now-button">Buy now</div>
                  </div>
                </div>
                <div className="c-3 m-3 l-3 price-item">
                  <div className="price-title border">Business</div>
                  <div className="price border">
                    $199
                    <p>/Month</p>
                  </div>
                  <div className="space border" />
                  <div className="price-part border">1 Hosting</div>
                  <div className="price-part border">2 Email marketing</div>
                  <div className="price-part border">5 Database</div>
                  <div className="price-part border">2 Design pack</div>
                  <div className="price-part border">3 Website layouts</div>
                  <div className="price-part border">5 Header style</div>
                  <div className="price-part border">3 Online store</div>
                  <div className="buy-now-button-wrapper border">
                    <div className="buy-now-button">Buy now</div>
                  </div>
                </div>
                <div className="c-3 m-3 l-3 price-item active">
                  <div className="price-title border">Professional</div>
                  <div className="price border">
                    $299
                    <p>/Month</p>
                  </div>
                  <div className="space border" />
                  <div className="price-part border">1 Hosting</div>
                  <div className="price-part border">2 Email marketing</div>
                  <div className="price-part border">5 Database</div>
                  <div className="price-part border">2 Design pack</div>
                  <div className="price-part border">3 Website layouts</div>
                  <div className="price-part border">5 Header style</div>
                  <div className="price-part border">3 Online store</div>
                  <div className="buy-now-button-wrapper border">
                    <div className="buy-now-button">Buy now</div>
                  </div>
                </div>
                <div className="c-3 m-3 l-3 price-item">
                  <div className="price-title border">Diamond</div>
                  <div className="price border">
                    $299
                    <p>/Month</p>
                  </div>
                  <div className="space border" />
                  <div className="price-part border">1 Hosting</div>
                  <div className="price-part border">2 Email marketing</div>
                  <div className="price-part border">5 Database</div>
                  <div className="price-part border">2 Design pack</div>
                  <div className="price-part border">3 Website layouts</div>
                  <div className="price-part border">5 Header style</div>
                  <div className="price-part border">3 Online store</div>
                  <div className="buy-now-button-wrapper border">
                    <div className="buy-now-button">Buy now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
