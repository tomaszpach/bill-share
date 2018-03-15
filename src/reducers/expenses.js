const initialState = {
    expenseDetails: []
};

let id = 0;

const expenses = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        // case 'ADD_EXPENSE_COST':
        //     return [
        //         ...state,
        //         {
        //             cost: action.cost
        //         }
        //     ];
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseDetails: [
                    ...state.expenseDetails,
                    {id: id++, ...action.payload},
                ],
            };
        default:
            return state
    }
};

export default expenses