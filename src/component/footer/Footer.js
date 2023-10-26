import React from "react";
import '../footer/Footer.css'
import FooterLogo from '../images/footer-logo.png'

function Footer({ companyName, currentYear, rightsText }){
    return (
        <footer className="outer">
            <div className="container">
                <div className="inner">
                    <div className="logo"><img src={FooterLogo} alt="Footer Logo" /></div>
                    <div className="btm-cont">{companyName} © {currentYear}. {rightsText}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
