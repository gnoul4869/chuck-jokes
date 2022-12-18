import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Contexts
import GlobalProvider from 'contexts/global/GlobalContext';

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </GlobalProvider>
    );
}
