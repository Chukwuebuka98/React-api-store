import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const apidata = "https://fakestoreapi.com/products";

const Card = () => {
  const [datas, setDatas] = useState([]);
  //   const [image, setImage] = useState([]);
  //   const [description, setDescription] = useState([]);
  //   const [price, setPrice] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      try {
        const response = await axios.get(`${apidata}`);
        setDatas(response.data);
      } catch (error) {
        console.error("Error getting store data", error);
      }
      //   setImage(response.data.image);
      //   setDescription(response.data.description);
      //   setPrice(response.data.price);
    }
    getStoreData();
  }, []);

  return (
    <div className="card__container">
      {datas.map((data) => (
        <div key={data.id} className="card">
          <img src={data.image} alt={data.title} />
          <div className="card-content">
            <div className="card-title">{data.title}</div>
            <div className="card-description"> {data.description}</div>
            <div className="card-price">$ {data.price}.99</div>
            <div className="card-rating">
              <span className="rating-star">⭐</span>
              <span className="rating-star">⭐</span>
              <span className="rating-star">⭐</span>
              <span className="rating-star">⭐</span>
              <span className="rating-star">⭐</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
