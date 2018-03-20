let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


// Expenses

export const addExpense2 = payload => ({
    type: 'ADD_EXPENSE',
    payload
});

export const summary = () => ({
    type: 'SUMMARY'
});

export const updatePayback = payload => ({
   type: 'UPDATE_PAYBACK',
   payload
});

export const editExpense = payload => ({
    type: 'EDIT_EXPENSE',
    payload
});