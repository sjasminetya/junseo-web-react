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

export const readyBuy = (id) => {
    const findId = product.Woman.find(item => item._id === id)
    return {
        type: "READY_BUY",
        payload: { buy: findId }
    }
}

export const reduceReadyBuy = (id) => {
    return {
        type: "REDUCE_READY_BUY",
        payload: id
    }
}

export const emptyReadyBuy = () => {
    return {
        type: "EMPTY_READY_BUY",
        payload: { buy: [] }
    }
}

export const addQty = (id) => {
    const findId = product.Woman.find(item => item._id === id)
    return {
        type: "ADD_QTY",
        payload: { cart: findId, buy: findId }
    }
}

export const reduceQty = (id) => {
    const findId = product.Woman.find(item => item._id === id)
    return {
        type: "REDUCE_QTY",
        payload: { cart: findId, buy: findId }
    }
}

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id
    }
}