import { combineReducers } from 'redux'
import productReducer, { ProductState } from './reducers'

export interface IAppState {
    product: ProductState
}

const rootReducer = combineReducers<IAppState>({ product: productReducer })

export default rootReducer