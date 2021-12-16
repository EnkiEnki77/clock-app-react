import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {time: '', dayWeek: '', dayYear: '', week: '', timezone: '', moon: '', sun: ''}

const timeSlice = createSlice({
    name: 'clock',
    initialState: {value: initialStateValue},
    reducers: {
        time: (state, action) => {
            state.value = action.payload;
        },
        icon: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const {time, icon} = timeSlice.actions

export default timeSlice.reducer