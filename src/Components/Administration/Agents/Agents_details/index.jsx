import React, { useEffect, useReducer, useState, useCallback } from "react";

import {
  TextField,
  Typography,
  Collapse,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  Card,
  Divider,
  Grid,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import InfoIcon from "@mui/icons-material/Info";
import TableHeader from "../../../reusables/TableHeader";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import "bootstrap/dist/css/bootstrap.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./agent_details.scss";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import DeleteIcon from '@mui/icons-material/Delete';
import FormLabel from '@mui/material/FormLabel';
function Agent_Details() {
  const [open, setOpen] = useState("");
  const [editorValue, setEditorValue] = useState(EditorState.createEmpty());

  const handleOpen = (val) => {
    if (open === val) {
      setOpen("");
    } else setOpen(val);
  };

  return (
    <div className="row flex-column mx-2">
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
        <CardHeader
          className=""
          title="Agent Detail & Domain Identification"
          action={
            <IconButton
              onClick={() => handleOpen("testCollaple1")}
              aria-label="expand"
              size="small"
            >
              {open === "testCollaple1" ? (
                <RemoveCircleOutlineOutlinedIcon />
              ) : (
                <ControlPointOutlinedIcon />
              )}
            </IconButton>
          }
        ></CardHeader>
        <Collapse
          className="px-5"
          in={open === "testCollaple1"}
          timeout="auto"
          unmountOnExit
        >
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Parent:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              W9 Requestor Name:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Line 1:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Line 2:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              City / Town:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              State / Province:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Zip / Postal Code:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Country:
              </Typography>
            </div>
            <div className="col-7">
            <Select fullWidth name="parent">
              <MenuItem value="1">Active</MenuItem>
              <MenuItem value="0">inactive</MenuItem>
            </Select>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Other:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Default Selection:
              </Typography>
            </div>
            <div className="col-7">
              <FormControl>
                <RadioGroup className="d-flex flex-row"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group">
                  <FormControlLabel value="entity" control={<Radio />} label="Entity" />
                  <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
        <CardHeader
          className=""
          title="Look & Feel"
          action={
            <IconButton
              onClick={() => handleOpen("testCollaple2")}
              aria-label="expand"
              size="small"
            >
              {open === "testCollaple2" ? (
                <RemoveCircleOutlineOutlinedIcon />
              ) : (
                <ControlPointOutlinedIcon />
              )}
            </IconButton>
          }
        ></CardHeader>
        <Collapse
          className="px-5"
          in={open === "testCollaple2"}
          timeout="auto"
          unmountOnExit
        >
               <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Default Language:
              </Typography>
            </div>
            <div className="col-7">
            <Select fullWidth name="parent">
              <MenuItem value="1">Active</MenuItem>
              <MenuItem value="0">inactive</MenuItem>
            </Select>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Include Default English:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Logo:
              </Typography>
            </div>
            <div className="col-7 justify-content-between d-flex">
            <Select fullWidth name="parent" className="w-75">
              <MenuItem value="1">Active</MenuItem>
              <MenuItem value="0">inactive</MenuItem>
            </Select><span className="my-auto"><a href="#">View..</a></span>
            </div>
          </div>
          <div className="row my-1" >
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Logo Navigate URL:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>  
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              PDF watermark:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Custom stylesheet:
              </Typography>
            </div>
            <div className="col-7">
             
              <Card className="card-box">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="heading">
                  Uploaded files
                  </Typography>
                  <div className="d-flex justify-content-between">
                    <Typography variant="body2" color="text.secondary">
                      filename.css
                    </Typography>
                    <Button className="my-auto" > <DeleteIcon /></Button>
                  </div>
                </CardContent>
                <CardActions>
                  <Button className="btn-cstm">Choose file</Button><span className="mx-2">No file chosen</span>
                  <Button className="btn-cstm" style={{float:"right"}}>Add</Button>
                </CardActions>
              </Card>
            
            </div>
          </div>
          <div className="row my-1">
            <div className="col-12 ">
              <Typography variant="body2" color="text.secondary">
                Add any custom CSS files to further customize the look and feel.
              </Typography>
              <ul>
                <li>Custom CSS files will be loaded after the default stylesheets.</li>  
                <li>When multiple custom CSS files are uploaded, they will be loaded in alphabetical order.</li>  
                <li>Any images or fonts uploaded here should be referenced from the CSS file(s) using relative paths.</li>  
              </ul>
            </div>
      
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Display Version:
              </Typography>
            </div>
            <div className="col-7">
             <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Display Render Time:
              </Typography>
            </div>
            <div className="col-7">
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Display Quick Edit Icons on forms:
              </Typography>
            </div>
            <div className="col-7">
            <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>
        </Collapse>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
        <CardHeader
          className=""
          title="User ID's & Passwords"
          action={
            <IconButton
              onClick={() => handleOpen("testCollaple3")}
              aria-label="expand"
              size="small"
            >
              {open === "testCollaple3" ? (
                <RemoveCircleOutlineOutlinedIcon />
              ) : (
                <ControlPointOutlinedIcon />
              )}
            </IconButton>
          }
        ></CardHeader>
        <Collapse
          className="px-5"
          in={open === "testCollaple3"}
          timeout="auto"
          unmountOnExit
        >
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Form feed username:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Form feed password:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              TIN check username:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              TIN check password:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>

          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Supports TIN validation:
              </Typography>
            </div>
            <div className="col-7">
            <FormControl>
              <RadioGroup className="d-flex flex-row"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Continue after TIN validation failure:
              </Typography>
            </div>
            <div className="col-7 d-flex">
            <FormControl className="w-75">
              <RadioGroup className="d-flex flex-row"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
              <p>(Max 2 attempts allowed per TIN per 24 hours)</p>
            </div>
          </div>

          <div className="row my-1" >
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Email "TOKEN" URL destination:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
    
        </Collapse>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
            <div className="row m-2" >
              <div className="col-12 ">
                <lable>
                Terms and conditions:
                </lable>
                <Editor
                editorState={editorValue}
                onEditorStateChange={(value) => setEditorValue(value)}/>
              </div>
           </div>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
            <div className="row m-2" >
              <div className="col-12 ">
                <lable>
                "TOKEN" Email:
                </lable>
                <Editor
                editorState={editorValue}
                onEditorStateChange={(value) => setEditorValue(value)}/>
                <lable>
                The TOKEN email must contain the placeholder ##TOKEN##. This will be replaced with the actual TOKEN when the confirmation email is sent</lable>
              </div>
           </div>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
            <div className="row m-2" >
              <div className="col-12 ">
                <lable>Send for Signature Process(Continuation URL):
                </lable>
                <Editor
                editorState={editorValue}
                onEditorStateChange={(value) => setEditorValue(value)}/>
                <lable>The Send For Signatory email must contain the placeholder ##URL Link## , ##Name of signatory## , ##Name of the person who filled out the form## , ##Email address of the contact##. This will be replaced with the actual Continuation URL, Name of signatory ,Name of the person who filled out the form, Email address of the contact when the email is sent</lable>
              </div>
           </div>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
            <div className="row m-2" >
              <div className="col-12 ">
                <lable>
                  By Using Email ID and password:
               </lable>
                <Editor
                editorState={editorValue}
                onEditorStateChange={(value) => setEditorValue(value)}/>
                <label>                The Send For Signatory email must contain the placeholder ##URL Link## , ##Name of signatory## , ##Name of the person who filled out the form## , ##Email address of the contact##. This will be replaced with the actual Continuation URL, Name of signatory ,Name of the person who filled out the form, Email address of the contact when the email is sent</label>
              </div>
           </div>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
            <div className="row m-2" >
              <div className="col-12 ">
                <lable>"SaveAndExit" Email:</lable>
                <Editor
                editorState={editorValue}
                onEditorStateChange={(value) => setEditorValue(value)}/>
                <lable>The SaveAndExit email must contain the placeholder ##URL Link## and ##URL Link1##. This will be replaced with the actual Continuation URL when the email is sent</lable>
              </div>
           </div>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
        <CardHeader
          className=""
          title="Process Options"
          action={
            <IconButton
              onClick={() => handleOpen("testCollaple4")}
              aria-label="expand"
              size="small"
            >
              {open === "testCollaple4" ? (
                <RemoveCircleOutlineOutlinedIcon />
              ) : (
                <ControlPointOutlinedIcon />
              )}
            </IconButton>
          }
        ></CardHeader>
        <Collapse
          className="px-5"
          in={open === "testCollaple4"}
          timeout="auto"
          unmountOnExit
        >
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 , opacity: ".8 !important"}}>
                Client Onboarding - Skip AHD Page:
              </Typography>
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Onboarding API Active:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
              <div className="d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Skip AHD Page:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
              <div className="d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Skip T&C Page:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Store CDF on the fly:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>    
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Store CDF and Form on after form Submission:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <div>

              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Show UID entry field in the entity details screen:
              </Typography>
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              ** This function overwrites system generated UID **
              </Typography>
              </div>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
            <div className="d-flex justify-content-between">
              <Typography className="my-auto mx-1" variant="body2" sx={{ fontWeight: 600 }}>
                Required Format:
              </Typography>
            <TextField  name="name"/>
            </div>
            <div className="d-flex justify-content-between ">
              <Typography className="my-auto mx-1" variant="body2" sx={{ fontWeight: 600 }}>
                Include UID on Reference Line:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            </div>
          </div>  
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Update CDF Record on the fly:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Allow second signature submission:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                  Use same agent:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                 Second submission mandatory:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>

            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Include Additional Information on E-Submit PDF:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Treaty Country (Activate suppress warnings):
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Non Treaty Country (Activate suppress warnings):
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              IGA Process (Activate suppress warnings):
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Show U.S. sourced income declaration:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                And When No U.S Sourced Income, Hide Chapter 4 and DRE page:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Show Retroactive statement (only show/apply for W-8 Forms):
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Render full screen
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Make mandatory
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Enable Save & Exit Process:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Send for Signature Process(Continuation URL):
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                By Using Email ID and password:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
            </div>
          </div> 
          <div className="row my-1">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Enable allocation statement creation:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Enable Electronic Recipient Statement consent:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex p-0">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 , opacity:"1 !important" }}>
                Consent to send an electronic 1042-S or 1099
              </Typography>
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Enable Exempt from Backup Withholding Page Pop-Up:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Hide Download template to complete withholding statement :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Name Confirmation :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Address Confirmation :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Request Bank/Account information :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 , opacity:"1 !important"}}>
                and when 'Yes' make mandatory :
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Request income type :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 , opacity:"1 !important"}}>
                and when 'Yes' make mandatory :
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Maximum number of Income Types allowed :
              </Typography>
            </div>
            <div className="col-4 d-flex">
            <TextField fullWidth name="name"/>
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Enable VAT Number Collection:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Hide W-8BEN-E Treaty 14c :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Make controlling person mandatory :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div>  
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Hide W-8ECI Line 12:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Show Download PDF option on Thank You page :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Show MForms Mobile Wallet Flow on Thank You page :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Maximum number of Income Types allowed :
              </Typography>
            </div>
            <div className="col-4 d-flex">
            <TextField fullWidth name="name"/>
            </div>
          </div> 
          <div className="row my-1 d-flex">
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Maximum number of Income Types allowed :
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>
            <div className="col-7 d-flex">
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                Send for Signature Process(Continuation URL):
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
              <div className="d-flex">
                <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 , opacity:"1 !important" }}>
                By Using Email ID and password:
                </Typography>
                <Checkbox defaultChecked={false} color="default" />
              </div>
            </div>
          </div> 
          
        </Collapse>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
            <div className="row m-2" >
              <div className="col-12 ">
                <lable>Next Agent Introduction Text (Shown on Congratulations Page)
                </lable>
                <Editor
                editorState={editorValue}
                onEditorStateChange={(value) => setEditorValue(value)}/>
                <lable>The Send For Signatory email must contain the placeholder ##URL Link## , ##Name of signatory## , ##Name of the person who filled out the form## , ##Email address of the contact##. This will be replaced with the actual Continuation URL, Name of signatory ,Name of the person who filled out the form, Email address of the contact when the email is sent</lable>
              </div>
           </div>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
        <div className="row m-2">
              <div className="col-6">
                <lable>Skipped steps: (Removed from the submission process)</lable>
                <div className="inner-scroll-div">
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Forms
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Federal Tax
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Single US Owner Details
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Taxpayer Information (Individual only)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Taxpayer Information (Non US Individual only)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Taxpayer Information (Entity only)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Taxpayer Information (Non US Entity only)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Taxpayer Information (GIIN)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Form selection
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    W-8IMY Related Files
                    </Typography>
                  </div>

                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    W-8BEN Oct 2021 Part II (When Treaty Claim = No)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    W-8BEN-E Part III (When Treaty Claim = No)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (8233)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Name and Address
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    ECI Mandatory Information
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    US Sourced Income Declaration (optional)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Income Code
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    United States Citizenship Status
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    United States substantial Presence Test (Optional)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Chapter 4 Status
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    U.S. FATCA Classification
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Disregarded Entity
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Exemption from Backup Withholding
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Exemption from FATCA reporting
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Tax Identification Number
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Specified U.S. Person Determination
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    ECI Income report
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Treaty Claim
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Special Rates and Conditions
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Supporting Documentation (W9)
                    </Typography>
                  </div>

                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Supporting Documentation (BEN)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Supporting Documentation (BEN-E)
                    </Typography>
                  </div>
                           <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Supporting Documentation (IMY)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Supporting Documentation (EXP)
                    </Typography>
                  </div>         
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (W9)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Supporting Documentation (ECI)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (W9)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (BEN-E)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (BEN-E)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (BEN)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (BEN)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (IMY)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (IMY)
                    </Typography>
                  </div>

                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (EXP)
                    </Typography>
                  </div>
                      <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (EXP)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (ECI)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (ECI)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    US Tax Certification Complete
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (8233)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Substantial U.S. Presence Test
                    </Typography>
                  </div>

                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Tax Identification Number
                    </Typography>
                  </div>
                      <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Identification of Beneficial Owner
                    </Typography>
                  </div>    <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Treaty Claim
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Supporting Documentation (8233)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (Self-Cert Entity)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (Self-Cert Entity)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Penalties of Perjury Certification (Self-Cert Individual)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Electronic Signature (Self-Cert ind)
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    W-9 Exempt from BUW (Individual & Sole P's')
                    </Typography>
                  </div>
                  <div className="d-flex ">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Residency InformationForm
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <lable>Hidden sections: (Not shown in the web page)</lable>
                <div className="inner-scroll-div">
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Address Line 3 (Optional)
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Capacity (do not show for entities)
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Capacity (do not show for individuals)
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Form Guides
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Form Reveal
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Form Selection Guide - Direct Request question
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Form Selection Guide - REIT question
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    General Classification
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Hide Account Holder Details Non-US Individual DBA Field
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Hide Account Holder Details Selector Buttons
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Hide Account Holder Details Selector Buttons
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Language drop down
                    </Typography>
                  </div>
                  <div className="d-flex">
                    <Checkbox className="p-0" defaultChecked={false} color="default" />
                    <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
                    Multiple tax jurisdictions
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <lable>Retroactive statement:
                </lable>
                <TextField
                  placeholder="MultiLine with rows: 2 and rowsMax: 4"
                  multiline
                  rows={2}
                  maxRows={4}
                  fullWidth
                  />
                <div >
                    <lable>Retroactive Effective Date: </lable>
                    <br></br>
                    <TextField  name="name"/>
                </div>
                <lable style={{opacity:"1 !important"}}>URL Options </lable>
              </div>
          </div>
      </div>
      <div className="col-lg-11 col-12 my-2 expend-card mx-auto">
        <CardHeader
          className=""
          title="
          URL Options"
          action={
            <IconButton
              onClick={() => handleOpen("testCollaple5")}
              aria-label="expand"
              size="small"
            >
              {open === "testCollaple5" ? (
                <RemoveCircleOutlineOutlinedIcon />
              ) : (
                <ControlPointOutlinedIcon />
              )}
            </IconButton>
          }
        ></CardHeader>
        <Collapse
          className="px-5"
          in={open === "testCollaple5"}
          timeout="auto"
          unmountOnExit
        >
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Form feed username:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Form feed password:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              TIN check username:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              TIN check password:
              </Typography>
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>

          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Supports TIN validation:
              </Typography>
            </div>
            <div className="col-7">
            <FormControl>
              <RadioGroup className="d-flex flex-row"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            </div>
          </div>
          <div className="row my-1">
            <div className="col-5 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Continue after TIN validation failure:
              </Typography>
            </div>
            <div className="col-7 d-flex">
            <FormControl className="w-75">
              <RadioGroup className="d-flex flex-row"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
              <p>(Max 2 attempts allowed per TIN per 24 hours)</p>
            </div>
          </div>

          <div className="row my-1" >
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Enable Finish/Exit/Save And Exit URL:
              </Typography>
              <Checkbox defaultChecked={false} color="default" />
            </div>

          </div>
          <div className="row my-1" >
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Do Not Accept URL:
              </Typography>
 
            </div>
            <div className="col-5">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1" >
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Finish URL:
              </Typography>
     
            </div>
            <div className="col-5">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1" >
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Exit URL:
              </Typography>
     
            </div>
            <div className="col-5">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1" >
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              Save And Exit URL:  
              </Typography>
      
            </div>
            <div className="col-5">
            <TextField fullWidth name="name"/>
            </div>
          </div>
          <div className="row my-1" >
            <div className="col-12 d-flex">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 }}>
              For UUID API calls, entering URL settings here will override the browser alert and close the tab process.
              </Typography>
            </div>
          </div>
          <div className="row my-1" >
            <div className="col-5 d-flex justify-content-between">
              <Typography className="my-auto" variant="body2" sx={{ fontWeight: 600 , opacity:"1 !important" }}>
              GetUUID Service Exipration Time(Enable if greater than 0)
              </Typography>
 
            </div>
            <div className="col-7">
            <TextField fullWidth name="name"/>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="col-lg-11 col-12 my-2 mx-auto">
            <div className="row m-2" >
              <div className="col-12 ">
              <Button className="btn-cstm mx-2" style={{float:"right"}}>Save</Button>
              <Button className="btn-cstm mx-2" style={{float:"right"}}>Cancel</Button>
              </div>
           </div>
      </div>
    </div>
  );
}

export default Agent_Details;
