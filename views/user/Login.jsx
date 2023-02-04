import React from "react";
import AppBarComponent from "../Components/AppBar";
import BaseLayout from "../Layout/Base";

class Signup extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>Login</h1>
        <a href="/user/signup">
          <h3>Signup</h3>
        </a>

        <form action="/user/login" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Login" />
        </form>
      </BaseLayout>
    );
  }
}

export default Signup;
