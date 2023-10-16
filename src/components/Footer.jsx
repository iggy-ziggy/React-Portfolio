import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>       
          <div className="footer d-flex justify-content-center flex-wrap">
            <a className="footer-item fa fa-github p-4" style={{ color: "white", fontSize: 22 }} href="https://github.com/iggy-ziggy"></a>
            <a className="footer-item fa fa-linkedin p-4" style={{ color: "white", fontSize: 22 }} href="https://www.linkedin.com/"></a>
            <a className="footer-item fa fa-stack-overflow p-4" style={{ color: "white", fontSize: 22 }} href="https://stackoverflow.com/"></a>
          </div>
      </>
    );
  }
}

export default Footer;
