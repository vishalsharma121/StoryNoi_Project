import React from 'react';
import '../banner/Banner.css';
import BannerImage from './images/banner.png';
import AichatImage from './images/ai-chat.svg';
import RightImage from './images/rht-img.png';

function Banner() {
  return (
    <section className="banner-outer">
      <div className="bg-shp">
        <img src={BannerImage} alt="Banner" />
      </div>
      <div className="container">
        <div className="shapes"></div>
        <div className="shape-left-top"></div>
        <div className="inner">
          <div className="left-content">
            <div className="title">
              <h1>Let Gen - AI Turn Your Idea to a <span className="color">kid’s Book!</span></h1>
            </div>
            <div className="sub-title">
              <h3>Express your idea in a few words!</h3>
            </div>
            <form action="/action_page.php">
              <input
                type="search"
                id="gsearch"
                name="gsearch"
                placeholder="Share your idea to start the book creation"
              />
              <input type="submit" value="Create Story" />
            </form>
            <div className="assesments">
              <div className="left-blk">
                <div className="cont">Downloads</div>
                <div className="btm-cnt">12,000</div>
              </div>
              <div className="left-blk">
                <div className="cont">Assessment</div>
                <div className="btm-cnt">
                  4.8
                  <svg
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.03947 30L8.60526 18.9079L0 11.4474L11.3684 10.4605L15.7895 0L20.2105 10.4605L31.5789 11.4474L22.9737 18.9079L25.5395 30L15.7895 24.1184L6.03947 30Z"
                      fill="#FF8E00"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="center-content">
            <img src={AichatImage} alt="Ai chat Image" />
          </div>
          <div className="right-image">
            <img src={RightImage} alt="Right Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
