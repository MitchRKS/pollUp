import React from "react";
import AppBarComponent from "./Components/AppBar";
import BaseLayout from "./Layout/Base";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

class Show extends React.Component {
  render() {
    const voter = this.props.voter;

    return (
      <BaseLayout>
        <h1>Profile View</h1>
        <TableContainer className="center">
          <Table
            sx={{ minWidth: 650, maxWidth: 1300 }}
            aria-label="simple table"
          >
            <TableBody>
              <TableRow
                key={voter.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="tdCenter"
              >
                <TableCell component="td" scope="row">
                  Name: {voter.name}
                </TableCell>
                <TableCell component="td">
                  Affiliation: {voter.affiliation}
                </TableCell>
                <TableCell component="td">
                  Senate District: {voter.senate_district}
                </TableCell>
                <TableCell component="td">
                  House District: {voter.house_district}
                </TableCell>
              </TableRow>
              <TableRow className="tdCenter">
                <TableCell component="td" scope="row">
                  Address: {voter.street_address}
                </TableCell>
                <TableCell component="td">City: {voter.city}</TableCell>
                <TableCell component="td">State: {voter.state}</TableCell>
                <TableCell component="td">Zip Code: {voter.fiveZip}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {
          <form action={`/voters/${voter._id}/edit`} method="GET">
            <Button variant="outlined" type="submit" value="Edit">
              Edit
            </Button>
          </form>
        }
        {
          <form action={`/voters/${voter._id}?_method=DELETE`} method="POST">
            <Button variant="outlined" type="submit" value="Edit">
              Delete
            </Button>
          </form>
        }
      </BaseLayout>
    );
  }
}

export default Show;
