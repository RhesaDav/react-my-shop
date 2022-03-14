import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ProductCard from '../component/ProductCard'

function Product () {
  const [product,setProduct] = useState([])

  useEffect(() => {
    fetchProduct()
  })

  const fetchProduct = () => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return(
    <div>
      <div className='product-list'>
        <ProductCard />
      </div>
    </div>
  )
}

export default Product