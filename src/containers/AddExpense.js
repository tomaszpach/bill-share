import React from 'react'
import { connect } from 'react-redux'
import {addExpense2, divided, summary} from '../actions'

export class addExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: {
                item: 'Pizza',
                cost: '30',
                who: 'Person',
                amount: '1'
            }
        };
    }

    componentDidUpdate() {
        summary(this.state.expense.cost)
    }



    render() {
        let item,
            cost,
            who;

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!item.value.trim()) {
                            return
                        }
                        this.setState({
                            expense: {
                                item: item.value,
                                cost: cost.value,
                                who: who.value
                            }
                        }, () => {
                            this.props.addExpense2(this.state.expense);
                            this.props.summary(this.state.expense.cost)
                        });
                        item.value = '';
                        cost.value = '';
                        who.value = ''
                    }}
                >
                    <input placeholder='Item' ref={node => item = node} />
                    <input placeholder='Cost' ref={node => cost = node} />
                    <input placeholder='Who' ref={node => who = node} />
                    <button type="submit">
                        Add Expense
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        expenses: state.expenses || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExpense2: (params) => dispatch(addExpense2(params)),
        summary: (params) => dispatch(summary(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addExpense);