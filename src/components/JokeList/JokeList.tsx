import { useContext, useState, useEffect } from 'react';

// Components
import Icon from 'components/Icon/Icon';
import Categories from 'components/Categories/Categories';
import JokeCard from 'components/JokeCard/JokeCard';

// Types
import { Joke } from 'types/shared.types';

import './JokeList.scss';
import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';

export default function JokeList() {
    const DEFAULT_TOTAL = 6;
    const [category, setCategory] = useState('all');
    const [total, setTotal] = useState(DEFAULT_TOTAL);

    const { jokes } = useContext(GlobalContext).state;

    // Reset total when changing category
    useEffect(() => {
        setTotal(DEFAULT_TOTAL);
    }, [category]);

    const computedJokes = (): Array<Joke> => {
        if (category !== 'all') {
            return jokes.filter((j) => j.category === category);
        }

        return jokes;
    };

    const isViewMoreAvailable = computedJokes().length !== computedJokes().slice(0, total + 3).length;

    return (
        <>
            <Categories category={category} setCategory={setCategory} />
            <div className="jokelist-container">
                <div className="list-container">
                    {computedJokes()
                        .slice(0, total)
                        .map((joke) => {
                            return <JokeCard key={joke.id} joke={joke} />;
                        })}
                </div>
                <button
                    className={`btn-view-more ${!isViewMoreAvailable ? 'disabled' : ''}`}
                    disabled={!isViewMoreAvailable}
                    onClick={() => setTotal(total + 3)}
                >
                    <span className="text">View more</span>
                    <Icon name="arrow_down" size="sm" className="icon down" />
                </button>
            </div>
        </>
    );
}
