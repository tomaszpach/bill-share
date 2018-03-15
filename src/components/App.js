import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
import AddExpense from '../containers/AddExpense'
import ExpansesList from '../containers/ExpansesList'

const App = () => (
    <div>
        <AddExpense />
        <ExpansesList />
        {/*<AddTodo />*/}
        {/*<VisibleTodoList />*/}
        {/*<Footer />*/}
    </div>
);

export default App