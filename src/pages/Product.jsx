import axios from 'axios'
import React, {useState, useEffect} from 'react'

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
      </div>
    </div>
  )
}

export default Product