import React, { useEffect, useReducer, useState, useCallback } from "react";
import {json, useNavigate } from "react-router-dom";
import Utils from '../../../../Utils'
import {
  Collapse,
  CardHeader,
  IconButton,
  FormControl,
  Typography,
  Select,
  MenuItem,
  Input,
  Radio,
  Button,
  TextField,
  Box,
  Icon,
  Pagination,
  Tooltip,
  Grid,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableRow,
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
import { getAllPages, deletePAGES } from "../../../../Redux/Actions/action";
import DialogTransition from "../../../reusables/deleteDialog"
import "./pages.scss";

const tableHead = [
  {
    id: "name",
    label: "Name",
    sort: true,
  },
  {
    id: "subPage",
    label: "Sub pages",
    sort: true,
  },
  {
    id: "translations",
    label: "Translations",
    sort: true,
  },

  {
    id: "action",
    label: "Actions",
    sort: false,
  },
  // {
  //   id: "order",
  //   label: "Order",
  //   sort: false,
  // },
];

const getTableData = (
  data,
  setOpen,
  getTeamList,navigate,dispatch,setIdData
) => {



  if (data && data.length > 0) {
    return data.map((row, index) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">
            {/* {row.subPage ? row.subPage : "no sub page Add sub page"} */}
           {row.subPage ? row.subPage :"no " }<p>sub page<span onClick={() => {
              navigate(Utils.Pathname.pageInfo);
              localStorage.setItem("parent",JSON.stringify(row.name))}} className="blueText"> Add sub page</span></p>
          </TableCell>
          <TableCell align="center">
            {row.translations ? row.translations : "N/A"}
          </TableCell>
          <TableCell align="center" style={{ minWidth: "7rem" }}>
            {/* <Tooltip title="View">
             <RemoveRedEyeIcon color="disabled"/>
            </Tooltip> */}
            <Tooltip title="Edit" >
              <EditOutlinedIcon className="iconsClass" color="disabled" onClick={() => {
              // navigate(Utils.Pathname.pageInfo);
              navigate(`${Utils.Pathname.pageInfo}/${row.id}`);
            }
            }/>
            </Tooltip>
            <Tooltip title="Delete">
              <DeleteOutlineOutlinedIcon
                className="iconsClass"
                color="disabled"
                onClick={()=>{
                  setOpen(true)   
                  setIdData(row.id)
                }}
              />
            </Tooltip>
          </TableCell>
          {/* <TableCell align="center" style={{ minWidth: "7rem" }}>
             <KeyboardDoubleArrowUpIcon color="disabled"/>` 
             <KeyboardDoubleArrowDownIcon color="disabled"/>
          </TableCell> */}
        </TableRow>
      );
    });
  } else {
    return <TableRow>No Data Available</TableRow>;
  }
};

const getList = async () => {
  // const reqData = await fetch('https://fixeddev.iworklab.com/cms/team')
  // const resData = await reqData.json()
  // console.log(resData.data, 'RESDATA')
  // setuserData(resData.data)
};

const originalList = ["Home"];

function Pages() {
  const navigate=useNavigate();

  const [status, setStatus] = useState("");
  const [value, setValue] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [userData, setuserData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [copyList, setCopyList] = useState(originalList);
  const [idData, setIdData] = useState(0)

  // ** Hooks
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.getAllPagesReducer);
  
  const getTeamList = async () => {
    dispatch(getAllPages());
  };

  const deleteItems= async()=>{
    dispatch(deletePAGES(idData));
    dispatch(getAllPages());
  }
  
  const requestSearch = (searched) => {
    setCopyList(originalList.filter((item) => item.name.includes(searched)));
  };
  useEffect(() => {
    getTeamList();
    console.log(pageData.pageData,"pagedata")
  }, []);


  const handleFilter = useCallback((val) => {
    setValue(val);
  }, []);

  const handleStatusChange = useCallback((e) => {
    console.log(e.target.value, "vals");
    setStatus(e.target.value);
  }, []);

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              p: 5,
              pb: 3,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "end",
              gap: 2,
            }}
          >
            {/* <Button variant='contained' href='/moneyCalculator/calculator_details'>
              Add
            </Button>
            <Button color='secondary' variant='outlined' startIcon={<Icon icon='mdi:export-variant' />}>
              Export
            </Button> */}
          </Box>
        </Grid>
      </Grid>
      <Paper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHeader
                requestSearch={requestSearch}
                value={value}
                handleFilter={handleFilter}
                handleStatusChange={handleStatusChange}
              />
            </Table>
          </Grid>
        </Grid>
        <TableContainer style={{ overflowY: "hidden" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{
              minHeight: "80px",
            }}
          >
            <TableHead sx={{ backgroundColor: "secondary" }}>
              <TableRow>
                {tableHead.map((head) => (
                  <TableCell
                    key={head.id}
                    align="center"
                    style={{ minWidth: head.minWidth }}
                  >
                    {head.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* userData, */}
              {getTableData(
                 pageData.pageData,setOpen, getTeamList,navigate,dispatch,setIdData)}
            </TableBody>
          </Table>
          <Grid
            container
            sx={12}
            style={{
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            <Grid sx={2}>
              <Select
                label="Limit"
                defaultValue={10}
                style={{
                  maxWidth: "5rem",
                  maxHeight: "2rem",
                  padding: "0 10px",
                }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </Grid>
            <Grid
              sx={10}
              style={{
                margin: "0 10px",
              }}
            >
              <Pagination count={10} shape="rounded" color="primary" />
            </Grid>
          </Grid>
        </TableContainer>
      </Paper>
      <DialogTransition
        open={open}
        deleteItems={deleteItems}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        deleteApi={deletePAGES}
        getAllApi={getAllPages}
      />
    </div>
  );
}

export default Pages;
