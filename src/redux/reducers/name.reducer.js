const initialState = [];

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return action.payload;
    case 'UNSET_NAME':
      return initialState;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default nameReducer;
