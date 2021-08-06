import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "react-owl-carousel/node_modules/react/index";

export default class Blog extends Component {
  render() {
    return (
      <div id="blog" className="container">
        <div className="grid wide">
          <div className="row" id="general-title-format">
            <div className="col c-12 m-12 l-12 head-title">
              <div className="title-wrapper">
                <div className="title">What people say about theHam</div>
                <div className="first-line">
                  <div className="second-line" />
                </div>
              </div>
            </div>
            <div className="col c-12 m-12 l-12 quote-icon-wrapper">
              <i className="quote-icon fas fa-quote-left" />
            </div>
            <OwlCarousel
              items={1}
              className="col c-12 m-12 l-12 owl-carousel owl-theme"
              loop
              nav
              dots
              margin={10}
              autoPlay
              autoplayTimeout={2000}
              autoplayHoverPause
            >
              <div className="item blog-item">
                <div className="content">
                  Integer dignissim, augue tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis. Tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis.
                </div>
                <div className="author">Hasan Ali</div>
                <div className="job">UX Designer</div>
                <div className="avatar-container">
                  <div className="avatar-wrapper">
                    <div className="avatar-light-wrapper" />
                  </div>
                </div>
              </div>
              <div className="item blog-item">
                <div className="content">
                  Integer dignissim, augue tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis. Tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis.
                </div>
                <div className="author">Hasan Ali</div>
                <div className="job">UX Designer</div>
                <div className="avatar-container">
                  <div className="avatar-wrapper">
                    <div className="avatar-light-wrapper" />
                  </div>
                </div>
              </div>
              <div className="item blog-item">
                <div className="content">
                  Integer dignissim, augue tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis. Tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis.
                </div>
                <div className="author">Hasan Ali</div>
                <div className="job">UX Designer</div>
                <div className="avatar-container">
                  <div className="avatar-wrapper">
                    <div className="avatar-light-wrapper" />
                  </div>
                </div>
              </div>
              <div className="item blog-item">
                <div className="content">
                  Integer dignissim, augue tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis. Tempus ultricies luctus, quam dui
                  laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar
                  odio eget aliquam facilisis.
                </div>
                <div className="author">Hasan Ali</div>
                <div className="job">UX Designer</div>
                <div className="avatar-container">
                  <div className="avatar-wrapper">
                    <div className="avatar-light-wrapper" />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}
