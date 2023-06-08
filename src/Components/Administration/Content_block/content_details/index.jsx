import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DOMPurify from "dompurify";
import "./details.scss";

export default function Content_details() {
  const [data, setData] = useState({ name: "", contentPreview: "" });

  const [editorValue, setEditorValue] = useState(
    data?.pageContent
      ? () => {
          const blocksFromHTML = convertFromHTML(data?.pageContent);
          const contentState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
          );

          return EditorState.createWithContent(contentState);
        }
      : () => EditorState.createEmpty()
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
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
                // value={data.name}
                // onChange={handleChange}
              />
              {/* )} */}
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
                onEditorStateChange={(value) => setEditorValue(value)}
              />
            </div>
          </div>
        </div>

        <div>
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
            {/* {!edit ? ( */}
            <Button
              size="large"
              type="submit"
              color="secondary"
              sx={{ mr: 2 }}
              variant="contained"
            >
              Save
            </Button>
            {/* )  */}
            {/* : (
              <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                Update
              </Button>
            )} */}
          </div>
        </div>
      </form>
    </Card>
  );
}
