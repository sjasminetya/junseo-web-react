import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { IAppState } from '../redux/reducers'
import { Checkbox } from 'antd'
import { addQty, readyBuy, reduceQty, reduceReadyBuy, removeItem } from '../redux/action'
import { useState } from 'react'
import formatRupiah from '../utils/formatNumber'
import { useHistory } from 'react-router-dom'

const Cart = () => {
    const history = useHistory()
    const cart = useSelector((state: IAppState) => state.product.cart)
    const ready = useSelector((state: IAppState) => state.product.readyBuy)
    const totalPrice = ready.reduce((a, b) => a + b.qty * b.price.split(".")[1].concat(b.price.split(".")[2]).split(" ")[1], 0)
    const [checkEl, setCheckEl] = useState(false)
    const dispatch = useDispatch()
    const add = (_id) => {
        dispatch(addQty(_id))
    }

    const reduce = (_id) => {
        dispatch(reduceQty(_id))
    }

    const removeCart = (_id) => {
        dispatch(removeItem(_id))
        dispatch(reduceReadyBuy(_id))
    }

    const handleCheckEL = (data, e) => {
        cart.forEach(el => {
            if (el.name === e.target.value) {
                if (e.target.checked) {
                    setCheckEl(true)
                    dispatch(readyBuy(el._id))
                } else {
                    dispatch(reduceReadyBuy(el._id))
                    if (ready.length > 0) {
                        setCheckEl(true)
                    } else {
                        setCheckEl(false)
                    }
                }
            }
        })
    }
    return (
        <>
            <Header />
            <section className="container mt-20">
                <div className="row">
                    <div className="col-7">
                        <h3>Your Shopping Cart</h3>
                        <hr />
                        {
                            cart.map((val, i) => (
                                <div className="flex mb-4 justify-between">
                                    <div className="flex">
                                        <img src={val.image} alt={val.name} className="object-cover" style={{ width: 125, height: 200 }} />
                                        <div className="ml-3">
                                            <Checkbox value={val.name} onChange={(e) => handleCheckEL(val, e)}></Checkbox>
                                            <h6>{val.name}</h6>
                                            <h6>{val.price}</h6>
                                            <div className="flex">
                                                <p>Color: {val.color[0]}</p>
                                                <p className="pl-3">Size: {val.size[0]}</p>
                                            </div>
                                            <div className="flex">
                                                <Button type="submit" className="w-10 h-10 text-white" qty={val.qty} isBlack radius="4" onClick={() => reduce(val._id)}>
                                                    -
                                                </Button>
                                                <Button type="Button" className="w-10 h-10 text-black bg-white" radius="4">
                                                    {val.qty <= 1 ? 1 : val.qty}
                                                </Button>
                                                <Button type="submit" className="w-10 h-10 text-white" isBlack radius="4" onClick={() => add(val._id)}>
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-auto px-2 h-10 text-white" isBlack radius="4" onClick={() => removeCart(val._id)}>
                                        Remove
                                    </Button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-4 ml-20">
                        <h3>Order Summary</h3>
                        <hr />
                        <div className="flex justify-between">
                            <p>Item Subtotal</p>
                            <p>Rp. {checkEl ? formatRupiah(totalPrice) : 0}</p>
                        </div>
                        <Button type="Button" className="w-full h-10 text-white" isBlack radius="4" onClick={() => history.push("/success")}>
                            CHECKOUT
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Cart
