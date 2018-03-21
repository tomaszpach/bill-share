export const addExpense2 = payload => ({
    type: 'ADD_EXPENSE',
    payload
});

export const summary = () => ({
    type: 'SUMMARY'
});

export const updatePayback = () => ({
   type: 'UPDATE_PAYBACK'
});

export const editExpense = payload => ({
    type: 'EDIT_EXPENSE',
    payload
});