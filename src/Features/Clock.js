import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {time: '', dayWeek: '', dayYear: '', week: '', timezone: ''}

const timeSlice = createSlice({
    name: 'clock',
    initialState: {value: initialStateValue},
    reducers: {
        time: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const {time} = timeSlice.actions

export default timeSlice.reducer