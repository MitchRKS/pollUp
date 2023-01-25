const React = require("react");

class Show extends React.Component {
  render() {
    const voter = this.props.fruit;

    return (
      <div>
        <h1>Profile View</h1>
        {/* Name: {voter.name}
        Affiliation: {voter.affiliation}
        House District: {voter.house_district}
        Senate District: {voter.senate_district}
        Contacted: {voter.contacted} */}
        <nav>
          <a href="/index">Home</a>
        </nav>
      </div>
    );
  }
}

module.exports = Show;
