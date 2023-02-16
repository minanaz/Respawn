import React from "react";
import "./footerStyle/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-href">
            <a href="#">PRIVACY</a>
            <a href="#">TERMS</a>
            <a href="#">DO NOT SELL MY PERSONSL INFORMATION</a>
          </div>
          <div className="footer-social">
            <a
              className="footer-social"
              href="https://www.instagram.com/respawnent/"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZDQjRGNjAzRkYwQzExRTlCQUFGRTQyNTJEOEE3QTM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZDQjRGNjA0RkYwQzExRTlCQUFGRTQyNTJEOEE3QTM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkNCNEY2MDFGRjBDMTFFOUJBQUZFNDI1MkQ4QTdBMzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkNCNEY2MDJGRjBDMTFFOUJBQUZFNDI1MkQ4QTdBMzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7pahlXAAAKXklEQVR42uxaC0xU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"></img>
            </a>
            <a className="footer-social" href="https://twitter.com/respawn">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAADFBMVEX///8AAAAAAAAAAAD4jAJNAAAABHRSTlMAU63+nMXrzAAAAJ1JREFUeNrtkEsKxTAMxDzy/e/8siiEkMc0n1XBgi5aKjQ4iqL4FiIz0fPifowJ8kERAiMn05cO7XHhTP52e11OHm2NLuQozx1N4Y7Clof47Fp51JfceSbSiuwOtCOr2Y6XMFzInrB4l7hIKzz41ec28Ypwqz3ARTh92GPC53asIeeeXFwb8rmro81qgLnz9qHZm+xVj+ARURRF8SF+Z5kH2R/bdGAAAAAASUVORK5CYII="></img>
            </a>
            <a
              className="footer-social"
              href="https://www.facebook.com/RespawnEntertainment/"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAADFBMVEX///8AAAAAAAAAAAD4jAJNAAAABHRSTlMAehv9gM/OJwAAAFNJREFUeAFjGCaANTQAmctU//8LMp/7PyqfH40vj8a3x+T/QObv/39rASr/AQMJfP3///9/QLEeaB8B/g8C/A94zOfa//9VA7p7RhJfNbSBYVgCAEqIZaDJqJrpAAAAAElFTkSuQmCC"></img>
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
