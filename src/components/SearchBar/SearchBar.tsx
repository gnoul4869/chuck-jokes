import { useState, useRef } from 'react';

import Icon from 'components/Icon/Icon';
import useJokes from 'hooks/useJokes';
import { Joke } from 'types/shared.types';

import './SearchBar.scss';
import { Link } from 'react-router-dom';
import useClickOutside from 'hooks/useClickOutside';

export default function SearchBar() {
    const { searchJokes, getJokeTitle } = useJokes();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Joke[]>([]);
    const [isSearched, setIsSearched] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const searchBarContainer = useRef<HTMLDivElement>(null);

    useClickOutside(searchBarContainer, () => setIsFocused(false));

    const handleSearch = () => {
        setIsSearched(true);
        setResults(searchJokes(query));
    };

    const renderIcon = (index: number) => {
        let iconName = 'lightning_yellow';

        if (index === 0) {
            iconName = 'lightning_green';
        } else if (index === 3) {
            iconName = 'lightning_red';
        }

        return <Icon name={iconName} size="xs" className="icon" />;
    };

    return (
        <div className="searchbar-container" ref={searchBarContainer} onFocus={() => setIsFocused(true)}>
            <div className={`input-container ${isFocused ? 'active' : ''}`}>
                <input
                    type="text"
                    className="searchbar"
                    placeholder="How can we make you laugh today?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn-search" onClick={handleSearch}>
                    <Icon name="search" size="md" />
                </button>
            </div>
            {isFocused && isSearched && (
                <div className="results-container">
                    {results.length ? (
                        results.map((r, i) => (
                            <Link to={`/jokes/${r.id}`} key={r.id} className="result" onClick={() => setIsFocused(false)}>
                                {renderIcon(i)}
                                <span className="text">{getJokeTitle(r)}</span>
                            </Link>
                        ))
                    ) : (
                        <div className="result failed">No jokes matched</div>
                    )}
                </div>
            )}
        </div>
    );
}
