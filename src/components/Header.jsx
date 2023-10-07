import { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
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
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header className='fixed-top d-flex flex-row justify-content-between bg-secondary'>
                 <div>
                     <h1 className='p-2'>
                         Matthew Haynes
                     </h1>
                 </div>
                 <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
             </header>
             <main className='mx-3'>{renderPage()}</main>
            {/* <Header /> */}
            {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            {/* <main className='mx-3'>{renderPage()}</main> */}
            {/* <Footer /> */}
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