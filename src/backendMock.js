
const getProducts = () => {
    return new Promise( (resolve) => {
    /* https://api.mercadolibre.com/sites/MLA/search?nickname=BERNAL3DPRINTS&limit=3 */
    let query = {
        "site_id": "MLA",
        "country_default_time_zone": "GMT-03:00",
        "seller": {
        "id": 77634688,
        "nickname": "BERNAL3DPRINTS",
        "permalink": "http://perfil.mercadolibre.com.ar/BERNAL3DPRINTS",
        "registration_date": "2004-12-14T22:14:22.000-04:00",
        "seller_reputation": {
            "level_id": "5_green",
            "power_seller_status": null,
            "transactions": {
            "canceled": 10,
            "period": "historic",
            "total": 112,
            "ratings": {
                "negative": 0,
                "neutral": 0,
                "positive": 1
            },
            "completed": 102
            },
            "metrics": {
            "sales": {
                "period": "365 days",
                "completed": 102
            }
            }
        },
        "real_estate_agency": false,
        "car_dealer": false,
        "tags": [
            "normal",
            "credits_profile",
            "mshops",
            "messages_as_seller"
        ],
        "eshop": null
        },
        "paging": {
        "total": 28,
        "primary_results": 28,
        "offset": 0,
        "limit": 3
        },
        "results": [
        {
            "id": "MLA927257355",
            "site_id": "MLA",
            "title": "Maceta Escultura Joven Griego 15cm/cactus/suculentas",
            "seller": {
            "id": 77634688,
            "permalink": "http://perfil.mercadolibre.com.ar/BERNAL3DPRINTS",
            "registration_date": "2004-12-14T22:14:22.000-04:00",
            "car_dealer": false,
            "real_estate_agency": false,
            "tags": [
                "normal",
                "credits_profile",
                "mshops",
                "messages_as_seller"
            ],
            "seller_reputation": {
                "power_seller_status": null,
                "level_id": "5_green",
                "metrics": {
                "cancellations": {
                    "period": "365 days",
                    "rate": 0,
                    "value": 0
                },
                "claims": {
                    "period": "365 days",
                    "rate": 0,
                    "value": 0
                },
                "delayed_handling_time": {
                    "period": "365 days",
                    "rate": 0.0618,
                    "value": 6
                },
                "sales": {
                    "period": "365 days",
                    "completed": 102
                }
                },
                "transactions": {
                "canceled": 10,
                "period": "historic",
                "total": 112,
                "ratings": {
                    "negative": 0,
                    "neutral": 0,
                    "positive": 1
                },
                "completed": 102
                }
            },
            "nickname": "BERNAL3DPRINTS"
            },
            "price": 1500,
            "prices": {
            "id": "MLA927257355",
            "prices": [
                {
                "id": "1",
                "type": "standard",
                "amount": 1500,
                "regular_amount": null,
                "currency_id": "ARS",
                "last_updated": "2021-06-26T23:23:49Z",
                "conditions": {
                    "context_restrictions": [
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                },
                "exchange_rate_context": "DEFAULT",
                "metadata": {
                }
                }
            ],
            "presentation": {
                "display_currency": "ARS"
            },
            "payment_method_prices": [
            ],
            "reference_prices": [
                {
                "id": "4",
                "type": "min_standard",
                "conditions": {
                    "context_restrictions": [
                    "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                },
                "amount": 1500,
                "currency_id": "ARS",
                "exchange_rate_context": "DEFAULT",
                "tags": [
                ],
                "last_updated": "2022-02-22T12:23:52Z"
                }
            ],
            "purchase_discounts": [
            ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 5,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2041-06-21T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-927257355-maceta-escultura-joven-griego-15cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_771224-MLA46530701986_062021-I.jpg",
            "thumbnail_id": "771224-MLA46530701986_062021",
            "accepts_mercadopago": true,
            "installments": {
            "quantity": 6,
            "amount": 250,
            "rate": 0,
            "currency_id": "ARS"
            },
            "address": {
            "state_id": "AR-B",
            "state_name": "Buenos Aires",
            "city_id": null,
            "city_name": "Bernal"
            },
            "promotions": null,
            "shipping": {
            "free_shipping": false,
            "mode": "me2",
            "tags": [
            ],
            "logistic_type": "xd_drop_off",
            "store_pick_up": false
            },
            "seller_address": {
            "id": "",
            "comment": "",
            "address_line": "",
            "zip_code": "",
            "country": {
                "id": "AR",
                "name": "Argentina"
            },
            "state": {
                "id": "AR-B",
                "name": "Buenos Aires"
            },
            "city": {
                "id": null,
                "name": "Bernal"
            },
            "latitude": "",
            "longitude": ""
            },
            "attributes": [
            {
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "values": [
                {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "attribute_group_id": "OTHERS",
                "id": "BRAND",
                "name": "Marca",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
            },
            {
                "value_name": "Nuevo",
                "values": [
                {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "id": "ITEM_CONDITION",
                "value_id": "2230284",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "name": "Condición del ítem"
            },
            {
                "values": [
                {
                    "id": null,
                    "name": "13.5 cm",
                    "struct": {
                    "number": 13.5,
                    "unit": "cm"
                    },
                    "source": 2860837171021627
                }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "name": "Largo",
                "value_id": null,
                "value_struct": {
                "number": 13.5,
                "unit": "cm"
                },
                "attribute_group_name": "Otros",
                "id": "LENGTH",
                "value_name": "13.5 cm"
            },
            {
                "id": "MODEL",
                "value_id": null,
                "value_name": "Joven Griego",
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "name": "Modelo",
                "value_struct": null,
                "values": [
                {
                    "id": null,
                    "name": "Joven Griego",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "attribute_group_name": "Otros"
            },
            {
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_name": "1",
                "attribute_group_name": "Otros",
                "value_id": null,
                "value_struct": null,
                "values": [
                {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "1"
                }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
            }
            ],
            "differential_pricing": {
            "id": 33678187
            },
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
            "good_quality_picture",
            "good_quality_thumbnail",
            "loyalty_discount_eligible",
            "immediate_payment",
            "cart_eligible",
            "shipping_guaranteed"
            ],
            "order_backend": 1,
            "use_thumbnail_id": true,
            "offer_score": null,
            "offer_share": null,
            "match_score": null,
            "winner_item_id": null,
            "melicoin": null,
            "discounts": null,
            "inventory_id": null
        },
        {
            "id": "MLA929370841",
            "site_id": "MLA",
            "title": "Maceta Escultura Pack X 3/cactus/suculentas",
            "seller": {
            "id": 77634688,
            "permalink": "http://perfil.mercadolibre.com.ar/BERNAL3DPRINTS",
            "registration_date": "2004-12-14T22:14:22.000-04:00",
            "car_dealer": false,
            "real_estate_agency": false,
            "tags": [
                "normal",
                "credits_profile",
                "mshops",
                "messages_as_seller"
            ],
            "seller_reputation": {
                "power_seller_status": null,
                "level_id": "5_green",
                "metrics": {
                "cancellations": {
                    "period": "365 days",
                    "rate": 0,
                    "value": 0
                },
                "claims": {
                    "period": "365 days",
                    "rate": 0,
                    "value": 0
                },
                "delayed_handling_time": {
                    "period": "365 days",
                    "rate": 0.0618,
                    "value": 6
                },
                "sales": {
                    "period": "365 days",
                    "completed": 102
                }
                },
                "transactions": {
                "canceled": 10,
                "period": "historic",
                "total": 112,
                "ratings": {
                    "negative": 0,
                    "neutral": 0,
                    "positive": 1
                },
                "completed": 102
                }
            },
            "nickname": "BERNAL3DPRINTS"
            },
            "price": 2000,
            "prices": {
            "id": "MLA929370841",
            "prices": [
                {
                "id": "1",
                "type": "standard",
                "amount": 2000,
                "regular_amount": null,
                "currency_id": "ARS",
                "last_updated": "2021-07-14T00:41:53Z",
                "conditions": {
                    "context_restrictions": [
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                },
                "exchange_rate_context": "DEFAULT",
                "metadata": {
                }
                }
            ],
            "presentation": {
                "display_currency": "ARS"
            },
            "payment_method_prices": [
            ],
            "reference_prices": [
            ],
            "purchase_discounts": [
            ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 5,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-07-08T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-929370841-maceta-escultura-pack-x-3cactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_959690-MLA46729374461_072021-I.jpg",
            "thumbnail_id": "959690-MLA46729374461_072021",
            "accepts_mercadopago": true,
            "installments": {
            "quantity": 12,
            "amount": 339.98,
            "rate": 103.99,
            "currency_id": "ARS"
            },
            "address": {
            "state_id": "AR-B",
            "state_name": "Buenos Aires",
            "city_id": null,
            "city_name": "Bernal"
            },
            "promotions": null,
            "shipping": {
            "free_shipping": false,
            "mode": "me2",
            "tags": [
            ],
            "logistic_type": "xd_drop_off",
            "store_pick_up": false
            },
            "seller_address": {
            "id": "",
            "comment": "",
            "address_line": "",
            "zip_code": "",
            "country": {
                "id": "AR",
                "name": "Argentina"
            },
            "state": {
                "id": "AR-B",
                "name": "Buenos Aires"
            },
            "city": {
                "id": null,
                "name": "Bernal"
            },
            "latitude": "",
            "longitude": ""
            },
            "attributes": [
            {
                "id": "BRAND",
                "name": "Marca",
                "value_id": null,
                "value_struct": null,
                "values": [
                {
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null
                }
                ],
                "attribute_group_id": "OTHERS",
                "value_name": "Bernal 3D Prints",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
            },
            {
                "values": [
                {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "source": 2860837171021627,
                "id": "ITEM_CONDITION",
                "value_name": "Nuevo",
                "value_struct": null,
                "attribute_group_name": "Otros",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "attribute_group_id": "OTHERS"
            },
            {
                "values": [
                {
                    "id": null,
                    "name": "9 cm",
                    "struct": {
                    "unit": "cm",
                    "number": 9
                    },
                    "source": 2860837171021627
                }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "LENGTH",
                "name": "Largo",
                "value_struct": {
                "number": 9,
                "unit": "cm"
                },
                "value_id": null,
                "value_name": "9 cm"
            },
            {
                "value_name": "Pack X 3",
                "values": [
                {
                    "id": null,
                    "name": "Pack X 3",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "attribute_group_name": "Otros",
                "id": "MODEL",
                "value_id": null,
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "name": "Modelo",
                "value_struct": null
            },
            {
                "value_struct": null,
                "values": [
                {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "value_id": null,
                "attribute_group_name": "Otros",
                "name": "Unidades por envase",
                "value_name": "1"
            }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
            "good_quality_picture",
            "good_quality_thumbnail",
            "loyalty_discount_eligible",
            "immediate_payment",
            "cart_eligible",
            "shipping_guaranteed"
            ],
            "order_backend": 2,
            "use_thumbnail_id": true,
            "offer_score": null,
            "offer_share": null,
            "match_score": null,
            "winner_item_id": null,
            "melicoin": null,
            "discounts": null,
            "inventory_id": null
        },
        {
            "id": "MLA929370919",
            "site_id": "MLA",
            "title": "Maceta Escultura Pack X 3/cactus/suculentas",
            "seller": {
            "id": 77634688,
            "permalink": "http://perfil.mercadolibre.com.ar/BERNAL3DPRINTS",
            "registration_date": "2004-12-14T22:14:22.000-04:00",
            "car_dealer": false,
            "real_estate_agency": false,
            "tags": [
                "normal",
                "credits_profile",
                "mshops",
                "messages_as_seller"
            ],
            "seller_reputation": {
                "power_seller_status": null,
                "level_id": "5_green",
                "metrics": {
                "cancellations": {
                    "period": "365 days",
                    "rate": 0,
                    "value": 0
                },
                "claims": {
                    "period": "365 days",
                    "rate": 0,
                    "value": 0
                },
                "delayed_handling_time": {
                    "period": "365 days",
                    "rate": 0.0618,
                    "value": 6
                },
                "sales": {
                    "period": "365 days",
                    "completed": 102
                }
                },
                "transactions": {
                "canceled": 10,
                "period": "historic",
                "total": 112,
                "ratings": {
                    "negative": 0,
                    "neutral": 0,
                    "positive": 1
                },
                "completed": 102
                }
            },
            "nickname": "BERNAL3DPRINTS"
            },
            "price": 1700,
            "prices": {
            "id": "MLA929370919",
            "prices": [
                {
                "id": "4",
                "type": "standard",
                "amount": 1700,
                "regular_amount": null,
                "currency_id": "ARS",
                "last_updated": "2022-02-09T21:12:13Z",
                "conditions": {
                    "context_restrictions": [
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                },
                "exchange_rate_context": "DEFAULT",
                "metadata": {
                }
                }
            ],
            "presentation": {
                "display_currency": "ARS"
            },
            "payment_method_prices": [
            ],
            "reference_prices": [
                {
                "id": "13",
                "type": "min_standard",
                "conditions": {
                    "context_restrictions": [
                    "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                },
                "amount": 1680,
                "currency_id": "ARS",
                "exchange_rate_context": "DEFAULT",
                "tags": [
                ],
                "last_updated": "2022-03-06T05:02:05Z"
                },
                {
                "id": "14",
                "type": "was",
                "conditions": {
                    "context_restrictions": [
                    "channel_marketplace"
                    ],
                    "start_time": "2022-03-06T05:02:05Z",
                    "end_time": "2022-03-13T05:02:05Z",
                    "eligible": true
                },
                "amount": 1680,
                "currency_id": "ARS",
                "exchange_rate_context": "DEFAULT",
                "tags": [
                ],
                "last_updated": "2022-03-06T05:02:05Z"
                }
            ],
            "purchase_discounts": [
            ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 5,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-07-08T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-929370919-maceta-escultura-pack-x-3cactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_697494-MLA46729485961_072021-I.jpg",
            "thumbnail_id": "697494-MLA46729485961_072021",
            "accepts_mercadopago": true,
            "installments": {
            "quantity": 12,
            "amount": 288.99,
            "rate": 103.99,
            "currency_id": "ARS"
            },
            "address": {
            "state_id": "AR-B",
            "state_name": "Buenos Aires",
            "city_id": null,
            "city_name": "Bernal"
            },
            "promotions": null,
            "shipping": {
            "free_shipping": false,
            "mode": "me2",
            "tags": [
            ],
            "logistic_type": "xd_drop_off",
            "store_pick_up": false
            },
            "seller_address": {
            "id": "",
            "comment": "",
            "address_line": "",
            "zip_code": "",
            "country": {
                "id": "AR",
                "name": "Argentina"
            },
            "state": {
                "id": "AR-B",
                "name": "Buenos Aires"
            },
            "city": {
                "id": null,
                "name": "Bernal"
            },
            "latitude": "",
            "longitude": ""
            },
            "attributes": [
            {
                "id": "BRAND",
                "value_id": null,
                "value_struct": null,
                "values": [
                {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Bernal 3D Prints"
                }
                ],
                "source": 2860837171021627,
                "name": "Marca",
                "value_name": "Bernal 3D Prints",
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
            },
            {
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "ITEM_CONDITION",
                "value_name": "Nuevo",
                "values": [
                {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "source": 2860837171021627
            },
            {
                "value_id": null,
                "value_name": "9 cm",
                "value_struct": {
                "number": 9,
                "unit": "cm"
                },
                "source": 2860837171021627,
                "id": "LENGTH",
                "name": "Largo",
                "values": [
                {
                    "id": null,
                    "name": "9 cm",
                    "struct": {
                    "unit": "cm",
                    "number": 9
                    },
                    "source": 2860837171021627
                }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
            },
            {
                "name": "Modelo",
                "source": 2860837171021627,
                "id": "MODEL",
                "value_id": null,
                "value_name": "Pack X 3",
                "value_struct": null,
                "values": [
                {
                    "id": null,
                    "name": "Pack X 3",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
            },
            {
                "value_name": "1",
                "value_struct": null,
                "values": [
                {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 2860837171021627
                }
                ],
                "id": "UNITS_PER_PACKAGE",
                "value_id": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "name": "Unidades por envase"
            }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
            "good_quality_picture",
            "good_quality_thumbnail",
            "immediate_payment",
            "cart_eligible",
            "shipping_guaranteed"
            ],
            "order_backend": 3,
            "use_thumbnail_id": true,
            "offer_score": null,
            "offer_share": null,
            "match_score": null,
            "winner_item_id": null,
            "melicoin": null,
            "discounts": null,
            "inventory_id": null
        }
        ],
        "sort": {
        "id": "relevance",
        "name": "More relevant"
        },
        "available_sorts": [
        {
            "id": "price_asc",
            "name": "Lower price"
        },
        {
            "id": "price_desc",
            "name": "Higher price"
        }
        ],
        "filters": [
        ],
        "available_filters": [
        {
            "id": "category",
            "name": "Categories",
            "type": "text",
            "values": [
            {
                "id": "MLA1574",
                "name": "Hogar, Muebles y Jardín",
                "results": 27
            },
            {
                "id": "MLA1132",
                "name": "Juegos y Juguetes",
                "results": 1
            }
            ]
        },
        {
            "id": "state",
            "name": "Location",
            "type": "text",
            "values": [
            {
                "id": "TUxBUEdSQXJlMDNm",
                "name": "Bs.As. G.B.A. Sur",
                "results": 28
            }
            ]
        },
        {
            "id": "price",
            "name": "Precio",
            "type": "range",
            "values": [
            {
                "id": "*-900.0",
                "name": "Up to $900",
                "results": 9
            },
            {
                "id": "900.0-1500.0",
                "name": "$900 to $1.500",
                "results": 5
            },
            {
                "id": "1500.0-*",
                "name": "More than $1.500",
                "results": 14
            }
            ]
        },
        {
            "id": "accepts_mercadopago",
            "name": "MercadoPago filter",
            "type": "boolean",
            "values": [
            {
                "id": "yes",
                "name": "With MercadoPago",
                "results": 28
            }
            ]
        },
        {
            "id": "installments",
            "name": "Pago",
            "type": "text",
            "values": [
            {
                "id": "yes",
                "name": "Installments",
                "results": 28
            },
            {
                "id": "no_interest",
                "name": "Sin interés",
                "results": 10
            }
            ]
        },
        {
            "id": "shipping",
            "name": "Envío",
            "type": "text",
            "values": [
            {
                "id": "mercadoenvios",
                "name": "Mercado Envíos",
                "results": 28
            }
            ]
        },
        {
            "id": "has_pictures",
            "name": "Items with images filter",
            "type": "boolean",
            "values": [
            {
                "id": "yes",
                "name": "With pictures",
                "results": 28
            }
            ]
        },
        {
            "id": "shipping_cost",
            "name": "Costo de envío",
            "type": "text",
            "values": [
            {
                "id": "free",
                "name": "Gratis",
                "results": 1
            }
            ]
        },
        {
            "id": "IS_SUITABLE_FOR_ORCHARDS",
            "name": "Otras características",
            "type": "boolean",
            "values": [
            {
                "id": "242085",
                "name": "Es apto para huertas",
                "results": 13
            }
            ]
        },
        {
            "id": "ITEM_CONDITION",
            "name": "Condición",
            "type": "STRING",
            "values": [
            {
                "id": "2230284",
                "name": "Nuevo",
                "results": 28
            }
            ]
        },
        {
            "id": "SHAPE",
            "name": "Forma",
            "type": "STRING",
            "values": [
            {
                "id": "2693059",
                "name": "Cubo",
                "results": 2
            },
            {
                "id": "5125317",
                "name": "Cilindro",
                "results": 1
            },
            {
                "id": "4376166",
                "name": "Cilíndrica",
                "results": 1
            }
            ]
        }
        ]
    };

    class Product {
        constructor(APIproduct) { 
        this.id = APIproduct.id;
        this.title = APIproduct.title;
        this.description = "This is a description of the product";
        this.price = APIproduct.price;
        this.pictureUrl = APIproduct.thumbnail;
        }
    }

    let products = query.results.map( (product) => new Product(product))
    
    setTimeout(()=>{resolve(products)}, 2000)
    
    }
    )
}

export default getProducts


