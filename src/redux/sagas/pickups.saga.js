// Build a saga that does a GET to that backend route that you created,
// Then dispatchs a yield put to put the data in a reducer.
import axios from 'axios';

function* postPickups(action) {
  try {
    yield axios.post('/api/pickups', action.payload);
    yield put({ type: 'GET_PICKUPS' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* getPickups(action) {
  const response = yield axios.get('/api/pickups');
  console.log(response);
  yield put({ type: 'SET_PICKUPS', payload: response.data });
}
function* pickupsSaga() {
  yield takeLatest('POST_PICKUPS', postPickups);
  yield takeLatest('GET_PICKUPS', getPickups);
}

export default pickupsSaga;
