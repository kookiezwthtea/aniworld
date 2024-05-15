import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBell, faGlobeAmericas, faSearch, faQuidditch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src='logo.png' width='150rem'></img></a>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} className="text-light" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link active" aria-current="page" href="/">
                <div>
                  <FontAwesomeIcon icon={faHome} className="fa-lg mb-1" />
                </div>
                Home
              </a>
            </li>
         
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="/messages">
                <div>
                  <FontAwesomeIcon icon={faBell} className="fa-lg mb-1" />
                  <span className="badge rounded-pill badge-notification bg-dark">11</span>
                </div>
                Messages
              </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="/funny">
                <div>
                  <FontAwesomeIcon icon={faQuidditch} className="fa-lg mb-1" />
                </div>
                Humor
              </a>
            </li>
       
          </ul>
          </div>
          <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
          <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-white" type="button" data-mdb-ripple-color="dark">
          <FontAwesomeIcon icon={faSearch} className="fa-lg mb-1" />
          </button>
        </form>
        
      </div>
    </nav>
  );
};

export default Navbar;
