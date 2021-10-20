import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            {/* header */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg round border-bottom border-5 border-dark">
                <div className="container-fluid">
                    {/* title */}
                    <NavLink exact to="/" className="text-decoration-none text-black"><h1>Shera Diagnostic Center</h1></NavLink>

                    {/* menu button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* navigations */}
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink exact to="/" className="nav-link mx-3" activeClassName="active fw-bolder">Home</NavLink>
                            <NavLink exact to="/reports" className="nav-link mx-3" activeClassName="active fw-bolder">Reports</NavLink>
                            <NavLink exact to="/profile" className="nav-link mx-3" activeClassName="active fw-bolder">{user ? <span>Profile</span> : user.displayName}</NavLink>
                            {
                                user?.email
                                    ? <button onClick={logout} className="nav-link btn border-0">Logout</button>
                                    :
                                    <NavLink exact to="/login" className="nav-link mx-3" activeClassName="active fw-bolder">Login</NavLink>
                            }
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;
