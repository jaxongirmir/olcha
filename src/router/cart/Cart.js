import React, { useState } from "react";
import "./Cart.css";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

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
  const [icon, setIcon] = useState(false);

  const icn = icon ? (
    <AiFillHeart style={{ color: "red" }} />
  ) : (
    <AiOutlineHeart />
  );

  return (
    <div className="home">
      <div className="cart">
        <div className="top__cart">
          <Link to={`product/${id}`}>
            <img src={url} alt="Product img" />
          </Link>
          <button
            className="heart"
            onClick={() => (icon ? setIcon(false) : setIcon(true))}
          >
            {icn}
          </button>
          <div className="discount">
            <p className="discount_p">{discount}</p>
          </div>
        </div>
        <div className="bottom__cart">
          <div className="texts">
            <p className="title">{title}</p>
            <del className="old_price">{firsPrice} сум</del>
            <p className="price">{price} сум</p>
            <div className="credit">
              <p className="credit_p">{Math.round(price / 12)} сум x 12 мес</p>
            </div>
          </div>
        </div>
        <div className="btns">
          <button>
            <SlBasket />
          </button>
          <Link to={"product/" + id}>
            <button className="button">В расрочку</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
