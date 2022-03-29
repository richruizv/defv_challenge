import { Outlet } from "react-router-dom";
import logo from "../assets/img/logo.png"

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-light  navbar-recipe">
        <a className="navbar-brand" href="#">
          <img src={logo}  className="mx-2" alt="logo" width="40" height="40" />
          <span className="ml-2 h4">Recipe finder</span>
        </a>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;