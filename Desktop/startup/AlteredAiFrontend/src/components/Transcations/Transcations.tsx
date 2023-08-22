import { useState, Fragment, Suspense} from "react";
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

import dynamic from "next/dynamic";

const DynamicTable = dynamic(() => import("@material-ui/core/Table"), {
  ssr: false,
});

import moment from "moment";

function createData(name: string, date: string, price: number) {
  return {
    name,
    date,
    price,
    history: [
      {
        userKey: "232131231232131",
        businessKey: "11091700sdsds",
        purpose: "testst",
        dataInfo: "test data shared",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
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
          {row.name}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom>
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>UserIdentity</TableCell>
                    <TableCell>BusinessIdentity</TableCell>
                    <TableCell align="right">Purpose</TableCell>
                    <TableCell align="right">Data Info</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.userKey}>
                      <TableCell component="th" scope="row">
                        {historyRow.userKey}
                      </TableCell>
                      <TableCell>{historyRow.businessKey}</TableCell>
                      <TableCell align="right">{historyRow.purpose}</TableCell>
                      <TableCell align="right">{historyRow.dataInfo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

const rows = [
  createData(
    uuidv4(),
    moment.utc().startOf("day").subtract(2, "days").toISOString(),
    6.1
  ),
  createData(
    uuidv4(),
    moment.utc().startOf("day").subtract(3, "days").toISOString(),
    5.02
  ),
  createData(
    uuidv4(),
    moment.utc().startOf("day").subtract(4, "days").toISOString(),
    5.008
  ),
  createData(
    uuidv4(),
    moment.utc().startOf("day").subtract(5, "days").toISOString(),
    7.145
  ),
  createData(
    uuidv4(),
    moment.utc().startOf("day").subtract(6, "days").toISOString(),
    5.2
  ),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <h1>Data Transcations</h1>
      <DynamicTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Transcation ID</TableCell>
            <TableCell align="right">Transcation Date</TableCell>
            <TableCell align="right">Transcation Price (INR)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </DynamicTable>
    </TableContainer>
  );
}
