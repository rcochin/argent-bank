import { Link, Outlet } from "react-router-dom"
import logo from "../../assets/argentBankLogo.png";
import "./Navbar.css";

function Navbar () {
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
                    <Link to="/signin" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </>

    )
}

export default Navbar;