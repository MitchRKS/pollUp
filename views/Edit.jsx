import React from "react";
import AppBarComponent from "./Components/AppBar";
import { Button, TextField } from "@mui/material";
import { VoterForm } from "./Components/VoterForm";
import BaseLayout from "./Layout/Base";

class Edit extends React.Component {
  render() {
    const { _id } = this.props.voter;
    return (
      <BaseLayout>
        <AppBarComponent />
        <form action={`/voters/${_id}?_method=PATCH`} method="POST">
          <VoterForm form={this.props.voter} />
        </form>
      </BaseLayout>
    );
  }
}

export default Edit;
