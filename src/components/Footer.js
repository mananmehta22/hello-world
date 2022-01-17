import React from 'react'

export default function Footer(props) {
    return (
        <div className='row'>
            <button className='btn btn-danger col-2'>Reset</button>
            <div>
                {props.totalAmount}
            </div>
        </div>
    )
}
