import { Link } from 'react-router-dom';

import { Joke } from 'types/shared.types';
import Icon from 'components/Icon/Icon';

import './JokeCard.scss';

type JokeCardProps = {
    joke: Joke;
};

export default function JokeCard({ joke }: JokeCardProps) {
    const { id, category, value } = joke;
    return (
        <div className="joke-card">
            <div className="title-container">
                <Icon name="lightning_yellow" size="xs" className="icon" />
                <div className="title">{category.toUpperCase()} JOKE</div>
            </div>
            <div className="content">{value}</div>
            <Link to={`/jokes/${id}`} className="btn-stats">
                <span className="text">See stats</span>
                <Icon name="arrow_left" size="md" className="icon right" />
            </Link>
        </div>
    );
}
