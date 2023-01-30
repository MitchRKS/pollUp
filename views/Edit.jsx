//const React = require("react");
import React from "react";
import AppBarComponent from "./Components/AppBar";
import { Button, TextField } from "@mui/material";
class Edit extends React.Component {
  render() {
    const { name, _id, affiliation, house_district, senate_district } =
      this.props.voter;

    return (
      <>
        <AppBarComponent />
        <h1>{name} Edit Page</h1>
        <form action={`/${_id}?_method=PATCH`} method="POST">
          <TextField
            id="outlined-helperText"
            label="Name"
            defaultValue={`${name}`}
            helperText="Edit Contact Name"
          />
          <TextField
            id="outlined-helperText"
            label="Affiliation"
            defaultValue={`${affiliation}`}
            helperText="Edit Contact Affiliation"
          />
          <TextField
            id="outlined-helperText"
            label="State House District"
            defaultValue={`${house_district}`}
            helperText="Edit Contact House District"
          />
          <TextField
            id="outlined-helperText"
            label="State Senate District"
            defaultValue={`${senate_district}`}
            helperText="Edit Contact Senate District"
          />
          <Button type="submit" variant="contained">
            Submit Edits
          </Button>
        </form>
      </>
    );
  }
}

export default Edit;
