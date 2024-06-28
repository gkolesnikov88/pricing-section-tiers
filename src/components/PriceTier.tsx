import React from "react";
import "./_priceTier.css";
import { RiCheckLine } from "@remixicon/react";

const PriceTier = ({ mostPopular = false }) => {
  return (
    <div
      className={`pricing-tiers__plan ${
        mostPopular ? "pricing-tiers__plan--most-popular" : ""
      } text-base`}
    >
      <div className="pricing-tiers__plan__highlight text-xl">
        <div>Most Popular</div>
      </div>
      <div className="pricing-tiers__plan__header">
        <h2 className="text-2xl semibold">Basic Plan</h2>
        <p className="pricing-tiers__plan__header_description text-base">Access to a curated selection of abstract images</p>
      </div>
      <div className="pricing-tiers__plan__price">
        <div className="pricing-tiers__plan__price_wrapper">
          <span className="pricing-tiers__plan__price__amount text-5xl semibold">$9.99</span>
          <span>/ month</span>
        </div>
        <div className="pricing-tiers__plan__price__clarification">
          Billed monthly
        </div>
      </div>
      <ul className="pricing-tiers__plan__features">
        <li className="pricing-tiers__plan__feature">
          <RiCheckLine size={24}/>
          <span>Standard quality images</span>
        </li>
        <li className="pricing-tiers__plan__feature">
          <RiCheckLine size={24}/>
          <span>Expanded library with more diverse abstract images</span>
        </li>
      </ul>
      <div className="cta-actions">
        <button className={`btn btn-cta btn-cta--active ${mostPopular ? "btn-primary" : ""}`} aria-pressed="false">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default PriceTier;
