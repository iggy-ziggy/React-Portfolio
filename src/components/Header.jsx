import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {
    // state = {  } 
    render() { 
        return (
            <div>
                <h1>
                    Matthew Haynes
                </h1>
                <Navigation />
            </div>
        );
    }
}
 
export default Header;