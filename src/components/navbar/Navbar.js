import React, { useState } from "react";
import "./Navbar.css";
import { DATA } from "../../static";
import Cart from "../../router/cart/Cart";
import logoImg from "../../assets/logoImg.svg";
import { BiSearch, BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

function Navbar() {
  const [buy, setBuy] = useState(0);
  return (
    <div className="navbar">
      <header>
        <img src={logoImg} alt="logo img" />
        <div
          className="catalog"
          onClick={() => {
            const line2 = document.querySelector(".line2");
            const line1 = document.querySelector(".line1");
            const line3 = document.querySelector(".line3");
            line2.style.display = "none";
            line1.style.transform = "rotate(120deg)";
            line3.style.transform = "rotate(50deg)";
            line1.style.top = "15px";
            line1.style.left = "2px";
            line3.style.top = "15px";
            line3.style.left = "2px";
          }}
        >
          <div className="bars">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <p className="catalog_p">Каталог</p>
        </div>
        <div className="input">
          <input type="text" placeholder="Поиск по каталогу" />
          <button>
            <BiSearch />
          </button>
        </div>
        <div className="icons">
          <div className="icon">
            <AiOutlineHeart />
            <p>Избранные</p>
          </div>
          <div className="icon bascat">
            <SlBasket />
            <p>Корзина</p>
            <span>{buy}</span>
          </div>
          <div className="icon">
            <BiUser />
            <p>Войти</p>
          </div>
        </div>
      </header>
      <div className="carts">
        {DATA?.map((object, inx) => (
          <Cart key={inx} {...object} buy={buy} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
