import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate, Link, useLocation } from "react-router-dom"

function NavBar () {
  const navigate = useNavigate()
  const location = useLocation()

    return (
        <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"
            ><img src="src/assets/logo.png" style={{width: "100px", height: "55px"}}
          /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className={`nav-link fw-bold ${location.pathname === "/" ? "active" : ""}`} to={"/"}>TV Shows</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link fw-bold ${location.pathname === "/Settings" ? "active" : ""}`} href="#" onClick={() => {navigate("/Settings")}}>Settings</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link fw-bold ${location.pathname === "/Profile" ? "active" : ""}`} href="#" onClick={() => {navigate("/Profile")}}>Profile</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons text-white"></i>
              <div id="kids" className="fw-bold text-white">KIDS</div>
              <i className="bi bi-bell icons text-white"></i>
              <i className="bi bi-person-circle icons text-white"></i>
            </div>
          </div>
        </div>
      </nav>
    )
  }

export default NavBar