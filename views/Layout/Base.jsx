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

        <body className="center voterBox">{this.props.children}</body>
      </html>
    );
  }
}

export default BaseLayout;
