import React from "react";
import ForgotPassword from "../components/ForgotPassword";

function ForgotPasswordContainer() {
  return (
    <div className="bg-gradient-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-4 d-none d-lg-block bg-password-image"></div>
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Forgot Your Password?
                        </h1>
                        <p>
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <ForgotPassword />
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordContainer;
