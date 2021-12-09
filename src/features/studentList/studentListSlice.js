import { createSlice } from '@reduxjs/toolkit';

  const initialState = [
    {
        key: '1',
        firstName: 'Muhammad',
        lastName: 'Arab',
        gender: 'Male',
        level: 32,
        department: 'Physics',
      },
      {
        key: '2',
        firstName: 'Mrs. Al-ameen',
        lastName: 'AbdulKadir',
        gender: 'Female',
        level: 32,
        department: 'Chemistry',
      }
  ]
  export const studentListSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
      enrolStudent: (state, action)=> {
        state.push(action.payload)
      }
    }
  })

  export const { enrolStudent } = studentListSlice.actions

  export default studentListSlice.reducer