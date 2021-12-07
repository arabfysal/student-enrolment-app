import { createSlice } from '@reduxjs/toolkit';

  const initialState = [
    {
        key: '1',
        FirstName: 'Muhammad',
        LastName: 'Arab',
        gender: 'Male',
        age: 32,
        department: 'Physics',
      },
      {
        key: '2',
        FirstName: 'Mrs. Al-ameen',
        LastName: 'AbdulKadir',
        gender: 'Female',
        age: 32,
        department: 'Chemistry',
      }
  ]
  export const studentListSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
      fetchAll: (state, action)=> {
        //fetch all reducer
        state.push(action.payload)
      }
    }
  })

  export const { fetchAll } = studentListSlice.actions

  export default studentListSlice.reducer