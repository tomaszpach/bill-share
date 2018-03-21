import React from 'react'
import { connect } from "react-redux";
import ExpensesList from './ExpansesList';

export class summaryContainer extends React.Component {
    render() {
        let summary = this.props.summary;
        if (summary > 0 ) {
            console.log(summary);
        }
        return (
            summary.count > 0 ? (
                <div>
                    <h2>Podsumowanie</h2>
                    <p>Udział wzięło: <b>{summary.count}</b> osoby</p>
                    <p>Lącznie wydano: <b>{summary.cost}</b> zł</p>
                    <p>Podzielony koszt: <b>{summary.divided}</b> zł</p>
                    <ExpensesList />
                </div>
            ) : (
                <h2>Dodaj koszty by zobaczyć podsumowanie</h2>
            )
        )
    }
}

function mapStateToProps(state) {
    return {
        summary: state.expenses.summary || []
    }
}

export default connect(mapStateToProps)(summaryContainer);