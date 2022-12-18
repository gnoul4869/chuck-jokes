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
                <Icon name="lightning" size="xs" className="icon" />
                <div className="title">{category.toUpperCase()} JOKE</div>
            </div>
            <div className="content">{value}</div>
            <button className="btn-stats">
                <span className="text">See stats</span>
                <Icon name="arrow_left" size="md" className="icon right" />
            </button>
        </div>
    );
}
