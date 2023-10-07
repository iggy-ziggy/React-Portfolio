
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
        <div className="d-flex align-items-center">
          <ul className="nav d-flex flex-wrap">
            <li className="nav-item p-2">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "nav-link active" : "nav-link"}
              >
                About Me
              </a>
            </li>
            <li className="nav-item p-2">
              <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >Portfolio</a>
            </li>
            <li className="nav-item p-2">
              <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >Resume</a>
            </li>
            <li className="nav-item p-2">
              <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >Contact</a>
            </li>
          </ul>
        </div>
    </div>
  );
}

// class Navigation extends Component {
//     state = {  }
//     render() {
//         return (
//         <div className='d-flex align-items-center'>
//             <ul className='nav d-flex flex-wrap'>
//                 <li className='nav-item p-2'>
//                     <a href="">About Me</a>
//                 </li>
//                 <li className='nav-item p-2'>
//                     Portfolio
//                 </li>
//                 <li className='nav-item p-2'>
//                     Resume
//                 </li>
//                 <li className='nav-item p-2'>
//                     Contact
//                 </li>
//             </ul>
//         </div>
//     );
// }
// }

export default Navigation;
