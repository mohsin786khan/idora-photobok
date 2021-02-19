import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

const Header = () => {
  const adminLogin = useSelector(state => state.adminLogin)
	const { adminInfo}  = adminLogin;


  return (
    <>
      <header
        id="header"
        className="full-header header-size-md"
        data-mobile-sticky="true"
      >
        <div id="header-wrap">
          <div className="container">
            <div className="header-row">
              <div id="logo">
                <Link to="/" className="standard-logo">
                  <img src="Idora_Logo.png" alt="Idora Logo" />
                </Link>
              </div>
            <nav className="primary-menu">
              {adminInfo ? (
                <ul className="menu-container">
                  <li className="menu-item">
                    <Link className="menu-link" to="/admindashboard_productManage"><div>Product Management</div></Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" to="/admindashboard_userManage"><div>User Management</div></Link>
                  </li>
                </ul>
              ) : (
                <ul className="menu-container">
                  <li className="menu-item">
                    <Link className="menu-link" to="/"><div>Admin Login</div></Link>
                  </li>
							  </ul>
              )}
						</nav>
            </div>
          </div>
        </div>
        <div className="header-wrap-clone"></div>
      </header>
    </>
  );
};

export default Header;
