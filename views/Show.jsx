import React from "react";
import AppBarComponent from "./Components/AppBar";
import BaseLayout from "./Layout/Base";

class Show extends React.Component {
  render() {
    const voter = this.props.voter;

    return (
      <BaseLayout>
        <div className="center">
          <h1>Profile View</h1>
          <table>
            Name: {voter.name}
            Affiliation: {voter.affiliation}
            House District: {voter.house_district}
            Senate District: {voter.senate_district}
            Contacted: {voter.contacted}
          </table>
          <button>
            <a href="/voters">Home</a>
          </button>
          <br />
          <button>
            <a href={`/voters/${voter._id}/edit`}>Edit Voter</a>
          </button>
          <br />
          <form action={`/voters/${voter._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE" />
          </form>
        </div>
      </BaseLayout>
    );
  }
}

export default Show;
