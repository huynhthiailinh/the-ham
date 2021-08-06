import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div id="footer" className="container">
          <div className="grid wide">
            <div className="row">
              <div className="col c-3 m-3 l-3">
                <div className="title">
                  the<span>Ham</span>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, con is sectetur adipiscing elit.
                  Duls ut lob artls nulla. Vestibulum ante ipsum primis itrices
                  posuere cubilia.
                </div>
                <div className="information">
                  <div className="key">Office:</div>
                  <div className="value">
                    795 Folsom Ave, Sulte 600 San Franciso, CA 94107
                  </div>
                  <div className="space" />
                  <div className="key">
                    Phone: <span className="value">(91) 8547 632521</span>
                  </div>
                  <div className="key">
                    Fax: <span className="value">(91) 11 4752 1433</span>
                  </div>
                  <div className="key">
                    Email: <span className="value">info@canvas.com</span>
                  </div>
                </div>
              </div>
              <div className="col c-4 m-4 l-4">
                <div className="row">
                  <div className="col c-12 m-12 l-12 head">Recent post</div>
                  <div className="col c-12 m-12 l-12 post-item">
                    <div className="row">
                      <div className="col c-3 m-3 l-3 left" />
                      <div className="col c-9 m-9 l-9 right">
                        <div className="post-name">A standard image post</div>
                        <div className="post-content">
                          Lorem ipsum dolor sit amet, con sectetur adip is
                          lisicing elit, sed do.
                        </div>
                        <div className="post-date">10 March, 2015</div>
                      </div>
                    </div>
                  </div>
                  <div className="col c-12 m-12 l-12 line" />
                  <div className="col c-12 m-12 l-12 post-item">
                    <div className="row">
                      <div className="col c-3 m-3 l-3 left" />
                      <div className="col c-9 m-9 l-9 right">
                        <div className="post-name">Multi author post</div>
                        <div className="post-content">
                          Lorem ipsum dolor sit amet, con sectetur adip is
                          lisicing elit, sed do.
                        </div>
                        <div className="post-date">10 March, 2015</div>
                      </div>
                    </div>
                  </div>
                  <div className="col c-12 m-12 l-12 line" />
                  <div className="col c-12 m-12 l-12 post-item">
                    <div className="row">
                      <div className="col c-3 m-3 l-3 left" />
                      <div className="col c-9 m-9 l-9 right">
                        <div className="post-name">Multi author post</div>
                        <div className="post-content">
                          Lorem ipsum dolor sit amet, con sectetur adip is
                          lisicing elit, sed do.
                        </div>
                        <div className="post-date">10 March, 2015</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col c-3 m-3 l-3">
                <div className="row">
                  <div className="col c-12 m-12 l-12 head">Tags</div>
                  <div className="col c-12 m-12 l-12 tags-wrapper">
                    <div className="tag-item">audio</div>
                    <div className="tag-item">gallery</div>
                    <div className="tag-item">Image</div>
                    <div className="tag-item">audio</div>
                    <div className="tag-item">gallery</div>
                    <div className="tag-item">Image</div>
                    <div className="tag-item">audio</div>
                    <div className="tag-item">gallery</div>
                    <div className="tag-item">Image</div>
                    <div className="tag-item">audio</div>
                    <div className="tag-item">gallery</div>
                    <div className="tag-item">Image</div>
                  </div>
                  <div className="col c-12 m-12 l-12 line" />
                  <div className="col c-12 m-12 l-12 head newsletter">
                    Newsletter
                  </div>
                  <div className="col c-12 m-12 l-12 newsletter-content">
                    Subscribe to Our Newsletter to get Important News, Amazing
                    Offers.
                  </div>
                  <div className="col c-12 m-12 l-12 email-input">
                    <input type="email" name id placeholder="Enter email" />
                    <input type="button" defaultValue="GO" />
                  </div>
                </div>
              </div>
              <div className="col c-2 m-2 l-2">
                <div className="row">
                  <div className="col c-12 m-12 l-12 head">Flicke feed</div>
                  <div className="col c-12 m-12 l-12 block-wrapper">
                    <div className="row">
                      <div className="col c-6 m-6 l-6 block-item" />
                      <div className="col c-6 m-6 l-6 block-item" />
                      <div className="col c-6 m-6 l-6 block-item" />
                      <div className="col c-6 m-6 l-6 block-item" />
                      <div className="col c-6 m-6 l-6 block-item" />
                      <div className="col c-6 m-6 l-6 block-item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright">
          <div className="grid">
            <div className="row">
              <div className="col c-12 m-12 l-12">
                Copyright 2015 <span>theHam</span> | All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
