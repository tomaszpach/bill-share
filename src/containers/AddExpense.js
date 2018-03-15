import React from 'react'
import { connect } from 'react-redux'
import { addExpense2 } from '../actions'

export class addExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: {
                description: 'opis',
                cost: 'koszt',
                amount: 'ilosc'
            }
        };
    }

    onClick(payload) {
        this.props.addExpense2(payload);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onClick(this.state.expense)}>addExpense2 test</button>
                <button onClick={() => console.log(this.props.expenses)}>log</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        expenses: state.expenses || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExpense2: (params) => dispatch(addExpense2(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addExpense);