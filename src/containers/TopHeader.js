import React from 'react'

// Material UI
import LocalATM from 'material-ui/svg-icons/maps/local-atm';

export default class topHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        const dimension = 65;
        const logoStyle = {
            width: dimension + 'px',
            height: dimension + 'px',
            float: 'left',
            fill: '#85bb65'
        };
        return (
            <header>
                <h1>
                    <LocalATM style={logoStyle}/>
                    <h3>Rachunek</h3>!
                </h1>
            </header>
        )
    }
}