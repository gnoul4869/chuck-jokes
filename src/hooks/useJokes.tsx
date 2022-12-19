import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';
import { useContext } from 'react';
import { Joke } from 'types/shared.types';

export default function useJokes() {
    const { jokes } = useContext(GlobalContext).state;

    const getJokeTitle = (joke: Joke) =>
        `#${jokes.filter((j) => j.category === joke.category).findIndex((j) => j.id === joke.id) + 1} ${joke.category} joke`;

    const getRankedJokes = () => [...jokes].sort((a, b) => b.likes - b.dislikes - (a.likes - a.dislikes));

    const getJokeRanking = (jokeId: string) => {
        return getRankedJokes().findIndex((j) => j.id === jokeId) + 1;
    };

    const getTopTenJokes = () => {
        return getRankedJokes().slice(0, 10);
    };

    return { getJokeTitle, getRankedJokes, getJokeRanking, getTopTenJokes };
}
