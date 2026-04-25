const allProductsData = [
    {
        "id": 1,
        "name": "Vinagre de alcohol Casalta 1 l.",
        "price": 1565.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Casalta 1 l_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1565.0
            },
            {
                "date": "2026-03-21",
                "price": 1173.75
            },
            {
                "date": "2026-03-28",
                "price": 1565.0
            },
            {
                "date": "2026-04-08",
                "price": 1173.75
            },
            {
                "date": "2026-04-18",
                "price": 1565.0
            }
        ]
    },
    {
        "id": 2,
        "name": "Aceite de girasol Carrefour Classic  alto omega pet 900 cc.",
        "price": 3055.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Carrefour Classic  alt_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3186.6
            },
            {
                "date": "2026-03-28",
                "price": 2998.6
            },
            {
                "date": "2026-04-18",
                "price": 3092.6
            },
            {
                "date": "2026-04-25",
                "price": 3055.0
            }
        ]
    },
    {
        "id": 3,
        "name": "Aceite de girasol Carrefour Classic pet 900 ml",
        "price": 3055.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Carrefour Classic pet _10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2998.6
            },
            {
                "date": "2026-04-25",
                "price": 3055.0
            }
        ]
    },
    {
        "id": 4,
        "name": "Jugo de limón Bulnez en botella 1000 cc.",
        "price": 3290.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Jugo de limón Bulnez en botella 1000 cc_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3290.0
            }
        ]
    },
    {
        "id": 5,
        "name": "Aceite de girasol Legitimo 900 cc.",
        "price": 3329.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Legitimo 900 cc_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3329.0
            }
        ]
    },
    {
        "id": 6,
        "name": "Aceite de girasol Cocinero 900 cc.",
        "price": 3889.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Cocinero 900 cc_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3705.0
            },
            {
                "date": "2026-04-18",
                "price": 3889.0
            }
        ]
    },
    {
        "id": 7,
        "name": "Aceite en aerosol Cañuelas de girasol 187 cc.",
        "price": 3915.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite en aerosol Cañuelas de girasol 18_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3915.0
            }
        ]
    },
    {
        "id": 8,
        "name": "Aceite de girasol Pureza 900 cc.",
        "price": 4050.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Pureza 900 cc_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3240.0
            },
            {
                "date": "2026-04-02",
                "price": 4050.0
            },
            {
                "date": "2026-04-18",
                "price": 3439.0
            },
            {
                "date": "2026-04-25",
                "price": 4050.0
            }
        ]
    },
    {
        "id": 9,
        "name": "Aceite en aerosol Natura 120 cc.",
        "price": 4135.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite en aerosol Natura 120 cc_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4135.0
            }
        ]
    },
    {
        "id": 10,
        "name": "Aceite de girasol Natura 900 cc.",
        "price": 4195.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Natura 900 cc_9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4195.0
            }
        ]
    },
    {
        "id": 11,
        "name": "Agua mineral sin gas Carrefour Classic 2 lts",
        "price": 835.12,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Carrefour Classic 2_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1135.2
            },
            {
                "date": "2026-03-28",
                "price": 959.2
            },
            {
                "date": "2026-04-18",
                "price": 1223.2
            },
            {
                "date": "2026-04-25",
                "price": 835.12
            }
        ]
    },
    {
        "id": 12,
        "name": "Soda Bulnez 2,25 lts",
        "price": 1390.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Soda Bulnez 225 lts_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1190.0
            },
            {
                "date": "2026-04-18",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 13,
        "name": "Agua mineralizada sin gas Cellier Favaloro 2 lts",
        "price": 1490.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineralizada sin gas Cellier Favalo_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 14,
        "name": "Soda Carrefour Classic sifón 2 lts",
        "price": 1554.8,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Soda Carrefour Classic sifón 2 lts_0.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1553.88
            },
            {
                "date": "2026-03-28",
                "price": 1554.8
            }
        ]
    },
    {
        "id": 15,
        "name": "Soda saldan sifón 2 lts",
        "price": 1699.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Soda saldan sifón 2 lts_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1800.0
            },
            {
                "date": "2026-04-18",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 16,
        "name": "Agua mineralizada sin gas Glaciar bajo sodio 2 lts",
        "price": 2219.33,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineralizada sin gas Glaciar bajo s_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2106.0
            },
            {
                "date": "2026-04-25",
                "price": 2219.33
            }
        ]
    },
    {
        "id": 17,
        "name": "Agua de mesa sin gas Bulnez bidón 6,5 lts",
        "price": 2990.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua de mesa sin gas Bulnez bidón 65 lts_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2990.0
            }
        ]
    },
    {
        "id": 18,
        "name": "Agua mineral sin gas Villavicencio 2 lts",
        "price": 3050.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Villavicencio 2 lts_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2033.33
            },
            {
                "date": "2026-04-25",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 19,
        "name": "Agua de mesa sin gas Carrefour Classic bidón 6.5 lts",
        "price": 3092.6,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua de mesa sin gas Carrefour Classic b_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3092.6
            }
        ]
    },
    {
        "id": 20,
        "name": "Agua mineral Carrefour bidón 6,25 lts",
        "price": 3106.1,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral Carrefour bidón 625 lts_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3106.1
            }
        ]
    },
    {
        "id": 21,
        "name": "Alimento húmedo para gato Carrefour 85 g. frutos de mar",
        "price": 733.33,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Carrefour 85 g_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            },
            {
                "date": "2026-04-25",
                "price": 733.33
            }
        ]
    },
    {
        "id": 22,
        "name": "Alimento húmedo para gato Carrefour 85 g. salmón rosado",
        "price": 733.33,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Carrefour 85 g_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            },
            {
                "date": "2026-04-25",
                "price": 733.33
            }
        ]
    },
    {
        "id": 23,
        "name": "Alimento húmedo para gato Whiskas 85 g. salmón",
        "price": 1299.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Whiskas 85 g s_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 24,
        "name": "Alimento húmedo para gato Whiskas 85 g. carne",
        "price": 1299.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Whiskas 85 g c_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 25,
        "name": "Alimento húmedo para gato Whiskas 85 g. pollo",
        "price": 1299.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Whiskas 85 g p_2.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 26,
        "name": "Alimento húmedo para gato Whiskas 85 g. pavo",
        "price": 1299.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Whiskas 85 g p_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 27,
        "name": "Alimento húmedo para gato Whiskas 85 g. sardina",
        "price": 1299.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Whiskas 85 g s_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 28,
        "name": "Alimento húmedo para gatitos Whiskas 85 g. carne",
        "price": 1299.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gatitos Whiskas 85 _15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 29,
        "name": "Alimento seco para gato Raza 1 kg. pescado",
        "price": 4029.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Raza 1 kg pescad_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3689.0
            },
            {
                "date": "2026-04-02",
                "price": 2766.75
            },
            {
                "date": "2026-04-08",
                "price": 3689.0
            },
            {
                "date": "2026-04-18",
                "price": 3911.0
            },
            {
                "date": "2026-04-25",
                "price": 4029.0
            }
        ]
    },
    {
        "id": 30,
        "name": "Alimento seco para gato Raza 1 kg. carne, pescado y arroz",
        "price": 4029.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Raza 1 kg carne _10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3689.0
            },
            {
                "date": "2026-04-02",
                "price": 2766.75
            },
            {
                "date": "2026-04-08",
                "price": 3689.0
            },
            {
                "date": "2026-04-18",
                "price": 3911.0
            },
            {
                "date": "2026-04-25",
                "price": 4029.0
            }
        ]
    },
    {
        "id": 31,
        "name": "Arroz largo fino Bulnez 500 grs",
        "price": 649.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino Bulnez 500 grs_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 649.0
            }
        ]
    },
    {
        "id": 32,
        "name": "Arroz Molinos Ala largo fino 00000 bolsa 500 g.",
        "price": 1050.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz Molinos Ala largo fino 00000 bolsa_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 787.5
            },
            {
                "date": "2026-03-21",
                "price": 1050.0
            },
            {
                "date": "2026-03-28",
                "price": 787.5
            },
            {
                "date": "2026-04-08",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 33,
        "name": "Arroz blanco Shangrila 1 kg",
        "price": 1050.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz blanco Shangrila 1 kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 34,
        "name": "Arroz parboil Lucchetti 500 g.",
        "price": 1109.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz parboil Lucchetti 500 g_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1109.0
            },
            {
                "date": "2026-03-28",
                "price": 831.75
            },
            {
                "date": "2026-04-02",
                "price": 1109.0
            },
            {
                "date": "2026-04-18",
                "price": 831.75
            },
            {
                "date": "2026-04-25",
                "price": 1109.0
            }
        ]
    },
    {
        "id": 35,
        "name": "Arroz integral Molinos Ala bolsa 500 g.",
        "price": 1189.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz integral Molinos Ala bolsa 500 g_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1189.0
            }
        ]
    },
    {
        "id": 36,
        "name": "Arroz largo fino Bulnez 1 kg",
        "price": 1290.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino Bulnez 1 kg_9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 37,
        "name": "Arroz integral Gallo en bolsa 500 g.",
        "price": 1340.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz integral Gallo en bolsa 500 g_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1579.0
            },
            {
                "date": "2026-03-28",
                "price": 1184.25
            },
            {
                "date": "2026-04-08",
                "price": 1579.0
            },
            {
                "date": "2026-04-12",
                "price": 1340.0
            }
        ]
    },
    {
        "id": 38,
        "name": "Arroz largo fino 00000 Dos Hermanos bolsa 1 kg.",
        "price": 1770.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino 00000 Dos Hermanos bols_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1770.0
            }
        ]
    },
    {
        "id": 39,
        "name": "Arroz doble Gallo 500 g.",
        "price": 1870.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz doble Gallo 500 g_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1870.0
            }
        ]
    },
    {
        "id": 40,
        "name": "Arroz parboil Carrefour Classic en bolsa 1 kg.",
        "price": 1870.6,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz parboil Carrefour Classic en bolsa_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1870.6
            }
        ]
    },
    {
        "id": 41,
        "name": "Carne picada Novillo x kg",
        "price": 7200.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Carne picada Novillo x kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7200.0
            }
        ]
    },
    {
        "id": 42,
        "name": "Carne picada Swift congelada 500 g.",
        "price": 7500.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Carne picada Swift congelada 500 g_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            },
            {
                "date": "2026-03-21",
                "price": 7500.0
            }
        ]
    },
    {
        "id": 43,
        "name": "Carnaza común Novillo x kg.",
        "price": 9150.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Carnaza común Novillo x kg_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9150.0
            }
        ]
    },
    {
        "id": 44,
        "name": "Osobuco x kg.",
        "price": 11200.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Osobuco x kg_8.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 11200.0
            }
        ]
    },
    {
        "id": 45,
        "name": "Asado Novillo x kg.",
        "price": 11990.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Asado Novillo x kg_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13200.0
            },
            {
                "date": "2026-04-25",
                "price": 11990.0
            }
        ]
    },
    {
        "id": 46,
        "name": "Tapa de asado x kg.",
        "price": 12990.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Tapa de asado x kg_4.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 12990.0
            }
        ]
    },
    {
        "id": 47,
        "name": "Roast beef Novillo x kg.",
        "price": 14500.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Roast beef Novillo x kg_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13490.0
            },
            {
                "date": "2026-03-21",
                "price": 14500.0
            }
        ]
    },
    {
        "id": 48,
        "name": "Tapa de nalga Novillo x kg.",
        "price": 15700.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Tapa de nalga Novillo x kg_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 15700.0
            },
            {
                "date": "2026-04-18",
                "price": 13990.0
            },
            {
                "date": "2026-04-25",
                "price": 15700.0
            }
        ]
    },
    {
        "id": 49,
        "name": "Paleta x kg.",
        "price": 15900.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Paleta x kg_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 15900.0
            },
            {
                "date": "2026-04-08",
                "price": 14490.0
            },
            {
                "date": "2026-04-18",
                "price": 15900.0
            }
        ]
    },
    {
        "id": 50,
        "name": "Bife americano Novillo x kg.",
        "price": 16700.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Bife americano Novillo x kg_6.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 16700.0
            }
        ]
    },
    {
        "id": 51,
        "name": "Copos de maíz 3 Arroyos en bolsa 150 g.",
        "price": 980.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz 3 Arroyos en bolsa 150 g_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 980.0
            }
        ]
    },
    {
        "id": 52,
        "name": "Aritos de cereal 3 Arroyos frutado bolsa 160 g.",
        "price": 1429.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Aritos de cereal 3 Arroyos frutado bolsa_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1399.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 53,
        "name": "Copos de maíz 3 Arroyos azucarados bolsa 200 g.",
        "price": 1570.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz 3 Arroyos azucarados bolsa_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1570.0
            }
        ]
    },
    {
        "id": 54,
        "name": "Copos de maiz Granix 160 g.",
        "price": 1575.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maiz Granix 160 g_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1470.0
            },
            {
                "date": "2026-04-18",
                "price": 1575.0
            }
        ]
    },
    {
        "id": 55,
        "name": "Almohaditas rellenas Molino Ala de frutilla 90 g.",
        "price": 1600.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Almohaditas rellenas Molino Ala de fruti_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1139.25
            },
            {
                "date": "2026-03-21",
                "price": 1650.0
            },
            {
                "date": "2026-03-28",
                "price": 1237.5
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 56,
        "name": "Almohaditas rellenas Molinos Ala cacao y vainilla 90 g.",
        "price": 1600.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Almohaditas rellenas Molinos Ala cacao y_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1139.25
            },
            {
                "date": "2026-03-21",
                "price": 1650.0
            },
            {
                "date": "2026-03-28",
                "price": 1237.5
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 57,
        "name": "Copos de maíz 3 Arroyos bolsa 400 g.",
        "price": 1699.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz 3 Arroyos bolsa 400 g_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2205.0
            },
            {
                "date": "2026-03-21",
                "price": 1875.0
            },
            {
                "date": "2026-03-28",
                "price": 2159.0
            },
            {
                "date": "2026-04-08",
                "price": 2205.0
            },
            {
                "date": "2026-04-12",
                "price": 1875.0
            },
            {
                "date": "2026-04-18",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 58,
        "name": "Cereal Carrefour copitas con chocolate sin gluten 200 g.",
        "price": 1865.5,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Cereal Carrefour copitas con chocolate s_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1865.5
            }
        ]
    },
    {
        "id": 59,
        "name": "Cereal Carrefour anillitos fruta sin gluten 200 g.",
        "price": 1865.5,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Cereal Carrefour anillitos fruta sin glu_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1901.9
            },
            {
                "date": "2026-03-28",
                "price": 1810.9
            },
            {
                "date": "2026-04-18",
                "price": 1901.9
            },
            {
                "date": "2026-04-25",
                "price": 1865.5
            }
        ]
    },
    {
        "id": 60,
        "name": "Copos de maíz azucarados Skarchitos 500 g.",
        "price": 3499.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz azucarados Skarchitos 500 _8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3499.0
            }
        ]
    },
    {
        "id": 61,
        "name": "Cerveza rubia Brahma 354 ml",
        "price": 966.75,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Brahma 354 ml_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 966.75
            }
        ]
    },
    {
        "id": 62,
        "name": "Cerveza blanca Quilmes Bajo cero en lata 473 ml",
        "price": 1106.25,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes Bajo cero en lata_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1068.75
            },
            {
                "date": "2026-03-21",
                "price": 1475.0
            },
            {
                "date": "2026-03-28",
                "price": 1106.25
            },
            {
                "date": "2026-04-18",
                "price": 990.0
            },
            {
                "date": "2026-04-25",
                "price": 1106.25
            }
        ]
    },
    {
        "id": 63,
        "name": "Cerveza negra Mecklenburger Premium Dunkel 500 ml",
        "price": 1490.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza negra Mecklenburger Premium Dunk_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 64,
        "name": "Cerveza blanca Amstel Lager pura malta 473 ml",
        "price": 1625.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Amstel Lager pura malta 4_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1691.25
            },
            {
                "date": "2026-04-02",
                "price": 2255.0
            },
            {
                "date": "2026-04-08",
                "price": 2500.0
            },
            {
                "date": "2026-04-25",
                "price": 1625.0
            }
        ]
    },
    {
        "id": 65,
        "name": "Cerveza blanca sin alcohol Corona 0.0% 330 ml",
        "price": 1700.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca sin alcohol Corona 00 330_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1980.0
            },
            {
                "date": "2026-04-02",
                "price": 2040.0
            },
            {
                "date": "2026-04-08",
                "price": 1700.0
            },
            {
                "date": "2026-04-18",
                "price": 2550.0
            },
            {
                "date": "2026-04-25",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 66,
        "name": "Cerveza rubia Budweiser 473 ml",
        "price": 1725.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Budweiser 473 ml_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1875.0
            },
            {
                "date": "2026-03-21",
                "price": 1709.5
            },
            {
                "date": "2026-03-28",
                "price": 1972.5
            },
            {
                "date": "2026-04-08",
                "price": 1753.33
            },
            {
                "date": "2026-04-12",
                "price": 1533.33
            },
            {
                "date": "2026-04-18",
                "price": 1725.0
            }
        ]
    },
    {
        "id": 67,
        "name": "Cerveza rubia Brahma 473 ml",
        "price": 1875.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Brahma 473 ml_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1800.0
            },
            {
                "date": "2026-03-21",
                "price": 1875.0
            }
        ]
    },
    {
        "id": 68,
        "name": "Cerveza sin alcohol Heineken en lata 473 ml",
        "price": 2015.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza sin alcohol Heineken en lata 473_9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2015.0
            }
        ]
    },
    {
        "id": 69,
        "name": "Cerveza blanca Stella Artois 473 ml",
        "price": 2340.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Stella Artois 473 ml_1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2700.0
            },
            {
                "date": "2026-04-25",
                "price": 2340.0
            }
        ]
    },
    {
        "id": 70,
        "name": "Cerveza blanca Quilmes 1890 retornable 1 lt",
        "price": 2625.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes 1890 retornable 1_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2625.0
            }
        ]
    },
    {
        "id": 71,
        "name": "Aperitivo sin alcohol Serrano Carrefour Classic 1,5 lts",
        "price": 1100.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Carrefour _15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 72,
        "name": "Aperitivo sin alcohol Limón Terma Light 1,75 lts",
        "price": 2360.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Limón Terma Light _4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2363.0
            },
            {
                "date": "2026-03-21",
                "price": 3029.0
            },
            {
                "date": "2026-03-28",
                "price": 2360.0
            },
            {
                "date": "2026-04-02",
                "price": 3029.0
            },
            {
                "date": "2026-04-12",
                "price": 3149.0
            },
            {
                "date": "2026-04-25",
                "price": 2360.0
            }
        ]
    },
    {
        "id": 73,
        "name": "Aperitivo sin alcohol Serrano Terma 1,7 lts",
        "price": 2360.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Terma 17 l_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2363.0
            },
            {
                "date": "2026-03-21",
                "price": 3029.0
            },
            {
                "date": "2026-03-28",
                "price": 2360.0
            },
            {
                "date": "2026-04-02",
                "price": 3029.0
            },
            {
                "date": "2026-04-12",
                "price": 3149.0
            },
            {
                "date": "2026-04-25",
                "price": 2360.0
            }
        ]
    },
    {
        "id": 74,
        "name": "Aperitivo sin alcohol Pomelo Rosado Terma 1,75 lts",
        "price": 2360.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Pomelo Rosado Term_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2363.0
            },
            {
                "date": "2026-03-21",
                "price": 3029.0
            },
            {
                "date": "2026-03-28",
                "price": 2360.0
            },
            {
                "date": "2026-04-02",
                "price": 3029.0
            },
            {
                "date": "2026-04-12",
                "price": 3149.0
            },
            {
                "date": "2026-04-25",
                "price": 2360.0
            }
        ]
    },
    {
        "id": 75,
        "name": "Aperitivo sin alcohol Gancia americano 0% en lata 473 ml",
        "price": 2640.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Gancia americano 0_5.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2000.0
            },
            {
                "date": "2026-03-28",
                "price": 2093.0
            },
            {
                "date": "2026-04-02",
                "price": 2399.0
            },
            {
                "date": "2026-04-18",
                "price": 2100.0
            },
            {
                "date": "2026-04-25",
                "price": 2640.0
            }
        ]
    },
    {
        "id": 76,
        "name": "Aperitivo sin alcohol Serrano Terma Cero 1,35 lts",
        "price": 2699.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Terma Cero_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2599.0
            },
            {
                "date": "2026-03-21",
                "price": 2025.0
            },
            {
                "date": "2026-03-28",
                "price": 2599.0
            },
            {
                "date": "2026-04-08",
                "price": 2025.0
            },
            {
                "date": "2026-04-18",
                "price": 2699.0
            }
        ]
    },
    {
        "id": 77,
        "name": "Aperitivo sin alcohol Limón Terma Cero 1,35 lts",
        "price": 2699.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Limón Terma Cero 1_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2599.0
            },
            {
                "date": "2026-03-21",
                "price": 2025.0
            },
            {
                "date": "2026-03-28",
                "price": 2599.0
            },
            {
                "date": "2026-04-08",
                "price": 2025.0
            },
            {
                "date": "2026-04-18",
                "price": 2699.0
            }
        ]
    },
    {
        "id": 78,
        "name": "Aperitivo sin alcohol Patagónico Terma Cero 1,35 lts",
        "price": 2699.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Patagónico Terma C_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2599.0
            },
            {
                "date": "2026-03-21",
                "price": 2025.0
            },
            {
                "date": "2026-03-28",
                "price": 2599.0
            },
            {
                "date": "2026-04-08",
                "price": 2025.0
            },
            {
                "date": "2026-04-18",
                "price": 2699.0
            }
        ]
    },
    {
        "id": 79,
        "name": "Aperitivo sin alcohol Pomelo Terma sin azúcar 1,35 lts",
        "price": 2699.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Pomelo Terma sin a_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2699.0
            }
        ]
    },
    {
        "id": 80,
        "name": "Aperitivo americano Gancia en botella 950 ml",
        "price": 7388.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo americano Gancia en botella 95_1.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 8689.0
            },
            {
                "date": "2026-04-25",
                "price": 7388.0
            }
        ]
    },
    {
        "id": 81,
        "name": "Jamón cocido feteado Bulnez 150 grs",
        "price": 2210.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido feteado Bulnez 150 grs_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3400.0
            },
            {
                "date": "2026-03-28",
                "price": 1700.0
            },
            {
                "date": "2026-04-02",
                "price": 3400.0
            },
            {
                "date": "2026-04-08",
                "price": 2210.0
            },
            {
                "date": "2026-04-18",
                "price": 3400.0
            },
            {
                "date": "2026-04-25",
                "price": 2210.0
            }
        ]
    },
    {
        "id": 82,
        "name": "Leberwurst Paladini 250 g.",
        "price": 2900.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Leberwurst Paladini 250 g_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3029.0
            },
            {
                "date": "2026-03-28",
                "price": 2190.0
            },
            {
                "date": "2026-04-02",
                "price": 3029.0
            },
            {
                "date": "2026-04-08",
                "price": 2190.0
            },
            {
                "date": "2026-04-18",
                "price": 2490.0
            },
            {
                "date": "2026-04-25",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 83,
        "name": "Lomo de cerdo feteado Bocatti horneado 70 g.",
        "price": 3555.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Lomo de cerdo feteado Bocatti horneado 7_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3555.0
            }
        ]
    },
    {
        "id": 84,
        "name": "Lomito feteado 150 g.",
        "price": 3610.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Lomito feteado 150 g_8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3610.0
            }
        ]
    },
    {
        "id": 85,
        "name": "Lomo de cerdo feteado Paladini 120 g.",
        "price": 4020.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Lomo de cerdo feteado Paladini 120 g_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4020.0
            },
            {
                "date": "2026-03-28",
                "price": 3090.0
            },
            {
                "date": "2026-04-02",
                "price": 4020.0
            },
            {
                "date": "2026-04-08",
                "price": 3090.0
            },
            {
                "date": "2026-04-18",
                "price": 4020.0
            }
        ]
    },
    {
        "id": 86,
        "name": "Jamón cocido Paladini 150 g.",
        "price": 4390.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido Paladini 150 g_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4899.0
            },
            {
                "date": "2026-04-25",
                "price": 4390.0
            }
        ]
    },
    {
        "id": 87,
        "name": "Salame tipo milán Lario picado fino feteado 150 g.",
        "price": 4390.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Salame tipo milán Lario picado fino fete_10.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 5490.0
            },
            {
                "date": "2026-04-08",
                "price": 4390.0
            }
        ]
    },
    {
        "id": 88,
        "name": "Mortadela Paladini mini 300 g.",
        "price": 4500.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Mortadela Paladini mini 300 g_9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3290.0
            },
            {
                "date": "2026-03-28",
                "price": 4399.0
            },
            {
                "date": "2026-04-02",
                "price": 3290.0
            },
            {
                "date": "2026-04-08",
                "price": 4399.0
            },
            {
                "date": "2026-04-12",
                "price": 4649.0
            },
            {
                "date": "2026-04-25",
                "price": 4500.0
            }
        ]
    },
    {
        "id": 89,
        "name": "Jamón cocido feteado Paladini 200 g.",
        "price": 5490.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido feteado Paladini 200 g_3.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 5490.0
            }
        ]
    },
    {
        "id": 90,
        "name": "Jamón crudo Puente de Ronda 150 grs",
        "price": 6420.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón crudo Puente de Ronda 150 grs_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6420.0
            }
        ]
    },
    {
        "id": 91,
        "name": "Gaseosa cola Cunnington suave sin tacc 2,25 lts",
        "price": 2499.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Cunnington suave sin tacc 2_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2450.0
            },
            {
                "date": "2026-03-21",
                "price": 2499.0
            }
        ]
    },
    {
        "id": 92,
        "name": "Gaseosa pomelo Cunnignton suave sin tacc 2,25 lts",
        "price": 2499.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa pomelo Cunnignton suave sin tacc_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2450.0
            },
            {
                "date": "2026-03-21",
                "price": 2499.0
            }
        ]
    },
    {
        "id": 93,
        "name": "Gaseosa cola Pepsi Black pet 1,5 lts",
        "price": 2765.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Pepsi Black pet 15 lts_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2775.0
            },
            {
                "date": "2026-03-28",
                "price": 2590.0
            },
            {
                "date": "2026-04-02",
                "price": 2466.67
            },
            {
                "date": "2026-04-08",
                "price": 2405.0
            },
            {
                "date": "2026-04-18",
                "price": 2775.0
            },
            {
                "date": "2026-04-25",
                "price": 2765.0
            }
        ]
    },
    {
        "id": 94,
        "name": "Gaseosa lima limón 7 Up sin azúcar 1,5 lts",
        "price": 2962.5,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa lima limón 7 Up sin azúcar 15 lt_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2775.0
            },
            {
                "date": "2026-04-02",
                "price": 2466.67
            },
            {
                "date": "2026-04-08",
                "price": 2405.0
            },
            {
                "date": "2026-04-18",
                "price": 2775.0
            },
            {
                "date": "2026-04-25",
                "price": 2962.5
            }
        ]
    },
    {
        "id": 95,
        "name": "Gaseosa tónica Paso de los Toros 1,5 lts",
        "price": 2962.5,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa tónica Paso de los Toros 15 lts_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2775.0
            },
            {
                "date": "2026-04-02",
                "price": 2466.67
            },
            {
                "date": "2026-04-08",
                "price": 2775.0
            },
            {
                "date": "2026-04-25",
                "price": 2962.5
            }
        ]
    },
    {
        "id": 96,
        "name": "Gaseosa lima limón 7 Up regular 1,5 lts",
        "price": 2962.5,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa lima limón 7 Up regular 15 lts_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2962.5
            }
        ]
    },
    {
        "id": 97,
        "name": "Gaseosa cola Coca Cola Zero 1,25 lts",
        "price": 2999.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Coca Cola Zero 125 lts_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2915.0
            },
            {
                "date": "2026-04-02",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 98,
        "name": "Gaseosa cola Coca Cola sabor original 1,25 lts",
        "price": 2999.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Coca Cola sabor original 12_9.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 99,
        "name": "Gaseosa cola regular Pepsi 2 lts.",
        "price": 3080.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola regular Pepsi 2 lts_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2940.0
            },
            {
                "date": "2026-04-02",
                "price": 2800.0
            },
            {
                "date": "2026-04-08",
                "price": 3150.0
            },
            {
                "date": "2026-04-25",
                "price": 3080.0
            }
        ]
    },
    {
        "id": 100,
        "name": "Gaseosa cola Pepsi Black pet 2 lts",
        "price": 3300.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Pepsi Black pet 2 lts_1.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2800.0
            },
            {
                "date": "2026-04-08",
                "price": 2730.0
            },
            {
                "date": "2026-04-18",
                "price": 3150.0
            },
            {
                "date": "2026-04-25",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 101,
        "name": "Medallón de merluza rebozados 100 g.",
        "price": 899.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de merluza rebozados 100 g_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 949.0
            },
            {
                "date": "2026-03-21",
                "price": 1070.0
            },
            {
                "date": "2026-04-02",
                "price": 949.0
            },
            {
                "date": "2026-04-08",
                "price": 1070.0
            },
            {
                "date": "2026-04-18",
                "price": 910.0
            },
            {
                "date": "2026-04-25",
                "price": 899.0
            }
        ]
    },
    {
        "id": 102,
        "name": "Hamburguesa congelada Carrefour 2 u.",
        "price": 3020.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa congelada Carrefour 2 u_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2800.0
            },
            {
                "date": "2026-03-21",
                "price": 1950.0
            },
            {
                "date": "2026-03-28",
                "price": 2800.0
            },
            {
                "date": "2026-04-02",
                "price": 2100.0
            },
            {
                "date": "2026-04-08",
                "price": 2800.0
            },
            {
                "date": "2026-04-25",
                "price": 3020.0
            }
        ]
    },
    {
        "id": 103,
        "name": "Hamburguesas de pollo Granja tres Arroyos 166 g.",
        "price": 3200.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesas de pollo Granja tres Arroyo_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2400.0
            },
            {
                "date": "2026-04-08",
                "price": 3200.0
            }
        ]
    },
    {
        "id": 104,
        "name": "Medallón de carne Paty express en caja 4 uni",
        "price": 5955.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de carne Paty express en caja 4_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4050.0
            },
            {
                "date": "2026-03-21",
                "price": 5780.0
            },
            {
                "date": "2026-03-28",
                "price": 5400.0
            },
            {
                "date": "2026-04-08",
                "price": 4050.0
            },
            {
                "date": "2026-04-18",
                "price": 5955.0
            }
        ]
    },
    {
        "id": 105,
        "name": "Hamburguesa Swift clásica 4 u.",
        "price": 6074.25,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa Swift clásica 4 u_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7370.0
            },
            {
                "date": "2026-03-21",
                "price": 5527.5
            },
            {
                "date": "2026-03-28",
                "price": 7740.0
            },
            {
                "date": "2026-04-02",
                "price": 7470.0
            },
            {
                "date": "2026-04-12",
                "price": 7740.0
            },
            {
                "date": "2026-04-18",
                "price": 8099.0
            },
            {
                "date": "2026-04-25",
                "price": 6074.25
            }
        ]
    },
    {
        "id": 106,
        "name": "Medallón de pollo Swift 4 u.",
        "price": 7349.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de pollo Swift 4 u_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 7349.0
            }
        ]
    },
    {
        "id": 107,
        "name": "Medallón de carne sin tacc Good Mark en caja 4 uni",
        "price": 7810.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de carne sin tacc Good Mark en _15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7299.0
            },
            {
                "date": "2026-03-21",
                "price": 5474.25
            },
            {
                "date": "2026-03-28",
                "price": 7810.0
            },
            {
                "date": "2026-04-18",
                "price": 5857.5
            },
            {
                "date": "2026-04-25",
                "price": 7810.0
            }
        ]
    },
    {
        "id": 108,
        "name": "Hamburguesa Paty 72 g. caja x 4 uni",
        "price": 8165.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa Paty 72 g caja x 4 uni_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7409.0
            },
            {
                "date": "2026-03-21",
                "price": 7929.0
            },
            {
                "date": "2026-04-02",
                "price": 5946.75
            },
            {
                "date": "2026-04-08",
                "price": 7929.0
            },
            {
                "date": "2026-04-18",
                "price": 8165.0
            }
        ]
    },
    {
        "id": 109,
        "name": "Hamburguesa Paty clásico en caja 4 uni",
        "price": 9150.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa Paty clásico en caja 4 uni_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 8300.0
            },
            {
                "date": "2026-03-21",
                "price": 8885.0
            },
            {
                "date": "2026-04-02",
                "price": 6663.75
            },
            {
                "date": "2026-04-08",
                "price": 8885.0
            },
            {
                "date": "2026-04-18",
                "price": 9150.0
            }
        ]
    },
    {
        "id": 110,
        "name": "Hamburguesa de carne Unión ganadera 4 uni",
        "price": 10439.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa de carne Unión ganadera 4 un_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7237.5
            },
            {
                "date": "2026-03-21",
                "price": 10000.0
            },
            {
                "date": "2026-03-28",
                "price": 10135.0
            },
            {
                "date": "2026-04-08",
                "price": 7601.25
            },
            {
                "date": "2026-04-18",
                "price": 10135.0
            },
            {
                "date": "2026-04-25",
                "price": 10439.0
            }
        ]
    },
    {
        "id": 111,
        "name": "Harina de trigo 000 Chacabuco 1 kg.",
        "price": 690.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de trigo 000 Chacabuco 1 kg_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 690.0
            }
        ]
    },
    {
        "id": 112,
        "name": "Harina de Trigo 000 Caserita x 1 kg",
        "price": 899.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de Trigo 000 Caserita x 1 kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 899.0
            }
        ]
    },
    {
        "id": 113,
        "name": "Harina de trigo Tassara tipo 000 1 kg.",
        "price": 935.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de trigo Tassara tipo 000 1 kg_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 935.0
            }
        ]
    },
    {
        "id": 114,
        "name": "Harina de trigo 0000 Chacabuco 1 kg.",
        "price": 966.75,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de trigo 0000 Chacabuco 1 kg_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 966.75
            }
        ]
    },
    {
        "id": 115,
        "name": "Harina de trigo Morixe 000 1 kg.",
        "price": 979.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de trigo Morixe 000 1 kg_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 599.0
            },
            {
                "date": "2026-03-21",
                "price": 979.0
            }
        ]
    },
    {
        "id": 116,
        "name": "Harina de trigo Morixe 0000 1 kg.",
        "price": 1299.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de trigo Morixe 0000 1 kg_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 117,
        "name": "Avena instantanea Carrefour Classic pouch 300 g.",
        "price": 1385.7,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Avena instantanea Carrefour Classic pouc_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1478.7
            },
            {
                "date": "2026-03-28",
                "price": 1385.7
            }
        ]
    },
    {
        "id": 118,
        "name": "Harina fina integral Tassara 1 kg.",
        "price": 1409.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina fina integral Tassara 1 kg_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1409.0
            }
        ]
    },
    {
        "id": 119,
        "name": "Harina leudante Chacabuco 1 kg",
        "price": 1479.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina leudante Chacabuco 1 kg_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1008.75
            },
            {
                "date": "2026-03-21",
                "price": 1345.0
            },
            {
                "date": "2026-03-28",
                "price": 1479.0
            }
        ]
    },
    {
        "id": 120,
        "name": "Polenta instantánea Presto Pronta en bolsa 490 g.",
        "price": 1500.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Polenta instantánea Presto Pronta en bol_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 121,
        "name": "Bebida energizante Rockstar de maracuyá pet 500 ml",
        "price": 1275.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Rockstar de maracuyá _9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 122,
        "name": "Bebida energizante Speed 473 ml",
        "price": 2659.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Speed 473 ml_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1994.25
            },
            {
                "date": "2026-03-21",
                "price": 2659.0
            }
        ]
    },
    {
        "id": 123,
        "name": "Bebida energizante Red Bull Watermelon 250 ml",
        "price": 2719.15,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Red Bull Watermelon 2_10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2399.25
            },
            {
                "date": "2026-04-08",
                "price": 3199.0
            },
            {
                "date": "2026-04-25",
                "price": 2719.15
            }
        ]
    },
    {
        "id": 124,
        "name": "Bebida energizante Red Bull Sugar Free 250 ml",
        "price": 2719.15,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Red Bull Sugar Free 2_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2719.15
            }
        ]
    },
    {
        "id": 125,
        "name": "Bebida energizante Speed Zero Sugar 473 ml",
        "price": 2785.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Speed Zero Sugar 473 _6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1986.75
            },
            {
                "date": "2026-03-21",
                "price": 2785.0
            }
        ]
    },
    {
        "id": 126,
        "name": "Bebida energizante Monster Peachy Keen 473 ml",
        "price": 3100.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Monster Peachy Keen 4_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3100.0
            }
        ]
    },
    {
        "id": 127,
        "name": "Bebida energizante sin azúcar Monster energy en lata 473 cc.",
        "price": 3200.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante sin azúcar Monster en_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            },
            {
                "date": "2026-04-02",
                "price": 3200.0
            }
        ]
    },
    {
        "id": 128,
        "name": "Bebida energizante Monster Mango Loco 473 ml",
        "price": 3200.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Monster Mango Loco 47_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            },
            {
                "date": "2026-04-02",
                "price": 3200.0
            }
        ]
    },
    {
        "id": 129,
        "name": "Bebida energizante Monster green en lata 473 cc.",
        "price": 3200.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Monster green en lata_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3200.0
            }
        ]
    },
    {
        "id": 130,
        "name": "Bebida energizante Monster Pipeline Punch 473 ml",
        "price": 3200.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Monster Pipeline Punc_4.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3200.0
            }
        ]
    },
    {
        "id": 131,
        "name": "Jugo en Polvo Clight Naranja Dulce 7,5 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Naranja Dulce 75 gr_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            },
            {
                "date": "2026-04-02",
                "price": 244.5
            },
            {
                "date": "2026-04-08",
                "price": 489.0
            },
            {
                "date": "2026-04-18",
                "price": 326.0
            },
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 132,
        "name": "Jugo en Polvo Clight Manzana Deliciosa 7 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Manzana Deliciosa 7_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            },
            {
                "date": "2026-04-02",
                "price": 244.5
            },
            {
                "date": "2026-04-08",
                "price": 489.0
            },
            {
                "date": "2026-04-18",
                "price": 326.0
            },
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 133,
        "name": "Jugo en Polvo Clight Limonada Arandanos 7,5 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada Arandanos _2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            },
            {
                "date": "2026-04-02",
                "price": 244.5
            },
            {
                "date": "2026-04-08",
                "price": 489.0
            },
            {
                "date": "2026-04-18",
                "price": 326.0
            },
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 134,
        "name": "Jugo en Polvo Clight Naranja Durazno 7,5 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Naranja Durazno 75 _3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            },
            {
                "date": "2026-04-02",
                "price": 244.5
            },
            {
                "date": "2026-04-08",
                "price": 489.0
            },
            {
                "date": "2026-04-18",
                "price": 326.0
            },
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 135,
        "name": "Jugo en Polvo Clight Limonada 8 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada 8 grs_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            },
            {
                "date": "2026-04-02",
                "price": 244.5
            },
            {
                "date": "2026-04-08",
                "price": 489.0
            },
            {
                "date": "2026-04-18",
                "price": 326.0
            },
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 136,
        "name": "Jugo en Polvo Clight Pomelo Rosado 8 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Pomelo Rosado 8 grs_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            },
            {
                "date": "2026-04-02",
                "price": 244.5
            },
            {
                "date": "2026-04-08",
                "price": 489.0
            },
            {
                "date": "2026-04-18",
                "price": 326.0
            },
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 137,
        "name": "Jugo en Polvo Clight Limonada Maracuyá 7,5 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada Maracuyá 7_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 138,
        "name": "Jugo en polvo Clight limonada rosa 8 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Clight limonada rosa 8 grs_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 139,
        "name": "Jugo en polvo Clight ananá 7grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Clight ananá 7grs_9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 140,
        "name": "Jugo Clight Pomelada Hibiscus 8 grs",
        "price": 317.85,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo Clight Pomelada Hibiscus 8 grs_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 317.85
            }
        ]
    },
    {
        "id": 141,
        "name": "Actimel sabor naranja vitamina C 100 grs",
        "price": 1380.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Actimel sabor naranja vitamina C 100 grs_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1380.0
            }
        ]
    },
    {
        "id": 142,
        "name": "Leche ulta parcial descremada Carrefour classic sachet 1 lt.",
        "price": 1426.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche ulta parcial descremada Carrefour _7.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            },
            {
                "date": "2026-04-18",
                "price": 1462.8
            },
            {
                "date": "2026-04-25",
                "price": 1426.0
            }
        ]
    },
    {
        "id": 143,
        "name": "Leche ultra entera Carrefour classic sachet 1 lt.",
        "price": 1426.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche ultra entera Carrefour classic sac_10.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            },
            {
                "date": "2026-04-18",
                "price": 1462.8
            },
            {
                "date": "2026-04-25",
                "price": 1426.0
            }
        ]
    },
    {
        "id": 144,
        "name": "Leche UAT parcialmente descremada Carrefour classic brik 1 lt.",
        "price": 1739.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche UAT parcialmente descremada Carref_0.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            },
            {
                "date": "2026-04-18",
                "price": 1776.6
            },
            {
                "date": "2026-04-25",
                "price": 1739.0
            }
        ]
    },
    {
        "id": 145,
        "name": "Leche UAT entera Carrefour classic brik 1 lt.",
        "price": 1739.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche UAT entera Carrefour classic brik _4.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            },
            {
                "date": "2026-04-18",
                "price": 1776.6
            },
            {
                "date": "2026-04-25",
                "price": 1739.0
            }
        ]
    },
    {
        "id": 146,
        "name": "Leche parcialmente descremada UAT Carrefour classic tetra 1 lt.",
        "price": 1739.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche parcialmente descremada UAT Carref_8.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            },
            {
                "date": "2026-04-18",
                "price": 1776.6
            },
            {
                "date": "2026-04-25",
                "price": 1739.0
            }
        ]
    },
    {
        "id": 147,
        "name": "Leche entera UAT Carrefour classic tetra 1 lt.",
        "price": 1739.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche entera UAT Carrefour classic tetra_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            },
            {
                "date": "2026-04-18",
                "price": 1776.6
            },
            {
                "date": "2026-04-25",
                "price": 1739.0
            }
        ]
    },
    {
        "id": 148,
        "name": "Leche La serenisima liviana 1% 1L",
        "price": 1927.5,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche La serenisima liviana 1 1L_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1927.5
            }
        ]
    },
    {
        "id": 149,
        "name": "Leche La serenisima clásica 3% 1L.",
        "price": 1927.5,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche La serenisima clásica 3 1L_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1927.5
            }
        ]
    },
    {
        "id": 150,
        "name": "Leche La Serenísima ultra entera multivit 3% sachet 1 lt",
        "price": 1930.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche La Serenísima ultra entera multivi_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1780.0
            },
            {
                "date": "2026-04-25",
                "price": 1930.0
            }
        ]
    },
    {
        "id": 151,
        "name": "Limpiador multiuso Multimax para diluir lavanda (rinde 5 litros) 150 ml.",
        "price": 1800.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1690.0
            },
            {
                "date": "2026-03-28",
                "price": 1267.5
            },
            {
                "date": "2026-04-02",
                "price": 1098.5
            },
            {
                "date": "2026-04-08",
                "price": 1690.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 152,
        "name": "Limpiador multiuso Multimax para diluir marina (rinde 5 litros) 150 ml.",
        "price": 1800.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 153,
        "name": "Limpiador multiuso Multimax para diluir cherry (rinde 5 litros) 150 ml.",
        "price": 1800.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1690.0
            },
            {
                "date": "2026-03-28",
                "price": 1267.5
            },
            {
                "date": "2026-04-02",
                "price": 1098.5
            },
            {
                "date": "2026-04-08",
                "price": 1690.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 154,
        "name": "Limpiador multiuso Multimax para diluir citrico limon (rinde 5 litros) 150 ml.",
        "price": 1800.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1098.5
            },
            {
                "date": "2026-04-08",
                "price": 1690.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 155,
        "name": "Limpiador líquido aromatizante Poett frescura de lavanda 900 ml.",
        "price": 2279.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido aromatizante Poett fre_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2279.0
            }
        ]
    },
    {
        "id": 156,
        "name": "Limpiador Multisuperficies Cif Original Ultra Brillo Doypack 380 ml",
        "price": 2309.25,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Multisuperficies Cif Original _9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2860.0
            },
            {
                "date": "2026-03-28",
                "price": 2145.0
            },
            {
                "date": "2026-04-02",
                "price": 2860.0
            },
            {
                "date": "2026-04-08",
                "price": 2145.0
            },
            {
                "date": "2026-04-18",
                "price": 3079.0
            },
            {
                "date": "2026-04-25",
                "price": 2309.25
            }
        ]
    },
    {
        "id": 157,
        "name": "Limpiador líquido Procenex pisos marina 1.8 l.",
        "price": 2917.5,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos marina _7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3890.0
            },
            {
                "date": "2026-04-25",
                "price": 2917.5
            }
        ]
    },
    {
        "id": 158,
        "name": "Limpiador líquido Procenex pisos flores de jardín 1.8 l.",
        "price": 2917.5,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos flores _12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2917.5
            }
        ]
    },
    {
        "id": 159,
        "name": "Limpiador Cif repuesto pisos plastificados 450 cc.",
        "price": 3235.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Cif repuesto pisos plastificad_13.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2969.0
            },
            {
                "date": "2026-04-12",
                "price": 3235.0
            }
        ]
    },
    {
        "id": 160,
        "name": "Limpiador líquido aromatizante Poett alegra tu día 1.8 lts.",
        "price": 3995.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido aromatizante Poett ale_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3995.0
            }
        ]
    },
    {
        "id": 161,
        "name": "Alimento húmedo para perro Carrefour 100 g. adultos carne",
        "price": 733.33,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Carrefour 100_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            },
            {
                "date": "2026-04-25",
                "price": 733.33
            }
        ]
    },
    {
        "id": 162,
        "name": "Alimento húmedo para perro Carrefour pollo 100 g.",
        "price": 733.33,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Carrefour pol_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1100.0
            },
            {
                "date": "2026-04-25",
                "price": 733.33
            }
        ]
    },
    {
        "id": 163,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pequeños carne",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 164,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pequeños pollo",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _2.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 165,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos carne",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 166,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pollo",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 167,
        "name": "Snack para perros Pedigree Biscrok 100 g.",
        "price": 2038.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Snack para perros Pedigree Biscrok 100 g_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2038.0
            }
        ]
    },
    {
        "id": 168,
        "name": "Snack para perros Pedigree Dentastix 7 u. razas medianas",
        "price": 4959.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Snack para perros Pedigree Dentastix 7 u_4.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4959.0
            }
        ]
    },
    {
        "id": 169,
        "name": "Alimento seco para perro Voraz adultos sabor carne 15 kg",
        "price": 21799.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Voraz adultos s_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 21799.0
            },
            {
                "date": "2026-04-18",
                "price": 17400.0
            },
            {
                "date": "2026-04-25",
                "price": 21799.0
            }
        ]
    },
    {
        "id": 170,
        "name": "Alimento seco para perro Matute 15 kg. adultos",
        "price": 22390.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Matute 15 kg ad_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 16792.5
            },
            {
                "date": "2026-04-18",
                "price": 22390.0
            }
        ]
    },
    {
        "id": 171,
        "name": "Pañal Carrefour baby talle XXG hiperpack 26 uni",
        "price": 8190.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Carrefour baby talle XXG hiperpack_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 8190.0
            }
        ]
    },
    {
        "id": 172,
        "name": "Pañal Carrefour baby talle XG hiperpack 28 uni",
        "price": 8190.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Carrefour baby talle XG hiperpack _2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 10330.6
            },
            {
                "date": "2026-04-25",
                "price": 8190.0
            }
        ]
    },
    {
        "id": 173,
        "name": "Pañales talle XG Toddler Deluxe 30 uni",
        "price": 9735.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle XG Toddler Deluxe 30 uni_3.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 19470.0
            },
            {
                "date": "2026-04-18",
                "price": 9735.0
            }
        ]
    },
    {
        "id": 174,
        "name": "Pañales talle M Toddler Deluxe 46 uni",
        "price": 9735.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle M Toddler Deluxe 46 uni_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 19470.0
            },
            {
                "date": "2026-04-18",
                "price": 9735.0
            }
        ]
    },
    {
        "id": 175,
        "name": "Pañales talle G Toddler Deluxe 38 uni",
        "price": 9735.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle G Toddler Deluxe 38 uni_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 9735.0
            }
        ]
    },
    {
        "id": 176,
        "name": "Pañal Huggies Protect Plus G 40 uni",
        "price": 11831.4,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Protect Plus G 40 uni_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 11831.4
            }
        ]
    },
    {
        "id": 177,
        "name": "Pañal Huggies Protect Plus M 48 uni",
        "price": 11831.4,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Protect Plus M 48 uni_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 11831.4
            }
        ]
    },
    {
        "id": 178,
        "name": "Pañal Huggies Protect Plus P 50 uni",
        "price": 13386.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Protect Plus P 50 uni_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 13386.0
            }
        ]
    },
    {
        "id": 179,
        "name": "Pañal Huggies Flexi Comfort talle RN edición limitada 34 uni",
        "price": 17119.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Flexi Comfort talle RN edi_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 17119.0
            },
            {
                "date": "2026-03-21",
                "price": 10271.4
            },
            {
                "date": "2026-04-08",
                "price": 17119.0
            },
            {
                "date": "2026-04-18",
                "price": 10271.4
            },
            {
                "date": "2026-04-25",
                "price": 17119.0
            }
        ]
    },
    {
        "id": 180,
        "name": "Pañales Huggies Natural Care RN 34 uni",
        "price": 18949.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Huggies Natural Care RN 34 uni_1.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 11369.4
            },
            {
                "date": "2026-03-28",
                "price": 18949.0
            },
            {
                "date": "2026-04-02",
                "price": 11369.4
            },
            {
                "date": "2026-04-08",
                "price": 9474.5
            },
            {
                "date": "2026-04-18",
                "price": 11369.4
            },
            {
                "date": "2026-04-25",
                "price": 18949.0
            }
        ]
    },
    {
        "id": 181,
        "name": "Papel higiénico hoja simple Carrefour Essential 4 x 30 mts",
        "price": 1774.5,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico hoja simple Carrefour Es_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1810.9
            },
            {
                "date": "2026-03-28",
                "price": 1628.9
            },
            {
                "date": "2026-04-18",
                "price": 1810.9
            },
            {
                "date": "2026-04-25",
                "price": 1774.5
            }
        ]
    },
    {
        "id": 182,
        "name": "Papel higie´nico Bulnez hoja simple x4 30 mts",
        "price": 1790.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higienico Bulnez hoja simple x4 30_13.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1590.0
            },
            {
                "date": "2026-04-02",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 183,
        "name": "Papel higiénico Higienol Fresh hoja simple 30 mts 4 uni",
        "price": 2269.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Fresh hoja simp_8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2219.0
            },
            {
                "date": "2026-04-08",
                "price": 1474.85
            },
            {
                "date": "2026-04-18",
                "price": 2355.0
            },
            {
                "date": "2026-04-25",
                "price": 2269.0
            }
        ]
    },
    {
        "id": 184,
        "name": "Papel higiénico hoja simple Carrefour Essential x4 80 mts.",
        "price": 3670.8,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico hoja simple Carrefour Es_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4774.8
            },
            {
                "date": "2026-03-28",
                "price": 3670.8
            },
            {
                "date": "2026-04-02",
                "price": 4774.8
            },
            {
                "date": "2026-04-08",
                "price": 3670.8
            },
            {
                "date": "2026-04-18",
                "price": 5142.8
            },
            {
                "date": "2026-04-25",
                "price": 3670.8
            }
        ]
    },
    {
        "id": 185,
        "name": "Papel higiénico doble hoja Carrefour Essential 4 x 30 mts",
        "price": 3710.7,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico doble hoja Carrefour Ess_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2780.7
            },
            {
                "date": "2026-03-28",
                "price": 3617.7
            },
            {
                "date": "2026-04-02",
                "price": 2780.7
            },
            {
                "date": "2026-04-08",
                "price": 3617.7
            },
            {
                "date": "2026-04-18",
                "price": 2780.7
            },
            {
                "date": "2026-04-25",
                "price": 3710.7
            }
        ]
    },
    {
        "id": 186,
        "name": "Papel higienico Elite Ultra Suave doble hoja 30 mts 4 uni",
        "price": 3873.75,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higienico Elite Ultra Suave doble _9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3873.75
            }
        ]
    },
    {
        "id": 187,
        "name": "Papel higiénico Felpita blanquísimo hoja simple 4 x 80 m.",
        "price": 3915.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Felpita blanquísimo hoja_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4196.25
            },
            {
                "date": "2026-04-25",
                "price": 3915.0
            }
        ]
    },
    {
        "id": 188,
        "name": "Papel higienico doble hoja Higienol plus x4 30 mts.",
        "price": 4289.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higienico doble hoja Higienol plus_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4045.0
            },
            {
                "date": "2026-04-08",
                "price": 2629.25
            },
            {
                "date": "2026-04-18",
                "price": 4289.0
            }
        ]
    },
    {
        "id": 189,
        "name": "Papel higiénico Elegante 4 u. x 80 m.",
        "price": 4424.25,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Elegante 4 u x 80 m_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4424.25
            }
        ]
    },
    {
        "id": 190,
        "name": "Papel higiénico Higienol Premium doble hoja 30 mts 4 uni",
        "price": 4719.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Premium doble h_12.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4449.0
            },
            {
                "date": "2026-04-08",
                "price": 2891.85
            },
            {
                "date": "2026-04-18",
                "price": 4719.0
            }
        ]
    },
    {
        "id": 191,
        "name": "Pollo fresco en bandeja Carrefour x kg.",
        "price": 6700.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pollo fresco en bandeja Carrefour x kg_4.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 6700.0
            }
        ]
    },
    {
        "id": 192,
        "name": "Cuarto trasero al vacio x kg.",
        "price": 9180.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Cuarto trasero al vacio x kg_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 9180.0
            }
        ]
    },
    {
        "id": 193,
        "name": "Muslos al vacio Cresta Roja x kg.",
        "price": 9400.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslos al vacio Cresta Roja x kg_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9400.0
            }
        ]
    },
    {
        "id": 194,
        "name": "Muslo El Mercado x kg.",
        "price": 9500.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslo El Mercado x kg_15.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 9500.0
            }
        ]
    },
    {
        "id": 195,
        "name": "Cuarto trasero de pollo congelado 1.5 kg",
        "price": 9545.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Cuarto trasero de pollo congelado 15 kg_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 9545.0
            }
        ]
    },
    {
        "id": 196,
        "name": "Muslos de pollo al vacío Que Rico x kg.",
        "price": 10040.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslos de pollo al vacío Que Rico x kg_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10040.0
            }
        ]
    },
    {
        "id": 197,
        "name": "Muslo de pollo Granja tres arroyos x kg.",
        "price": 10650.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslo de pollo Granja tres arroyos x kg_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 10650.0
            }
        ]
    },
    {
        "id": 198,
        "name": "Patas de pollo al vacio Que rico x kg.",
        "price": 10800.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Patas de pollo al vacio Que rico x kg_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10800.0
            }
        ]
    },
    {
        "id": 199,
        "name": "Pechuga al vacio Cresta roja x kg.",
        "price": 17100.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pechuga al vacio Cresta roja x kg_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 17100.0
            }
        ]
    },
    {
        "id": 200,
        "name": "Pechuga El Mercado x kg.",
        "price": 17200.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pechuga El Mercado x kg_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 17200.0
            }
        ]
    },
    {
        "id": 201,
        "name": "Queso crema Tonadita cremette light 290 g.",
        "price": 2249.25,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema Tonadita cremette light 290 _10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1987.5
            },
            {
                "date": "2026-03-21",
                "price": 2999.0
            },
            {
                "date": "2026-04-18",
                "price": 2249.25
            }
        ]
    },
    {
        "id": 202,
        "name": "Queso blanco original La SerenÍsima clásico 290 grs",
        "price": 3699.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso blanco original La SerenÍsima clás_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2219.4
            },
            {
                "date": "2026-03-21",
                "price": 3699.0
            },
            {
                "date": "2026-03-28",
                "price": 2466.0
            },
            {
                "date": "2026-04-02",
                "price": 3699.0
            },
            {
                "date": "2026-04-18",
                "price": 2404.35
            },
            {
                "date": "2026-04-25",
                "price": 3699.0
            }
        ]
    },
    {
        "id": 203,
        "name": "Queso untable Finlandia light pote 290 g.",
        "price": 3851.25,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso untable Finlandia light pote 290 g_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3741.75
            },
            {
                "date": "2026-03-21",
                "price": 5135.0
            },
            {
                "date": "2026-03-28",
                "price": 3851.25
            },
            {
                "date": "2026-04-08",
                "price": 5135.0
            },
            {
                "date": "2026-04-25",
                "price": 3851.25
            }
        ]
    },
    {
        "id": 204,
        "name": "Queso untable Finlandia pote 290 g.",
        "price": 3851.25,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso untable Finlandia pote 290 g_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3741.75
            },
            {
                "date": "2026-03-21",
                "price": 5135.0
            },
            {
                "date": "2026-03-28",
                "price": 3851.25
            },
            {
                "date": "2026-04-08",
                "price": 5135.0
            },
            {
                "date": "2026-04-25",
                "price": 3851.25
            }
        ]
    },
    {
        "id": 205,
        "name": "Queso crema clásico Casancrem 290 grs",
        "price": 3866.25,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema clásico Casancrem 290 grs_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5155.0
            },
            {
                "date": "2026-03-21",
                "price": 3436.67
            },
            {
                "date": "2026-03-28",
                "price": 5155.0
            },
            {
                "date": "2026-04-02",
                "price": 3350.75
            },
            {
                "date": "2026-04-18",
                "price": 5155.0
            },
            {
                "date": "2026-04-25",
                "price": 3866.25
            }
        ]
    },
    {
        "id": 206,
        "name": "Queso blanco Tregar light 290 g.",
        "price": 3899.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso blanco Tregar light 290 g_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3899.0
            }
        ]
    },
    {
        "id": 207,
        "name": "Queso rallado Tregar 120 g.",
        "price": 5339.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso rallado Tregar 120 g_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 5339.0
            }
        ]
    },
    {
        "id": 208,
        "name": "La Paulina queso reggianito rallado 150 grs",
        "price": 5639.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/La Paulina queso reggianito rallado 150 _2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5639.0
            }
        ]
    },
    {
        "id": 209,
        "name": "Queso rallado La Serenísima reggianito flow pack 175 g.",
        "price": 7359.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso rallado La Serenísima reggianito f_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7359.0
            }
        ]
    },
    {
        "id": 210,
        "name": "Queso crema Casancrem clásico 500 grs",
        "price": 8009.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema Casancrem clásico 500 grs_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 8009.0
            }
        ]
    },
    {
        "id": 211,
        "name": "Sal fina Bulnez en bolsa 500 g.",
        "price": 999.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Bulnez en bolsa 500 g_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 739.0
            },
            {
                "date": "2026-04-18",
                "price": 999.0
            }
        ]
    },
    {
        "id": 212,
        "name": "Sal gruesa Dos Anclas caja 500 g.",
        "price": 1349.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Dos Anclas caja 500 g_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1349.0
            }
        ]
    },
    {
        "id": 213,
        "name": "Sal parrillera Dos Anclas caja 500 g.",
        "price": 1359.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal parrillera Dos Anclas caja 500 g_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1359.0
            }
        ]
    },
    {
        "id": 214,
        "name": "Sal gruesa Bulnez en bolsa 1 kg.",
        "price": 1390.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Bulnez en bolsa 1 kg_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1490.0
            },
            {
                "date": "2026-04-18",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 215,
        "name": "Sal gruesa Celusal 500 g.",
        "price": 1405.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Celusal 500 g_9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1405.0
            }
        ]
    },
    {
        "id": 216,
        "name": "Sal fina Dos Anclas en paquete 500 grs",
        "price": 1429.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Dos Anclas en paquete 500 grs_2.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 217,
        "name": "Sal fina Celusal paquete 500 g.",
        "price": 1459.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Celusal paquete 500 g_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1409.0
            },
            {
                "date": "2026-04-12",
                "price": 1459.0
            }
        ]
    },
    {
        "id": 218,
        "name": "Sal gruesa Carrefour Classic 1 kg",
        "price": 1462.8,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Carrefour Classic 1 kg_8.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            },
            {
                "date": "2026-04-25",
                "price": 1462.8
            }
        ]
    },
    {
        "id": 219,
        "name": "Sal entrefina Bulnez en bolsa 1 kg.",
        "price": 1490.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal entrefina Bulnez en bolsa 1 kg_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1390.0
            },
            {
                "date": "2026-04-18",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 220,
        "name": "Sal fina Dos Anclas caja 500 g.",
        "price": 1619.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Dos Anclas caja 500 g_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1619.0
            }
        ]
    },
    {
        "id": 221,
        "name": "Baguetin Carrefour Classic sabor jamón 70 grs",
        "price": 872.69,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Baguetin Carrefour Classic sabor jamón 7_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 872.69
            }
        ]
    },
    {
        "id": 222,
        "name": "Galletitas crackers Rex original 75 g.",
        "price": 1549.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Galletitas crackers Rex original 75 g_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1549.0
            }
        ]
    },
    {
        "id": 223,
        "name": "Nachos sabor pizza Doritos 74 grs",
        "price": 1933.25,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Nachos sabor pizza Doritos 74 grs_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1933.25
            }
        ]
    },
    {
        "id": 224,
        "name": "Papas fritas Carrefour classic corte tradicional 150 g.",
        "price": 1949.1,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Carrefour classic corte tra_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2483.1
            },
            {
                "date": "2026-04-25",
                "price": 1949.1
            }
        ]
    },
    {
        "id": 225,
        "name": "Galletitas original Club Social x6 24 grs",
        "price": 1950.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Galletitas original Club Social x6 24 gr_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 226,
        "name": "Galletitas crackers Club Social jamón 6 x 23.5 g.",
        "price": 2216.25,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Galletitas crackers Club Social jamón 6 _13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2216.25
            }
        ]
    },
    {
        "id": 227,
        "name": "Papas fritas Carrefour classic corte americano 150 g.",
        "price": 2612.5,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Carrefour classic corte ame_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2650.5
            },
            {
                "date": "2026-04-25",
                "price": 2612.5
            }
        ]
    },
    {
        "id": 228,
        "name": "Maní pelado y salado  en bolsa 500 g.",
        "price": 3499.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Maní pelado y salado  en bolsa 500 g_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3499.0
            }
        ]
    },
    {
        "id": 229,
        "name": "Papas fritas Carrefour clásicas 140 g.",
        "price": 3555.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Carrefour clásicas 140 g_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3555.0
            }
        ]
    },
    {
        "id": 230,
        "name": "Chizitos de maíz Pehuamar Maicitos 125 g.",
        "price": 3599.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Chizitos de maíz Pehuamar Maicitos 125 g_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3599.0
            }
        ]
    },
    {
        "id": 231,
        "name": "Yogur firme entero de vainilla Ilolay en pote 120 g.",
        "price": 704.25,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur firme entero de vainilla Ilolay en_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 704.25
            }
        ]
    },
    {
        "id": 232,
        "name": "Yogur Cremoso Frutilla Descremado La Serenísima Nutrición Activa 120grs",
        "price": 763.75,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Cremoso Frutilla Descremado La Ser_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 763.75
            }
        ]
    },
    {
        "id": 233,
        "name": "Yogur Firme Entero Sabor Frutilla La Serenísima Nutrición Activa 120 grs",
        "price": 763.75,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Firme Entero Sabor Frutilla La Ser_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 763.75
            }
        ]
    },
    {
        "id": 234,
        "name": "Yogur cremoso entero de frutilla Milkaut en pote 120 g.",
        "price": 918.75,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur cremoso entero de frutilla Milkaut_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 918.75
            }
        ]
    },
    {
        "id": 235,
        "name": "Yogur cremoso Milkaut sabor natural en pote 180 g.",
        "price": 1634.25,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur cremoso Milkaut sabor natural en p_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1556.25
            },
            {
                "date": "2026-04-02",
                "price": 2075.0
            },
            {
                "date": "2026-04-12",
                "price": 2179.0
            },
            {
                "date": "2026-04-25",
                "price": 1634.25
            }
        ]
    },
    {
        "id": 236,
        "name": "Yogur entero natural Tregar sin azúcar en pote 140 g.",
        "price": 1850.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur entero natural Tregar sin azúcar e_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1790.0
            },
            {
                "date": "2026-03-21",
                "price": 1850.0
            },
            {
                "date": "2026-03-28",
                "price": 1387.5
            },
            {
                "date": "2026-04-02",
                "price": 1850.0
            },
            {
                "date": "2026-04-08",
                "price": 1387.5
            },
            {
                "date": "2026-04-18",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 237,
        "name": "Yogur bebible entero Carrefour Classic sabor frutilla 900 ml",
        "price": 1968.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur bebible entero Carrefour Classic s_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2294.4
            },
            {
                "date": "2026-04-18",
                "price": 2006.4
            },
            {
                "date": "2026-04-25",
                "price": 1968.0
            }
        ]
    },
    {
        "id": 238,
        "name": "Yogur bebible entero Carrefour Classic sabor vainilla 900 ml",
        "price": 1968.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur bebible entero Carrefour Classic s_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1968.0
            }
        ]
    },
    {
        "id": 239,
        "name": "Yogur bebible descremado Carrefour Classic sabor frutilla 900 ml",
        "price": 1968.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur bebible descremado Carrefour Class_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1968.0
            }
        ]
    },
    {
        "id": 240,
        "name": "Yogur Griego natural sin endulzar Yogurísimo 190 grs",
        "price": 2879.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego natural sin endulzar Yogurí_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2159.25
            },
            {
                "date": "2026-04-25",
                "price": 2879.0
            }
        ]
    },
    {
        "id": 241,
        "name": "Aceite Mezcla Siglo De Oro 900 Ml",
        "price": 2979.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Siglo De Oro 900 Ml_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2839.0
            },
            {
                "date": "2026-04-08",
                "price": 2979.0
            }
        ]
    },
    {
        "id": 242,
        "name": "Aceite Mezcla Cocinero 900 Ml",
        "price": 3089.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Cocinero 900 Ml_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3089.0
            }
        ]
    },
    {
        "id": 243,
        "name": "Aceite De Girasol Legítimo 900 Ml",
        "price": 3779.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Legítimo 900 Ml_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3779.0
            }
        ]
    },
    {
        "id": 244,
        "name": "Aceite De Girasol Cocinero 900 Ml",
        "price": 3889.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Cocinero 900 Ml_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3299.0
            },
            {
                "date": "2026-03-21",
                "price": 3899.0
            },
            {
                "date": "2026-03-28",
                "price": 2924.25
            },
            {
                "date": "2026-04-02",
                "price": 3899.0
            },
            {
                "date": "2026-04-08",
                "price": 3889.0
            },
            {
                "date": "2026-04-18",
                "price": 2916.75
            },
            {
                "date": "2026-04-25",
                "price": 3889.0
            }
        ]
    },
    {
        "id": 245,
        "name": "Aceite De Girasol Cañuelas 900 Ml",
        "price": 3919.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Cañuelas 900 Ml_5.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3919.0
            }
        ]
    },
    {
        "id": 246,
        "name": "Aceite De Girasol Natural 900 Ml",
        "price": 4199.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Natural 900 Ml_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3199.2
            },
            {
                "date": "2026-03-21",
                "price": 3999.0
            },
            {
                "date": "2026-04-08",
                "price": 3599.0
            },
            {
                "date": "2026-04-18",
                "price": 4199.0
            }
        ]
    },
    {
        "id": 247,
        "name": "Aceite De Girasol Pureza 900 Ml",
        "price": 4209.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Pureza 900 Ml_23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4209.0
            }
        ]
    },
    {
        "id": 248,
        "name": "Aceite En Aerosol Natura Con Aceite De Girasol 120 Ml",
        "price": 4419.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite En Aerosol Natura Con Aceite De G_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3311.2
            },
            {
                "date": "2026-03-21",
                "price": 4129.0
            },
            {
                "date": "2026-04-18",
                "price": 4419.0
            }
        ]
    },
    {
        "id": 249,
        "name": "Aceite En Aerosol Cocinero Manteca 120 G",
        "price": 4899.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite En Aerosol Cocinero Manteca 120 G_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4899.0
            }
        ]
    },
    {
        "id": 250,
        "name": "Aceite De Girasol Legítimo 1.5 L",
        "price": 4999.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Legítimo 15 L_9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4999.0
            }
        ]
    },
    {
        "id": 251,
        "name": "Agua Mineralizada Cellier 2 Lts",
        "price": 949.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineralizada Cellier 2 Lts_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1429.0
            },
            {
                "date": "2026-04-08",
                "price": 999.0
            },
            {
                "date": "2026-04-18",
                "price": 1599.0
            },
            {
                "date": "2026-04-25",
                "price": 949.0
            }
        ]
    },
    {
        "id": 252,
        "name": "Agua Cellier Favaloro Con Gas 2 L",
        "price": 949.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Cellier Favaloro Con Gas 2 L_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1599.0
            },
            {
                "date": "2026-04-08",
                "price": 999.0
            },
            {
                "date": "2026-04-18",
                "price": 1749.0
            },
            {
                "date": "2026-04-25",
                "price": 949.0
            }
        ]
    },
    {
        "id": 253,
        "name": "Agua Mineral Sin Gas Check 2 L",
        "price": 1069.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Sin Gas Check 2 L_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 899.0
            },
            {
                "date": "2026-03-28",
                "price": 1069.0
            }
        ]
    },
    {
        "id": 254,
        "name": "Soda Ivess Menos Sodio 1.75 L",
        "price": 1299.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Soda Ivess Menos Sodio 175 L_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 255,
        "name": "Agua Saborizada H2oh! Still Sabor Limoneto 2 L",
        "price": 1524.5,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Saborizada H2oh Still Sabor Limonet_23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1524.5
            }
        ]
    },
    {
        "id": 256,
        "name": "Soda Ivess 2,25 L",
        "price": 1599.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Soda Ivess 225 L_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1399.0
            },
            {
                "date": "2026-03-28",
                "price": 1199.0
            },
            {
                "date": "2026-04-02",
                "price": 1399.0
            },
            {
                "date": "2026-04-12",
                "price": 1099.0
            },
            {
                "date": "2026-04-18",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 257,
        "name": "Agua Mineral Ivess Sin Gas Baja En Sodio 2, 255 L",
        "price": 1649.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Ivess Sin Gas Baja En Sodio_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1499.0
            },
            {
                "date": "2026-03-28",
                "price": 1199.0
            },
            {
                "date": "2026-04-02",
                "price": 1499.0
            },
            {
                "date": "2026-04-12",
                "price": 1099.0
            },
            {
                "date": "2026-04-18",
                "price": 1649.0
            }
        ]
    },
    {
        "id": 258,
        "name": "Agua Con Gas Sifón Sierra De Los Padres 1.75 Lt",
        "price": 1749.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Con Gas Sifón Sierra De Los Padres _6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1629.0
            },
            {
                "date": "2026-04-02",
                "price": 1299.0
            },
            {
                "date": "2026-04-08",
                "price": 1629.0
            },
            {
                "date": "2026-04-18",
                "price": 1749.0
            }
        ]
    },
    {
        "id": 259,
        "name": "Agua Mineral Sin Gas Villa Del Sur 2,25 Lt",
        "price": 1836.75,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Sin Gas Villa Del Sur 225 L_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1836.75
            }
        ]
    },
    {
        "id": 260,
        "name": "Sifón De Soda Check 2 L",
        "price": 1869.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Sifón De Soda Check 2 L_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1699.0
            },
            {
                "date": "2026-04-18",
                "price": 1869.0
            }
        ]
    },
    {
        "id": 261,
        "name": "Alimento Humedo Gato Atun Sardina Pets Class X85gr",
        "price": 772.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Gato Atun Sardina Pets C_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            },
            {
                "date": "2026-04-25",
                "price": 772.67
            }
        ]
    },
    {
        "id": 262,
        "name": "Alimento Humedo Gato Salmon Rosado Pets Class X85gr",
        "price": 772.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Gato Salmon Rosado Pets _14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 772.67
            },
            {
                "date": "2026-04-08",
                "price": 1159.0
            },
            {
                "date": "2026-04-25",
                "price": 772.67
            }
        ]
    },
    {
        "id": 263,
        "name": "Alimento Humedo  Gato Carne Pets Class X 85 Grs",
        "price": 772.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo  Gato Carne Pets Class X_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            },
            {
                "date": "2026-04-25",
                "price": 772.67
            }
        ]
    },
    {
        "id": 264,
        "name": "Alimento Húmedo Gato Frutos Mar Pets Class X85gr",
        "price": 772.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Húmedo Gato Frutos Mar Pets Cla_21.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1159.0
            },
            {
                "date": "2026-04-25",
                "price": 772.67
            }
        ]
    },
    {
        "id": 265,
        "name": "Alimento Adulto Salmon Pouch Whiskas 85 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Salmon Pouch Whiskas 85 _2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 266,
        "name": "Alimento Adulto Carne Pouch Whiskas 85 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Carne Pouch Whiskas 85 G_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 267,
        "name": "Alimento Adulto Pollo Pouch Whiskas 85 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Pollo Pouch Whiskas 85 G_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 268,
        "name": "Alimento Gato Pavo Pocuh Whiskas 85 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Gato Pavo Pocuh Whiskas 85 Gr_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 269,
        "name": "Alimento Adulto Sardina Pouch Whiskas 85 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Sardina Pouch Whiskas 85_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 270,
        "name": "Alimento Humedo Pouch Pescado Souffle Whiskas 85gr",
        "price": 932.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Pouch Pescado Souffle Wh_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 271,
        "name": "Alimento Humedo  Perro Carne Pets Class X 100 Grs",
        "price": 772.67,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo  Perro Carne Pets Class _12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            },
            {
                "date": "2026-04-25",
                "price": 772.67
            }
        ]
    },
    {
        "id": 272,
        "name": "Alimento Humedo   Perro Pollo Pets Clas X100gr",
        "price": 772.67,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo   Perro Pollo Pets Clas _14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            },
            {
                "date": "2026-04-25",
                "price": 772.67
            }
        ]
    },
    {
        "id": 273,
        "name": "Alimento Perro Razas Grandes Carne Pedigree 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Perro Razas Grandes Carne Pedig_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-03-28",
                "price": 866.0
            },
            {
                "date": "2026-04-02",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 866.0
            }
        ]
    },
    {
        "id": 274,
        "name": "Alimento Adulto Raza Peq Pollo Pedigree Pouch 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Raza Peq Pollo Pedigree _16.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-03-28",
                "price": 866.0
            },
            {
                "date": "2026-04-02",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 866.0
            }
        ]
    },
    {
        "id": 275,
        "name": "Alimento Humedo Perro Pouch Adulto Pedigree 100 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo Perro Pouch Adulto Pedig_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-03-28",
                "price": 866.0
            },
            {
                "date": "2026-04-02",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 276,
        "name": "Alimento Perro  Razas Grandes Pollo Pedigree 100 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Perro  Razas Grandes Pollo Pedi_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-03-28",
                "price": 866.0
            },
            {
                "date": "2026-04-02",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 277,
        "name": "Alimento Adulto Raza Peq Carne Pouch Pedigree 100 Gr",
        "price": 932.67,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Raza Peq Carne Pouch Ped_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-03-28",
                "price": 866.0
            },
            {
                "date": "2026-04-02",
                "price": 1299.0
            },
            {
                "date": "2026-04-12",
                "price": 866.0
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 932.67
            }
        ]
    },
    {
        "id": 278,
        "name": "Snack Biscrok Multi Pedigree X 100gr",
        "price": 1359.33,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Snack Biscrok Multi Pedigree X 100gr_18.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2039.0
            },
            {
                "date": "2026-04-12",
                "price": 1529.25
            },
            {
                "date": "2026-04-18",
                "price": 2039.0
            },
            {
                "date": "2026-04-25",
                "price": 1359.33
            }
        ]
    },
    {
        "id": 279,
        "name": "Alimento Adulto Carne Lata Pedigree 340 Gr",
        "price": 2866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Carne Lata Pedigree 340 _20.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2666.0
            },
            {
                "date": "2026-04-18",
                "price": 3999.0
            },
            {
                "date": "2026-04-25",
                "price": 2866.0
            }
        ]
    },
    {
        "id": 280,
        "name": "Snack Dentastix Razas Pequeñas Pedigree X 7un",
        "price": 2879.33,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Snack Dentastix Razas Pequeñas Pedigree _22.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4319.0
            },
            {
                "date": "2026-04-25",
                "price": 2879.33
            }
        ]
    },
    {
        "id": 281,
        "name": "Arroz Largo Fino Maximo 500 G",
        "price": 779.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Maximo 500 G_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 779.0
            }
        ]
    },
    {
        "id": 282,
        "name": "Arroz Largo Fino Lucchetti 500 G",
        "price": 969.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Lucchetti 500 G_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 969.0
            }
        ]
    },
    {
        "id": 283,
        "name": "Arroz Largo Fino Gallo Selección 500 G",
        "price": 1159.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Gallo Selección 500 G_9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 284,
        "name": "Arroz Parboil Molinos Ala 500 G",
        "price": 1259.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Parboil Molinos Ala 500 G_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1259.0
            }
        ]
    },
    {
        "id": 285,
        "name": "Arroz Parboil Gallo Oro Selección 500 G",
        "price": 1319.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Parboil Gallo Oro Selección 500 G_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1319.0
            }
        ]
    },
    {
        "id": 286,
        "name": "Arroz Molinos Ala Integral 500 Gr",
        "price": 1369.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Molinos Ala Integral 500 Gr_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1369.0
            }
        ]
    },
    {
        "id": 287,
        "name": "Arroz Cañuelas Parboil 500 G",
        "price": 1429.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Cañuelas Parboil 500 G_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 288,
        "name": "Arroz Check Largo Fino 1 Kg",
        "price": 1489.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Check Largo Fino 1 Kg_0.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 999.0
            },
            {
                "date": "2026-04-18",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 289,
        "name": "Arroz Largo Fino Carogran 00000 1 Kg",
        "price": 1489.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Carogran 00000 1 Kg_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 290,
        "name": "Arroz Cañuelas Grano Largo 1 Kg",
        "price": 1719.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Cañuelas Grano Largo 1 Kg_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1719.0
            }
        ]
    },
    {
        "id": 291,
        "name": "Carne Picada Swift Congelada 500 G",
        "price": 7239.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carne Picada Swift Congelada 500 G_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7239.0
            }
        ]
    },
    {
        "id": 292,
        "name": "Pechito De Cerdo Congelado 900 G",
        "price": 8299.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Pechito De Cerdo Congelado 900 G_13.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 8299.0
            }
        ]
    },
    {
        "id": 293,
        "name": "Carne Picada Especial 750 G",
        "price": 8999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carne Picada Especial 750 G_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14499.0
            },
            {
                "date": "2026-03-21",
                "price": 8999.0
            }
        ]
    },
    {
        "id": 294,
        "name": "Bondiola Congelada 2.5 Kg",
        "price": 10900.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Bondiola Congelada 25 Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6989.0
            },
            {
                "date": "2026-04-25",
                "price": 10900.0
            }
        ]
    },
    {
        "id": 295,
        "name": "Chorizo Tradicional Campo Austral Tradicional Al Vacio 400 Gr",
        "price": 11089.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Chorizo Tradicional Campo Austral Tradic_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11089.0
            }
        ]
    },
    {
        "id": 296,
        "name": "Carne Picada Magra 650 G",
        "price": 14999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carne Picada Magra 650 G_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14999.0
            }
        ]
    },
    {
        "id": 297,
        "name": "Bola De Lomo Feteada De Novillito Envasado Al Vacío 1 Kg",
        "price": 15489.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Bola De Lomo Feteada De Novillito Envasa_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 15489.0
            }
        ]
    },
    {
        "id": 298,
        "name": "Cuadrada Feteada De Novillito Envasado Al Vacío 1 Kg",
        "price": 15489.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Cuadrada Feteada De Novillito Envasado A_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 15489.0
            }
        ]
    },
    {
        "id": 299,
        "name": "Paleta De Novillito Envasado Al Vacío 1.2 Kg",
        "price": 15999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Paleta De Novillito Envasado Al Vacío 12_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 15999.0
            }
        ]
    },
    {
        "id": 300,
        "name": "Asado De Tira De Novillito 1 Kg",
        "price": 15999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Asado De Tira De Novillito 1 Kg_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 15999.0
            },
            {
                "date": "2026-03-21",
                "price": 12389.0
            },
            {
                "date": "2026-03-28",
                "price": 15999.0
            },
            {
                "date": "2026-04-18",
                "price": 12389.0
            },
            {
                "date": "2026-04-25",
                "price": 15999.0
            }
        ]
    },
    {
        "id": 301,
        "name": "Barritas De Cereal Yogurt Frutilla Light Cereal Mix 26gr",
        "price": 1229.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Barritas De Cereal Yogurt Frutilla Light_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 752.67
            },
            {
                "date": "2026-03-21",
                "price": 1129.0
            },
            {
                "date": "2026-04-25",
                "price": 1229.0
            }
        ]
    },
    {
        "id": 302,
        "name": "Aritos De Cereal Frutados 3 Arroyos 160gr",
        "price": 1429.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Aritos De Cereal Frutados 3 Arroyos 160g_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1399.0
            },
            {
                "date": "2026-03-21",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 303,
        "name": "Copos De Maíz Granix Tradicionales 160 G",
        "price": 1699.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Copos De Maíz Granix Tradicionales 160 G_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 304,
        "name": "Cereal Azucarado Skarchitos 240 Gr",
        "price": 1729.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Azucarado Skarchitos 240 Gr_5.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1424.25
            },
            {
                "date": "2026-03-28",
                "price": 1729.0
            },
            {
                "date": "2026-04-18",
                "price": 1296.75
            },
            {
                "date": "2026-04-25",
                "price": 1729.0
            }
        ]
    },
    {
        "id": 305,
        "name": "Cereal Bolitas Check Chocolate 200 G",
        "price": 1799.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Bolitas Check Chocolate 200 G_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2299.0
            },
            {
                "date": "2026-04-08",
                "price": 1724.25
            },
            {
                "date": "2026-04-18",
                "price": 1799.0
            }
        ]
    },
    {
        "id": 306,
        "name": "Fibra Total Copos Integrales Con Pasas Granix 200gr",
        "price": 1799.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Fibra Total Copos Integrales Con Pasas G_22.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1799.0
            }
        ]
    },
    {
        "id": 307,
        "name": "Cereal Check Bastoncitos Integrales De Salvado 250 G",
        "price": 1999.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Check Bastoncitos Integrales De S_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1999.0
            },
            {
                "date": "2026-04-08",
                "price": 1499.25
            },
            {
                "date": "2026-04-18",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 308,
        "name": "Cereales Formis Estrellas Sabor Frutal 145 G",
        "price": 2059.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereales Formis Estrellas Sabor Frutal 1_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 309,
        "name": "Barra Proteica Integra De Maní Chocolate 45 G",
        "price": 2299.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Barra Proteica Integra De Maní Chocolate_20.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 310,
        "name": "Cereal Check Anillos De Colores Frutal 200 G",
        "price": 2399.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Check Anillos De Colores Frutal 2_2.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 311,
        "name": "Cerveza En Lata Brahma 354ml",
        "price": 902.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza En Lata Brahma 354ml_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1289.0
            },
            {
                "date": "2026-04-02",
                "price": 966.75
            },
            {
                "date": "2026-04-08",
                "price": 1289.0
            },
            {
                "date": "2026-04-18",
                "price": 859.33
            },
            {
                "date": "2026-04-25",
                "price": 902.3
            }
        ]
    },
    {
        "id": 312,
        "name": "Cerveza Rubia Quilmes Bajocero 473 Ml",
        "price": 999.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes Bajocero 473 Ml_9.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1479.0
            },
            {
                "date": "2026-04-12",
                "price": 1035.3
            },
            {
                "date": "2026-04-18",
                "price": 986.0
            },
            {
                "date": "2026-04-25",
                "price": 999.0
            }
        ]
    },
    {
        "id": 313,
        "name": "Cerveza Rubia Quilmes 1890 473 Cc",
        "price": 1329.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes 1890 473 Cc_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1424.25
            },
            {
                "date": "2026-03-21",
                "price": 1899.0
            },
            {
                "date": "2026-03-28",
                "price": 1424.25
            },
            {
                "date": "2026-04-02",
                "price": 1899.0
            },
            {
                "date": "2026-04-12",
                "price": 1424.25
            },
            {
                "date": "2026-04-18",
                "price": 1266.0
            },
            {
                "date": "2026-04-25",
                "price": 1329.3
            }
        ]
    },
    {
        "id": 314,
        "name": "Cerveza Rubia Imperial 473 Ml",
        "price": 1851.85,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Imperial 473 Ml_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1899.33
            },
            {
                "date": "2026-04-25",
                "price": 1851.85
            }
        ]
    },
    {
        "id": 315,
        "name": "Cerveza Rubia Heineken Sin Alcohol 473 Cc",
        "price": 2014.35,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Heineken Sin Alcohol 473 C_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2066.0
            },
            {
                "date": "2026-04-25",
                "price": 2014.35
            }
        ]
    },
    {
        "id": 316,
        "name": "Cerveza Rubia Schneider 473 Ml",
        "price": 2399.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider 473 Ml_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1619.25
            },
            {
                "date": "2026-03-28",
                "price": 2159.0
            },
            {
                "date": "2026-04-02",
                "price": 2299.0
            },
            {
                "date": "2026-04-18",
                "price": 1599.33
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 317,
        "name": "Cerveza Rubia Quilmes 1890 Retornable 1 L",
        "price": 2449.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes 1890 Retornable 1 _0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2449.3
            }
        ]
    },
    {
        "id": 318,
        "name": "Cerveza Rubia Amstel Lager 473 Ml",
        "price": 2499.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Amstel Lager 473 Ml_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1799.25
            },
            {
                "date": "2026-03-21",
                "price": 2399.0
            },
            {
                "date": "2026-03-28",
                "price": 1799.25
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            },
            {
                "date": "2026-04-12",
                "price": 2499.0
            },
            {
                "date": "2026-04-18",
                "price": 1666.0
            },
            {
                "date": "2026-04-25",
                "price": 2499.0
            }
        ]
    },
    {
        "id": 319,
        "name": "Cerveza Rubia Schneider Remix Limón 473 Ml",
        "price": 2499.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider Remix Limón 473 _19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2499.0
            }
        ]
    },
    {
        "id": 320,
        "name": "Cerveza Rubia Schneider 710 Ml",
        "price": 2624.25,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider 710 Ml_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2624.25
            }
        ]
    },
    {
        "id": 321,
        "name": "Gaseosa Coca Cola Original 354ml",
        "price": 1532.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Coca Cola Original 354ml_19.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1466.0
            },
            {
                "date": "2026-03-28",
                "price": 2199.0
            },
            {
                "date": "2026-04-02",
                "price": 2299.0
            },
            {
                "date": "2026-04-25",
                "price": 1532.67
            }
        ]
    },
    {
        "id": 322,
        "name": "Gaseosa Cunnington Pomelo Suave 2.25 L",
        "price": 1832.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Pomelo Suave 225 L_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1836.75
            },
            {
                "date": "2026-03-21",
                "price": 1632.67
            },
            {
                "date": "2026-03-28",
                "price": 1874.25
            },
            {
                "date": "2026-04-02",
                "price": 2499.0
            },
            {
                "date": "2026-04-08",
                "price": 1699.0
            },
            {
                "date": "2026-04-18",
                "price": 2499.0
            },
            {
                "date": "2026-04-25",
                "price": 1832.67
            }
        ]
    },
    {
        "id": 323,
        "name": "Gaseosa Cunnington Cola Sin Azúcar 2.25 L",
        "price": 1832.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Cola Sin Azúcar 225 L_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1832.67
            }
        ]
    },
    {
        "id": 324,
        "name": "Gaseosa Cunnington Lima 2.25 L",
        "price": 1832.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Lima 225 L_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1832.67
            }
        ]
    },
    {
        "id": 325,
        "name": "Gaseosa Cunnington Pomelo Classic 2.25 L",
        "price": 1832.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Pomelo Classic 225 L_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1599.0
            },
            {
                "date": "2026-04-25",
                "price": 1832.67
            }
        ]
    },
    {
        "id": 326,
        "name": "Agua Tónica Cunnington 2.25 L",
        "price": 1832.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Agua Tónica Cunnington 225 L_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1832.67
            }
        ]
    },
    {
        "id": 327,
        "name": "Gaseosa Cunnington Cola Classic 2.25 L",
        "price": 1832.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Cola Classic 225 L_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1599.0
            },
            {
                "date": "2026-04-25",
                "price": 1832.67
            }
        ]
    },
    {
        "id": 328,
        "name": "Gaseosa Coca Cola Zero 1.25 L",
        "price": 1998.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Coca Cola Zero 125 L_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1998.67
            }
        ]
    },
    {
        "id": 329,
        "name": "Gaseosa Mirinda Sabor Naranja 2.25 L",
        "price": 2449.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Mirinda Sabor Naranja 225 L_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1996.65
            },
            {
                "date": "2026-03-21",
                "price": 1832.67
            },
            {
                "date": "2026-03-28",
                "price": 2336.65
            },
            {
                "date": "2026-04-25",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 330,
        "name": "Gaseosa Lima Limón 7up Sin Azúcar 1.5 L",
        "price": 2632.67,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Lima Limón 7up Sin Azúcar 15 L_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2219.4
            },
            {
                "date": "2026-03-21",
                "price": 2466.0
            },
            {
                "date": "2026-03-28",
                "price": 1889.0
            },
            {
                "date": "2026-04-02",
                "price": 2219.4
            },
            {
                "date": "2026-04-12",
                "price": 1849.5
            },
            {
                "date": "2026-04-18",
                "price": 2219.4
            },
            {
                "date": "2026-04-25",
                "price": 2632.67
            }
        ]
    },
    {
        "id": 331,
        "name": "Medallones De Carne Aliada 2 U 110 G",
        "price": 2159.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Aliada 2 U 110 G_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2159.0
            },
            {
                "date": "2026-03-28",
                "price": 1511.3
            },
            {
                "date": "2026-04-02",
                "price": 2159.0
            }
        ]
    },
    {
        "id": 332,
        "name": "Medallon De Carne Vacuna Express 110 G 2u",
        "price": 2449.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallon De Carne Vacuna Express 110 G 2_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1664.25
            },
            {
                "date": "2026-03-21",
                "price": 2379.0
            },
            {
                "date": "2026-04-08",
                "price": 1789.0
            },
            {
                "date": "2026-04-18",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 333,
        "name": "Medallón De Pollo Jamón Y Queso Paladini 170 Gr",
        "price": 3519.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallón De Pollo Jamón Y Queso Paladini_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3519.0
            }
        ]
    },
    {
        "id": 334,
        "name": "Medallones Veggies Granja Del Sol Con Cebolla Caramelizada Y Arroz Yamaní 440g 4u",
        "price": 3554.5,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Veggies Granja Del Sol Con Ce_21.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7109.0
            },
            {
                "date": "2026-04-25",
                "price": 3554.5
            }
        ]
    },
    {
        "id": 335,
        "name": "Medallones De Merluza Grangys Con Espinaca Y Queso 430 G",
        "price": 3649.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Merluza Grangys Con Espina_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3649.0
            },
            {
                "date": "2026-04-02",
                "price": 2554.3
            },
            {
                "date": "2026-04-08",
                "price": 3649.0
            }
        ]
    },
    {
        "id": 336,
        "name": "Medallón Green Life De Calabaza Y Choclo 380 G 4u",
        "price": 4124.25,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallón Green Life De Calabaza Y Choclo_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5499.0
            },
            {
                "date": "2026-03-28",
                "price": 3574.35
            },
            {
                "date": "2026-04-08",
                "price": 5499.0
            },
            {
                "date": "2026-04-25",
                "price": 4124.25
            }
        ]
    },
    {
        "id": 337,
        "name": "Medallones Swift De Carne 276g 4u",
        "price": 5489.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Swift De Carne 276g 4u_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5039.0
            },
            {
                "date": "2026-04-02",
                "price": 4116.75
            },
            {
                "date": "2026-04-08",
                "price": 5489.0
            }
        ]
    },
    {
        "id": 338,
        "name": "Medallones Granja Del Sol De Pollo 4 U",
        "price": 5606.3,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Granja Del Sol De Pollo 4 U_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 5606.3
            }
        ]
    },
    {
        "id": 339,
        "name": "Medallones De Carne Vacuna Paty Express 276 G 4u",
        "price": 5959.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Vacuna Paty Express _8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4049.25
            },
            {
                "date": "2026-03-21",
                "price": 5789.0
            },
            {
                "date": "2026-04-12",
                "price": 4469.25
            },
            {
                "date": "2026-04-18",
                "price": 5959.0
            }
        ]
    },
    {
        "id": 340,
        "name": "Medallones De Carne Vacuna Goodmark Classic 320 G 4u",
        "price": 6036.75,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Vacuna Goodmark Clas_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6036.75
            }
        ]
    },
    {
        "id": 341,
        "name": "Harina Check 000 1 Kg",
        "price": 849.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina Check 000 1 Kg_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 849.0
            }
        ]
    },
    {
        "id": 342,
        "name": "Harina De Trigo Caserita Tipo 000 1 Kg",
        "price": 899.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Caserita Tipo 000 1 Kg_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 679.0
            },
            {
                "date": "2026-04-25",
                "price": 899.0
            }
        ]
    },
    {
        "id": 343,
        "name": "Harina 000 Morixe X 1 Kg",
        "price": 979.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 000 Morixe X 1 Kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 599.0
            },
            {
                "date": "2026-03-21",
                "price": 979.0
            },
            {
                "date": "2026-03-28",
                "price": 599.0
            },
            {
                "date": "2026-04-02",
                "price": 899.0
            },
            {
                "date": "2026-04-08",
                "price": 979.0
            }
        ]
    },
    {
        "id": 344,
        "name": "Harina De Trigo Chacabuco 000 1 Kg",
        "price": 989.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Chacabuco 000 1 Kg_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 741.75
            },
            {
                "date": "2026-04-18",
                "price": 989.0
            }
        ]
    },
    {
        "id": 345,
        "name": "Harina De Trigo Favorita 000 1 Kg",
        "price": 1039.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Favorita 000 1 Kg_23.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 699.0
            },
            {
                "date": "2026-03-21",
                "price": 969.0
            },
            {
                "date": "2026-04-08",
                "price": 1039.0
            }
        ]
    },
    {
        "id": 346,
        "name": "Polenta Instantánea Prestopronta 490 G",
        "price": 1229.25,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Polenta Instantánea Prestopronta 490 G_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1146.75
            },
            {
                "date": "2026-03-21",
                "price": 993.85
            },
            {
                "date": "2026-03-28",
                "price": 1146.75
            },
            {
                "date": "2026-04-18",
                "price": 1229.25
            }
        ]
    },
    {
        "id": 347,
        "name": "Harina 0000 Chacabuco 1 Kg",
        "price": 1289.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 0000 Chacabuco 1 Kg_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1289.0
            }
        ]
    },
    {
        "id": 348,
        "name": "Harina De Trigo Caserita Tipo 0000 1 Kg",
        "price": 1299.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Caserita Tipo 0000 1 Kg_4.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 349,
        "name": "Harina 0000 Morixe X 1 Kg",
        "price": 1339.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 0000 Morixe X 1 Kg_20.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1339.0
            }
        ]
    },
    {
        "id": 350,
        "name": "Harina 0000 Pureza Ultra Refinada 1 Kg",
        "price": 1419.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 0000 Pureza Ultra Refinada 1 Kg_5.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1419.0
            },
            {
                "date": "2026-04-18",
                "price": 999.0
            },
            {
                "date": "2026-04-25",
                "price": 1419.0
            }
        ]
    },
    {
        "id": 351,
        "name": "Jugo En Polvo Tang Naranja Dulce 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Naranja Dulce 15 G_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 319.33
            },
            {
                "date": "2026-03-21",
                "price": 479.0
            },
            {
                "date": "2026-03-28",
                "price": 239.5
            },
            {
                "date": "2026-04-02",
                "price": 319.33
            },
            {
                "date": "2026-04-08",
                "price": 479.0
            },
            {
                "date": "2026-04-12",
                "price": 239.5
            },
            {
                "date": "2026-04-18",
                "price": 509.0
            },
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 352,
        "name": "Jugo En Polvo Tang Naranja Mango 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Naranja Mango 15 G_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 319.33
            },
            {
                "date": "2026-03-21",
                "price": 479.0
            },
            {
                "date": "2026-03-28",
                "price": 239.5
            },
            {
                "date": "2026-04-02",
                "price": 319.33
            },
            {
                "date": "2026-04-08",
                "price": 479.0
            },
            {
                "date": "2026-04-12",
                "price": 239.5
            },
            {
                "date": "2026-04-18",
                "price": 509.0
            },
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 353,
        "name": "Jugo En Polvo Tang Multifruta 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Multifruta 15 G_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 239.5
            },
            {
                "date": "2026-04-18",
                "price": 509.0
            },
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 354,
        "name": "Jugo En Polvo Tang Limonada Dulce 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Limonada Dulce 15 G_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 355,
        "name": "Jugo En Polvo Tang  Manzana 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang  Manzana 15 G_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 356,
        "name": "Jugo En Polvo Tang Sabor Pera 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Sabor Pera 15 G_21.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 357,
        "name": "Jugo En Polvo Tang Pomelo Rosado 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Pomelo Rosado 15 G_22.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 358,
        "name": "Jugo En Polvo En Polvo Tang Uva 15 G",
        "price": 339.33,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo En Polvo Tang Uva 15 G_23.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 339.33
            }
        ]
    },
    {
        "id": 359,
        "name": "Jugo En Polvo Mango Y Naranja Bc 7 Gr",
        "price": 345.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Mango Y Naranja Bc 7 Gr_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            },
            {
                "date": "2026-04-25",
                "price": 345.0
            }
        ]
    },
    {
        "id": 360,
        "name": "Jugo En Polvo Frutilla Y Limón Bc 7 Gr",
        "price": 345.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Frutilla Y Limón Bc 7 Gr_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            },
            {
                "date": "2026-04-25",
                "price": 345.0
            }
        ]
    },
    {
        "id": 361,
        "name": "Leche Entera La Serenisima Fort C 200 Cc",
        "price": 1189.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera La Serenisima Fort C 200 Cc_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 891.75
            },
            {
                "date": "2026-03-21",
                "price": 1189.0
            },
            {
                "date": "2026-03-28",
                "price": 891.75
            },
            {
                "date": "2026-04-08",
                "price": 1189.0
            },
            {
                "date": "2026-04-12",
                "price": 891.75
            },
            {
                "date": "2026-04-18",
                "price": 1189.0
            }
        ]
    },
    {
        "id": 362,
        "name": "Leche Parcialmente Descremada San Ignacio Larga Vida 1 L",
        "price": 1266.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Parcialmente Descremada San Ignaci_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1299.0
            },
            {
                "date": "2026-04-25",
                "price": 1266.0
            }
        ]
    },
    {
        "id": 363,
        "name": "Leche Descremada Check Larga Vida 1 L",
        "price": 1399.33,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada Check Larga Vida 1 L_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1349.0
            },
            {
                "date": "2026-04-08",
                "price": 1599.0
            },
            {
                "date": "2026-04-12",
                "price": 1499.0
            },
            {
                "date": "2026-04-18",
                "price": 1399.0
            },
            {
                "date": "2026-04-25",
                "price": 1399.33
            }
        ]
    },
    {
        "id": 364,
        "name": "Leche Entera Check Larga Vida 1 L",
        "price": 1399.33,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Check Larga Vida 1 L_1.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1349.0
            },
            {
                "date": "2026-04-08",
                "price": 1599.0
            },
            {
                "date": "2026-04-12",
                "price": 1499.0
            },
            {
                "date": "2026-04-18",
                "price": 1399.0
            },
            {
                "date": "2026-04-25",
                "price": 1399.33
            }
        ]
    },
    {
        "id": 365,
        "name": "Leche Uat Check  Baja En Lactosa Parcialmente Descremada 1 L",
        "price": 1499.33,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Uat Check  Baja En Lactosa Parcial_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1349.0
            },
            {
                "date": "2026-04-02",
                "price": 1599.0
            },
            {
                "date": "2026-04-25",
                "price": 1499.33
            }
        ]
    },
    {
        "id": 366,
        "name": "Leche Entera Casanto 1 L",
        "price": 1649.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Casanto 1 L_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            },
            {
                "date": "2026-04-02",
                "price": 1649.0
            }
        ]
    },
    {
        "id": 367,
        "name": "Leche Descremada Casanto 1 L",
        "price": 1649.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada Casanto 1 L_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            },
            {
                "date": "2026-04-02",
                "price": 1649.0
            }
        ]
    },
    {
        "id": 368,
        "name": "Leche Entera Las Tres Niñas Clásica 1 L",
        "price": 1679.33,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Las Tres Niñas Clásica 1 L_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1679.33
            }
        ]
    },
    {
        "id": 369,
        "name": "Leche Las Tres Niñas Liviana 1 L",
        "price": 1679.33,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Las Tres Niñas Liviana 1 L_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1679.33
            }
        ]
    },
    {
        "id": 370,
        "name": "Leche Descremada Las Tres Niñas Vida Activa Con Proteína 1 L",
        "price": 1799.33,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada Las Tres Niñas Vida Act_22.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1799.33
            }
        ]
    },
    {
        "id": 371,
        "name": "Esponja Check Ultrafina 1un",
        "price": 454.35,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Check Ultrafina 1un_10.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 699.0
            },
            {
                "date": "2026-03-28",
                "price": 524.25
            },
            {
                "date": "2026-04-02",
                "price": 454.35
            },
            {
                "date": "2026-04-08",
                "price": 699.0
            },
            {
                "date": "2026-04-12",
                "price": 454.35
            },
            {
                "date": "2026-04-18",
                "price": 699.0
            },
            {
                "date": "2026-04-25",
                "price": 454.35
            }
        ]
    },
    {
        "id": 372,
        "name": "Esponja Check Cuadros 1un",
        "price": 597.35,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Check Cuadros 1un_18.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 919.0
            },
            {
                "date": "2026-03-28",
                "price": 689.25
            },
            {
                "date": "2026-04-02",
                "price": 597.35
            },
            {
                "date": "2026-04-08",
                "price": 919.0
            },
            {
                "date": "2026-04-12",
                "price": 597.35
            },
            {
                "date": "2026-04-18",
                "price": 919.0
            },
            {
                "date": "2026-04-25",
                "price": 597.35
            }
        ]
    },
    {
        "id": 373,
        "name": "Esponja Multiuso Virulana 1 U",
        "price": 859.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Multiuso Virulana 1 U_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 859.0
            },
            {
                "date": "2026-04-12",
                "price": 558.35
            },
            {
                "date": "2026-04-18",
                "price": 859.0
            }
        ]
    },
    {
        "id": 374,
        "name": "Esponja Sed Metal Hogar Acero Inoxidable",
        "price": 889.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Sed Metal Hogar Acero Inoxidable_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 889.0
            },
            {
                "date": "2026-04-12",
                "price": 577.85
            },
            {
                "date": "2026-04-18",
                "price": 889.0
            }
        ]
    },
    {
        "id": 375,
        "name": "Esponja Fibra C/ Cuadraditos 1un",
        "price": 949.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Fibra C Cuadraditos 1un_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 949.0
            },
            {
                "date": "2026-04-12",
                "price": 616.85
            },
            {
                "date": "2026-04-18",
                "price": 949.0
            }
        ]
    },
    {
        "id": 376,
        "name": "Esponja De Acero Inoxidable Mortimer 1 Un",
        "price": 979.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja De Acero Inoxidable Mortimer 1 U_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 652.67
            },
            {
                "date": "2026-03-28",
                "price": 979.0
            },
            {
                "date": "2026-04-12",
                "price": 652.67
            },
            {
                "date": "2026-04-18",
                "price": 979.0
            }
        ]
    },
    {
        "id": 377,
        "name": "Esponja Vajilla Inoxidable Virulana 1 U",
        "price": 999.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Vajilla Inoxidable Virulana 1 U_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 999.0
            },
            {
                "date": "2026-04-12",
                "price": 649.35
            },
            {
                "date": "2026-04-18",
                "price": 999.0
            }
        ]
    },
    {
        "id": 378,
        "name": "Esponja Mortimer Cuadriculada 1un",
        "price": 1039.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Mortimer Cuadriculada 1un_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 692.67
            },
            {
                "date": "2026-03-28",
                "price": 831.2
            },
            {
                "date": "2026-04-02",
                "price": 1039.0
            },
            {
                "date": "2026-04-12",
                "price": 692.67
            },
            {
                "date": "2026-04-18",
                "price": 1039.0
            }
        ]
    },
    {
        "id": 379,
        "name": "Rejilla Check Economica",
        "price": 1049.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Rejilla Check Economica_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1049.0
            }
        ]
    },
    {
        "id": 380,
        "name": "Trapo Piso Check Gris 47 X 50 Cm",
        "price": 1069.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Trapo Piso Check Gris 47 X 50 Cm_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1069.0
            }
        ]
    },
    {
        "id": 381,
        "name": "Jabón En Barra Johnson's Glicerina 80gr",
        "price": 1769.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Jabón En Barra Johnsons Glicerina 80gr_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1149.85
            },
            {
                "date": "2026-03-21",
                "price": 1769.0
            },
            {
                "date": "2026-04-18",
                "price": 1326.75
            },
            {
                "date": "2026-04-25",
                "price": 1769.0
            }
        ]
    },
    {
        "id": 382,
        "name": "Toallas Humedas Soul Baby Con Aloe Y Vit E 50un",
        "price": 2099.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallas Humedas Soul Baby Con Aloe Y Vit_0.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3499.0
            },
            {
                "date": "2026-03-28",
                "price": 2099.4
            },
            {
                "date": "2026-04-02",
                "price": 1749.5
            },
            {
                "date": "2026-04-08",
                "price": 1999.0
            },
            {
                "date": "2026-04-25",
                "price": 2099.4
            }
        ]
    },
    {
        "id": 383,
        "name": "Toallas Humedas Soul Baby Animales Fantasticos 45un",
        "price": 2099.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallas Humedas Soul Baby Animales Fanta_2.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3499.0
            },
            {
                "date": "2026-03-28",
                "price": 2099.4
            },
            {
                "date": "2026-04-02",
                "price": 1749.5
            },
            {
                "date": "2026-04-08",
                "price": 3499.0
            },
            {
                "date": "2026-04-25",
                "price": 2099.4
            }
        ]
    },
    {
        "id": 384,
        "name": "Toallitas Húmedas Kimbies 48un",
        "price": 2135.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Kimbies 48un_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2015.4
            },
            {
                "date": "2026-04-02",
                "price": 3359.0
            },
            {
                "date": "2026-04-25",
                "price": 2135.4
            }
        ]
    },
    {
        "id": 385,
        "name": "Jabón En Barra Baby Dove Humectación Sensible 75 G",
        "price": 2299.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Jabón En Barra Baby Dove Humectación Sen_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 386,
        "name": "Toallitas Humedas Antibacterial Q-Soft 30 Un",
        "price": 2749.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Humedas Antibacterial Q-Soft 3_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2749.0
            },
            {
                "date": "2026-03-21",
                "price": 2336.65
            },
            {
                "date": "2026-03-28",
                "price": 2749.0
            }
        ]
    },
    {
        "id": 387,
        "name": "Pañales Toddler Deluxe Talle Xxg 8 U",
        "price": 2891.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Pañales Toddler Deluxe Talle Xxg 8 U_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2891.4
            }
        ]
    },
    {
        "id": 388,
        "name": "Pañales Toddler Deluxe Talle P 12 U",
        "price": 2891.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Pañales Toddler Deluxe Talle P 12 U_16.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2891.4
            }
        ]
    },
    {
        "id": 389,
        "name": "Toallitas Húmedas Toddler Deluxe Sin Perfume 48 U",
        "price": 2897.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Toddler Deluxe Sin Per_5.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3621.75
            },
            {
                "date": "2026-04-25",
                "price": 2897.4
            }
        ]
    },
    {
        "id": 390,
        "name": "Toallitas Húmedas Toddler Deluxe Aloe Vera 48 U",
        "price": 2897.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Toddler Deluxe Aloe Ve_21.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3621.75
            },
            {
                "date": "2026-04-25",
                "price": 2897.4
            }
        ]
    },
    {
        "id": 391,
        "name": "Papel Higiénico Higienol Fresh Hoja Simple 30 M 4 U",
        "price": 1475.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Higienol Fresh Hoja Simp_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1869.15
            },
            {
                "date": "2026-03-21",
                "price": 1319.4
            },
            {
                "date": "2026-03-28",
                "price": 1971.15
            },
            {
                "date": "2026-04-02",
                "price": 2219.0
            },
            {
                "date": "2026-04-12",
                "price": 1598.35
            },
            {
                "date": "2026-04-18",
                "price": 1475.4
            }
        ]
    },
    {
        "id": 392,
        "name": "Papel Higiénico Aliada Simple Hoja 30 M 4u",
        "price": 1789.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Aliada Simple Hoja 30 M _4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1839.0
            },
            {
                "date": "2026-03-21",
                "price": 1103.4
            },
            {
                "date": "2026-03-28",
                "price": 1779.0
            },
            {
                "date": "2026-04-18",
                "price": 1073.4
            },
            {
                "date": "2026-04-25",
                "price": 1789.0
            }
        ]
    },
    {
        "id": 393,
        "name": "Papel Higiénico Felpita Hoja Simple 30 M 4 U",
        "price": 1799.25,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Felpita Hoja Simple 30 M_20.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2399.0
            },
            {
                "date": "2026-04-18",
                "price": 1439.4
            },
            {
                "date": "2026-04-25",
                "price": 1799.25
            }
        ]
    },
    {
        "id": 394,
        "name": "Papel Hgiénico Check Simple Hoja 30 M X 10 Cm 4u",
        "price": 2019.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Hgiénico Check Simple Hoja 30 M X _21.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2019.0
            },
            {
                "date": "2026-03-21",
                "price": 1211.4
            },
            {
                "date": "2026-03-28",
                "price": 2019.0
            },
            {
                "date": "2026-04-18",
                "price": 1211.4
            },
            {
                "date": "2026-04-25",
                "price": 2019.0
            }
        ]
    },
    {
        "id": 395,
        "name": "Papel Higiénico Higienol Plus Doble Hoja 20 M 4 U",
        "price": 2033.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Higienol Plus Doble Hoja_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2033.4
            }
        ]
    },
    {
        "id": 396,
        "name": "Papel Higiénico Felpita Premium Doble Hoja 4 U 20 M",
        "price": 2249.25,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Felpita Premium Doble Ho_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2249.25
            },
            {
                "date": "2026-03-21",
                "price": 1799.4
            },
            {
                "date": "2026-03-28",
                "price": 1999.0
            },
            {
                "date": "2026-04-02",
                "price": 2999.0
            },
            {
                "date": "2026-04-18",
                "price": 1799.4
            },
            {
                "date": "2026-04-25",
                "price": 2249.25
            }
        ]
    },
    {
        "id": 397,
        "name": "Papel Higienico Elegante Simple Hoja 30 M 6 U",
        "price": 2299.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higienico Elegante Simple Hoja 30 _9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3549.0
            },
            {
                "date": "2026-03-21",
                "price": 2129.4
            },
            {
                "date": "2026-03-28",
                "price": 3549.0
            },
            {
                "date": "2026-04-02",
                "price": 2306.85
            },
            {
                "date": "2026-04-08",
                "price": 2661.75
            },
            {
                "date": "2026-04-12",
                "price": 3549.0
            },
            {
                "date": "2026-04-18",
                "price": 2129.4
            },
            {
                "date": "2026-04-25",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 398,
        "name": "Papel Higienico Elegante Blanco Hoja Simple 4u",
        "price": 2669.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higienico Elegante Blanco Hoja Sim_16.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2669.0
            },
            {
                "date": "2026-03-21",
                "price": 1601.4
            },
            {
                "date": "2026-03-28",
                "price": 2669.0
            },
            {
                "date": "2026-04-02",
                "price": 1734.85
            },
            {
                "date": "2026-04-08",
                "price": 2669.0
            },
            {
                "date": "2026-04-18",
                "price": 1601.4
            },
            {
                "date": "2026-04-25",
                "price": 2669.0
            }
        ]
    },
    {
        "id": 399,
        "name": "Papel Higénico Higienol Plus Doble Hoja 30 M 4 U",
        "price": 2675.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higénico Higienol Plus Doble Hoja _1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2675.4
            }
        ]
    },
    {
        "id": 400,
        "name": "Papel Higiénico Elegante Aloe Vera 6x30mts",
        "price": 2799.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Elegante Aloe Vera 6x30m_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2399.4
            },
            {
                "date": "2026-04-25",
                "price": 2799.0
            }
        ]
    },
    {
        "id": 401,
        "name": "Pollo Entero Congelado 3 Kg",
        "price": 3589.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo Entero Congelado 3 Kg_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3589.0
            }
        ]
    },
    {
        "id": 402,
        "name": "Pollo Entero Fresco 3 Kg",
        "price": 3989.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo Entero Fresco 3 Kg_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3989.0
            }
        ]
    },
    {
        "id": 403,
        "name": "Pollo 1/4 Trasero Congelado 2 Kg",
        "price": 3989.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo 14 Trasero Congelado 2 Kg_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4990.0
            },
            {
                "date": "2026-03-28",
                "price": 3989.0
            },
            {
                "date": "2026-04-02",
                "price": 4990.0
            },
            {
                "date": "2026-04-08",
                "price": 4189.0
            },
            {
                "date": "2026-04-12",
                "price": 4990.0
            },
            {
                "date": "2026-04-25",
                "price": 3989.0
            }
        ]
    },
    {
        "id": 404,
        "name": "Muslo De Pollo 1 Kg",
        "price": 6490.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Muslo De Pollo 1 Kg_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6190.0
            },
            {
                "date": "2026-04-18",
                "price": 6490.0
            }
        ]
    },
    {
        "id": 405,
        "name": "Patas De Pollo 1,5 Kg",
        "price": 7439.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Patas De Pollo 15 Kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7139.0
            },
            {
                "date": "2026-04-18",
                "price": 7439.0
            }
        ]
    },
    {
        "id": 406,
        "name": "Pechuga De Pollo 0.9 Gr",
        "price": 9490.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pechuga De Pollo 09 Gr_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 9490.0
            }
        ]
    },
    {
        "id": 407,
        "name": "Suprema De Pollo Congelada 2 Kg",
        "price": 11900.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Suprema De Pollo Congelada 2 Kg_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 11900.0
            }
        ]
    },
    {
        "id": 408,
        "name": "Filet De Pechuga Sin Hueso 1,5 Kg",
        "price": 13699.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Filet De Pechuga Sin Hueso 15 Kg_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 13699.0
            }
        ]
    },
    {
        "id": 409,
        "name": "Queso Rallado La Serenísima Reggianito 35 G",
        "price": 1669.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Rallado La Serenísima Reggianito 3_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1669.0
            }
        ]
    },
    {
        "id": 410,
        "name": "Queso Untable Tonadita Jamón 180 G",
        "price": 1949.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Jamón 180 G_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1949.25
            }
        ]
    },
    {
        "id": 411,
        "name": "Queso Untable Tonadita Gruyere 180 G",
        "price": 1949.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Gruyere 180 G_21.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1949.25
            }
        ]
    },
    {
        "id": 412,
        "name": "Queso Rallado La Quesera 100 G",
        "price": 2099.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Rallado La Quesera 100 G_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1999.0
            },
            {
                "date": "2026-03-21",
                "price": 1499.0
            },
            {
                "date": "2026-03-28",
                "price": 1999.0
            },
            {
                "date": "2026-04-08",
                "price": 1499.0
            },
            {
                "date": "2026-04-18",
                "price": 2099.0
            }
        ]
    },
    {
        "id": 413,
        "name": "Queso Crema Tonadita Cremette Light 290 G",
        "price": 2249.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Tonadita Cremette Light 290 _11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2249.25
            }
        ]
    },
    {
        "id": 414,
        "name": "Queso Crema Tonadita Cremette Clásico 290 G",
        "price": 2249.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Tonadita Cremette Clásico 29_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2249.25
            }
        ]
    },
    {
        "id": 415,
        "name": "Queso Crema Tonadita Cremette Light 480 G",
        "price": 3224.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Tonadita Cremette Light 480 _7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3224.25
            }
        ]
    },
    {
        "id": 416,
        "name": "Queso Crema Tonadita Cremette Clásico 480 G",
        "price": 3224.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Tonadita Cremette Clásico 48_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3224.25
            }
        ]
    },
    {
        "id": 417,
        "name": "Queso Crema La Paulina Tradicional 290 G",
        "price": 3239.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema La Paulina Tradicional 290 G_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3239.0
            }
        ]
    },
    {
        "id": 418,
        "name": "Queso Crema La Paulina Light 290 G",
        "price": 3239.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema La Paulina Light 290 G_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3239.0
            }
        ]
    },
    {
        "id": 419,
        "name": "Sal Fina Aliada 500 G",
        "price": 1059.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Aliada 500 G_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 999.0
            },
            {
                "date": "2026-04-02",
                "price": 799.0
            },
            {
                "date": "2026-04-08",
                "price": 1059.0
            }
        ]
    },
    {
        "id": 420,
        "name": "Sal Check Fina 500 G",
        "price": 1159.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Check Fina 500 G_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1099.0
            },
            {
                "date": "2026-03-21",
                "price": 899.0
            },
            {
                "date": "2026-03-28",
                "price": 1099.0
            },
            {
                "date": "2026-04-08",
                "price": 1159.0
            },
            {
                "date": "2026-04-18",
                "price": 799.0
            },
            {
                "date": "2026-04-25",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 421,
        "name": "Sal Gruesa Dos Anclas 500 Gr",
        "price": 1409.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Dos Anclas 500 Gr_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1409.0
            }
        ]
    },
    {
        "id": 422,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1429.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Dos Anclas 500 Gr_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1071.75
            },
            {
                "date": "2026-03-21",
                "price": 1429.0
            },
            {
                "date": "2026-04-08",
                "price": 1619.0
            },
            {
                "date": "2026-04-08",
                "price": 1429.0
            },
            {
                "date": "2026-04-08",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-24",
                "price": 1429.0
            },
            {
                "date": "2026-04-24",
                "price": 1619.0
            },
            {
                "date": "2026-04-24",
                "price": 1429.0
            },
            {
                "date": "2026-04-24",
                "price": 1619.0
            },
            {
                "date": "2026-04-24",
                "price": 1429.0
            },
            {
                "date": "2026-04-24",
                "price": 1619.0
            },
            {
                "date": "2026-04-25",
                "price": 1429.0
            },
            {
                "date": "2026-04-25",
                "price": 1619.0
            },
            {
                "date": "2026-04-25",
                "price": 1429.0
            },
            {
                "date": "2026-04-25",
                "price": 1619.0
            }
        ]
    },
    {
        "id": 423,
        "name": "Pimienta Negra Alicante Molida Sin Tacc 25gr",
        "price": 1469.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Pimienta Negra Alicante Molida Sin Tacc _14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1469.0
            }
        ]
    },
    {
        "id": 424,
        "name": "Sal Gruesa Paquete Celusal 500 Gr",
        "price": 1479.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Paquete Celusal 500 Gr_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1479.0
            }
        ]
    },
    {
        "id": 425,
        "name": "Sal Fina Celusal Paquete 500 Gr",
        "price": 1559.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Celusal Paquete 500 Gr_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1469.0
            },
            {
                "date": "2026-04-12",
                "price": 1559.0
            }
        ]
    },
    {
        "id": 426,
        "name": "Sal Gruesa Aliada 1 Kg",
        "price": 1589.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Aliada 1 Kg_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1499.0
            },
            {
                "date": "2026-04-08",
                "price": 1589.0
            }
        ]
    },
    {
        "id": 427,
        "name": "Sal Gruesa Check 1 Kg",
        "price": 1589.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Check 1 Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1099.0
            },
            {
                "date": "2026-04-18",
                "price": 1589.0
            }
        ]
    },
    {
        "id": 428,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1619.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Dos Anclas 500 Gr_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1071.75
            },
            {
                "date": "2026-03-21",
                "price": 1429.0
            },
            {
                "date": "2026-04-08",
                "price": 1619.0
            },
            {
                "date": "2026-04-08",
                "price": 1429.0
            },
            {
                "date": "2026-04-08",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-12",
                "price": 1429.0
            },
            {
                "date": "2026-04-12",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-18",
                "price": 1429.0
            },
            {
                "date": "2026-04-18",
                "price": 1619.0
            },
            {
                "date": "2026-04-24",
                "price": 1429.0
            },
            {
                "date": "2026-04-24",
                "price": 1619.0
            },
            {
                "date": "2026-04-24",
                "price": 1429.0
            },
            {
                "date": "2026-04-24",
                "price": 1619.0
            },
            {
                "date": "2026-04-24",
                "price": 1429.0
            },
            {
                "date": "2026-04-24",
                "price": 1619.0
            },
            {
                "date": "2026-04-25",
                "price": 1429.0
            },
            {
                "date": "2026-04-25",
                "price": 1619.0
            },
            {
                "date": "2026-04-25",
                "price": 1429.0
            },
            {
                "date": "2026-04-25",
                "price": 1619.0
            }
        ]
    },
    {
        "id": 429,
        "name": "Palitos Aliada Salados 120 G",
        "price": 1209.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Palitos Aliada Salados 120 G_17.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1119.0
            },
            {
                "date": "2026-04-18",
                "price": 806.0
            },
            {
                "date": "2026-04-25",
                "price": 1209.0
            }
        ]
    },
    {
        "id": 430,
        "name": "Maní Salado Maní King Sin Piel 100 G",
        "price": 1489.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Maní Salado Maní King Sin Piel 100 G_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 431,
        "name": "Galletita Jamon Saladix 100 Gr",
        "price": 1569.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Jamon Saladix 100 Gr_11.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1176.75
            },
            {
                "date": "2026-03-28",
                "price": 1569.0
            },
            {
                "date": "2026-04-18",
                "price": 1046.0
            },
            {
                "date": "2026-04-25",
                "price": 1569.0
            }
        ]
    },
    {
        "id": 432,
        "name": "Galletita Pizza Saladix 100 Gr",
        "price": 1569.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Pizza Saladix 100 Gr_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1046.0
            },
            {
                "date": "2026-04-25",
                "price": 1569.0
            }
        ]
    },
    {
        "id": 433,
        "name": "Palitos Krachitos Salados 110g",
        "price": 1679.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Palitos Krachitos Salados 110g_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1139.25
            },
            {
                "date": "2026-03-21",
                "price": 1519.0
            },
            {
                "date": "2026-04-08",
                "price": 1679.0
            },
            {
                "date": "2026-04-18",
                "price": 1119.33
            },
            {
                "date": "2026-04-25",
                "price": 1679.0
            }
        ]
    },
    {
        "id": 434,
        "name": "Galletita Snacks Rex 125 Gr",
        "price": 2259.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Snacks Rex 125 Gr_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2059.0
            },
            {
                "date": "2026-04-18",
                "price": 1506.0
            },
            {
                "date": "2026-04-25",
                "price": 2259.0
            }
        ]
    },
    {
        "id": 435,
        "name": "Papas Fritas Quento Queso Crema Y Ciboulette 82 G",
        "price": 2299.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Papas Fritas Quento Queso Crema Y Ciboul_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 436,
        "name": "Papas Fritas Quento Jamón Serrano 82 G",
        "price": 2299.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Papas Fritas Quento Jamón Serrano 82 G_23.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 437,
        "name": "Galletita Club Social Sabor Original 144gr",
        "price": 2999.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Club Social Sabor Original 144_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1845.35
            },
            {
                "date": "2026-03-21",
                "price": 2839.0
            },
            {
                "date": "2026-03-28",
                "price": 2129.25
            },
            {
                "date": "2026-04-02",
                "price": 1845.35
            },
            {
                "date": "2026-04-08",
                "price": 2839.0
            },
            {
                "date": "2026-04-18",
                "price": 1999.33
            },
            {
                "date": "2026-04-25",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 438,
        "name": "Galletitas Crackers Club Social Sabor Jamón 24 G 6u",
        "price": 2999.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Crackers Club Social Sabor Ja_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1845.35
            },
            {
                "date": "2026-03-21",
                "price": 2839.0
            },
            {
                "date": "2026-03-28",
                "price": 2129.25
            },
            {
                "date": "2026-04-02",
                "price": 1845.35
            },
            {
                "date": "2026-04-08",
                "price": 2839.0
            },
            {
                "date": "2026-04-18",
                "price": 1999.33
            },
            {
                "date": "2026-04-25",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 439,
        "name": "Aceite Mezcla Siglo de Oro x 900 cc.",
        "price": 2950.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite Mezcla Siglo de Oro x 900 cc_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2950.0
            }
        ]
    },
    {
        "id": 440,
        "name": "Aceite Mezcla Cocinero x 900 cc.",
        "price": 3100.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite Mezcla Cocinero x 900 cc_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            },
            {
                "date": "2026-04-18",
                "price": 3250.0
            },
            {
                "date": "2026-04-25",
                "price": 3100.0
            }
        ]
    },
    {
        "id": 441,
        "name": "Aceite de Girasol Legitimo x 900 cc.",
        "price": 3750.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Legitimo x 900 cc_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 442,
        "name": "Aceite de Girasol Cañuelas x 900 cc.",
        "price": 3950.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 900 cc_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3800.0
            },
            {
                "date": "2026-04-12",
                "price": 3950.0
            }
        ]
    },
    {
        "id": 443,
        "name": "Aceite de Girasol Pureza x 900 cc.",
        "price": 4000.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Pureza x 900 cc_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3800.0
            },
            {
                "date": "2026-04-12",
                "price": 4000.0
            }
        ]
    },
    {
        "id": 444,
        "name": "Aceite de Girasol Natura x 900 cc.",
        "price": 4150.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Natura x 900 cc_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3950.0
            },
            {
                "date": "2026-03-28",
                "price": 4050.0
            },
            {
                "date": "2026-04-18",
                "price": 4150.0
            }
        ]
    },
    {
        "id": 445,
        "name": "Aceite de Girasol Cocinero x 900 cc.",
        "price": 4150.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Cocinero x 900 cc_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3950.0
            },
            {
                "date": "2026-04-18",
                "price": 4150.0
            }
        ]
    },
    {
        "id": 446,
        "name": "Rocio Vegetal sin Manteca con Harina Mama Cocina x 150 cc.",
        "price": 4150.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite_de_Oliva_Extra_Virgen_con_Limón_La_Toscana_x_250_cc._54.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4150.0
            }
        ]
    },
    {
        "id": 447,
        "name": "Rocío Vegetal La Anónima x 120 g.",
        "price": 4400.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Rocío Vegetal La Anónima x 120 g_0.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 4400.0
            }
        ]
    },
    {
        "id": 448,
        "name": "Aceite de Girasol La Anónima x 900 cc.",
        "price": 4550.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol La Anónima x 900 cc_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4550.0
            }
        ]
    },
    {
        "id": 449,
        "name": "Agua Mineral s/Gas Alvura x 500 cc.",
        "price": 1350.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Aceite de Oliva Pet Best x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            },
            {
                "date": "2026-04-18",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 450,
        "name": "Agua sin Gas Benedictino x 500 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua sin Gas Benedictino x 500 cc_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1500.0
            },
            {
                "date": "2026-04-25",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 451,
        "name": "Agua Mineral sin gas Bonaqua x 500 cc.",
        "price": 1550.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Bonaqua x 500 cc_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1500.0
            },
            {
                "date": "2026-04-25",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 452,
        "name": "Agua Mineral s/Gas Alvura x 1,5 Lt.",
        "price": 1650.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            },
            {
                "date": "2026-04-18",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 453,
        "name": "Agua Nestlé Pureza Vital sin gas Botella 500cc x1",
        "price": 1750.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Nestlé Pureza Vital sin gas Botella_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            },
            {
                "date": "2026-04-08",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 454,
        "name": "Agua Mineral s/Gas Villa del Sur x 600 cc.",
        "price": 1900.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua de Mesa sin Gas Benedictino 15L x 4_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            },
            {
                "date": "2026-04-08",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 455,
        "name": "Agua Mineral s/Gas Alvura x 2,25 Lt.",
        "price": 1900.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_25.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            },
            {
                "date": "2026-04-18",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 456,
        "name": "Agua Mineral sin Gas Sierra de los Padres x 2 Lt.",
        "price": 2000.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua_Mineral_sin_Gas_Sierra_de_los_Padres_x_2_Lt._12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            },
            {
                "date": "2026-04-18",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 457,
        "name": "Agua Mineral sin gas Glaciar x 500 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Glaciar x 500 cc_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2000.0
            },
            {
                "date": "2026-04-08",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 458,
        "name": "Agua Mineral sin gas Cellier x 2 lt.",
        "price": 2100.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Cellier x 2 lt_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 459,
        "name": "Pulpa de Manzana Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Manzana Pouch Zummy x 110 g_1.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1500.0
            },
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 460,
        "name": "Pulpa de Pera Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Pera Pouch Zummy x 110 g_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 461,
        "name": "Pulpa Mix Frutal Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa Mix Frutal Pouch Zummy x 110 g_19.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1500.0
            },
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 462,
        "name": "Pulpa de Ciruela Desecada Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceto Balsamico  De Nigris x 250 g_166.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1500.0
            },
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 463,
        "name": "Pulpa de Manzana&Durazno Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceto Balsamico  De Nigris x 250 g_166.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 464,
        "name": "Leche LV Modificada Etapa 3 Profutura Nutrilón x 200 cc.",
        "price": 2900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol La Anónima x 900 cc_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2850.0
            },
            {
                "date": "2026-04-25",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 465,
        "name": "Formula Lactea LV Etapa 2 Profutura Nutrilón x 200 cc.",
        "price": 3050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite_de_Girasol_La_Anónima_x_900_cc._2.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2950.0
            },
            {
                "date": "2026-04-25",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 466,
        "name": "NESTUM® sabor Banana x 225gr",
        "price": 7400.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM sabor Banana x 225gr_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 7050.0
            },
            {
                "date": "2026-04-18",
                "price": 7400.0
            }
        ]
    },
    {
        "id": 467,
        "name": "NESTUM® Arroz x 225gr",
        "price": 7650.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Arroz x 225gr_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 7250.0
            },
            {
                "date": "2026-04-18",
                "price": 7650.0
            }
        ]
    },
    {
        "id": 468,
        "name": "NIDO® 4 PREBIO 3 Leche en Polvo x 800gr",
        "price": 20350.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NIDO 4 PREBIO 3 Leche en Polvo x 800gr_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 20350.0
            }
        ]
    },
    {
        "id": 469,
        "name": "Arroz Grano Largo 00000 Cañuelas x 500 g.",
        "price": 1100.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Grano Largo 00000 Cañuelas x 500 g_15.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1050.0
            },
            {
                "date": "2026-04-25",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 470,
        "name": "Arroz Grano Largo Fino Molinos Ala x 500 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Aceto Balsamico  De Nigris x 500 g_167.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 471,
        "name": "Arroz Integral Cañuelas x 500 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Integral Cañuelas x 500 g_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1200.0
            },
            {
                "date": "2026-04-25",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 472,
        "name": "Arroz Largo Fino Don Marcos x 1 Kg.",
        "price": 1400.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Largo Fino Don Marcos x 1 Kg_33.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 473,
        "name": "Arroz Parboilizado Bolsa Dos Hermanos x 500 g.",
        "price": 1450.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Aceto Balsamico  De Nigris x 500 g_167.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 474,
        "name": "Arroz Parboil Don Marcos x 1 Kg.",
        "price": 1450.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Parboil Don Marcos x 1 Kg_30.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 475,
        "name": "Arroz Integral Molinos Ala x 500 g.",
        "price": 1450.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Integral Molinos Ala x 500 g_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 476,
        "name": "Arroz Parboil Cañuelas x 500 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Parboil Cañuelas x 500 g_18.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 477,
        "name": "Arroz Integral Bolsa Gallo x 500 g.",
        "price": 1700.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Integral Bolsa Gallo x 500 g_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 478,
        "name": "Arroz Largo Fino 00000 Bolsa Vanguardia x 1 Kg.",
        "price": 1700.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Doble Carolina Molinos Ala x 1 Kg_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 479,
        "name": "Carne Picada Envasado al Vacío Best x 500 g.",
        "price": 7980.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Carne_Picada_Envasado_al_Vacío_Best_x_500_g._0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7980.0
            }
        ]
    },
    {
        "id": 480,
        "name": "Carne Picada E/V Estancias LA x 500 g.",
        "price": 10210.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Aceite_de_Oliva_Extra_Virgen_Lata_La_Anónima_x_500_cc._47.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10210.0
            }
        ]
    },
    {
        "id": 481,
        "name": "Preparado para Medallones Estancias La x 500 g.",
        "price": 11740.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Preparado_para_Medallones_Estancias_La_x_500_g._37.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11740.0
            }
        ]
    },
    {
        "id": 482,
        "name": "Carne Picada M. E/V Estancias LA x 500 g.",
        "price": 12790.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Aceite_de_Oliva_Extra_Virgen_Lata_La_Anónima_x_500_cc._47.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 12790.0
            }
        ]
    },
    {
        "id": 483,
        "name": "Tapa de Bife Envasado al Vacío FB MEATS (Kg)",
        "price": 12990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Asado Chueso Congelado FB MEATS Kg_25.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12490.0
            },
            {
                "date": "2026-04-02",
                "price": 12990.0
            }
        ]
    },
    {
        "id": 484,
        "name": "Asado C/hueso Congelado FB MEATS (Kg)",
        "price": 13490.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Asado Chueso Congelado FB MEATS Kg_25.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12990.0
            },
            {
                "date": "2026-04-02",
                "price": 13490.0
            }
        ]
    },
    {
        "id": 485,
        "name": "Chingolo Envasado al Vacío FB MEATS (Kg)",
        "price": 13990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Chingolo Envasado al Vacío FB MEATS Kg_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 13990.0
            }
        ]
    },
    {
        "id": 486,
        "name": "Matambre Envasado al Vacío FB MEATS (Kg)",
        "price": 13990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Matambre Envasado al Vacío FB MEATS Kg_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 13990.0
            }
        ]
    },
    {
        "id": 487,
        "name": "Vacío Envasado al Vacío FB MEATS (Kg)",
        "price": 14990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Vacío Envasado al Vacío FB MEATS Kg_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 14990.0
            }
        ]
    },
    {
        "id": 488,
        "name": "Tapa de Nalga FB MEATS Envasado al Vacío",
        "price": 14990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Tapa de Nalga FB MEATS Envasado al Vacío_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 14990.0
            }
        ]
    },
    {
        "id": 489,
        "name": "Maíz Inflado Dulce Capullitos Flor x 80 g.",
        "price": 650.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Arroz Inflado Dulce Capullitos Flor x 80_38.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 650.0
            }
        ]
    },
    {
        "id": 490,
        "name": "Trigo Inflado Dulce Capullitos Flor x 80 g.",
        "price": 680.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Arroz Inflado Dulce Capullitos Flor x 80_38.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 680.0
            }
        ]
    },
    {
        "id": 491,
        "name": "Arroz Inflado Dulce Capullitos Flor x 80 g.",
        "price": 950.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Arroz Carnaroli Gallo x 500 g_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 950.0
            }
        ]
    },
    {
        "id": 492,
        "name": "Maíz Inflado Acaramelado Egran con Maní x 80 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Aritos con Miel Granix x 130 g_58.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 493,
        "name": "Cereal en barra light Yogur Frutilla Cereal Mix x 26 g.",
        "price": 1350.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Agua S Gas Baja En Sodio  Ser x 15 Lt_26.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1250.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 494,
        "name": "Barra de Cereal Almendras y Maní Cereal Mix x 33 g.",
        "price": 1350.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Aceite de Girasol Cocinero x 900 cc_33.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 495,
        "name": "Cereal en Barra Proteína Cereal Mix Yogur Frutilla y Frutos Rojos x 26 g.",
        "price": 1350.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Agua S Gas Baja En Sodio  Ser x 15 Lt_26.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1200.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 496,
        "name": "Barra de Manzana Roja Frutty x 30 g.",
        "price": 1400.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Barra de Manzana Roja Frutty x 30 g_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 497,
        "name": "Maiz Inflado Acaramelado Egran x 80 g.",
        "price": 1550.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maiz Inflado Acaramelado Egran x 80 g_35.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 498,
        "name": "Cereal con Cacao Cereal Mix x 100 g.",
        "price": 1650.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Cereal con Cacao Cereal Mix x 100 g_28.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 499,
        "name": "Cerveza Quilmes 0.0% Lata 473cc x1",
        "price": 2200.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Andes Lata 473cc x6_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 500,
        "name": "Cerveza Porrón Michelob x 275 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Porrón Michelob x 275 cc_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2350.0
            }
        ]
    },
    {
        "id": 501,
        "name": "Cerveza Schneider Lata x 473 cc.",
        "price": 2450.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Schneider Lata x 473 cc_100.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-12",
                "price": 2450.0
            }
        ]
    },
    {
        "id": 502,
        "name": "Cerveza Lager Lata Amstel x 473 cc.",
        "price": 2550.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Lager Lata Amstel x 473 cc_101.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2450.0
            },
            {
                "date": "2026-04-12",
                "price": 2550.0
            }
        ]
    },
    {
        "id": 503,
        "name": "Cerveza Rubia Budweiser Lata 473cc",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Rubia Budweiser Lata 473cc_26.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 504,
        "name": "Cerveza Quilmes Hinchada Lata 473cc x1",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Quilmes Hinchada Lata 473cc x1_33.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 505,
        "name": "Cerveza Brahma Chopp Lata 473cc x1",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Brahma Chopp Lata 473cc x1_46.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 506,
        "name": "Cerveza Imperial Lata x 473 cc.",
        "price": 2900.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Imperial Lata x 473 cc_47.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 507,
        "name": "Cerveza Golden Lata Imperial x 473 cc.",
        "price": 2900.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Golden Lata Imperial x 473 cc_100.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 508,
        "name": "Cerveza Rubia Lata Salta x 473 cc.",
        "price": 2900.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Rubia Lata Salta x 473 cc_108.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 509,
        "name": "Dr. Lemon Vodka s/ Tacc x 275 cc.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Dr Lemon Vodka s Tacc x 275 cc_37.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 510,
        "name": "Amargo Pomelo Rosado Tres Torres x 1,5 Lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 511,
        "name": "Amargo Blanco Tres Torres Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 512,
        "name": "Amargo Tres Torres Limón Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 513,
        "name": "Amargo Serrano Tres Torres Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 514,
        "name": "Amargo Serrano La Anónima x 1,5 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 515,
        "name": "Amargo Cordillerano La Anónima x 1,5 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 516,
        "name": "Amargo Citrus La Anónima x 1,5 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 517,
        "name": "Amargo Pomelo Rosado La Anónima x 1,5 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 15 Lt_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 518,
        "name": "Fernet con Pomelo 1882 x 473 cc.",
        "price": 2100.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite_de_Oliva_Extra_Virgen_con_Limón_La_Toscana_x_250_cc._54.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 519,
        "name": "Pate de Jamón Bocatti x 90 g.",
        "price": 2000.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Pate de Jamón Bocatti x 90 g_29.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 520,
        "name": "Pate con Pimienta Verde Bocatti x 90 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Pate con Pimienta Verde Bocatti x 90 g_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 521,
        "name": "Paté Panceta Ahumada Bocatti x 90 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Paté Panceta Ahumada Bocatti x 90 g_20.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 522,
        "name": "Leberwurst Cagnoli x 150 g.",
        "price": 2600.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Leberwurst Cagnoli x 150 g_24.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 523,
        "name": "Salchichón Primavera Feteado Zur Linde x 200 g.",
        "price": 2650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Galletitas de Coco Santa María x 200 g_23.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 524,
        "name": "Mortadela con Pistacho Bocatti x 70 g.",
        "price": 2650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Mortadela con Pistacho Bocatti x 70 g_24.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 525,
        "name": "Lomo al Horno Feteado Var.Log5 Bocatti x 70 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Avena Integral Extrafina Quaker x 470 g_70.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 526,
        "name": "Salchichón con Jamón Feteado Zur Linde x 200 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aritos con Miel Granix x 130 g_58.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 527,
        "name": "Leberwurst Cabaña Argentina x 200 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Leberwurst Cabaña Argentina x 200 g_20.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2150.0
            },
            {
                "date": "2026-03-28",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 528,
        "name": "Salame Milán Feteado Var.Log.5 Bocatti x 70 g.",
        "price": 2750.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Ají Molido Dos Anclas x 50 g_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 529,
        "name": "Frutillas Congeladas Karinat x 300 g.",
        "price": 5850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Frutillas Congeladas Karinat x 300 g_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 5850.0
            }
        ]
    },
    {
        "id": 530,
        "name": "Frutillas Congeladas La Anónima x 300 g.",
        "price": 6000.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Frutillas Congeladas La Anónima x 300 g_2.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 6000.0
            }
        ]
    },
    {
        "id": 531,
        "name": "Arándanos Congelados La Anónima x 300 g.",
        "price": 6300.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Arándanos Congelados La Anónima x 300 g_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 6300.0
            }
        ]
    },
    {
        "id": 532,
        "name": "Arándanos Congelados Green Life x 300 g.",
        "price": 6650.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Arándanos Congelados Green Life x 300 g_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 6650.0
            }
        ]
    },
    {
        "id": 533,
        "name": "Mix Berries Congelados Karinat x 300 g.",
        "price": 7400.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Mix Berries Congelados Karinat x 300 g_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 7400.0
            }
        ]
    },
    {
        "id": 534,
        "name": "Frutillas Enteras Congeladas Green Life x 400 g.",
        "price": 7700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Arándanos Congelados Green Life x 300 g_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 7700.0
            }
        ]
    },
    {
        "id": 535,
        "name": "Mix Cuatro Berries Green Life x 400 g.",
        "price": 9900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Mix Cuatro Berries Green Life x 400 g_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 9900.0
            }
        ]
    },
    {
        "id": 536,
        "name": "Mix Berries Congelados Karinat x 400 g.",
        "price": 12050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Mix Berries Congelados Karinat x 400 g_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 12050.0
            }
        ]
    },
    {
        "id": 537,
        "name": "Frutilla Congelada Karinat x 1000 g.",
        "price": 13050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Frutilla Congelada Karinat x 1000 g_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 13050.0
            }
        ]
    },
    {
        "id": 538,
        "name": "Frambuesas Congeladas Green Life x 400 g.",
        "price": 14750.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Frambuesas Congeladas Green Life x 400 g_2.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 14750.0
            }
        ]
    },
    {
        "id": 539,
        "name": "Gaseosa Pepsi Black Lata 354cc x1",
        "price": 1550.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Pepsi Black Lata 354cc x1_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 540,
        "name": "Gaseosa Cola s/Azúcar Lata Coca Cola x 354 cc.",
        "price": 1550.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Aceite_de_Oliva_Extra_Virgen_Clásico_Lata_Lira_x_500_cc._12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 541,
        "name": "Gaseosa Lima Limón s/Azúcar Lata Sprite x 354 cc.",
        "price": 1550.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Aceite_de_Oliva_Extra_Virgen_Clásico_Lata_Lira_x_500_cc._12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 542,
        "name": "Gaseosa Pomelo Lata Schweppes x 310 cc.",
        "price": 1550.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Pomelo Lata Schweppes x 310 cc_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 543,
        "name": "Gaseosa Lima Limón Zero Ice Sprite x 473 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Aceite_de_Oliva_Extra_Virgen_con_Limón_La_Toscana_x_250_cc._54.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 544,
        "name": "Gaseosa Pepsi Black Botella 500cc x1",
        "price": 1850.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Pepsi Black Botella 500cc x1_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 545,
        "name": "Gaseosa Cola Coca-Cola Light Pet x 500 cc.",
        "price": 1850.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Aceite de Oliva Pet Best x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 546,
        "name": "Gaseosa Cola Diet Coca-Cola Zero Pet x 500 cc.",
        "price": 1850.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Aceite de Oliva Pet Best x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 547,
        "name": "Gaseosa Lima Limón sin Azúcar Sprite Pet x 500 cc.",
        "price": 1850.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Aceite de Oliva Pet Best x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 548,
        "name": "Gaseosa Naranja Diet Fanta Zero Pet x 500 cc.",
        "price": 1850.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Aceite de Oliva Pet Best x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 549,
        "name": "Medallones Carne Vacuna con Soja x 2 Un. Tres Cruces x 110 g.",
        "price": 1800.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 40 g_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1600.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 550,
        "name": "Medallones de Carne Vacuna Best x 2 un. 110 gr.",
        "price": 2200.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones_de_Carne_Vacuna_Best_x_2_un._110_gr._3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2100.0
            },
            {
                "date": "2026-04-08",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 551,
        "name": "Medallones de Carne Vacuna Doble Swift x 2 un. 112 gr.",
        "price": 2450.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones_de_Carne_Vacuna_Doble_Swift_x_2_un._112_gr._5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2100.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            },
            {
                "date": "2026-04-25",
                "price": 2450.0
            }
        ]
    },
    {
        "id": 552,
        "name": "Medallones de Carne Vacuna Express x 2 Un. Paty x 110 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Aceite de Maíz Clásico Mazola Aerosol x _2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2450.0
            },
            {
                "date": "2026-03-21",
                "price": 2600.0
            },
            {
                "date": "2026-04-25",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 553,
        "name": "Medallones de Carne Vacuna x 2 Un.  Swift x 320 g.",
        "price": 3250.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones_de_Carne_Vacuna_x_2_Un.__Swift_x_320_g._23.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2800.0
            },
            {
                "date": "2026-03-28",
                "price": 3050.0
            },
            {
                "date": "2026-04-25",
                "price": 3250.0
            }
        ]
    },
    {
        "id": 554,
        "name": "Medallón Hamburguesa Champion. x 4 u. 224 GR",
        "price": 3300.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallón_Hamburguesa_Champion._x_4_u._224_GR_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 555,
        "name": "Hamburguesa Carne Vacuna Finitas x 2 Un. Paty x 110 g.",
        "price": 3400.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesa_Carne_Vacuna_Finitas_x_2_Un._Paty_x_110_g._46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3150.0
            },
            {
                "date": "2026-03-21",
                "price": 3400.0
            },
            {
                "date": "2026-04-18",
                "price": 3500.0
            },
            {
                "date": "2026-04-25",
                "price": 3400.0
            }
        ]
    },
    {
        "id": 556,
        "name": "Hamburguesas de Carne Vacuna La Anónima x 2 un. 110 gr.",
        "price": 3450.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesas_de_Carne_Vacuna_La_Anónima_x_2_un._110_gr._11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3250.0
            },
            {
                "date": "2026-04-08",
                "price": 3450.0
            }
        ]
    },
    {
        "id": 557,
        "name": "Medallones de Carne Vacuna x 4 un. La Blanca x 276 gr.",
        "price": 4350.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones_de_Carne_Vacuna_x_4_un._La_Blanca_x_276_gr._50.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3750.0
            },
            {
                "date": "2026-03-28",
                "price": 4100.0
            },
            {
                "date": "2026-04-25",
                "price": 4350.0
            }
        ]
    },
    {
        "id": 558,
        "name": "Medallones de Carne Vacuna x 4 Un. Barfy x 276 g.",
        "price": 4450.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones_de_Carne_Vacuna_x_4_Un._Barfy_x_276_g._39.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4450.0
            }
        ]
    },
    {
        "id": 559,
        "name": "Harina de Trigo 000 Catriel x 1 Kg.",
        "price": 930.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo 000 Catriel x 1 Kg_24.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 930.0
            }
        ]
    },
    {
        "id": 560,
        "name": "Harina de Trigo 000 Morixe x 1 Kg.",
        "price": 1050.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo 000 Morixe x 1 Kg_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 561,
        "name": "Harina de Trigo 000 Caserita x 1 Kg.",
        "price": 1050.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo 000 Caserita x 1 Kg_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 562,
        "name": "Harina de Trigo Tipo 000 Best x 1 Kg.",
        "price": 1050.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo Tipo 000 Best x 1 Kg_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 563,
        "name": "Harina de Trigo 000 Chacabuco x 1 Kg.",
        "price": 1100.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo 000 Chacabuco x 1 Kg_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 564,
        "name": "Harina de Trigo 000 Favorita x 1000 g.",
        "price": 1100.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo 000 Favorita x 1000 g_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 565,
        "name": "Harina 000 Ultra Refinada  Cañuelas x 1 Kg.",
        "price": 1150.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina_000_Ultra_Refinada__Cañuelas_x_1_Kg._67.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 566,
        "name": "Harina de Trigo 0000 Chacabuco x 1 Kg.",
        "price": 1250.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo 0000 Chacabuco x 1 Kg_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1300.0
            },
            {
                "date": "2026-04-25",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 567,
        "name": "Harina de Trigo Tipo 0000 Best x 1 Kg.",
        "price": 1300.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo Tipo 0000 Best x 1 Kg_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1300.0
            }
        ]
    },
    {
        "id": 568,
        "name": "Harina de Trigo 000 La Anonima x 1 Kg.",
        "price": 1300.0,
        "market": "aura",
        "category": "harinas",
        "image": "images/laanonima/Harina de Trigo 000 La Anonima x 1 Kg_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1300.0
            }
        ]
    },
    {
        "id": 569,
        "name": "Bebida Energizante Speed x 269 cc.",
        "price": 1900.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Energizante Speed x 269 cc_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 570,
        "name": "Bebida Fresh Blue Full Sport x 500 cc.",
        "price": 2000.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Fresh Blue Full Sport x 500 cc_26.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            },
            {
                "date": "2026-04-08",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 571,
        "name": "Bebida Uva Powerade x 500 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Uva Powerade x 500 cc_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 572,
        "name": "Bebida de Moras Pet Gatorade Sin Azúcar x 400 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Aceite de Coco Neutro Entrenuts x 360 cc_29.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 573,
        "name": "Bebida de Fresa y Kiwi Pet Gatorade Sin Azúcar x 400 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Aceite de Coco Neutro Entrenuts x 360 cc_29.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 574,
        "name": "Powerade Frutas Tropicales x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Powerade Frutas Tropicales x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            },
            {
                "date": "2026-04-12",
                "price": 2350.0
            },
            {
                "date": "2026-04-25",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 575,
        "name": "Bebida Powerade Manzana x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Powerade Manzana x 500 cc_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            },
            {
                "date": "2026-04-12",
                "price": 2350.0
            },
            {
                "date": "2026-04-25",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 576,
        "name": "Bebida Powerade Naranja x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Powerade Naranja x 500 cc_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            },
            {
                "date": "2026-04-12",
                "price": 2350.0
            },
            {
                "date": "2026-04-25",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 577,
        "name": "Powerade Mountain Blast x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Powerade Mountain Blast x 500 cc_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            },
            {
                "date": "2026-04-12",
                "price": 2350.0
            },
            {
                "date": "2026-04-25",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 578,
        "name": "Bebida Manzana Suerox x 630 cc.",
        "price": 2600.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Manzana Suerox x 630 cc_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 579,
        "name": "Bebida Láctea Frutilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida_Láctea_Frutilla_Tetra_La_Serenísima_x_200_cc._53.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 580,
        "name": "Bebida Láctea Vainilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida_Láctea_Vainilla_Tetra_La_Serenísima_x_200_cc._57.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 581,
        "name": "Leche LV Entera Clásica Fortificada c/ Vitamina 3% La Serenísima x 200 cc.",
        "price": 1350.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Aceite de Girasol La Anónima x 900 cc_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 582,
        "name": "Alimento Lácteo Primeros Años  Las Tres Niñas  x 200 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Aderezo p Ensaladas Caesar x 200 cc_248.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 583,
        "name": "Protein chocolate 200ml",
        "price": 1700.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Protein chocolate 200ml_43.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1650.0
            },
            {
                "date": "2026-03-28",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 584,
        "name": "NIDO® 3 Defensas Leche Infantil Listo para Tomar x 200ml.",
        "price": 1700.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Alfajor sin Tacc Dulce de Leche x 3 Un H_17.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1600.0
            },
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 585,
        "name": "Bebida Lactea a Base de Leche Capuchino Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Aceite de Coco Neutro Entrenuts x 360 cc_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 586,
        "name": "Bebida Lactea a Base de Leche Caramel Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Aceite de Coco Neutro Entrenuts x 360 cc_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 587,
        "name": "Bebida Lactea a Base de Leche Avellanas Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Aceite de Coco Neutro Entrenuts x 360 cc_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 588,
        "name": "Leche Ultra Entera Sachet 3% Casanto x 1 Lt.",
        "price": 1800.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche_Ultra_Entera_Sachet_3%_Casanto_x_1_Lt._24.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 589,
        "name": "Pañales Huggies Classic P x30",
        "price": 12500.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Huggies Classic P x30_44.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12500.0
            }
        ]
    },
    {
        "id": 590,
        "name": "Pañal Huggies Flexi Comfort XG x16",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort XG x16_23.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 591,
        "name": "Pañal Huggies Flexi Comfort G x20",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort G x20_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 592,
        "name": "Pañales Babysec Super Premium Recien Nacido 20 Un.",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Babysec Premium Pants G 28 Un_25.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13350.0
            },
            {
                "date": "2026-04-02",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 593,
        "name": "Traje Baño M Little Swimm Huggies x 11 un.",
        "price": 14550.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Bolsa Residuo Baño 34X38Cm Task x 20 un_124.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14550.0
            }
        ]
    },
    {
        "id": 594,
        "name": "Pañal Huggies Protect Plus P x30",
        "price": 14600.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Protect Plus P x30_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14600.0
            }
        ]
    },
    {
        "id": 595,
        "name": "Traje de Baño Descremado  Splashers G-XG Pampers x 10 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Aceite de Oliva Pet Best x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 596,
        "name": "Traje de Baño Descremado  Splashers P-M Pampers x 12 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje_de_Baño_Descremado__Splashers_P-M_Pampers_x_12_un._10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 597,
        "name": "Traje de Baño Descremado  Splashers M-G Pampers x 11 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje_de_Baño_Descremado__Splashers_M-G_Pampers_x_11_un._12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 598,
        "name": "Pañal Huggies Flexi Comfort P x30",
        "price": 17150.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort P x30_29.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 17150.0
            }
        ]
    },
    {
        "id": 599,
        "name": "Pollo Fresco Pollolin (Kg)",
        "price": 4190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Fresco Pollolin Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 600,
        "name": "Pollo Tres Arroyos Congelado (Kg)",
        "price": 4190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Tres Arroyos Congelado Kg_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 601,
        "name": "Cuarto Trasero de Pollo La Anónima (Kg)",
        "price": 5190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cuarto Trasero de Pollo La Anónima Kg_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5190.0
            }
        ]
    },
    {
        "id": 602,
        "name": "Muslo de Pollo La Anónima (Kg)",
        "price": 5890.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Muslo de Pollo La Anónima Kg_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5890.0
            }
        ]
    },
    {
        "id": 603,
        "name": "PataMuslo de Pollo La Anónima (Kg)",
        "price": 6490.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/PataMuslo de Pollo La Anónima Kg_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6490.0
            }
        ]
    },
    {
        "id": 604,
        "name": "Pollo Refrigerado Bandeja Pollolin (Kg)",
        "price": 6550.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Refrigerado Bandeja Pollolin Kg_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6550.0
            }
        ]
    },
    {
        "id": 605,
        "name": "Cuarto Trasero Bandeja Pollolin (Kg)",
        "price": 6990.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cuarto Trasero Bandeja Pollolin Kg_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 6990.0
            }
        ]
    },
    {
        "id": 606,
        "name": "Muslo Pollolin (Kg)",
        "price": 7690.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Muslo Pollolin Kg_10.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 7690.0
            }
        ]
    },
    {
        "id": 607,
        "name": "Pechugas de Pollo La Anónima (Kg)",
        "price": 8990.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pechugas de Pollo La Anónima Kg_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 8990.0
            }
        ]
    },
    {
        "id": 608,
        "name": "Pata Muslo Bandeja Pollolin (Kg)",
        "price": 9150.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pata Muslo Bandeja Pollolin Kg_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 9150.0
            }
        ]
    },
    {
        "id": 609,
        "name": "Aderezo Rallado Sabor Queso Best x 40 g.",
        "price": 960.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 40 g_2.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 960.0
            }
        ]
    },
    {
        "id": 610,
        "name": "Queso Rallado La Quesera x 40 g.",
        "price": 970.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Quesera x 40 g_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 970.0
            }
        ]
    },
    {
        "id": 611,
        "name": "Queso Rallado Reggianito La Serenísima x 35 g.",
        "price": 1800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aceite_Oliva_Extra_Virgen_Vidrio_Aniversario_La_Anónima_x_500_cc._35.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 612,
        "name": "Queso Rallado La Quesera x 100 g.",
        "price": 2200.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Quesera x 100 g_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 613,
        "name": "Aderezo Rallado Sabor Queso Best x 100 g.",
        "price": 2350.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 100 g_1.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2350.0
            }
        ]
    },
    {
        "id": 614,
        "name": "Queso Cheddar En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Cheddar En Fetas x 8 Un Tonadita x_1.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 615,
        "name": "Queso Provolone En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 100 g_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 616,
        "name": "Queso en Hebras Mini La Paulina x 80 g.",
        "price": 3050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso en Hebras Mini La Paulina x 80 g_43.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 617,
        "name": "Queso de Cerdo Feteado 42 x 200 g.",
        "price": 3300.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso de Cerdo Feteado 42 x 200 g_102.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 618,
        "name": "Queso Rallado Reggianito La Serenísima x 70 g.",
        "price": 3450.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Alioli La Anonima x 330 g_124.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3450.0
            }
        ]
    },
    {
        "id": 619,
        "name": "Polvo para preparar Salsa Blanca Dos Anclas x 40 g.",
        "price": 840.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Aceto Balsámico Dos Anclas x 250 cc_264.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 840.0
            }
        ]
    },
    {
        "id": 620,
        "name": "Sal Gruesa Paquete Dos Anclas x 500 g.",
        "price": 1350.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Gruesa Paquete Dos Anclas x 500 g_1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 621,
        "name": "Sal Entrefina Paquete Dos Anclas x 500 g.",
        "price": 1350.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Aceto Balsamico  De Nigris x 500 g_167.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 622,
        "name": "Ajo en Polvo Deshidratado Dos Anclas x 20 g.",
        "price": 1400.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Aceto Balsámico Dos Anclas x 250 cc_264.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 623,
        "name": "Sal Fina Paquete Dos Anclas x 500 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Fina Paquete Dos Anclas x 500 g_0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 624,
        "name": "Condimento para Pizza Dos Anclas x 25 g.",
        "price": 1550.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Condimento para Pizza Dos Anclas x 25 g_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 625,
        "name": "Sal Fina Dos Anclas Estuche x 500 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Fina Dos Anclas Estuche x 500 g_2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 626,
        "name": "Pimienta Negra Molida Sobre Dos Anclas x 25 g.",
        "price": 2150.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Aceto Balsámico Dos Anclas x 250 cc_264.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 627,
        "name": "Ají Molido Dos Anclas x 50 g.",
        "price": 2200.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Ají Molido Dos Anclas x 50 g_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 628,
        "name": "Sal Gruesa Paquete Dos Anclas x 1 Kg.",
        "price": 2600.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Gruesa Paquete Dos Anclas x 1 Kg_117.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 629,
        "name": "Cereal Aritos Frutados Julicroc x 150 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cereal Aritos Frutados Julicroc x 150 g_21.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1200.0
            },
            {
                "date": "2026-04-25",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 630,
        "name": "Cereal Bolitas de Chocolate Julicroc x 150 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceto Balsamico  De Nigris x 250 g_166.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            },
            {
                "date": "2026-04-25",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 631,
        "name": "Barrita Vegana Brownie Laddu Bar x 30 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Barrita Vegana Brownie Laddu Bar x 30 g_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 632,
        "name": "Barrita Vegana Choco Naranja Laddu Bar x 30 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Arroz Doble Carolina Molinos Ala x 500 g_30.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 633,
        "name": "Papas Fritas Sabor Cheddar Julicroc x 70 g.",
        "price": 1800.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 100 g_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            },
            {
                "date": "2026-04-25",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 634,
        "name": "Almohaditas Rellena de Avellana sin Tacc Snuks x 90 g.",
        "price": 1850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Oliva Puro sin Tacc Pet Cocine_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 635,
        "name": "Galletitas sabor Chocolate sin Tacc Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite_de_Oliva_Puro_sin_Tacc_Pet_Cocinero_x_1_Lt._24.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 636,
        "name": "Galletitas sabor Frutilla sin Tacc Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite_de_Oliva_Puro_sin_Tacc_Pet_Cocinero_x_1_Lt._24.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 637,
        "name": "Galletitas Rellenas Vainilla Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Alimento_a_Base_de_Coco_Sabor_Vainilla_Coco_Iogo_x_160_g._72.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 638,
        "name": "Harina de Arroz s/Gluten Dos Hermanos x 500 g.",
        "price": 2000.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Aceite de Oliva Pet Best x 500 cc_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 639,
        "name": "Vinagre de Alcohol 1 Lts Cuisine y Co",
        "price": 1450.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Alcohol 1 Lts Cuisine y Co_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 640,
        "name": "Vinagre de Alcohol 1 Lts Favinco",
        "price": 1550.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Alcohol 1 Lts Favinco_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 641,
        "name": "Vinagre de Alcohol 1 Lts Casalta",
        "price": 1700.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Alcohol 1 Lts Casalta_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 642,
        "name": "Vinagre de Alcohol 1 Lts Menoyo",
        "price": 1700.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Alcohol 1 Lts Menoyo_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 643,
        "name": "Vinagre de Alcohol 1 Lts Dos Anclas",
        "price": 1750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Alcohol 1 Lts Dos Anclas_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 644,
        "name": "Aceite de Girasol 900 Ml Legitimo",
        "price": 3355.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite de Girasol 900 Ml Legitimo_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3355.0
            }
        ]
    },
    {
        "id": 645,
        "name": "Jugo Sabor Limón 500 Cc Minerva",
        "price": 3450.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Jugo Sabor Limón 500 Cc Minerva_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2587.5
            },
            {
                "date": "2026-04-25",
                "price": 3450.0
            }
        ]
    },
    {
        "id": 646,
        "name": "Aceite de Girasol 900 Ml Cañuelas",
        "price": 3750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite de Girasol 900 Ml Cañuelas_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 647,
        "name": "Aceite De Girasol 900 Ml Cocinero",
        "price": 3950.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite De Girasol 900 Ml Cocinero_4.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3750.0
            },
            {
                "date": "2026-04-18",
                "price": 3950.0
            }
        ]
    },
    {
        "id": 648,
        "name": "Aceite de Girasol 900 Ml Natura",
        "price": 4200.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite de Girasol 900 Ml Natura_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4200.0
            }
        ]
    },
    {
        "id": 649,
        "name": "Agua Cellier Sin Gas 2lt",
        "price": 1249.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Cellier Sin Gas 2lt_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1159.0
            },
            {
                "date": "2026-04-18",
                "price": 1249.0
            }
        ]
    },
    {
        "id": 650,
        "name": "Agua Nestle Pureza Vital 1.5lt",
        "price": 1350.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Nestle Pureza Vital 15lt_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 651,
        "name": "Soda 2.25 Lts Cuisine & Co",
        "price": 1400.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Soda 225 Lts Cuisine  Co_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1590.0
            },
            {
                "date": "2026-04-08",
                "price": 910.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-18",
                "price": 890.0
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 652,
        "name": "Agua Villa Del Sur Pet Sin Gas 2250 Ml",
        "price": 1470.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Villa Del Sur Pet Sin Gas 2250 Ml_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1470.0
            }
        ]
    },
    {
        "id": 653,
        "name": "Agua Nestle Pureza Vital 2.25lt",
        "price": 1590.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Nestle Pureza Vital 225lt_17.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1626.95
            },
            {
                "date": "2026-04-12",
                "price": 1501.8
            },
            {
                "date": "2026-04-25",
                "price": 1590.0
            }
        ]
    },
    {
        "id": 654,
        "name": "Soda Sierra De Los Padres 1.75lt",
        "price": 1667.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Soda Sierra De Los Padres 175lt_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1667.0
            }
        ]
    },
    {
        "id": 655,
        "name": "Agua Sin Gas Villavicencio 2 L",
        "price": 1830.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Sin Gas Villavicencio 2 L_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1710.0
            },
            {
                "date": "2026-03-16",
                "price": 1850.0
            },
            {
                "date": "2026-03-21",
                "price": 1710.0
            },
            {
                "date": "2026-04-02",
                "price": 1852.5
            },
            {
                "date": "2026-04-08",
                "price": 1890.0
            },
            {
                "date": "2026-04-18",
                "price": 1830.0
            }
        ]
    },
    {
        "id": 656,
        "name": "Agua Mineral Eco De Los Andes Sin Gas 2 L",
        "price": 1860.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Mineral Eco De Los Andes Sin Gas 2 _16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1716.6
            },
            {
                "date": "2026-03-16",
                "price": 1859.65
            },
            {
                "date": "2026-03-21",
                "price": 1750.8
            },
            {
                "date": "2026-04-02",
                "price": 1896.7
            },
            {
                "date": "2026-04-08",
                "price": 1917.5
            },
            {
                "date": "2026-04-12",
                "price": 1770.0
            },
            {
                "date": "2026-04-25",
                "price": 1860.0
            }
        ]
    },
    {
        "id": 657,
        "name": "Soda 1.75 Lts Cuisine & Co",
        "price": 1870.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Soda 175 Lts Cuisine  Co_0.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1870.0
            },
            {
                "date": "2026-04-08",
                "price": 1215.5
            },
            {
                "date": "2026-04-12",
                "price": 1300.0
            },
            {
                "date": "2026-04-18",
                "price": 1215.5
            },
            {
                "date": "2026-04-25",
                "price": 1870.0
            }
        ]
    },
    {
        "id": 658,
        "name": "Saborizada Levite Pomelo 2.25lt",
        "price": 2040.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Saborizada Levite Pomelo 225lt_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2210.0
            },
            {
                "date": "2026-04-25",
                "price": 2040.0
            }
        ]
    },
    {
        "id": 659,
        "name": "Arroz Grano Largo 500 Grs Molinos Ala",
        "price": 825.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo 500 Grs Molinos Ala_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 825.0
            }
        ]
    },
    {
        "id": 660,
        "name": "Arroz Parboil 500 Grs Lucchetti",
        "price": 862.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Parboil 500 Grs Lucchetti_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1150.0
            },
            {
                "date": "2026-04-25",
                "price": 862.5
            }
        ]
    },
    {
        "id": 661,
        "name": "Arroz Grano Largo Parboil 500 Grs Molinos Ala",
        "price": 937.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo Parboil 500 Grs Molino_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 937.5
            }
        ]
    },
    {
        "id": 662,
        "name": "Arroz Integral 500 Grs Molinos Ala",
        "price": 975.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Integral 500 Grs Molinos Ala_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 975.0
            }
        ]
    },
    {
        "id": 663,
        "name": "Arroz Blanco Largo Fino 1 Kg Vanguardia",
        "price": 1099.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Blanco Largo Fino 1 Kg Vanguardia_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1099.0
            }
        ]
    },
    {
        "id": 664,
        "name": "Arroz Parboil Grano Largo 1 Kg Cuisine & Co",
        "price": 1289.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Parboil Grano Largo 1 Kg Cuisine  _4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1350.0
            },
            {
                "date": "2026-04-25",
                "price": 1289.0
            }
        ]
    },
    {
        "id": 665,
        "name": "Arroz Grano Largo Fino 1 Kg Molinos Ala",
        "price": 1342.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo Fino 1 Kg Molinos Ala_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1250.0
            },
            {
                "date": "2026-04-25",
                "price": 1342.5
            }
        ]
    },
    {
        "id": 666,
        "name": "Arroz Gallo Parboil Selec X 500 Gr Gallo",
        "price": 1350.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Gallo Parboil Selec X 500 Gr Gallo_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1012.5
            },
            {
                "date": "2026-04-18",
                "price": 877.5
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 667,
        "name": "Arroz Grano Largo Fino 1 Kg Lucchetti",
        "price": 1387.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo Fino 1 Kg Lucchetti_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1387.5
            }
        ]
    },
    {
        "id": 668,
        "name": "Lentejas 400 Grs Cuisine y Co",
        "price": 1449.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Lentejas 400 Grs Cuisine y Co_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1449.0
            }
        ]
    },
    {
        "id": 669,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_33.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 670,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_34.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 671,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_35.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 672,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 6037.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_44.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            },
            {
                "date": "2026-04-25",
                "price": 6037.5
            }
        ]
    },
    {
        "id": 673,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 6037.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_45.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            },
            {
                "date": "2026-04-25",
                "price": 6037.5
            }
        ]
    },
    {
        "id": 674,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 6037.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_46.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            },
            {
                "date": "2026-04-25",
                "price": 6037.5
            }
        ]
    },
    {
        "id": 675,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            },
            {
                "date": "2026-03-21",
                "price": 8990.0
            },
            {
                "date": "2026-03-28",
                "price": 7990.0
            },
            {
                "date": "2026-04-02",
                "price": 8990.0
            }
        ]
    },
    {
        "id": 676,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            },
            {
                "date": "2026-03-21",
                "price": 8990.0
            },
            {
                "date": "2026-03-28",
                "price": 7990.0
            },
            {
                "date": "2026-04-02",
                "price": 8990.0
            }
        ]
    },
    {
        "id": 677,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            },
            {
                "date": "2026-03-21",
                "price": 8990.0
            },
            {
                "date": "2026-03-28",
                "price": 7990.0
            },
            {
                "date": "2026-04-02",
                "price": 8990.0
            }
        ]
    },
    {
        "id": 678,
        "name": "Queso Cremoso x 1 Un Punta Del Agua",
        "price": 12899.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Cremoso x 1 Un Punta Del Agua_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 12899.0
            }
        ]
    },
    {
        "id": 679,
        "name": "Espinazo",
        "price": 3935.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Espinazo_15.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 3935.0
            },
            {
                "date": "2026-04-08",
                "price": 3148.0
            },
            {
                "date": "2026-04-12",
                "price": 3935.0
            }
        ]
    },
    {
        "id": 680,
        "name": "Carne Vacuna Picada Común La Hacienda",
        "price": 5999.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Carne Vacuna Picada Común La Hacienda_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6499.0
            },
            {
                "date": "2026-04-25",
                "price": 5999.0
            }
        ]
    },
    {
        "id": 681,
        "name": "Azotillo",
        "price": 8315.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Azotillo_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7919.0
            },
            {
                "date": "2026-03-21",
                "price": 8315.0
            },
            {
                "date": "2026-04-08",
                "price": 6652.0
            },
            {
                "date": "2026-04-12",
                "price": 8315.0
            }
        ]
    },
    {
        "id": 682,
        "name": "Osobuco La Hacienda",
        "price": 9065.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Osobuco La Hacienda_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 8629.0
            },
            {
                "date": "2026-03-21",
                "price": 9065.0
            },
            {
                "date": "2026-04-08",
                "price": 7252.0
            },
            {
                "date": "2026-04-12",
                "price": 9065.0
            }
        ]
    },
    {
        "id": 683,
        "name": "Carnaza Comun La Hacienda",
        "price": 9109.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Carnaza Comun La Hacienda_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7499.0
            },
            {
                "date": "2026-03-21",
                "price": 9109.0
            },
            {
                "date": "2026-04-02",
                "price": 7999.0
            },
            {
                "date": "2026-04-08",
                "price": 6399.2
            },
            {
                "date": "2026-04-12",
                "price": 9109.0
            }
        ]
    },
    {
        "id": 684,
        "name": "Tapa De Bife Novillito Ev Al Vacio",
        "price": 11549.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Tapa De Bife Novillito Ev Al Vacio_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11499.0
            },
            {
                "date": "2026-03-16",
                "price": 10999.0
            },
            {
                "date": "2026-03-21",
                "price": 12829.0
            },
            {
                "date": "2026-04-08",
                "price": 10263.2
            },
            {
                "date": "2026-04-12",
                "price": 11499.0
            },
            {
                "date": "2026-04-25",
                "price": 11549.0
            }
        ]
    },
    {
        "id": 685,
        "name": "Carne Vacuna Picada Especial La Hacienda",
        "price": 12965.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Carne Vacuna Picada Especial La Hacienda_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12345.0
            },
            {
                "date": "2026-03-21",
                "price": 12965.0
            },
            {
                "date": "2026-04-08",
                "price": 10372.0
            },
            {
                "date": "2026-04-12",
                "price": 12965.0
            }
        ]
    },
    {
        "id": 686,
        "name": "PALETA CHURRASCO",
        "price": 13499.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/PALETA CHURRASCO_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 13999.0
            },
            {
                "date": "2026-04-25",
                "price": 13499.0
            }
        ]
    },
    {
        "id": 687,
        "name": "Manta Parrillera La Hacienda",
        "price": 13859.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Manta Parrillera La Hacienda_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13859.0
            },
            {
                "date": "2026-03-21",
                "price": 12999.0
            },
            {
                "date": "2026-04-08",
                "price": 11087.2
            },
            {
                "date": "2026-04-12",
                "price": 13859.0
            }
        ]
    },
    {
        "id": 688,
        "name": "Tapa De Asado",
        "price": 13999.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Tapa De Asado_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 13999.0
            }
        ]
    },
    {
        "id": 689,
        "name": "Barra Frutilla Y Chocolate Cereal Mix 26 Gr",
        "price": 1200.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra Frutilla Y Chocolate Cereal Mix 26_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 690,
        "name": "Copos de Maíz Azucarados 150 Grs Cuisine & Co",
        "price": 1550.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Azucarados 150 Grs Cuisine_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 691,
        "name": "Copos de Maíz Sabor Tradicionales 160 Grs Granix",
        "price": 1600.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Sabor Tradicionales 160 Gr_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 692,
        "name": "Barra de Cereal Sabor Cajú y Arándanos 41 Grs Integra",
        "price": 1700.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Cajú y Arándanos 4_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 693,
        "name": "Barra de Cereal Sabor Avena, Almendra y Nuez 41 Grs Integra",
        "price": 1700.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Avena Almendra y N_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 694,
        "name": "Barra de Cereales Sabor Semillas y Arándanos 38 Grs Integra",
        "price": 1750.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereales Sabor Semillas y Aránd_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 695,
        "name": "Copos de Maíz Sabor Azucarado 240 Grs Cuisine & Co",
        "price": 1950.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Sabor Azucarado 240 Grs Cu_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 696,
        "name": "Copos de Maíz Sabor Azucarados 240 Grs Granix",
        "price": 2000.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Sabor Azucarados 240 Grs G_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 697,
        "name": "Barra de Cereal Sabor Cacao y Avellanas 45 Grs Muecas",
        "price": 2050.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Cacao y Avellanas _0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 698,
        "name": "Barra de Cereal Sabor Banana y Dulce de Leche 45 Grs Muecas",
        "price": 2050.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Banana y Dulce de _7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 699,
        "name": "Cerveza Brahma Chopp Lata 354mlx1",
        "price": 966.75,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Brahma Chopp Lata 354mlx1_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 921.0
            },
            {
                "date": "2026-03-21",
                "price": 800.0
            },
            {
                "date": "2026-04-02",
                "price": 966.75
            },
            {
                "date": "2026-04-08",
                "price": 975.0
            },
            {
                "date": "2026-04-12",
                "price": 966.75
            }
        ]
    },
    {
        "id": 700,
        "name": "Cerveza Stella Artois Sin Alcohol 330 Ml",
        "price": 1500.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Stella Artois Sin Alcohol 330 Ml_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 701,
        "name": "Cerveza Sin Alcohol 330 Cc Corona",
        "price": 1700.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Sin Alcohol 330 Cc Corona_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2475.0
            },
            {
                "date": "2026-03-16",
                "price": 2310.0
            },
            {
                "date": "2026-03-21",
                "price": 1700.0
            },
            {
                "date": "2026-03-28",
                "price": 2550.0
            },
            {
                "date": "2026-04-02",
                "price": 2040.0
            },
            {
                "date": "2026-04-08",
                "price": 1700.0
            },
            {
                "date": "2026-04-18",
                "price": 2040.0
            },
            {
                "date": "2026-04-25",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 702,
        "name": "Cerveza 4,5º Lata X 500 Ml Landvik",
        "price": 2190.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza 45º Lata X 500 Ml Landvik_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1095.0
            },
            {
                "date": "2026-04-25",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 703,
        "name": "Cerveza Quilmes Clasica 710cc",
        "price": 2210.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Quilmes Clasica 710cc_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2550.0
            },
            {
                "date": "2026-03-16",
                "price": 2266.67
            },
            {
                "date": "2026-03-21",
                "price": 2550.0
            },
            {
                "date": "2026-04-02",
                "price": 2450.0
            },
            {
                "date": "2026-04-08",
                "price": 2145.0
            },
            {
                "date": "2026-04-12",
                "price": 2550.0
            },
            {
                "date": "2026-04-18",
                "price": 2210.0
            }
        ]
    },
    {
        "id": 704,
        "name": "Cerveza Stella Artois Botella No Retornable 330mlx1",
        "price": 2400.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Stella Artois Botella No Retorna_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 705,
        "name": "Cerveza Rubia 330ml Corona",
        "price": 2430.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Rubia 330ml Corona_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2632.5
            },
            {
                "date": "2026-04-25",
                "price": 2430.0
            }
        ]
    },
    {
        "id": 706,
        "name": "Cerveza Rubia 710 Ml Schneider",
        "price": 2649.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Rubia 710 Ml Schneider_6.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2550.0
            },
            {
                "date": "2026-04-08",
                "price": 2500.0
            },
            {
                "date": "2026-04-18",
                "price": 3499.0
            },
            {
                "date": "2026-04-25",
                "price": 2649.0
            }
        ]
    },
    {
        "id": 707,
        "name": "Cerveza Quilmes Clasica 1lt Ret",
        "price": 2999.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Quilmes Clasica 1lt Ret_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 708,
        "name": "Cerveza Ipa 1l Retornable",
        "price": 3150.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Ipa 1l Retornable_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3150.0
            }
        ]
    },
    {
        "id": 709,
        "name": "Salame Sabor Salame Feteado 70 Grs Bocatti",
        "price": 3297.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Sabor Salame Feteado 70 Grs Bocat_16.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3297.0
            }
        ]
    },
    {
        "id": 710,
        "name": "Salame Fuet Doina 150 Gr",
        "price": 3900.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Fuet Doina 150 Gr_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3690.0
            },
            {
                "date": "2026-04-08",
                "price": 3900.0
            }
        ]
    },
    {
        "id": 711,
        "name": "Mortadela Mini 300 Grs Paladini",
        "price": 4500.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Mortadela Mini 300 Grs Paladini_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5115.0
            },
            {
                "date": "2026-04-25",
                "price": 4500.0
            }
        ]
    },
    {
        "id": 712,
        "name": "Salame Sabor Salame Feteado 100 Grs Bocatti",
        "price": 5606.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Sabor Salame Feteado 100 Grs Boca_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5606.0
            }
        ]
    },
    {
        "id": 713,
        "name": "Jamon Cocido Feteado 200 Grs Campo Austral",
        "price": 6036.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Cocido Feteado 200 Grs Campo Austr_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6036.0
            }
        ]
    },
    {
        "id": 714,
        "name": "Jamón Cocido Bocatti Feteado 130 Gr",
        "price": 6625.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamón Cocido Bocatti Feteado 130 Gr_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 6625.0
            }
        ]
    },
    {
        "id": 715,
        "name": "Mortadela Familiar 500 Grs Paladini",
        "price": 7390.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Mortadela Familiar 500 Grs Paladini_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 7390.0
            }
        ]
    },
    {
        "id": 716,
        "name": "Bondiola Cerdo Fetas Finas 120 Grs Paladini",
        "price": 8390.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Bondiola Cerdo Fetas Finas 120 Grs Palad_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 10699.0
            },
            {
                "date": "2026-04-25",
                "price": 8390.0
            }
        ]
    },
    {
        "id": 717,
        "name": "Fiambre De Cerdo Tripack X Kg",
        "price": 10490.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Fiambre De Cerdo Tripack X Kg_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 10490.0
            }
        ]
    },
    {
        "id": 718,
        "name": "Salchichas Tipo Frankfurt con Piel x 4 Un Facundo",
        "price": 14324.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas Tipo Frankfurt con Piel x 4 U_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 14324.0
            }
        ]
    },
    {
        "id": 719,
        "name": "Frutilla X 250 Gr Alif Agro",
        "price": 3300.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frutilla X 250 Gr Alif Agro_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3150.0
            },
            {
                "date": "2026-04-18",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 720,
        "name": "Mango En Cubos X 250 Gr Alif Agro",
        "price": 3450.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mango En Cubos X 250 Gr Alif Agro_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3450.0
            }
        ]
    },
    {
        "id": 721,
        "name": "Arandanos Green Life X 300 Gr",
        "price": 6600.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Arandanos Green Life X 300 Gr_2.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 4950.0
            },
            {
                "date": "2026-04-08",
                "price": 6600.0
            }
        ]
    },
    {
        "id": 722,
        "name": "Frutillas Green Life 400g",
        "price": 7450.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frutillas Green Life 400g_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7450.0
            },
            {
                "date": "2026-04-02",
                "price": 5587.5
            },
            {
                "date": "2026-04-08",
                "price": 7450.0
            }
        ]
    },
    {
        "id": 723,
        "name": "Mix 4 Berries Green Life 400g",
        "price": 9600.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mix 4 Berries Green Life 400g_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 9600.0
            }
        ]
    },
    {
        "id": 724,
        "name": "Frambuesa X 250 Gr Alif Agro",
        "price": 9600.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frambuesa X 250 Gr Alif Agro_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 8650.0
            },
            {
                "date": "2026-04-18",
                "price": 9600.0
            }
        ]
    },
    {
        "id": 725,
        "name": "Frambuesas X400g Green Life",
        "price": 14300.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frambuesas X400g Green Life_5.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 726,
        "name": "Moras 550g Green Life",
        "price": 16000.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Moras 550g Green Life_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 16000.0
            }
        ]
    },
    {
        "id": 727,
        "name": "Gaseosa Pepsi  Lata 354ml X 1u",
        "price": 1260.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Lata 354ml X 1u_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            },
            {
                "date": "2026-04-18",
                "price": 2000.0
            },
            {
                "date": "2026-04-25",
                "price": 1260.0
            }
        ]
    },
    {
        "id": 728,
        "name": "Gaseosa Mirinda Naranja Botella 2,25ltx1",
        "price": 1560.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Mirinda Naranja Botella 225ltx1_12.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1470.0
            },
            {
                "date": "2026-04-12",
                "price": 1837.5
            },
            {
                "date": "2026-04-18",
                "price": 1950.0
            },
            {
                "date": "2026-04-25",
                "price": 1560.0
            }
        ]
    },
    {
        "id": 729,
        "name": "Gaseosa Sabor Original X 600 Ml Coca-cola",
        "price": 1916.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Sabor Original X 600 Ml Coca-col_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1833.33
            },
            {
                "date": "2026-04-02",
                "price": 1495.0
            },
            {
                "date": "2026-04-08",
                "price": 1916.67
            }
        ]
    },
    {
        "id": 730,
        "name": "Gaseosa Coca-cola Sabor Original 354 Ml",
        "price": 1916.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Coca-cola Sabor Original 354 Ml_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1833.33
            },
            {
                "date": "2026-03-16",
                "price": 2200.0
            },
            {
                "date": "2026-03-21",
                "price": 1466.67
            },
            {
                "date": "2026-04-02",
                "price": 1533.33
            },
            {
                "date": "2026-04-25",
                "price": 1916.67
            }
        ]
    },
    {
        "id": 731,
        "name": "Gaseosa Zero X 600 Ml Coca-cola",
        "price": 1916.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Zero X 600 Ml Coca-cola_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1916.67
            }
        ]
    },
    {
        "id": 732,
        "name": "Coca-cola Zero 354 Ml",
        "price": 1916.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Coca-cola Zero 354 Ml_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1533.33
            },
            {
                "date": "2026-04-25",
                "price": 1916.67
            }
        ]
    },
    {
        "id": 733,
        "name": "Gaseosa 7 Up Sin Azucar 1.5lt",
        "price": 2370.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa 7 Up Sin Azucar 15lt_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2000.0
            },
            {
                "date": "2026-03-16",
                "price": 2220.0
            },
            {
                "date": "2026-03-28",
                "price": 2200.0
            },
            {
                "date": "2026-04-02",
                "price": 2000.0
            },
            {
                "date": "2026-04-08",
                "price": 2220.0
            },
            {
                "date": "2026-04-12",
                "price": 2000.0
            },
            {
                "date": "2026-04-18",
                "price": 2050.0
            },
            {
                "date": "2026-04-25",
                "price": 2370.0
            }
        ]
    },
    {
        "id": 734,
        "name": "Gaseosa Pepsi  Black 1.5lt",
        "price": 2370.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Black 15lt_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2370.0
            }
        ]
    },
    {
        "id": 735,
        "name": "Gaseosa Paso De Los Toros Tónica Botella 1,5ltx1",
        "price": 2490.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Paso De Los Toros Tónica Botella_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2887.5
            },
            {
                "date": "2026-04-25",
                "price": 2490.0
            }
        ]
    },
    {
        "id": 736,
        "name": "Gaseosa Paso De Los Toros Pomelo Botella 1,5ltx1",
        "price": 2490.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Paso De Los Toros Pomelo Botella_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2490.0
            }
        ]
    },
    {
        "id": 737,
        "name": "Harina 000 1 Kg Favorita",
        "price": 750.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Harina 000 1 Kg Favorita_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-25",
                "price": 750.0
            }
        ]
    },
    {
        "id": 738,
        "name": "Harina 000 1 Kg Caserita",
        "price": 900.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Harina 000 1 Kg Caserita_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 900.0
            }
        ]
    },
    {
        "id": 739,
        "name": "Harina 000 1 Kg Morixe",
        "price": 950.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Harina 000 1 Kg Morixe_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 950.0
            }
        ]
    },
    {
        "id": 740,
        "name": "Harina 0000 1 Kg Favorita",
        "price": 1125.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Harina 0000 1 Kg Favorita_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 990.0
            },
            {
                "date": "2026-04-25",
                "price": 1125.0
            }
        ]
    },
    {
        "id": 741,
        "name": "Almidón de Maíz 500 Grs Kapac",
        "price": 1275.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Almidón de Maíz 500 Grs Kapac_16.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 742,
        "name": "Harina 0000 1 Kg Caserita",
        "price": 1300.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Harina 0000 1 Kg Caserita_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1300.0
            }
        ]
    },
    {
        "id": 743,
        "name": "Harina 0000 1 Kg Morixe",
        "price": 1350.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Harina 0000 1 Kg Morixe_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1300.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 744,
        "name": "Polenta Presto Pronta X490g",
        "price": 1387.5,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Polenta Presto Pronta X490g_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 990.0
            },
            {
                "date": "2026-04-25",
                "price": 1387.5
            }
        ]
    },
    {
        "id": 745,
        "name": "Harina 0000 Ultra Refinada 1 Kg Pureza",
        "price": 1450.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Harina 0000 Ultra Refinada 1 Kg Pureza_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1400.0
            },
            {
                "date": "2026-04-25",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 746,
        "name": "Avena Integral Instantánea 280 Grs Quaker",
        "price": 1575.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images/vea/Avena Integral Instantánea 280 Grs Quake_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1575.0
            }
        ]
    },
    {
        "id": 747,
        "name": "Isotonico Zero Fresa-kiwi 400 Ml Gatorade",
        "price": 1007.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Zero Fresa-kiwi 400 Ml Gatorad_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 975.0
            },
            {
                "date": "2026-04-02",
                "price": 1125.0
            },
            {
                "date": "2026-04-12",
                "price": 975.0
            },
            {
                "date": "2026-04-25",
                "price": 1007.5
            }
        ]
    },
    {
        "id": 748,
        "name": "Isotonico Zero Moras 400 Ml Gatorade",
        "price": 1007.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Zero Moras 400 Ml Gatorade_16.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 975.0
            },
            {
                "date": "2026-04-02",
                "price": 1125.0
            },
            {
                "date": "2026-04-12",
                "price": 975.0
            },
            {
                "date": "2026-04-25",
                "price": 1007.5
            }
        ]
    },
    {
        "id": 749,
        "name": "Bebida Isotónica Mountain Blast 500 Ml Powerade",
        "price": 1462.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Mountain Blast 500 Ml P_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            },
            {
                "date": "2026-04-25",
                "price": 1462.5
            }
        ]
    },
    {
        "id": 750,
        "name": "Isotonico Powerade Frutas Tropical 500cc",
        "price": 1462.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Frutas Tropical 500cc_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            },
            {
                "date": "2026-04-25",
                "price": 1462.5
            }
        ]
    },
    {
        "id": 751,
        "name": "Isotonico Powerade Manzana 500cc",
        "price": 1462.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Manzana 500cc_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            },
            {
                "date": "2026-04-25",
                "price": 1462.5
            }
        ]
    },
    {
        "id": 752,
        "name": "Bebida Isotónica Uva 500 Ml Powerade",
        "price": 1462.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Uva 500 Ml Powerade_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            },
            {
                "date": "2026-04-25",
                "price": 1462.5
            }
        ]
    },
    {
        "id": 753,
        "name": "Isotónica Gatorade Cool Blue Botella 500mlx1",
        "price": 1592.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotónica Gatorade Cool Blue Botella 500_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1592.5
            }
        ]
    },
    {
        "id": 754,
        "name": "Isotónica Gatorade Naranja Botella 500mlx1",
        "price": 1592.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotónica Gatorade Naranja Botella 500ml_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1592.5
            }
        ]
    },
    {
        "id": 755,
        "name": "Isotónica Gatorade Uva Botella 500mlx1",
        "price": 1592.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotónica Gatorade Uva Botella 500mlx1_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1592.5
            }
        ]
    },
    {
        "id": 756,
        "name": "Isotonico Gatorade Manzana 750cc",
        "price": 1690.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Gatorade Manzana 750cc_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 757,
        "name": "Jugo Manzana Roja 7 Gr Bc",
        "price": 200.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo Manzana Roja 7 Gr Bc_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 200.0
            }
        ]
    },
    {
        "id": 758,
        "name": "Jugo Naranja Dulce 7 Gr Bc",
        "price": 200.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo Naranja Dulce 7 Gr Bc_16.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 200.0
            }
        ]
    },
    {
        "id": 759,
        "name": "Jugo Pomelo Amarillo 7 Gr Bc",
        "price": 200.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo Pomelo Amarillo 7 Gr Bc_18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 200.0
            }
        ]
    },
    {
        "id": 760,
        "name": "Jugo En Polvo Tang Naranja Dulce 15gr",
        "price": 495.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Dulce 15gr_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 480.0
            },
            {
                "date": "2026-03-16",
                "price": 280.0
            },
            {
                "date": "2026-03-21",
                "price": 240.0
            },
            {
                "date": "2026-03-28",
                "price": 244.0
            },
            {
                "date": "2026-04-02",
                "price": 488.0
            },
            {
                "date": "2026-04-08",
                "price": 484.0
            },
            {
                "date": "2026-04-18",
                "price": 247.5
            },
            {
                "date": "2026-04-25",
                "price": 495.0
            }
        ]
    },
    {
        "id": 761,
        "name": "Jugo En Polvo Tang Manzana 15gr",
        "price": 495.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Manzana 15gr_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 480.0
            },
            {
                "date": "2026-03-16",
                "price": 280.0
            },
            {
                "date": "2026-03-21",
                "price": 240.0
            },
            {
                "date": "2026-03-28",
                "price": 244.0
            },
            {
                "date": "2026-04-02",
                "price": 488.0
            },
            {
                "date": "2026-04-08",
                "price": 484.0
            },
            {
                "date": "2026-04-18",
                "price": 247.5
            },
            {
                "date": "2026-04-25",
                "price": 495.0
            }
        ]
    },
    {
        "id": 762,
        "name": "Jugo En Polvo Tang Limon Dulce 15gr",
        "price": 495.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Limon Dulce 15gr_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 480.0
            },
            {
                "date": "2026-03-16",
                "price": 280.0
            },
            {
                "date": "2026-03-21",
                "price": 240.0
            },
            {
                "date": "2026-03-28",
                "price": 244.0
            },
            {
                "date": "2026-04-02",
                "price": 488.0
            },
            {
                "date": "2026-04-08",
                "price": 484.0
            },
            {
                "date": "2026-04-18",
                "price": 247.5
            },
            {
                "date": "2026-04-25",
                "price": 495.0
            }
        ]
    },
    {
        "id": 763,
        "name": "Jugo En Polvo Tang Naranja Banana 15gr",
        "price": 495.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Banana 15gr_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 280.0
            },
            {
                "date": "2026-03-21",
                "price": 240.0
            },
            {
                "date": "2026-03-28",
                "price": 244.0
            },
            {
                "date": "2026-04-02",
                "price": 488.0
            },
            {
                "date": "2026-04-08",
                "price": 484.0
            },
            {
                "date": "2026-04-18",
                "price": 247.5
            },
            {
                "date": "2026-04-25",
                "price": 495.0
            }
        ]
    },
    {
        "id": 764,
        "name": "Jugo En Polvo Tang Pomelo Rosado 15 Gr",
        "price": 495.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Pomelo Rosado 15 Gr_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 280.0
            },
            {
                "date": "2026-03-21",
                "price": 240.0
            },
            {
                "date": "2026-03-28",
                "price": 244.0
            },
            {
                "date": "2026-04-02",
                "price": 488.0
            },
            {
                "date": "2026-04-08",
                "price": 484.0
            },
            {
                "date": "2026-04-18",
                "price": 247.5
            },
            {
                "date": "2026-04-25",
                "price": 495.0
            }
        ]
    },
    {
        "id": 765,
        "name": "Jugo En Polvo Tang Naranja 15gr",
        "price": 495.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja 15gr_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 240.0
            },
            {
                "date": "2026-03-28",
                "price": 244.0
            },
            {
                "date": "2026-04-02",
                "price": 488.0
            },
            {
                "date": "2026-04-08",
                "price": 484.0
            },
            {
                "date": "2026-04-18",
                "price": 247.5
            },
            {
                "date": "2026-04-25",
                "price": 495.0
            }
        ]
    },
    {
        "id": 766,
        "name": "Jugo En Polvo Tang Durazno 15 Gr",
        "price": 495.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Durazno 15 Gr_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 247.5
            },
            {
                "date": "2026-04-25",
                "price": 495.0
            }
        ]
    },
    {
        "id": 767,
        "name": "Yogur Sabor Vainilla Firme Semidescremado 120 Grs La Serenisima",
        "price": 699.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Yogur Sabor Vainilla Firme Semidescremad_16.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 699.0
            }
        ]
    },
    {
        "id": 768,
        "name": "Leche Uat Descremada Apostoles 1 L",
        "price": 1192.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Descremada Apostoles 1 L_4.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1117.5
            },
            {
                "date": "2026-04-02",
                "price": 1490.0
            },
            {
                "date": "2026-04-18",
                "price": 1192.5
            }
        ]
    },
    {
        "id": 769,
        "name": "Leche Descremada 1 Lts Apostoles",
        "price": 1192.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Descremada 1 Lts Apostoles_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1192.5
            }
        ]
    },
    {
        "id": 770,
        "name": "Leche Entera Larga Vida 1 Lts Cuisine & Co",
        "price": 1299.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera Larga Vida 1 Lts Cuisine  C_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 771,
        "name": "Leche Entera 1 Lts Cuisine y Co",
        "price": 1702.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera 1 Lts Cuisine y Co_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1702.5
            }
        ]
    },
    {
        "id": 772,
        "name": "Leche Semi Descremada 1 Lts Cuisine & Co",
        "price": 1702.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Semi Descremada 1 Lts Cuisine  Co_12.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1513.33
            },
            {
                "date": "2026-04-12",
                "price": 1702.5
            }
        ]
    },
    {
        "id": 773,
        "name": "Yogurt Sabor Natural Griego Entero 190 Grs Yogurisimo",
        "price": 1800.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Yogurt Sabor Natural Griego Entero 190 G_11.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 774,
        "name": "Yogurt Sabor Natural Semidescremado 175 Grs Ser",
        "price": 1860.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Yogurt Sabor Natural Semidescremado 175 _18.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1860.0
            }
        ]
    },
    {
        "id": 775,
        "name": "Leche Entera Clásica 1 Lts Las Tres Niñas",
        "price": 1912.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera Clásica 1 Lts Las Tres Niña_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1912.5
            }
        ]
    },
    {
        "id": 776,
        "name": "Leche Descremada 1 Lts Las Tres Niñas",
        "price": 1912.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Descremada 1 Lts Las Tres Niñas_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1912.5
            }
        ]
    },
    {
        "id": 777,
        "name": "Leche en Polvo Descremada 200 Grs La Serenisima",
        "price": 3550.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Descremada 200 Grs La Ser_13.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3550.0
            }
        ]
    },
    {
        "id": 778,
        "name": "Leche Condensada 395 Grs Cuisine & Co",
        "price": 4450.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Condensada 395 Grs Cuisine  Co_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            },
            {
                "date": "2026-03-28",
                "price": 4450.0
            }
        ]
    },
    {
        "id": 779,
        "name": "Leche en Polvo Fortigrow 200 Grs Nido",
        "price": 4700.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Fortigrow 200 Grs Nido_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3055.0
            },
            {
                "date": "2026-04-25",
                "price": 4700.0
            }
        ]
    },
    {
        "id": 780,
        "name": "Leche Condensada 395 Grs Nestle",
        "price": 5450.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Condensada 395 Grs Nestle_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5450.0
            }
        ]
    },
    {
        "id": 781,
        "name": "Leche Condensada Descremada Orgánica 395 Grs Nestlé®",
        "price": 5450.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Condensada Descremada Orgánica 395_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 5100.0
            },
            {
                "date": "2026-04-02",
                "price": 2550.0
            },
            {
                "date": "2026-04-08",
                "price": 2725.0
            },
            {
                "date": "2026-04-12",
                "price": 5450.0
            }
        ]
    },
    {
        "id": 782,
        "name": "Leche en Polvo Entera 400 Grs Cuisine y Co",
        "price": 6010.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Entera 400 Grs Cuisine y _6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6010.0
            }
        ]
    },
    {
        "id": 783,
        "name": "Leche en Polvo Clásica 400 Grs La Serenisima",
        "price": 6750.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Clásica 400 Grs La Sereni_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6750.0
            }
        ]
    },
    {
        "id": 784,
        "name": "Leche en Polvo Deslactosada 400 Grs Purisima",
        "price": 6850.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Deslactosada 400 Grs Puri_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4452.5
            },
            {
                "date": "2026-04-25",
                "price": 6850.0
            }
        ]
    },
    {
        "id": 785,
        "name": "Leche en Polvo Nutrifuerza 400 Grs La Lechera",
        "price": 8050.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Nutrifuerza 400 Grs La Le_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 8050.0
            }
        ]
    },
    {
        "id": 786,
        "name": "Leche En Polvo Zero Lactosa La Serenisima 400 Gr",
        "price": 8600.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Zero Lactosa La Serenisim_12.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 8600.0
            }
        ]
    },
    {
        "id": 787,
        "name": "Esponja Virulana Multiuso Cuidauñas",
        "price": 1050.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Virulana Multiuso Cuidauñas_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1050.0
            },
            {
                "date": "2026-03-28",
                "price": 735.0
            },
            {
                "date": "2026-04-02",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 788,
        "name": "Rejilla Home Care Cocina",
        "price": 1160.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Rejilla Home Care Cocina_3.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1160.0
            }
        ]
    },
    {
        "id": 789,
        "name": "Esponja Go! Max Multiuso",
        "price": 1250.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Go Max Multiuso_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 790,
        "name": "Esponja Go! Power Protec Uñas",
        "price": 1400.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Go Power Protec Uñas_5.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1050.0
            },
            {
                "date": "2026-04-08",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 791,
        "name": "Paño Rejilla Costero Blanco Optico Super Cocina  1 U",
        "price": 1450.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Paño Rejilla Costero Blanco Optico Super_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 942.5
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 792,
        "name": "Esponja Mortimer Cuadriculada Abrasiva",
        "price": 1450.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Mortimer Cuadriculada Abrasiva_13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 793,
        "name": "Trapo De Piso Home Care Gris Reforzado",
        "price": 1610.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Gris Reforzado_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1610.0
            }
        ]
    },
    {
        "id": 794,
        "name": "Trapo De Piso Home Care Gris Super",
        "price": 1790.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Gris Super_7.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 795,
        "name": "Esponja Acero Home Care",
        "price": 1800.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Acero Home Care_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 796,
        "name": "Trapo De Piso Home Care Blanco Reforzado",
        "price": 2160.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Blanco Reforzado_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2160.0
            }
        ]
    },
    {
        "id": 797,
        "name": "Alimento Para Gatos Whiskas Pasta Pollo 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Pollo _3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 798,
        "name": "Alimento Para Gatos Whiskas Pasta Pavo 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Pavo 8_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 799,
        "name": "Alimento Para Gatos Whiskas Pasta Salmón 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Salmón_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 800,
        "name": "Alimento Para Gatos Whiskas Pasta Sardina 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Sardin_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 801,
        "name": "Alimento Para Gatos Whiskas Pasta Carne 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Carne _10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 802,
        "name": "Alimento Para Gatos Whiskas Pasta Gatitos 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Gatito_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 803,
        "name": "Alimento Whiskas Para Gatos Souffle Adulto Carne X85g",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Whiskas Para Gatos Souffle Adul_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 804,
        "name": "Alimento Humedo Cat Chow Ad Pollo",
        "price": 1650.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Humedo Cat Chow Ad Pollo_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1155.0
            },
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1237.5
            },
            {
                "date": "2026-04-18",
                "price": 1100.0
            },
            {
                "date": "2026-04-25",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 805,
        "name": "Alimento Sabrositos Gato Mix P,c,v 1k",
        "price": 3700.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Sabrositos Gato Mix Pcv 1k_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3700.0
            }
        ]
    },
    {
        "id": 806,
        "name": "Alimento Sabrositos Para Gatos Pescado X1kg",
        "price": 3800.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Sabrositos Para Gatos Pescado X_14.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3800.0
            }
        ]
    },
    {
        "id": 807,
        "name": "Alimento Para Perros Pedigree Carne 100 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Carne 100 _0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 808,
        "name": "Alimento Para Perros Pedigree Pollo 100 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Pollo 100 _4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 809,
        "name": "Alimento Para Perros Pedigree Carne Pouch Adulto 100 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Carne Pouc_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            },
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-12",
                "price": 900.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 810,
        "name": "Snacks Dentastix Razas Mediano Cuidado Oral",
        "price": 5200.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Snacks Dentastix Razas Mediano Cuidado O_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-21",
                "price": 3640.0
            },
            {
                "date": "2026-03-28",
                "price": 5200.0
            },
            {
                "date": "2026-04-12",
                "price": 3900.0
            },
            {
                "date": "2026-04-18",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 811,
        "name": "Alimento Dog Chow Adulto Medianos Y Grandes 1,5 Kg",
        "price": 5500.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Adulto Medianos Y Gran_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3850.0
            },
            {
                "date": "2026-03-16",
                "price": 5500.0
            },
            {
                "date": "2026-04-12",
                "price": 4125.0
            },
            {
                "date": "2026-04-18",
                "price": 5500.0
            }
        ]
    },
    {
        "id": 812,
        "name": "Alimento Dog Chow Adulto Minis Y Pequeños 1,5 Kg",
        "price": 7050.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Adulto Minis Y Pequeño_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4935.0
            },
            {
                "date": "2026-03-16",
                "price": 7050.0
            },
            {
                "date": "2026-04-12",
                "price": 5287.5
            },
            {
                "date": "2026-04-18",
                "price": 7050.0
            }
        ]
    },
    {
        "id": 813,
        "name": "Alimento Dogui Adultos 3 Kg",
        "price": 9650.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dogui Adultos 3 Kg_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9650.0
            },
            {
                "date": "2026-03-21",
                "price": 6755.0
            },
            {
                "date": "2026-03-28",
                "price": 9650.0
            }
        ]
    },
    {
        "id": 814,
        "name": "Alimento Para Perros Pedigree Adulto 3 Kg",
        "price": 11750.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Adulto 3 K_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11750.0
            },
            {
                "date": "2026-03-21",
                "price": 8225.0
            },
            {
                "date": "2026-03-28",
                "price": 11750.0
            },
            {
                "date": "2026-04-12",
                "price": 8812.5
            },
            {
                "date": "2026-04-18",
                "price": 11750.0
            }
        ]
    },
    {
        "id": 815,
        "name": "Alimento Para Perros Pedigree Adulto Razas Pequeñas 3 Kg",
        "price": 12900.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Adulto Raz_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12900.0
            },
            {
                "date": "2026-03-21",
                "price": 9030.0
            },
            {
                "date": "2026-03-28",
                "price": 12900.0
            },
            {
                "date": "2026-04-12",
                "price": 9675.0
            },
            {
                "date": "2026-04-18",
                "price": 12900.0
            }
        ]
    },
    {
        "id": 816,
        "name": "Alimento Dog Chow Adulto Minis Y Pequeños 3 Kg",
        "price": 13050.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Adulto Minis Y Pequeño_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 13050.0
            }
        ]
    },
    {
        "id": 817,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_33.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 818,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_34.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 819,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_35.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 820,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 6037.5,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_44.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            },
            {
                "date": "2026-04-25",
                "price": 6037.5
            }
        ]
    },
    {
        "id": 821,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 6037.5,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_45.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            },
            {
                "date": "2026-04-25",
                "price": 6037.5
            }
        ]
    },
    {
        "id": 822,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 6037.5,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_46.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            },
            {
                "date": "2026-04-25",
                "price": 6037.5
            }
        ]
    },
    {
        "id": 823,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            },
            {
                "date": "2026-03-21",
                "price": 8990.0
            },
            {
                "date": "2026-03-28",
                "price": 7990.0
            },
            {
                "date": "2026-04-02",
                "price": 8990.0
            }
        ]
    },
    {
        "id": 824,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            },
            {
                "date": "2026-03-21",
                "price": 8990.0
            },
            {
                "date": "2026-03-28",
                "price": 7990.0
            },
            {
                "date": "2026-04-02",
                "price": 8990.0
            }
        ]
    },
    {
        "id": 825,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            },
            {
                "date": "2026-03-21",
                "price": 8990.0
            },
            {
                "date": "2026-03-28",
                "price": 7990.0
            },
            {
                "date": "2026-04-02",
                "price": 8990.0
            }
        ]
    },
    {
        "id": 826,
        "name": "Queso Cremoso x 1 Un Punta Del Agua",
        "price": 12899.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Cremoso x 1 Un Punta Del Agua_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 12899.0
            }
        ]
    },
    {
        "id": 827,
        "name": "Papel Higiénico Campanita Hoja Simple 4 U",
        "price": 1150.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higiénico Campanita Hoja Simple 4 _10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 828,
        "name": "Rollo De Cocina Sol Mayor X 3 Unid",
        "price": 1250.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo De Cocina Sol Mayor X 3 Unid_9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1140.0
            },
            {
                "date": "2026-03-28",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 829,
        "name": "Servilleta 80 Un Home Care",
        "price": 1300.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Servilleta 80 Un Home Care_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1425.0
            },
            {
                "date": "2026-03-28",
                "price": 1900.0
            },
            {
                "date": "2026-04-02",
                "price": 1300.0
            },
            {
                "date": "2026-04-08",
                "price": 1500.0
            },
            {
                "date": "2026-04-18",
                "price": 1300.0
            }
        ]
    },
    {
        "id": 830,
        "name": "Papel Higienico Simple Hoja 4x30 M Family Care",
        "price": 1550.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higienico Simple Hoja 4x30 M Famil_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2020.0
            },
            {
                "date": "2026-03-28",
                "price": 1414.0
            },
            {
                "date": "2026-04-02",
                "price": 1404.0
            },
            {
                "date": "2026-04-08",
                "price": 2160.0
            },
            {
                "date": "2026-04-18",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 831,
        "name": "Papel Higienico Elegante Simple Hoja 4x30m",
        "price": 1699.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higienico Elegante Simple Hoja 4x3_20.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 832,
        "name": "Rollo Cocina Doble Hoja 200 Paños X 1 Un Home Care.",
        "price": 1789.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Doble Hoja 200 Paños X 1 Un_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1920.0
            },
            {
                "date": "2026-04-25",
                "price": 1789.0
            }
        ]
    },
    {
        "id": 833,
        "name": "Papel Higiénico Fresh Hoja Simple 30 M X 4 Un Higienol",
        "price": 1837.5,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higiénico Fresh Hoja Simple 30 M X_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2450.0
            },
            {
                "date": "2026-04-18",
                "price": 1470.0
            },
            {
                "date": "2026-04-25",
                "price": 1837.5
            }
        ]
    },
    {
        "id": 834,
        "name": "Rollo Cocina Elegante Doble Hoja Gigante 1x200 Paños",
        "price": 1852.5,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Elegante Doble Hoja Gigante_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1850.0
            },
            {
                "date": "2026-04-25",
                "price": 1852.5
            }
        ]
    },
    {
        "id": 835,
        "name": "Rollo De Cocina Elegante 3 U",
        "price": 1852.5,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo De Cocina Elegante 3 U_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1852.5
            }
        ]
    },
    {
        "id": 836,
        "name": "Papel Higienico Simple Hoja 6x30 M Family Care.",
        "price": 2449.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higienico Simple Hoja 6x30 M Famil_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 837,
        "name": "Cuarto Trasero De Pollo Granel Fresco",
        "price": 3999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Cuarto Trasero De Pollo Granel Fresco_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4399.0
            },
            {
                "date": "2026-03-28",
                "price": 3999.0
            },
            {
                "date": "2026-04-08",
                "price": 4399.0
            },
            {
                "date": "2026-04-12",
                "price": 3999.0
            },
            {
                "date": "2026-04-18",
                "price": 4399.0
            },
            {
                "date": "2026-04-25",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 838,
        "name": "Pollo Congelado Con Menudos",
        "price": 3999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pollo Congelado Con Menudos_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 839,
        "name": "Pollo Fresco Con Menudos",
        "price": 4299.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pollo Fresco Con Menudos_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4299.0
            }
        ]
    },
    {
        "id": 840,
        "name": "Pollo Parrillero",
        "price": 4999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pollo Parrillero_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4999.0
            },
            {
                "date": "2026-04-08",
                "price": 3999.2
            },
            {
                "date": "2026-04-12",
                "price": 4999.0
            }
        ]
    },
    {
        "id": 841,
        "name": "Muslo De Pollo",
        "price": 6699.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Muslo De Pollo_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6699.0
            },
            {
                "date": "2026-04-08",
                "price": 5359.2
            },
            {
                "date": "2026-04-12",
                "price": 6699.0
            }
        ]
    },
    {
        "id": 842,
        "name": "Pata De Pollo",
        "price": 7999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pata De Pollo_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7999.0
            },
            {
                "date": "2026-04-08",
                "price": 6399.2
            },
            {
                "date": "2026-04-12",
                "price": 7999.0
            }
        ]
    },
    {
        "id": 843,
        "name": "Suprema De Pollo Granel Fresca",
        "price": 8999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Suprema De Pollo Granel Fresca_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 8499.0
            },
            {
                "date": "2026-03-16",
                "price": 9899.0
            },
            {
                "date": "2026-03-21",
                "price": 8499.0
            },
            {
                "date": "2026-03-28",
                "price": 8999.0
            },
            {
                "date": "2026-04-08",
                "price": 9899.0
            },
            {
                "date": "2026-04-12",
                "price": 8999.0
            },
            {
                "date": "2026-04-18",
                "price": 9899.0
            },
            {
                "date": "2026-04-25",
                "price": 8999.0
            }
        ]
    },
    {
        "id": 844,
        "name": "Pavita Sadia X Kg",
        "price": 13749.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pavita Sadia X Kg_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13749.0
            }
        ]
    },
    {
        "id": 845,
        "name": "Queso Reggianito Rallado 35 Grs x 1 Un La Serenisima",
        "price": 1350.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Reggianito Rallado 35 Grs x 1 Un L_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 846,
        "name": "Queso Reggianito Rallado 40 Grs La Paulina",
        "price": 1350.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Reggianito Rallado 40 Grs La Pauli_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1800.0
            },
            {
                "date": "2026-04-25",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 847,
        "name": "Salchichas Familiares x 6 Un 190 Grs Cuisine & Co",
        "price": 1489.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas Familiares x 6 Un 190 Grs Cui_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 848,
        "name": "Salchichas Viena x 6 Un 225 Grs Granja Iris",
        "price": 1875.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas Viena x 6 Un 225 Grs Granja I_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2500.0
            },
            {
                "date": "2026-04-25",
                "price": 1875.0
            }
        ]
    },
    {
        "id": 849,
        "name": "Queso Crema Clásico Individual 0.290 Kg Cuisine y Co",
        "price": 1899.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Clásico Individual 0290 Kg C_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1899.0
            }
        ]
    },
    {
        "id": 850,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 851,
        "name": "Queso Crema Blanco x 290 Grs La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Blanco x 290 Grs La Serenísi_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            },
            {
                "date": "2026-04-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 852,
        "name": "Queso Untable La Serenísima Cremón 280 Gr",
        "price": 3750.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable La Serenísima Cremón 280 G_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2689.0
            },
            {
                "date": "2026-04-25",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 853,
        "name": "Queso Rallado x 0.15 Kg La Paulina",
        "price": 4182.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Rallado x 015 Kg La Paulina_10.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4182.0
            }
        ]
    },
    {
        "id": 854,
        "name": "Queso Untable Finlandia Clásico 290 Gr",
        "price": 4389.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable Finlandia Clásico 290 Gr_19.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3850.0
            },
            {
                "date": "2026-04-18",
                "price": 5400.0
            },
            {
                "date": "2026-04-25",
                "price": 4389.0
            }
        ]
    },
    {
        "id": 855,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1400.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Dos Anclas 500 Gr_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-20",
                "price": 1400.0
            },
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-20",
                "price": 1400.0
            },
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-20",
                "price": 1400.0
            },
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-21",
                "price": 1400.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            },
            {
                "date": "2026-03-21",
                "price": 1400.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-31",
                "price": 1400.0
            },
            {
                "date": "2026-03-31",
                "price": 1600.0
            },
            {
                "date": "2026-03-31",
                "price": 1400.0
            },
            {
                "date": "2026-03-31",
                "price": 1600.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-08",
                "price": 1400.0
            },
            {
                "date": "2026-04-08",
                "price": 1650.0
            },
            {
                "date": "2026-04-08",
                "price": 1400.0
            },
            {
                "date": "2026-04-08",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-24",
                "price": 1050.0
            },
            {
                "date": "2026-04-24",
                "price": 1237.5
            },
            {
                "date": "2026-04-24",
                "price": 1050.0
            },
            {
                "date": "2026-04-24",
                "price": 1237.5
            },
            {
                "date": "2026-04-24",
                "price": 1050.0
            },
            {
                "date": "2026-04-24",
                "price": 1237.5
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            },
            {
                "date": "2026-04-25",
                "price": 1650.0
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            },
            {
                "date": "2026-04-25",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 856,
        "name": "Sal Parrillera Entrefina 500 Grs Dos Anclas",
        "price": 1400.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Parrillera Entrefina 500 Grs Dos Anc_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 857,
        "name": "Sal Gruesa 500 Grs Dos Anclas",
        "price": 1400.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa 500 Grs Dos Anclas_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 858,
        "name": "Sal Fina 500 Grs Celusal",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina 500 Grs Celusal_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1450.0
            },
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1450.0
            },
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1450.0
            },
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-24",
                "price": 1450.0
            },
            {
                "date": "2026-04-24",
                "price": 1750.0
            },
            {
                "date": "2026-04-24",
                "price": 1450.0
            },
            {
                "date": "2026-04-24",
                "price": 1750.0
            },
            {
                "date": "2026-04-24",
                "price": 1450.0
            },
            {
                "date": "2026-04-24",
                "price": 1750.0
            },
            {
                "date": "2026-04-25",
                "price": 1450.0
            },
            {
                "date": "2026-04-25",
                "price": 1750.0
            },
            {
                "date": "2026-04-25",
                "price": 1450.0
            },
            {
                "date": "2026-04-25",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 859,
        "name": "Sal Entrefina para Parrilla 500 Grs Celusal",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Entrefina para Parrilla 500 Grs Celu_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 860,
        "name": "Sal Gruesa 500 Grs Celusal",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa 500 Grs Celusal_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 861,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1650.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Dos Anclas 500 Gr_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-20",
                "price": 1400.0
            },
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-20",
                "price": 1400.0
            },
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-20",
                "price": 1400.0
            },
            {
                "date": "2026-03-20",
                "price": 1600.0
            },
            {
                "date": "2026-03-21",
                "price": 1400.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            },
            {
                "date": "2026-03-21",
                "price": 1400.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            },
            {
                "date": "2026-03-31",
                "price": 1400.0
            },
            {
                "date": "2026-03-31",
                "price": 1600.0
            },
            {
                "date": "2026-03-31",
                "price": 1400.0
            },
            {
                "date": "2026-03-31",
                "price": 1600.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1400.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-08",
                "price": 1400.0
            },
            {
                "date": "2026-04-08",
                "price": 1650.0
            },
            {
                "date": "2026-04-08",
                "price": 1400.0
            },
            {
                "date": "2026-04-08",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-12",
                "price": 1400.0
            },
            {
                "date": "2026-04-12",
                "price": 1650.0
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-18",
                "price": 1237.5
            },
            {
                "date": "2026-04-24",
                "price": 1050.0
            },
            {
                "date": "2026-04-24",
                "price": 1237.5
            },
            {
                "date": "2026-04-24",
                "price": 1050.0
            },
            {
                "date": "2026-04-24",
                "price": 1237.5
            },
            {
                "date": "2026-04-24",
                "price": 1050.0
            },
            {
                "date": "2026-04-24",
                "price": 1237.5
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            },
            {
                "date": "2026-04-25",
                "price": 1650.0
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            },
            {
                "date": "2026-04-25",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 862,
        "name": "Sal Fina 500 Grs Celusal",
        "price": 1750.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina 500 Grs Celusal_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1450.0
            },
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1450.0
            },
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-18",
                "price": 1450.0
            },
            {
                "date": "2026-04-18",
                "price": 1750.0
            },
            {
                "date": "2026-04-24",
                "price": 1450.0
            },
            {
                "date": "2026-04-24",
                "price": 1750.0
            },
            {
                "date": "2026-04-24",
                "price": 1450.0
            },
            {
                "date": "2026-04-24",
                "price": 1750.0
            },
            {
                "date": "2026-04-24",
                "price": 1450.0
            },
            {
                "date": "2026-04-24",
                "price": 1750.0
            },
            {
                "date": "2026-04-25",
                "price": 1450.0
            },
            {
                "date": "2026-04-25",
                "price": 1750.0
            },
            {
                "date": "2026-04-25",
                "price": 1450.0
            },
            {
                "date": "2026-04-25",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 863,
        "name": "Sal Gruesa 1 Kg Celusal",
        "price": 2500.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa 1 Kg Celusal_8.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 864,
        "name": "Sal Entrefina para Parrilla 1 Kg Celusal",
        "price": 2500.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Entrefina para Parrilla 1 Kg Celusal_16.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 865,
        "name": "AGUA 401 600 CC",
        "price": 399.91,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA 401 600 CC_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 399.91
            }
        ]
    },
    {
        "id": 866,
        "name": "AGUA CELLIER 600 ML",
        "price": 419.89,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA CELLIER 600 ML_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 419.89
            }
        ]
    },
    {
        "id": 867,
        "name": "AGUA 401 2 LT",
        "price": 589.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA 401 2 LT_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 589.9
            }
        ]
    },
    {
        "id": 868,
        "name": "AGUA DASH BAJA SODIO 2 LT",
        "price": 749.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA DASH BAJA SODIO 2 LT_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 749.9
            }
        ]
    },
    {
        "id": 869,
        "name": "AGUA CELLIER 2 LT",
        "price": 848.43,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA CELLIER 2 LT_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 848.43
            }
        ]
    },
    {
        "id": 870,
        "name": "AGUA BENEDICTINO 500 CC",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA BENEDICTINO 500 CC_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 871,
        "name": "AGUA GLACIAR SIN GAS 500 cc",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA GLACIAR SIN GAS 500 cc_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 872,
        "name": "AGUA NESTLE PUREZA VITAL 1.5 LT",
        "price": 1149.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA NESTLE PUREZA VITAL 15 LT_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1149.9
            }
        ]
    },
    {
        "id": 873,
        "name": "AGUA VILLA DEL SUR 600 CC",
        "price": 1269.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA VILLA DEL SUR 600 CC_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1269.9
            }
        ]
    },
    {
        "id": 874,
        "name": "AGUA NESTLE PUREZA VITAL 2.25 LT",
        "price": 1299.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images/maxiconsumo/AGUA NESTLE PUREZA VITAL 225 LT_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1299.9
            }
        ]
    },
    {
        "id": 875,
        "name": "ALIMENTO PARA GATOS PETS CLASS FRUTOS DE MAR 85 GR",
        "price": 799.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA GATOS PETS CLASS FRUTOS DE_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            }
        ]
    },
    {
        "id": 876,
        "name": "ALIMENTO PARA GATOS PETS CLASS SALMON ROSADO 85 GR",
        "price": 799.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA GATOS PETS CLASS SALMON RO_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            }
        ]
    },
    {
        "id": 877,
        "name": "ALIMENTO PARA GATOS PETS CLASS CARNE 85 GR",
        "price": 799.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA GATOS PETS CLASS CARNE 85 _2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            }
        ]
    },
    {
        "id": 878,
        "name": "ALIMENTO PARA ANIMALES WHISKAS POUCH GATITOS CARNE 85 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA ANIMALES WHISKAS POUCH GAT_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 879,
        "name": "ALIMENTO PARA ANIMALES WHISKAS POUCH POLLO 85 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA ANIMALES WHISKAS POUCH POL_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 880,
        "name": "ALIMENTO PARA ANIMALES WHISKAS POUCH SALMON 85 gr",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA ANIMALES WHISKAS POUCH SAL_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 881,
        "name": "ALIMENTO PARA ANIMALES WHISKAS POUCH PAVO 85 gr",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA ANIMALES WHISKAS POUCH PAV_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 882,
        "name": "ALIMENTO PARA GATOS WHISKAS POUCH CARNE 85 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA GATOS WHISKAS POUCH CARNE _7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 883,
        "name": "ALIMENTO PARA GATOS WHISKAS POUCH SARDINA 85 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA GATOS WHISKAS POUCH SARDIN_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 884,
        "name": "ALIMENTO PARA GATOS CAT CHOW ADULTOS POLLO 85 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images/maxiconsumo/ALIMENTO PARA GATOS CAT CHOW ADULTOS POL_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 885,
        "name": "ALIMENTO PARA ANIMALES PEDIGREE DENTA STIX RAZAS MEDIANAS",
        "price": 799.89,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA ANIMALES PEDIGREE DENTA ST_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.89
            }
        ]
    },
    {
        "id": 886,
        "name": "ALIMENTO PARA PERROS PETS CLASS PERRO ADULTOS CARNE 100 GR",
        "price": 799.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA PERROS PETS CLASS PERRO AD_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            }
        ]
    },
    {
        "id": 887,
        "name": "ALIMENTO PARA PERROS PETS CLASS CACHORROS POLLO Y LECHE 85 GR",
        "price": 799.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA PERROS PETS CLASS CACHORRO_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            }
        ]
    },
    {
        "id": 888,
        "name": "ALIMENTO PARA PERROS PETS CLASS ADULTOS POLLO 100 GR",
        "price": 799.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA PERROS PETS CLASS ADULTOS _2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            }
        ]
    },
    {
        "id": 889,
        "name": "ALIMENTO PARA ANIMALES PEDIGREE POUCH RAZAS PEQUEÑAS CARNE 100 gr",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA ANIMALES PEDIGREE POUCH RA_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 890,
        "name": "ALIMENTO PARA ANIMALES PEDIGREE POUCH RAZAS PEQUEÑAS POLLO 100 gr",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA ANIMALES PEDIGREE POUCH RA_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 891,
        "name": "ALIMENTO PARA PERROS PEDIGREE POUCH CARNE ADULTO 100 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA PERROS PEDIGREE POUCH CARN_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 892,
        "name": "ALIMENTO PARA PERROS PEDIGREE POUCH CACHORRO 85 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA PERROS PEDIGREE POUCH CACH_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 893,
        "name": "ALIMENTO PARA PERROS PEDIGREE ADULTOS POLLO 100 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA PERROS PEDIGREE ADULTOS PO_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 894,
        "name": "ALIMENTO PARA PERROS DOG CHOW ADULTOS SALMON 100 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images/maxiconsumo/ALIMENTO PARA PERROS DOG CHOW ADULTOS SA_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 895,
        "name": "CHORIZO SWIFT DE CERDO 400 GR",
        "price": 3999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/CHORIZO SWIFT DE CERDO 400 GR_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3999.9
            }
        ]
    },
    {
        "id": 896,
        "name": "QUEBRACHO COLORADO 10 KG",
        "price": 7799.89,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/QUEBRACHO COLORADO 10 KG_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7799.89
            }
        ]
    },
    {
        "id": 897,
        "name": "BONDIOLA DE CERDO INTERPORC PORCION 1 KG",
        "price": 8499.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/BONDIOLA DE CERDO INTERPORC PORCION 1 KG_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 8499.9
            }
        ]
    },
    {
        "id": 898,
        "name": "OSOBUCO RODAJA AL VACIO 1 KG",
        "price": 12799.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/OSOBUCO RODAJA AL VACIO 1 KG_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 12799.9
            }
        ]
    },
    {
        "id": 899,
        "name": "ASADO CARNES PLANCHA CONGELADA 1 KG",
        "price": 14399.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/ASADO CARNES PLANCHA CONGELADA 1 KG_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 14399.9
            }
        ]
    },
    {
        "id": 900,
        "name": "PICADA CARNES CONGELADA 1 KG",
        "price": 14999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/PICADA CARNES CONGELADA 1 KG_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 14999.9
            }
        ]
    },
    {
        "id": 901,
        "name": "PALETA TF AL VACIO 1 KG",
        "price": 16449.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/PALETA TF AL VACIO 1 KG_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 16449.9
            }
        ]
    },
    {
        "id": 902,
        "name": "ROAD BEEF TF AL VACIO 1 KG",
        "price": 16449.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/ROAD BEEF TF AL VACIO 1 KG_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 16449.9
            }
        ]
    },
    {
        "id": 903,
        "name": "BOLA DE LOMO TF CARNES AL VACIO 1 KG",
        "price": 16499.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/BOLA DE LOMO TF CARNES AL VACIO 1 KG_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 16499.9
            }
        ]
    },
    {
        "id": 904,
        "name": "CUADRADA TF CARNES FETEADA CONGELADA 1 KG",
        "price": 16499.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images/maxiconsumo/CUADRADA TF CARNES FETEADA CONGELADA 1 K_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 16499.9
            }
        ]
    },
    {
        "id": 905,
        "name": "CERVEZA ZEUS 473 CC",
        "price": 799.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA ZEUS 473 CC_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            }
        ]
    },
    {
        "id": 906,
        "name": "CERVEZA QUILMES 0.0 SIN ALCOHOL 473 CC",
        "price": 1249.91,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA QUILMES 00 SIN ALCOHOL 473 CC_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1249.91
            }
        ]
    },
    {
        "id": 907,
        "name": "CERVEZA BUDWEISER LATA 473 CC",
        "price": 1699.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA BUDWEISER LATA 473 CC_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1699.9
            }
        ]
    },
    {
        "id": 908,
        "name": "CERVEZA QUILMES STOUT 473 CC",
        "price": 1849.91,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA QUILMES STOUT 473 CC_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1849.91
            }
        ]
    },
    {
        "id": 909,
        "name": "CERVEZA QUILMES LATA 473 CC",
        "price": 1849.91,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA QUILMES LATA 473 CC_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1849.91
            }
        ]
    },
    {
        "id": 910,
        "name": "CERVEZA BRAHMA AMARILLA MUSICA 473 CC",
        "price": 1899.89,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA BRAHMA AMARILLA MUSICA 473 CC_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1899.89
            }
        ]
    },
    {
        "id": 911,
        "name": "CERVEZA ANDES ORIGEN RUBIA 473 CC",
        "price": 1999.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA ANDES ORIGEN RUBIA 473 CC_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1999.9
            }
        ]
    },
    {
        "id": 912,
        "name": "CERVEZA ANDES ORIGEN ROJA 473 cc",
        "price": 1999.91,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA ANDES ORIGEN ROJA 473 cc_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1999.91
            }
        ]
    },
    {
        "id": 913,
        "name": "CERVEZA ANTARES MICRO IPA 25 473 CC",
        "price": 2199.89,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA ANTARES MICRO IPA 25 473 CC_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2199.89
            }
        ]
    },
    {
        "id": 914,
        "name": "CERVEZA CORONA 0.0 SIN ALCOHOL 330 CC",
        "price": 2299.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images/maxiconsumo/CERVEZA CORONA 00 SIN ALCOHOL 330 CC_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2299.9
            }
        ]
    },
    {
        "id": 915,
        "name": "APERITIVO FERCHO FERNET-COCA 1 LT",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/APERITIVO FERCHO FERNET-COCA 1 LT_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 916,
        "name": "FERNET BRANCA MINI 5 CC",
        "price": 2999.88,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET BRANCA MINI 5 CC_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.88
            }
        ]
    },
    {
        "id": 917,
        "name": "FERNET CAPRI 750 CC",
        "price": 3199.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET CAPRI 750 CC_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3199.89
            }
        ]
    },
    {
        "id": 918,
        "name": "FERNET 1882 450 CC",
        "price": 5499.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET 1882 450 CC_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 5499.9
            }
        ]
    },
    {
        "id": 919,
        "name": "FERNET 1882 750 CC",
        "price": 7499.88,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET 1882 750 CC_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7499.88
            }
        ]
    },
    {
        "id": 920,
        "name": "FERNET 1882 1.008 LT",
        "price": 7499.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET 1882 1008 LT_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7499.9
            }
        ]
    },
    {
        "id": 921,
        "name": "FERNET BUHERO 700 ML",
        "price": 7499.91,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET BUHERO 700 ML_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7499.91
            }
        ]
    },
    {
        "id": 922,
        "name": "FERNET BRANCA 450 CC",
        "price": 10299.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET BRANCA 450 CC_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 10299.9
            }
        ]
    },
    {
        "id": 923,
        "name": "FERNET BRANCA 750 CC",
        "price": 15399.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET BRANCA 750 CC_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 15399.9
            }
        ]
    },
    {
        "id": 924,
        "name": "FERNET BRANCA 1 LT",
        "price": 20499.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/FERNET BRANCA 1 LT_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 20499.89
            }
        ]
    },
    {
        "id": 925,
        "name": "BONDIOLA CAGNOLI CERDO CONGELADO 1 KG",
        "price": 9199.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/BONDIOLA CAGNOLI CERDO CONGELADO 1 KG_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 9199.9
            }
        ]
    },
    {
        "id": 926,
        "name": "SALAME LA RESIDENCIA MILA 1/2 FINO 1 KG",
        "price": 10899.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAME LA RESIDENCIA MILA 12 FINO 1 KG_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 10899.9
            }
        ]
    },
    {
        "id": 927,
        "name": "SALAME 66 MILAN 1 KG",
        "price": 10999.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAME 66 MILAN 1 KG_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 10999.9
            }
        ]
    },
    {
        "id": 928,
        "name": "SALAME MAROLIO PAPEL 1 KG",
        "price": 12899.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAME MAROLIO PAPEL 1 KG_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 12899.89
            }
        ]
    },
    {
        "id": 929,
        "name": "SALAME MAROLIO MILAN 1/2 1 KG",
        "price": 13569.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAME MAROLIO MILAN 12 1 KG_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 13569.9
            }
        ]
    },
    {
        "id": 930,
        "name": "SALAME CHAMPION MILAN 1 KG",
        "price": 15819.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAME CHAMPION MILAN 1 KG_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 15819.89
            }
        ]
    },
    {
        "id": 931,
        "name": "SALAMIN LA CASONA PICADO GRUESO 1 KG",
        "price": 16699.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAMIN LA CASONA PICADO GRUESO 1 KG_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 16699.9
            }
        ]
    },
    {
        "id": 932,
        "name": "SALAMIN CHAMPION FINO 1 KG",
        "price": 17399.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAMIN CHAMPION FINO 1 KG_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 17399.9
            }
        ]
    },
    {
        "id": 933,
        "name": "SALAMIN CHAMPION GRUESO 1 kg",
        "price": 17399.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAMIN CHAMPION GRUESO 1 kg_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 17399.9
            }
        ]
    },
    {
        "id": 934,
        "name": "SALAMIN LA CASONA BASTON PICADO GRUESO 1 KG",
        "price": 17999.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/SALAMIN LA CASONA BASTON PICADO GRUESO 1_10.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 17999.9
            }
        ]
    },
    {
        "id": 935,
        "name": "GASEOSA CUNNINGTON CLASICA POMELO 500 CC",
        "price": 669.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA CUNNINGTON CLASICA POMELO 500 CC_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 669.9
            }
        ]
    },
    {
        "id": 936,
        "name": "GASEOSA PASO DE LOS TOROS TONICA 269 CC",
        "price": 899.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA PASO DE LOS TOROS TONICA 269 CC_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 899.9
            }
        ]
    },
    {
        "id": 937,
        "name": "GASEOSA PASO DE LOS TOROS POMELO 269 CC",
        "price": 899.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA PASO DE LOS TOROS POMELO 269 CC_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 899.9
            }
        ]
    },
    {
        "id": 938,
        "name": "GASEOSA CUNNINGTON COLA LIGHT 1,5 LT",
        "price": 999.91,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA CUNNINGTON COLA LIGHT 15 LT_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.91
            }
        ]
    },
    {
        "id": 939,
        "name": "AGUA SMARTWATER 591 CC",
        "price": 1049.89,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/AGUA SMARTWATER 591 CC_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.89
            }
        ]
    },
    {
        "id": 940,
        "name": "GASEOSA FRESHY NARANJA 2.25 LT",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA FRESHY NARANJA 225 LT_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 941,
        "name": "GASEOSA FRESHY COLA 2.25 LT",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA FRESHY COLA 225 LT_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 942,
        "name": "GASEOSA FRESHY LIMA LIMON 2.25 LT",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA FRESHY LIMA LIMON 225 LT_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 943,
        "name": "GASEOSA FRESHY POMELO 2.25 LT",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA FRESHY POMELO 225 LT_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 944,
        "name": "GASEOSA FRESHY TONICA 2.25 LT",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images/maxiconsumo/GASEOSA FRESHY TONICA 225 LT_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 945,
        "name": "MEDALLON PATY EXPRESS 2X55 GR",
        "price": 2219.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/MEDALLON PATY EXPRESS 2X55 GR_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2219.9
            }
        ]
    },
    {
        "id": 946,
        "name": "MEDALLONES CHAMPION ESTUCHE 4 UN",
        "price": 2249.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/MEDALLONES CHAMPION ESTUCHE 4 UN_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2249.9
            }
        ]
    },
    {
        "id": 947,
        "name": "HAMBURGUESA UNION GANADERA FINITAS 2 UN",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA UNION GANADERA FINITAS 2 UN_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 948,
        "name": "HAMBURGUESA PATY FINITA 2 UN",
        "price": 2999.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA PATY FINITA 2 UN_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.9
            }
        ]
    },
    {
        "id": 949,
        "name": "HAMBURGUESA PATY DE CANCHA 2X125 GR",
        "price": 5799.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA PATY DE CANCHA 2X125 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 5799.9
            }
        ]
    },
    {
        "id": 950,
        "name": "HAMBURGUESA SWIFT CASERA 2 UN",
        "price": 6199.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA SWIFT CASERA 2 UN_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 6199.9
            }
        ]
    },
    {
        "id": 951,
        "name": "HAMBURGUESA UNION GANADERA SUPER GIGANTES 2 UN",
        "price": 6998.99,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA UNION GANADERA SUPER GIGANTE_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 6998.99
            }
        ]
    },
    {
        "id": 952,
        "name": "HAMBURGUESA PATY ESTUCHE 4 UN 80 GR",
        "price": 7999.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA PATY ESTUCHE 4 UN 80 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7999.9
            }
        ]
    },
    {
        "id": 953,
        "name": "HAMBURGUESA UNION GANADERA CLASICA 4 UN",
        "price": 8979.89,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA UNION GANADERA CLASICA 4 UN_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 8979.89
            }
        ]
    },
    {
        "id": 954,
        "name": "HAMBURGUESA MAROLIO 12 UN",
        "price": 14999.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images/maxiconsumo/HAMBURGUESA MAROLIO 12 UN_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 14999.9
            }
        ]
    },
    {
        "id": 955,
        "name": "ISOTONICA UP GRADE FRUTOS ROJOS 750 CC",
        "price": 879.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA UP GRADE FRUTOS ROJOS 750 CC_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 879.9
            }
        ]
    },
    {
        "id": 956,
        "name": "ISOTONICA UP GRADE MANZANA 750 C",
        "price": 879.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA UP GRADE MANZANA 750 C_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 879.9
            }
        ]
    },
    {
        "id": 957,
        "name": "ISOTONICA POWERADE MOUNTAIN BLAST PET 500 CC",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA POWERADE MOUNTAIN BLAST PET 50_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 958,
        "name": "ISOTONICA POWERADE MANZANA PET 500 CC",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA POWERADE MANZANA PET 500 CC_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 959,
        "name": "ISOTONICA POWERADE MANZANA PET 995 CC",
        "price": 1499.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA POWERADE MANZANA PET 995 CC_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1499.9
            }
        ]
    },
    {
        "id": 960,
        "name": "ISOTONICA GATORADE NARANJA PET 500 CC",
        "price": 1569.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA GATORADE NARANJA PET 500 CC_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1569.9
            }
        ]
    },
    {
        "id": 961,
        "name": "ISOTONICA GATORADE MANZANA PET 500 CC",
        "price": 1569.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA GATORADE MANZANA PET 500 CC_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1569.9
            }
        ]
    },
    {
        "id": 962,
        "name": "ISOTONICA GATORADE COOL BLUE PET 500 CC",
        "price": 1569.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA GATORADE COOL BLUE PET 500 CC_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1569.9
            }
        ]
    },
    {
        "id": 963,
        "name": "ISOTONICA GATORADE UVA PET 500 CC",
        "price": 1569.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA GATORADE UVA PET 500 CC_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1569.9
            }
        ]
    },
    {
        "id": 964,
        "name": "ISOTONICA GATORADE FRUTAS TROPICALES PET 500 CC",
        "price": 1569.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images/maxiconsumo/ISOTONICA GATORADE FRUTAS TROPICALES PET_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1569.9
            }
        ]
    },
    {
        "id": 965,
        "name": "JUGO MAROLIO NARANJA 20 GR",
        "price": 189.9,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO MAROLIO NARANJA 20 GR_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 189.9
            }
        ]
    },
    {
        "id": 966,
        "name": "JUGO NOEL MULTIFRUTA 16 GR",
        "price": 279.89,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO NOEL MULTIFRUTA 16 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 279.89
            }
        ]
    },
    {
        "id": 967,
        "name": "JUGO NOEL MANZANA 16 GR",
        "price": 279.89,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO NOEL MANZANA 16 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 279.89
            }
        ]
    },
    {
        "id": 968,
        "name": "JUGO NOEL NARANJA 16 GR",
        "price": 279.89,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO NOEL NARANJA 16 GR_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 279.89
            }
        ]
    },
    {
        "id": 969,
        "name": "JUGO LA CAMPAGNOLA BC NARANJA 9,2 GR",
        "price": 279.9,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO LA CAMPAGNOLA BC NARANJA 92 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 279.9
            }
        ]
    },
    {
        "id": 970,
        "name": "JUGO LA CAMPAGNOLA BC MANZANA ROJA 8 GR",
        "price": 279.9,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO LA CAMPAGNOLA BC MANZANA ROJA 8 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 279.9
            }
        ]
    },
    {
        "id": 971,
        "name": "JUGO ARCOR MANGO NARANJA 15 GR",
        "price": 289.89,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO ARCOR MANGO NARANJA 15 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 289.89
            }
        ]
    },
    {
        "id": 972,
        "name": "JUGO ARCOR ANANA 15 GR",
        "price": 289.89,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO ARCOR ANANA 15 GR_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 289.89
            }
        ]
    },
    {
        "id": 973,
        "name": "JUGO ARCOR NARANJA DULCE 15 GR",
        "price": 289.89,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO ARCOR NARANJA DULCE 15 GR_10.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 289.89
            }
        ]
    },
    {
        "id": 974,
        "name": "JUGO ARCOR MULTIFRUTA 15 GR",
        "price": 289.89,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images/maxiconsumo/JUGO ARCOR MULTIFRUTA 15 GR_11.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 289.89
            }
        ]
    },
    {
        "id": 975,
        "name": "LECHE ARMONIA SACHET 2% 1 LT",
        "price": 1449.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/LECHE ARMONIA SACHET 2 1 LT_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1449.89
            }
        ]
    },
    {
        "id": 976,
        "name": "LECHE ARMONIA SACHET 1% 1 LT",
        "price": 1449.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/LECHE ARMONIA SACHET 1 1 LT_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1449.89
            }
        ]
    },
    {
        "id": 977,
        "name": "LECHE NESTLE NIDINA 2 200 ml",
        "price": 1499.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/LECHE NESTLE NIDINA 2 200 ml_10.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1499.89
            }
        ]
    },
    {
        "id": 978,
        "name": "LECHE LA SERENISIMA LIVIANA 1% SACHET 1 LT",
        "price": 1599.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/LECHE LA SERENISIMA LIVIANA 1 SACHET 1 L_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1599.9
            }
        ]
    },
    {
        "id": 979,
        "name": "LECHE LA SERENISIMA CLASICA 3% 1 LT",
        "price": 1599.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/LECHE LA SERENISIMA CLASICA 3 1 LT_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1599.9
            }
        ]
    },
    {
        "id": 980,
        "name": "LECHE ANGELITA LARGA VIDA LIVIANA 1 LT",
        "price": 1759.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/LECHE ANGELITA LARGA VIDA LIVIANA 1 LT_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1759.9
            }
        ]
    },
    {
        "id": 981,
        "name": "LECHE SANCOR BEBE ADVANCE 1 200 ML",
        "price": 1999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/LECHE SANCOR BEBE ADVANCE 1 200 ML_11.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1999.9
            }
        ]
    },
    {
        "id": 982,
        "name": "CREMA LA SERENISIMA CULINARIA 200 CC",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CREMA LA SERENISIMA CULINARIA 200 CC_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 983,
        "name": "CREMA LA PAULINA 350 CC",
        "price": 3319.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CREMA LA PAULINA 350 CC_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3319.89
            }
        ]
    },
    {
        "id": 984,
        "name": "CREMA LA SERENISIMA VITAMINAS A y E 360 GR",
        "price": 3599.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CREMA LA SERENISIMA VITAMINAS A y E 360 _0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3599.9
            }
        ]
    },
    {
        "id": 985,
        "name": "ACEITE MAROLIO MEZCLA 900 CC",
        "price": 2099.89,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE MAROLIO MEZCLA 900 CC_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2099.89
            }
        ]
    },
    {
        "id": 986,
        "name": "ACEITE COCINERO MEZCLA 900 CC",
        "price": 2499.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE COCINERO MEZCLA 900 CC_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2499.9
            }
        ]
    },
    {
        "id": 987,
        "name": "ACEITE MAROLIO GIRASOL 900 CC",
        "price": 2699.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE MAROLIO GIRASOL 900 CC_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2699.9
            }
        ]
    },
    {
        "id": 988,
        "name": "ACEITE MOLTO GIRASOL 900 CC",
        "price": 2699.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE MOLTO GIRASOL 900 CC_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2699.9
            }
        ]
    },
    {
        "id": 989,
        "name": "ACEITE LEGITIMO GIRASOL 900 CC",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE LEGITIMO GIRASOL 900 CC_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 990,
        "name": "ACEITE MOLTO GIRASOL AEROSOL 120 CC",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE MOLTO GIRASOL AEROSOL 120 CC_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 991,
        "name": "ACEITE MOLTO MANTECA AEROSOL 120 CC",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE MOLTO MANTECA AEROSOL 120 CC_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 992,
        "name": "ACEITE FRITOLIM AERO CLASIC 120 cc",
        "price": 2999.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE FRITOLIM AERO CLASIC 120 cc_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.9
            }
        ]
    },
    {
        "id": 993,
        "name": "ACEITE CANUELAS GIRASOL 900 CC",
        "price": 2999.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE CANUELAS GIRASOL 900 CC_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.9
            }
        ]
    },
    {
        "id": 994,
        "name": "ACEITE COCINERO GIRASOL 900 CC",
        "price": 2999.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images/maxiconsumo/ACEITE COCINERO GIRASOL 900 CC_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.9
            }
        ]
    },
    {
        "id": 995,
        "name": "MAYONESA MAROLIO DOYPACK 241 GR",
        "price": 619.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/MAYONESA MAROLIO DOYPACK 241 GR_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 619.9
            }
        ]
    },
    {
        "id": 996,
        "name": "MOSTAZA FANACOA DOYPACK 250 GR",
        "price": 799.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/MOSTAZA FANACOA DOYPACK 250 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.89
            }
        ]
    },
    {
        "id": 997,
        "name": "SALSA GOLF NATURA 125 CC",
        "price": 869.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/SALSA GOLF NATURA 125 CC_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 869.89
            }
        ]
    },
    {
        "id": 998,
        "name": "MOSTAZA NATURA DOYPACK 250 CC",
        "price": 939.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/MOSTAZA NATURA DOYPACK 250 CC_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 939.89
            }
        ]
    },
    {
        "id": 999,
        "name": "SALSA MAROLIO INGLESA 280 GR",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/SALSA MAROLIO INGLESA 280 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 1000,
        "name": "CHIMICHURRI MAROLIO CLASICO 285 GR",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CHIMICHURRI MAROLIO CLASICO 285 GR_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 1001,
        "name": "CHIMICHURRI MAROLIO PICANTE 285 GR",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CHIMICHURRI MAROLIO PICANTE 285 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 1002,
        "name": "CHIMICHURRI MAROLIO AHUMADO 285 GR",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CHIMICHURRI MAROLIO AHUMADO 285 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 1003,
        "name": "SALSA MAROLIO SOJA 280 GR",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/SALSA MAROLIO SOJA 280 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 1004,
        "name": "SALSA MAROLIO CRIOLLA 280 GR",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/SALSA MAROLIO CRIOLLA 280 GR_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 1005,
        "name": "ARROZ EL DIQUE \"0000\" 500 GR",
        "price": 499.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ EL DIQUE 0000 500 GR_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 499.9
            }
        ]
    },
    {
        "id": 1006,
        "name": "ARROZ CAÑUELAS LARGO FINO 500 GR",
        "price": 589.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ CAÑUELAS LARGO FINO 500 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 589.9
            }
        ]
    },
    {
        "id": 1007,
        "name": "ARROZ MOLTO INTEGRAL 500 GR",
        "price": 619.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ MOLTO INTEGRAL 500 GR_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 619.9
            }
        ]
    },
    {
        "id": 1008,
        "name": "ARROZ MOLTO LARGO FINO 500 GR",
        "price": 619.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ MOLTO LARGO FINO 500 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 619.9
            }
        ]
    },
    {
        "id": 1009,
        "name": "ARROZ ALA DORADO 500 GR",
        "price": 749.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ ALA DORADO 500 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 749.9
            }
        ]
    },
    {
        "id": 1010,
        "name": "ARROZ LUCCHETTI LARGO FINO 500 GR",
        "price": 749.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ LUCCHETTI LARGO FINO 500 GR_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 749.9
            }
        ]
    },
    {
        "id": 1011,
        "name": "ARROZ LUCCHETTI PARBOIL 500 GR",
        "price": 888.89,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ LUCCHETTI PARBOIL 500 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 888.89
            }
        ]
    },
    {
        "id": 1012,
        "name": "ARROZ GALLO LARGO 500 GR",
        "price": 899.89,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ GALLO LARGO 500 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 899.89
            }
        ]
    },
    {
        "id": 1013,
        "name": "ARROZ EL DIQUE \"0000\" 1 KG",
        "price": 899.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ EL DIQUE 0000 1 KG_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 899.9
            }
        ]
    },
    {
        "id": 1014,
        "name": "ARROZ MAROLIO DOBLE 500 GR",
        "price": 989.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images/maxiconsumo/ARROZ MAROLIO DOBLE 500 GR_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 989.9
            }
        ]
    },
    {
        "id": 1015,
        "name": "CEREAL NUTRIFOODS COPO MAIZ 150 gr",
        "price": 1279.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL NUTRIFOODS COPO MAIZ 150 gr_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1279.89
            }
        ]
    },
    {
        "id": 1016,
        "name": "CEREAL MAROLIO ARITOS FRUTADOS 160 gr",
        "price": 1379.9,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL MAROLIO ARITOS FRUTADOS 160 gr_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1379.9
            }
        ]
    },
    {
        "id": 1017,
        "name": "CEREAL NUTRIFOODS COPO AZUCAR 200 gr",
        "price": 1459.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL NUTRIFOODS COPO AZUCAR 200 gr_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1459.89
            }
        ]
    },
    {
        "id": 1018,
        "name": "CEREAL MAROLIO REDONDITOS CHOCOLATE 210 gr",
        "price": 1499.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL MAROLIO REDONDITOS CHOCOLATE 210 _3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1499.89
            }
        ]
    },
    {
        "id": 1019,
        "name": "CEREAL MAROLIO ALMOHADITAS CHOCOLATE 180 gr",
        "price": 1699.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL MAROLIO ALMOHADITAS CHOCOLATE 180_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1699.89
            }
        ]
    },
    {
        "id": 1020,
        "name": "CEREAL MAROLIO ALMOHADITAS FRUTILLA 180 gr",
        "price": 1699.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL MAROLIO ALMOHADITAS FRUTILLA 180 _5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1699.89
            }
        ]
    },
    {
        "id": 1021,
        "name": "SEMILLA GENSER MIX DESAYUNO 150 gr",
        "price": 1970.92,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/SEMILLA GENSER MIX DESAYUNO 150 gr_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1970.92
            }
        ]
    },
    {
        "id": 1022,
        "name": "SEMILLA GENSER MIX ENSALADAS Y SOPAS 150 gr",
        "price": 1999.9,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/SEMILLA GENSER MIX ENSALADAS Y SOPAS 150_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1999.9
            }
        ]
    },
    {
        "id": 1023,
        "name": "CEREAL NESQUIK FUENTE CALCIO 210 230 GR",
        "price": 4999.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL NESQUIK FUENTE CALCIO 210 230 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 4999.89
            }
        ]
    },
    {
        "id": 1024,
        "name": "CEREAL NESTLE GLANOLA 300 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images/maxiconsumo/CEREAL NESTLE GLANOLA 300 GR_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1025,
        "name": "DURAZNO MAROLIO TROZO TETRA RECART 200 GR",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/DURAZNO MAROLIO TROZO TETRA RECART 200 G_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 1026,
        "name": "DURAZNO MAROLIO MITAD 820 GR",
        "price": 2099.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/DURAZNO MAROLIO MITAD 820 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2099.89
            }
        ]
    },
    {
        "id": 1027,
        "name": "DURAZNO MOLTO MITADES 820 GR",
        "price": 2399.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/DURAZNO MOLTO MITADES 820 GR_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2399.9
            }
        ]
    },
    {
        "id": 1028,
        "name": "COCTEL DE FRUTAS MAROLIO 820 GR",
        "price": 2699.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/COCTEL DE FRUTAS MAROLIO 820 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2699.9
            }
        ]
    },
    {
        "id": 1029,
        "name": "COCTEL DE FRUTAS MOLTO 4 FRUTAS 820 GR",
        "price": 2999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/COCTEL DE FRUTAS MOLTO 4 FRUTAS 820 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.9
            }
        ]
    },
    {
        "id": 1030,
        "name": "ANANA MAROLIO RODAJA 565 GR",
        "price": 3299.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ANANA MAROLIO RODAJA 565 GR_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3299.9
            }
        ]
    },
    {
        "id": 1031,
        "name": "ANANA MOLTO RODAJA 565 GR",
        "price": 3699.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ANANA MOLTO RODAJA 565 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3699.9
            }
        ]
    },
    {
        "id": 1032,
        "name": "ANANA MAROLIO RODAJA 825 GR",
        "price": 4199.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ANANA MAROLIO RODAJA 825 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 4199.9
            }
        ]
    },
    {
        "id": 1033,
        "name": "ANANA MAROLIO TROZO 850 GR",
        "price": 4249.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ANANA MAROLIO TROZO 850 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 4249.9
            }
        ]
    },
    {
        "id": 1034,
        "name": "ANANA MOLTO RODAJA 850 GR",
        "price": 4999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ANANA MOLTO RODAJA 850 GR_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 4999.9
            }
        ]
    },
    {
        "id": 1035,
        "name": "PASAS DE UVA PASABLANCA SULTANINA 200 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/PASAS DE UVA PASABLANCA SULTANINA 200 GR_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1036,
        "name": "CIRUELA DAGEN CON CAROZO 200 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CIRUELA DAGEN CON CAROZO 200 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1037,
        "name": "NUECES BLANCANUEZ MEDIANA 400 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES BLANCANUEZ MEDIANA 400 GR_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1038,
        "name": "NUECES BLANCANUEZ PELADAS 100 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES BLANCANUEZ PELADAS 100 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1039,
        "name": "ALMENDRAS BLANCALME PELADAS 100 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ALMENDRAS BLANCALME PELADAS 100 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1040,
        "name": "NUECES BLANCANUEZ GRANDE 34.36 500 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES BLANCANUEZ GRANDE 3436 500 GR_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1041,
        "name": "NUECES GRANDIET PELADAS 60 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES GRANDIET PELADAS 60 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1042,
        "name": "ALMENDRAS GRANDIET PELADAS 80 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ALMENDRAS GRANDIET PELADAS 80 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1043,
        "name": "MIX GRANDIET PREMIUM 80 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/MIX GRANDIET PREMIUM 80 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1044,
        "name": "PASAS DE UVA PASABLANCA SULTANINA 200 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/PASAS DE UVA PASABLANCA SULTANINA 200 GR_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1045,
        "name": "CIRUELA DAGEN CON CAROZO 200 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/CIRUELA DAGEN CON CAROZO 200 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1046,
        "name": "NUECES BLANCANUEZ MEDIANA 400 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES BLANCANUEZ MEDIANA 400 GR_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1047,
        "name": "NUECES BLANCANUEZ PELADAS 100 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES BLANCANUEZ PELADAS 100 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1048,
        "name": "ALMENDRAS BLANCALME PELADAS 100 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ALMENDRAS BLANCALME PELADAS 100 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1049,
        "name": "NUECES BLANCANUEZ GRANDE 34.36 500 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES BLANCANUEZ GRANDE 3436 500 GR_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1050,
        "name": "NUECES GRANDIET PELADAS 60 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/NUECES GRANDIET PELADAS 60 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1051,
        "name": "ALMENDRAS GRANDIET PELADAS 80 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/ALMENDRAS GRANDIET PELADAS 80 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1052,
        "name": "MIX GRANDIET PREMIUM 80 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/MIX GRANDIET PREMIUM 80 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1053,
        "name": "PASTAFROLA AIRES DE LUJAN MEMBRILLO 40 GR",
        "price": 279.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/PASTAFROLA AIRES DE LUJAN MEMBRILLO 40 G_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 279.9
            }
        ]
    },
    {
        "id": 1054,
        "name": "GALLETITAS POLVORITA VAINILLA 80 GR",
        "price": 459.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/GALLETITAS POLVORITA VAINILLA 80 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 459.9
            }
        ]
    },
    {
        "id": 1055,
        "name": "GALLETITAS POLVORITA CHOCOLATE VAINILLA 81 GR",
        "price": 459.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/GALLETITAS POLVORITA CHOCOLATE VAINILLA _2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 459.9
            }
        ]
    },
    {
        "id": 1056,
        "name": "GALLETITAS POLVORITA VAINILLA FRUTILLA 80 GR",
        "price": 459.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/GALLETITAS POLVORITA VAINILLA FRUTILLA 8_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 459.9
            }
        ]
    },
    {
        "id": 1057,
        "name": "GALLETITAS MAROLIO PEPAS 180 GR",
        "price": 499.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/GALLETITAS MAROLIO PEPAS 180 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 499.9
            }
        ]
    },
    {
        "id": 1058,
        "name": "GALLETITAS VOCACION ACARAMELADA FORTIFICADA 150 GR",
        "price": 599.91,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/GALLETITAS VOCACION ACARAMELADA FORTIFIC_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 599.91
            }
        ]
    },
    {
        "id": 1059,
        "name": "OBLEA MAROLIO LIMON 100 GR",
        "price": 629.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/OBLEA MAROLIO LIMON 100 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 629.9
            }
        ]
    },
    {
        "id": 1060,
        "name": "OBLEA MAROLIO FRUTILLA 100 GR",
        "price": 629.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/OBLEA MAROLIO FRUTILLA 100 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 629.9
            }
        ]
    },
    {
        "id": 1061,
        "name": "GALLETITAS OPERA 55 GR",
        "price": 649.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/GALLETITAS OPERA 55 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 649.89
            }
        ]
    },
    {
        "id": 1062,
        "name": "GALLETITAS VOCACION CLASICA 141 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/GALLETITAS VOCACION CLASICA 141 GR_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1063,
        "name": "HARINA DE MAIZ MAROLIO 500 GR",
        "price": 599.91,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA DE MAIZ MAROLIO 500 GR_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 599.91
            }
        ]
    },
    {
        "id": 1064,
        "name": "POLENTA MAROLIO 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA MAROLIO 500 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1065,
        "name": "POLENTA MAROLIO 750 gr",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA MAROLIO 750 gr_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 1066,
        "name": "HARINA DE MAIZ MAROLIO MAIZ 1 KG",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA DE MAIZ MAROLIO MAIZ 1 KG_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 1067,
        "name": "POLENTA PRESTOPRONTA ESPINACA 250 gr",
        "price": 1149.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA PRESTOPRONTA ESPINACA 250 gr_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1149.9
            }
        ]
    },
    {
        "id": 1068,
        "name": "POLENTA PRESTOPRONTA PANCETA Y QUESO 250 gr",
        "price": 1149.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA PRESTOPRONTA PANCETA Y QUESO 250_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1149.9
            }
        ]
    },
    {
        "id": 1069,
        "name": "POLENTA PRESTOPRONTA 490 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA PRESTOPRONTA 490 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 1070,
        "name": "POLENTA PRESTOPRONTA 730 GR",
        "price": 1549.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA PRESTOPRONTA 730 GR_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1549.9
            }
        ]
    },
    {
        "id": 1071,
        "name": "POLENTA MAGICA 500 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA MAGICA 500 GR_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1072,
        "name": "POLENTA NOEL 500 gr",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/POLENTA NOEL 500 gr_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1073,
        "name": "HARINA MAROLIO \"000\" 1 KG",
        "price": 649.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA MAROLIO 000 1 KG_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 649.9
            }
        ]
    },
    {
        "id": 1074,
        "name": "HARINA CANUELAS \"000\" 1 KG",
        "price": 689.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA CANUELAS 000 1 KG_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 689.9
            }
        ]
    },
    {
        "id": 1075,
        "name": "HARINA MAROLIO \"0000\" 1 KG",
        "price": 849.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA MAROLIO 0000 1 KG_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.9
            }
        ]
    },
    {
        "id": 1076,
        "name": "HARINA MAROLIO LEUDANTE 1 KG",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA MAROLIO LEUDANTE 1 KG_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            }
        ]
    },
    {
        "id": 1077,
        "name": "HARINA PUREZA \"0000\" 1 KG",
        "price": 1049.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA PUREZA 0000 1 KG_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            }
        ]
    },
    {
        "id": 1078,
        "name": "HARINA FAVORITA \"0000\" 1 KG",
        "price": 1099.89,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA FAVORITA 0000 1 KG_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.89
            }
        ]
    },
    {
        "id": 1079,
        "name": "HARINA PUREZA INTEGRAL 1 KG",
        "price": 1299.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA PUREZA INTEGRAL 1 KG_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1299.9
            }
        ]
    },
    {
        "id": 1080,
        "name": "HARINA PUREZA PIZZAS CASERAS 1 KG",
        "price": 1449.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA PUREZA PIZZAS CASERAS 1 KG_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1449.9
            }
        ]
    },
    {
        "id": 1081,
        "name": "HARINA BLANCAFLOR LEUDANTE 1 KG",
        "price": 1499.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA BLANCAFLOR LEUDANTE 1 KG_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1499.9
            }
        ]
    },
    {
        "id": 1082,
        "name": "HARINA BLANCAFLOR INTEGRAL 1 KG",
        "price": 1499.9,
        "market": "maxiconsumo",
        "category": "harinas",
        "image": "images/maxiconsumo/HARINA BLANCAFLOR INTEGRAL 1 KG_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1499.9
            }
        ]
    },
    {
        "id": 1083,
        "name": "SAL DOS ESTRELLAS FINA 500 gr",
        "price": 479.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL DOS ESTRELLAS FINA 500 gr_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 479.9
            }
        ]
    },
    {
        "id": 1084,
        "name": "SAL MAROLIO FINA PAQUETE 500 GR",
        "price": 649.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL MAROLIO FINA PAQUETE 500 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 649.9
            }
        ]
    },
    {
        "id": 1085,
        "name": "SAL MAROLIO FINA ESTUCHE 500 GR",
        "price": 649.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL MAROLIO FINA ESTUCHE 500 GR_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 649.9
            }
        ]
    },
    {
        "id": 1086,
        "name": "SAL COLOSAL ENTREFINA DOYPACK 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL COLOSAL ENTREFINA DOYPACK 500 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1087,
        "name": "SAL COLOSAL GRUESA DOYPACK 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL COLOSAL GRUESA DOYPACK 500 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1088,
        "name": "SAL EL DIQUE GRUESA 1 KG",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL EL DIQUE GRUESA 1 KG_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1089,
        "name": "SAL COLOSAL FINA DOYPACK 250 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL COLOSAL FINA DOYPACK 250 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 729.9
            }
        ]
    },
    {
        "id": 1090,
        "name": "SAL EL DIQUE ENTREFINA 1 KG",
        "price": 849.89,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL EL DIQUE ENTREFINA 1 KG_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.89
            }
        ]
    },
    {
        "id": 1091,
        "name": "SAL CELUSAL FINA PAQUETE 500 GR",
        "price": 849.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL CELUSAL FINA PAQUETE 500 GR_10.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.9
            }
        ]
    },
    {
        "id": 1092,
        "name": "SAL CELUSAL FINA ESTUCHE 500 GR",
        "price": 849.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL CELUSAL FINA ESTUCHE 500 GR_11.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.9
            }
        ]
    },
    {
        "id": 1093,
        "name": "SAL DOS ESTRELLAS FINA 500 gr",
        "price": 479.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL DOS ESTRELLAS FINA 500 gr_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 479.9
            }
        ]
    },
    {
        "id": 1094,
        "name": "SAL MAROLIO FINA PAQUETE 500 GR",
        "price": 649.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL MAROLIO FINA PAQUETE 500 GR_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 649.9
            }
        ]
    },
    {
        "id": 1095,
        "name": "SAL MAROLIO FINA ESTUCHE 500 GR",
        "price": 649.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL MAROLIO FINA ESTUCHE 500 GR_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 649.9
            }
        ]
    },
    {
        "id": 1096,
        "name": "SAL COLOSAL ENTREFINA DOYPACK 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL COLOSAL ENTREFINA DOYPACK 500 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1097,
        "name": "SAL COLOSAL GRUESA DOYPACK 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL COLOSAL GRUESA DOYPACK 500 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1098,
        "name": "SAL EL DIQUE GRUESA 1 KG",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL EL DIQUE GRUESA 1 KG_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1099,
        "name": "SAL COLOSAL FINA DOYPACK 250 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL COLOSAL FINA DOYPACK 250 GR_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 729.9
            }
        ]
    },
    {
        "id": 1100,
        "name": "SAL EL DIQUE ENTREFINA 1 KG",
        "price": 849.89,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL EL DIQUE ENTREFINA 1 KG_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.89
            }
        ]
    },
    {
        "id": 1101,
        "name": "SAL CELUSAL FINA PAQUETE 500 GR",
        "price": 849.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL CELUSAL FINA PAQUETE 500 GR_10.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.9
            }
        ]
    },
    {
        "id": 1102,
        "name": "SAL CELUSAL FINA ESTUCHE 500 GR",
        "price": 849.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images/maxiconsumo/SAL CELUSAL FINA ESTUCHE 500 GR_11.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.9
            }
        ]
    },
    {
        "id": 1103,
        "name": "VINAGRE MAROLIO ALCOHOL 500 CC",
        "price": 899.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MAROLIO ALCOHOL 500 CC_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 899.89
            }
        ]
    },
    {
        "id": 1104,
        "name": "VINAGRE MOLTO ALCOHOL 500 CC",
        "price": 899.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MOLTO ALCOHOL 500 CC_1.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 899.89
            }
        ]
    },
    {
        "id": 1105,
        "name": "VINAGRE MAROLIO VINO 500 CC",
        "price": 1079.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MAROLIO VINO 500 CC_2.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1079.89
            }
        ]
    },
    {
        "id": 1106,
        "name": "VINAGRE MAROLIO ALCOHOL 1 LT",
        "price": 1149.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MAROLIO ALCOHOL 1 LT_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1149.9
            }
        ]
    },
    {
        "id": 1107,
        "name": "VINAGRE MOLTO ALCOHOL 1 LT",
        "price": 1149.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MOLTO ALCOHOL 1 LT_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1149.9
            }
        ]
    },
    {
        "id": 1108,
        "name": "VINAGRE DOS ANCLAS ALCOHOL 1 LT",
        "price": 1299.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE DOS ANCLAS ALCOHOL 1 LT_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1299.89
            }
        ]
    },
    {
        "id": 1109,
        "name": "VINAGRE MAROLIO MANZANA 500 CC",
        "price": 1349.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MAROLIO MANZANA 500 CC_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1349.9
            }
        ]
    },
    {
        "id": 1110,
        "name": "VINAGRE MOLTO MANZANA 500 CC",
        "price": 1399.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MOLTO MANZANA 500 CC_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1399.9
            }
        ]
    },
    {
        "id": 1111,
        "name": "VINAGRE MAROLIO VINO 1 LT",
        "price": 1549.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MAROLIO VINO 1 LT_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1549.89
            }
        ]
    },
    {
        "id": 1112,
        "name": "VINAGRE MAROLIO MANZANA 1 LT",
        "price": 2059.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images/maxiconsumo/VINAGRE MAROLIO MANZANA 1 LT_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2059.89
            }
        ]
    },
    {
        "id": 1113,
        "name": "QUESO ADLER DAMBO 144 GR",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO ADLER DAMBO 144 GR_3.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 1114,
        "name": "QUESO ADLER CHEDDAR 144 GR",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO ADLER CHEDDAR 144 GR_4.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 1115,
        "name": "QUESO LA PAULINA DAMBO FETAS 180 gr",
        "price": 3999.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO LA PAULINA DAMBO FETAS 180 gr_5.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3999.9
            }
        ]
    },
    {
        "id": 1116,
        "name": "MUZZARELLA MAROLIO 1/4 HORMA 1 KG",
        "price": 8659.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/MUZZARELLA MAROLIO 14 HORMA 1 KG_6.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 8659.9
            }
        ]
    },
    {
        "id": 1117,
        "name": "QUESO MAROLIO BARRA 1 KG",
        "price": 11129.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO MAROLIO BARRA 1 KG_7.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11129.89
            }
        ]
    },
    {
        "id": 1118,
        "name": "QUESO BARRAZA BARRA TYBO 1 kg",
        "price": 11199.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO BARRAZA BARRA TYBO 1 kg_8.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11199.89
            }
        ]
    },
    {
        "id": 1119,
        "name": "QUESO PUYEHUE BARRA 1 KG",
        "price": 11249.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO PUYEHUE BARRA 1 KG_9.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11249.9
            }
        ]
    },
    {
        "id": 1120,
        "name": "QUESO LA PAULINA BARRA PRATO 1 KG",
        "price": 11449.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO LA PAULINA BARRA PRATO 1 KG_10.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11449.89
            }
        ]
    },
    {
        "id": 1121,
        "name": "QUESO LA PAULINA BARRA SANDWICH 1 KG",
        "price": 11499.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO LA PAULINA BARRA SANDWICH 1 KG_11.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11499.9
            }
        ]
    },
    {
        "id": 1122,
        "name": "QUESO LA QUESERA AZUL MITAD 1 KG",
        "price": 17399.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images/maxiconsumo/QUESO LA QUESERA AZUL MITAD 1 KG_0.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 17399.9
            }
        ]
    }
];