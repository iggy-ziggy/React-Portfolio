import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {
    // state = {  } 
    render() { 
        return (
            <div className='fixed-top d-flex flex-row justify-content-between'>
                <div>
                    <h1 className='p-2 bd-highlight'>
                        Matthew Haynes
                    </h1>
                </div>
                <Navigation />
            </div>
        );
    }
}
 
export default Header;