import { Joke } from 'types/shared.types';

export type State = {
    isLoading: boolean;
    error: string;
    jokes: Array<Joke>;
};

// Actions
export type SetJokes = {
    type: 'SET_JOKES';
    payload: Joke[];
};

export type SetIsLoading = {
    type: 'SET_IS_LOADING';
    payload: boolean;
};

export type SetError = {
    type: 'SET_ERROR';
    payload: string;
};

export type Action = SetJokes | SetIsLoading | SetError;
