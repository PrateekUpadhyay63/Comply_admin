import React, { lazy } from "react";
import { ThemeProvider, createTheme, Grid } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "../Hoc/publicRoutes";
import PrivateRoute from "../Hoc/privateRoutes";
import Utils from "../Utils";
import MenuAppBar from "../Components/navbar";
import PersistentDrawerLeft from "../Components/sidenav";
const {
  SignUp,
  pages,
  pageInfo,
  content,
  contentInfo,
  agents,
  agentInfo,
  easyHelp
  //   Login,
  //   ForgotPassword,
  //   SetNewPassword,
  //   Dashboard,
} = Utils.Pathname;
// const LandingPage = lazy(() => import("../screen/index"));

const SignUpScreen = lazy(() => import("../Components/signUp"));
const Pages_details = lazy(() =>
  import("../Components/Administration/Pages/pages_details")
);

const PAGES = lazy(() => import("../Components/Administration/Pages/Pages"));

const Content_details = lazy(() =>
  import("../Components/Administration/Content_block/content_details")
);

const Content_Block = lazy(() =>
  import("../Components/Administration/Content_block/content_block")
);

const AGENTS = lazy(() =>
  import("../Components/Administration/Agents/Agents")
);

const Agent_Details = lazy(() =>
  import("../Components/Administration/Agents/Agents_details")
);

const EasyHelp = lazy(()=>import ("../Components/Administration/Easy_help/Easy_help"))

const Routers = () => {
  const theme = createTheme({
    // palette: {
    //   primary: {
    //     main: "#0D0D0D;",
    //     light: "#FF3053",
    //   },
    //   secondary: {
    //     main: "#2C5282",
    //     light: "#4A5568",
    //   },
    //   text: {
    //     primary: "#616161",
    //     secondary: "#4A5568",
    //   },
    //   success: {
    //     main: "#ffffff",
    //   },
    //   info: {
    //     main: "#ffffff",
    //   },
    // },
    // typography: {
    //   fontFamily: "Poppins",
    //   fontWeightLight: 300,
    //   fontWeightRegular: 400,
    //   fontWeightMedium: 500,
    //   fontWeightBold: 600,
    // },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Grid>
          <MenuAppBar />
        </Grid>
        <Grid>
          <PersistentDrawerLeft />
        </Grid>
      </Grid>
      <Router>
          <Routes>
            <Route
              path={SignUp}
              element={<PublicRoute component={<SignUpScreen />} />}
            />

            <Route
              path={pages}
              element={<PublicRoute component={<PAGES />} />}
            />

            <Route
              path={pageInfo}
              element={<PublicRoute component={<Pages_details />} />}
            />

             <Route
              path="/pageInfo/:id"
              element={<PublicRoute component={<Pages_details />} />}
            />

            <Route
              path={content}
              element={<PublicRoute component={<Content_Block />} />}
            />

            <Route
              path={contentInfo}
              element={<PublicRoute component={<Content_details />} />}
            />

            <Route
              path={agents}
              element={<PublicRoute component={<AGENTS />} />}
            />

            <Route
              path={agentInfo}
              element={<PublicRoute component={<Agent_Details />} />}
            />

            <Route path={easyHelp}
            element={<PublicRoute component={<EasyHelp/>}/>}/>
          </Routes>
        </Router>
    </ThemeProvider>

  );
};
export default Routers;
