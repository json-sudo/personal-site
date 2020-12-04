import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ id, handleChange, label, rows, ...otherProps }) => {
    return (
        <div className="form-group">
            {/* checking if the user has started typing into the input. If yes, then add the shrink class to the label */}

            {
                otherProps.type === 'textarea' ?
                <textarea className="form-input" id={id} onChange={handleChange} rows={rows} {...otherProps} /> :
                <input className="form-input" id={id} onChange={handleChange} {...otherProps} />
            }

            <label htmlFor={id} className={`${otherProps.value ? otherProps.value.length ? 'shrink' : '' : ''} form-input-label`}>
                {label}

                {
                    otherProps.required ? <span className="required-symbol">*</span> : ''
                }
            </label>
        </div>
    )
}

export default FormInput
