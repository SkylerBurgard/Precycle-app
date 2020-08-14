// Build a reducer that is an array to hold the data that came from the table and saga
const pickupsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PICKUPS':
      return action.payload;
    case 'UNSET_PICKUPS':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default pickupsReducer;
