import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>       
          <div className="footer d-flex justify-content-center flex-wrap">
            <a className="footer-item fa fa-github p-4" style={{ color: "white", fontSize: 22 }} href="https://github.com/iggy-ziggy" target="_blank" rel="noopener noreferrer"></a>
            <a className="footer-item fa fa-linkedin p-4" style={{ color: "white", fontSize: 22 }} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"></a>
            <a className="footer-item fa fa-stack-overflow p-4" style={{ color: "white", fontSize: 22 }} href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer"></a>
          </div>
      </>
    );
  }
}

export default Footer;
