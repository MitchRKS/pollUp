//const React = require("react");
import React from "react";
import AppBarComponent from "./Components/AppBar";

class New extends React.Component {
  render() {
    return (
      <div>
        <AppBarComponent />
        <h1>Create Prospective Supporter</h1>
        <form action="/" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Affiliation: <input type="text" name="affiliation" />
          <br />
          House District: <input type="number" name="house_district" />
          <br />
          Senate District: <input type="number" name="senate_district" />
          <br />
          Have they already been contacted?{" "}
          <input type="checkbox" name="contacted" />
          <br />
          <input type="submit" name="" value="Create Voter" />
        </form>
      </div>
    );
  }
}

export default New;
