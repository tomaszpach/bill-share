const initialState = {
    expenseDetails: [],
    summary: {
        amount: 0,
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

        case 'SUMMARY':
            let summaryCost = 0;
            state.expenseDetails.map(expense => {
                return summaryCost += parseFloat(expense.cost)
            });
            return {
                ...state,
                summary: {
                    ...state.summary,
                    cost: summaryCost,
                    amount: state.expenseDetails.length,
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
        case 'SHOW_DETAILS':
            return {
                ...state,
                selected: state.expenseDetails.filter(expense => {
                    if (expense.id === action.payload.id) {
                        return expense
                    } else {
                        return null
                    }
                })
            };
        case 'TOGGLE_DIALOG':
            return {
                ...state,
                isEditDialogOpen: action.payload
            };
        default:
            return state
    }
};

export default expenses