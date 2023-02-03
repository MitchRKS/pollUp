import React from "react";
import AppBarComponent from "../Components/AppBar";
// Higher order component

class BaseLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>pollUp</title>

          <link rel="stylesheet" href={"/style.css"} />
        </head>

        <body className="center">
          <AppBarComponent />
          {this.props.children}
        </body>
      </html>
    );
  }
}

export default BaseLayout;
