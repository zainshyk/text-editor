// import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TEXT EDITOR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${props.homeSelect}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.productsSelect}`} to="/products">Products</Link>
        </li>
      </ul>
      <div className="form-check form-switch text-black">
      <input className="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="modeBtn"/>
      <label className={`enable form-check-label text-${props.mode === "light"? "black": "white"}`} htmlFor="flexSwitchCheckDefault">{props.mode === "light"? "Enable Dark Mode": "Enable Light Mode"}</label>
</div>
    </div>
  </div>
</nav>
</>
  )
}


// Navbar.propTypes = {
//   logo: PropTypes.string.isRequired, about: PropTypes.string.isRequired
// };

// Navbar.defaultProps = {
//   logo: "Add Logo", about: "Add About", placeholder: "Search"
// }