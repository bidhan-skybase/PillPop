import {takeEvery, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {MedicineEntry} from '../model/reminder_model';
import {storeReminder} from '../helpers/storage_helpers';
import {
  addReminderStart,
  addReminderSuccess,
  addReminderFailure,
} from '../redux/reminder_slice';
import {SaveStatus} from '../type.ts';
import Snackbar from 'react-native-snackbar';

function* addReminderSaga(action: PayloadAction<MedicineEntry>) {
  try {
    const result: SaveStatus = yield call(storeReminder, action.payload);
    if (result.success) {
      yield put(addReminderSuccess(action.payload));
      Snackbar.show({
        text: 'Successfully added reminder',
      });
    } else {
      yield put(addReminderFailure(result.message));
      Snackbar.show({
        text: 'Successfully could not be added reminder',
      });
    }
  } catch (error) {
    Snackbar.show({
      text: 'Successfully could not be added reminder',
    });
    yield put(addReminderFailure('An unexpected error occurred'));
  }
}

export default function* remindersSaga() {
  yield takeEvery(addReminderStart.type, addReminderSaga);
}
