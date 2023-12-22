import React from 'react'

function Alert(props) {
    return (
        <div style = {{height:'40px'}}>
            {
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show w-50 mx-auto mt-1 text-center`} role="alert">
            <strong>{props.alert.msg}</strong>
        </div>
        }
        </div>
    )
}

export default Alert