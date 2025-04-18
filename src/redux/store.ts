import { configureStore } from '@reduxjs/toolkit';
import reminderReducer from '../redux/reminder_slice';
import rootSaga from '../redux/reminder_saga';

const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        reminder: reminderReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
