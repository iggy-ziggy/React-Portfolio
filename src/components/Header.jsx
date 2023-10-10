import { useState } from 'react';
// import Navbar from 'react-bootstrap/Navbar'
import Footer from './Footer';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Home from './pages/Home';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='wrapper'>
            <header className='d-flex flex-row justify-content-between header'>
                 <div>
                     <h1 className='p-2'>
                         <a href="#home"
                         onClick={() => handlePageChange('Home')}
                         className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                         id='nav-home'
                         >Matthew Haynes</a>
                     </h1>
                 </div>
                 <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
             </header>
             <main className='page-body'>{renderPage()}</main>
             <Footer />
        </div>
    );
}
// import React, { Component } from 'react';
// // import Navigation from './Navigation';

// class Header extends Component {
//     // state = {  } 
//     render() { 
//         return (
//             <header className='fixed-top d-flex flex-row justify-content-between bg-secondary'>
//                 <div>
//                     <h1 className='p-2'>
//                         Matthew Haynes
//                     </h1>
//                 </div>
//                 {/* <Navigation /> */}
//             </header>
//         );
//     }
// }
 
// export default Header;