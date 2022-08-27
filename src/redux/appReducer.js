import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';
import cartReducer from './cart/cart.reducer'

const persistConfig = {
    key: 'food-shop',
    storage
  }

 const persistedReducer= persistReducer(persistConfig,cartReducer);

 export default persistedReducer


