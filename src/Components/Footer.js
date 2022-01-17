import React from "react";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footerLogo">logoipsum</div>
            <div className="footerLinks">
                <a href="#"
                   className="footerLink" 
                   target="_blank"
                   rel="noreferrer"
                >
                Terms of Service   
                </a>
                <a href="#"
                className="footerLink" 
                target="_blank"
                rel="noreferrer"
                >
                Privacy Policy  
                </a>
                <a href="#"
                className="footerLink" 
                target="_blank"
                rel="noreferrer"
                >
                Returns  
                </a>
                <a href="#"
                className="footerLink" 
                target="_blank"
                rel="noreferrer"
                >
                FAQ 
                </a>
            </div>
            <div className="footerRights">© 2022 Logoipsum. All rights reserved</div>
        </div>
    )
}

export default Footer;