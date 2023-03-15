import React, { useMemo, useState } from 'react'

function LearnUseMemo() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('Tinh toan lai....')
      return result + prod.price
    }, 0)
    return result
  }, [products])

  return (
    <>
      <h1>bai 12 total: {total} </h1>
      <input type="text" value={name} placeholder="Enter name..." onChange={e => setName(e.target.value)} />
      <br />
      <input type="text" value={price} placeholder="Enter price..." onChange={e => setPrice(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>ADD</button>

      <ul>

      {products.map((product, index) => (
        <li key={index}>
          {product.name} - {product.price}
        </li>
      ))}
      </ul>
    </>
  )
}

export default LearnUseMemo