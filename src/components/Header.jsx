import { useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  // could we import this file into Navigation and accurately render flex?
  return (
    <div className="wrapper">
      <div className="flex-container">
        <header className="header">
          <h1 className="nav-title">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home"
                  ? "nav-link active underline"
                  : "nav-link"
              }
              id="nav-home"
            >
              Matthew Haynes
            </a>
          </h1>
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>
      </div>
      <main className="page-body">{renderPage()}</main>
      <Footer />
    </div>
    // <div className='wrapper'>
    //     <header className='d-flex flex-row justify-content-between header'>
    //          <div>
    //              <h1 className='p-2 home-title'>
    //                  <a href="#home"
    //                  onClick={() => handlePageChange('Home')}
    //                  className={currentPage === 'Home' ? 'nav-link active underline' : 'nav-link'}
    //                  id='nav-home'
    //                  >Matthew Haynes</a>
    //              </h1>
    //          </div>
    //          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    //      </header>
    //      <main className='page-body'>{renderPage()}</main>
    //      <Footer />
    // </div>
  );
}
