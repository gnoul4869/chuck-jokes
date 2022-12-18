import React from 'react';
import { Joke } from 'types/shared.types';
import Icon from 'components/Icon/Icon';

import './JokeCard.scss';

type JokeCardProps = {
    joke: Joke;
};

export default function JokeCard({ joke }: JokeCardProps) {
    const { category, value } = joke;
    return (
        <div className="joke-card">
            <div className="title-container">
                <div className="icon">
                    <Icon name="lightning" size="xs" />
                </div>
                <div className="title">{category.toUpperCase()} JOKE</div>
            </div>
            <div className="content">{value}</div>
            <button>
                <span className="text">See stats</span>
                <Icon name="left_arrow" size="lg" />
            </button>
        </div>
    );
}
