import React from 'react'
import { connect } from "react-redux";
import ExpensesList from './ExpansesList';

export class summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: 0
        };
    }

    summaryCost(summaryCost) {
        return (
            summaryCost ? (
                <p>Łącznie wydano: <b>{summaryCost} zł</b></p>
            ) : `Dodaj koszty, aby zobaczyć podsumowanie.`
        )
    }

    dividedCost(dividedCost) {
        return (
            dividedCost ? (
                <div>
                    <p>Podzielone koszty: <b>{dividedCost} zł</b></p>
                    {/*<span>Podzielony koszt to kwota jaką każdy powinien ponieść by wyjść na 0.</span>*/}
                </div>
            ) : ``
        )
    }

    render() {
        // let summaryCost = this.props.expenses.summary.cost,
        //     dividedCost = this.props.expenses.summary.divided;

        return (
            <div>
                {/*<h2>Podsumowanie</h2>*/}
                {/*{this.summaryCost(summaryCost)}*/}
                {/*{this.dividedCost(dividedCost)}*/}
                <ExpensesList />
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
        // addExpense2: (params) => dispatch(addExpense2(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(summary);