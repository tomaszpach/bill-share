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
    // console.log('action payload:', action.payload);
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
            return {
                ...state,
                summary: {
                    ...state.summary,
                    cost: (parseFloat(state.summary.cost, 10) + parseFloat(action.payload, 10)).toFixed(2),
                    amount: state.expenseDetails.length,
                    divided: ((parseFloat(state.summary.cost, 10) + parseFloat(action.payload, 10)) / state.expenseDetails.length).toFixed(2)
                }
            };
        case 'SET_RECOVER_FLAG':
            return {
                ...state,
            };

        case 'UPDATE_PAYBACK':
            const divided = state.summary.divided;
            return {
                ...state,
                expenseDetails: state.expenseDetails.map((expense, index) => {
                    return {
                        ...expense,
                        payback: (expense.cost - divided).toFixed(2)
                    }
                })
            };
        default:
            return state
    }
};

export default expenses