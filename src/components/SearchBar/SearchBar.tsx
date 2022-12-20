import Icon from 'components/Icon/Icon';
import './SearchBar.scss';

export default function SearchBar() {
    return (
        <div className="searchbar-container">
            <input type="text" className="searchbar" placeholder="How can we make you laugh today?" />
            <button className="btn-search">
                <Icon name="search" size="md" />
            </button>
        </div>
    );
}
