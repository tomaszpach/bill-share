const initialState = {
    expenseDetails: [],
    summary: {
        amount: 0,
        cost: 0,
        divided: 0
    },
};

let id = 0;

const expenses = (state = initialState, action) => {
    console.log('state:', state);
    console.log('action payload:', action.payload);
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
                return summaryCost += parseFloat(expense.cost, 10)
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
        // case 'SET_RECOVER_FLAG':
        //     return {
        //         ...state,
        //     };

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
            console.log('edit expense', action.payload);
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
        default:
            return state
    }
};

export default expenses