import { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* <Header /> */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className='mx-3'>{renderPage()}</main>
            {/* <Footer /> */}
        </div>
    );
}