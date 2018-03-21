import React from 'react'
import { connect } from "react-redux";
import { List, ListItem } from 'material-ui/List';
import {showDetails, toggleDialog} from "../actions";

// Material UI imports
import Satisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import UnSatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

export class expensesList extends React.Component {
    onClickEvent(expense) {
        this.props.showDetails(expense);
        this.props.toggleDialog(true);
    }

    listItem(expense) {
        let who = expense.who,
            payback = expense.payback,
            abs = Math.abs(payback); // Change negative value

        return (
            <ListItem onClick={() => this.onClickEvent(expense)}
                      key={expense.id}
                      primaryText={`${who} wydał(a): ${expense.cost} zł i jest na ${payback < 0 ? 'minusie, musi oddac' : 'plusie, musi odzyskać' }: ${abs} zł`}
                      leftIcon={payback > 0 ? (
                          <Satisfied/>
                      ) : (
                          <UnSatisfied/>
                      )}/>
        )
    }

    render() {
        return (
            <div>
                <List>
                    {this.props.expenses.expenseDetails.map(expense =>
                        this.listItem(expense)
                    )}
                </List>
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
        toggleDialog: (params) => dispatch(toggleDialog(params)),
        showDetails: (params) => dispatch(showDetails(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(expensesList);