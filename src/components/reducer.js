import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const types = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREMENT2: 'INCREMENT2',
    DECREMENT2: 'DECREMENT2',
}

const reducer = (state, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, firstCounter: state.firstCounter + action.value}
        case types.DECREMENT:
            return { ...state, firstCounter: state.firstCounter - action.value}
        case types.INCREMENT2:
            return { ...state, secondCounter: state.secondCounter + action.value}
        case types.DECREMENT2:
            return { ...state, secondCounter: state.secondCounter - action.value}    
        case types.RESET:
            return initialState
        default:
            return state
    }
}

export default function reducer() {
    const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <div>Counter - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: types.INCREMENT, value: 1 })}>Increment</button>
        </div>
    )
}
