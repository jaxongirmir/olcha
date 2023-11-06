import React, { useState } from "react";
import "./SingleRoute.css";
import { DATA } from "../../static";
import { useParams } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function SingleRoute() {
  const [changeIcon, setChangeIcon] = useState(false);
  const { id } = useParams();
  const icon = changeIcon ? <AiFillStar /> : <AiOutlineStar />;
  const change = () => {
    changeIcon ? setChangeIcon(false) : setChangeIcon(true);
  };
  const product = DATA?.find((i) => i.id === id);
  if (!product) {
    return <NotFound />;
  }
  return (
    <div className="all_route">
      <div className="top_title">
        <h1>{product?.title}</h1>
        <div className="stars">
          <button onClick={change}>{icon}</button>
          <button onClick={change}>{icon}</button>
          <button onClick={change}>{icon}</button>
          <button onClick={change}>{icon}</button>
          <button onClick={change}>{icon}</button>
          <p>1 отзывов</p>
        </div>
      </div>
      <div className="single">
        <div className="left__single">
          <img src={product?.url} alt="img of product" />
        </div>
        <div className="right__single">
          <ul>
            {product.characteristics?.map((i, inx) => (
              <li key={inx}>
                <span>
                  {i.name}
                  <i>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </i>
                </span>
                <span>{i.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="order">
        <div className="left__order">
          <h1>Цены 1</h1>
          <div className="location">
            <p>STP-Group</p>
            <span>
              Ташкент, Шайхантахурский район, Малая кольцевая дорога, 61Б
            </span>
          </div>
        </div>
        <div className="center__order">
          <span>Доставка от 4 часов до 3 дней исходя от адреса доставки</span>
        </div>
        <div className="right__order">
          <div className="price">
            <del>{product?.firsPrice}</del>
            <h1>{product?.price}</h1>
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
      <div className="bottom">
        <h1>Описание</h1>
        {product.desc?.split(".")?.map((i, inx) => <p key={inx}>{i}</p>) ||
          "Здесь ничего нету"}
      </div>
    </div>
  );
}

export default SingleRoute;
