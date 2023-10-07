import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer className="fixed-bottom bg-secondary">
          <div className="d-flex justify-content-center flex-wrap">
            <a className="fa fa-github p-4" style={{ color: "white", fontSize: 22 }} href="https://github.com/iggy-ziggy"></a>
            <a className="fa fa-linkedin p-4" style={{ color: "white", fontSize: 22 }} href="https://www.linkedin.com/"></a>
            <a className="fa fa-stack-overflow p-4" style={{ color: "white", fontSize: 22 }} href="https://stackoverflow.com/"></a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
