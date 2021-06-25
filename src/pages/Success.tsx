import React from 'react'
import { useHistory } from 'react-router-dom'
import { success } from '../assets/images'
import Button from '../components/Button'

const Success = () => {
    const history = useHistory()
    return (
        <section className="w-full flex justify-center">
            <div className="mt-20 mb-5">
                <img src={success} width={420} height={392} className="object-cover mx-auto" alt="success" />
                <h6 className="text-lg text-black font-medium pt-10 text-center">Order Was Successful!</h6>
                <h6 className="text-xs text-black text-center">Thank you for your order. We'll contact you when your order is on its way.</h6>
                <Button type="Button" radius="4" isBlack className="text-white w-72 h-8 ml-16 mt-2" onClick={() => history.push("/")}>
                    BACK TO HOME
                </Button>
            </div>
        </section>
    )
}

export default Success
