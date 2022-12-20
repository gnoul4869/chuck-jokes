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

    const getPrevJoke = (jokeId: string) => {
        const index = jokes.findIndex((j) => j.id === jokeId);
        if (index === -1) {
            return jokes[0];
        }
        if (index === 0) {
            return jokes.at(-1) as Joke;
        }

        return jokes[index - 1];
    };

    const getNextJoke = (jokeId: string) => {
        const index = jokes.findIndex((j) => j.id === jokeId);
        if (index === -1 || index === jokes.length - 1) {
            return jokes[0];
        }

        return jokes[index + 1];
    };

    const searchJokes = (query: string) => {
        const results = [];
        const q = query.toLowerCase();
        for (const j of jokes) {
            if (j.value.toLowerCase().includes(q)) {
                results.push(j);
            }

            if (results.length === 4) {
                break;
            }
        }

        return results;
    };

    return { getJokeTitle, getRankedJokes, getJokeRanking, getTopTenJokes, getPrevJoke, getNextJoke, searchJokes };
}
