import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../Button'
import Breadcrumb from '../Breadcrumb'
import './index.scss'

type CatalogProps = {
    images: { image: string, hasSource: boolean, source?: string, title: string, name?: string }[];
    type: "men" | "woman" | "kids";
}

const Catalog: React.FC<CatalogProps> = (props) => {
    const history = useHistory()
    return (
        <section className="container">
            <h1 className="flex justify-center pt-5 uppercase">{props.type === "men" ? "Men's Catalog" : props.type === "woman" ? "Woman Catalog" : "Kids Catalog"}</h1>
            <hr className="w-full" />
            <Breadcrumb inCategory={false} category={props.type} />
            <div className="row mt-3">
                {
                    props.images.map((val, i) => (
                        <div className="col-4 relative cursor-pointer" key={i} onClick={() => history.push(`/${props.type}/${val.title}`)}>
                            <img src={val.image} alt={val.title} className="object-cover" style={{ width: 400, height: 600 }} />
                            <Button className="absolute py-3 custom-top custom-width uppercase text-black font-medium text-xl bg-gray-200" type="Button" radius="4">
                                {val.title}
                            </Button>
                            {
                                val.hasSource && (
                                    <span>Photo by <a href={val.source}>{val.name}</a> on Unsplash</span>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Catalog
