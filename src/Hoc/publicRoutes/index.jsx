// import { bgcolor } from "@mui/system";
import React from "react";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import { ReducersModel } from "../../model";
// import Utils from "../../Utils/pathname";
import LoginContainer from "../loginContainer/index";



const PublicRoute = ({ component}) => {
  return (
    <React.Fragment>
      {localStorage.getItem("access_token") === null &&
      sessionStorage.getItem("access_token") === null 
        ? (
          <Suspense fallback={""}>{component}</Suspense>
        ) : (
          <LoginContainer>{component}</LoginContainer>
        )
      }
    </React.Fragment>
  );
};
export default PublicRoute;
