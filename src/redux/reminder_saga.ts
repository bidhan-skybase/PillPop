import { takeEvery, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { MedicineEntry } from '../model/reminder_model';
import { storeReminder } from '../helpers/storage_helpers';
import {
    addReminderStart,
    addReminderSuccess,
    addReminderFailure,
} from '../redux/reminder_slice';
import {SaveStatus} from "../type.ts";

function* addReminderSaga(action: PayloadAction<MedicineEntry>) {
    try {
        const result: SaveStatus = yield call(storeReminder, action.payload);
        if (result.success) {
            yield put(addReminderSuccess(action.payload));
        } else {
            yield put(addReminderFailure(result.message));
        }
    } catch (error) {
        yield put(addReminderFailure('An unexpected error occurred'));
    }
}

export default function* remindersSaga() {
    yield takeEvery(addReminderStart.type, addReminderSaga);
}
