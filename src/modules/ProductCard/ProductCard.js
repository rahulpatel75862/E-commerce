
import Products from '../../components/Products/Products'
import Categories from '../../components/Categories/Categories'
import { useState } from 'react';
import { useEffect } from 'react';

const ProductCard = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])


  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20 mb-10">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
      </div>
      {
        products.length > 0 ?
          <Products products={products} />
          :
          <div>Loadin.....</div>
      }
    </div>
  )
}

export default ProductCard