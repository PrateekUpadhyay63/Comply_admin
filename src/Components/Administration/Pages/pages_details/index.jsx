import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  TextField,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  Card,
  Divider,
  div,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
  convertFromHTML,
  convertToHTML
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DOMPurify from "dompurify";
import {
  createPAGES,
  getParentDropDown,
  getPageById,
  updatePAGES
} from "../../../../Redux/Actions/action";
import "./details.scss";

export default function Pages_details() {
  const dispatch = useDispatch();
  const dropDown = useSelector((state) => state.ParentDropDownReducer);
  const idPageData= useSelector((state) => state.pageDataByIdReducer);
  let params = useParams();
  const [data, setData] = useState(
    params.id
      ? {
          id: params.id,
          name: "",
          translations: "",
          parent: null,
          displayOnTopMenu: false,
          displayOnFooter: false,
          redirectPageLabelToURL: "",
          menuBackgroundColor: "",
          unselectedTextColor: "",
          selectedTextColor: "",
          displayOnLeftMenu: false,
          pageContent: "",
          summary: "",
        }
      : 
      {
          name: "",
          translations: "",
          parentId: null,
          displayOnTopMenu: false,
          displayOnFooter: false,
          redirectPageLabelToURL: "",
          menuBackgroundColor: "",
          unselectedTextColor: "",
          selectedTextColor: "",
          displayOnLeftMenu: false,
          pageContent: "",
          summary: "",
        }
  );
  const[parent,setParent]=useState();
  const [editorValue, setEditorValue] = useState(
    data?.pageContent
      ? () => {
        const blocksToHTML = convertToHTML(data?.pageContent);
        console.log(blocksToHTML)
          const blocksFromHTML = convertFromHTML(blocksToHTML);
          const contentState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
          );
          return EditorState.createWithContent(blocksFromHTML);
        }
      : () => EditorState.createEmpty()
  );

  const [editorValue1, setEditorValue1] = useState(
    data?.summary
      ? () => {
          const blocksFromHTML = convertFromHTML(data?.summary);
          const contentState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
          );

          return EditorState.createWithContent(contentState);
        }
      : () => EditorState.createEmpty()
  );
  useEffect(() => {
    setParent(localStorage.getItem("parent"))
    let parents=localStorage.getItem("parent")
    if (params?.id) {
      dispatch(getPageById(params.id));

      setData(idPageData.pageDataById)
    } 
    dispatch(getParentDropDown());
    // setData({ ...data, [data.parentId]: parent });

  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(params?.id){
      dispatch(updatePAGES(data));
    }else{
      dispatch(createPAGES(data));
    }
  };

    console.log(data?.pageContent,"consoled" )
  
  return (
    <Card>
      {/* <CardHeader title="Edit Page" /> */}
      {/* <Divider sx={{ m: "0 !important" }} /> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Parent:
              </Typography>
            </div>
            <div className="col-9">
              <Select
                fullWidth
                // disabled={isView}
                // defaultValue='0'
                name={params.id ? "parent":"parentId"}
                value={params?.id ? data?.parent : data?.parentId}
                onChange={handleChange}
              >
                <MenuItem>Select</MenuItem>
                {dropDown?.parentDropDown?.map((type, i) => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Name:
              </Typography>
            </div>
            <div className="col-9">
              {/* {isView ? ( */}
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {/* {data.name} */}
              </Typography>
              {/* ) : ( */}
              <TextField
                fullWidth
                name="name"
                value={data?.name}
                onChange={handleChange}
              />
              {/* )} */}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Display on top menu:
              </Typography>
            </div>
            <div className="col-9">
              <Checkbox
                name="displayOnTopMenu"
                checked={data?.displayOnTopMenu}
                color="default"
                onClick={(e) => handleToogle(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Redirect page label to URL:
              </Typography>
            </div>
            <div className="col-9">
              {/* {isView ? ( */}
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {/* {data.name} */}
              </Typography>
              {/* ) : ( */}
              <TextField
                fullWidth
                name="redirectPageLabelToURL"
                // placeholder='Enter Name'
                value={data?.redirectPageLabelToURL}
                onChange={handleChange}
              />
              {/* )} */}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Menu background color:
              </Typography>
            </div>
            <div className="col-9">
              <TextField
                fullWidth
                name="menuBackgroundColor"
                // placeholder='Enter Name'
                value={data?.menuBackgroundColor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Unselected text color:
              </Typography>
            </div>
            <div className="col-9">
              <TextField
                fullWidth
                name="unselectedTextColor"
                value={data?.unselectedTextColor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Selected text color:
              </Typography>
            </div>
            <div className="col-9">
              <TextField
                fullWidth
                name="selectedTextColor"
                // placeholder='Enter Name'
                value={data?.selectedTextColor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Display on footer:
              </Typography>
            </div>
            <div className="col-9">
              <Checkbox
                name="displayOnFooter"
                checked={data?.displayOnFooter}
                color="default"
                onClick={(e) => handleToogle(e)}

              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Display on left menu:
              </Typography>
            </div>
            <div className="col-9">
              <Checkbox
                name="displayOnLeftMenu"
                checked={data?.displayOnLeftMenu}
                color="default"
                onClick={(e) => handleToogle(e)}

              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Content:
              </Typography>
            </div>
            <div className="col-9">
              <Editor
                editorState={editorValue}
                onEditorStateChange={(value) => {
                  setEditorValue(value);
                  //  setData({ ...data, pageContent:editorValue1 })
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Summary:
              </Typography>
            </div>
            <div className="col-9">
              <Editor
                editorState={editorValue1}
                onEditorStateChange={(value) => {
                  setEditorValue1(value);
                  //  setData({ ...data, summary:editorValue1 });
                }}
              />
            </div>
          </div>
        </div>

        <div className="container actionBtn">
          <Button
            type="reset"
            size="large"
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
          >
            cancel
          </Button>
          {!params?.id ? (
          <Button
            size="large"
            type="submit"
            color="secondary"
            sx={{ mr: 2 }}
            variant="contained"
          >
            Save
          </Button>
           )  
           : (
              <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                Update
              </Button>
            )} 
        </div>
      </form>
    </Card>
  );
}
