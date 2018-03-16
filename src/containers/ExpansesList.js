import React from 'react'
import {addExpense2} from "../actions";
import {connect} from "react-redux";

export class expensesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: 0
        };
    }

    componentWillReceiveProps(nextProps) {

        // this.props.expenses.expenseDetails.map(expense => {
        //     this.props.recoverMoney({
        //         who: expense.who,
        //         payback: expense.cost - this.props.expenses.summary.divided
        //     });
        // });
    }


    listItem(expense) {
        let diff = (expense.cost - this.props.expenses.summary.divided).toFixed(2),
            abs = Math.abs(diff);
        return (
            <li key={expense.id + 1}>
                {expense.who} wydał: <b>{expense.cost} zł</b>
                {diff < 0 ?
                    ` i jest na minusie, musi oddać: ${abs} zł` : ` i jest na plusie, musi odzyskać: ${abs} zł`}
                {/*{expense.id + 1}: {expense.item}, koszt: {expense.cost} ({(expense.cost - this.props.expenses.summary.divided).toFixed(2)}), kto: {expense.who}*/}
            </li>
        )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.expenses.expenseDetails.map(expense =>
                        this.listItem(expense)
                    )}
                </ul>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        expenses: state.expenses || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExpense2: (params) => dispatch(addExpense2(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(expensesList);