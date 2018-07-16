import React from 'react'
import {connect} from "react-redux";
import {List} from 'material-ui/List';
import {showDetails, toggleDialog, removeExpense, updatePayback, summary} from "../actions";

// Material UI imports
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Expense from '../components/Expense';

export class expensesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            open: false,
            anchorEl: null
        })
    }

    showDetailsDialog() {
        this.setState({
            open: false
        });
        this.props.toggleDialog(true);
    }

    deleteOnClick(expense) {
        this.setState({
            open: false
        });
        this.props.removeExpense(expense);
        this.props.summary();
        this.props.updatePayback();
    }

    actionMenu = (event, id) => {
        this.props.showDetails(+id);
        this.setState({
            open: true,
            anchorEl: event,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    componentDidMount() {
        let expensesList = document.getElementsByClassName('expenses-list');
        expensesList[0].onclick = (event) => {
            let svg = event.target.closest('svg'),
                id = svg ? svg.dataset.id : null;

            if (!svg) {
                return;
            }
            
            if (svg.contains(svg) && id) {
                this.actionMenu(svg, id);
            }
        };
    }

    render() {
        return (
            <div className='expenses-list'>
                <List>
                    {this.props.expenses.expenseDetails.map(expense =>
                        <Expense key={expense.id} expense={expense} />
                    )}
                </List>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={() => this.setState({open: false})}
                >
                    <Menu>
                        <MenuItem primaryText="Edytuj" onClick={() => this.showDetailsDialog()}/>
                        <MenuItem primaryText="Usuń" onClick={() => this.deleteOnClick(this.props.selected)}/>
                    </Menu>
                </Popover>
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