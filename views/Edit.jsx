//const React = require("react");
import React from "react";
import AppBarComponent from "./Components/AppBar";

class Edit extends React.Component {
  render() {
    const { name, _id, affiliation, house_district, senate_district } =
      this.props.voter;

    return (
      <>
        <AppBarComponent />
        <h1>{name} Edit Page</h1>
        <form action={`/voters/${_id}?_method=PATCH`} method="POST">
          Name: <input type="text" name="name" defaultValue={name} />
          <br />
          Affiliation:{" "}
          <input type="text" name="affiliation" defaultValue={affiliation} />
          <br />
          House District:{" "}
          <input
            type="number"
            name="house_district"
            defaultValue={house_district}
          />
          <br />
          Senate District:{" "}
          <input
            type="number"
            name="senate_district"
            defaultValue={senate_district}
          />
          <br />
          <input type="submit" value="Submit Edits" />
        </form>
      </>
    );
  }
}

export default Edit;
