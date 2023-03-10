import { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';

import Icon from 'components/Icon/Icon';
import CategoryTag from 'components/CategoryTag/CategoryTag';
import { categories } from 'data/categories';

import { Joke } from 'types/shared.types';
import './JokeDetail.scss';
import useJokes from 'hooks/useJokes';
import TopTenJokes from 'components/TopTenJokes/TopTenJokes';
import { Link } from 'react-router-dom';

type JokeDetailProps = {
    joke: Joke;
};

export default function JokeDetail({ joke }: JokeDetailProps) {
    const { dispatch } = useContext(GlobalContext);
    const { getJokeTitle, getJokeRanking, getPrevJoke, getNextJoke } = useJokes();

    const category = categories.find((c) => c.name === joke.category);
    const title = getJokeTitle(joke);
    const rank = getJokeRanking(joke.id);
    const isTrending = rank <= 10;

    const handleReaction = (react: 'LIKE' | 'DISLIKE') => {
        const newJoke = { ...joke };

        if (react === 'LIKE') {
            newJoke.likes++;
        } else {
            newJoke.dislikes++;
        }

        dispatch({ type: 'UPDATE_JOKE', payload: newJoke });
    };

    return (
        <div className="detail-container">
            <div className="detail-inner-container">
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
                <div className="reaction-container">
                    <button className="btn-react like" onClick={() => handleReaction('LIKE')}>
                        <Icon name="thumbs_up" size="xl" className="react-icon like" />
                        <div className="count">{joke.likes}</div>
                    </button>
                    <button className="btn-react dislike" onClick={() => handleReaction('DISLIKE')}>
                        <Icon name="thumbs_down" size="xl" className="react-icon dislike" />
                        <div className="count">{joke.dislikes}</div>
                    </button>
                </div>
                <div className="control-container">
                    <Link to={`/jokes/${getPrevJoke(joke.id).id}`} className="btn-control">
                        <Icon name="arrow2_left" size="sm" className="icon left" />
                        <span className="text">Prev. Joke</span>
                    </Link>
                    <Link to={`/jokes/${getNextJoke(joke.id).id}`} className="btn-control">
                        <span className="text">Next Joke</span>
                        <Icon name="arrow2_right" size="sm" className="icon right" />
                    </Link>
                </div>
            </div>
            <TopTenJokes />
        </div>
    );
}
