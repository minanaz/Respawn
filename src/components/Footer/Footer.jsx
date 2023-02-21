import React from "react";
import "./footerStyle/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-href">
            <a
              href="http://tos.ea.com/legalapp/WEBPRIVACY/US/en/PC/"
              target="_blank"
            >
              PRIVACY
            </a>
            <a
              href="https://tos.ea.com/legalapp/WEBTERMS/US/en/PC/"
              target="_blank"
            >
              TERMS
            </a>
            <a
              href="https://tos.ea.com/legalapp/WEBPRIVACYCA/US/en/PC/"
              target="_blank"
            >
              DO NOT SELL MY PERSONSL INFORMATION
            </a>
          </div>
          <div className="footer-social">
            <a
              className="footer-social"
              href="https://www.instagram.com/respawnent/"
              target="_blank"
            >
              <i class="fa-brands fa-instagram icons"></i>
            </a>
            <a
              className="footer-social"
              href="https://twitter.com/respawn"
              target="_blank"
            >
              <i class="fa-brands fa-twitter icons"></i>
            </a>
            <a
              className="footer-social"
              href="https://www.facebook.com/RespawnEntertainment/"
              target="_blank"
            >
              <i class="fa-brands fa-facebook icons"></i>
            </a>
          </div>
        </div>
        <p>
          © 2023 Respawn Entertainment Trademarks belong to their respective
          owners. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
