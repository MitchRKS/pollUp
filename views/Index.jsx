import React from "react";
import { Button, AppBar } from "@mui/material";
import AppBarComponent from "./Components/AppBar";
import BaseLayout from "./Layout/Base";

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
        <ul>
          {this.props.voters.map((voter, i) => {
            return (
              <li key={i}>
                <div>
                  <a href={`/voters/${voter.id}`}> {voter.name} </a> is a
                  registered {voter.affiliation}.
                  <form action={`/voters/${voter._id}/edit`} method="GET">
                    <Button variant="outlined" type="submit" value="Edit">
                      Edit
                    </Button>
                  </form>
                  <form
                    action={`/voters/${voter._id}?_method=DELETE`}
                    method="POST"
                  >
                    <Button variant="outlined" type="submit" value="Edit">
                      Delete
                    </Button>
                  </form>
                </div>
              </li>
            );
          })}
        </ul>
      </BaseLayout>
    );
  }
}

export default Index;
