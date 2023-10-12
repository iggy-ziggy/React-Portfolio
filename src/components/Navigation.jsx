function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="d-flex align-items-center">
        <ul className="nav d-flex flex-wrap">
          <li className="nav-item p-2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              id="nav-about"
            >
              About Me
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
      </div>
    </div>
  );
}

export default Navigation;
