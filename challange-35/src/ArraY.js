import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(id) {
    const newproduct =products.map((el)=>{
      if(el.id === id){
        return {...el,count:el.count+1};
      }else{
        return el;
      }
    })
    setProducts(newproduct)
  }
  //this way with filter and map
  // function handleInMinusClick(id) {
  //   const newproduct =products.map((el)=>{
  //     if(el.id === id & el.count > 0){
  //       return {...el,count:el.count-1};
  //     }else{
  //       return el;
  //     }
  //   }).filter(el => el.count > 0);
  //   setProducts(newproduct)
  // }

  // this way with forloop and without filter and map
    function handleInMinusClick(id) {
      let updatedProducts = [];
       for(let product of products){
        if(product.id === id){
          if (product.count > 1) {
            updatedProducts.push({...product,count:product.count - 1})};
          }else{
            updatedProducts.push(product);
          }
       }
    setProducts(updatedProducts)
  }
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleInMinusClick(product.id);
          }}>
            -
          </button>
        </li>
      ))}
    </ul>
  );
}