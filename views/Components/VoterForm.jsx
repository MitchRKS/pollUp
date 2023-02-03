import React from "react";
import { Button, TextField } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

export class VoterForm extends React.Component {
  render() {
    console.log(this.props, "voter form console log");
    let name,
      id,
      affiliation,
      house_district,
      senate_district,
      street_address,
      city,
      state,
      fiveZip;
    if (this.props.form) {
      let props = this.props.form;
      name = props.name;
      id = props.id;
      affiliation = props.affiliation;
      house_district = props.house_district;
      senate_district = props.senate_district;
      street_address = props.street;
      city = props.city;
      state = props.state;
      fiveZip = props.fiveZip;
    }

    return (
      <div className="center">
        <TextField
          id="outlined-helperText"
          name="name"
          defaultValue={name ? name : ""}
          helperText="Contact Name"
          className="paddingTB"
        />
        <TextField
          id="outlined-helperText"
          name="affiliation"
          defaultValue={affiliation ? affiliation : ""}
          helperText="Contact Affiliation"
        />
        <TextField
          id="outlined-helperText"
          name="senate_district"
          defaultValue={senate_district ? senate_district : ""}
          helperText="Contact Senate District"
        />
        <TextField
          id="outlined-helperText"
          name="house_district"
          defaultValue={house_district ? house_district : ""}
          helperText="Contact House District"
        />

        <TextField
          id="outlined-helperText"
          name="street_address"
          defaultValue={street_address ? street_address : ""}
          helperText="Contact Street Address"
        />
        <TextField
          id="outlined-helperText"
          name="city"
          defaultValue={city ? city : ""}
          helperText="Contact City"
        />
        <TextField
          id="outlined-helperText"
          name="state"
          defaultValue={state ? state : ""}
          helperText="Contact State"
        />
        <TextField
          id="outlined-helperText"
          name="fiveZip"
          defaultValue={fiveZip ? fiveZip : ""}
          helperText="Contact Zip Code"
        />
        <Button type="submit" name="" variant="contained">
          Submit
        </Button>
      </div>
    );
  }
}
