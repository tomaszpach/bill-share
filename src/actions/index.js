export const addExpense = payload => ({
    type: 'ADD_EXPENSE',
    payload
});

export const removeExpense = payload => ({
    type: 'REMOVE_EXPENSE',
    payload
});

export const summary = () => ({
    type: 'UPDATE_SUMMARY'
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