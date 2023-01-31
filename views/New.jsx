import React from "react";
import AppBarComponent from "./Components/AppBar";
import { VoterForm } from "./Components/VoterForm";
import BaseLayout from "./Layout/Base";

class New extends React.Component {
  render() {
    return (
      <BaseLayout>
        <AppBarComponent />
        <h1 className="center">Create Prospective Supporter</h1>
        <form action="/voters" method="POST" className="center">
          <VoterForm />

          {/* Name: <input type="text" name="name" />
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
          <input type="submit" name="" value="Create Voter" /> */}
        </form>
      </BaseLayout>
    );
  }
}

export default New;
