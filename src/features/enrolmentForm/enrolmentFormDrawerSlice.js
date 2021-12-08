import { createSlice } from '@reduxjs/toolkit';

const initialState = {value: true}
export const drawerSlice = createSlice({
  name: "enrolmentFormDrawer",
  initialState,
  reducers: {
    toggleDrawer: (state, action)=> {
      state.value = action.payload
    }
  }
})

export const { toggleDrawer } = drawerSlice.actions

export default drawerSlice.reducer