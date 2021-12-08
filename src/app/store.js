import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from '../features/studentList/studentListSlice';
import drawerStatusReducer from '../features/enrolmentForm/enrolmentFormDrawerSlice'

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    drawerState: drawerStatusReducer
  },
});
