import { all, call } from 'redux-saga/effects';
import helloSaga from './Containers/Week/WeekSaga';

export default function* mainSaga() {
  while (true) {
    yield all([
      call(helloSaga),
    ]);
  }
}
