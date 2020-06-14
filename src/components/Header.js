import React, { Component } from "react";
import '../index.css';


export default  class Header extends Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <h1 className='title'>Facebook Auth Example</h1>
                </header>
            </div>
        );
    }
}

