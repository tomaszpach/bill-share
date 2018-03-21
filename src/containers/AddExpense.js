import React from 'react'
import {connect} from 'react-redux'
import {addExpense2, summary, updatePayback} from '../actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class addExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            costValue: '',
            whoValue: '',
            expense: {}
        };
    }

    handleTextFieldChange(e, field) {
        switch (field) {
            case 'cost':
                this.setState({
                    costValue: e.target.value
                });
                break;
            case 'who':
                this.setState({
                    whoValue: e.target.value
                });
                break;
            default:
                break;
        }
    }

    updateExpense() {
        this.props.addExpense2(this.state.expense);
        this.props.summary(this.state.expense.cost);
        this.props.updatePayback();
    }

    render() {
        let cost;

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.setState({
                            expense: {
                                cost: this.state.costValue || 0,
                                who: this.state.whoValue.charAt(0).toUpperCase() + this.state.whoValue.slice(1) || `Użytkownik ${this.props.expenses.expenseDetails.length + 1}`,
                            }
                        }, () => {
                            this.updateExpense();
                        });
                        this.setState({
                            costValue: '',
                            whoValue: ''
                        });
                        cost.focus();
                    }}
                >
                    <TextField
                        ref={node => cost = node}
                        autoFocus={true}
                        type="number"
                        value={this.state.costValue}
                        onChange={(event) => this.handleTextFieldChange(event, 'cost')}
                        hintText={'150'}
                        floatingLabelText={'Podaj koszt*'}
                    />
                    <TextField
                        autoFocus={false}
                        type="text"
                        value={this.state.whoValue}
                        onChange={(event) => this.handleTextFieldChange(event, 'who')}
                        hintText={'Tomek'}
                        floatingLabelText={'Podaj imię'}
                    />
                    <RaisedButton type="submit" label="Dodaj wydatek" primary={true}/>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        expenses: state.expenses || [],
        summary: state.summary || {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExpense2: (params) => dispatch(addExpense2(params)),
        summary: (params) => dispatch(summary(params)),
        updatePayback: (params) => dispatch(updatePayback(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addExpense);