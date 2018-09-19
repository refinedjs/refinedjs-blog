module.exports = {
  services: [ 
    { 
      path: '/order',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/order\\/?$/i',
      prefix: '/order/',
      id: '1',
      params: [],
      regexp: '/\\/order(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/order/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/order\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/order//',
      id: '2',
      params: [ '__feathersId' ],
      regexp: '/\\/order\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/order/:basket_id',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/order\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/order//',
      id: '3',
      params: [ 'basket_id' ],
      regexp: '/\\/order\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/order/:basket_id/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/order\\/(?:([^\\/]+?))\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/order//',
      id: '4',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/order\\/[^\\/]+\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/auth',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/auth\\/?$/i',
      prefix: '/auth/',
      id: '5',
      params: [],
      regexp: '/\\/auth(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/auth/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/auth\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/auth//',
      id: '6',
      params: [ '__feathersId' ],
      regexp: '/\\/auth\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/auth/associate',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/auth\\/associate\\/?$/i',
      prefix: '/auth/associate/',
      id: '7',
      params: [],
      regexp: '/\\/auth\\/associate(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/auth/associate/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/auth\\/associate\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/auth/associate//',
      id: '8',
      params: [ '__feathersId' ],
      regexp: '/\\/auth\\/associate\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/auth/customer',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/auth\\/customer\\/?$/i',
      prefix: '/auth/customer/',
      id: '9',
      params: [],
      regexp: '/\\/auth\\/customer(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/auth/customer/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/auth\\/customer\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/auth/customer//',
      id: '10',
      params: [ '__feathersId' ],
      regexp: '/\\/auth\\/customer\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/?$/i',
      prefix: '/basket/',
      id: '11',
      params: [],
      regexp: '/\\/basket(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '12',
      params: [ '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/coupons',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/coupons\\/?$/i',
      prefix: '/basket//coupons/',
      id: '13',
      params: [ 'basket_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/coupons(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/coupons/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/coupons\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '14',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/coupons\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/save',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/save\\/?$/i',
      prefix: '/basket//save/',
      id: '15',
      params: [ 'basket_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/save(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/save/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/save\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '16',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/save\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/?$/i',
      prefix: '/basket//items/',
      id: '17',
      params: [ 'basket_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '18',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items/:item_id',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '19',
      params: [ 'basket_id', 'item_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items/:item_id/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/(?:([^\\/]+?))\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '20',
      params: [ 'basket_id', 'item_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items\\/[^\\/]+\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items/:item_id/remove',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/(?:([^\\/]+?))\\/remove\\/?$/i',
      prefix: '/basket//remove/',
      id: '21',
      params: [ 'basket_id', 'item_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items\\/[^\\/]+\\/remove(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items/:item_id/remove/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/(?:([^\\/]+?))\\/remove\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '22',
      params: [ 'basket_id', 'item_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items\\/[^\\/]+\\/remove\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items/:item_id/add_discount',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/(?:([^\\/]+?))\\/add_discount\\/?$/i',
      prefix: '/basket//add_discount/',
      id: '23',
      params: [ 'basket_id', 'item_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items\\/[^\\/]+\\/add_discount(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/items/:item_id/add_discount/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/items\\/(?:([^\\/]+?))\\/add_discount\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '24',
      params: [ 'basket_id', 'item_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/items\\/[^\\/]+\\/add_discount\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/billing_address',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/billing_address\\/?$/i',
      prefix: '/basket//billing_address/',
      id: '25',
      params: [ 'basket_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/billing_address(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/billing_address/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/billing_address\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '26',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/billing_address\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/shipping',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/shipping\\/?$/i',
      prefix: '/basket//shipping/',
      id: '27',
      params: [ 'basket_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/shipping(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/shipping/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/shipping\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '28',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/shipping\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/payments',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/payments\\/?$/i',
      prefix: '/basket//payments/',
      id: '29',
      params: [ 'basket_id' ],
      regexp: '/\\/basket\\/[^\\/]+\\/payments(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket/:basket_id/payments/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket\\/(?:([^\\/]+?))\\/payments\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket//',
      id: '30',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/basket\\/[^\\/]+\\/payments\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/products',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/products\\/?$/i',
      prefix: '/products/',
      id: '31',
      params: [],
      regexp: '/\\/products(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/products/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/products\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/products//',
      id: '32',
      params: [ '__feathersId' ],
      regexp: '/\\/products\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/products/v2',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/products\\/v2\\/?$/i',
      prefix: '/products/v2/',
      id: '33',
      params: [],
      regexp: '/\\/products\\/v2(?:\\?.*)?$/',
      examplesPresent: false 

    },
    { 
      path: '/products/v2/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/products\\/v2\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/products/v2//',
      id: '34',
      params: [ '__feathersId' ],
      regexp: '/\\/products\\/v2\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/products/:product_id/availability',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/products\\/(?:([^\\/]+?))\\/availability\\/?$/i',
      prefix: '/products//availability/',
      id: '35',
      params: [ 'product_id' ],
      regexp: '/\\/products\\/[^\\/]+\\/availability(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/products/:product_id/availability/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/products\\/(?:([^\\/]+?))\\/availability\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/products//',
      id: '36',
      params: [ 'product_id', '__feathersId' ],
      regexp: '/\\/products\\/[^\\/]+\\/availability\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewards',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/rewards\\/?$/i',
      prefix: '/rewards/',
      id: '37',
      params: [],
      regexp: '/\\/rewards(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewards/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/rewards\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/rewards//',
      id: '38',
      params: [ '__feathersId' ],
      regexp: '/\\/rewards\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewardsTest',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/rewardsTest\\/?$/i',
      prefix: '/rewardsTest/',
      id: '39',
      params: [],
      regexp: '/\\/rewardsTest(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewardsTest/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/rewardsTest\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/rewardsTest//',
      id: '40',
      params: [ '__feathersId' ],
      regexp: '/\\/rewardsTest\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewardsTest/:basket_id/apply_redemption_discount',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/rewardsTest\\/(?:([^\\/]+?))\\/apply_redemption_discount\\/?$/i',
      prefix: '/rewardsTest//apply_redemption_discount/',
      id: '41',
      params: [ 'basket_id' ],
      regexp: '/\\/rewardsTest\\/[^\\/]+\\/apply_redemption_discount(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewardsTest/:basket_id/apply_redemption_discount/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/rewardsTest\\/(?:([^\\/]+?))\\/apply_redemption_discount\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/rewardsTest//',
      id: '42',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/rewardsTest\\/[^\\/]+\\/apply_redemption_discount\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewardsTest/:basket_id/redeem_rewards',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/rewardsTest\\/(?:([^\\/]+?))\\/redeem_rewards\\/?$/i',
      prefix: '/rewardsTest//redeem_rewards/',
      id: '43',
      params: [ 'basket_id' ],
      regexp: '/\\/rewardsTest\\/[^\\/]+\\/redeem_rewards(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/rewardsTest/:basket_id/redeem_rewards/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/rewardsTest\\/(?:([^\\/]+?))\\/redeem_rewards\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/rewardsTest//',
      id: '44',
      params: [ 'basket_id', '__feathersId' ],
      regexp: '/\\/rewardsTest\\/[^\\/]+\\/redeem_rewards\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/product-mappings',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/product-mappings\\/?$/i',
      prefix: '/product-mappings/',
      id: '45',
      params: [],
      regexp: '/\\/product-mappings(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/product-mappings/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/product-mappings\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/product-mappings//',
      id: '46',
      params: [ '__feathersId' ],
      regexp: '/\\/product-mappings\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/transaction-log',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/transaction-log\\/?$/i',
      prefix: '/transaction-log/',
      id: '47',
      params: [],
      regexp: '/\\/transaction-log(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/transaction-log/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/transaction-log\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/transaction-log//',
      id: '48',
      params: [ '__feathersId' ],
      regexp: '/\\/transaction-log\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket-transaction',
      methods: { get: true, post: true, patch: true, put: true, delete: true },
      prefixRegexp: '/^\\/basket-transaction\\/?$/i',
      prefix: '/basket-transaction/',
      id: '49',
      params: [],
      regexp: '/\\/basket-transaction(?:\\?.*)?$/',
      examplesPresent: false 
    },
    { 
      path: '/basket-transaction/:__feathersId',
      methods: { get: true, put: true, patch: true, delete: true },
      prefixRegexp: '/^\\/basket-transaction\\/(?:([^\\/]+?))\\/?$/i',
      prefix: '/basket-transaction//',
      id: '50',
      params: [ '__feathersId' ],
      regexp: '/\\/basket-transaction\\/[^\\/]+(?:\\?.*)?$/',
      examplesPresent: false 
    } 
  ]
};