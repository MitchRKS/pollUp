import React from "react";
import { Button, TextField } from "@mui/material";

export class VoterForm extends React.Component {
  render() {
    console.log(this.props, "voter form console log");
    let name, id, affiliation, house_district, senate_district;
    if (this.props.form) {
      let props = this.props.form;
      name = props.name;
      id = props.id;
      affiliation = props.affiliation;
      house_district = props.house_district;
      senate_district = props.senate_district;
    }

    return (
      <>
        <TextField
          id="outlined-helperText"
          name="name"
          defaultValue={name ? name : ""}
          helperText="Edit Contact Name"
        />
        <TextField
          id="outlined-helperText"
          name="affiliation"
          defaultValue={affiliation ? affiliation : ""}
          helperText="Edit Contact Affiliation"
        />
        <TextField
          id="outlined-helperText"
          name="house_district"
          defaultValue={house_district ? house_district : ""}
          helperText="Edit Contact House District"
        />
        <TextField
          id="outlined-helperText"
          name="senate_district"
          defaultValue={senate_district ? senate_district : ""}
          helperText="Edit Contact Senate District"
        />
        <Button type="submit" name="" variant="contained">
          Submit
        </Button>
      </>
    );
  }
}
