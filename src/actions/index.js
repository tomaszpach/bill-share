export const addExpense2 = payload => ({
    type: 'ADD_EXPENSE',
    payload
});

export const removeExpense = payload => ({
    type: 'REMOVE_EXPENSE',
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

export const showDetails = payload => ({
    type: 'SHOW_DETAILS',
    payload
});

export const toggleDialog = payload => ({
   type: 'TOGGLE_DIALOG',
   payload
});