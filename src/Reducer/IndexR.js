import currentUser from './CurrentUserR';
import counter from './CounterR'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter
})

export default rootReducer