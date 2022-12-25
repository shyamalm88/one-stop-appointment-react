import { Avatar } from "@mui/material";
import React from "react";

function ProfileView() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Profile View</h1>
      <div class="card mb-3">
        <div class="bio-graph-heading">
          <Avatar
            alt="Remy Sharp"
            src={window.location.origin + "/assets/images/undraw_profile_2.svg"}
            sx={{ width: 150, height: 150 }}
          />
          <div className="aboutContent">
            Feugiat scelerisque varius morbi enim nunc. Consequat nisl vel
            pretium lectus quam id leo in. Urna porttitor rhoncus dolor purus
            non enim praesent. Libero id faucibus nisl tincidunt. Erat nam at
            lectus urna duis convallis convallis. Quam quisque id diam vel quam
            elementum pulvinar. Pretium viverra suspendisse potenti nullam ac.
            Ultrices mi tempus imperdiet nulla malesuada. Aliquam nulla facilisi
            cras fermentum odio eu feugiat pretium nibh. Pulvinar pellentesque
            habitant morbi tristique senectus et netus et malesuada. Vel pretium
            lectus quam id leo in vitae turpis. Fringilla est ullamcorper eget
            nulla facilisi etiam. Volutpat sed cras ornare arcu dui. Nisi porta
            lorem mollis aliquam. Quisque egestas diam in arcu cursus euismod
            quis viverra. Massa placerat duis ultricies lacus sed turpis. Amet
            facilisis magna etiam tempor orci eu lobortis elementum. Dictumst
            quisque sagittis purus sit amet volutpat consequat mauris. Risus
            nullam eget felis eget.
          </div>
        </div>
        <div class="card-body bio-graph-info">
          <div class="row">
            <div class="bio-row">
              <p>
                <span>First Name </span>: Camila
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Last Name </span>: Smith
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Country </span>: Australia
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Birthday</span>: 13 July 1983
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Occupation </span>: UI Designer
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Email </span>: jsmith@flatlab.com
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Mobile </span>: (12) 03 4567890
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Phone </span>: 88 (02) 123456
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <div class="bio-chart">
                <div
                  style={{ display: "inline", width: "100px", height: "100px" }}
                ></div>
              </div>
              <div class="bio-desk">
                <h4 class="red">Envato Website</h4>
                <p>Started : 15 July</p>
                <p>Deadline : 15 August</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <div class="bio-chart">
                <div
                  style={{ display: "inline", width: "100px", height: "100px" }}
                ></div>
              </div>
              <div class="bio-desk">
                <h4 class="terques">ThemeForest CMS </h4>
                <p>Started : 15 July</p>
                <p>Deadline : 15 August</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <div class="bio-chart">
                <div
                  style={{ display: "inline", width: "100px", height: "100px" }}
                ></div>
              </div>
              <div class="bio-desk">
                <h4 class="green">VectorLab Portfolio</h4>
                <p>Started : 15 July</p>
                <p>Deadline : 15 August</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <div class="bio-chart">
                <div
                  style={{ display: "inline", width: "100px", height: "100px" }}
                ></div>
              </div>
              <div class="bio-desk">
                <h4 class="purple">Adobe Muse Template</h4>
                <p>Started : 15 July</p>
                <p>Deadline : 15 August</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
