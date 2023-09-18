import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Products from '../../components/Products/Products'

const CategoryProduct = () => {
    const {name} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch (`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json()
            console.log(data)
            setProducts(data);
        }
        fetchProducts();
    })

    if (products.length === 0) return <div>Loading.....</div>


  return (
    <Products products={products} />
  )
}

export default CategoryProduct