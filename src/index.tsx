import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';

// Global Context
import GlobalProvider from 'contexts/GlobalContext/GlobalContext';

import 'assets/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>
);
