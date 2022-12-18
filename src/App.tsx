import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Contexts
import GlobalProvider from 'contexts/GlobalContext/GlobalContext';

// Components
import Banner from 'components/Banner/Banner';
import Footer from 'components/Footer/Footer';

// Pages
import Index from 'pages/Index';
import NotFound from 'pages/NotFound';

export default function App() {
    return (
        <GlobalProvider>
            <Banner />
            <div className="main-body">
                <div className="container">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
            <Footer />
        </GlobalProvider>
    );
}
