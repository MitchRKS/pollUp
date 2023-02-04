import React from "react";
import BaseLayout from "../Layout/Base";

class Signup extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>Signup</h1>

        <form action="/user/signup" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Signup" />
        </form>
      </BaseLayout>
    );
  }
}

export default Signup;
