import React, { useState } from "react";
import "./Product.css";
import { DATA } from "../../static";
import Cart from "../cart/Cart";

function Product() {
  const [buy, setBuy] = useState(0);
  return (
    <div>
      <div className="carts">
        {DATA?.map((object) => (
          <Cart key={object.id} {...object} buy={buy} />
        ))}
      </div>
    </div>
  );
}

export default Product;
