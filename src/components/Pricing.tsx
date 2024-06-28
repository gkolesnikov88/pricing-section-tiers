import React from "react";
import "./_pricing.css";
import PriceTier from "./PriceTier";

const tiers = [
  {
    mostPopular: false
  },
  {
    mostPopular: true
  },
  {
    mostPopular: false
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
