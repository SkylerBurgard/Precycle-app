// Build a saga that does a GET to that backend route that you created,
// Then dispatchs a yield put to put the data in a reducer.
import { put, takeLatest } from 'redux-saga/effects';

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

function* fetchPickups(action) {
  const response = yield axios.get('/api/pickups');
  console.log(response);
  yield put({ type: '', payload: response.data });
}

function* getPickups(action) {
  const response = yield axios.get('/api/pickups');
  console.log(response);
  yield put({ type: 'SET_PICKUPS', payload: response.data });
}

function* getUserPickups(action) {
  const response = yield axios.get(`/api/pickups/${action.payload.id}`);
  console.log(response);
  yield put({ type: 'SET_PICKUPS', payload: response.data });
}

function* setPickupDay(action) {
  try {
    yield axios.post('/api/pickups/new', action.payload);
    yield put({ type: 'GET_USER_PICKUPS', payload: action.payload });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* pickupsSaga() {
  yield takeLatest('SET_PICKUP_DAY', setPickupDay);
  yield takeLatest('GET_USER_PICKUPS', getUserPickups);
  yield takeLatest('POST_PICKUPS', postPickups);
  yield takeLatest('GET_PICKUPS', getPickups);
  yield takeLatest('FETCH_PICKUPS', fetchPickups);
}

// const fetchPickups = (state = {}, action) => {
//   switch (action.type) {
//     case 'PICKUPS':
//       return action.payload;
//     case 'CLEAR_PICKUPS_ADDRESS':
//       return {};
//     default:
//       return state;
//   }
// };

export default pickupsSaga;
