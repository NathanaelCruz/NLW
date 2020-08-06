import React, { SelectHTMLAttributes } from 'react'

import './style.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>
}


const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value="" disabled selected hidden>Selecione uma opção</option>
                {options.map(optionItem => {
                    return <option key={optionItem.value} value={optionItem.value}>{optionItem.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select;