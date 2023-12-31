import React from 'react';
import '../aboutus/AboutUs.css'
import '../idea/Idea.css'
import RightImage from './images/right-full.png';

function Idea({ title, subtitle, leftcontent }) {
  const paragraphs = leftcontent.split('\n');

  return (
<section className="lft-cnt-rgt-img">
<div className="rht-ful-img">
    <img src={RightImage} alt="right image" />
</div>
<div className="container">
    <div className="inner">
        <div className="sub-content"> <h3>{subtitle}</h3></div>
        <div className="title"><h2>{title}</h2></div>
        <div className="content">
        {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            </div>
    </div>
</div>
</section>
  );
}

export default Idea;
