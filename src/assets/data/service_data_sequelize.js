module.exports = { "services": {
    "users": {
        "serviceName": "users",
        "paths": [
            {
                "pathName": "/users",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "firstName": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "lastName": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "password": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "email": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "phoneNumber": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "dealers": {
        "serviceName": "dealers",
        "paths": [
            {
                "pathName": "/dealers",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/dealers/{dealer_id}/material",
                "params": [
                    "dealer_id"
                ],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": false,
                    "update": false,
                    "patch": false,
                    "remove": false
                }
            },
            {
                "pathName": "/dealers/{dealer_id}/location",
                "params": [
                    "dealer_id"
                ],
                "methods": {
                    "find": true,
                    "get": false,
                    "create": false,
                    "update": false,
                    "patch": false,
                    "remove": false
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "name": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "location": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "isTisconVerified": {
                "type": {},
                "required": true
            },
            "address_line_1": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "address_line_2": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": false
            },
            "city": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "state": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "country": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "pincode": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "latitude": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "longitude": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "material-type": {
        "serviceName": "material-type",
        "paths": [
            {
                "pathName": "/material-type",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "material_type": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "dealer-material-prices": {
        "serviceName": "dealer-material-prices",
        "paths": [
            {
                "pathName": "/dealer-material-prices",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "dealer_id": {
                "type": {},
                "required": true
            },
            "material_id": {
                "type": {},
                "required": true
            },
            "currency_unit": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "price": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "material_measurement_unit": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "service-provider-location": {
        "serviceName": "service-provider-location",
        "paths": [
            {
                "pathName": "/service-provider/location",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "name": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "service-provider-occupation": {
        "serviceName": "service-provider-occupation",
        "paths": [
            {
                "pathName": "/service-provider/occupation",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "name": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "service-provider-review": {
        "serviceName": "service-provider-review",
        "paths": [
            {
                "pathName": "/service-provider/review",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "tittle": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "content": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "isApproved": {
                "type": {},
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "service-provider-specialisation": {
        "serviceName": "service-provider-specialisation",
        "paths": [
            {
                "pathName": "/service-provider/specialisation",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "name": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "service-provider": {
        "serviceName": "service-provider",
        "paths": [
            {
                "pathName": "/service-provider",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/service-provider/{sp_id}/location",
                "params": [
                    "sp_id"
                ],
                "methods": {
                    "find": true,
                    "get": false,
                    "create": false,
                    "update": false,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/service-provider/{sp_id}/occupation",
                "params": [
                    "sp_id"
                ],
                "methods": {
                    "find": false,
                    "get": false,
                    "create": true,
                    "update": false,
                    "patch": false,
                    "remove": true
                }
            },
            {
                "pathName": "/service-provider/{sp_id}/review",
                "params": [
                    "sp_id"
                ],
                "methods": {
                    "find": true,
                    "get": false,
                    "create": false,
                    "update": false,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/service-provider/{sp_id}/specialisation",
                "params": [
                    "sp_id"
                ],
                "methods": {
                    "find": true,
                    "get": false,
                    "create": false,
                    "update": false,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "name": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "experience": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "qualification": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "likesCount": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "fees": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "dpImage": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "isTisconVerified": {
                "type": {},
                "required": true
            },
            "phoneNumber": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "email": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "occupation": {
                "type": {},
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "design-features": {
        "serviceName": "design-features",
        "paths": [
            {
                "pathName": "/design/feature",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "name": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "design-vastus": {
        "serviceName": "design-vastus",
        "paths": [
            {
                "pathName": "/design/vastu",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "vastu": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "design-inventories-types": {
        "serviceName": "design-inventories-types",
        "paths": [
            {
                "pathName": "/design/inventory/type",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "type": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "design-inventories": {
        "serviceName": "design-inventories",
        "paths": [
            {
                "pathName": "/design/inventory",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "dimension": {
                "type": {
                    "options": {
                        "precision": 10,
                        "scale": 2
                    },
                    "_precision": 10,
                    "_scale": 2
                },
                "required": true
            },
            "dimension_unit": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "type": {
                "type": {},
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "design-styles": {
        "serviceName": "design-styles",
        "paths": [
            {
                "pathName": "/design/style",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "style": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "design": {
        "serviceName": "design",
        "paths": [
            {
                "pathName": "/design",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/design/{design_id}/vastu",
                "params": [
                    "design_id"
                ],
                "methods": {
                    "find": true,
                    "get": false,
                    "create": false,
                    "update": false,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/design/{design_id}/feature",
                "params": [
                    "design_id"
                ],
                "methods": {
                    "find": true,
                    "get": false,
                    "create": false,
                    "update": false,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/design/{design_id}/inventory",
                "params": [
                    "design_id"
                ],
                "methods": {
                    "find": true,
                    "get": false,
                    "create": false,
                    "update": false,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/design/{design_id}/image",
                "params": [
                    "design_id"
                ],
                "methods": {
                    "find": false,
                    "get": true,
                    "create": true,
                    "update": false,
                    "patch": true,
                    "remove": false
                }
            }
        ],
        "schema": {
            "id": {
                "type": {},
                "required": true
            },
            "title": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "dimension": {
                "type": {
                    "options": {
                        "precision": 10,
                        "scale": 2
                    },
                    "_precision": 10,
                    "_scale": 2
                },
                "required": true
            },
            "style": {
                "type": {},
                "required": true
            },
            "floors": {
                "type": {
                    "options": {}
                },
                "required": true
            },
            "dimension_unit": {
                "type": {
                    "options": {},
                    "_length": 255
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    },
    "shared": {
        "serviceName": "shared",
        "paths": [
            {
                "pathName": "/shared/images",
                "params": [],
                "methods": {
                    "find": true,
                    "get": true,
                    "create": true,
                    "update": true,
                    "patch": true,
                    "remove": true
                }
            },
            {
                "pathName": "/shared/image/upload",
                "params": [],
                "methods": {
                    "find": false,
                    "get": true,
                    "create": true,
                    "update": false,
                    "patch": false,
                    "remove": true
                }
            }
        ],
        "schema": {
            "id": {
                "type": {
                    "options": {
                        "length": 64
                    },
                    "_length": 64
                },
                "required": true
            },
            "location": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "mime": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "createdAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            },
            "updatedAt": {
                "type": {
                    "options": {},
                    "_length": ""
                },
                "required": true
            }
        }
    }
}};