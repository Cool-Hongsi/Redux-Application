/* Ducks Pattern (Action & Reducer place in one file) */

// Action Type (Ducks pattern usually uses module name + action)
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// Action Function
export const changeColor = (color) => {
    console.log("changeColor"); // 3
    return {type : CHANGE_COLOR, color} // 4
};

export const increment = () => {
    console.log("increment");
    return {type : INCREMENT}
};

export const decrement = () => {
    console.log("decrement");
    return {type : DECREMENT}
};

// Define initial state
const initialState = {
    color : 'red',
    number : 0
};

// Reducer
export default function counter(state = initialState, action){ // state = initialState (first time only)
    console.log("counter reducer");
    console.log(state, action);
    
    // if(state === undefined){
    //     return {
    //         color : 'red',
    //         number : 0
    //     }
    // }

    // if(action.type === 'CHANGE_COLOR'){
    //     var newState;
    //     newState = Object.assign({}, state, {
    //         color : action.color
    //     });
    //     return newState;
    // }

    switch(action.type){
        case CHANGE_COLOR:
            console.log("CHANGE_COLOR");
            return {
                ...state,
                color : action.color
            };
        case INCREMENT:
            console.log("INCREMENT");
            return {
                ...state,
                number : state.number + 1
            };
        case DECREMENT:
            console.log("DECREMENT");
            return {
                ...state,
                number : state.number - 1
            };
        default:
            return state;
    }
}
