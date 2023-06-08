import React, { useEffect, useReducer, useState, useCallback } from "react";
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
import { getAllContent } from "../../../../Redux/Actions/action";
import "./content.scss";

const tableHead = [
  {
    id: "name",
    label: "Name",
    sort: true,
  },
  {
    id: "content_preview",
    label: "Content Preview",
    sort: true,
  },
  {
    id: "translations",
    label: "Translations",
    sort: true,
  },

//   {
//     id: "action",
//     label: "Actions",
//     sort: false,
//   },
  // {
  //   id: "order",
  //   label: "Order",
  //   sort: false,
  // },
];

const getTableData = (
  data,
  setOpen,
  getTeamList
) => {
  // let data = [
  //   {
  //     name: "abc",
  //     sub_pages: "preview",
  //     transations: "xyz",
  //   },
  //   {
  //     name: "abc",
  //     sub_pages: "preview",
  //     transations: "xyz",
  //   },
  //   {
  //     name: "abc",
  //     sub_pages: "preview",
  //     transations: "xyz",
  //   },
  // ];
  if (data && data.length > 0) {
    return data.map((row, index) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">
            {row.sub_pages ? row.sub_pages : "N/A"}
          </TableCell>
          <TableCell align="center">
            {row.transations ? row.transations : "N/A"}
          </TableCell>
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

function Content_Block() {
  const [status, setStatus] = useState("");
  const [value, setValue] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [userData, setuserData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [copyList, setCopyList] = useState(originalList);

  // ** Hooks
  const dispatch = useDispatch();
  const store = useSelector((state) => state.getAllContentReducer);
  const getTeamList = async () => {
    dispatch(getAllContent());
  };

  const requestSearch = (searched) => {
    setCopyList(originalList.filter((item) => item.name.includes(searched)));
  };
  useEffect(() => {
    getTeamList();
  }, []);

  useEffect(() => {
    getTeamList();
  }, [value, status]);

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
              {/* <TableHeader
                requestSearch={requestSearch}
                value={value}
                handleFilter={handleFilter}
                handleStatusChange={handleStatusChange}
              /> */} 
               <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4, alignSelf: 'start' ,justifyContent: 'space-around'}}>
        <Box><TextField
          size='small'
          value={value}
          placeholder='Find'
          sx={{ mr: 6, mb: 2 }}
          onChange={e => handleFilter(e.target.value)}
        />
        <Button className='btn btn-secondary' variant='contained' onClick={getTeamList}>Search</Button>
        </Box>
      </Box>
    </Box>
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
              {getTableData(userData, setOpen, getTeamList)}
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
      {/* <DialogTransition
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      /> */}
    </div>
  );
}

export default Content_Block;
