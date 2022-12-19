import useJokes from 'hooks/useJokes';
import { Link } from 'react-router-dom';

import './TopTenJokes.scss';

export default function TopTenJokes() {
    const { getJokeTitle, getTopTenJokes } = useJokes();

    return (
        <div className="top-jokes-container">
            <div className="content">
                <div className="title">The top 10 jokes this week</div>
                {getTopTenJokes().map((j) => (
                    <Link to={`/jokes/${j.id}`} key={j.id}>
                        {getJokeTitle(j)}
                    </Link>
                ))}
            </div>
        </div>
    );
}
