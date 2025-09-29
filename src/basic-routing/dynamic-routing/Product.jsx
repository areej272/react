import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

    const products = [
        {id:'1', name:'laptop'},
        {id:'2', name:'phone'}
    ]

  return (
    <div>
      <h2>Product List</h2>
      <ul>{products.map(p => (
        <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
        </li>
      ))}</ul>
    </div>
  )
}

export default Product
