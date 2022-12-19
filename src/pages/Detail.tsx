import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';
import JokeDetail from 'components/JokeDetail/JokeDetail';

export default function Detail() {
    const { id } = useParams();
    const { jokes } = useContext(GlobalContext).state;

    const joke = jokes.find((j) => j.id === id);

    if (!joke) {
        return <div className="info-container">Joke not found. Wrong ID?</div>;
    }

    return (
        <>
            <JokeDetail joke={joke} />
        </>
    );
}
