export const OUR_FEATURES = [
  'Transactions',
  'Auth',
  'Identity',
  'Investments',
  'Assets',
  'Liabilities',
  'Income'
];

const FREEE_PLAN = {
  name: 'Free plan',
  price: '0.00',
  desc: 'Build and test using our core set of products with up to 100 API requests',
  features: ['Transactions', 'Auth', 'Identity']
};

const BASIC_PLAN = {
  name: 'Basic plan',
  price: '249.00',
  desc: 'Launch your project with unlimited requests and no contractual minimums',
  features: ['Transactions', 'Auth', 'Identity', 'Investments', 'Assets']
};

const PREMIUM_PLAN = {
  name: 'preium plan',
  price: '499.00',
  desc: 'Get tailored solutions, volume pricing, and dedicated support for your team',
  features: [...OUR_FEATURES]
};

export const PRICING_PLANS = [FREEE_PLAN, BASIC_PLAN, PREMIUM_PLAN];
