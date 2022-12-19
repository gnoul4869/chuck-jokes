import { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';

import CategoryTag from 'components/CategoryTag/CategoryTag';
import { categories } from 'components/Categories/Categories';

import { Joke } from 'types/shared.types';
import './JokeDetail.scss';

type JokeDetailProps = {
    joke: Joke;
};

export default function JokeDetail({ joke }: JokeDetailProps) {
    const { jokes } = useContext(GlobalContext).state;
    const category = categories.find((c) => (c.name = joke.category));
    const title = `The #${jokes.filter((j) => j.category === joke.category).findIndex((j) => j.id === joke.id) + 1} ${joke.category} joke`;
    const rank = jokes.sort((a, b) => a.likes - b.likes).findIndex((j) => j.id === joke.id) + 1;
    const isTrending = rank <= 10;

    return (
        <div className="detail-container">
            <div className="detail-card">
                <div className="header">
                    {category && <CategoryTag category={category} isActive={true} />}
                    {isTrending && (
                        <div className="trending-tag">
                            <div className="dot"></div>
                            <span className="text">Trending</span>
                        </div>
                    )}
                </div>
                <div className="title-container">
                    <div className="title">{title}</div>
                    <div className="line"></div>
                    <div className="ranking">No #{rank}</div>
                </div>
                <div className="content">{joke.value}</div>
            </div>
        </div>
    );
}
