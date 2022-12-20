import { HashRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

// Pages
import Index from 'pages/Index';
import Detail from 'pages/Detail';
import NotFound from 'pages/NotFound';

import useFetchData from 'hooks/useFetchData';

export default function App() {
    const { isLoading, error } = useFetchData();

    return (
        <HashRouter>
            <div className="app">
                <Header />
                <div className="main">
                    <div className="container">
                        {isLoading || error ? (
                            <div className="info-container">
                                <div className="content">{isLoading ? 'Fetching jokes...' : error}</div>
                            </div>
                        ) : (
                            <switch>
                                <Routes>
                                    <Route path="/" element={<Index />} />
                                    <Route path="/jokes/:id" element={<Detail />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </switch>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
}
