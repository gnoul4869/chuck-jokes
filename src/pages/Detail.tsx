import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
    const { id } = useParams();
    const { jokes } = useContext(GlobalContext).state;

    const joke = jokes.find((j) => j.id === id);

    if (!joke) {
        return <div className="info-container">Joke not found. Wrong ID?</div>;
    }

    return <div>{joke.value}</div>;
}
