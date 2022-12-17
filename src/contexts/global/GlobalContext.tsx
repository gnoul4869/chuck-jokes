import React, { useReducer } from 'react';

import { Action, State } from './GlobalContext.types';

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_JOKES': {
            return { ...state, jokes: action.payload };
        }
        case 'SET_IS_LOADING': {
            return { ...state, isLoading: action.payload };
        }
        case 'SET_ERROR': {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
};

const initialState: State = {
    isLoading: false,
    error: '',
    jokes: [],
};

const GlobalContext = React.createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => undefined,
});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext };
export default GlobalProvider;
