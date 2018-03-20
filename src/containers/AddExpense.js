import React from 'react'
import {connect} from 'react-redux'
import {addExpense2, summary, updatePayback} from '../actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// import TextFieldE from '../components/TextField';

export class addExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            costValue: '',
            whoValue: '',
            expense: {
                item: 'Pizza',
                // cost: '30',
                // who: 'Person',
                // amount: '1'
            }
        };
    }

    handleTextFieldChange(e, field) {
        if (field === 'cost') {
            this.setState({
                costValue: e.target.value
            });
        } else {
            this.setState({
                whoValue: e.target.value
            });
        }
    }

    // componentDidMount() {
    //     this.costInput.focus()
    // }

    updateExpense() {
        this.props.addExpense2(this.state.expense);
        this.props.summary(this.state.expense.cost);
        this.props.updatePayback();
    }

    componentDidUpdate() {
        console.log(this.state.costValue);
    }

    // let sPassword = this.refs.password.input.value;


    render() {
        let cost,
            who;

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        // if (!item.value.trim()) {
                        //     return
                        // }
                        this.setState({
                            expense: {
                                // item: this.textInput.value || 'Wydatek',
                                cost: this.state.costValue || 0,
                                who: this.state.whoValue || `Użytkownik ${this.props.expenses.expenseDetails.length + 1}`,
                            }
                        }, () => {
                            this.updateExpense();
                        });
                        // this.costInput.value = '';
                        this.state.costValue = '';
                        this.state.whoValue = '';
                        // cost.value = '';
                        // who.value = '';
                        cost.focus();
                    }}
                >
                    {/*<input placeholder='Wydatek' ref={(node) => { this.textInput = node; }} />*/}


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
                        ref={node => who = node}
                        autoFocus={false}
                        type="text"
                        value={this.state.whoValue}
                        onChange={(event) => this.handleTextFieldChange(event, 'imię')}
                        hintText={'Tomek'}
                        floatingLabelText={'Podaj imię'}
                    />

                    <RaisedButton type="submit" label="Dodaj wydatek" primary={true} />


                    {/*<TextFieldE inputRef={(el) => this.btnRef = el} onChange={this.handleTextFieldChange} hintText={'150'} floatingLabelText={'Podaj koszt (bez waluty)'} autoFocus={true}  />*/}
                    {/*<input placeholder='Koszt' ref={(node) => { this.costInput = node; }} />*/}
                    {/*<input placeholder='Kto' ref={node => who = node} />*/}
                    {/*<button type="submit">*/}
                        {/*Dodaj wydatek*/}
                    {/*</button>*/}
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state', state);
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