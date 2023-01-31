//const React = require("react");
import React from "react";
import { Button, TextField } from "@mui/material";

export class VoterForm extends React.Component {
  render() {
    return (
      <>
        <TextField
          id="outlined-helperText"
          label="name"
          name="name"
          helperText="Edit Contact Name"
        />
        <TextField
          id="outlined-helperText"
          label="Affiliation"
          name="affiliation"
          helperText="Edit Contact Affiliation"
        />
        <TextField
          id="outlined-helperText"
          label="State House District"
          name="house_district"
          helperText="Edit Contact House District"
        />
        <TextField
          id="outlined-helperText"
          label="State Senate District"
          name="senate_district"
          helperText="Edit Contact Senate District"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </>
    );
  }
}
