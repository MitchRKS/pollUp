import React from "react";
import AppBarComponent from "./Components/AppBar";
import { VoterForm } from "./Components/VoterForm";
import BaseLayout from "./Layout/Base";

class New extends React.Component {
  render() {
    return (
      <BaseLayout>
        <AppBarComponent />
        <h1>Create Prospective Supporter</h1>
        <form action="/voters" method="POST">
          <VoterForm />
        </form>
      </BaseLayout>
    );
  }
}

export default New;
