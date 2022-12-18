import axios from 'axios';
import { useContext, useEffect } from 'react';
import { GlobalContext } from 'contexts/GlobalContext/GlobalContext';

import { ChuckJokeResultItem, Joke } from 'types/shared.types';

// api.chucknorris.io
const API_ENDPOINT = 'https://api.chucknorris.io/jokes/search?query=all';

export default function useFetchData() {
    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        const loadData = async () => {
            try {
                dispatch({ type: 'SET_IS_LOADING', payload: true });
                const res = await axios.get(API_ENDPOINT);
                const data = res.data.result;

                const jokes: Joke[] = data.map((d: ChuckJokeResultItem) => ({
                    id: d.id,
                    category: d.categories.length ? d.categories[0] : 'uncategorized',
                    value: d.value,
                    likes: 0,
                    dislikes: 0,
                }));

                dispatch({ type: 'SET_JOKES', payload: jokes });
            } catch (err) {
                console.error(err);
                dispatch({ type: 'SET_ERROR', payload: 'Something went wrong while fetching the data' });
            } finally {
                dispatch({ type: 'SET_IS_LOADING', payload: false });
            }
        };

        loadData();
    }, []);

    return state;
}
