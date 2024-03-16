import React from "react";
function Card({ data , className}) {
  return (
    <div className={`product-card ${className}`}>
    {/* <div className="product-card"> */}

      <div>
        <img src={data.img} width="100%" />
        <div className="sized-name">
          <p>Oversized Fit</p>
        </div>
      </div>
      <div className="product-details">
        <div className="product-name">
          <h6>{data.companyName}</h6>
          <p>{data.productName}</p>
        </div>
        <div className="price-section">
          <h3>
            <span>₹</span>
            <b>{data.productPrice}</b>
          </h3>
          <p>
            <s>
              <span>₹</span>
              {data.productPriceHigh}
            </s>
          </p>
          <h6>{data.productOff}</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
