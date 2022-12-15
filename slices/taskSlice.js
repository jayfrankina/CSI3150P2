import { createSlice } from "@reduxjs/toolkit";

//initial state - User is able to view pending tasks for the day/week. Asks user if they would like to store or delete any planned tasks they have.
/**
 * Option 1: Deleting Tasks
 * Option 2: Adding Tasks
 */
    // TaskName: text,
    // TaskDescription: text,
    // TaskDate: Date,
    // TaskTime: Date,

const initialState = {
    TaskName: null,
    TaskDescription: null,
    TaskDate: null,
    TaskTime: null

}
  
// create data slice
export const taskSlice = createSlice({
  name: "TaskData",
  initialState,
  reducers: {
    setTaskName: (state, action) => {
       state.TaskName = action.payload;
     },
     setTaskDetails: (state, action) => {
       state.TaskDetails = action.payload;
     },
     setTaskDate: (state, action) => {
       state.TaskDate = action.payload;
     },
     setTaskTime: (state, action) => {
       state.TaskTime = action.payload;
     },
   },
});

// export reducers
 export const {
  setTaskName,
  setTaskDetails,
  setTaskTime,
  setTaskDate
 } = taskSlice.actions;

// create and export selectors
export const selectTaskName = (state) =>
  state.TaskData.TaskName;

export const selectTaskDetails = (state) =>
  state.TaskData.TaskDetails;

export const selectTaskDate = (state) =>
  state.TaskData.TaskDate;

export const selectTaskTime = (state) =>
  state.TaskData.TaskTime;

export default taskSlice.reducer;