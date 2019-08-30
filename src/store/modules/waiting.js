/* Use redux-actions */
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

/* FSA Rule -> Created for Readable, Useful, Simple Action Object */
/* Requirement -> Pure Javascript Object, Should have type value, Values (payload, error, meta) */

// export const changeInput = (text) => {
//     return {
//         type : CHANGE_INPUT,
//         payload : text
//     }
// };

// export const create = (text) => {
//     return {
//         type : CREATE,
//         payload : text
//     }
// };

// export const enter = (id) => {
//     return {
//         type : ENTER,
//         payload : id
//     }
// };

// export const leave = (id) => {
//     return {
//         type : LEAVE,
//         payload : id
//     }
// };

/* Same as above action functions with redux-actions */
// First parameter should be type value
// Second parameter should be payload value
let id = 3;

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, text => ({ text, id: id++ }));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

/*
    Example)
    changeInput("hi");
    { type : CHANGE_INPUT, payload : "hi" }

    create("hello");
    { type : CREATE, payload : { id : 3, text : "hello" }}
    create("bye");
    { type : CREATE, payload : { id : 4, text : "bye" }}
*/

const initialState = {

    input: '',

    list: [
      {
        id: 0,
        name: 'AAA',
        entered: true,
      },
      {
        id: 1,
        name: 'BBB',
        entered: false,
      },
      {
        id: 2,
        name: 'CCC',
        entered: false,
      },
    ],
};
  
// Reducer with handleActions
export default handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({
            ...state,
            input: action.payload,
        }),
    
        [CREATE]: (state, action) => ({
            ...state,
            list: state.list.concat({
                id: action.payload.id,
                name: action.payload.text,
                entered: false,
            }),
        }),

        [ENTER]: (state, action) => ({
            ...state,
            list: state.list.map(
                item =>
                item.id === action.payload
                    ? { ...item, entered: !item.entered }
                    : item
            ),
        }),

        [LEAVE]: (state, action) => ({
            ...state,
            list: state.list.filter(item => item.id !== action.payload),
        }),
    },
    initialState
);