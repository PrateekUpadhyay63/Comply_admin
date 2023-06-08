import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Switch,
  FormControlLabel,
  FormGroup,
  Menu,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { YouTube } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";

import "./nav.scss";
import { getAllCountries, getAllLanguages } from "../../Redux/Actions/action";

function MenuAppBar() {
  const dispatch = useDispatch();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { country } = useSelector((state) => state.CountriesReducer);
  const { Language } = useSelector((state) => state.LanguagesReducer);
  React.useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllLanguages());
  }, []);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLog = () => {
    setAuth(!auth);
    setAnchorEl(null);
  };

  return (
    <section className="container-fluid inner_header">
      <header>
        <div className="col-lg-12 px-3">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-6 col-lg-6">
              <div className="logo_eform">
                <a href="#">
                  <img src={logo} />
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="nav inner_header_right justify_language_field">
                    <li>
                      <select
                        name=""
                        value="eng"
                        className="drop_language w-auto"
                        onChange={() => console.log("select")}
                      >
                        <option value="">Default English</option>
                        <option value="">Français</option>
                        <option value="">Polish</option>
                        <option value="">Español</option>
                        <option value="">Content ID</option>
                        <option value="">Finland</option>
                        <option value="">Pakistan</option>
                        <option value="">Chinese</option>
                        <option value="">Costa Rica</option>
                        <option value="">日本人</option>
                        <option value="">Deutsch</option>
                        <option value="eng">US English</option>
                        <option value="">Brazil</option>
                        <option value="">Mexico</option>
                        <option value="">Canadian (English)</option>
                        <option value="">Italiano</option>
                        <option value="">German</option>
                        <option value="">Ukraine</option>
                        <option value="">Colombia</option>
                        <option value="">Belgium</option>
                        <option value="">Slovakia</option>
                        <option value="">India</option>
                      </select>
                    </li>
                    {/* <li>
                    <input type="submit" name="ctl00$ucHeader$btnSignOut" value="Sign out" id="ctl00_ucHeader_btnSignOut" class="btn btn-primary btn-signout"/>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default MenuAppBar;
