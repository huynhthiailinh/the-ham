import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container">
        <div className="grid">
          <div className="row">
            <div className="col c-6 m-6 l-6 left" />
            <div className="col c-6 m-6 l-6 right">
              <div className="row" id="general-title-format">
                <div className="col c-12 m-12 l-12 head-title">
                  <div className="title-wrapper">
                    <div className="title">Keep in touch</div>
                    <div className="first-line">
                      <div className="second-line" />
                    </div>
                  </div>
                </div>
                <div className="col c-12 m-12 l-12 form">
                  <div className="row">
                    <div className="col c-7 m-7 l-7 name-input">
                      <input type="text" name id placeholder="Name" />
                      <input type="email" name id placeholder="Email" />
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <input type="button" defaultValue="Send request" />
                    </div>
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
