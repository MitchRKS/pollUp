import React from "react";

// Higher order component

class BaseLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>pollUp</title>

          <link rel="stylesheet" href={"/style.css"} />
        </head>

        <body>{this.props.children}</body>
      </html>
    );
  }
}

export default BaseLayout;
