import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopHeader from '../containers/TopHeader';
import AddExpense from '../containers/AddExpense';
import Summary from '../containers/Summary';

const style = {
    maxWidth: '1140px',
    margin: '0 auto'
};

const App = () => (
    <div style={style}>
        <MuiThemeProvider>
            <TopHeader/>
            <AddExpense/>
            <Summary/>
        </MuiThemeProvider>
    </div>
);

export default App