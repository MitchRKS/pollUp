//const React = require("react");
import React from "react";
import { Button, TextField } from "@mui/material";

export class VoterForm extends React.Component {
  render() {
    return (
      <>
        <TextField
          id="outlined-helperText"
          name="name"
          defaultValue={""}
          helperText="Edit Contact Name"
        />
        <TextField
          id="outlined-helperText"
          name="affiliation"
          defaultValue={""}
          helperText="Edit Contact Affiliation"
        />
        <TextField
          id="outlined-helperText"
          name="house_district"
          defaultValue={""}
          helperText="Edit Contact House District"
        />
        <TextField
          id="outlined-helperText"
          name="senate_district"
          defaultValue={""}
          helperText="Edit Contact Senate District"
        />
        <Button type="submit" name="" variant="contained">
          Submit
        </Button>
      </>
    );
  }
}
