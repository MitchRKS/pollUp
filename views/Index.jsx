import React from "react";
import { Button, AppBar } from "@mui/material";
import AppBarComponent from "./Components/AppBar";
import BaseLayout from "./Layout/Base";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RowingSharp } from "@mui/icons-material";
import { maxWidth } from "@mui/system";

class Index extends React.Component {
  render() {
    const { voters } = this.props;
    return (
      <BaseLayout>
        <h1>pollUp Master Index</h1>
        <nav>
          <a href="/voters/new">Create New Voter</a>
        </nav>

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

            {this.props.voters.map((voter, i) => {
              return (
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
                    <TableCell component="td">
                      {voter.senate_district}
                    </TableCell>
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
              );
            })}
          </Table>
        </TableContainer>
      </BaseLayout>
    );
  }
}

export default Index;
