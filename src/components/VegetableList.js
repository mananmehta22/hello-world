import React from 'react'

import Product from './Product.js'

export default function VegetableList(props) {
    return (
        props.vegetableList.map((vegetables, i)=>{
            return <Product vegetables={vegetables} key={i} incrementQuantity={props.incrementQuantity} index={i}/>
        })
    )
}
