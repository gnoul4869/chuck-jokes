import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Banner from 'components/Banner/Banner';
import Footer from 'components/Footer/Footer';

// Pages
import Index from 'pages/Index';
import NotFound from 'pages/NotFound';
import useFetchData from 'hooks/useFetchData';

export default function App() {
    const { isLoading, error } = useFetchData();

    return (
        <>
            <Banner />
            <div className="main-body">
                <div className="container">
                    {isLoading || error ? (
                        <div className="info-container">
                            <div className="content">{isLoading ? 'Fetching jokes...' : error}</div>
                        </div>
                    ) : (
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Index />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </BrowserRouter>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
