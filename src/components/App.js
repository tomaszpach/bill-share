import React from 'react'
import TopHeader from '../containers/TopHeader';
import AddExpense from '../containers/AddExpense';
import Summary from '../containers/Summary';
import EditDialog from '../containers/EditDialog';

const style = {
    maxWidth: '1140px',
    margin: '0 auto'
};

const App = () => (
    <div style={style}>
        <TopHeader/>
        <AddExpense/>
        <Summary/>
        <EditDialog/>
    </div>
);

export default App