import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IAppState } from '../../redux/reducers'
import formatRupiah from '../../utils/formatNumber'
import { Like, Paypal, Visa, MasterCard, AmericanExpress } from '../../assets/images'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { reduceReadyBuy, removeItem } from '../../redux/action'
import { Header, Input, Button, Footer } from '../../components'

const Checkout = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { readyBuy: ready } = useSelector((state: IAppState) => state.product)
    const totalPrice = ready.reduce((a, b) => a + b.qty * b.price.split(".")[1].concat(b.price.split(".")[2]).split(" ")[1], 0)
    const [checkout, setCheckout] = useState<{
        firstName: string,
        lastName: string,
        country: string,
        city: string,
        postalCode: string,
        phone: string,
        address: string,
        cart: {
            size: string,
            color: string,
            productId: string,
            qty: number
        }[],
        totalPrice: number
    }>({
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        postalCode: "",
        phone: "",
        address: "",
        cart: [
            {
                size: "",
                color: "",
                productId: "",
                qty: 0
            }
        ],
        totalPrice: totalPrice
    })
    const onChange = (value, name) => {
        setCheckout({
            ...checkout,
            [name]: value
        })
    }

    const submit = () => {
        const data = {
            ...checkout,
            cart: ready
        }
        console.log(data)
        ready.forEach(element => {
            dispatch(reduceReadyBuy(element._id))
            dispatch(removeItem(element._id))
        });
    }
    return (
        <>
            <Header />
            <div className="container mt-20">
                <div className="row">
                    <div className="col-7">
                        <h3>Checkout</h3>
                        <hr />
                        <div className="row mb-5">
                            <div className="col-6">
                                <Input label="First name" value={checkout.firstName} onChange={onChange} type="text" name="firstName" />
                            </div>
                            <div className="col-6">
                                <Input label="Last name" value={checkout.lastName} onChange={onChange} type="text" name="lastName" />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-6">
                                <Input label="Country" value={checkout.country} onChange={onChange} type="text" name="country" />
                            </div>
                            <div className="col-6">
                                <Input label="City" value={checkout.city} onChange={onChange} type="text" name="city" />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-6">
                                <Input label="Postal Code" value={checkout.postalCode} onChange={onChange} type="text" name="postalCode" />
                            </div>
                            <div className="col-6">
                                <Input label="Phone" value={checkout.phone} onChange={onChange} type="text" name="phone" />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <Input label="Address" value={checkout.address} onChange={onChange} type="textarea" name="address" />
                        </div>
                        <h3>Shipping Option</h3>
                        <hr />
                        <div className="flex mb-5">
                            <div className="circle rounded-full bg-white" style={{ width: 100, height: 100 }}>
                                <img src={Like} alt="" />
                            </div>
                            <div className="ml-3 mt-4">
                                <h5>Congratulations, your order qualifies for free shipping.</h5>
                                <p>For your order, you received medium shipping.</p>
                            </div>
                        </div>
                        <h3>Payment Option</h3>
                        <hr />
                        <div className="flex">
                            <img src={Visa} width={100} alt="visa" />
                            <img src={MasterCard} width={100} alt="master card" className="ml-2" />
                            <img src={Paypal} width={100} alt="paypal" className="ml-2" />
                            <img src={AmericanExpress} width={100} alt="american express" className="ml-2" />
                            <Button type="Button" className="w-28 h-14 text-black bg-white border-2 border-black ml-2" radius="4">
                                COD
                            </Button>
                        </div>
                        <div className="flex mt-20">
                            <Button type="Button" className="w-72 h-8 text-black bg-white border-2 border-black" radius="4" onClick={() => {
                                history.push("/cart"); ready.forEach(element => {
                                    dispatch(reduceReadyBuy(element._id))
                                    dispatch(removeItem(element._id))
                                });
                            }}>
                                BACK TO CART
                            </Button>
                            <Button type="Button" className="w-72 h-8 text-white ml-2" isBlack radius="4" onClick={() => {
                                submit()
                                history.push("/success")
                            }}>
                                CONFIRM YOUR ORDER
                            </Button>
                        </div>
                    </div>
                    <div className="col-5">
                        <h3>Your Item</h3>
                        <hr />
                        <div className="flex justify-between">
                            <p>Item Subtotal</p>
                            <p>Rp. {formatRupiah(totalPrice)}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p className="font-bold">Estimated total</p>
                            <p>Rp. {formatRupiah(totalPrice)}</p>
                        </div>
                        <hr />
                        {
                            ready.map((val, i) => (
                                <div className="flex mb-4 justify-between" key={i}>
                                    <div className="flex">
                                        <img src={val.image} alt={val.name} className="object-cover" style={{ width: 125, height: 200 }} />
                                        <div className="ml-3">
                                            <h6 className="font-bold">{val.name}</h6>
                                            <h6>Color: {val.color[0]}</h6>
                                            <h6>Size: {val.size[0]}</h6>
                                            <h6>Quantity: {val.qty}</h6>
                                            <h6 className="font-bold pt-3">You will receive your order on:</h6>
                                            <Button type="Button" className="w-36 h-7 text-black bg-white border-2 border-black" radius="4">
                                                29 June 2021
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <hr />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
