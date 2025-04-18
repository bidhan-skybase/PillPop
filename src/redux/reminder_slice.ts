import {MedicineEntry} from '../model/reminder_model.ts';
import {SaveStatus} from '../type.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ReminderState {
  reminders: MedicineEntry[];
  isLoading: boolean;
  error: string | null;
  saveStatus: SaveStatus | null;
}

const initialState: ReminderState = {
  reminders: [],
  isLoading: false,
  error: null,
  saveStatus: null,
};

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState: initialState,
  reducers: {
    addReminderStart(state,action:PayloadAction<MedicineEntry>) {
      state.isLoading = true;
      state.error = null;
      state.saveStatus = null;
    },
    addReminderSuccess(state, action: PayloadAction<MedicineEntry>) {
      state.reminders.push(action.payload);
      state.isLoading = false;
      state.saveStatus = {success:true,message:"Data saved successfully"}
    },
    addReminderFailure(state,action:PayloadAction<string>) {
      state.isLoading=false;
      state.error=null;
      state.saveStatus={success:false,message:action.payload}
    },
    resetReminderState(state: ReminderState) {
      state.saveStatus=null
    }
  },
});

export const {addReminderStart, addReminderFailure,addReminderSuccess,resetReminderState} = reminderSlice.actions;

export const selectReminders = (state: { reminder: ReminderState }) => state.reminder.reminders;

export default reminderSlice.reducer;
