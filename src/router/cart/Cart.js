import React from "react";
import "./Cart.css";
import { brm } from "number-brm";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";

function Cart({
  title,
  id,
  price,
  firsPrice,
  desc,
  discount,
  characteristics,
  url,
}) {
  return (
    <div className="home">
      <div className="cart">
        <div className="top__cart">
          <img src={url} alt="Product img" />
          <button className="heart">
            <AiOutlineHeart />
          </button>
          <div className="discount">
            <p className="discount_p">{discount}</p>
          </div>
        </div>
        <div className="bottom__cart">
          <div className="texts">
            <p className="title">{title}</p>
            <del className="old_price">{firsPrice.brm()} сум</del>
            <p className="price">{price.brm()} сум</p>
            <div className="credit">
              <p className="credit_p">
                {Math.round(price / 12).brm()} сум x 12 мес
              </p>
            </div>
          </div>
        </div>
        <div className="btns">
          <button>
            <SlBasket />
          </button>
          <button>В расрочку</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
