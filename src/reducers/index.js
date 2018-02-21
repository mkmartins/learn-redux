import { combineReducers } from 'redux'
import ItemsReducer from './ItemsReducer'
import ActiveItemReducer from './ActiveItemReducer'

const  rootReducer = combineReducers({
    items: ItemsReducer,
    activeItem: ActiveItemReducer

})

export default rootReducer