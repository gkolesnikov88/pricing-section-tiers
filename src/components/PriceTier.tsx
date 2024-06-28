import React from "react";
import "./_priceTier.css";
import { RiCheckLine } from "@remixicon/react";
import { TierType } from "./types";

const PriceTier = (tier: TierType) => {
  return (
    <div
      className={`pricing-tiers__plan ${
        tier.mostPopular ? "pricing-tiers__plan--most-popular" : ""
      } text-base`}
    >
      <div className="pricing-tiers__plan__highlight text-xl">
        <div>Most Popular</div>
      </div>
      <div className="pricing-tiers__plan__header">
        <h2 className="text-2xl semibold">{tier.name}</h2>
        <p className="pricing-tiers__plan__header_description text-base">
          {tier.description}
        </p>
      </div>
      <div className="pricing-tiers__plan__price">
        <div className="pricing-tiers__plan__price_wrapper">
          <span className="pricing-tiers__plan__price__amount text-5xl semibold">
            ${tier.costMonthly}
          </span>
          <span>/ month</span>
        </div>
        <div className="pricing-tiers__plan__price__clarification">
          Billed monthly
        </div>
      </div>
      <ul className="pricing-tiers__plan__features">
        {tier.features.map(feature => (
          <li className="pricing-tiers__plan__feature">
            <RiCheckLine size={24} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="cta-actions">
        <button
          className={`btn btn-cta btn-cta--active ${
            tier.mostPopular ? "btn-primary" : ""
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
