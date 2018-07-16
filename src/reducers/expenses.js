const initialState = {
    expenseDetails: [],
    summary: {
        count: 0,
        cost: 0,
        divided: 0
    },
    selected: [
        {
            id: 0,
            cost: 0,
            who: '',
            payback: 0
        }
    ],
    isEditDialogOpen: false
};

let id = 0;

const expenses = (state = initialState, action) => {
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseDetails: [
                    ...state.expenseDetails,
                    {
                        id: id++,
                        ...action.payload
                    },
                ],
            };
        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenseDetails: state.expenseDetails.filter(expense => {
                    if (expense.id !== action.payload.id) {
                        return expense
                    } else {
                        return null
                    }
                })
            };

        case 'UPDATE_SUMMARY':
            let summaryCost = 0;
            state.expenseDetails.map(expense => {
                return summaryCost += parseFloat(expense.cost)
            });
            return {
                ...state,
                summary: {
                    ...state.summary,
                    cost: summaryCost,
                    count: state.expenseDetails.length,
                    divided: (summaryCost / state.expenseDetails.length).toFixed(2)
                }
            };

        case 'UPDATE_PAYBACK':
            const divided = state.summary.divided;
            return {
                ...state,
                expenseDetails: state.expenseDetails.map(expense => {
                    return {
                        ...expense,
                        payback: (expense.cost - divided).toFixed(2)
                    }
                })
            };
        case 'EDIT_EXPENSE':
            return {
                ...state,
                expenseDetails: state.expenseDetails.map((expense) => {
                    if (expense.id === action.payload.id) {
                        return action.payload
                    } else {
                        return expense
                    }
                })
            };
        case 'TOGGLE_DIALOG':
            return {
                ...state,
                isEditDialogOpen: action.payload
            };
        case 'SHOW_DETAILS':
            return {
                ...state,
                selected: state.expenseDetails.filter(expense => {
                    if (expense.id === action.payload) {
                        return expense
                    } else {
                        return null
                    }
                })
            };
        default:
            return state
    }
};

export default expenses