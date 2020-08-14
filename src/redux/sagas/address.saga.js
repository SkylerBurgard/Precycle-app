import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postAddress(action) {
  try {
    yield axios.post('/api/address', action.payload);
    yield put({ type: 'GET_ADDRESS' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* getAddress(action) {
  const response = yield axios.get('/api/ADDRESS');
  console.log(response);
  yield put({ type: 'SET_PICKUPS', payload: response.data });
}
function* addressSaga() {
  yield takeLatest('POST_ADDRESS', postAddress);
  yield takeLatest('GET_ADDRESS', getAddress);
}

export default addressSaga;
