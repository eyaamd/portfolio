import React from "react";
import "./Products.css";
import bl_1 from "../../assets/bl-1.png";
import bl_2 from "../../assets/bl-2.png";
import bl_3 from "../../assets/bl-3.png";
const Products = () => {
  return (
    <>
      <section className="update-news">
        <div className="up-center-text">
          <h2>Our Products</h2>
        </div>

        <div className="update-cart">
          <div className="cart">
            <img src={bl_1} />
            <h5>26 Jan 2022</h5>
            <h4>Let's Start bring sale on this summer vacation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              eligendi distinctio molestias aliquid, dignissimos adipisci quis
              doloribus aliquam iusto explicabo accusamus incidunt voluptatum ut
              rem corrupti perspiciatis esse consectetur magni?
            </p>
          </div>

          <div className="cart">
            <img src={bl_2} />
            <h5>26 Jan 2022</h5>
            <h4>Let's Start bring sale on this summer vacation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              eligendi distinctio molestias aliquid, dignissimos adipisci quis
              doloribus aliquam iusto explicabo accusamus incidunt voluptatum ut
              rem corrupti perspiciatis esse consectetur magni?
            </p>
          </div>

          <div className="cart">
            <img src={bl_3} />
            <h5>26 Jan 2022</h5>
            <h4>Let's Start bring sale on this summer vacation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              eligendi distinctio molestias aliquid, dignissimos adipisci quis
              doloribus aliquam iusto explicabo accusamus incidunt voluptatum ut
              rem corrupti perspiciatis esse consectetur magni?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
