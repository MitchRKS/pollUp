const React = require("react");

class Index extends React.Component {
  render() {
    const { voters } = this.props;

    return (
      <div>
        <h1>pollUp Master Index</h1>
        <nav>Nav Bar</nav>
        <ul>
          {this.props.voters.map((voter, i) => {
            return (
              <li key={i}>
                <a href={`/voters/${voter.id}`}> {voter.name} </a> is a
                registered {voter.affiliation}.
              </li>
            );
          })}
        </ul>
        <nav>
          <a href="/new">Create New Voter</a>
        </nav>
      </div>
    );
  }
}

module.exports = Index;
