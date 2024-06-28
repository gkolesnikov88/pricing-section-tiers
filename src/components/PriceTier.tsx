import React from "react";
import "./_priceTier.css";
import { RiCheckLine } from "@remixicon/react";
import { TierType } from "./types";

const PriceTier = (props: TierType & {isMonthly: boolean}) => {
  return (
    <div
      className={`pricing-tiers__plan ${
        props.mostPopular ? "pricing-tiers__plan--most-popular" : ""
      } text-base`}
    >
      <div className="pricing-tiers__plan__highlight text-xl">
        <div>Most Popular</div>
      </div>
      <div className="pricing-tiers__plan__header">
        <h2 className="text-2xl semibold">{props.name}</h2>
        <p className="pricing-tiers__plan__header_description text-base">
          {props.description}
        </p>
      </div>
      <div className="pricing-tiers__plan__price">
        <div className="pricing-tiers__plan__price_wrapper">
          <span className="pricing-tiers__plan__price__amount text-5xl semibold">
            ${props.isMonthly ? props.costMonthly : props.costAnnually}
          </span>
          <span>/ month</span>
        </div>
        <div className="pricing-tiers__plan__price__clarification">
          {props.isMonthly ? "Billed monthly" : `Billed annually ($${props.costAnnuallyTotal})`}
          
        </div>
      </div>
      <ul className="pricing-tiers__plan__features">
        {props.features.map(feature => (
          <li className="pricing-tiers__plan__feature">
            <RiCheckLine size={24} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="cta-actions">
        <button
          className={`btn btn-cta btn-cta--active ${
            props.mostPopular ? "btn-primary" : ""
          }`}
          aria-pressed="false"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default PriceTier;
