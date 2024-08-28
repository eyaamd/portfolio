import React from "react";
import { FaStar } from "react-icons/fa";
import './Shop.css' ; 
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpg";
import image8 from "../../assets/8.jpg";

const Shop = () => {
  return (
    <>
      <section className="trending-product" id="trending">
        <div className="center-text">
          <h2>
            Our Trending <span>Products</span>{" "}
          </h2>
        </div>

        <div className="products">

          <div className="row">
            <img src={image1}  />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>

          </div>

          <div className="row">
            <img src={image2} />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <img src={image3} />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <img src={image4} />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <img src={image5} />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>

          <div className="row">
            <img src={image6} />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>


          <div className="row">
            <img src={image7} />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>
          <div className="row">
            <img src={image8} />
            <div className="product-text">
              <h5>Sale</h5>
            </div>

            <div className="ratting">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="price">
              <h4>Half Running Set</h4>
              <p>$99 - $129</p>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Shop;
