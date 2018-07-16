import React from 'react'
import { connect } from "react-redux";
import ExpensesList from './ExpensesList';

// Material UI Import
// import IconButton from 'material-ui/IconButton';
// import InfoIcon from 'material-ui/svg-icons/action/info';

export class summaryContainer extends React.Component {
    osoby() {
        const text = 'Udział wzięło:',
            count = this.props.summary.count;

        switch (count) {
            case 1:
                return (
                    <p>{text} <b>{count}</b> osoba</p>
                );
            case 2:
                return (
                    <p>{text} <b>{count}</b> osoby</p>
                );
            case 3:
                return (
                    <p>{text} <b>{count}</b> osoby</p>
                );
            case 4:
                return (
                    <p>{text} <b>{count}</b> osoby</p>
                );
            case 22:
                return (
                    <p>{text} <b>{count}</b> osoby</p>
                );
            case 23:
                return (
                    <p>{text} <b>{count}</b> osoby</p>
                );
            case 24:
                return (
                    <p>{text} <b>{count}</b> osoby</p>
                );
            default:
                return (
                    <p>{text} <b>{count}</b> osób</p>
                )
        }
    }


    render() {
        let summary = this.props.summary;

        return (
            <div className='expenses-list'>
                {summary.count > 0 ? (
                    <div className='summary'>
                        <h3>Podsumowanie</h3>
                        {this.osoby()}
                        <p>Łącznie wydano: <b>{summary.cost}</b> zł</p>
                        <p>Podzielony koszt: <b>{summary.divided}</b> zł</p>
                        <ExpensesList/>
                    </div>
                ) : (
                    <p>Dodaj koszty by zobaczyć podsumowanie</p>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        summary: state.expenses.summary || []
    }
}

export default connect(mapStateToProps)(summaryContainer);