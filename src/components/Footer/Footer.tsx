import footerBackground from 'assets/images/footer_background.png';

import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer-container">
            <img src={footerBackground} alt="footer_background" className="footer-img" />
        </div>
    );
}
