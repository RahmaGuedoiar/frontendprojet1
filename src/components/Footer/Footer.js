import React from "react";
import "./Footer.css";
import logoo from "../../assets/logoo.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-logo'>
        <img src={logoo} alt="" />

      </div>


      <div className="footer-social-icon">

        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <h5> email :Sophistication@gmail.com </h5>
        <h5> +21697563254</h5>
      </div>

    </div>

  );
};

export default Footer;
