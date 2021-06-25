import React from 'react'

type Props = {
    label: string;
    value: string;
    type: "text" | "textarea";
    name: string;
    onChange: (value: string, name: string) => void
}

const Input: React.FC<Props> = (props) => {
    const onChange = (e) => {
        props.onChange(e.target.value, e.target.name)
    }
    return (
        <>
            {
                props.type === "text" ? (
                    <div className="flex flex-col">
                        <label htmlFor={props.name} className="font-bold">{props.label}</label>
                        <input type={props.type} name={props.name} id={props.name} value={props.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} className="w-64 outline-none h-7 border-2" style={{ borderColor: "#C4C4C4" }} />
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <label htmlFor={props.name} className="font-bold">{props.label}</label>
                        <textarea id={props.name} name={props.name} cols={30} rows={10} value={props.value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)} className="outline-none border-2" style={{ borderColor: "#C4C4C4", width: 590 }}></textarea>
                    </div>
                )
            }
        </>
    )
}

export default Input
