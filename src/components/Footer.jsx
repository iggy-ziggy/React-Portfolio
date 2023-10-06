import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer className="fixed-bottom bg-secondary">
          <div className="d-flex justify-content-center flex-wrap">
            <a className="p-4">GitHub</a>
            <a className="p-4">LinkedIn</a>
            <a className="p-4">StackOverflow</a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
