import { createStore, combineReducers  } from 'redux';

//createStore needs a reducer.
//STATE TYPES: {counter: int, time: date object }
// You could do many things with this, like build site-wide available widgets
// with persistent data or make global default themes;
// const initialTime = `${new Date()}`;
const initialState = { counter: 0, time: new Date()}
const counterReducer = (state = initialState, action) => {

    //Reducers need to be synchronous.
    //Do not mutate original state.
    //Counter is type integer
    switch(action.type) {
        case('INC'):
            return({counter: state.counter + 1});

        case('DEC'):
            return({counter: state.counter - 1})

        case('ADD'):
            return({counter: state.counter + action.payload})
        default:
            return state;
    }

}
const reducerFn = () => combineReducers({
    counterState: counterReducer
});


const store = createStore(reducerFn);


export default store;
