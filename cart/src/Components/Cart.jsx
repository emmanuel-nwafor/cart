// import { useState } from "react";
// import pad from "/src/assets/cart.jpeg";
// import purifier from "/src/assets/purifier.jpeg";
// import purifier2 from "/src/assets/purifier2.jpeg";
// import AddToCart from "./ProductList";
// import Styles from "./Styles.css";

// export default function Cart() {
//   const [plus, setPlus] = useState(0);

//   function decreaseItem() {
//     setPlus(plus - 1);
//   }
//   function increaseItem() {
//     setPlus(plus + 1);
//   }

//   return (
//     <div className="Cart">
//       <div className="CartChild">
//         <img src={purifier} alt="" />
//         <div className="price">
//           <h2>Air Purifier</h2>
//           <h4>Price: $ 99.00 </h4>
//           <h4>Total Amount:$ {plus * 99.0} </h4>
//           <button>Add To Cart</button>
//         </div>
//         <div className="buttons">
//           <button onClick={decreaseItem}> - </button>
//           <b> {plus} </b>
//           <button onClick={increaseItem}> + </button>
//         </div>
//       </div>
//       <hr />
//       <div className="CartChild">
//         <img src={pad} alt="" />
//         <div className="price">
//           <h2>Room Heater</h2>
//           <h4>Price: $ 50.00 </h4>
//           <h4>Total Amount:$ {} </h4>
//           <button>Add To Cart</button>
//         </div>
//         <div className="buttons">
//           <button> - </button>
//           <button> + </button>
//         </div>
//       </div>
//       <hr />
//       <div className="CartChild">
//         <img src={purifier2} alt="" />
//         <div className="price">
//           <h2>Air Purifier pro</h2>
//           <h4>Price: $ 20.00 </h4>
//           <h4>Total Amount:$ {} </h4>
//           <button>Add To Cart</button>
//         </div>
//         <div className="buttons">
//           <button> - </button>
//           <button> + </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.qty}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
