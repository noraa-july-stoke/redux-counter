import { createStore, combineReducers  } from 'redux';




//createStore needs a reducer.
//STATE TYPES: {counter: int, time: date object }
// You could do many things with this, like build site-wide available widgets
// with persistent data or make global default themes;
// const initialTime = `${new Date()}`;
const initialState = { counter: {counter: 0}, time: {time: new Date()}};

const counterReducer = (state = initialState, action) => {

    const newState = {...state};

    //Reducers need to be synchronous.
    //Do not mutate original state.
    //Counter is type integer
    switch(action.type) {
        case('INC'):

            newState.counter.counter++;
            return(newState);

        case('DEC'):

            newState.counter.counter--;
            return (newState);

        case('ADD'):
            newState.counter.counter += action.payload;
            return(newState)

        default:
            return state;
    }
};

const UPDATE_TIME = 'UPDATE_TIME';


export const updateTime = (date) =>{
    return ({
        type: UPDATE_TIME,
        date
})};


const timeReducer = ( state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case(UPDATE_TIME):
            newState.date = action.date;
            return (newState);
        default:
            return state;
    }
};

const rootReducer =  combineReducers({
    counter: counterReducer,
    time: timeReducer
});


//const store = createStore(rootReducer);

const configureStore = (preLoadedState) => {
    return createStore(rootReducer, preLoadedState)
};

export default configureStore;
