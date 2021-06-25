import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import './index.scss'
import { useSelector } from 'react-redux'
import { IAppState } from '../../redux/reducers'

const Header = () => {
    const cart = useSelector((state: IAppState) => state.product.cart)
    const totalQty = cart.length
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="text-white font-bold text-3xl">JUNSEO</Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active text-xs font-normal" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item flex">
                        <Link to="/cart" className="nav-link active text-xs font-normal relative" aria-current="page" href="#">
                            {
                                totalQty >= 1 && (
                                    <span className="icon-cart">{totalQty}</span>
                                )
                            }
                            <IoCartOutline size="18" />
                        </Link>
                    </li>
                    {/* <li className="nav-item flex">
                        <FaRegUser size="15" color="#FFFFFF" className="mt-2" />
                        <span className="nav-link active text-xs font-normal">Welcome</span>
                    </li> */}
                    {/* <li className="nav-item border border-white rounded">
                        <Link to="/login" className="nav-link active text-xs font-normal" aria-current="page" href="#">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link active text-xs font-normal" aria-current="page" href="#">Register</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header
