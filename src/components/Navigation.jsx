function Navigation({ currentPage, handlePageChange }) {
  return (
    <>     
        <ul className="nav-list">
          <li className="nav-item p-2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              id="nav-about"
            >
              About
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              id="nav-portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              id="nav-resume"
            >
              Resume
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              id="nav-contact"
            >
              Contact
            </a>
          </li>
        </ul>     
    </>
  );
}

export default Navigation;
