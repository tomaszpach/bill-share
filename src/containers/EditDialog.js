import React from 'react';
import {connect} from 'react-redux';
import {editExpense, summary, toggleDialog, updatePayback} from "../actions";

// Material
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export class editDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseUpdate: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                expenseUpdate: {
                    ...nextProps.selected
                }
            });
        }
    }

    handleOpenEditDialog = () => {
        this.props.toggleDialog(true)
    };

    handleCloseEditDialog = () => {
        this.props.toggleDialog(false)
    };

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
                        who: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
                    }
                });
                break;
            default:
                break;
        }
    }

    updateExpense() {
        this.props.editExpense(this.state.expenseUpdate);
        this.props.summary();
        this.props.updatePayback();
        this.props.toggleDialog(false);
    }

    render() {
        const textFieldStyle = {
            maxWidth: '100%'
        };
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
            <Dialog
                title={`Edytujesz: ${this.props.selected.who}`}
                actions={actions}
                modal={false}
                open={this.props.expenses.isEditDialogOpen}
                onRequestClose={this.handleCloseEditDialog}
            >
                <div>
                    <TextField
                        autoFocus={true}
                        type="number"
                        value={this.state.expenseUpdate.cost}
                        onChange={(event) => this.handleTextFieldChange(event, 'cost')}
                        hintText={'150'}
                        floatingLabelText={'Edytuj koszt'}
                        style={textFieldStyle}
                    />

                    <TextField
                        autoFocus={false}
                        type="text"
                        value={this.state.expenseUpdate.who}
                        onChange={(event) => this.handleTextFieldChange(event, 'who')}
                        hintText={'Tomek'}
                        floatingLabelText={'Edytuj imię'}
                        style={textFieldStyle}
                    />
                </div>
            </Dialog>
        )
    }
}

function mapStateToProps(state) {
    return {
        expenses: state.expenses || [],
        selected: state.expenses.selected[0]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editExpense: (params) => dispatch(editExpense(params)),
        toggleDialog: (params) => dispatch(toggleDialog(params)),
        summary: (params) => dispatch(summary(params)),
        updatePayback: (params) => dispatch(updatePayback(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(editDialog);