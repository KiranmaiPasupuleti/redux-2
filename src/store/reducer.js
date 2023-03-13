const initialState= {
    greeting: "Hello World!",
    count : 0,
    history : []
}

const reducer = (state = initialState,action) => {
    const newState = {...state} 
    if (action.type === "INCREMENT") {
        //newState.count += action.value
        return {
            ...state,
            count: state.count + action.value,
            history : [...state.history,
                {id:Math.random(),count : state.count + action.value}]
        }
    }
    if (action.type === "DECREMENT") {
        //newState.count -= action.value
        return {
            ...state,
            count: state.count - action.value,
            history: [...state.history,
                {id:Math.random() ,count : state.count - action.value}]
        }
    }
    return newState
}

export default reducer