import React from 'react';
import './plan.css'

const PlanList = () => {
  const plans = [
    {
      header: 'Basic Plan',
      price: '$9.99/month',
      perks: ['5GB Storage', '10 Users', 'Basic Support'],
    },
    {
      header: 'Pro Plan',
      price: '$19.99/month',
      perks: ['10GB Storage', 'Unlimited Users', 'Priority Support'],
    },
    {
      header: 'Premium Plan',
      price: '$29.99/month',
      perks: ['20GB Storage', 'Unlimited Users', '24/7 Premium Support'],
    },
  ];

  return (
    <div  className='review-container'>
    <div className="plan-list row">
        <h1 className='plan-heading'>Our Pricing Plans</h1>
      {plans.map((plan, index) => (
        <div className="plan col" key={index}>
          <h2 className="plan-header">{plan.header}</h2>
          <p className="plan-price">{plan.price}</p>
          <ul className="plan-perks">
            {plan.perks.map((perk, perkIndex) => (
              <li key={perkIndex}>{perk}</li>
            ))}
          </ul>
          <button className="checkout-button btn read">Check Out</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PlanList;

