import React from 'react'
import {addExpense2, divided} from "../actions";
import {connect} from "react-redux";

// import PropTypes from 'prop-types'

export class expensesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: 0
        };
    }

    componentDidMount() {
        this.props.divided('coinne')
    }

    render() {

        // Todo dodaj jeszcze opcje ilosci ludzi w summary
        console.log(this.props.expenses.summary);
        return (
            <div>
                <ul>
                    {this.props.expenses.expenseDetails.map(expense =>
                        <li key={expense.id + 1}>
                            {expense.id + 1}: {expense.item}, koszt: {expense.cost}, kto: {expense.who}
                        </li>
                    )}
                </ul>

                <Total products={this.props.expenses.expenseDetails} />
                <Divided products={this.props.expenses.expenseDetails} />
            </div>

        )
    }
}
const Total = ({ products }) => (
    <h3>
        Summary:
        {products.reduce((sum, i) => (
            sum + parseInt(i.cost)
        ), 0)}
    </h3>
);



const Divided = ({ products }) => (
    <h3>
        Divided:
        {products.reduce((sum, i) => (
            (sum + parseInt(i.cost)) / products.length
        ), 0)}
    </h3>
);

function mapStateToProps(state) {
    // console.log(state);
    return {
        expenses: state.expenses || [],
        divided: 'ExpenseList.js'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExpense2: (params) => dispatch(addExpense2(params)),
        divided: (params) => dispatch(divided(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(expensesList);