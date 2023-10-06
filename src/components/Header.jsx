import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {
    // state = {  } 
    render() { 
        return (
            <header className='fixed-top d-flex flex-row justify-content-between bg-secondary'>
                <div>
                    <h1 className='p-2'>
                        Matthew Haynes
                    </h1>
                </div>
                <Navigation />
            </header>
        );
    }
}
 
export default Header;