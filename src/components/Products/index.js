import React from 'react';
import './styles.css';

import {useStateValue} from '../../redux/stateProvider';

const Products = ({id,title,image,price,rating}) => {
  const [{}, dispatch] = useStateValue();
  const AddToBasketCar = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })

  } 
  
  return (
  <div className="products">
    <div className="product_info">
    <p>{title}</p>
    <p className='product-price'>
      <small>R$ </small>
      <strong>{price}</strong>
    </p>
    <div className="product-rating">
      {Array(rating)
        .fill()
        .map(_ => (
          <p>⭐</p>
        ))
      }
      </div>
    </div>
     <img src={image} alt=""/>
     <button onClick={AddToBasketCar()}>Adicionar ao Carrinho</button>
  </div>
  )
}

export default Products;