import React, { Component } from 'react';

class Navigation extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex align-items-center'>
                <ul className='nav'>
                    <li className='nav-item p-2'>
                        About Me
                    </li>
                    <li className='nav-item p-2'>
                        Portfolio
                    </li>
                    <li className='nav-item p-2'>
                        Resume
                    </li>
                    <li className='nav-item p-2'>
                        Contact
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Navigation;