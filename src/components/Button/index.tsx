import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

type ButtonProps = {
    className: string,
    onClick?: () => void;
    isDisabled?: boolean;
    isLoading?: boolean;
    href?: string | any;
    isInternalLink?: boolean;
    type: "Link" | "Button" | "submit";
    isBlack?: boolean;
    isWhite?: boolean;
    radius: "4" | "10";
    isShadow?: boolean;
    qty?: number;
    check?: boolean;
    style?: object;
}

const Button: React.FC<ButtonProps> = (props) => {
    const className = [props.className]
    props.isBlack && className.push("btn-black")
    props.isWhite && className.push("btn-white")
    props.radius === "4" ? className.push("radius-4") : className.push("radius-10")
    props.isShadow && className.push("shadow-lg")

    const onClick = () => {
        props.onClick && props.onClick()
    }

    if (props.isDisabled) {
        props.isDisabled && className.push("disabled")
        return (
            <span
                className={className.join(" ")}
                onClick={onClick}
            >
                {props.children}
            </span>
        )
    }

    if (props.type === "Link") {
        if (props.isInternalLink) {
            return (
                <>
                    <Link
                        to={props.href}
                        className={className.join(" ")}
                        onClick={onClick}
                    >
                        {props.children}
                    </Link>
                </>
            )
        } else {
            return (
                <>
                    <a href={props.href} target="_blank" rel="noreferrer" className={className.join(" ")} onClick={onClick}>{props.children}</a>
                </>
            )
        }
    }
    return (
        <button style={props.style} type={props.type === "submit" ? "submit" : "button"} disabled={props.qty === 1 || props.check === false} className={className.join(" ")} onClick={onClick}>
            {
                props.isLoading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow spinner-grow-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    props.children
                )
            }
        </button>
    )
}

export default Button
