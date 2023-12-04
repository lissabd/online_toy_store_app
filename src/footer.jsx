import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer-main">
      <div className="footer-grid">
        <section className="footer-1">
          <img src="/images/header-icon.png" alt="Логотип сайта в подвале" />
          <p className="in-footer">We sell high-quality toys for kids <br /> of any age. Bring happiness to your children
            with our help. Purchase interesting toys using a
            special discount.
          </p>
        </section>
        <section className="footer-2">
          <p><strong>Infomation</strong></p>
          <ul className="links">
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a >Privacy Policy</a></li>
            <li><a>Terms & Conditions</a></li>
          </ul>
        </section>
        <section className="footer-3">
          <p><strong>Why Buy From Us</strong></p>
          <ul className="links-for-third">
            <li><a >Shipping & Delivery</a></li>
            <li><a >Secure payment</a></li>
            <li><a >FAQ</a></li>
            <li><a >Terms of Use</a></li>
          </ul>
        </section>
        <section className="footer-4">
          <p><strong>Keep in touch</strong></p>
          <div className="email-input-container">
            <input type="email" className="email-input" placeholder="Enter your email..." />
          </div>    
        </section>
      </div>
    </footer>
  );
}

export default Footer;