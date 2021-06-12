import React from 'react'
import { ImgBlog } from '../assets/images'
import { AiOutlineRight } from 'react-icons/ai'

const Blog = () => {
    return (
        <section className="container mt-20">
            <div className="row">
                <div className="col pt-36">
                    <span className="font-semibold text-4xl" style={{ color: "#8E8E8E" }}>Blog</span>
                    <h1 className="font-bold pt-5">How to mix and match your clothes correctly</h1>
                    <p className="pt-3 font-normal text-xl">Matching clothes goes beyond looking nice. It affects how you feel and your confidence. When you confidently put together an outfit and intentionally matched different pieces, you’ll feel great wearing it.</p>
                    <div className="flex mt-20">
                        <span className="text-lg" style={{color: "#777777"}}>View More</span>
                        <AiOutlineRight size={32} color="#505050" />
                    </div>
                </div>
                <div className="col">
                    <img src={ImgBlog} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Blog
