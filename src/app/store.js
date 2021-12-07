import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from '../features/studentList/studentListSlice';

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
