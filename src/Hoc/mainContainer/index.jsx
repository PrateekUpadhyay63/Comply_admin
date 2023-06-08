// import { Theme } from "@mui/material";
// import { makeStyles, createStyles } from "@mui/styles";
import React, { Suspense } from "react";
// import SideNavigation from "../../components/sideNavigation";
import MenuAppBar from "../../Components/navbar";
import { useSelector } from "react-redux";
import Utils from "../../Utils";

function MainContainer({ children }) {
//   const classes = styles();
  return (
    <div>
        {/* <SideNavigation /> */}
        <MenuAppBar />
      <div>
        <Suspense fallback={""}>
          <div>{children}</div>
        </Suspense>
      </div>
    </div>
  );
}

export default MainContainer;
