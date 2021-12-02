import { createStore,combineReducers } from 'redux'


const reducer = combineReducers({

})

const initialState = {}

const store = createStore(
    reducer,
    initialState
)
export default store