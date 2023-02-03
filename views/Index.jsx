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

class Index extends React.Component {
  render() {
    const { voters } = this.props;
    return (
      <BaseLayout>
        <AppBarComponent />
        <h1>pollUp Master Index</h1>
        <nav>
          <a href="/voters/new">Create New Voter</a>
        </nav>

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Party</TableCell>
                <TableCell>KS Senate District</TableCell>
                <TableCell>Edit Voter</TableCell>
                <TableCell>Delete Voter</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {this.props.voters.map((voter, i) => {
          return (
            <div>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    <TableRow
                      key={voter.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <a href={`/voters/${voter.id}`}> {voter.name} </a>
                      </TableCell>
                      <TableCell align="right">{voter.affiliation}</TableCell>
                      <TableCell align="right">
                        {voter.senate_district}
                      </TableCell>
                      <TableCell align="right">
                        {
                          <form
                            action={`/voters/${voter._id}/edit`}
                            method="GET"
                          >
                            <Button
                              variant="outlined"
                              type="submit"
                              value="Edit"
                            >
                              Edit
                            </Button>
                          </form>
                        }
                      </TableCell>
                      <TableCell align="right">
                        {
                          <form
                            action={`/voters/${voter._id}?_method=DELETE`}
                            method="POST"
                          >
                            <Button
                              variant="outlined"
                              type="submit"
                              value="Edit"
                            >
                              Delete
                            </Button>
                          </form>
                        }
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          );
        })}
      </BaseLayout>
    );
  }
}

export default Index;
