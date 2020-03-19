import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid'

export const slice = createSlice({
    name: 'counter',
    initialState: {
        counters: [
            {
                id: '123',
                value: 8
            },
            {
                id: uuid.v4(),
                value: 12
            },
            {
                id: uuid.v4(),
                value: 123
            }
        ],
        selectedCounter: '123'
    },
    reducers: {
        addCounter: state => {
            const newId = uuid.v4()
            state.counters.push({ id: newId, value: 0 })
            state.selectedCounter = newId
        },
        removeCounter: state => {
            const {counters, selectedCounter} = state

            state.counters = counters.filter(counter => counter.id !== selectedCounter )
            state.selectedCounter = ''
        },
        selectCounter: (state, action) => {
            state.selectedCounter = action.payload
        },
        increment: state => {
            const {counters, selectedCounter} = state
            const index = counters.findIndex(counter => counter.id === selectedCounter)

            state.counters[index].value += 1;
        },
        decrement: state => {
            const {counters, selectedCounter} = state
            const index = counters.findIndex(counter => counter.id === selectedCounter)

            state.counters[index].value -= 1;
        },
        reset: state => {
            const {counters, selectedCounter} = state
            const index = counters.findIndex(counter => counter.id === selectedCounter)

            state.counters[index].value = 0;
        },
    },
});

export const selectCounters = state => state.counter.counters;
export const selectSelectedCounter = state => state.counter.selectedCounter;

export const { addCounter, removeCounter, selectCounter, increment, decrement, reset } = slice.actions;


export default slice.reducer;