/* eslint-disable */
module.exports = {
  services: {
    "order": {
      "serviceName": "order",
      "paths": [{
        "pathName": "/order",
        "params": [],
        "methods": {
          "find": false,
          "get": true,
          "create": true,
          "update": false,
          "patch": true,
          "remove": false
        }
      }, {
        "pathName": "/order/{basket_id}",
        "params": ["basket_id"],
        "methods": {
          "find": false,
          "get": true,
          "create": true,
          "update": false,
          "patch": true,
          "remove": false
        }
      }],
      "schema": {}
    },
    "sfcc-auth": {
      "serviceName": "sfcc-auth",
      "paths": [{
        "pathName": "/auth",
        "params": [],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }, {
        "pathName": "/auth/associate",
        "params": [],
        "methods": {
          "find": false,
          "get": true,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }, {
        "pathName": "/auth/customer",
        "params": [],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }],
      "schema": {}
    },
    "basket": {
      "serviceName": "basket",
      "paths": [{
        "pathName": "/basket",
        "params": [],
        "methods": {
          "find": false,
          "get": true,
          "create": true,
          "update": false,
          "patch": false,
          "remove": true
        }
      }, {
        "pathName": "/basket/{basket_id}/coupons",
        "params": ["basket_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }, {
        "pathName": "/basket/{basket_id}/save",
        "params": ["basket_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }, {
        "pathName": "/basket/{basket_id}/items",
        "params": ["basket_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": true,
          "remove": true
        }
      }, {
        "pathName": "/basket/{basket_id}/items/{item_id}",
        "params": ["basket_id", "item_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": true,
          "remove": true
        }
      }, {
        "pathName": "/basket/{basket_id}/items/{item_id}/remove",
        "params": ["basket_id", "item_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": true,
          "remove": true
        }
      }, {
        "pathName": "/basket/{basket_id}/items/{item_id}/add_discount",
        "params": ["basket_id", "item_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }, {
        "pathName": "/basket/{basket_id}/billing_address",
        "params": ["basket_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": true
        }
      }, {
        "pathName": "/basket/{basket_id}/shipping",
        "params": ["basket_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }, {
        "pathName": "/basket/{basket_id}/payments",
        "params": ["basket_id"],
        "methods": {
          "find": false,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }],
      "schema": {}
    },
    "products": {
      "serviceName": "products",
      "params": [],
      "paths": [{
        "pathName": "/products",
        "params": [],
        "methods": {
          "find": true,
          "get": true,
          "create": true,
          "update": true,
          "patch": true,
          "remove": true
        }
      }, {
        "pathName": "/products/v2",
        "params": [],
        "methods": {
          "find": true,
          "get": true,
          "create": true,
          "update": true,
          "patch": true,
          "remove": true
        }
      }, {
        "pathName": "/products/{product_id}/availability",
        "params": ["product_id"],
        "methods": {
          "find": true,
          "get": false,
          "create": false,
          "update": false,
          "patch": false,
          "remove": false
        }
      }],
      "schema": {
        "Model": {
          "type": "String",
          "required": false
        },
        "Manufacturer": {
          "type": "String",
          "required": false
        },
        "ManufacturerModel": {
          "type": "String",
          "required": false
        },
        "Mpn": {
          "type": "String",
          "required": false
        },
        "Upc": {
          "type": "String",
          "required": false
        },
        "MerchantCategory": {
          "type": "String",
          "required": false
        },
        "Brand": {
          "type": "String",
          "required": false
        },
        "OfferName": {
          "type": "String",
          "required": false
        },
        "OfferDescription": {
          "type": "String",
          "required": false
        },
        "ActionURL": {
          "type": "String",
          "required": false
        },
        "ProductCost": {
          "type": "String",
          "required": false
        },
        "ProductMargin": {
          "type": "String",
          "required": false
        },
        "Quantity": {
          "type": "String",
          "required": false
        },
        "IP_DIVISION": {
          "type": "String",
          "required": false
        },
        "IP_DEPT": {
          "type": "String",
          "required": false
        },
        "IP_SUBDEPT": {
          "type": "String",
          "required": false
        },
        "IP_CLASS": {
          "type": "String",
          "required": false
        },
        "IP_STYLE": {
          "type": "String",
          "required": false
        },
        "PACSUN_EXCLUSIVE": {
          "type": "String",
          "required": false
        },
        "ONLINE_EXCLUSIVE": {
          "type": "String",
          "required": false
        },
        "MARGIN_RETAIL": {
          "type": "String",
          "required": false
        },
        "Active": {
          "type": "Boolean",
          "required": false
        },
        "IMAGE_VIEWS": {
          "type": "String",
          "required": false
        },
        "PARENT_SKU": {
          "type": "String",
          "required": false
        },
        "NEWITEMDATE": {
          "type": "String",
          "required": false
        },
        "COLOR_NAME": {
          "type": "String",
          "required": false
        },
        "COLOR_CODE": {
          "type": "String",
          "required": false
        },
        "SIZE_NAME": {
          "type": "String",
          "required": false
        },
        "SIZE_CODE": {
          "type": "String",
          "required": false
        },
        "SIZE_LENGTH": {
          "type": "String",
          "required": false
        },
        "SIZE_WIDTH": {
          "type": "String",
          "required": false
        },
        "SIZE_HEIGHT": {
          "type": "String",
          "required": false
        },
        "WEIGHT": {
          "type": "String",
          "required": false
        },
        "MERCHCLASSNUMBER": {
          "type": "String",
          "required": false
        },
        "MERCHVENDORNUMBER": {
          "type": "String",
          "required": false
        },
        "MERCHSTYLENUMBER": {
          "type": "String",
          "required": false
        },
        "RegularPrice": {
          "type": "String",
          "required": false
        },
        "CurrentPrice": {
          "type": "String",
          "required": false
        },
        "PromoPrice": {
          "type": "String",
          "required": false
        },
        "InStock": {
          "type": "String",
          "required": false
        },
        "ReferenceImageURL": {
          "type": "String",
          "required": false
        },
        "ITEMIMAGEURL1": {
          "type": "String",
          "required": false
        },
        "ITEMIMAGEURL2": {
          "type": "String",
          "required": false
        },
        "ITEMIMAGEURL3": {
          "type": "String",
          "required": false
        },
        "ITEMIMAGEURL4": {
          "type": "String",
          "required": false
        },
        "ITEMIMAGEURL5": {
          "type": "String",
          "required": false
        },
        "createdAt": {
          "type": "Date",
          "required": false
        },
        "updatedAt": {
          "type": "Date",
          "required": false
        },
        "_id": {
          "type": "ObjectID",
          "required": false
        },
        "__v": {
          "type": "Number",
          "required": false
        }
      }
    },
    "rewards": {
      "serviceName": "rewards",
      "paths": [{
        "pathName": "/rewards",
        "params": [],
        "methods": {
          "find": true,
          "get": false,
          "create": false,
          "update": false,
          "patch": false,
          "remove": false
        }
      }, {
        "pathName": "/rewardsTest",
        "params": [],
        "methods": {
          "find": true,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": true
        }
      }, {
        "pathName": "/rewardsTest/{basket_id}/apply_redemption_discount",
        "params": ["basket_id"],
        "methods": {
          "find": true,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": true
        }
      }, {
        "pathName": "/rewardsTest/{basket_id}/redeem_rewards",
        "params": ["basket_id"],
        "methods": {
          "find": true,
          "get": false,
          "create": true,
          "update": false,
          "patch": false,
          "remove": false
        }
      }],
      "schema": {}
    },
    "product-mappings": {
      "serviceName": "product-mappings",
      "paths": [{
        "pathName": "/product-mappings",
        "params": [],
        "methods": {
          "find": true,
          "get": true,
          "create": true,
          "update": true,
          "patch": true,
          "remove": true
        }
      }],
      "schema": {
        "UID": {
          "type": "Number",
          "required": false
        },
        "UPC": {
          "type": "Number",
          "required": false
        },
        "CLS": {
          "type": "Number",
          "required": false
        },
        "VNDR": {
          "type": "Number",
          "required": false
        },
        "STY": {
          "type": "Number",
          "required": false
        },
        "CLR": {
          "type": "Number",
          "required": false
        },
        "SIZE": {
          "type": "Number",
          "required": false
        },
        "SHORTSKU": {
          "type": "Number",
          "required": false
        },
        "createdAt": {
          "type": "Date",
          "required": false
        },
        "updatedAt": {
          "type": "Date",
          "required": false
        },
        "_id": {
          "type": "ObjectID",
          "required": false
        },
        "__v": {
          "type": "Number",
          "required": false
        }
      }
    },
    "transaction-log": {
      "serviceName": "transaction-log",
      "paths": [{
        "pathName": "/transaction-log",
        "params": [],
        "methods": {
          "find": true,
          "get": true,
          "create": true,
          "update": true,
          "patch": true,
          "remove": true
        }
      }],
      "schema": {
        "orderId": {
          "type": "String",
          "required": true
        },
        "transactionId": {
          "type": "String",
          "required": true
        },
        "associateId": {
          "type": "String",
          "required": true
        },
        "storeNumber": {
          "type": "String",
          "required": true
        },
        "productItems": {
          "type": "Array",
          "required": true
        },
        "orderPriceAdjustments": {
          "type": "Array",
          "required": false
        },
        "customerEmail": {
          "type": "String",
          "required": true
        },
        "customerName": {
          "type": "String",
          "required": true
        },
        "createdAt": {
          "type": "Date",
          "required": false
        },
        "updatedAt": {
          "type": "Date",
          "required": false
        },
        "_id": {
          "type": "ObjectID",
          "required": false
        },
        "__v": {
          "type": "Number",
          "required": false
        }
      }
    },
    "basket-transaction": {
      "serviceName": "basket-transaction",
      "paths": [{
        "pathName": "/basket-transaction",
        "params": [],
        "methods": {
          "find": true,
          "get": true,
          "create": true,
          "update": true,
          "patch": true,
          "remove": true
        }
      }],
      "schema": {
        "basket_data": {
          "type": "Mixed",
          "required": true
        },
        "createdAt": {
          "type": "Date",
          "required": false
        },
        "updatedAt": {
          "type": "Date",
          "required": false
        },
        "_id": {
          "type": "ObjectID",
          "required": false
        },
        "__v": {
          "type": "Number",
          "required": false
        }
      }
    }
  }
};