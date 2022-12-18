import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Contexts
import GlobalProvider from 'contexts/global/GlobalContext';

// Pages
import Index from 'pages/Index';
import NotFound from 'pages/NotFound';

export default function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
}
