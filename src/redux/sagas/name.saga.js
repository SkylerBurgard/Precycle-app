import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* postName(action) {
  try {
    const response = yield axios.post('/api/name', action.payload);
    console.log(response);
    // yield put({ type: 'LOGIN', payload: action.payload });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* nameSaga() {
  yield takeLatest('POST_NAME', postName);
}

export default nameSaga;
