import React from 'react'
import {connect} from "react-redux";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/grade';

export class expensesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: 0
        };
    }

    listItem(expense) {
        let who = expense.who,
            payback = expense.payback,
            abs = Math.abs(payback);

        return (
            <ListItem key={expense.id}
                      primaryText={`${who} wydał(a): ${expense.cost} i jest na ${payback < 0 ? 'minusie, musi oddac' : 'plusie, musi odzyskać' }: ${payback} zl`}
                      leftIcon={<ActionGrade/>}/>
        )
    }

    render() {
        return (
            <List>
                {this.props.expenses.expenseDetails.length ? (
                    <div>
                        <h2>Podsumowanie</h2>
                        <p>Udział wzięło: <b>{this.props.expenses.summary.amount}</b> osoby</p>
                        <p>Lącznie wydano: <b>{this.props.expenses.summary.cost}</b> zł</p>
                        <p>Podzielony koszt: <b>{this.props.expenses.summary.divided}</b> zł</p>
                        {/*<Subheader>1) Podzielone koszty to: </Subheader>*/}
                        {this.props.expenses.expenseDetails.map(expense =>
                            this.listItem(expense)
                        )}
                    </div>
                ) : `Dodaj koszty/osoby by zobaczyć podsumowanie`}
            </List>
        )
    }
}

function mapStateToProps(state) {
    return {
        expenses: state.expenses || []
    }
}

export default connect(mapStateToProps)(expensesList);