import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../styles/product.css'

function ProductCard () {
  const [product,setProduct] = useState([])

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = () => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      console.log(res)
      setProduct(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div className='product-container'>
        {product.map((product) => (
          <div className='product-card'>
            <h1 className='product-title'>{product.title}</h1>
            <img alt={product.id} src={product.image} className='product-img'/>
            <span>$ {product.price}</span>
            <div>
            <button>Detail</button>
            <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard