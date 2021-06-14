
export interface ProductState {
    cart: { _id: string, name: string, size: string[], color: string[], price: string, image: string, qty: number }[],
    readyBuy: [] | string[]
}

const initialState: ProductState = {
    cart: [],
    readyBuy: []
}

const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(action.payload.cart)
            const findProduct = state.cart.find(item => item._id === action.payload.cart._id ? true : false)
            console.log("find", findProduct)
            return {
                ...state,
                cart: findProduct === undefined ? [...state.cart, { ...action.payload.cart, qty: 1, isChecked: false }] : state.cart.map(item => item._id === action.payload.cart._id ? { ...action.payload.cart, qty: item.qty + 1 } : item)
            }
        default:
            return state;
    }
}

export default productReducer