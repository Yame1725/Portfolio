import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Aharnish</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

            </ul>

            <div className="footer__social">
            {/* <a href="https://www.instagram.com/" className="footer__social-icon" target="_blank">
        <i class="bx bxl-instagram"></i>
        </a> */}
        <a href="https://www.linkedin.com/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
        <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
        <i class="bx bxl-github"></i>
        </a>
            </div>
            <span className="footer__copy">Made with &#x2764;&#xFE0F;</span>
        </div>
    </footer>
  )
}

export default Footer