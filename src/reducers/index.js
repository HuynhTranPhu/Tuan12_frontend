import { combineReducers } from 'redux'
import productReducers from './product.reducer'
import userReducers from './user.reducer'
import homeReducers from './home.reducer';
import orderReducers from './order.reducer';
export default combineReducers({
    productReducers,
    userReducers,
    homeReducers,
    orderReducers
})