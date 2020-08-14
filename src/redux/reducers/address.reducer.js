const addressReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return action.payload;
    case 'UNSET_ADDRESS':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default addressReducer;
