const React = require("react");

class Index extends React.Component {
  render() {
    const { voters } = this.props;

    return (
      <div>
        <h1>pollUp Master Index</h1>
        <nav>
          <a href="/new">Create New Voter</a>
        </nav>
        <ul>
          {this.props.voters.map((voter, i) => {
            return (
              <li key={i}>
                <a href={`/voters/${voter.id}`}> {voter.name} </a> is a
                registered {voter.affiliation}.
                <form action={`/voters/${voter._id}/edit`} method="GET">
                  <input type="submit" value="Edit" />
                </form>
                <form
                  action={`/voters/${voter._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
