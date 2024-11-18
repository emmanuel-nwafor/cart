// import pad from "/src/assets/pad.jpeg";
// import CartStyles from "/src/Components/CartStyles.css";

// export default function AddToCart() {
//   return (
//     <div className="AddToCart">
//       <div>
//         <img src={pad} alt="" />
//         <span>0</span>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const ProductList = ({ handleAddToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
