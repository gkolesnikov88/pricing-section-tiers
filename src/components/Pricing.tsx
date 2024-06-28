import React from "react";
import "./_pricing.css";
import PriceTier from "./PriceTier";
import { TierType } from "./types";

const tiers : TierType[] = [
  {
    name: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    costMonthly: 9.99,
    costAnnually: 6.99,
    costAnnuallyTotal: 84,
    mostPopular: false,
    features: [
      "Standard quality images",
      "Limited to personal use",
      "Email support",
    ]
  },
  {
    name: "Standard Plan",
    description: "Next-level Integrations, priced economically",
    costMonthly: 19.99,
    costAnnually: 15.99,
    costAnnuallyTotal: 192,
    mostPopular: true,
    features: [
      "Expanded library with more diverse abstract images",
      "High-resolution images available",
      "Suitable for commercial use",
      "Priority email support",
      "Advanced analytics",
    ]
  },
  {
    name: "Premium Plan",
    description: "Experience limitless living for power users",
    costMonthly: 29.99,
    costAnnually: 25.99,
    costAnnuallyTotal: 312,
    mostPopular: false,
    features: [
      "Full access to the entire image library, including exclusive content",
      "Highest quality images, including premium collections",
      "Commercial and resale rights",
      "Dedicated customer support line",
      "24/7 support response time",
      "Advanced analytics and insights",
    ]
  }
];

export const Pricing = () => {
  return (
    <section className="pricing-tiers">
      <header className="pricing-tiers-header">
        <h1 className="header__main text-base semibold">Pricing Tiers</h1>
        <p className="header__tagline text-5xl semibold">Fit for all your needs</p>
        <p className="header__description text-xl">
          Pick the plan that suits you today and step up as your demands grow -
          our flexible options have your journey mapped out.
        </p>
      </header>
      <div className="pricing-tiers__content">
        <div
          className="pricing-tiers__toggle"
          role="group"
          aria-label="Pricing plan toggle button"
        >
          <button
            className="btn btn-toggle btn-toggle--active text-base"
            aria-pressed="false"
          >
            Monthly
          </button>
          <button className="btn btn-toggle text-base" aria-pressed="false">
            Annually
          </button>
        </div>
        <div className="pricing-tiers__plans">
          {tiers.map(tier => (
            <PriceTier {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};
