import { useState } from 'react';

import Icon from 'components/Icon/Icon';
import useJokes from 'hooks/useJokes';
import { Joke } from 'types/shared.types';

import './SearchBar.scss';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    const { searchJokes, getJokeTitle } = useJokes();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Joke[]>([]);

    const handleSearch = () => {
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
        <div className="searchbar-container">
            <div className="input-container">
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
            {results && (
                <div className="results-container">
                    {results.map((r, i) => (
                        <Link to={`/jokes/${r.id}`} key={r.id} className="result">
                            {renderIcon(i)}
                            <span className="text">{getJokeTitle(r)}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
