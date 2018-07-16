import React from 'react'

// Material UI
import LocalATM from 'material-ui/svg-icons/maps/local-atm';

const Header = (props) => (
    <header>
        <h1>
            <LocalATM/>
            <span>{props.title}</span>!
        </h1>
    </header>
);

export default Header;