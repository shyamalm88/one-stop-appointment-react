import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import ProfileContainer from "./containers/ProfileContainer";
import ForgotPasswordContainer from "./containers/ForgotPasswordContainer";
import ProfileView from "./containers/ProfileView";
import TimeTableContainer from "./containers/TimeTableContainer";
import AppointmentsContainer from "./containers/AppointmentsContainer";
import AboutContainer from "./containers/AboutContainer";
import SecurityContainer from "./containers/SecurityContainer";
import ContactContainer from "./containers/ContactContainer";
import OneStopContainer from "./containers/OneStopContainer";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <OneStopContainer />,
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/signup",
    element: <SignupContainer />,
  },
  {
    path: "/profile",
    element: <ProfileContainer />,
    children: [
      {
        path: "profileview",
        element: <ProfileView />,
      },
      {
        path: "about",
        element: <AboutContainer />,
      },
      {
        path: "contact",
        element: <ContactContainer />,
      },
      {
        path: "schedule-appointment",
        element: <AppointmentsContainer />,
      },
      {
        path: "security",
        element: <SecurityContainer />,
      },
      {
        path: "timetable",
        element: <TimeTableContainer />,
      },
    ],
  },
  {
    path: "/forgotpassword",
    element: <ForgotPasswordContainer />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
