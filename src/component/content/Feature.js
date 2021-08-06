import React, { Component } from "react";

export default class Feature extends Component {
  render() {
    return (
      <div id="feature-container">
        <div id="feature" className="container">
          <div className="grid wide">
            <div className="row" id="general-title-format">
              <div className="col c-12 m-12 l-12 head-title">
                <div className="title-wrapper">
                  <div className="title">Creative amazing features</div>
                  <div className="first-line">
                    <div className="second-line" />
                  </div>
                </div>
              </div>
              <div className="col c-12 m-12 l-12 content">
                <div className="row feature-item-wrapper">
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fab fa-envira" />
                      <div className="feature-name">Retina ready</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fas fa-edit" />
                      <div className="feature-name">Creative blog style</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fas fa-search" />
                      <div className="feature-name">Icon fonts</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fas fa-hourglass-start" />
                      <div className="feature-name">Parallax effects</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fas fa-laptop" />
                      <div className="feature-name">Amazing interface</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fas fa-tools" />
                      <div className="feature-name">SEO optimized</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fas fa-lightbulb" />
                      <div className="feature-name">Creative solutions</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon fas fa-paper-plane" />
                      <div className="feature-name">Mega menus</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                  <div className="col c-4 m-4 l-4 feature-item">
                    <div className="head">
                      <i className="feature-item-icon far fa-address-card" />
                      <div className="feature-name">Custom backgrounds</div>
                    </div>
                    <div className="middle">
                      All our modules are built with the possi bility to thse
                      choose between different design and you change.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="company">
          <div className="grid">
            <div className="row">
              <div className="col c-6 m-6 l-6 left">
                <div className="small" />
                <div className="medium" />
                <div className="big" />
              </div>
              <div className="col c-6 m-6 l-6 right">
                <div className="row" id="general-title-format">
                  <div className="col c-12 m-12 l-12 head-title">
                    <div className="title-wrapper">
                      <div className="title">About our company</div>
                      <div className="first-line">
                        <div className="second-line" />
                      </div>
                    </div>
                  </div>
                  <div className="col c-12 m-12 l-12 navigation">
                    <a href="#ourHistory">Our history</a>
                    <div className="space" />
                    <a href="#ourHiography">Our biography</a>
                    <div className="space" />
                    <a className="active" href="#ourSkills">
                      Our skills
                    </a>
                  </div>
                  <div id="ourSkills" className="col c-12 m-12 l-12">
                    <div className="skill-item">
                      <div className="content violet-back">User interface</div>
                    </div>
                    <div className="skill-item">
                      <div className="content blue-back">Web design</div>
                    </div>
                    <div className="skill-item">
                      <div className="content pink-back">Wordpress</div>
                    </div>
                    <div className="skill-item">
                      <div className="content green-back">HTML &amp; CSS</div>
                    </div>
                    <div className="skill-item">
                      <div className="content yellow-back">App design</div>
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
