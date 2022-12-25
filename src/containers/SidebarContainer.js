import React from "react";
import { Link } from "react-router-dom";

function SidebarContainer() {
  const handleToggle = () => {
    document.getElementById("accordionSidebar").classList.toggle("toggled");
  };
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/adaptive-icon.png"}
            alt="..."
            width={"70px"}
            style={{ transform: "rotate(14deg)" }}
          />
        </div>
        <div className="sidebar-brand-text mx-3">
          1 Stop <sup>Appointment</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link to="/profile/profileview" className="nav-link">
          <i className="fas fa-fw fa-user"></i>
          <span>Profile View</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Personal Details</div>

      <li className="nav-item">
        <Link to="/profile/about" className="nav-link collapsed">
          <i className="fas fa-fw fa-feather"></i>
          <span>About Yourself</span>
        </Link>
        {/* <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div> */}
      </li>

      <li className="nav-item">
        <Link to="/profile/contact" className="nav-link collapsed">
          <i className="fas fa-fw fa-address-card"></i>
          <span>Contact Details</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/profile/security" className="nav-link collapsed">
          <i className="fas fa-fw fa-user-shield"></i>
          <span>Security</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Appointment Details</div>

      <li className="nav-item">
        <Link to="/profile/timetable" className="nav-link collapsed">
          <i className="fas fa-fw fa-calendar-day"></i>
          <span>My Schedule</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/profile/appointments" className="nav-link collapsed">
          <i className="fas fa-fw fa-stopwatch"></i>
          <span>Upcoming Appointments</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={handleToggle}
        ></button>
      </div>
    </ul>
  );
}

export default SidebarContainer;
