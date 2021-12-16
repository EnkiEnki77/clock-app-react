import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {display: 'none', hidden: 'flex', move: 'none', buttonText: 'More',  arrow: 'none', background: 'rgba(255,255,255,0.7)'}

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {value: initialStateValue},
    reducers: {
        active: (state, action) => {
            state.value = action.payload;
        },
        unActive: (state)=>{
            state.value = initialStateValue
        }
    },
})

export const {active, unActive} = dropdownSlice.actions

export default dropdownSlice.reducer