import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';
import { useContext } from 'react';

export default function useJokes() {
    const { jokes } = useContext(GlobalContext).state;
    const rankedJokes = [...jokes].sort((a, b) => b.likes - b.dislikes - (a.likes - a.dislikes));

    const getJokeRanking = (jokeId: string) => {
        return rankedJokes.findIndex((j) => j.id === jokeId) + 1;
    };

    const getTopTenJokes = () => {
        return rankedJokes.slice(0, 10);
    };

    return { getJokeRanking, getTopTenJokes };
}
