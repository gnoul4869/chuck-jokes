import React, { useState } from 'react';
import useFetchData from 'hooks/useFetchData';
import JokeCard from 'components/JokeCard/JokeCard';

import './JokeList.scss';

export default function JokeList() {
    const [total, setTotal] = useState(6);
    const { jokes, isLoading, error } = useFetchData();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className="jokelist-container">
            <div className="list-container">
                {jokes.slice(0, total).map((joke) => {
                    return <JokeCard key={joke.id} joke={joke} />;
                })}
            </div>
        </div>
    );
}
