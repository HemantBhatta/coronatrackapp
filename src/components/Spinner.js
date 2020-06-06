import React from 'react'
import App from '../App.css'

import gifload from './loading-arrow.gif'

export default function Spinner() {
    return (
        <div className="spinnerload">
            <img src={gifload} alt=""/>
        </div>
    )
}
