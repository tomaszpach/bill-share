import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
import AddExpense from '../containers/AddExpense'
import ExpansesList from '../containers/ExpansesList'
import Summary from '../containers/Summary'

const App = () => (
    <div>
        <AddExpense />
        <ExpansesList />
        <Summary/>
        {/*<AddTodo />*/}
        {/*<VisibleTodoList />*/}
        {/*<Footer />*/}
    </div>
);

export default App