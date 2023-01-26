const React = require("react");

class Show extends React.Component {
  render() {
    const voter = this.props.voter;

    return (
      <div>
        <h1>Profile View</h1>
        Name: {voter.name}
        Affiliation: {voter.affiliation}
        House District: {voter.house_district}
        Senate District: {voter.senate_district}
        Contacted: {voter.contacted}
        <nav>
          <a href="/voters">Home</a>
          <a href="/voters/{voter._id}/edit" />
        </nav>
      </div>
    );
  }
}

module.exports = Show;
