const React = require("react");

class Edit extends React.Component {
  render() {
    const { name, _id, affiliation, house_district, senate_district } =
      this.props.voter;

    return (
      <>
        <h1>{name} Edit Page</h1>
        <form action={`/${_id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={name} />
          <br />
          Affiliation:{" "}
          <input type="text" name="affiliation" defaultValue={affiliation} />
          <br />
          House District:{" "}
          <input
            type="number"
            name="house_district"
            defaultValue={house_district}
          />
          <br />
          Senate District:{" "}
          <input
            type="number"
            name="senate_district"
            defaultValue={senate_district}
          />
          <br />
          <input type="submit" value="Submit Edits" />
        </form>
      </>
    );
  }
}

module.exports = Edit;
