import React from 'react'
import { Breadcrumb as BC } from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'

type BreadcrumbProps = {
    category?: string;
    catalog?: string;
    title?: string;
    inDetail?: boolean;
    inCategory?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
    return (
        <BC separator="" className="uppercase tracking-widest">
            <BC.Item>
                <Link to="/">
                    Home
                </Link>
            </BC.Item>

            {
                props.category && (
                    <BC.Separator></BC.Separator>
                )
            }

            {
                props.category && (
                    <BC.Item>
                        {
                            props.inCategory ? (
                                <Link to={`/${props.category}`}>
                                    {props.category}
                                </Link>
                            ) : (
                                props.category
                            )
                        }
                    </BC.Item>
                )
            }

            {
                props.catalog ? (
                    <BC.Separator></BC.Separator>
                ) : ""
            }

            {
                props.catalog && (
                    <BC.Item>
                        {
                            props.inDetail ? (
                                <Link to={`/${props.category}/${props.catalog}`}>
                                    {props.catalog}
                                </Link>
                            ) : (
                                props.catalog
                            )
                        }
                    </BC.Item>
                )
            }

            {
                props.inDetail ? (
                    <BC.Separator></BC.Separator>
                ) : ""
            }

            {
                props.inDetail && (
                    <BC.Item>
                        {props.title}
                    </BC.Item>
                )
            }

        </BC>
    )
}

export default Breadcrumb
