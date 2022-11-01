
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
          "limit": 50
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
          },
          {
            "id": "MLA911227896",
            "site_id": "MLA",
            "title": "Maceta Escultura Joven Griego/cactus/suculentas",
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
            "price": 900,
            "prices": {
              "id": "MLA911227896",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 900,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-03-09T23:14:02Z",
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
                  "amount": 900,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-02-22T10:42:52Z"
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
            "stop_time": "2041-03-04T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-911227896-maceta-escultura-joven-griegocactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_714054-MLA46265073510_062021-I.jpg",
            "thumbnail_id": "714054-MLA46265073510_062021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 150,
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
                "id": "BRAND",
                "name": "Marca",
                "value_id": null,
                "attribute_group_id": "OTHERS",
                "source": 6808261514773724,
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "values": [
                  {
                    "source": 6808261514773724,
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null
                  }
                ],
                "attribute_group_name": "Otros"
              },
              {
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 6808261514773724,
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_name": "Nuevo",
                "value_struct": null,
                "values": [
                  {
                    "name": "Nuevo",
                    "struct": null,
                    "source": 6808261514773724,
                    "id": "2230284"
                  }
                ]
              },
              {
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 6808261514773724,
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "value_name": "9 cm",
                "value_struct": {
                  "number": 9,
                  "unit": "cm"
                },
                "values": [
                  {
                    "id": null,
                    "name": "9 cm",
                    "struct": {
                      "number": 9,
                      "unit": "cm"
                    },
                    "source": 6808261514773724
                  }
                ]
              },
              {
                "id": "MODEL",
                "name": "Modelo",
                "value_id": null,
                "values": [
                  {
                    "id": null,
                    "name": "Joven Griego",
                    "struct": null,
                    "source": 6808261514773724
                  }
                ],
                "source": 6808261514773724,
                "value_name": "Joven Griego",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_id": null,
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "value_name": "1",
                "values": [
                  {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 3376461333454861
                  }
                ],
                "source": 3376461333454861
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
            "order_backend": 4,
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
            "id": "MLA1126678652",
            "site_id": "MLA",
            "title": "Maceta Escultura David 15cm/cactus/suculentas",
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
              "id": "MLA1126678652",
              "prices": [
                {
                  "id": "30",
                  "type": "standard",
                  "amount": 1500,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-05-10T16:57:00Z",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "exchange_rate_context": "DEFAULT",
                  "metadata": {
                  }
                },
                {
                  "id": "2",
                  "type": "standard",
                  "amount": 1300,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-03-08T21:56:01Z",
                  "conditions": {
                    "context_restrictions": [
                      "channel_mshops"
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
                  "id": "45",
                  "type": "min_standard",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "amount": 1400,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-06-04T06:20:26Z"
                },
                {
                  "id": "46",
                  "type": "was",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": "2022-06-04T06:20:26Z",
                    "end_time": "2022-06-11T06:20:26Z",
                    "eligible": true
                  },
                  "amount": 1300,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-06-04T06:20:26Z"
                }
              ],
              "purchase_discounts": [
              ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 3,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2042-03-03T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1126678652-maceta-escultura-david-15cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_683256-MLA46145026439_052021-I.jpg",
            "thumbnail_id": "683256-MLA46145026439_052021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 254.99,
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
                "name": "Marca",
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "BRAND",
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
                ]
              },
              {
                "source": 2860837171021627,
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "value_id": "2230284",
                "value_name": "Nuevo",
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ]
              },
              {
                "id": "LENGTH",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "name": "Largo",
                "value_id": null,
                "value_name": "10 cm",
                "value_struct": {
                  "number": 10,
                  "unit": "cm"
                },
                "values": [
                  {
                    "id": null,
                    "name": "10 cm",
                    "struct": {
                      "number": 10,
                      "unit": "cm"
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS"
              },
              {
                "value_id": null,
                "values": [
                  {
                    "id": null,
                    "name": "David",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "name": "Modelo",
                "value_name": "David",
                "value_struct": null,
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "MODEL"
              },
              {
                "name": "Unidades por envase",
                "value_id": null,
                "value_name": "1",
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
                "value_struct": null,
                "attribute_group_name": "Otros"
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "standard_price_by_channel",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 5,
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
            "id": "MLA927183356",
            "site_id": "MLA",
            "title": "Maceta Escultura Platon 15cm/cactus/suculentas",
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
              "id": "MLA927183356",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 1500,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-06-26T01:27:15Z",
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
            "listing_type_id": "gold_pro",
            "stop_time": "2041-06-20T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-927183356-maceta-escultura-platon-15cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_882646-MLA46523492570_062021-I.jpg",
            "thumbnail_id": "882646-MLA46523492570_062021",
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
                "values": [
                  {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "BRAND",
                "name": "Marca",
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "value_struct": null
              },
              {
                "value_name": "Nuevo",
                "attribute_group_id": "OTHERS",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_struct": null,
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "ITEM_CONDITION"
              },
              {
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "value_name": "12 cm",
                "values": [
                  {
                    "id": null,
                    "name": "12 cm",
                    "struct": {
                      "number": 12,
                      "unit": "cm"
                    },
                    "source": 2860837171021627
                  }
                ],
                "value_id": null,
                "value_struct": {
                  "number": 12,
                  "unit": "cm"
                },
                "attribute_group_name": "Otros",
                "id": "LENGTH",
                "name": "Largo"
              },
              {
                "id": "MODEL",
                "name": "Modelo",
                "value_id": null,
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "Platon",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "value_name": "Platon",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "source": 2860837171021627,
                "name": "Unidades por envase",
                "value_id": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "UNITS_PER_PACKAGE",
                "value_name": "1",
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ]
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
            "order_backend": 6,
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
            "id": "MLA1131678018",
            "site_id": "MLA",
            "title": "Maceta Escultura Venus 21cm/cactus/suculentas",
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
            "price": 2600,
            "prices": {
              "id": "MLA1131678018",
              "prices": [
                {
                  "id": "2",
                  "type": "standard",
                  "amount": 2600,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T20:40:04Z",
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
                  "id": "3",
                  "type": "min_standard",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "amount": 2450,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-09-29T20:40:05Z"
                }
              ],
              "purchase_discounts": [
              ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2042-04-06T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1131678018-maceta-escultura-venus-21cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_856731-MLA46504403175_062021-I.jpg",
            "thumbnail_id": "856731-MLA46504403175_062021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 441.98,
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
                "value_name": "Bernal 3D Prints",
                "value_id": null,
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
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_name": "Nuevo",
                "value_struct": null,
                "source": 2860837171021627
              },
              {
                "value_id": null,
                "value_name": "13 cm",
                "value_struct": {
                  "number": 13,
                  "unit": "cm"
                },
                "values": [
                  {
                    "id": null,
                    "name": "13 cm",
                    "struct": {
                      "unit": "cm",
                      "number": 13
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "id": "LENGTH",
                "name": "Largo",
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              },
              {
                "value_name": "Venus",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "MODEL",
                "name": "Modelo",
                "value_id": null,
                "value_struct": null,
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Venus"
                  }
                ],
                "attribute_group_id": "OTHERS"
              },
              {
                "value_id": null,
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
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
                "attribute_group_name": "Otros"
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
            "order_backend": 7,
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
            "id": "MLA1141343301",
            "site_id": "MLA",
            "title": "Arma Pistola Inerte Entrenamiento Policial Glock 17 Roja",
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
            "price": 1940,
            "prices": {
              "id": "MLA1141343301",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 1940,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-06-07T21:26:52Z",
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
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2042-06-02T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1141343301-arma-pistola-inerte-entrenamiento-policial-glock-17-roja-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_994052-MLA50225070215_062022-I.jpg",
            "thumbnail_id": "994052-MLA50225070215_062022",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 329.78,
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
                "value_name": "Kaira 4D",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 81068639424647,
                "name": "Marca",
                "value_id": null,
                "id": "BRAND",
                "values": [
                  {
                    "id": null,
                    "name": "Kaira 4D",
                    "struct": null,
                    "source": 81068639424647
                  }
                ]
              },
              {
                "id": "ITEM_CONDITION",
                "attribute_group_id": "OTHERS",
                "source": 81068639424647,
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_name": "Nuevo",
                "value_struct": null,
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 81068639424647
                  }
                ],
                "attribute_group_name": "Otros"
              },
              {
                "name": "Modelo",
                "value_name": "Glock 17",
                "values": [
                  {
                    "id": null,
                    "name": "Glock 17",
                    "struct": null,
                    "source": 81068639424647
                  }
                ],
                "source": 81068639424647,
                "id": "MODEL",
                "value_id": null,
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              }
            ],
            "original_price": null,
            "category_id": "MLA433029",
            "official_store_id": null,
            "domain_id": "MLA-TOY_GUNS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 8,
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
            "id": "MLA1122489399",
            "site_id": "MLA",
            "title": "Maceta Escultura Joven Griego 20cm/cactus/suculentas",
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
            "price": 2650,
            "prices": {
              "id": "MLA1122489399",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 2650,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-02-07T11:27:57Z",
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
            "sold_quantity": 3,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2042-02-02T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1122489399-maceta-escultura-joven-griego-20cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_771224-MLA46530701986_062021-I.jpg",
            "thumbnail_id": "771224-MLA46530701986_062021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 450.48,
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
                "values": [
                  {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "name": "Marca",
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "id": "BRAND",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_struct": null,
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "value_id": "2230284",
                "value_name": "Nuevo",
                "attribute_group_name": "Otros"
              },
              {
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "value_name": "18 cm",
                "source": 2860837171021627,
                "value_struct": {
                  "number": 18,
                  "unit": "cm"
                },
                "values": [
                  {
                    "id": null,
                    "name": "18 cm",
                    "struct": {
                      "unit": "cm",
                      "number": 18
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Joven Griego"
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "value_id": null,
                "name": "Modelo",
                "value_name": "Joven Griego",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "id": "MODEL"
              },
              {
                "name": "Unidades por envase",
                "value_id": null,
                "value_name": "1",
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "1"
                  }
                ],
                "attribute_group_name": "Otros",
                "id": "UNITS_PER_PACKAGE",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
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
            "order_backend": 9,
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
            "id": "MLA1129203511",
            "site_id": "MLA",
            "title": "Maceta Escultura Afrodita 20cm/cactus/suculentas",
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
            "price": 2600,
            "prices": {
              "id": "MLA1129203511",
              "prices": [
                {
                  "id": "2",
                  "type": "standard",
                  "amount": 2600,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T20:40:57Z",
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
                  "id": "3",
                  "type": "min_standard",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "amount": 2450,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-09-29T20:40:59Z"
                }
              ],
              "purchase_discounts": [
              ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 2,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2042-03-20T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1129203511-maceta-escultura-afrodita-20cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_970655-MLA46145181380_052021-I.jpg",
            "thumbnail_id": "970655-MLA46145181380_052021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 441.98,
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
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "BRAND",
                "name": "Marca",
                "value_id": null,
                "attribute_group_id": "OTHERS"
              },
              {
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_name": "Nuevo",
                "value_struct": null,
                "source": 2860837171021627,
                "value_id": "2230284",
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "value_struct": {
                  "number": 14,
                  "unit": "cm"
                },
                "attribute_group_name": "Otros",
                "source": 3376461333454861,
                "value_name": "14 cm",
                "values": [
                  {
                    "id": null,
                    "name": "14 cm",
                    "struct": {
                      "number": 14,
                      "unit": "cm"
                    },
                    "source": 3376461333454861
                  }
                ],
                "attribute_group_id": "OTHERS"
              },
              {
                "attribute_group_name": "Otros",
                "id": "MODEL",
                "value_name": "Afrodita",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "name": "Modelo",
                "value_id": null,
                "values": [
                  {
                    "id": null,
                    "name": "Afrodita",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ]
              },
              {
                "value_id": null,
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
                "name": "Unidades por envase",
                "value_name": "1",
                "attribute_group_name": "Otros"
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
            "order_backend": 10,
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
            "id": "MLA922240085",
            "site_id": "MLA",
            "title": "Maceta Escultura David/cactus/suculentas",
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
            "price": 670,
            "prices": {
              "id": "MLA922240085",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 670,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-05-24T23:12:58Z",
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
                  "amount": 670,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-02-22T15:43:01Z"
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
            "stop_time": "2041-05-19T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-922240085-maceta-escultura-davidcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_683256-MLA46145026439_052021-I.jpg",
            "thumbnail_id": "683256-MLA46145026439_052021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 111.67,
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
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "BRAND",
                "name": "Marca",
                "values": [
                  {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "value_struct": null
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
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_name": "Nuevo",
                "value_struct": null,
                "id": "ITEM_CONDITION"
              },
              {
                "source": 2860837171021627,
                "name": "Largo",
                "value_id": null,
                "value_name": "6.6 cm",
                "value_struct": {
                  "number": 6.6,
                  "unit": "cm"
                },
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "6.6 cm",
                    "struct": {
                      "number": 6.6,
                      "unit": "cm"
                    }
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "LENGTH"
              },
              {
                "id": "MODEL",
                "name": "Modelo",
                "value_struct": null,
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "value_id": null,
                "value_name": "David",
                "values": [
                  {
                    "id": null,
                    "name": "David",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS"
              },
              {
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "value_id": null,
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "1",
                    "struct": null
                  }
                ],
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_name": "1"
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
            "order_backend": 11,
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
            "id": "MLA922240641",
            "site_id": "MLA",
            "title": "Maceta Escultura Afrodita/cactus/suculentas",
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
            "price": 710,
            "prices": {
              "id": "MLA922240641",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 710,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-05-24T23:26:13Z",
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
                  "id": "2",
                  "type": "min_standard",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "amount": 710,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-02-22T17:25:50Z"
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
            "stop_time": "2041-05-19T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-922240641-maceta-escultura-afroditacactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_970655-MLA46145181380_052021-I.jpg",
            "thumbnail_id": "970655-MLA46145181380_052021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 118.33,
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
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "BRAND",
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "values": [
                  {
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null
                  }
                ],
                "source": 2860837171021627,
                "name": "Marca",
                "value_id": null
              },
              {
                "source": 2860837171021627,
                "value_name": "Nuevo",
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_struct": null
              },
              {
                "source": 2860837171021627,
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "values": [
                  {
                    "name": "6.3 cm",
                    "struct": {
                      "number": 6.3,
                      "unit": "cm"
                    },
                    "source": 2860837171021627,
                    "id": null
                  }
                ],
                "value_name": "6.3 cm",
                "value_struct": {
                  "number": 6.3,
                  "unit": "cm"
                },
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "name": "Modelo",
                "value_name": "Afrodita",
                "source": 2860837171021627,
                "id": "MODEL",
                "value_id": null,
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "Afrodita",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "value_id": null,
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "1",
                    "struct": null
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_name": "1",
                "value_struct": null,
                "attribute_group_id": "OTHERS"
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
              "good_quality_thumbnail",
              "loyalty_discount_eligible",
              "good_quality_picture",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 12,
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
            "id": "MLA922242819",
            "site_id": "MLA",
            "title": "Maceta Escultura Venus/cactus/suculentas",
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
            "price": 700,
            "prices": {
              "id": "MLA922242819",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 700,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-05-24T23:47:28Z",
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
            "listing_type_id": "gold_pro",
            "stop_time": "2041-05-19T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-922242819-maceta-escultura-venuscactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_864898-MLA46509260837_062021-I.jpg",
            "thumbnail_id": "864898-MLA46509260837_062021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 116.67,
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
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "BRAND",
                "value_name": "Bernal 3D Prints",
                "attribute_group_id": "OTHERS",
                "name": "Marca"
              },
              {
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_struct": null,
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "value_name": "Nuevo",
                "source": 2860837171021627
              },
              {
                "value_struct": {
                  "number": 7,
                  "unit": "cm"
                },
                "values": [
                  {
                    "id": null,
                    "name": "7 cm",
                    "struct": {
                      "number": 7,
                      "unit": "cm"
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "name": "Largo",
                "value_id": null,
                "value_name": "7 cm",
                "attribute_group_name": "Otros",
                "id": "LENGTH"
              },
              {
                "id": "MODEL",
                "name": "Modelo",
                "value_id": null,
                "attribute_group_name": "Otros",
                "value_name": "Venus",
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "Venus",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              },
              {
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_name": "1",
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "value_id": null,
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros"
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
            "order_backend": 13,
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
            "id": "MLA1113173564",
            "site_id": "MLA",
            "title": "Maceta Escultura Pack X 3 20cm/cactus/suculentas ",
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
            "price": 6950,
            "prices": {
              "id": "MLA1113173564",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 6950,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-11-19T23:16:33Z",
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
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-11-14T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1113173564-maceta-escultura-pack-x-3-20cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_959690-MLA46729374461_072021-I.jpg",
            "thumbnail_id": "959690-MLA46729374461_072021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 1181.44,
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
              "free_shipping": true,
              "mode": "me2",
              "tags": [
                "mandatory_free_shipping"
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
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "BRAND",
                "name": "Marca",
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "attribute_group_name": "Otros"
              },
              {
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
                "attribute_group_name": "Otros",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              },
              {
                "source": 2860837171021627,
                "id": "MODEL",
                "name": "Modelo",
                "value_struct": null,
                "values": [
                  {
                    "name": "Pack X 3",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null
                  }
                ],
                "attribute_group_id": "OTHERS",
                "value_id": null,
                "value_name": "Pack X 3",
                "attribute_group_name": "Otros"
              },
              {
                "name": "Unidades por envase",
                "value_id": null,
                "values": [
                  {
                    "id": null,
                    "name": "3",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "value_name": "3",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "loyalty_discount_eligible",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 14,
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
            "id": "MLA1124525740",
            "site_id": "MLA",
            "title": "Maceta Escultura Platon 20cm/cactus/suculentas",
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
            "price": 2900,
            "prices": {
              "id": "MLA1124525740",
              "prices": [
                {
                  "id": "2",
                  "type": "standard",
                  "amount": 2900,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T20:37:26Z",
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
                  "id": "3",
                  "type": "min_standard",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "amount": 2900,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-09-29T20:37:27Z"
                }
              ],
              "purchase_discounts": [
              ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2042-02-17T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1124525740-maceta-escultura-platon-20cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_882646-MLA46523492570_062021-I.jpg",
            "thumbnail_id": "882646-MLA46523492570_062021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 492.98,
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
                "values": [
                  {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "BRAND",
                "name": "Marca",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "value_id": null,
                "value_name": "Bernal 3D Prints"
              },
              {
                "value_struct": null,
                "source": 2860837171021627,
                "value_id": "2230284",
                "value_name": "Nuevo",
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": "2230284",
                    "name": "Nuevo"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem"
              },
              {
                "value_struct": {
                  "number": 18,
                  "unit": "cm"
                },
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "value_name": "18 cm",
                "values": [
                  {
                    "id": null,
                    "name": "18 cm",
                    "struct": {
                      "number": 18,
                      "unit": "cm"
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS"
              },
              {
                "values": [
                  {
                    "id": null,
                    "name": "Platon",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "MODEL",
                "name": "Modelo",
                "value_id": null,
                "value_name": "Platon",
                "value_struct": null
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
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_id": null,
                "attribute_group_id": "OTHERS"
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 15,
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
            "id": "MLA922236585",
            "site_id": "MLA",
            "title": "Maceta Escultura Platon/cactus/suculentas",
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
            "price": 900,
            "prices": {
              "id": "MLA922236585",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 900,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-05-24T23:31:19Z",
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
            "listing_type_id": "gold_pro",
            "stop_time": "2041-05-19T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-922236585-maceta-escultura-platoncactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_935755-MLA46145193987_052021-I.jpg",
            "thumbnail_id": "935755-MLA46145193987_052021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 150,
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
                "value_name": "Bernal 3D Prints",
                "values": [
                  {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "id": "BRAND",
                "name": "Marca",
                "value_id": null,
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "value_struct": null,
                "values": [
                  {
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": "2230284"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_name": "Nuevo",
                "id": "ITEM_CONDITION",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "value_struct": {
                  "number": 7.2,
                  "unit": "cm"
                },
                "attribute_group_id": "OTHERS",
                "id": "LENGTH",
                "value_id": null,
                "value_name": "7.2 cm",
                "source": 2860837171021627,
                "name": "Largo",
                "values": [
                  {
                    "id": null,
                    "name": "7.2 cm",
                    "struct": {
                      "number": 7.2,
                      "unit": "cm"
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros"
              },
              {
                "name": "Modelo",
                "value_name": "Platon",
                "attribute_group_name": "Otros",
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Platon",
                    "struct": null
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "MODEL",
                "value_id": null,
                "value_struct": null
              },
              {
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
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
                "attribute_group_name": "Otros",
                "name": "Unidades por envase",
                "value_name": "1"
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
            "order_backend": 16,
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
            "id": "MLA920601595",
            "site_id": "MLA",
            "title": "Maceta Escultura Silueta/cactus/suculentas",
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
            "price": 430,
            "prices": {
              "id": "MLA920601595",
              "prices": [
                {
                  "id": "2",
                  "type": "standard",
                  "amount": 430,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-05-13T21:03:02Z",
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
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-05-08T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-920601595-maceta-escultura-siluetacactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_810916-MLA45145643794_032021-I.jpg",
            "thumbnail_id": "810916-MLA45145643794_032021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 73.1,
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
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "name": "Marca",
                "value_id": null,
                "values": [
                  {
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "value_name": "Nuevo",
                "value_struct": null,
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "attribute_group_id": "OTHERS"
              },
              {
                "name": "Largo",
                "value_name": "6 cm",
                "attribute_group_name": "Otros",
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "6 cm",
                    "struct": {
                      "number": 6,
                      "unit": "cm"
                    }
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "LENGTH",
                "value_id": null,
                "value_struct": {
                  "number": 6,
                  "unit": "cm"
                }
              },
              {
                "value_id": null,
                "value_name": "Silueta",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "id": "MODEL",
                "name": "Modelo",
                "values": [
                  {
                    "id": null,
                    "name": "Silueta",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "value_id": null,
                "value_name": "1",
                "value_struct": null,
                "source": 2860837171021627,
                "attribute_group_name": "Otros",
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "1",
                    "struct": null
                  }
                ],
                "attribute_group_id": "OTHERS"
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "loyalty_discount_eligible",
              "poor_quality_picture",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 17,
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
            "id": "MLA928290490",
            "site_id": "MLA",
            "title": "Maceta Patitas/cactus/suculentas",
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
            "price": 200,
            "prices": {
              "id": "MLA928290490",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 200,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-07-05T02:43:12Z",
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
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-06-29T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-928290490-maceta-patitascactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_816921-MLA46615214790_072021-I.jpg",
            "thumbnail_id": "816921-MLA46615214790_072021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 34,
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
                "name": "Marca",
                "value_struct": null,
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "BRAND",
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "attribute_group_name": "Otros"
              },
              {
                "name": "Condición del ítem",
                "value_id": "2230284",
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null
                  }
                ],
                "attribute_group_id": "OTHERS",
                "id": "ITEM_CONDITION",
                "value_name": "Nuevo",
                "value_struct": null,
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "value_name": "4 cm",
                "value_struct": {
                  "number": 4,
                  "unit": "cm"
                },
                "values": [
                  {
                    "name": "4 cm",
                    "struct": {
                      "number": 4,
                      "unit": "cm"
                    },
                    "source": 2860837171021627,
                    "id": null
                  }
                ]
              },
              {
                "values": [
                  {
                    "id": null,
                    "name": "Patitas",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "source": 2860837171021627,
                "id": "MODEL",
                "name": "Modelo",
                "value_id": null,
                "value_name": "Patitas",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "id": "UNITS_PER_PACKAGE",
                "value_name": "1",
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "name": "Unidades por envase",
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
                "source": 2860837171021627
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "loyalty_discount_eligible",
              "good_quality_picture",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 18,
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
            "id": "MLA1103079299",
            "site_id": "MLA",
            "title": "Maceta Escultura Venus 16cm/cactus/suculentas",
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
            "price": 1190,
            "prices": {
              "id": "MLA1103079299",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 1190,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-09-13T14:39:40Z",
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
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-09-08T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1103079299-maceta-escultura-venus-16cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_856731-MLA46504403175_062021-I.jpg",
            "thumbnail_id": "856731-MLA46504403175_062021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 202.29,
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
                "name": "Marca",
                "value_id": null,
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Bernal 3D Prints"
                  }
                ],
                "source": 2860837171021627,
                "id": "BRAND",
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "source": 2860837171021627,
                "id": "ITEM_CONDITION",
                "value_struct": null,
                "value_name": "Nuevo",
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "name": "Condición del ítem",
                "value_id": "2230284"
              },
              {
                "value_id": null,
                "source": 3376461333454861,
                "name": "Largo",
                "value_name": "10 cm",
                "value_struct": {
                  "number": 10,
                  "unit": "cm"
                },
                "values": [
                  {
                    "id": null,
                    "name": "10 cm",
                    "struct": {
                      "unit": "cm",
                      "number": 10
                    },
                    "source": 3376461333454861
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "LENGTH"
              },
              {
                "id": "MODEL",
                "name": "Modelo",
                "value_id": null,
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "value_name": "Venus",
                "values": [
                  {
                    "id": null,
                    "name": "Venus",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "source": 2860837171021627
              },
              {
                "value_id": null,
                "values": [
                  {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_name": "1",
                "value_struct": null,
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "loyalty_discount_eligible",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 19,
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
            "id": "MLA1128756321",
            "site_id": "MLA",
            "title": "Maceta Escultura Silueta 20cm/cactus/suculentas",
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
            "price": 900,
            "prices": {
              "id": "MLA1128756321",
              "prices": [
                {
                  "id": "2",
                  "type": "standard",
                  "amount": 900,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T21:02:46Z",
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
                  "id": "3",
                  "type": "min_standard",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "amount": 900,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-09-29T21:02:51Z"
                }
              ],
              "purchase_discounts": [
              ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 3,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2042-03-17T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1128756321-maceta-escultura-silueta-20cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_816943-MLA51760096199_092022-I.jpg",
            "thumbnail_id": "816943-MLA51760096199_092022",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 152.99,
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
                "name": "Marca",
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "source": 2860837171021627,
                "id": "BRAND",
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
                "attribute_group_name": "Otros"
              },
              {
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_struct": null,
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "id": "ITEM_CONDITION",
                "value_name": "Nuevo",
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              },
              {
                "attribute_group_name": "Otros",
                "name": "Largo",
                "value_id": null,
                "value_name": "12 cm",
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "12 cm",
                    "struct": {
                      "unit": "cm",
                      "number": 12
                    }
                  }
                ],
                "attribute_group_id": "OTHERS",
                "id": "LENGTH",
                "value_struct": {
                  "number": 12,
                  "unit": "cm"
                },
                "source": 2860837171021627
              },
              {
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "MODEL",
                "value_id": null,
                "values": [
                  {
                    "id": null,
                    "name": "Silueta",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "source": 2860837171021627,
                "name": "Modelo",
                "value_name": "Silueta",
                "value_struct": null
              },
              {
                "value_id": null,
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "1"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_name": "1",
                "value_struct": null
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
            "order_backend": 20,
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
            "id": "MLA930149445",
            "site_id": "MLA",
            "title": "Maceta Linea Raices Plantas/cactus/suculentas",
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
            "price": 330,
            "prices": {
              "id": "MLA930149445",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 330,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-07-20T02:14:25Z",
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
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-07-14T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-930149445-maceta-linea-raices-plantascactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_899648-MLA46800384448_072021-I.jpg",
            "thumbnail_id": "899648-MLA46800384448_072021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 56.1,
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
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "values": [
                  {
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": "2230284"
                  }
                ],
                "source": 2860837171021627,
                "value_name": "Nuevo",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "value_name": "11 cm",
                "value_struct": {
                  "number": 11,
                  "unit": "cm"
                },
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "11 cm",
                    "struct": {
                      "number": 11,
                      "unit": "cm"
                    }
                  }
                ],
                "source": 2860837171021627
              },
              {
                "name": "Modelo",
                "value_id": null,
                "value_name": "Linea Raices",
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "MODEL",
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "Linea Raices",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ]
              },
              {
                "value_struct": null,
                "value_name": "1",
                "values": [
                  {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_id": null
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "loyalty_discount_eligible",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 21,
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
            "id": "MLA909921455",
            "site_id": "MLA",
            "title": "Mate Hongo Mario Bros C/ Bombilla Varios Colores",
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
            "price": 1380,
            "prices": {
              "id": "MLA909921455",
              "prices": [
                {
                  "id": "2",
                  "type": "standard",
                  "amount": 1380,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-02-27T15:45:59Z",
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
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2041-02-22T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-909921455-mate-hongo-mario-bros-c-bombilla-varios-colores-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_924159-MLA45027605890_022021-I.jpg",
            "thumbnail_id": "924159-MLA45027605890_022021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 230,
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
                "name": "Marca",
                "value_id": null,
                "value_name": "Bernal3dPrints",
                "attribute_group_name": "Otros",
                "id": "BRAND",
                "value_struct": null,
                "values": [
                  {
                    "id": null,
                    "name": "Bernal3dPrints",
                    "struct": null,
                    "source": 6808261514773724
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 6808261514773724
              },
              {
                "value_name": "Nuevo",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "source": 6808261514773724,
                "id": "ITEM_CONDITION",
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 6808261514773724
                  }
                ]
              },
              {
                "id": "MODEL",
                "value_id": null,
                "values": [
                  {
                    "struct": null,
                    "source": 6808261514773724,
                    "id": null,
                    "name": "Mate línea Premium - Hongo Mario Bros"
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 6808261514773724,
                "name": "Modelo",
                "value_name": "Mate línea Premium - Hongo Mario Bros",
                "value_struct": null,
                "attribute_group_id": "OTHERS"
              }
            ],
            "differential_pricing": {
              "id": 33678187
            },
            "original_price": null,
            "category_id": "MLA392282",
            "official_store_id": null,
            "domain_id": "MLA-MATE_GOURDS",
            "catalog_product_id": null,
            "tags": [
              "loyalty_discount_eligible",
              "good_quality_picture",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 22,
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
            "id": "MLA911230091",
            "site_id": "MLA",
            "title": "Maceta Escultura Silueta/cactus/suculentas",
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
            "price": 500,
            "prices": {
              "id": "MLA911230091",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 500,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-03-09T23:21:21Z",
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
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2041-03-04T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-911230091-maceta-escultura-siluetacactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_877696-MLA51760061283_092022-I.jpg",
            "thumbnail_id": "877696-MLA51760061283_092022",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 83.33,
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
                "id": "BRAND",
                "value_id": null,
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null
                  }
                ],
                "attribute_group_name": "Otros",
                "name": "Marca",
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              },
              {
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": "2230284",
                    "name": "Nuevo"
                  }
                ],
                "attribute_group_name": "Otros",
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "value_id": "2230284",
                "value_name": "Nuevo"
              },
              {
                "attribute_group_name": "Otros",
                "name": "Largo",
                "value_name": "6 cm",
                "value_struct": {
                  "number": 6,
                  "unit": "cm"
                },
                "values": [
                  {
                    "id": null,
                    "name": "6 cm",
                    "struct": {
                      "number": 6,
                      "unit": "cm"
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "id": "LENGTH",
                "value_id": null,
                "source": 2860837171021627
              },
              {
                "value_struct": null,
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Silueta"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "name": "Modelo",
                "value_id": null,
                "value_name": "Silueta",
                "source": 2860837171021627,
                "id": "MODEL"
              },
              {
                "id": "UNITS_PER_PACKAGE",
                "name": "Unidades por envase",
                "value_name": "1",
                "values": [
                  {
                    "id": null,
                    "name": "1",
                    "struct": null,
                    "source": 3376461333454861
                  }
                ],
                "source": 3376461333454861,
                "value_id": null,
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
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
            "order_backend": 23,
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
            "id": "MLA929190012",
            "site_id": "MLA",
            "title": "Maceta Cuadrada Linea Tecno Plantas/cactus/suculentas",
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
            "price": 330,
            "prices": {
              "id": "MLA929190012",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 330,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-07-13T00:34:51Z",
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
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-07-07T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-929190012-maceta-cuadrada-linea-tecno-plantascactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_776435-MLA46713350822_072021-I.jpg",
            "thumbnail_id": "776435-MLA46713350822_072021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 56.1,
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
                "source": 2860837171021627,
                "name": "Marca",
                "value_id": null,
                "values": [
                  {
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null
                  }
                ],
                "attribute_group_id": "OTHERS",
                "id": "BRAND",
                "value_name": "Bernal 3D Prints",
                "value_struct": null,
                "attribute_group_name": "Otros"
              },
              {
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_name": "Nuevo",
                "value_struct": null,
                "value_id": "2230284",
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ]
              },
              {
                "name": "Largo",
                "value_name": "11 cm",
                "attribute_group_name": "Otros",
                "id": "LENGTH",
                "value_id": null,
                "value_struct": {
                  "number": 11,
                  "unit": "cm"
                },
                "values": [
                  {
                    "struct": {
                      "number": 11,
                      "unit": "cm"
                    },
                    "source": 2860837171021627,
                    "id": null,
                    "name": "11 cm"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              },
              {
                "value_id": null,
                "value_name": "Linea Tecno",
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Linea Tecno",
                    "struct": null
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "MODEL",
                "name": "Modelo",
                "value_struct": null,
                "attribute_group_id": "OTHERS"
              },
              {
                "name": "Unidades por envase",
                "value_struct": null,
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "1",
                    "struct": null
                  }
                ],
                "source": 2860837171021627,
                "id": "UNITS_PER_PACKAGE",
                "value_id": null,
                "value_name": "1",
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              }
            ],
            "original_price": null,
            "category_id": "MLA11034",
            "official_store_id": null,
            "domain_id": "MLA-PLANT_POTS_AND_PLANTERS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "loyalty_discount_eligible",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 24,
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
            "id": "MLA920600283",
            "site_id": "MLA",
            "title": "Mate Harry Potter C/ Bombilla",
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
              "id": "MLA920600283",
              "prices": [
                {
                  "id": "7",
                  "type": "standard",
                  "amount": 1500,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T20:58:22Z",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "exchange_rate_context": "DEFAULT",
                  "metadata": {
                  }
                },
                {
                  "id": "6",
                  "type": "standard",
                  "amount": 1400,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T20:58:21Z",
                  "conditions": {
                    "context_restrictions": [
                      "channel_mshops"
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
                  "id": "8",
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
                  "last_updated": "2022-09-29T20:58:23Z"
                }
              ],
              "purchase_discounts": [
              ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 3,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-05-08T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-920600283-mate-harry-potter-c-bombilla-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_692157-MLA45027770721_022021-I.jpg",
            "thumbnail_id": "692157-MLA45027770721_022021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 254.99,
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
                "attribute_group_name": "Otros",
                "value_name": "Bernal3dPrints",
                "value_struct": null,
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Bernal3dPrints"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              },
              {
                "attribute_group_name": "Otros",
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_id": "2230284",
                "value_name": "Nuevo",
                "value_struct": null,
                "values": [
                  {
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627
              }
            ],
            "original_price": null,
            "category_id": "MLA392282",
            "official_store_id": null,
            "domain_id": "MLA-MATE_GOURDS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "loyalty_discount_eligible",
              "standard_price_by_channel",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 25,
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
            "id": "MLA920557597",
            "site_id": "MLA",
            "title": "Mate Darth Vader Star Wars C/ Bombilla.",
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
              "id": "MLA920557597",
              "prices": [
                {
                  "id": "15",
                  "type": "standard",
                  "amount": 1500,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T20:55:43Z",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "exchange_rate_context": "DEFAULT",
                  "metadata": {
                  }
                },
                {
                  "id": "14",
                  "type": "standard",
                  "amount": 1400,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2022-09-29T20:55:43Z",
                  "conditions": {
                    "context_restrictions": [
                      "channel_mshops"
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
                  "id": "12",
                  "type": "min_standard",
                  "conditions": {
                    "context_restrictions": [
                      "channel_marketplace"
                    ],
                    "start_time": null,
                    "end_time": null,
                    "eligible": true
                  },
                  "amount": 1000,
                  "currency_id": "ARS",
                  "exchange_rate_context": "DEFAULT",
                  "tags": [
                  ],
                  "last_updated": "2022-09-29T20:54:39Z"
                }
              ],
              "purchase_discounts": [
              ]
            },
            "sale_price": null,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 2,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-05-08T17:45:55.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-920557597-mate-darth-vader-star-wars-c-bombilla-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_706092-MLA45120606028_032021-I.jpg",
            "thumbnail_id": "706092-MLA45120606028_032021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 254.99,
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
                "value_id": null,
                "value_name": "Bernal3dPrints",
                "values": [
                  {
                    "name": "Bernal3dPrints",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null
                  }
                ],
                "id": "BRAND",
                "name": "Marca",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "value_struct": null,
                "attribute_group_id": "OTHERS"
              },
              {
                "value_id": "2230284",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_name": "Nuevo",
                "value_struct": null,
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": "2230284",
                    "name": "Nuevo",
                    "struct": null
                  }
                ],
                "attribute_group_id": "OTHERS"
              }
            ],
            "original_price": null,
            "category_id": "MLA392282",
            "official_store_id": null,
            "domain_id": "MLA-MATE_GOURDS",
            "catalog_product_id": null,
            "tags": [
              "good_quality_picture",
              "loyalty_discount_eligible",
              "standard_price_by_channel",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 26,
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
            "id": "MLA927255414",
            "site_id": "MLA",
            "title": "Maceta Oslo/cactus/suculentas",
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
            "price": 600,
            "prices": {
              "id": "MLA927255414",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 600,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-06-26T23:09:28Z",
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
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2041-06-21T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-927255414-maceta-oslocactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_818941-MLA46530662556_062021-I.jpg",
            "thumbnail_id": "818941-MLA46530662556_062021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 6,
              "amount": 100,
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
                "value_struct": null,
                "value_id": null,
                "name": "Marca",
                "value_name": "Bernal 3D Prints",
                "values": [
                  {
                    "id": null,
                    "name": "Bernal 3D Prints",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "BRAND"
              },
              {
                "id": "ITEM_CONDITION",
                "value_id": "2230284",
                "value_struct": null,
                "values": [
                  {
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": "2230284"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "name": "Condición del ítem",
                "value_name": "Nuevo",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "values": [
                  {
                    "id": null,
                    "name": "11 cm",
                    "struct": {
                      "number": 11,
                      "unit": "cm"
                    },
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "value_struct": {
                  "number": 11,
                  "unit": "cm"
                },
                "attribute_group_id": "OTHERS",
                "id": "LENGTH",
                "name": "Largo",
                "value_id": null,
                "value_name": "11 cm"
              },
              {
                "value_id": null,
                "values": [
                  {
                    "name": "Oslo",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null
                  }
                ],
                "attribute_group_name": "Otros",
                "name": "Modelo",
                "value_name": "Oslo",
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "source": 2860837171021627,
                "id": "MODEL"
              },
              {
                "value_id": null,
                "attribute_group_name": "Otros",
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
                "name": "Unidades por envase",
                "value_name": "1"
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
              "loyalty_discount_eligible",
              "immediate_payment",
              "cart_eligible",
              "shipping_guaranteed"
            ],
            "order_backend": 27,
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
            "id": "MLA1109892210",
            "site_id": "MLA",
            "title": "Maceta Escultura Pack X 3 15cm/cactus/suculentas ",
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
            "price": 4190,
            "prices": {
              "id": "MLA1109892210",
              "prices": [
                {
                  "id": "1",
                  "type": "standard",
                  "amount": 4190,
                  "regular_amount": null,
                  "currency_id": "ARS",
                  "last_updated": "2021-10-26T20:39:35Z",
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
            "sold_quantity": 2,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2041-10-21T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-1109892210-maceta-escultura-pack-x-3-15cmcactussuculentas-_JM",
            "thumbnail": "http://http2.mlstatic.com/D_959690-MLA46729374461_072021-I.jpg",
            "thumbnail_id": "959690-MLA46729374461_072021",
            "accepts_mercadopago": true,
            "installments": {
              "quantity": 12,
              "amount": 712.27,
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
                "MLA-chg-threshold-ago-22"
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
                "value_name": "Bernal 3D Prints",
                "values": [
                  {
                    "struct": null,
                    "source": 2860837171021627,
                    "id": null,
                    "name": "Bernal 3D Prints"
                  }
                ],
                "value_id": null,
                "value_struct": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "id": "BRAND",
                "name": "Marca"
              },
              {
                "value_struct": null,
                "values": [
                  {
                    "name": "Nuevo",
                    "struct": null,
                    "source": 2860837171021627,
                    "id": "2230284"
                  }
                ],
                "attribute_group_id": "OTHERS",
                "id": "ITEM_CONDITION",
                "name": "Condición del ítem",
                "value_name": "Nuevo",
                "value_id": "2230284",
                "attribute_group_name": "Otros",
                "source": 2860837171021627
              },
              {
                "value_struct": null,
                "values": [
                  {
                    "name": null,
                    "struct": null,
                    "source": 3376461333454861,
                    "id": "-1"
                  }
                ],
                "source": 3376461333454861,
                "id": "LENGTH",
                "name": "Largo",
                "value_id": "-1",
                "value_name": null,
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
              },
              {
                "id": "MODEL",
                "name": "Modelo",
                "value_struct": null,
                "attribute_group_name": "Otros",
                "source": 2860837171021627,
                "value_id": null,
                "value_name": "Pack X 3",
                "values": [
                  {
                    "id": null,
                    "name": "Pack X 3",
                    "struct": null,
                    "source": 2860837171021627
                  }
                ],
                "attribute_group_id": "OTHERS"
              },
              {
                "id": "UNITS_PER_PACKAGE",
                "value_name": "3",
                "attribute_group_id": "OTHERS",
                "name": "Unidades por envase",
                "value_id": null,
                "value_struct": null,
                "values": [
                  {
                    "source": 2860837171021627,
                    "id": null,
                    "name": "3",
                    "struct": null
                  }
                ],
                "attribute_group_name": "Otros",
                "source": 2860837171021627
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
            "order_backend": 28,
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
        this.category_id = APIproduct.category_id;
        }
    }

    let products = query.results.map( (product) => new Product(product))
    
    setTimeout(()=>{resolve(products)}, 10)
    
    }
    )
}

export default getProducts


