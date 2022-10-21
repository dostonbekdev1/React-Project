import React from "react";
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div id="back">
      <div className="container py-0">
        <nav className="navbar navbar-expand-lg">
            <a id="Navbar" className="navbar-brand" href="#"><span >
              <svg id="buildingEmoji" className="py-0" xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="currentColor" class="bi bi-building" viewBox="0 0 15 24">
              <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
            </svg></span>BUILDING</a>
          <button id="triple" className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul id="space" className="nav text-end">
              <li className="nav-item ms-4">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link active" aria-current="page" href="#">Sale</a>
              </li>
              <li className="nav-item dropdown ms-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Places
                </a>
                <ul id="dropdown_menu" className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li id="liWidth"><a className="dropdown-item text-primary" href="https://javascript.info/">New York</a></li>
                  <li id="liWidth"><a className="dropdown-item text-primary" href="https://www.python.org/">Paris</a></li>

                  <li id="liWidth"><a className="dropdown-item text-primary" href="#">Frankfurt</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <form id="form" className="d-flex dropdown-item text-primary">
            <input id="changerInput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button id="searchBtn" className="btn btn-success text-light" type="submit">Search</button>
          </form>
    </nav>
      </div >
    </div >
  )
}

export default Navbar