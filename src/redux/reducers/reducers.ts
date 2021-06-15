
export interface ProductState {
    cart: { _id: string, name: string, size: string[], color: string[], price: string, image: string, qty: number }[],
    readyBuy: { _id: string, name: string, size: string[], color: string[], price: string, image: string, qty: number }[] | any
}

const initialState: ProductState = {
    cart: [],
    readyBuy: []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const findProduct = state.cart.find(item => item._id === action.payload.cart._id ? true : false)
            return {
                ...state,
                cart: findProduct === undefined ? [...state.cart, { ...action.payload.cart, qty: 1, isChecked: false }] : state.cart.map(item => item._id === action.payload.cart._id ? { ...action.payload.cart, qty: item.qty + 1 } : item)
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart: action.payload.cart
            }
        case "READY_BUY":
            const fProduct = state.readyBuy.find(item => item._id === action.payload.buy._id ? true : false)
            const findCart = state.cart.find(item => item._id === action.payload.buy._id ? true : false)
            return {
                ...state,
                readyBuy: fProduct === undefined ? [...state.readyBuy, { ...findCart, isChecked: true }] : state.readyBuy.map(item => item._id === action.payload.buy._id ? { ...item, qty: item.qty + 1 } : item)
            }
        case "REDUCE_READY_BUY":
            return {
                ...state,
                readyBuy: state.readyBuy.filter(item => item._id !== action.payload)
            }
        case "EMPTY_READY_BUY":
            return {
                ...state,
                readyBuy: action.payload.buy
            }
        case "ADD_QTY":
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.cart._id ? {...item, qty: item.qty + 1} : item),
                readyBuy: state.readyBuy.map(item => item._id === action.payload.buy._id ? {...item, qty: item.qty + 1} : item)
            }
        case "REDUCE_QTY":
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.cart._id ? item.qty <= 0 ? item.qty = 1 : {...item, qty: item.qty - 1} : item),
                readyBuy: state.readyBuy.map(item => item._id === action.payload.buy._id ? item.qty <= 0 ? item.qty = 0 : {...item, qty: item.qty - 1} : item)
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload)
            }
        default:
            return state;
    }
}

export default productReducer