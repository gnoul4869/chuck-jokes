import React, { useState } from 'react';
import useFetchData from 'hooks/useFetchData';
import JokeCard from 'components/JokeCard/JokeCard';

import './JokeList.scss';
import Icon from 'components/Icon/Icon';

export default function JokeList() {
    const [total, setTotal] = useState(6);
    const { jokes, isLoading, error } = useFetchData();

    if (isLoading) {
        return (
            <div className="info-container">
                <div className="content">{isLoading ? 'Loading...' : error}</div>
            </div>
        );
    }

    return (
        <div className="jokelist-container">
            <div className="list-container">
                {jokes.slice(0, total).map((joke) => {
                    return <JokeCard key={joke.id} joke={joke} />;
                })}
            </div>
            <button className="btn-view-more" onClick={() => setTotal(total + 3)}>
                <span className="text">View more</span>
                <Icon name="arrow_down" size="sm" className="icon down" />
            </button>
        </div>
    );
}
