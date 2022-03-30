export const userActionStatus = (type) => (state) => state.user[type];
export const editStatus = (state) => state.editName;
export const promiseStatus = (state, type) => state[type].status;