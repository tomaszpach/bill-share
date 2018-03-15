const initialState = {
    expenseDetails: [],
    summary: 0
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

        case 'SUMMARY':
            return {
                ...state,
                summary: [
                    parseInt(state.summary) + parseInt(action.payload)
                ]
            };

        case 'DIVIDE':
            return {
                ...state,
                divided: action.payload,
            };
        default:
            return state
    }
};

export default expenses