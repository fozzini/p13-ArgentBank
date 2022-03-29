export const selectUserInfos = (type) => (state) => state.user[type];
export const isEditingName = (state) => state.editName;
export const selectorStatus = (state, type) => state[type].status;