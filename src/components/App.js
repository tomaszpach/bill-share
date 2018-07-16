import React from 'react'
import Header from './Header';
import AddExpense from '../containers/AddExpense';
import Summary from '../containers/Summary';
import EditDialog from '../containers/EditDialog';
import BottomInfo from '../containers/BottomInfo';

const style = {
    maxWidth: '1140px',
    margin: '0 auto'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Rachunek'
        }
    }
    render() {
        return(
            <div style={style}>
                <Header title={this.state.title}/>
                <AddExpense/>
                <Summary/>
                <EditDialog/>
                <BottomInfo/>
            </div>
        )
    }
}

export default App;