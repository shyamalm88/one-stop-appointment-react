import React from "react";
import { Outlet } from "react-router-dom";
import NavigationContainer from "./NavigationContainer";
import SidebarContainer from "./SidebarContainer";

function ProfileContainer() {
  return (
    <div id="wrapper">
      <SidebarContainer />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavigationContainer />
          <Outlet />
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © One Stop Appointment 2023</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ProfileContainer;
