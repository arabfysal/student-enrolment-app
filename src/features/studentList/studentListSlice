import { createSlice } from '@reduxjs/toolkit';

  const initialState = [
    {
        key: '1',
        FirstName: 'Mike',
        LastName: 'Musa',
        gender: 'Male',
        age: 32,
        department: 'Physics',
      },
      {
        key: '2',
        FirstName: 'Mike',
        LastName: 'Musa',
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