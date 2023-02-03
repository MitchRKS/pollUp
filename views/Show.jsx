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
            <TableHead>
              <TableRow className="thCenter">
                <TableCell component="th">Name</TableCell>
                <TableCell component="th">Party</TableCell>
                <TableCell component="th">KS Senate District</TableCell>
                <TableCell component="th">Edit Voter</TableCell>
                <TableCell component="th">Delete Voter</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={voter.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="tdCenter"
              >
                <TableCell component="td" scope="row">
                  <a href={`/voters/${voter.id}`}> {voter.name} </a>
                </TableCell>
                <TableCell component="td">{voter.affiliation}</TableCell>
                <TableCell component="td">{voter.senate_district}</TableCell>
                <TableCell component="td">
                  {
                    <form action={`/voters/${voter._id}/edit`} method="GET">
                      <Button variant="outlined" type="submit" value="Edit">
                        Edit
                      </Button>
                    </form>
                  }
                </TableCell>
                <TableCell component="td">
                  {
                    <form
                      action={`/voters/${voter._id}?_method=DELETE`}
                      method="POST"
                    >
                      <Button variant="outlined" type="submit" value="Edit">
                        Delete
                      </Button>
                    </form>
                  }
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </BaseLayout>
    );
  }
}

export default Show;
