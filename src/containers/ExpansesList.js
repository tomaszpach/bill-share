import React from 'react'
import { connect } from "react-redux";
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Satisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import UnSatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import { editExpense, summary, updatePayback } from "../actions";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class expensesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            expenseUpdate: {

            }
        };
    }

    handleOpenEditDialog = () => {
        this.setState({open: true});
    };

    handleCloseEditDialog = () => {
        this.setState({open: false});
    };

    updateExpense() {
        this.setState({open: false});
        this.props.editExpense(this.state.expenseUpdate);
        this.props.summary();
        this.props.updatePayback();

        // console.log('aktualizuj wydatek!');
    }

    onClickEvent(expense) {
        this.setState({
            expenseUpdate: {
                id: expense.id,
                who: expense.who,
                cost: expense.cost,
                payback: expense.payback
            }
        });
        // console.log(expense);
        // this.props.editExpense(expense);
        this.handleOpenEditDialog();
    }

    componentDidUpdate() {
        console.log(this.state.expenseUpdate);
        console.log('this.props.expenses', this.props.expenses);
    }

    handleTextFieldChange(e, field) {
        switch (field) {
            case 'cost':
                this.setState({
                    expenseUpdate: {
                        ...this.state.expenseUpdate,
                        cost: e.target.value
                    }
                });
                break;
            case 'who':
                this.setState({
                    expenseUpdate: {
                        ...this.state.expenseUpdate,
                        who: e.target.value
                    }
                });
                break;
        }
    }

    listItem(expense) {
        let who = expense.who.charAt(0).toUpperCase() + expense.who.slice(1),
            payback = expense.payback,
            abs = Math.abs(payback); // Change negative value

        return (
            <ListItem onClick={() => this.onClickEvent(expense)}
                      key={expense.id}
                      primaryText={`${who} wydał(a): ${expense.cost} zł i jest na ${payback < 0 ? 'minusie, musi oddac' : 'plusie, musi odzyskać' }: ${payback} zł`}
                      leftIcon={payback > 0 ? (
                          <Satisfied/>
                      ) : (
                          <UnSatisfied/>
                      )}/>
        )
    }

    render() {
        const actions = [
            <FlatButton
                label="Anuluj"
                primary={true}
                onClick={this.handleCloseEditDialog}
            />,
            <FlatButton
                label="Aktualizuj"
                primary={true}
                keyboardFocused={false}
                onClick={() => this.updateExpense()}
            />,
        ];


        return (
            <div>
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
                <div>
                    <Dialog
                        title={`Edytujesz: ${this.state.expenseUpdate.who}`}
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleCloseEditDialog}
                    >
                        {this.state.expenseUpdate.who} wydał {this.state.expenseUpdate.cost} zł, musi odzyskać: {this.state.expenseUpdate.payback} zł.

                        <div>
                            <TextField
                                // ref={node => cost = node}
                                autoFocus={true}
                                type="number"
                                value={this.state.expenseUpdate.cost}
                                onChange={(event) => this.handleTextFieldChange(event, 'cost')}
                                hintText={'150'}
                                floatingLabelText={'Edytuj koszt'}
                            />

                            <TextField
                                // ref={node => who = node}
                                autoFocus={false}
                                type="text"
                                value={this.state.expenseUpdate.who}
                                onChange={(event) => this.handleTextFieldChange(event, 'who')}
                                hintText={'Tomek'}
                                floatingLabelText={'Edytuj imię'}
                            />
                        </div>
                    </Dialog>
                </div>
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
        editExpense: (params) => dispatch(editExpense(params)),
        summary: (params) => dispatch(summary(params)),
        updatePayback: (params) => dispatch(updatePayback(params))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(expensesList);