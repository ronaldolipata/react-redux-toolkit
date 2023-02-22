import { useState } from 'react';
import { useSelector } from 'react-redux';

const initialProducts = [
  {
    name: 'eggs',
    cost: 2.99,
  },
  {
    name: 'pants',
    cost: 9.99,
  },
  {
    name: 'paper plates',
    cost: 5.99,
  },
];

function Products() {
  const [products] = useState(initialProducts);
  const filterBy = useSelector((state) => state.productFilter.filter);

  return (
    <div>
      {products
        .filter((product) =>
          // If filterBy is equal to true, then use the filtered products to map
          // If filterBy is falsy, return all products to map
          filterBy ? product.name.includes(filterBy) : true
        )
        // Return a div containing all filtered products
        .map((product) => (
          <div key={product.name}>
            {product.name} @ {product.cost}
          </div>
        ))}
    </div>
  );
}

export default Products;
