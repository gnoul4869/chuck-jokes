import React from 'react';
import GlobalProvider from './contexts/global/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';

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
