import React from 'react'

import Product from './Product.js'

export default function VegetableList(props) {
    return (
        props.vegetableList.map((vegetable, i)=>{
            return <Product 
            vegetable={vegetable} 
            key={i} 
            incrementQuantity={props.incrementQuantity} 
            index={i}/>
        })
    )
}
