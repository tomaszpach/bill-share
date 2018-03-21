import React from 'react'
import {connect} from "react-redux";
import {List, ListItem} from 'material-ui/List';
import {showDetails, toggleDialog, removeExpense, updatePayback, summary} from "../actions";

// Material UI imports
import Satisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import UnSatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

export class expensesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            open: false
        })
    }
    showDetailsDialog() {
        // console.log('edit', expense);
        this.setState({
            open: false
        });
        this.props.toggleDialog(true);
    }

    deleteOnClick(expense) {
        // console.log('usuwam', expense);
        this.setState({
            open: false
        });
        this.props.removeExpense(expense);
        this.props.summary();
        this.props.updatePayback();
    }

    actionMenu = (event, expense) => {
        // console.log('actionMenu', expense);
        // This prevents ghost click.
        event.preventDefault();

        this.props.showDetails(expense);
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    listItem(expense) {
        let who = expense.who,
            payback = expense.payback,
            abs = Math.abs(payback); // Change negative value

        return (
            <div key={expense.id}>
                <ListItem primaryText={`${who} wydał(a): ${expense.cost} zł i jest na ${payback < 0 ? 'minusie, musi oddać' : 'plusie, musi odzyskać' }: ${abs} zł`}
                          rightIcon={<NavigationExpandMoreIcon onClick={(event) => this.actionMenu(event, expense)} />}
                          leftIcon={payback > 0 ? (
                              <Satisfied/>
                          ) : (
                              <UnSatisfied/>
                          )}/>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem primaryText="Edytuj" onClick={() => this.showDetailsDialog()} />
                        <MenuItem primaryText="Usuń" onClick={() => this.deleteOnClick(this.props.selected)} />
                        {/*<MenuItem primaryText="Kopiuj" />*/}
                    </Menu>
                </Popover>
            </div>


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
        expenses: state.expenses || [],
        selected: state.expenses.selected[0] || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleDialog: (params) => dispatch(toggleDialog(params)),
        showDetails: (params) => dispatch(showDetails(params)),
        removeExpense: (params) => dispatch(removeExpense(params)),
        summary: (params) => dispatch(summary(params)),
        updatePayback: (params) => dispatch(updatePayback(params)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(expensesList);