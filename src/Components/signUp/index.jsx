import React, {useState} from "react";
import {Collapse,CardHeader,IconButton} from "@mui/material";
import KeyboardArrowDownIcon from 
    "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from 
    "@mui/icons-material/KeyboardArrowUp";
import "bootstrap/dist/css/bootstrap.css";

function Signup() {
  const [open, setOpen] = useState(false);
  return (
    <div classname="container">
        <div>
            <div className="main_stuff container-fluid">
                <div className="inner_content">
                    <div className="row">
                        <div class="main_title pt-0">
                            <h1>Account Holder Details</h1>
                        </div>
                        <div className="col-2">
                            <h1>ii</h1>
                        </div>
                    </div>
                    <div className="col-2 entity_box">

                    </div>
                </div>
                <div className="container-fluid">
                    <footer>
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-6 col-lg-6 copyright">  
                                <p>
                                    © Comply Exchange Ltd.2023
                                    - Version: 2.2.0.29
                                    - Render Time: 13.7839652s
                                 
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;
