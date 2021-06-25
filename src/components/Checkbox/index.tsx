import React from 'react'
import './index.scss'

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = (props) => {
    return (
        <label className="checkbox">
            <input type="checkbox" value={props.value} onChange={props.onChange} className="w-5 h-5" />
            <span className="checkmark"></span>
        </label>
    )
}

export default Checkbox
