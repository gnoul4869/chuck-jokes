import bannerBackground from 'assets/images/banner_background.png';

import './Header.scss';

export default function Banner() {
    return (
        <div className="header-container">
            <div className="content-container">
                <div className="title-container">
                    <div className="title">Chuck Jokes</div>
                    <div className="sub-title">Daily Laughs for Chuck Norris fans</div>
                </div>
            </div>
            <img src={bannerBackground} alt="banner_background" className="banner-img" />
        </div>
    );
}
