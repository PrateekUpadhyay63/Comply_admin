import React from "react";
import { Navigate } from "react-router-dom";
import MainContainer from "../mainContainer/index";
// import Utils from "../../Utils/pathname";

const PrivateRoute = ({ component }) => {
  
  return (
    <React.Fragment>
      {localStorage.getItem("access_token") !== null ||
      sessionStorage.getItem("access_token") !== null ? (
        <MainContainer children={component} />
      ) : (
        <Navigate to={"/login"} />
      )}
    </React.Fragment>
  );
};
export default PrivateRoute;
