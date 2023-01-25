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
                <a href={`/voters/${fruit.id}`}> {voter.name} </a> is a
                registered {voter.affiliation}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
