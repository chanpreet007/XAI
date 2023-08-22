import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GithubDetails from "./gitHub";

function createData(
  Credentials: string
  //   calories: number,
  //   fat: number,
  // carbs: number,
  // protein: number,
  // price: number,
) {
  return {
    Credentials,
    // calories,
    // fat,
    // carbs,
    // protein,
    // price,
    history: [
      {
        businessAccessKey: "11091700sdsds",
        secretKey: "test11091700sdsds",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Credentials}
        </TableCell>
        {/* <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell> */}
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Access Key</TableCell>
                    <TableCell>Secret Key</TableCell>
                    {/* <TableCell align="right">Purpose</TableCell>
                    <TableCell align="right">Data Info</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.businessAccessKey}>
                      <TableCell component="th" scope="row">
                        {historyRow.businessAccessKey}
                      </TableCell>
                      <TableCell>{historyRow.secretKey}</TableCell>
                      {/* <TableCell align="right">{historyRow.purpose}</TableCell>
                      <TableCell align="right">{historyRow.dataInfo}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [createData("")];

export default function CollapsibleTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <h1>Credentials</h1>
        <Typography variant="h6" gutterBottom component="div" color="secondary">
          You will need access keys and secret keys to get data.
        </Typography>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.Credentials} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box component={Paper} sx={{marginTop:'20px'}}>
        <GithubDetails />
      </Box>
    </>
  );
}
