import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* postName(action) {
  try {
    yield axios.post('/api/name', action.payload);
    yield put({ type: 'GET_NAME' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* getName(action) {
  const response = yield axios.get('/api/name');
  console.log(response);
  yield put({ type: 'SET_NAME', payload: response.data });
}
function* nameSaga() {
  yield takeLatest('POST_NAME', postName);
  yield takeLatest('GET_NAME', getName);
}

export default nameSaga;
