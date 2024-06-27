const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">My Blog</a>
        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Add</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;