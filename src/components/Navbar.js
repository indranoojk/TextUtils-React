import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'} active`} aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.aboutText}</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleDark} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
      <div className={`form-check mx-2 form-switch text-${props.mode==='light'?'danger':'light'}`}>
      <input className="form-check-input" onClick={props.toggleDanger} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DangerMode</label>
      </div>
      <div className={`form-check mx-2 form-switch text-${props.mode==='light'?'success':'light'}`}>
      <input className="form-check-input" onClick={props.toggleSuccess} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable SuccessMode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}


// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About'
// }


