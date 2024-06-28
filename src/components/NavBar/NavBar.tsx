import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          My Blog
        </NavLink>
        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="addPost"
                className="nav-link "
                aria-current="page"
                href="#"
              >
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link " aria-current="page">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contacts"
                className="nav-link "
                aria-current="page"
                href="#"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
