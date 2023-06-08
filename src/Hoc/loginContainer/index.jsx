import React, { Suspense } from "react";
// import { makeStyles, createStyles } from "@mui/styles";
// import { useTheme, Theme } from "@mui/material";
// import Loading from "../../components/loading";


const LoginContainer = ({ children }) => {
//   const theme = useTheme();
//   const classes = useStyles({ theme });
  return (
    <div>
      {/* <Suspense fallback={<Loading />}> */}
        <div>{children}</div>
      {/* </Suspense> */}
    </div>
  );
};

export default LoginContainer;
