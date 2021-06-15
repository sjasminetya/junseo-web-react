import product from '../../json/products.json'

export const addToChart = (data) => {
    return {
        type: "ADD_TO_CART",
        payload: { cart: data }
    }
}

export const emptyCart = () => {
    return {
        type: "EMPTY_CART",
        payload: { cart: [] }
    }
}

export const readyBuy = (_id) => {
    const findId = product.Woman.find(item => item._id === _id)
    return {
        type: "READY_BUY",
        payload: { buy: findId }
    }
}

export const reduceReadyBuy = (_id) => {
    return {
        type: "REDUCE_READY_BUY",
        payload: _id
    }
}

export const emptyReadyBuy = () => {
    return {
        type: "EMPTY_READY_BUY",
        payload: { buy: [] }
    }
}

export const addQty = (_id) => {
    const findId = product.Woman.find(item => item._id === _id)
    return {
        type: "ADD_QTY",
        payload: { cart: findId, buy: findId }
    }
}

export const reduceQty = (_id) => {
    const findId = product.Woman.find(item => item._id === _id)
    return {
        type: "REDUCE_QTY",
        payload: { cart: findId, buy: findId }
    }
}

export const removeItem = (_id) => {
    return {
        type: "REMOVE_ITEM",
        payload: _id
    }
}