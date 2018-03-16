import React from 'react'
import { connect } from 'react-redux'
import {addExpense2, summary, recoverMoney} from '../actions'

export class addExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: {
                // item: 'Pizza',
                // cost: '30',
                // who: 'Person',
                // amount: '1'
            }
        };
    }

    componentDidMount() {
        this.textInput.focus()
    }



    render() {
        let cost,
            who;

        console.log('expensesDetails', this.props.expenses.expenseDetails);

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
                                item: this.textInput.value || 'Wydatek',
                                cost: cost.value,
                                who: who.value,
                                payback: cost.value - parseInt(this.props.expenses.summary.divided)
                            }
                        }, () => {
                            this.props.addExpense2(this.state.expense);
                            this.props.summary(this.state.expense.cost);
                            // this.props.expenses.expenseDetails.map(expense => {
                            //     this.props.recoverMoney({
                            //         who: expense.who,
                            //         payback: expense.cost - this.props.expenses.summary.divided
                            //     });
                            //    // console.log('expense', expense.cost);
                            // });
                            // this.props.recoverMoney({
                            //     who: 'mariusz',
                            //     payback: 'hajsy'
                            // });
                        });
                        this.textInput.value = '';
                        cost.value = '';
                        who.value = '';
                        cost.focus();
                    }}
                >
                    <input placeholder='Wydatek' ref={(node) => { this.textInput = node; }} />
                    <input placeholder='Koszt' ref={node => cost = node} />
                    <input placeholder='Kto' ref={node => who = node} />
                    <button type="submit">
                        Dodaj wydatek
                    </button>
                </form>
                <button onClick={() => console.log(this.props.expenses)}>log</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        expenses: state.expenses || [],
        summary: state.summary || {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExpense2: (params) => dispatch(addExpense2(params)),
        summary: (params) => dispatch(summary(params)),
        recoverMoney: (params) => dispatch(recoverMoney(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addExpense);