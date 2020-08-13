const initialState = [];

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SCHEDULE':
      return action.payload;
    case 'UNSET_SCHEDULE':
      return initialState;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default scheduleReducer;
