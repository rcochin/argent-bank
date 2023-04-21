import { Link, Outlet } from "react-router-dom"
import logo from "../../assets/argentBankLogo.png";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";


function Navbar () {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    function handleLogout() {
      localStorage.clear();
      dispatch(logout());
    }
    return (
        <>
          <nav className="main-nav">
            <Link to="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
              {user ? (
                <>
                  <Link to="/user" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    {user.firstName}
                  </Link>
                  <Link to="/" className="main-nav-item" onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i>
                    Logout
                  </Link>
                </>
              ) : (
                <Link to="/signin" className="main-nav-item">
                  <i className="fa fa-user-circle"></i>
                  Sign In
                </Link>
              )}
            </div>
          </nav>
          <div>
            <Outlet />
          </div>
        </>
      );
}

export default Navbar;