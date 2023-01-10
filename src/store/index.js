import { createStore } from 'redux';

//createStore needs a reducer.
//STATE TYPES: {counter: int, }
// You could do many things with this, like build site-wide available widgets
// with persistent data or make global default themes;
const reducerFn = (state = { counter: 0}, action) => {

    //Reducers need to be synchronous.
    //Do not mutate original state.

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

    return state;
}


const store = createStore(reducerFn);


export default store;
