import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../helpers/Api';

import './Home.css'


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  Api.getProducts()
    .then(products => {
      setProducts(products);
      setLoading(false);
    })

  return (
    <div>
      <h1>Home</h1>
      <hr />      
      {loading && <div><p>Carregando...</p></div> }
      {products.length > 0 && <ul>{products.map(product => <li key={product.id}>{product.title}</li>)}</ul> }

      <hr />
      <Link to="/sobre">Ir para pagina sobre</Link>
    </div>
  )
}
