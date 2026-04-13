const allProductsData = [
    {
        "id": 1,
        "name": "Vinagre de alcohol Casalta 1 l.",
        "price": 1173.75,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Casalta 1 l_8.jpg",
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
            }
        ]
    },
    {
        "id": 2,
        "name": "Vinagre de alcohol Alcazar 1 l.",
        "price": 1230.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Alcazar 1 l_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1230.0
            }
        ]
    },
    {
        "id": 3,
        "name": "Vinagre de alcohol Carrefour classic 1 l.",
        "price": 1431.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Carrefour classic 1 l_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1431.0
            }
        ]
    },
    {
        "id": 4,
        "name": "Vinagre de alcohol Menoyo 1 l.",
        "price": 1639.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Menoyo 1 l_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1229.25
            },
            {
                "date": "2026-03-21",
                "price": 1639.0
            },
            {
                "date": "2026-04-02",
                "price": 1229.25
            },
            {
                "date": "2026-04-08",
                "price": 1639.0
            }
        ]
    },
    {
        "id": 5,
        "name": "Aceite en aerosol Cañuelas de girasol 187 cc.",
        "price": 2936.25,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite en aerosol Cañuelas de girasol 18_15.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2936.25
            }
        ]
    },
    {
        "id": 6,
        "name": "Aceite en aerosol Carrefour classic girasol 150 cc.",
        "price": 2993.9,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite en aerosol Carrefour classic gira_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3630.9
            },
            {
                "date": "2026-03-21",
                "price": 3903.9
            },
            {
                "date": "2026-03-28",
                "price": 3539.9
            },
            {
                "date": "2026-04-08",
                "price": 2993.9
            }
        ]
    },
    {
        "id": 7,
        "name": "Aceite de girasol Carrefour Classic  alto omega pet 900 cc.",
        "price": 2998.6,
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
            }
        ]
    },
    {
        "id": 8,
        "name": "Aceite de girasol Cocinero 900 cc.",
        "price": 3705.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Cocinero 900 cc_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3705.0
            }
        ]
    },
    {
        "id": 9,
        "name": "Aceite de girasol Natura 900 cc.",
        "price": 3999.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Natura 900 cc_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 10,
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
            }
        ]
    },
    {
        "id": 11,
        "name": "Agua mineral sin gas Carrefour Classic 2 lts",
        "price": 959.2,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Carrefour Classic 2_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1135.2
            },
            {
                "date": "2026-03-28",
                "price": 959.2
            }
        ]
    },
    {
        "id": 12,
        "name": "Soda Bulnez 2,25 lts",
        "price": 1190.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Soda Bulnez 225 lts_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1190.0
            }
        ]
    },
    {
        "id": 13,
        "name": "Agua mineral sin gas Villa del Sur 2,25 lts",
        "price": 1532.67,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Villa del Sur 225 l_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2299.0
            },
            {
                "date": "2026-03-21",
                "price": 1532.67
            },
            {
                "date": "2026-03-28",
                "price": 2299.0
            },
            {
                "date": "2026-04-08",
                "price": 1532.67
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
        "name": "Agua saborizada limoneto H2OH con gas 2,25 lts",
        "price": 1692.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua saborizada limoneto H2OH con gas 22_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1692.0
            }
        ]
    },
    {
        "id": 16,
        "name": "Soda saldan sifón 2 lts",
        "price": 1800.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Soda saldan sifón 2 lts_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-04-02",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 17,
        "name": "Agua saborizada de pera Aquarius 2,25 lts",
        "price": 2550.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua saborizada de pera Aquarius 225 lts_10.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2550.0
            }
        ]
    },
    {
        "id": 18,
        "name": "Agua mineral Carrefour bidón 6,25 lts",
        "price": 2750.1,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral Carrefour bidón 625 lts_4.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2750.1
            }
        ]
    },
    {
        "id": 19,
        "name": "Agua de mesa sin gas Bulnez bidón 6,5 lts",
        "price": 2790.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua de mesa sin gas Bulnez bidón 65 lts_5.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2690.0
            },
            {
                "date": "2026-04-12",
                "price": 2790.0
            }
        ]
    },
    {
        "id": 20,
        "name": "Agua de mesa sin gas Carrefour Classic bidón 6.5 lts",
        "price": 2904.6,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua de mesa sin gas Carrefour Classic b_15.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2904.6
            }
        ]
    },
    {
        "id": 21,
        "name": "Alimento húmedo para gato Carrefour 85 g. frutos de mar",
        "price": 1100.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Carrefour 85 g_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 22,
        "name": "Alimento húmedo para gato Carrefour 85 g. salmón rosado",
        "price": 1100.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Carrefour 85 g_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 23,
        "name": "Alimento húmedo para gato Carrefour 85 g. atún y sardinas",
        "price": 1100.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Carrefour 85 g_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 24,
        "name": "Alimento húmedo para gato Pet's Class 85 g. adulto atún y sardinas",
        "price": 1200.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Pets Class 85 _15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 25,
        "name": "Alimento seco para gato Raza 1 kg. carne, pescado y arroz",
        "price": 3689.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Raza 1 kg carne _4.jpg",
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
            }
        ]
    },
    {
        "id": 26,
        "name": "Alimento seco para gato Raza 1 kg. pescado",
        "price": 3689.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Raza 1 kg pescad_5.jpg",
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
            }
        ]
    },
    {
        "id": 27,
        "name": "Alimento seco para gato Maintenance Criadores 1 kg",
        "price": 3919.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Maintenance Cria_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3919.0
            }
        ]
    },
    {
        "id": 28,
        "name": "Alimento seco para gato Gati pescado y salmón 1 kg",
        "price": 4780.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Gati pescado y s_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4780.0
            }
        ]
    },
    {
        "id": 29,
        "name": "Alimento seco para gato Sabrositos mix p/v/c 3 kg",
        "price": 7342.5,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Sabrositos mix p_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7342.5
            }
        ]
    },
    {
        "id": 30,
        "name": "Alimento seco para gato Cat chow adulto pescado y pollo 1 kg",
        "price": 8000.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Cat chow adulto _7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 8000.0
            }
        ]
    },
    {
        "id": 31,
        "name": "Arroz Molinos Ala largo fino 00000 bolsa 500 g.",
        "price": 1050.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz Molinos Ala largo fino 00000 bolsa_11.jpg",
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
        "id": 32,
        "name": "Arroz blanco Shangrila 1 kg",
        "price": 1050.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz blanco Shangrila 1 kg_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 33,
        "name": "Arroz parboil Lucchetti 500 g.",
        "price": 1109.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz parboil Lucchetti 500 g_15.jpg",
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
            }
        ]
    },
    {
        "id": 34,
        "name": "Arroz largo fino Crucero 00000 1 kg.",
        "price": 1280.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino Crucero 00000 1 kg_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1280.0
            }
        ]
    },
    {
        "id": 35,
        "name": "Arroz parboil Gallo oro en bolsa 500 g.",
        "price": 1319.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz parboil Gallo oro en bolsa 500 g_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1319.0
            },
            {
                "date": "2026-03-28",
                "price": 989.25
            },
            {
                "date": "2026-04-08",
                "price": 1319.0
            }
        ]
    },
    {
        "id": 36,
        "name": "Arroz integral Gallo en bolsa 500 g.",
        "price": 1340.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz integral Gallo en bolsa 500 g_10.jpg",
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
        "id": 37,
        "name": "Arroz largo fino 00000 Carrefour Classic en bolsa 1 kg.",
        "price": 1370.8,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino 00000 Carrefour Classic_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1278.8
            },
            {
                "date": "2026-03-21",
                "price": 1370.8
            },
            {
                "date": "2026-03-28",
                "price": 1241.08
            },
            {
                "date": "2026-04-08",
                "price": 1370.8
            }
        ]
    },
    {
        "id": 38,
        "name": "Arroz parboil Carrefour Classic en bolsa 1 kg.",
        "price": 1588.6,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz parboil Carrefour Classic en bolsa_4.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1588.6
            }
        ]
    },
    {
        "id": 39,
        "name": "Arroz largo fino Molinos Ala 1 kg.",
        "price": 1790.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino Molinos Ala 1 kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1342.5
            },
            {
                "date": "2026-03-21",
                "price": 1790.0
            },
            {
                "date": "2026-03-28",
                "price": 1342.5
            },
            {
                "date": "2026-04-08",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 40,
        "name": "Arroz largo fino 00000 Lucchetti 1 kg.",
        "price": 1799.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino 00000 Lucchetti 1 kg_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1799.0
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
        "image": "images/carrefour/Osobuco x kg_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 11200.0
            }
        ]
    },
    {
        "id": 45,
        "name": "Tapa de asado x kg.",
        "price": 12990.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Tapa de asado x kg_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11990.0
            },
            {
                "date": "2026-03-21",
                "price": 13900.0
            },
            {
                "date": "2026-03-28",
                "price": 12990.0
            },
            {
                "date": "2026-04-02",
                "price": 13900.0
            },
            {
                "date": "2026-04-08",
                "price": 12990.0
            }
        ]
    },
    {
        "id": 46,
        "name": "Asado Novillo x kg.",
        "price": 13200.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Asado Novillo x kg_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13200.0
            }
        ]
    },
    {
        "id": 47,
        "name": "Paleta x kg.",
        "price": 14490.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Paleta x kg_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 15900.0
            },
            {
                "date": "2026-04-08",
                "price": 14490.0
            }
        ]
    },
    {
        "id": 48,
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
        "id": 49,
        "name": "Tapa de nalga Novillo x kg.",
        "price": 15700.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Tapa de nalga Novillo x kg_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 15700.0
            }
        ]
    },
    {
        "id": 50,
        "name": "Bife americano Novillo x kg.",
        "price": 16700.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Bife americano Novillo x kg_7.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 16700.0
            }
        ]
    },
    {
        "id": 51,
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
        "id": 52,
        "name": "Copos de maiz Granix 160 g.",
        "price": 1470.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maiz Granix 160 g_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1470.0
            }
        ]
    },
    {
        "id": 53,
        "name": "Copos de maíz 3 Arroyos azucarados bolsa 200 g.",
        "price": 1570.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz 3 Arroyos azucarados bolsa_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1570.0
            }
        ]
    },
    {
        "id": 54,
        "name": "Bolitas de cereal Bulnez de chocolate 180 grs",
        "price": 1590.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Bolitas de cereal Bulnez de chocolate 18_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1590.0
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
        "name": "Cereal Carrefour copitas con chocolate sin gluten 200 g.",
        "price": 1810.9,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Cereal Carrefour copitas con chocolate s_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1901.9
            },
            {
                "date": "2026-03-28",
                "price": 1810.9
            }
        ]
    },
    {
        "id": 58,
        "name": "Cereal Carrefour anillitos fruta sin gluten 200 g.",
        "price": 1810.9,
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
            }
        ]
    },
    {
        "id": 59,
        "name": "Copos de maíz 3 Arroyos bolsa 400 g.",
        "price": 1875.0,
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
            }
        ]
    },
    {
        "id": 60,
        "name": "Copos de maíz Zucaritas azúcarados 240 g.",
        "price": 3190.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz Zucaritas azúcarados 240 g_13.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3190.0
            }
        ]
    },
    {
        "id": 61,
        "name": "Cerveza blanca Quilmes sin alcohol 473 ml",
        "price": 1000.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes sin alcohol 473 m_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 950.0
            },
            {
                "date": "2026-03-21",
                "price": 1200.0
            },
            {
                "date": "2026-04-08",
                "price": 1000.0
            }
        ]
    },
    {
        "id": 62,
        "name": "Cerveza blanca Quilmes Bajo cero en lata 473 ml",
        "price": 1106.25,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes Bajo cero en lata_6.jpg",
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
            }
        ]
    },
    {
        "id": 63,
        "name": "Cerveza rubia Budweiser 473 ml",
        "price": 1533.33,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Budweiser 473 ml_10.jpg",
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
            }
        ]
    },
    {
        "id": 64,
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
            }
        ]
    },
    {
        "id": 65,
        "name": "Cerveza negra Quilmes Stout 473 ml",
        "price": 1781.25,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza negra Quilmes Stout 473 ml_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1725.0
            },
            {
                "date": "2026-03-21",
                "price": 1781.25
            }
        ]
    },
    {
        "id": 66,
        "name": "Cerveza rubia Brahma 473 ml",
        "price": 1875.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Brahma 473 ml_12.jpg",
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
        "id": 67,
        "name": "Cerveza rubia Andes Origen 473 ml",
        "price": 1901.25,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Andes Origen 473 ml_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1820.0
            },
            {
                "date": "2026-03-21",
                "price": 1901.25
            },
            {
                "date": "2026-04-02",
                "price": 2193.75
            },
            {
                "date": "2026-04-08",
                "price": 1901.25
            }
        ]
    },
    {
        "id": 68,
        "name": "Cerveza blanca Amstel Lager pura malta 473 ml",
        "price": 2500.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Amstel Lager pura malta 4_7.jpg",
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
            }
        ]
    },
    {
        "id": 69,
        "name": "Cerveza blanca Quilmes 1890 retornable 1 lt",
        "price": 2625.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes 1890 retornable 1_11.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2625.0
            }
        ]
    },
    {
        "id": 70,
        "name": "Cerveza blanca Stella Artois 473 ml",
        "price": 2700.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Stella Artois 473 ml_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 71,
        "name": "Aperitivo sin alcohol Serrano Terma Cero 1,35 lts",
        "price": 2025.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Terma Cero_5.jpg",
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
            }
        ]
    },
    {
        "id": 72,
        "name": "Aperitivo sin alcohol Pomelo Terma Cero 1,35 lts",
        "price": 2025.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Pomelo Terma Cero _10.jpg",
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
            }
        ]
    },
    {
        "id": 73,
        "name": "Aperitivo sin alcohol Limón Terma Cero 1,35 lts",
        "price": 2025.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Limón Terma Cero 1_11.jpg",
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
            }
        ]
    },
    {
        "id": 74,
        "name": "Aperitivo sin alcohol Patagónico Terma Cero 1,35 lts",
        "price": 2025.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Patagónico Terma C_15.jpg",
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
            }
        ]
    },
    {
        "id": 75,
        "name": "Aperitivo sin alcohol Gancia americano 0% en lata 473 ml",
        "price": 2399.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Gancia americano 0_3.jpg",
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
            }
        ]
    },
    {
        "id": 76,
        "name": "Aperitivo sin alcohol Limón Terma Light 1,75 lts",
        "price": 3149.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Limón Terma Light _6.jpg",
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
            }
        ]
    },
    {
        "id": 77,
        "name": "Aperitivo sin alcohol Serrano Terma 1,7 lts",
        "price": 3149.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Terma 17 l_7.jpg",
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
            }
        ]
    },
    {
        "id": 78,
        "name": "Aperitivo sin alcohol Pomelo Rosado Terma 1,75 lts",
        "price": 3149.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Pomelo Rosado Term_12.jpg",
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
            }
        ]
    },
    {
        "id": 79,
        "name": "Vermouth Carpano Rosso 950 cc.",
        "price": 6889.35,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Vermouth Carpano Rosso 950 cc_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 6889.35
            }
        ]
    },
    {
        "id": 80,
        "name": "Aperitivo americano Gancia en botella 950 ml",
        "price": 8689.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo americano Gancia en botella 95_1.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 8689.0
            }
        ]
    },
    {
        "id": 81,
        "name": "Leberwurst Paladini 250 g.",
        "price": 2190.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Leberwurst Paladini 250 g_8.jpg",
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
            }
        ]
    },
    {
        "id": 82,
        "name": "Jamón cocido feteado Bulnez 150 grs",
        "price": 2210.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido feteado Bulnez 150 grs_1.jpg",
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
            }
        ]
    },
    {
        "id": 83,
        "name": "Jamón cocido Lario feteado 150 g.",
        "price": 2600.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido Lario feteado 150 g_0.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 4345.0
            },
            {
                "date": "2026-04-08",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 84,
        "name": "Lomo de cerdo feteado Paladini 120 g.",
        "price": 3090.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Lomo de cerdo feteado Paladini 120 g_10.jpg",
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
            }
        ]
    },
    {
        "id": 85,
        "name": "Lomito feteado 150 g.",
        "price": 3610.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Lomito feteado 150 g_9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3610.0
            }
        ]
    },
    {
        "id": 86,
        "name": "Salame tipo milán Lario picado fino feteado 150 g.",
        "price": 4390.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Salame tipo milán Lario picado fino fete_12.jpg",
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
        "id": 87,
        "name": "Mortadela Paladini mini 300 g.",
        "price": 4649.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Mortadela Paladini mini 300 g_11.jpg",
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
            }
        ]
    },
    {
        "id": 88,
        "name": "Jamón cocido Paladini bajo sodio 150 g.",
        "price": 4899.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido Paladini bajo sodio 150 g_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4899.0
            }
        ]
    },
    {
        "id": 89,
        "name": "Jamón cocido feteado Paladini 200 g.",
        "price": 5490.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido feteado Paladini 200 g_5.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 5490.0
            }
        ]
    },
    {
        "id": 90,
        "name": "Jamón cocido Puente de Ronda 200 grs",
        "price": 5790.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido Puente de Ronda 200 grs_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2800.0
            },
            {
                "date": "2026-03-28",
                "price": 5790.0
            },
            {
                "date": "2026-04-02",
                "price": 3763.5
            },
            {
                "date": "2026-04-08",
                "price": 5790.0
            }
        ]
    },
    {
        "id": 91,
        "name": "Gaseosa naranja Mirinda 2,25 lts",
        "price": 1837.5,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa naranja Mirinda 225 lts_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1762.5
            },
            {
                "date": "2026-03-21",
                "price": 1837.5
            },
            {
                "date": "2026-04-02",
                "price": 1633.33
            },
            {
                "date": "2026-04-08",
                "price": 1837.5
            }
        ]
    },
    {
        "id": 92,
        "name": "Gaseosa lima limón 7 Up sin azúcar 1,5 lts",
        "price": 2405.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa lima limón 7 Up sin azúcar 15 lt_4.jpg",
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
            }
        ]
    },
    {
        "id": 93,
        "name": "Gaseosa cola Pepsi Black pet 1,5 lts",
        "price": 2405.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Pepsi Black pet 15 lts_6.jpg",
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
            }
        ]
    },
    {
        "id": 94,
        "name": "Gaseosa cola Cunnington suave sin tacc 2,25 lts",
        "price": 2499.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Cunnington suave sin tacc 2_9.jpg",
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
        "id": 95,
        "name": "Gaseosa pomelo Cunnignton suave sin tacc 2,25 lts",
        "price": 2499.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa pomelo Cunnignton suave sin tacc_14.jpg",
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
        "id": 96,
        "name": "Gaseosa cola Pepsi Black pet 2 lts",
        "price": 2730.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Pepsi Black pet 2 lts_2.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2800.0
            },
            {
                "date": "2026-04-08",
                "price": 2730.0
            }
        ]
    },
    {
        "id": 97,
        "name": "Gaseosa tónica Paso de los Toros 1,5 lts",
        "price": 2775.0,
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
            }
        ]
    },
    {
        "id": 98,
        "name": "Gaseosa cola Coca Cola Zero 1,25 lts",
        "price": 2999.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Coca Cola Zero 125 lts_8.jpg",
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
        "id": 99,
        "name": "Gaseosa cola Coca Cola sabor original 1,25 lts",
        "price": 2999.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Coca Cola sabor original 12_10.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 100,
        "name": "Gaseosa cola regular Pepsi 2 lts.",
        "price": 3150.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola regular Pepsi 2 lts_3.jpg",
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
            }
        ]
    },
    {
        "id": 101,
        "name": "Medallón de merluza rebozados 100 g.",
        "price": 1070.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de merluza rebozados 100 g_14.jpg",
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
            }
        ]
    },
    {
        "id": 102,
        "name": "Hamburguesa congelada Carrefour 2 u.",
        "price": 2800.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa congelada Carrefour 2 u_12.jpg",
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
            }
        ]
    },
    {
        "id": 103,
        "name": "Hamburguesas de pollo Granja tres Arroyos 166 g.",
        "price": 3200.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesas de pollo Granja tres Arroyo_11.jpg",
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
        "price": 4050.0,
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
            }
        ]
    },
    {
        "id": 105,
        "name": "Hamburguesa Swift casera 2 u.",
        "price": 6700.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa Swift casera 2 u_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6120.0
            },
            {
                "date": "2026-03-28",
                "price": 4821.75
            },
            {
                "date": "2026-04-02",
                "price": 6429.0
            },
            {
                "date": "2026-04-12",
                "price": 6700.0
            }
        ]
    },
    {
        "id": 106,
        "name": "Hamburguesa de carne Unión ganadera 4 uni",
        "price": 7601.25,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa de carne Unión ganadera 4 un_9.jpg",
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
            }
        ]
    },
    {
        "id": 107,
        "name": "Hamburguesa Swift clásica 4 u.",
        "price": 7740.0,
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
            }
        ]
    },
    {
        "id": 108,
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
            }
        ]
    },
    {
        "id": 109,
        "name": "Hamburguesa Paty 72 g. caja x 4 uni",
        "price": 7929.0,
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
            }
        ]
    },
    {
        "id": 110,
        "name": "Hamburguesa Paty clásico en caja 4 uni",
        "price": 8885.0,
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
            }
        ]
    },
    {
        "id": 111,
        "name": "Harina de Trigo 000 Caserita x 1 kg",
        "price": 899.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de Trigo 000 Caserita x 1 kg_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 899.0
            }
        ]
    },
    {
        "id": 112,
        "name": "Harina de trigo Morixe 000 1 kg.",
        "price": 979.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de trigo Morixe 000 1 kg_0.jpg",
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
        "id": 113,
        "name": "Pan rallado Carrefour classic 500 g.",
        "price": 1161.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Pan rallado Carrefour classic 500 g_14.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1161.0
            }
        ]
    },
    {
        "id": 114,
        "name": "Harina 0000 Chacabuco 1 kg.",
        "price": 1289.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina 0000 Chacabuco 1 kg_2.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1199.0
            },
            {
                "date": "2026-03-28",
                "price": 1289.0
            }
        ]
    },
    {
        "id": 115,
        "name": "Avena instantanea Carrefour Classic pouch 300 g.",
        "price": 1385.7,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Avena instantanea Carrefour Classic pouc_11.jpg",
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
        "id": 116,
        "name": "Harina leudante Chacabuco 1 kg",
        "price": 1479.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina leudante Chacabuco 1 kg_8.jpg",
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
        "id": 117,
        "name": "Polenta instantanea Prestopronta en bolsa 490 g.",
        "price": 1500.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Polenta instantanea Prestopronta en bols_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 118,
        "name": "Harina integral fina Chacabuco 1 kg.",
        "price": 1589.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina integral fina Chacabuco 1 kg_13.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1589.0
            }
        ]
    },
    {
        "id": 119,
        "name": "Harina leudante Pureza con vitamina D 1 kg.",
        "price": 1689.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina leudante Pureza con vitamina D 1 _3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1689.0
            }
        ]
    },
    {
        "id": 120,
        "name": "Harina integral Pureza 1 kg.",
        "price": 1799.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina integral Pureza 1 kg_9.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1799.0
            }
        ]
    },
    {
        "id": 121,
        "name": "Bebida energizante Rockstar en botella 500 ml",
        "price": 1275.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Rockstar en botella 5_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            },
            {
                "date": "2026-03-21",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 122,
        "name": "Bebida energizante Rockstar de maracuyá pet 500 ml",
        "price": 1275.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Rockstar de maracuyá _10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1199.25
            },
            {
                "date": "2026-03-21",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 123,
        "name": "Bebida energizante Speed 250 ml",
        "price": 1859.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Speed 250 ml_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1394.25
            },
            {
                "date": "2026-03-21",
                "price": 1859.0
            }
        ]
    },
    {
        "id": 124,
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
        "id": 125,
        "name": "Bebida energizante Speed Zero Sugar 473 ml",
        "price": 2785.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Speed Zero Sugar 473 _8.jpg",
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
        "image": "images/carrefour/Bebida energizante Monster Peachy Keen 4_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3100.0
            }
        ]
    },
    {
        "id": 127,
        "name": "Bebida energizante Red Bull Summer Pomerlo en lata 250 ml",
        "price": 3199.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Red Bull Summer Pomer_12.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2276.25
            },
            {
                "date": "2026-04-08",
                "price": 3035.0
            },
            {
                "date": "2026-04-12",
                "price": 3199.0
            }
        ]
    },
    {
        "id": 128,
        "name": "Bebida energizante Red Bull Watermelon 250 ml",
        "price": 3199.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Red Bull Watermelon 2_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2399.25
            },
            {
                "date": "2026-04-08",
                "price": 3199.0
            }
        ]
    },
    {
        "id": 129,
        "name": "Bebida energizante sin azúcar Monster energy en lata 473 cc.",
        "price": 3200.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante sin azúcar Monster en_2.jpg",
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
        "id": 130,
        "name": "Bebida energizante Monster Mango Loco 473 ml",
        "price": 3200.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Monster Mango Loco 47_3.jpg",
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
        "id": 131,
        "name": "Jugo en polvo Tang naranja dulce 15 g.",
        "price": 479.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang naranja dulce 15 g_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            },
            {
                "date": "2026-04-02",
                "price": 239.5
            },
            {
                "date": "2026-04-08",
                "price": 479.0
            }
        ]
    },
    {
        "id": 132,
        "name": "Jugo en polvo Tang naranja mango 15 g.",
        "price": 479.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang naranja mango 15 g_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            },
            {
                "date": "2026-04-02",
                "price": 239.5
            },
            {
                "date": "2026-04-08",
                "price": 479.0
            }
        ]
    },
    {
        "id": 133,
        "name": "Jugo en polvo Tang multifruta 15 g.",
        "price": 479.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang multifruta 15 g_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            },
            {
                "date": "2026-04-02",
                "price": 239.5
            },
            {
                "date": "2026-04-08",
                "price": 479.0
            }
        ]
    },
    {
        "id": 134,
        "name": "Jugo en polvo Tang limonada dulce 15 g.",
        "price": 479.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang limonada dulce 15 g_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            },
            {
                "date": "2026-04-02",
                "price": 239.5
            },
            {
                "date": "2026-04-08",
                "price": 479.0
            }
        ]
    },
    {
        "id": 135,
        "name": "Jugo en Polvo Clight Naranja Dulce 7,5 grs",
        "price": 489.0,
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
            }
        ]
    },
    {
        "id": 136,
        "name": "Jugo en Polvo Clight Manzana Deliciosa 7 grs",
        "price": 489.0,
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
            }
        ]
    },
    {
        "id": 137,
        "name": "Jugo en Polvo Clight Limonada Arandanos 7,5 grs",
        "price": 489.0,
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
            }
        ]
    },
    {
        "id": 138,
        "name": "Jugo en Polvo Clight Limonada 8 grs",
        "price": 489.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada 8 grs_3.jpg",
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
            }
        ]
    },
    {
        "id": 139,
        "name": "Jugo en Polvo Clight Naranja Durazno 7,5 grs",
        "price": 489.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Naranja Durazno 75 _4.jpg",
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
            }
        ]
    },
    {
        "id": 140,
        "name": "Jugo en Polvo Clight Pomelo Rosado 8 grs",
        "price": 489.0,
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
            }
        ]
    },
    {
        "id": 141,
        "name": "Leche ulta parcial descremada Carrefour classic sachet 1 lt.",
        "price": 1370.8,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche ulta parcial descremada Carrefour _7.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            }
        ]
    },
    {
        "id": 142,
        "name": "Leche ultra entera Carrefour classic sachet 1 lt.",
        "price": 1370.8,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche ultra entera Carrefour classic sac_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            }
        ]
    },
    {
        "id": 143,
        "name": "Leche UAT parcialmente descremada Carrefour classic brik 1 lt.",
        "price": 1682.6,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche UAT parcialmente descremada Carref_0.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            }
        ]
    },
    {
        "id": 144,
        "name": "Leche UAT entera Carrefour classic brik 1 lt.",
        "price": 1682.6,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche UAT entera Carrefour classic brik _3.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            }
        ]
    },
    {
        "id": 145,
        "name": "Leche parcialmente descremada UAT Carrefour classic tetra 1 lt.",
        "price": 1682.6,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche parcialmente descremada UAT Carref_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            }
        ]
    },
    {
        "id": 146,
        "name": "Leche entera UAT Carrefour classic tetra 1 lt.",
        "price": 1682.6,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche entera UAT Carrefour classic tetra_13.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            }
        ]
    },
    {
        "id": 147,
        "name": "Leche La Serenísima ultra entera multivit 3% sachet 1 lt",
        "price": 1780.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche La Serenísima ultra entera multivi_10.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 148,
        "name": "Leche La Serenísima ultra parc descremada multivit 1% sachet 1 lt",
        "price": 1780.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche La Serenísima ultra parc descremad_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 149,
        "name": "Leche La Serenísima reducida en lactosa sachet 1 l.",
        "price": 1780.0,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche La Serenísima reducida en lactosa _14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 150,
        "name": "Leche entera larga vida Las tres niñas 1 l.",
        "price": 1844.25,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche entera larga vida Las tres niñas 1_6.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1844.25
            }
        ]
    },
    {
        "id": 151,
        "name": "Limpiador de vidrio Carrefour Expert multisuso doypack 450 ml",
        "price": 1264.9,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador de vidrio Carrefour Expert mul_12.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1264.9
            }
        ]
    },
    {
        "id": 152,
        "name": "Limpiador multiuso Multimax para diluir lavanda (rinde 5 litros) 150 ml.",
        "price": 1750.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _1.jpg",
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
            }
        ]
    },
    {
        "id": 153,
        "name": "Limpiador multiuso Multimax para diluir marina (rinde 5 litros) 150 ml.",
        "price": 1750.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _5.jpg",
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
            }
        ]
    },
    {
        "id": 154,
        "name": "Limpiador multiuso Multimax para diluir cherry (rinde 5 litros) 150 ml.",
        "price": 1750.0,
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
            }
        ]
    },
    {
        "id": 155,
        "name": "Limpiador multiuso Multimax para diluir citrico limon (rinde 5 litros) 150 ml.",
        "price": 1750.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _10.jpg",
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
            }
        ]
    },
    {
        "id": 156,
        "name": "Limpiador Multisuperficies Cif Original Ultra Brillo Doypack 380 ml",
        "price": 2145.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Multisuperficies Cif Original _11.jpg",
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
            }
        ]
    },
    {
        "id": 157,
        "name": "Limpiador Vidrios y Multiuso Cif Expert Doypack 450 ml",
        "price": 2335.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Vidrios y Multiuso Cif Expert _2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2335.0
            }
        ]
    },
    {
        "id": 158,
        "name": "Limpiador líquido aromatizante Poett flores de primavera 1.8 lts.",
        "price": 2596.75,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido aromatizante Poett flo_6.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2596.75
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
        "name": "Limpiador líquido Procenex pisos lavanda 1.8 l.",
        "price": 3890.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos lavanda_0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3890.0
            }
        ]
    },
    {
        "id": 161,
        "name": "Alimento húmedo para perro Carrefour 100 g. adultos carne",
        "price": 1100.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Carrefour 100_2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 162,
        "name": "Alimento húmedo para perro Carrefour pollo 100 g.",
        "price": 1100.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Carrefour pol_9.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 163,
        "name": "Alimento seco para perro Raza 1.5 kg. adultos pequeños carne",
        "price": 3589.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Raza 15 kg adul_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3589.0
            }
        ]
    },
    {
        "id": 164,
        "name": "Alimento seco para perro Dog Chow m l triple protein 9 ar 1.5 kg",
        "price": 5499.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Dog Chow m l tr_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5499.0
            }
        ]
    },
    {
        "id": 165,
        "name": "Alimento seco para perro Raza 3 kg. adultos carne",
        "price": 6819.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Raza 3 kg adult_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6819.0
            }
        ]
    },
    {
        "id": 166,
        "name": "Alimento seco para perro Matute 15 kg. adultos",
        "price": 16792.5,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Matute 15 kg ad_3.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 16792.5
            }
        ]
    },
    {
        "id": 167,
        "name": "Alimento seco para perro Voraz adultos sabor carne 15 kg",
        "price": 21799.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Voraz adultos s_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 21799.0
            }
        ]
    },
    {
        "id": 168,
        "name": "Alimento seco para perro Raza 15 kg. adultos carne",
        "price": 28499.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Raza 15 kg adul_5.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 28499.0
            }
        ]
    },
    {
        "id": 169,
        "name": "Alimento seco para perro maintenance Criadores adult 15 kg.",
        "price": 29050.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro maintenance Cri_0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 29050.0
            }
        ]
    },
    {
        "id": 170,
        "name": "Alimento seco para perro Dog Chow adulto alta proteína 8 kg",
        "price": 29289.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Dog Chow adulto_13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 29289.0
            }
        ]
    },
    {
        "id": 171,
        "name": "Pañales Huggies Natural Care RN 34 uni",
        "price": 9474.5,
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
            }
        ]
    },
    {
        "id": 172,
        "name": "Pañales Huggies Natural Care P 30 uni",
        "price": 9474.5,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Huggies Natural Care P 30 uni_5.jpg",
        "history": [
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
            }
        ]
    },
    {
        "id": 173,
        "name": "Pañal Carrefour baby talle XXG hiperpack 26 uni",
        "price": 10330.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Carrefour baby talle XXG hiperpack_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10330.6
            },
            {
                "date": "2026-03-28",
                "price": 8074.6
            },
            {
                "date": "2026-04-02",
                "price": 8450.6
            },
            {
                "date": "2026-04-08",
                "price": 10330.6
            }
        ]
    },
    {
        "id": 174,
        "name": "Pañal talle M Carrefour baby hiperpack 38 uni",
        "price": 10330.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal talle M Carrefour baby hiperpack 3_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 10330.6
            }
        ]
    },
    {
        "id": 175,
        "name": "Pañales Estrella baby talle XG 36 u.",
        "price": 11686.35,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Estrella baby talle XG 36 u_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 14900.0
            },
            {
                "date": "2026-04-08",
                "price": 11137.75
            },
            {
                "date": "2026-04-12",
                "price": 11686.35
            }
        ]
    },
    {
        "id": 176,
        "name": "Pañales Estrella talle XXG 34 u.",
        "price": 11692.85,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Estrella talle XXG 34 u_10.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 11692.85
            }
        ]
    },
    {
        "id": 177,
        "name": "Pañal Huggies Flexi Comfort talle RN edición limitada 34 uni",
        "price": 17119.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Flexi Comfort talle RN edi_3.jpg",
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
            }
        ]
    },
    {
        "id": 178,
        "name": "Pañales talle XXG Toddler Deluxe 28 uni",
        "price": 19470.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle XXG Toddler Deluxe 28 uni_2.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 19470.0
            }
        ]
    },
    {
        "id": 179,
        "name": "Pañales talle XG Toddler Deluxe 30 uni",
        "price": 19470.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle XG Toddler Deluxe 30 uni_4.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 19470.0
            }
        ]
    },
    {
        "id": 180,
        "name": "Pañales talle M Toddler Deluxe 46 uni",
        "price": 19470.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle M Toddler Deluxe 46 uni_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 19470.0
            }
        ]
    },
    {
        "id": 181,
        "name": "Papel higiénico Higienol Fresh hoja simple 30 mts 4 uni",
        "price": 1474.85,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Fresh hoja simp_9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2219.0
            },
            {
                "date": "2026-04-08",
                "price": 1474.85
            }
        ]
    },
    {
        "id": 182,
        "name": "Papel higiénico hoja simple Carrefour Essential 4 x 30 mts",
        "price": 1628.9,
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
            }
        ]
    },
    {
        "id": 183,
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
        "id": 184,
        "name": "Papel higienico doble hoja Higienol plus x4 30 mts.",
        "price": 2629.25,
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
            }
        ]
    },
    {
        "id": 185,
        "name": "Papel higiénico Higienol Premium doble hoja 30 mts 4 uni",
        "price": 2891.85,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Premium doble h_14.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4449.0
            },
            {
                "date": "2026-04-08",
                "price": 2891.85
            }
        ]
    },
    {
        "id": 186,
        "name": "Papel higiénico doble hoja Carrefour Essential 4 x 30 mts",
        "price": 3617.7,
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
            }
        ]
    },
    {
        "id": 187,
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
            }
        ]
    },
    {
        "id": 188,
        "name": "Papel higiénico hoja simple Higienol max x4 90 mts",
        "price": 3870.75,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico hoja simple Higienol max_5.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3870.75
            }
        ]
    },
    {
        "id": 189,
        "name": "Papel higiénico doble hoja Elegante 4 x 30 m.",
        "price": 3999.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico doble hoja Elegante 4 x _8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2599.35
            },
            {
                "date": "2026-03-28",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 190,
        "name": "Papel higiénico Higienol Max hoja simple 100 mts 4 uni",
        "price": 4387.5,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Max hoja simple_3.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 4387.5
            }
        ]
    },
    {
        "id": 191,
        "name": "Pollo fresco en bandeja Carrefour x kg.",
        "price": 6700.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pollo fresco en bandeja Carrefour x kg_5.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 6700.0
            }
        ]
    },
    {
        "id": 192,
        "name": "Pollo super dry Granja Tres Arroyos x kg.",
        "price": 8400.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pollo super dry Granja Tres Arroyos x kg_15.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 8400.0
            }
        ]
    },
    {
        "id": 193,
        "name": "Cuarto trasero al vacio x kg.",
        "price": 9180.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Cuarto trasero al vacio x kg_13.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 9180.0
            }
        ]
    },
    {
        "id": 194,
        "name": "Muslos al vacio Cresta Roja x kg.",
        "price": 9400.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslos al vacio Cresta Roja x kg_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9400.0
            }
        ]
    },
    {
        "id": 195,
        "name": "Muslo El Mercado x kg.",
        "price": 9500.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslo El Mercado x kg_14.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 9500.0
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
        "image": "images/carrefour/Muslo de pollo Granja tres arroyos x kg_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/carrefour/Patas de pollo al vacio Que rico x kg_11.jpg",
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
        "image": "images/carrefour/Pechuga al vacio Cresta roja x kg_12.jpg",
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
        "image": "images/carrefour/Pechuga El Mercado x kg_7.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 17200.0
            }
        ]
    },
    {
        "id": 201,
        "name": "Queso crema Tonadita cremette light 290 g.",
        "price": 2999.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema Tonadita cremette light 290 _12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1987.5
            },
            {
                "date": "2026-03-21",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 202,
        "name": "La Paulina queso crema tracidional 290 grs",
        "price": 3229.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/La Paulina queso crema tracidional 290 g_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3229.0
            }
        ]
    },
    {
        "id": 203,
        "name": "Queso crema clásico Casancrem 290 grs",
        "price": 3350.75,
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
            }
        ]
    },
    {
        "id": 204,
        "name": "Queso blanco original La SerenÍsima clásico 290 grs",
        "price": 3699.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso blanco original La SerenÍsima clás_9.jpg",
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
            }
        ]
    },
    {
        "id": 205,
        "name": "Queso blanco light La SerenÍsima Clásico 290 grs",
        "price": 3699.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso blanco light La SerenÍsima Clásico_14.jpg",
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
            }
        ]
    },
    {
        "id": 206,
        "name": "Queso La Serenísima cremón light pote 280 g.",
        "price": 3750.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso La Serenísima cremón light pote 28_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2727.75
            },
            {
                "date": "2026-03-28",
                "price": 3750.0
            },
            {
                "date": "2026-04-02",
                "price": 2812.5
            },
            {
                "date": "2026-04-08",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 207,
        "name": "Queso untable Finlandia light pote 290 g.",
        "price": 5135.0,
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
            }
        ]
    },
    {
        "id": 208,
        "name": "Queso untable Finlandia pote 290 g.",
        "price": 5135.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso untable Finlandia pote 290 g_10.jpg",
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
            }
        ]
    },
    {
        "id": 209,
        "name": "Queso crema Casancrem clásico 500 grs",
        "price": 5205.85,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema Casancrem clásico 500 grs_3.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 5205.85
            }
        ]
    },
    {
        "id": 210,
        "name": "Queso blanco balance Casancrem 500 grs",
        "price": 5205.85,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso blanco balance Casancrem 500 grs_8.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 5205.85
            }
        ]
    },
    {
        "id": 211,
        "name": "Sal fina Bulnez en bolsa 500 g.",
        "price": 739.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Bulnez en bolsa 500 g_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 739.0
            }
        ]
    },
    {
        "id": 212,
        "name": "Sal fina Dos Estrellas 500 g.",
        "price": 989.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Dos Estrellas 500 g_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 989.0
            }
        ]
    },
    {
        "id": 213,
        "name": "Sal fina Carrefour Classic en bolsa 500 grs",
        "price": 991.9,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Carrefour Classic en bolsa 500 _6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1173.9
            },
            {
                "date": "2026-03-28",
                "price": 991.9
            }
        ]
    },
    {
        "id": 214,
        "name": "Sal fina Dos Anclas en paquete 500 grs",
        "price": 1071.75,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Dos Anclas en paquete 500 grs_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1429.0
            },
            {
                "date": "2026-04-08",
                "price": 1071.75
            }
        ]
    },
    {
        "id": 215,
        "name": "Sal fina Dos Anclas 500 g.",
        "price": 1214.25,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Dos Anclas 500 g_7.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1214.25
            }
        ]
    },
    {
        "id": 216,
        "name": "Sal gruesa Carrefour Classic 1 kg",
        "price": 1370.8,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Carrefour Classic 1 kg_10.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            }
        ]
    },
    {
        "id": 217,
        "name": "Sal entrefina Bulnez en bolsa 1 kg.",
        "price": 1390.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal entrefina Bulnez en bolsa 1 kg_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 218,
        "name": "Sal gruesa Celusal 500 g.",
        "price": 1405.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Celusal 500 g_9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1405.0
            }
        ]
    },
    {
        "id": 219,
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
        "id": 220,
        "name": "Sal gruesa Bulnez en bolsa 1 kg.",
        "price": 1490.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Bulnez en bolsa 1 kg_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 221,
        "name": "Palitos salados Carrefour classic 115 g.",
        "price": 1071.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Palitos salados Carrefour classic 115 g_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1161.0
            },
            {
                "date": "2026-03-28",
                "price": 1071.0
            }
        ]
    },
    {
        "id": 222,
        "name": "Mani pelado salado Carrefour classic 115 g.",
        "price": 1173.9,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Mani pelado salado Carrefour classic 115_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 991.9
            },
            {
                "date": "2026-03-28",
                "price": 1173.9
            }
        ]
    },
    {
        "id": 223,
        "name": "Palitos Krachitos salados 110 g.",
        "price": 1519.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Palitos Krachitos salados 110 g_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1519.0
            }
        ]
    },
    {
        "id": 224,
        "name": "Aritos de arroz Dos Hermanos crema y cebolla 80 g.",
        "price": 1549.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Aritos de arroz Dos Hermanos crema y ceb_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1549.0
            }
        ]
    },
    {
        "id": 225,
        "name": "Palitos de maíz sabor queso Carrefour classic 145 g.",
        "price": 1971.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Palitos de maíz sabor queso Carrefour cl_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1341.0
            },
            {
                "date": "2026-04-02",
                "price": 1971.0
            }
        ]
    },
    {
        "id": 226,
        "name": "Galletitas crackers Rex original 125 g.",
        "price": 2059.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Galletitas crackers Rex original 125 g_13.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 227,
        "name": "Galletitas crackers Kesitas 125 g.",
        "price": 2059.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Galletitas crackers Kesitas 125 g_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1544.25
            },
            {
                "date": "2026-03-21",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 228,
        "name": "Papas fritas acanaladas Pehuamar 135 g.",
        "price": 2127.13,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas acanaladas Pehuamar 135 g_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2127.13
            }
        ]
    },
    {
        "id": 229,
        "name": "Papas fritas Bulnez sabor original en tubo 100 grs",
        "price": 2190.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Bulnez sabor original en tu_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 230,
        "name": "Papas fritas Bulnez sabor queso y cebolla en tubo 100 grs",
        "price": 2190.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Bulnez sabor queso y ceboll_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 231,
        "name": "Yogur entero natural Tregar sin azúcar en pote 140 g.",
        "price": 1387.5,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur entero natural Tregar sin azúcar e_10.jpg",
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
            }
        ]
    },
    {
        "id": 232,
        "name": "Yogur Griego sabor vainilla Yogurísimo 140 grs",
        "price": 1925.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego sabor vainilla Yogurísimo 1_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1835.0
            },
            {
                "date": "2026-03-21",
                "price": 1223.33
            },
            {
                "date": "2026-04-02",
                "price": 1376.25
            },
            {
                "date": "2026-04-08",
                "price": 1835.0
            },
            {
                "date": "2026-04-12",
                "price": 1925.0
            }
        ]
    },
    {
        "id": 233,
        "name": "Yogur Griego sabor frutilla Yogurísimo 140 grs",
        "price": 1925.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego sabor frutilla Yogurísimo 1_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1835.0
            },
            {
                "date": "2026-03-21",
                "price": 1223.33
            },
            {
                "date": "2026-04-02",
                "price": 1376.25
            },
            {
                "date": "2026-04-08",
                "price": 1835.0
            },
            {
                "date": "2026-04-12",
                "price": 1925.0
            }
        ]
    },
    {
        "id": 234,
        "name": "Yogur batido Ser PRO+ con proteínas sabor natural 175 grs",
        "price": 2025.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur batido Ser PRO con proteínas sabor_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2700.0
            },
            {
                "date": "2026-03-21",
                "price": 1800.0
            },
            {
                "date": "2026-04-02",
                "price": 2700.0
            },
            {
                "date": "2026-04-08",
                "price": 2025.0
            }
        ]
    },
    {
        "id": 235,
        "name": "Yogur batido Ser PRO+ con proteínas sabor frutos rojos 175 grs",
        "price": 2025.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur batido Ser PRO con proteínas sabor_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2700.0
            },
            {
                "date": "2026-03-21",
                "price": 1800.0
            },
            {
                "date": "2026-04-02",
                "price": 2700.0
            },
            {
                "date": "2026-04-08",
                "price": 2025.0
            }
        ]
    },
    {
        "id": 236,
        "name": "Yogur cremoso Milkaut sabor natural en pote 180 g.",
        "price": 2179.0,
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
            }
        ]
    },
    {
        "id": 237,
        "name": "Yogur bebible Ser PRO+ con proteínas sabor frutillas y arándanos 190 grs",
        "price": 2227.5,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur bebible Ser PRO con proteínas sabo_7.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2227.5
            }
        ]
    },
    {
        "id": 238,
        "name": "Yogur bebible Ser PRO+ con proteínas sabor vainilla 190 grs",
        "price": 2227.5,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur bebible Ser PRO con proteínas sabo_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2227.5
            }
        ]
    },
    {
        "id": 239,
        "name": "Yogur bebible entero Carrefour Classic sabor frutilla 900 ml",
        "price": 2294.4,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur bebible entero Carrefour Classic s_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2294.4
            }
        ]
    },
    {
        "id": 240,
        "name": "Yogur natural sin azúcar Tregar en pote 280 g.",
        "price": 2542.5,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur natural sin azúcar Tregar en pote _11.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2542.5
            }
        ]
    },
    {
        "id": 241,
        "name": "Aceite Mezcla Siglo De Oro 900 Ml",
        "price": 2979.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Siglo De Oro 900 Ml_17.jpg",
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
        "name": "Aceite Mezcla Cocinero 900cc",
        "price": 3089.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Cocinero 900cc_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2939.0
            },
            {
                "date": "2026-03-28",
                "price": 2204.25
            },
            {
                "date": "2026-04-02",
                "price": 2939.0
            },
            {
                "date": "2026-04-08",
                "price": 3089.0
            }
        ]
    },
    {
        "id": 243,
        "name": "Aceite De Girasol Legitimo 900 Ml",
        "price": 3199.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Legitimo 900 Ml_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3589.0
            },
            {
                "date": "2026-03-21",
                "price": 3489.0
            },
            {
                "date": "2026-03-28",
                "price": 3329.0
            },
            {
                "date": "2026-04-12",
                "price": 3199.0
            }
        ]
    },
    {
        "id": 244,
        "name": "Aceite De Girasol Natural 900 Ml",
        "price": 3599.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Natural 900 Ml_6.jpg",
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
            }
        ]
    },
    {
        "id": 245,
        "name": "Aceite De Girasol Cocinero 900 Ml",
        "price": 3889.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Cocinero 900 Ml_5.jpg",
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
            }
        ]
    },
    {
        "id": 246,
        "name": "Aceite De Girasol Cañuelas 900 Ml",
        "price": 3919.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Cañuelas 900 Ml_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3919.0
            }
        ]
    },
    {
        "id": 247,
        "name": "Aceite En Aerosol Natura Con Aceite De Girasol 120 Ml",
        "price": 4129.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite En Aerosol Natura Con Aceite De G_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3311.2
            },
            {
                "date": "2026-03-21",
                "price": 4129.0
            }
        ]
    },
    {
        "id": 248,
        "name": "Aceite Fritolim Cocinero Clásico 120 G",
        "price": 4899.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Fritolim Cocinero Clásico 120 G_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4759.0
            },
            {
                "date": "2026-04-08",
                "price": 4899.0
            }
        ]
    },
    {
        "id": 249,
        "name": "Aceite Fritolim Cocinero Sabor Manteca 120 G",
        "price": 4899.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Fritolim Cocinero Sabor Manteca 1_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4759.0
            },
            {
                "date": "2026-04-08",
                "price": 4899.0
            }
        ]
    },
    {
        "id": 250,
        "name": "Aceite De Maíz Arcor 900 Ml",
        "price": 5899.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Maíz Arcor 900 Ml_23.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 5899.0
            }
        ]
    },
    {
        "id": 251,
        "name": "Agua Mineralizada Cellier 2 Lts",
        "price": 999.0,
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
            }
        ]
    },
    {
        "id": 252,
        "name": "Agua Cellier Favaloro Con Gas 2 L",
        "price": 999.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Cellier Favaloro Con Gas 2 L_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1599.0
            },
            {
                "date": "2026-04-08",
                "price": 999.0
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
        "name": "Soda Ivess 2,25 L",
        "price": 1099.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Soda Ivess 225 L_1.jpg",
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
            }
        ]
    },
    {
        "id": 255,
        "name": "Agua Mineral Ivess Sin Gas Baja En Sodio 2, 255 L",
        "price": 1099.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Ivess Sin Gas Baja En Sodio_20.jpg",
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
            }
        ]
    },
    {
        "id": 256,
        "name": "Soda Ivess Menos Sodio 1.75 L",
        "price": 1199.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Soda Ivess Menos Sodio 175 L_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1299.0
            },
            {
                "date": "2026-03-21",
                "price": 1699.0
            },
            {
                "date": "2026-04-08",
                "price": 1199.0
            }
        ]
    },
    {
        "id": 257,
        "name": "Agua Con Gas Sifón Sierra De Los Padres 1.75 Lt",
        "price": 1629.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Con Gas Sifón Sierra De Los Padres _8.jpg",
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
            }
        ]
    },
    {
        "id": 258,
        "name": "Sifón De Soda Check 2 L",
        "price": 1699.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Sifón De Soda Check 2 L_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 259,
        "name": "Agua Mineral Sin Gas Sierra De Los Padres 2 Lt",
        "price": 1789.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Sin Gas Sierra De Los Padre_21.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1789.0
            }
        ]
    },
    {
        "id": 260,
        "name": "Agua Mineral Villavicencio Sin Gas 2 L",
        "price": 1799.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Villavicencio Sin Gas 2 L_9.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1799.0
            }
        ]
    },
    {
        "id": 261,
        "name": "Alimento Adulto Salmon Pouch Whiskas 85 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Salmon Pouch Whiskas 85 _6.jpg",
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
            }
        ]
    },
    {
        "id": 262,
        "name": "Alimento Adulto Carne Pouch Whiskas 85 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Carne Pouch Whiskas 85 G_9.jpg",
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
            }
        ]
    },
    {
        "id": 263,
        "name": "Alimento Adulto Pollo Pouch Whiskas 85 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Pollo Pouch Whiskas 85 G_10.jpg",
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
            }
        ]
    },
    {
        "id": 264,
        "name": "Alimento Adulto Sardina Pouch Whiskas 85 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Sardina Pouch Whiskas 85_12.jpg",
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
            }
        ]
    },
    {
        "id": 265,
        "name": "Alimento Gato Pavo Pocuh Whiskas 85 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Gato Pavo Pocuh Whiskas 85 Gr_13.jpg",
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
            }
        ]
    },
    {
        "id": 266,
        "name": "Alimento Humedo Gato Atun Sardina Pets Class X85gr",
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Gato Atun Sardina Pets C_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 267,
        "name": "Alimento Humedo Gato Salmon Rosado Pets Class X85gr",
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Gato Salmon Rosado Pets _17.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 772.67
            },
            {
                "date": "2026-04-08",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 268,
        "name": "Alimento Humedo  Gato Carne Pets Class X 85 Grs",
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo  Gato Carne Pets Class X_20.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 269,
        "name": "Alimento Húmedo Gato Frutos Mar Pets Class X85gr",
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Húmedo Gato Frutos Mar Pets Cla_22.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 270,
        "name": "Piedras Sanitarias Aliada 2 Kg",
        "price": 1629.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Piedras Sanitarias Aliada 2 Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1629.0
            }
        ]
    },
    {
        "id": 271,
        "name": "Alimento Perro  Razas Grandes Pollo Pedigree 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Perro  Razas Grandes Pollo Pedi_6.jpg",
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
            }
        ]
    },
    {
        "id": 272,
        "name": "Alimento Humedo Perro Pouch Adulto Pedigree 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo Perro Pouch Adulto Pedig_8.jpg",
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
            }
        ]
    },
    {
        "id": 274,
        "name": "Alimento Adulto Raza Peq Carne Pouch Pedigree 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Raza Peq Carne Pouch Ped_12.jpg",
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
            }
        ]
    },
    {
        "id": 275,
        "name": "Alimento Adulto Raza Peq Pollo Pedigree Pouch 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Raza Peq Pollo Pedigree _17.jpg",
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
            }
        ]
    },
    {
        "id": 276,
        "name": "Alimento Humedo  Perro Carne Pets Class X 100 Grs",
        "price": 1159.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo  Perro Carne Pets Class _13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 277,
        "name": "Alimento Humedo   Perro Pollo Pets Clas X100gr",
        "price": 1159.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo   Perro Pollo Pets Clas _16.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 278,
        "name": "Snack Biscrok Multi Pedigree X 100gr",
        "price": 1529.25,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Snack Biscrok Multi Pedigree X 100gr_22.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2039.0
            },
            {
                "date": "2026-04-12",
                "price": 1529.25
            }
        ]
    },
    {
        "id": 279,
        "name": "Snack Rodeo Carne Pedigree X 4un",
        "price": 1926.75,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Snack Rodeo Carne Pedigree X 4un_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2569.0
            },
            {
                "date": "2026-03-28",
                "price": 1926.75
            },
            {
                "date": "2026-04-02",
                "price": 2569.0
            },
            {
                "date": "2026-04-12",
                "price": 1926.75
            }
        ]
    },
    {
        "id": 280,
        "name": "Alimento Adulto Carne Lata Pedigree 340 Gr",
        "price": 2666.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Carne Lata Pedigree 340 _23.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2666.0
            }
        ]
    },
    {
        "id": 281,
        "name": "Arroz Gallo Largo Fino Selección 500 G",
        "price": 753.35,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Gallo Largo Fino Selección 500 G_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1159.0
            },
            {
                "date": "2026-04-02",
                "price": 753.35
            },
            {
                "date": "2026-04-08",
                "price": 1159.0
            },
            {
                "date": "2026-04-12",
                "price": 753.35
            }
        ]
    },
    {
        "id": 282,
        "name": "Arroz Largo Fino Maximo 500gr",
        "price": 779.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Maximo 500gr_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 779.0
            }
        ]
    },
    {
        "id": 283,
        "name": "Arroz Largo Fino Lucchetti 500gr",
        "price": 969.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Lucchetti 500gr_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 969.0
            }
        ]
    },
    {
        "id": 284,
        "name": "Arroz Check Largo Fino 1 Kg",
        "price": 999.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Check Largo Fino 1 Kg_0.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 999.0
            }
        ]
    },
    {
        "id": 285,
        "name": "Arroz Lucchetti Parboil 500 G",
        "price": 1109.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Lucchetti Parboil 500 G_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1109.0
            }
        ]
    },
    {
        "id": 286,
        "name": "Arroz Parboil Molinos Ala 500 G",
        "price": 1259.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Parboil Molinos Ala 500 G_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1259.0
            }
        ]
    },
    {
        "id": 287,
        "name": "Arroz Largo Fino Dos Hermanos 1 Kg",
        "price": 1424.25,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Dos Hermanos 1 Kg_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1199.0
            },
            {
                "date": "2026-04-02",
                "price": 1424.25
            }
        ]
    },
    {
        "id": 288,
        "name": "Arroz Cañuelas Parboil 500 G",
        "price": 1429.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Cañuelas Parboil 500 G_16.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 289,
        "name": "Arroz Largo Fino Carogran 00000 X 1 Kg",
        "price": 1489.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Carogran 00000 X 1 Kg_13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 290,
        "name": "Arroz Blanco Largo Fino Molinos Ala 1 Kg",
        "price": 1789.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Blanco Largo Fino Molinos Ala 1 Kg_3.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1789.0
            }
        ]
    },
    {
        "id": 291,
        "name": "Pechito De Cerdo Congelado 900 G",
        "price": 8299.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Pechito De Cerdo Congelado 900 G_11.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 8299.0
            }
        ]
    },
    {
        "id": 292,
        "name": "Carne Picada Especial 750 G",
        "price": 8999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carne Picada Especial 750 G_3.jpg",
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
        "id": 293,
        "name": "Costillitas De Cerdo 600 G",
        "price": 9199.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Costillitas De Cerdo 600 G_23.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 9199.0
            }
        ]
    },
    {
        "id": 294,
        "name": "Chorizo Tradicional Campo Austral Tradicional Al Vacio 400 Gr",
        "price": 11089.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Chorizo Tradicional Campo Austral Tradic_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11089.0
            }
        ]
    },
    {
        "id": 295,
        "name": "Chorizo En Gancho Alma Criolla 1 Kg",
        "price": 11890.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Chorizo En Gancho Alma Criolla 1 Kg_22.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 11890.0
            }
        ]
    },
    {
        "id": 296,
        "name": "Cuadrada Feteada De Novillito Envasado Al Vacío 1 Kg",
        "price": 14989.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Cuadrada Feteada De Novillito Envasado A_1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 14989.0
            }
        ]
    },
    {
        "id": 297,
        "name": "Carne Picada Magra 650 G",
        "price": 14999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carne Picada Magra 650 G_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14999.0
            }
        ]
    },
    {
        "id": 298,
        "name": "Tortuguita De Novillo Envasado Al Vacío 900 G",
        "price": 15499.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Tortuguita De Novillo Envasado Al Vacío _21.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 15499.0
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
        "image": "images/changomas/Asado De Tira De Novillito 1 Kg_13.jpg",
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
            }
        ]
    },
    {
        "id": 301,
        "name": "Barritas De Cereal Yogurt Frutilla Light Cereal Mix 26gr",
        "price": 1129.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Barritas De Cereal Yogurt Frutilla Light_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 752.67
            },
            {
                "date": "2026-03-21",
                "price": 1129.0
            }
        ]
    },
    {
        "id": 302,
        "name": "Aritos De Cereal Frutados 3 Arroyos 160gr",
        "price": 1429.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Aritos De Cereal Frutados 3 Arroyos 160g_13.jpg",
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
        "name": "Cereal Check Bastoncitos Integrales De Salvado 250 G",
        "price": 1499.25,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Check Bastoncitos Integrales De S_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1999.0
            },
            {
                "date": "2026-04-08",
                "price": 1499.25
            }
        ]
    },
    {
        "id": 304,
        "name": "Cereal Check Ositos Azucarados 200 G",
        "price": 1574.25,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Check Ositos Azucarados 200 G_20.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2099.0
            },
            {
                "date": "2026-04-08",
                "price": 1574.25
            }
        ]
    },
    {
        "id": 305,
        "name": "Copos De Maíz Granix 160gr",
        "price": 1699.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Copos De Maíz Granix 160gr_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 306,
        "name": "Cereal Bolitas Check Chocolate 200 G",
        "price": 1724.25,
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
            }
        ]
    },
    {
        "id": 307,
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
            }
        ]
    },
    {
        "id": 308,
        "name": "Cereal Check Anillos De Colores Frutal 200 G",
        "price": 1799.25,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Check Anillos De Colores Frutal 2_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2399.0
            },
            {
                "date": "2026-04-08",
                "price": 1799.25
            }
        ]
    },
    {
        "id": 309,
        "name": "Cereales Formis Estrellas Sabor Frutal 145 G",
        "price": 2059.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereales Formis Estrellas Sabor Frutal 1_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 310,
        "name": "Barra Proteica Integra De Maní Chocolate 45 G",
        "price": 2299.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Barra Proteica Integra De Maní Chocolate_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 311,
        "name": "Cerveza Rubia Quilmes Bajocero 473 Ml",
        "price": 1035.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes Bajocero 473 Ml_18.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1479.0
            },
            {
                "date": "2026-04-12",
                "price": 1035.3
            }
        ]
    },
    {
        "id": 312,
        "name": "Cerveza En Lata Brahma 354ml",
        "price": 1289.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza En Lata Brahma 354ml_19.jpg",
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
            }
        ]
    },
    {
        "id": 313,
        "name": "Cerveza Rubia Quilmes 1890 473 Cc",
        "price": 1424.25,
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
            }
        ]
    },
    {
        "id": 314,
        "name": "Cerveza Rubia Schneider 473 Ml",
        "price": 2299.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider 473 Ml_14.jpg",
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
            }
        ]
    },
    {
        "id": 315,
        "name": "Cerveza Rubia Quilmes Laton 710 Cc",
        "price": 2379.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes Laton 710 Cc_9.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2379.3
            }
        ]
    },
    {
        "id": 316,
        "name": "Cerveza Rubia Corona Cero Alcohol 330 Ml",
        "price": 2379.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Corona Cero Alcohol 330 Ml_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2379.3
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
                "date": "2026-04-12",
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
        "image": "images/changomas/Cerveza Rubia Amstel Lager 473 Ml_7.jpg",
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
            }
        ]
    },
    {
        "id": 319,
        "name": "Cerveza Rubia Schneider 710 Ml",
        "price": 2549.25,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider 710 Ml_5.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2549.25
            }
        ]
    },
    {
        "id": 320,
        "name": "Cerveza Clasica Quilmes Retornable 1 L",
        "price": 2869.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Clasica Quilmes Retornable 1 L_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2869.3
            }
        ]
    },
    {
        "id": 321,
        "name": "Gaseosa Cunnington Pomelo Suave 2.25 L",
        "price": 1699.0,
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
            }
        ]
    },
    {
        "id": 322,
        "name": "Gaseosa Cunnington Cola Sin Azúcar 2.25 L",
        "price": 1699.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Cola Sin Azúcar 225 L_6.jpg",
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
            }
        ]
    },
    {
        "id": 323,
        "name": "Gaseosa Cunnington Lima 2.25 L",
        "price": 1699.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Lima 225 L_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1874.25
            },
            {
                "date": "2026-03-21",
                "price": 1666.0
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
            }
        ]
    },
    {
        "id": 324,
        "name": "Agua Tónica Cunnington 2.25 L",
        "price": 1699.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Agua Tónica Cunnington 225 L_9.jpg",
        "history": [
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
            }
        ]
    },
    {
        "id": 325,
        "name": "Gaseosa Lima Limón 7up Sin Azúcar 1.5 L",
        "price": 1849.5,
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
            }
        ]
    },
    {
        "id": 326,
        "name": "Gaseosa Coca Cola Original 354ml",
        "price": 2299.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Coca Cola Original 354ml_23.jpg",
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
            }
        ]
    },
    {
        "id": 327,
        "name": "Gaseosa Mirinda Sabor Naranja 2.25 L",
        "price": 2336.65,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Mirinda Sabor Naranja 225 L_20.jpg",
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
            }
        ]
    },
    {
        "id": 328,
        "name": "Agua Tónica Paso De Los Toros 1.5 L",
        "price": 2404.35,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Agua Tónica Paso De Los Toros 15 L_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2404.35
            }
        ]
    },
    {
        "id": 329,
        "name": "Gaseosa Paso De Los Toros Sabor Pomelo 1.5 L",
        "price": 2404.35,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Paso De Los Toros Sabor Pomelo 1_19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2404.35
            }
        ]
    },
    {
        "id": 330,
        "name": "Gaseosa Pepsi Cola 1,5 L",
        "price": 2404.35,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Pepsi Cola 15 L_21.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2404.35
            }
        ]
    },
    {
        "id": 331,
        "name": "Medallon De Carne Vacuna Express 110 G 2u",
        "price": 1789.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallon De Carne Vacuna Express 110 G 2_9.jpg",
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
            }
        ]
    },
    {
        "id": 332,
        "name": "Medallones De Carne Aliada 2 U 110 G",
        "price": 2159.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Aliada 2 U 110 G_16.jpg",
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
        "id": 333,
        "name": "Hamburguesas Paty Finas 2 U 110 G",
        "price": 3439.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Hamburguesas Paty Finas 2 U 110 G_22.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3439.0
            }
        ]
    },
    {
        "id": 334,
        "name": "Medallones De Merluza Grangys Con Espinaca Y Queso 430 G",
        "price": 3649.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Merluza Grangys Con Espina_13.jpg",
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
        "id": 335,
        "name": "Medallones De Carne Vacuna Paty Express 276 G 4u",
        "price": 4469.25,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Vacuna Paty Express _5.jpg",
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
            }
        ]
    },
    {
        "id": 336,
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
        "id": 337,
        "name": "Medallón Green Life De Calabaza Y Choclo 380 G 4u",
        "price": 5499.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallón Green Life De Calabaza Y Choclo_17.jpg",
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
            }
        ]
    },
    {
        "id": 338,
        "name": "Medallón Green Life De Lentejas Y Zanahorias 380 G 4u",
        "price": 5499.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallón Green Life De Lentejas Y Zanaho_20.jpg",
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
            }
        ]
    },
    {
        "id": 339,
        "name": "Medallones Granja Del Sol De Pollo 4 U",
        "price": 6006.75,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Granja Del Sol De Pollo 4 U_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6006.75
            }
        ]
    },
    {
        "id": 340,
        "name": "Hamburguesas Swift Clásicas 320g 4u",
        "price": 6329.25,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Hamburguesas Swift Clásicas 320g 4u_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6329.25
            }
        ]
    },
    {
        "id": 341,
        "name": "Harina De Trigo Chacabuco 000 1 Kg",
        "price": 741.75,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Chacabuco 000 1 Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 741.75
            }
        ]
    },
    {
        "id": 342,
        "name": "Harina 000 Morixe X 1 Kg",
        "price": 979.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 000 Morixe X 1 Kg_5.jpg",
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
        "id": 343,
        "name": "Harina Cañuelas 000 1kg",
        "price": 1029.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina Cañuelas 000 1kg_20.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1029.0
            }
        ]
    },
    {
        "id": 344,
        "name": "Harina De Trigo Favorita 000 1 Kg",
        "price": 1039.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Favorita 000 1 Kg_16.jpg",
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
        "id": 345,
        "name": "Polenta Instantánea Prestopronta 490 G",
        "price": 1146.75,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Polenta Instantánea Prestopronta 490 G_7.jpg",
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
            }
        ]
    },
    {
        "id": 346,
        "name": "Harina Integral Chacabuco 1 Kg",
        "price": 1191.75,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina Integral Chacabuco 1 Kg_6.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1191.75
            }
        ]
    },
    {
        "id": 347,
        "name": "Harina Leudante Blancaflor 1 Kg",
        "price": 1299.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina Leudante Blancaflor 1 Kg_0.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 348,
        "name": "Harina De Trigo Caserita Tipo 0000 1 Kg",
        "price": 1299.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Caserita Tipo 0000 1 Kg_3.jpg",
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
        "image": "images/changomas/Harina 0000 Morixe X 1 Kg_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
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
        "image": "images/changomas/Harina 0000 Pureza Ultra Refinada 1 Kg_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1419.0
            }
        ]
    },
    {
        "id": 351,
        "name": "Jugo En Polvo Tang Naranja Dulce 15 G",
        "price": 239.5,
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
            }
        ]
    },
    {
        "id": 352,
        "name": "Jugo En Polvo Tang Naranja Mango 15 G",
        "price": 239.5,
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
            }
        ]
    },
    {
        "id": 353,
        "name": "Jugo En Polvo Tang Multifruta 15 G",
        "price": 239.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Multifruta 15 G_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 239.5
            }
        ]
    },
    {
        "id": 354,
        "name": "Jugo En Polvo Tang Limonada Dulce 15 G",
        "price": 239.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Limonada Dulce 15 G_12.jpg",
        "history": [
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
            }
        ]
    },
    {
        "id": 355,
        "name": "Jugo En Polvo Tang  Manzana 15 G",
        "price": 239.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang  Manzana 15 G_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 239.5
            }
        ]
    },
    {
        "id": 356,
        "name": "Jugo En Polvo Clight Naranja Dulce 7,5 G",
        "price": 249.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Clight Naranja Dulce 75 G_0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 249.5
            }
        ]
    },
    {
        "id": 357,
        "name": "Jugo En Polvo Clight Manzana Deliciosa 7 G",
        "price": 249.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Clight Manzana Deliciosa 7_1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 249.5
            }
        ]
    },
    {
        "id": 358,
        "name": "Jugo En Polvo Clight Naranja Durazno 7,5 G",
        "price": 249.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Clight Naranja Durazno 75 _2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 249.5
            }
        ]
    },
    {
        "id": 359,
        "name": "Jugo En Polvo Clight Limonada 8 G",
        "price": 249.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Clight Limonada 8 G_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 249.5
            }
        ]
    },
    {
        "id": 360,
        "name": "Jugo En Polvo Clight Limonada Rosa 8 G",
        "price": 249.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Clight Limonada Rosa 8 G_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 249.5
            }
        ]
    },
    {
        "id": 361,
        "name": "Leche Entera La Serenisima Fort C 200 Cc",
        "price": 891.75,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera La Serenisima Fort C 200 Cc_18.jpg",
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
            }
        ]
    },
    {
        "id": 362,
        "name": "Leche Descremada Check Larga Vida 1 L",
        "price": 1499.0,
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
            }
        ]
    },
    {
        "id": 363,
        "name": "Leche Entera Check Larga Vida 1 L",
        "price": 1499.0,
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
            }
        ]
    },
    {
        "id": 364,
        "name": "Leche Entera Plenty 1 L",
        "price": 1499.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Plenty 1 L_13.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 365,
        "name": "Leche Uat Check  Baja En Lactosa Parcialmente Descremada 1 L",
        "price": 1599.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Uat Check  Baja En Lactosa Parcial_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1349.0
            },
            {
                "date": "2026-04-02",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 366,
        "name": "Leche Entera Casanto 1 L",
        "price": 1649.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Casanto 1 L_17.jpg",
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
        "name": "Leche Entera La Serenísima Multivitaminas 3% 1 L",
        "price": 1780.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera La Serenísima Multivitamina_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 369,
        "name": "Leche Descremada La Serenísima Multivitaminas 1% 1 L",
        "price": 1780.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada La Serenísima Multivita_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 370,
        "name": "Leche Descremada La Serenísima Reducida En Lactosa 1 L",
        "price": 1780.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada La Serenísima Reducida _10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 371,
        "name": "Esponja Check Ultrafina 1un",
        "price": 454.35,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Check Ultrafina 1un_9.jpg",
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
            }
        ]
    },
    {
        "id": 372,
        "name": "Esponja Multiuso Virulana 1 U",
        "price": 558.35,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Multiuso Virulana 1 U_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 859.0
            },
            {
                "date": "2026-04-12",
                "price": 558.35
            }
        ]
    },
    {
        "id": 373,
        "name": "Esponja Mortimer Lisa 1 U",
        "price": 572.67,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Mortimer Lisa 1 U_22.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 859.0
            },
            {
                "date": "2026-04-12",
                "price": 572.67
            }
        ]
    },
    {
        "id": 374,
        "name": "Esponja Sed Metal Hogar Acero Inoxidable",
        "price": 577.85,
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
            }
        ]
    },
    {
        "id": 375,
        "name": "Esponja Check Cuadros 1un",
        "price": 597.35,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Check Cuadros 1un_15.jpg",
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
            }
        ]
    },
    {
        "id": 376,
        "name": "Esponja Fibra C/ Cuadraditos 1un",
        "price": 616.85,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Fibra C Cuadraditos 1un_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 949.0
            },
            {
                "date": "2026-04-12",
                "price": 616.85
            }
        ]
    },
    {
        "id": 377,
        "name": "Esponja Vajilla Inoxidable Virulana 1 U",
        "price": 649.35,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Vajilla Inoxidable Virulana 1 U_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 999.0
            },
            {
                "date": "2026-04-12",
                "price": 649.35
            }
        ]
    },
    {
        "id": 378,
        "name": "Esponja De Acero Inoxidable Mortimer 1 Un",
        "price": 652.67,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja De Acero Inoxidable Mortimer 1 U_1.jpg",
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
            }
        ]
    },
    {
        "id": 379,
        "name": "Esponja Mortimer Cuadriculada 1un",
        "price": 692.67,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Mortimer Cuadriculada 1un_4.jpg",
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
            }
        ]
    },
    {
        "id": 380,
        "name": "Esponja Mortimer Cuadriculada Antibacterial 1 Un",
        "price": 739.33,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Mortimer Cuadriculada Antibacter_0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 739.33
            }
        ]
    },
    {
        "id": 381,
        "name": "Jabón En Barra Johnson's Glicerina 80gr",
        "price": 1769.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Jabón En Barra Johnsons Glicerina 80gr_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1149.85
            },
            {
                "date": "2026-03-21",
                "price": 1769.0
            }
        ]
    },
    {
        "id": 382,
        "name": "Toallas Humedas Soul Baby Con Aloe Y Vit E 50un",
        "price": 1999.0,
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
            }
        ]
    },
    {
        "id": 383,
        "name": "Toallitas Humedas Antibacterial Q-Soft 30 Un",
        "price": 2749.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Humedas Antibacterial Q-Soft 3_11.jpg",
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
        "id": 384,
        "name": "Toallitas Húmedas Kimbies 48un",
        "price": 3359.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Kimbies 48un_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2015.4
            },
            {
                "date": "2026-04-02",
                "price": 3359.0
            }
        ]
    },
    {
        "id": 385,
        "name": "Toallas Humedas Soul Baby Animales Fantasticos 45un",
        "price": 3499.0,
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
            }
        ]
    },
    {
        "id": 386,
        "name": "Toallitas Húmedas Toddler Deluxe Sin Perfume 48 U",
        "price": 3621.75,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Toddler Deluxe Sin Per_5.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3621.75
            }
        ]
    },
    {
        "id": 387,
        "name": "Toallitas Húmedas Toddler Deluxe Aloe Vera 48 U",
        "price": 3621.75,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Toddler Deluxe Aloe Ve_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3621.75
            }
        ]
    },
    {
        "id": 388,
        "name": "Toallitas Húmedas Huggies Triple Protección 48un",
        "price": 4689.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Huggies Triple Protecc_3.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 4689.0
            }
        ]
    },
    {
        "id": 389,
        "name": "Pañales Toddler Deluxe Talle Xxg 8 U",
        "price": 4819.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Pañales Toddler Deluxe Talle Xxg 8 U_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2891.4
            },
            {
                "date": "2026-04-02",
                "price": 2409.5
            },
            {
                "date": "2026-04-08",
                "price": 4819.0
            }
        ]
    },
    {
        "id": 390,
        "name": "Pañales Toddler Deluxe Talle P 12 U",
        "price": 4819.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Pañales Toddler Deluxe Talle P 12 U_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2891.4
            },
            {
                "date": "2026-04-02",
                "price": 2409.5
            },
            {
                "date": "2026-04-08",
                "price": 4819.0
            }
        ]
    },
    {
        "id": 391,
        "name": "Papel Higiénico Higienol Fresh Hoja Simple 30 M 4 U",
        "price": 1598.35,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Higienol Fresh Hoja Simp_2.jpg",
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
            }
        ]
    },
    {
        "id": 392,
        "name": "Papel Higiénico Aliada Simple Hoja 30 M 4u",
        "price": 1779.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Aliada Simple Hoja 30 M _3.jpg",
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
            }
        ]
    },
    {
        "id": 393,
        "name": "Papel Hgiénico Check Simple Hoja 30 M X 10 Cm 4u",
        "price": 2019.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Hgiénico Check Simple Hoja 30 M X _23.jpg",
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
            }
        ]
    },
    {
        "id": 394,
        "name": "Papel Higiénico Higienol Plus Doble Hoja 20 M 4 U",
        "price": 2202.85,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Higienol Plus Doble Hoja_18.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3389.0
            },
            {
                "date": "2026-04-12",
                "price": 2202.85
            }
        ]
    },
    {
        "id": 395,
        "name": "Papel Higiénico Felpita Hoja Simple 30 M 4 U",
        "price": 2399.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Felpita Hoja Simple 30 M_17.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 396,
        "name": "Papel Higienico Elegante Blanco Hoja Simple 4u",
        "price": 2669.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higienico Elegante Blanco Hoja Sim_13.jpg",
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
            }
        ]
    },
    {
        "id": 397,
        "name": "Papel Higénico Higienol Plus Doble Hoja 30 M 4 U",
        "price": 2898.35,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higénico Higienol Plus Doble Hoja _0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2898.35
            }
        ]
    },
    {
        "id": 398,
        "name": "Papel Higiénico Felpita Premium Doble Hoja 4 U 20 M",
        "price": 2999.0,
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
            }
        ]
    },
    {
        "id": 399,
        "name": "Papel Higiénico Higienol Premium Doble Hoja 30 M 4 U",
        "price": 3411.85,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Higienol Premium Doble H_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3411.85
            }
        ]
    },
    {
        "id": 400,
        "name": "Papel Higienico Elegante Simple Hoja 30 M 6 U",
        "price": 3549.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higienico Elegante Simple Hoja 30 _8.jpg",
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
            }
        ]
    },
    {
        "id": 401,
        "name": "Pollo Entero Congelado 3 Kg",
        "price": 3589.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo Entero Congelado 3 Kg_3.jpg",
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
        "image": "images/changomas/Pollo Entero Fresco 3 Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3989.0
            }
        ]
    },
    {
        "id": 403,
        "name": "Pollo Parrillero X 2,5kg",
        "price": 4799.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo Parrillero X 25kg_5.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4799.0
            }
        ]
    },
    {
        "id": 404,
        "name": "Pollo 1/4 Trasero Congelado 2 Kg",
        "price": 4990.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo 14 Trasero Congelado 2 Kg_1.jpg",
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
            }
        ]
    },
    {
        "id": 405,
        "name": "Muslo De Pollo 1 Kg",
        "price": 6190.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Muslo De Pollo 1 Kg_2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6190.0
            }
        ]
    },
    {
        "id": 406,
        "name": "Patas De Pollo 1,5 Kg",
        "price": 7139.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Patas De Pollo 15 Kg_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7139.0
            }
        ]
    },
    {
        "id": 407,
        "name": "Queso Rallado La Quesera 100 G",
        "price": 1499.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Rallado La Quesera 100 G_5.jpg",
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
            }
        ]
    },
    {
        "id": 408,
        "name": "Queso Rallado La Serenisima Reggianito 35g",
        "price": 1669.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Rallado La Serenisima Reggianito 3_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1669.0
            }
        ]
    },
    {
        "id": 409,
        "name": "Queso Untable Tonadita Jamón 180g",
        "price": 1689.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Jamón 180g_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1949.25
            },
            {
                "date": "2026-03-21",
                "price": 1689.35
            },
            {
                "date": "2026-03-28",
                "price": 1949.25
            },
            {
                "date": "2026-04-08",
                "price": 2599.0
            },
            {
                "date": "2026-04-12",
                "price": 1689.35
            }
        ]
    },
    {
        "id": 410,
        "name": "Queso Untable Tonadita Gruyere 180g",
        "price": 1689.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Gruyere 180g_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1949.25
            },
            {
                "date": "2026-03-21",
                "price": 1689.35
            },
            {
                "date": "2026-03-28",
                "price": 1949.25
            },
            {
                "date": "2026-04-08",
                "price": 2599.0
            },
            {
                "date": "2026-04-12",
                "price": 1689.35
            }
        ]
    },
    {
        "id": 411,
        "name": "Queso Untable Tonadita Clásico 180g",
        "price": 1689.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Clásico 180g_23.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2599.0
            },
            {
                "date": "2026-04-12",
                "price": 1689.35
            }
        ]
    },
    {
        "id": 412,
        "name": "Queso Crema Tonadita Cremette Light 290g",
        "price": 1999.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Tonadita Cremette Light 290g_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2249.25
            },
            {
                "date": "2026-03-21",
                "price": 2999.0
            },
            {
                "date": "2026-03-28",
                "price": 1949.35
            },
            {
                "date": "2026-04-02",
                "price": 2249.25
            },
            {
                "date": "2026-04-08",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 413,
        "name": "Queso Crema Cremette Tonadita Clasico 290g",
        "price": 1999.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Cremette Tonadita Clasico 29_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2249.25
            },
            {
                "date": "2026-03-21",
                "price": 2999.0
            },
            {
                "date": "2026-03-28",
                "price": 1949.35
            },
            {
                "date": "2026-04-02",
                "price": 2249.25
            },
            {
                "date": "2026-04-08",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 414,
        "name": "Queso Con Crema Cremette Tonadita Light 480g",
        "price": 2794.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Con Crema Cremette Tonadita Light _7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2794.35
            }
        ]
    },
    {
        "id": 415,
        "name": "Queso Con Crema Cremette Tonadita Clásico 480g",
        "price": 2794.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Con Crema Cremette Tonadita Clásic_9.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2794.35
            }
        ]
    },
    {
        "id": 416,
        "name": "Queso La Serenisima Untable Cremón Light 280g",
        "price": 2819.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso La Serenisima Untable Cremón Light_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2819.25
            },
            {
                "date": "2026-04-08",
                "price": 3759.0
            },
            {
                "date": "2026-04-12",
                "price": 2819.25
            }
        ]
    },
    {
        "id": 417,
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
        "id": 418,
        "name": "Sal Gruesa Check 1 Kg",
        "price": 1099.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Check 1 Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1099.0
            }
        ]
    },
    {
        "id": 419,
        "name": "Sal Check Fina 500 G",
        "price": 1159.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Check Fina 500 G_6.jpg",
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
            }
        ]
    },
    {
        "id": 420,
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
        "id": 421,
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
            }
        ]
    },
    {
        "id": 422,
        "name": "Pimienta Negra Alicante Molida Sin Tacc 25gr",
        "price": 1469.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Pimienta Negra Alicante Molida Sin Tacc _13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1469.0
            }
        ]
    },
    {
        "id": 423,
        "name": "Sal Entrefina Celusal Para Parrilla Paquete 500gr",
        "price": 1479.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Entrefina Celusal Para Parrilla Paqu_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1399.0
            },
            {
                "date": "2026-04-08",
                "price": 1479.0
            }
        ]
    },
    {
        "id": 424,
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
        "id": 425,
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
        "id": 426,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1619.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Dos Anclas 500 Gr_5.jpg",
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
            }
        ]
    },
    {
        "id": 427,
        "name": "Palitos Aliada Salados 120 G",
        "price": 1119.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Palitos Aliada Salados 120 G_18.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1119.0
            }
        ]
    },
    {
        "id": 428,
        "name": "Maní Salado Maní King Sin Piel 100 G",
        "price": 1489.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Maní Salado Maní King Sin Piel 100 G_19.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1489.0
            },
            {
                "date": "2026-03-28",
                "price": 1116.75
            },
            {
                "date": "2026-04-02",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 429,
        "name": "Galletita Jamon Saladix 100 Gr",
        "price": 1569.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Jamon Saladix 100 Gr_14.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1176.75
            },
            {
                "date": "2026-03-28",
                "price": 1569.0
            }
        ]
    },
    {
        "id": 430,
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
            }
        ]
    },
    {
        "id": 431,
        "name": "Galletita Snacks Rex 125 Gr",
        "price": 2059.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Snacks Rex 125 Gr_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 432,
        "name": "Galletitas Queso Kesitas Bagley 125gr",
        "price": 2059.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Queso Kesitas Bagley 125gr_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 433,
        "name": "Papas Fritas Quento Sabor Queso Crema Y Ciboulette 82 G",
        "price": 2299.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Papas Fritas Quento Sabor Queso Crema Y _13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 434,
        "name": "Galletita Club Social Sabor Original 144gr",
        "price": 2839.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Club Social Sabor Original 144_2.jpg",
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
            }
        ]
    },
    {
        "id": 435,
        "name": "Galletitas Crackers Club Social Sabor Jamón 24 G 6u",
        "price": 2839.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Crackers Club Social Sabor Ja_9.jpg",
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
            }
        ]
    },
    {
        "id": 436,
        "name": "Galletitas Snacks Rex Sabor Original 225 G",
        "price": 2939.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Snacks Rex Sabor Original 225_11.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2939.0
            }
        ]
    },
    {
        "id": 437,
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
        "id": 438,
        "name": "Aceite Mezcla Cocinero x 900 cc.",
        "price": 3100.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite Mezcla Cocinero x 900 cc_32.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            }
        ]
    },
    {
        "id": 439,
        "name": "Aceite de Girasol Legitimo x 900 cc.",
        "price": 3750.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Legitimo x 900 cc_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 440,
        "name": "Aceite de Girasol Cañuelas x 900 cc.",
        "price": 3950.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 900 cc_23.jpg",
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
        "id": 441,
        "name": "Aceite de Girasol Cocinero x 900 cc.",
        "price": 3950.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Cocinero x 900 cc_33.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3950.0
            }
        ]
    },
    {
        "id": 442,
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
        "id": 443,
        "name": "Aceite de Girasol Natura x 900 cc.",
        "price": 4050.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Natura x 900 cc_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3950.0
            },
            {
                "date": "2026-03-28",
                "price": 4050.0
            }
        ]
    },
    {
        "id": 444,
        "name": "Rocio Vegetal sin Manteca con Harina Mama Cocina x 150 cc.",
        "price": 4150.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Rocio Vegetal sin Manteca con Harina Mam_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4150.0
            }
        ]
    },
    {
        "id": 445,
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
        "id": 446,
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
        "id": 447,
        "name": "Agua Mineral s/Gas Alvura x 500 cc.",
        "price": 1200.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 500 cc_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 448,
        "name": "Agua Mineral sin gas Bonaqua x 500 cc.",
        "price": 1500.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Bonaqua x 500 cc_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 449,
        "name": "Agua sin Gas Benedictino x 500 cc.",
        "price": 1500.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua sin Gas Benedictino x 500 cc_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 450,
        "name": "Agua Mineral s/Gas Alvura x 1,5 Lt.",
        "price": 1500.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 15 Lt_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 451,
        "name": "Agua Mineral s/Gas Alvura x 2,25 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 225 Lt_27.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 452,
        "name": "Agua Nestlé Pureza Vital sin gas Botella 500cc x1",
        "price": 1750.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Nestlé Pureza Vital sin gas Botella_2.jpg",
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
        "id": 453,
        "name": "Agua Mineral sin Gas Sierra de los Padres x 2 Lt.",
        "price": 1850.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin Gas Sierra de los Padre_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 454,
        "name": "Agua Mineral s/Gas Villa del Sur x 600 cc.",
        "price": 1900.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Villa del Sur x 600 cc_29.jpg",
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
        "name": "Agua Mineral sin gas Glaciar x 500 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Glaciar x 500 cc_6.jpg",
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
        "id": 456,
        "name": "Agua Mineral sin gas Cellier x 2 lt.",
        "price": 2100.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Cellier x 2 lt_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 457,
        "name": "Pulpa de Manzana Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Manzana Pouch Zummy x 110 g_4.jpg",
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
        "id": 458,
        "name": "Pulpa de Ciruela Desecada Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Ciruela Desecada Pouch Zummy x _5.jpg",
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
        "id": 459,
        "name": "Pulpa de Pera Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Pera Pouch Zummy x 110 g_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 460,
        "name": "Pulpa Mix Frutal Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa Mix Frutal Pouch Zummy x 110 g_7.jpg",
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
        "id": 461,
        "name": "Formula Lactea LV Etapa 2 Profutura Nutrilón x 200 cc.",
        "price": 2950.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Formula Lactea LV Etapa 2 Profutura Nutr_21.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2950.0
            }
        ]
    },
    {
        "id": 462,
        "name": "Formula Láctea LV Etapa 1 Profutura Nutrilón x 200 cc.",
        "price": 3100.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Formula Láctea LV Etapa 1 Profutura Nutr_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3100.0
            }
        ]
    },
    {
        "id": 463,
        "name": "NESTUM® Trigo y Miel x 225gr",
        "price": 7050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Trigo y Miel x 225gr_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7050.0
            }
        ]
    },
    {
        "id": 464,
        "name": "NESTUM® sabor Banana x 225gr",
        "price": 7050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM sabor Banana x 225gr_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 7050.0
            }
        ]
    },
    {
        "id": 465,
        "name": "NESTUM® Arroz x 225gr",
        "price": 7250.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Arroz x 225gr_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 7250.0
            }
        ]
    },
    {
        "id": 466,
        "name": "NESTUM® Multicereal x 500gr",
        "price": 12200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Multicereal x 500gr_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 12200.0
            }
        ]
    },
    {
        "id": 467,
        "name": "Arroz Grano Largo 00000 Cañuelas x 500 g.",
        "price": 1050.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Grano Largo 00000 Cañuelas x 500 g_5.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 468,
        "name": "Arroz Integral Cañuelas x 500 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Integral Cañuelas x 500 g_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 469,
        "name": "Arroz Grano Largo Fino Molinos Ala x 500 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Grano Largo Fino Molinos Ala x 500_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 470,
        "name": "Arroz Dorado Natural Molinos Ala x 500 g.",
        "price": 1400.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Dorado Natural Molinos Ala x 500 g_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 471,
        "name": "Arroz Largo Fino Don Marcos x 1 Kg.",
        "price": 1400.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Largo Fino Don Marcos x 1 Kg_39.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 472,
        "name": "Arroz Integral Molinos Ala x 500 g.",
        "price": 1450.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Integral Molinos Ala x 500 g_15.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 473,
        "name": "Arroz Parboilizado Bolsa Dos Hermanos x 500 g.",
        "price": 1450.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Parboilizado Bolsa Dos Hermanos x _30.jpg",
        "history": [
            {
                "date": "2026-04-02",
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
        "image": "images/laanonima/Arroz Parboil Don Marcos x 1 Kg_40.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 475,
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
        "id": 476,
        "name": "Arroz Largo Fino 00000 Bolsa Vanguardia x 1 Kg.",
        "price": 1700.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Largo Fino 00000 Bolsa Vanguardia _38.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 477,
        "name": "Carne Picada Envasado al Vacío Best x 500 g.",
        "price": 7980.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Carne Picada Envasado al Vacío Best x 50_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7980.0
            }
        ]
    },
    {
        "id": 478,
        "name": "Carne Picada E/V Estancias LA x 500 g.",
        "price": 10210.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Carne Picada EV Estancias LA x 500 g_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10210.0
            }
        ]
    },
    {
        "id": 479,
        "name": "Preparado para Medallones Estancias La x 500 g.",
        "price": 11740.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Preparado para Medallones Estancias La x_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11740.0
            }
        ]
    },
    {
        "id": 480,
        "name": "Carne Picada M. E/V Estancias LA x 500 g.",
        "price": 12790.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Carne Picada M EV Estancias LA x 500 g_2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 12790.0
            }
        ]
    },
    {
        "id": 481,
        "name": "Tapa de Bife Envasado al Vacío FB MEATS (Kg)",
        "price": 12990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Tapa de Bife Envasado al Vacío FB MEATS _8.jpg",
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
        "id": 482,
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
        "id": 483,
        "name": "Matambre Envasado al Vacío FB MEATS (Kg)",
        "price": 13990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Matambre Envasado al Vacío FB MEATS Kg_16.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 13990.0
            }
        ]
    },
    {
        "id": 484,
        "name": "Chingolo Envasado al Vacío FB MEATS (Kg)",
        "price": 13990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Chingolo Envasado al Vacío FB MEATS Kg_22.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 13490.0
            },
            {
                "date": "2026-04-02",
                "price": 13990.0
            }
        ]
    },
    {
        "id": 485,
        "name": "Vacío Envasado al Vacío FB MEATS (Kg)",
        "price": 14990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Vacío Envasado al Vacío FB MEATS Kg_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 14990.0
            }
        ]
    },
    {
        "id": 486,
        "name": "Tapa de Nalga FB MEATS Envasado al Vacío",
        "price": 14990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Tapa de Nalga FB MEATS Envasado al Vacío_33.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 14990.0
            }
        ]
    },
    {
        "id": 487,
        "name": "Maíz Inflado Dulce Capullitos Flor x 80 g.",
        "price": 650.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maíz Inflado Dulce Capullitos Flor x 80 _38.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 650.0
            }
        ]
    },
    {
        "id": 488,
        "name": "Trigo Inflado Dulce Capullitos Flor x 80 g.",
        "price": 680.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Trigo Inflado Dulce Capullitos Flor x 80_57.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 680.0
            }
        ]
    },
    {
        "id": 489,
        "name": "Arroz Inflado Dulce Capullitos Flor x 80 g.",
        "price": 950.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Arroz Inflado Dulce Capullitos Flor x 80_50.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 950.0
            }
        ]
    },
    {
        "id": 490,
        "name": "Cereal en barra light Yogur Frutilla Cereal Mix x 26 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Cereal en barra light Yogur Frutilla Cer_39.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 491,
        "name": "Maíz Inflado Acaramelado Egran con Maní x 80 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maíz Inflado Acaramelado Egran con Maní _61.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 492,
        "name": "Barra de Cereal Almendras y Maní Cereal Mix x 33 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Barra de Cereal Almendras y Maní Cereal _68.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 493,
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
        "id": 494,
        "name": "Copos de Maíz La Anónima x 160 g.",
        "price": 1550.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Copos de Maíz La Anónima x 160 g_27.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 495,
        "name": "Maiz Inflado Acaramelado Egran x 80 g.",
        "price": 1550.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maiz Inflado Acaramelado Egran x 80 g_72.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 496,
        "name": "Copos de Maíz Bolsa Granix x 160 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Copos de Maíz Bolsa Granix x 160 g_46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 497,
        "name": "Cerveza Bajo Cero Lata Quilmes x 473 cc.",
        "price": 1950.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Bajo Cero Lata Quilmes x 473 cc_45.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 498,
        "name": "Cerveza Quilmes 0.0% Lata 473cc x1",
        "price": 2200.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Quilmes 00 Lata 473cc x1_6.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 499,
        "name": "Cerveza Porrón Michelob x 275 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Porrón Michelob x 275 cc_10.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2350.0
            }
        ]
    },
    {
        "id": 500,
        "name": "Cerveza Schneider Lata x 473 cc.",
        "price": 2450.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Schneider Lata x 473 cc_50.jpg",
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
        "id": 501,
        "name": "Cerveza Lager Lata Amstel x 473 cc.",
        "price": 2550.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Lager Lata Amstel x 473 cc_102.jpg",
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
        "id": 502,
        "name": "Cerveza Brahma Chopp Lata 473cc x1",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Brahma Chopp Lata 473cc x1_58.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2650.0
            },
            {
                "date": "2026-04-08",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 503,
        "name": "Cerveza Quilmes IPA Lata 473cc x1",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Quilmes IPA Lata 473cc x1_75.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 504,
        "name": "Cerveza Imperial Lata x 473 cc.",
        "price": 2900.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Imperial Lata x 473 cc_72.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 505,
        "name": "Cerveza Golden Lata Imperial x 473 cc.",
        "price": 2900.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Golden Lata Imperial x 473 cc_98.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 506,
        "name": "Cerveza Long Neck Roja Scotch Blest x 355 cc.",
        "price": 3050.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Long Neck Roja Scotch Blest x 35_92.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 507,
        "name": "Pate de Jamón Bocatti x 90 g.",
        "price": 2000.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Pate de Jamón Bocatti x 90 g_43.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 508,
        "name": "Pate con Pimienta Verde Bocatti x 90 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Pate con Pimienta Verde Bocatti x 90 g_22.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 509,
        "name": "Paté Panceta Ahumada Bocatti x 90 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Paté Panceta Ahumada Bocatti x 90 g_23.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 510,
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
        "id": 511,
        "name": "Salchichón Primavera Feteado Zur Linde x 200 g.",
        "price": 2650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Salchichón Primavera Feteado Zur Linde x_29.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 512,
        "name": "Salchichón con Jamón Feteado Zur Linde x 200 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Salchichón con Jamón Feteado Zur Linde x_13.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 513,
        "name": "Leberwurst Cabaña Argentina x 200 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Leberwurst Cabaña Argentina x 200 g_33.jpg",
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
        "id": 514,
        "name": "Salame Milán Feteado Var.Log.5 Bocatti x 70 g.",
        "price": 2750.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Salame Milán Feteado VarLog5 Bocatti x 7_17.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 515,
        "name": "Mortadela Feteada 214 x 200 g.",
        "price": 3600.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Mortadela Feteada 214 x 200 g_39.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3600.0
            }
        ]
    },
    {
        "id": 516,
        "name": "Fiambre Cocido de Cerdo Feteado Zur Linde x 200 g.",
        "price": 3650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Fiambre Cocido de Cerdo Feteado Zur Lind_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3650.0
            }
        ]
    },
    {
        "id": 517,
        "name": "Medallones Carne Vacuna con Soja x 2 Un. Tres Cruces x 110 g.",
        "price": 1750.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones Carne Vacuna con Soja x 2 Un _37.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1600.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 518,
        "name": "Medallones de Carne Vacuna Best x 2 un. 110 gr.",
        "price": 2200.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Best x 2 un 1_8.jpg",
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
        "id": 519,
        "name": "Medallones de Carne Vacuna Doble Swift x 2 un. 112 gr.",
        "price": 2300.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Doble Swift x_40.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2100.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 520,
        "name": "Medallones de Carne Vacuna Express x 2 Un. Paty x 110 g.",
        "price": 2600.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Express x 2 U_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2450.0
            },
            {
                "date": "2026-03-21",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 521,
        "name": "Medallones de Carne Vacuna x 2 Un.  Swift x 320 g.",
        "price": 3050.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna x 2 Un  Swift_30.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2800.0
            },
            {
                "date": "2026-03-28",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 522,
        "name": "Medallón Hamburguesa Champion. x 4 u. 224 GR",
        "price": 3300.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallón Hamburguesa Champion x 4 u 224 _36.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 523,
        "name": "Hamburguesa Carne Vacuna Finitas x 2 Un. Paty x 110 g.",
        "price": 3400.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesa Carne Vacuna Finitas x 2 Un _16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3150.0
            },
            {
                "date": "2026-03-21",
                "price": 3400.0
            }
        ]
    },
    {
        "id": 524,
        "name": "Hamburguesas de Carne Vacuna La Anónima x 2 un. 110 gr.",
        "price": 3450.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesas de Carne Vacuna La Anónima _10.jpg",
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
        "id": 525,
        "name": "Medallones de Carne Vacuna x 4 un. La Blanca x 276 gr.",
        "price": 4100.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna x 4 un La Bla_32.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3750.0
            },
            {
                "date": "2026-03-28",
                "price": 4100.0
            }
        ]
    },
    {
        "id": 526,
        "name": "Hamburguesa de Carne Vacuna Clásica Doble Plus Swift x 2 un. 160 gr.",
        "price": 4250.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesa de Carne Vacuna Clásica Dobl_28.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 4250.0
            }
        ]
    },
    {
        "id": 527,
        "name": "Bebida Energizante Speed x 269 cc.",
        "price": 1900.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Energizante Speed x 269 cc_26.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 528,
        "name": "Bebida Fresh Blue Full Sport x 500 cc.",
        "price": 2000.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Fresh Blue Full Sport x 500 cc_33.jpg",
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
        "id": 529,
        "name": "Bebida Uva Powerade x 500 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Uva Powerade x 500 cc_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 530,
        "name": "Bebida de Moras Pet Gatorade Sin Azúcar x 400 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida de Moras Pet Gatorade Sin Azúcar _11.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 531,
        "name": "Bebida de Fresa y Kiwi Pet Gatorade Sin Azúcar x 400 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida de Fresa y Kiwi Pet Gatorade Sin _12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 532,
        "name": "Energizante Rockstar  Botella 500cc x1",
        "price": 2100.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Energizante Rockstar  Botella 500cc x1_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2000.0
            },
            {
                "date": "2026-04-08",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 533,
        "name": "Powerade Mountain Blast x 500 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Powerade Mountain Blast x 500 cc_3.jpg",
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
            }
        ]
    },
    {
        "id": 534,
        "name": "Bebida Powerade Manzana x 500 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Powerade Manzana x 500 cc_13.jpg",
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
            }
        ]
    },
    {
        "id": 535,
        "name": "Powerade Frutas Tropicales x 500 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Powerade Frutas Tropicales x 500 cc_14.jpg",
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
            }
        ]
    },
    {
        "id": 536,
        "name": "Bebida Powerade Naranja x 500 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Powerade Naranja x 500 cc_38.jpg",
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
            }
        ]
    },
    {
        "id": 537,
        "name": "Bebida Láctea Frutilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Láctea Frutilla Tetra La Serenísi_71.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 538,
        "name": "Bebida Láctea Vainilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Láctea Vainilla Tetra La Serenísi_72.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 539,
        "name": "Leche LV Entera Clásica Fortificada c/ Vitamina 3% La Serenísima x 200 cc.",
        "price": 1350.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche LV Entera Clásica Fortificada c Vi_35.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 540,
        "name": "Alimento Lácteo Primeros Años  Las Tres Niñas  x 200 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Alimento Lácteo Primeros Años  Las Tres _64.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 541,
        "name": "NIDO® 3 Defensas Leche Infantil Listo para Tomar x 200ml.",
        "price": 1600.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/NIDO 3 Defensas Leche Infantil Listo par_45.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 542,
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
        "id": 543,
        "name": "Bebida Lactea a Base de Leche Caramel Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Caramel Se_54.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 544,
        "name": "Bebida Lactea a Base de Leche Capuchino Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Capuchino _57.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 545,
        "name": "Bebida Lactea a Base de Leche Avellanas Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Avellanas _62.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 546,
        "name": "Leche Ultra Entera Sachet 3% Casanto x 1 Lt.",
        "price": 1800.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche Ultra Entera Sachet 3 Casanto x 1 _40.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 547,
        "name": "Limpiador Líquido Concentrado Cherry Rinde 1 Lt. Best x 30 cc.",
        "price": 660.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Limpiador Líquido Concentrado Cherry Rin_99.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 660.0
            }
        ]
    },
    {
        "id": 548,
        "name": "Limpiador Líquido Concentrado Marina Rinde 1 Lt. Best x 30 cc.",
        "price": 660.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Limpiador Líquido Concentrado Marina Rin_108.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 660.0
            }
        ]
    },
    {
        "id": 549,
        "name": "Limpiador Líquido Concentrado Lavanda Rinde 1 Lt. Best x 30 cc.",
        "price": 660.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Limpiador Líquido Concentrado Lavanda Ri_127.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 660.0
            }
        ]
    },
    {
        "id": 550,
        "name": "Fibra Esponja con Cuadraditos Best x 1 un.",
        "price": 770.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Fibra Esponja con Cuadraditos Best x 1 u_62.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 700.0
            },
            {
                "date": "2026-04-12",
                "price": 770.0
            }
        ]
    },
    {
        "id": 551,
        "name": "Fibra Esponja Lisita Best x 1 un.",
        "price": 890.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Fibra Esponja Lisita Best x 1 un_96.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 800.0
            },
            {
                "date": "2026-03-28",
                "price": 810.0
            },
            {
                "date": "2026-04-12",
                "price": 890.0
            }
        ]
    },
    {
        "id": 552,
        "name": "Fibra Esponja Best Extra Delgada x 1 un.",
        "price": 1000.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Fibra Esponja Best Extra Delgada x 1 un_93.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 870.0
            },
            {
                "date": "2026-03-28",
                "price": 910.0
            },
            {
                "date": "2026-04-12",
                "price": 1000.0
            }
        ]
    },
    {
        "id": 553,
        "name": "Esponja de Acero Best x 1 un.",
        "price": 1050.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Esponja de Acero Best x 1 un_70.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1000.0
            },
            {
                "date": "2026-04-12",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 554,
        "name": "Fibra Esponja Suave Best No raya x 1 un.",
        "price": 1250.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Fibra Esponja Suave Best No raya x 1 un_101.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1100.0
            },
            {
                "date": "2026-03-28",
                "price": 1150.0
            },
            {
                "date": "2026-04-12",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 555,
        "name": "Jabón en Pan Blanco Best x 1 un. x 200 g.",
        "price": 1300.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Jabón en Pan Blanco Best x 1 un x 200 g_72.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1300.0
            }
        ]
    },
    {
        "id": 556,
        "name": "Rejilla Blanca Best Americana 38x43cm x 1 un.",
        "price": 1400.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Rejilla Blanca Best Americana 38x43cm x _34.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 557,
        "name": "Alimento Seco Perro Adulto Alta Proteína Dog Chow x 1 Kg.",
        "price": 5650.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Adulto Alta Proteína_15.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 5650.0
            }
        ]
    },
    {
        "id": 558,
        "name": "Alimento Seco Perro Adulto Carne/Pollo/Cerdo/Vegetales Dogui x 1,5 Kg.",
        "price": 6000.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Adulto CarnePolloCer_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 6000.0
            }
        ]
    },
    {
        "id": 559,
        "name": "Alimento Seco Perro Adulto Medianos y Grandes Carne/Pollo Dog Chow x 1,5 Kg.",
        "price": 6100.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Adulto Medianos y Gr_2.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 6100.0
            }
        ]
    },
    {
        "id": 560,
        "name": "Alimento para Perros Cachorros Dogui x 1,5 Kg.",
        "price": 6550.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento para Perros Cachorros Dogui x 1_8.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 6550.0
            }
        ]
    },
    {
        "id": 561,
        "name": "Alimento Seco Perro Adulto Pequeños y Medianos Carne/Pollo Dog Chow x 1,5 Kg.",
        "price": 7800.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Adulto Pequeños y Me_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 7800.0
            }
        ]
    },
    {
        "id": 562,
        "name": "Alimento Seco Perro Cachorro Minis y Pequeños Dog Chow x 1,5 Kg.",
        "price": 9150.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Cachorro Minis y Peq_5.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 9150.0
            }
        ]
    },
    {
        "id": 563,
        "name": "Alimento Seco Perro Adulto Carne/Pollo/Cerdo/Vegetales Dogui x 3 Kg.",
        "price": 10650.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Adulto CarnePolloCer_10.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 10650.0
            }
        ]
    },
    {
        "id": 564,
        "name": "Alimento Seco Perro Cachorro Carne/Pollo/Cerdo Dogui x 3 Kg.",
        "price": 11700.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Cachorro CarnePolloC_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 11700.0
            }
        ]
    },
    {
        "id": 565,
        "name": "Alimento para  perro Adulto Mediano & Grande Carne y Pollo Dog Chow x 3 kg.",
        "price": 14000.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento para  perro Adulto Mediano  Gra_0.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 14000.0
            }
        ]
    },
    {
        "id": 566,
        "name": "Alimento Seco Perro Adulto Pequeño & Mediano Dog Chow x 3 Kg.",
        "price": 14500.0,
        "market": "aura",
        "category": "perros",
        "image": "images/laanonima/Alimento Seco Perro Adulto Pequeño  Medi_1.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 14500.0
            }
        ]
    },
    {
        "id": 567,
        "name": "Pañales Huggies Classic P x30",
        "price": 12500.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Huggies Classic P x30_60.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12500.0
            }
        ]
    },
    {
        "id": 568,
        "name": "Pañales Babysec Super Premium Recien Nacido 20 Un.",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Babysec Super Premium Recien Nac_51.jpg",
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
        "id": 569,
        "name": "Pañal Huggies Flexi Comfort XG x16",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort XG x16_74.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 570,
        "name": "Pañal Huggies Flexi Comfort G x20",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort G x20_75.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 571,
        "name": "Traje Baño M Little Swimm Huggies x 11 un.",
        "price": 14550.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje Baño M Little Swimm Huggies x 11 u_81.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14550.0
            }
        ]
    },
    {
        "id": 572,
        "name": "Pañal Huggies Protect Plus P x30",
        "price": 14600.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Protect Plus P x30_53.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14600.0
            }
        ]
    },
    {
        "id": 573,
        "name": "Traje de Baño Descremado  Splashers M-G Pampers x 11 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers M-G _42.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 574,
        "name": "Traje de Baño Descremado  Splashers G-XG Pampers x 10 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers G-XG_82.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 575,
        "name": "Traje de Baño Descremado  Splashers P-M Pampers x 12 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers P-M _83.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 576,
        "name": "Pañal Huggies Flexi Comfort P x30",
        "price": 17150.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort P x30_50.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 17150.0
            }
        ]
    },
    {
        "id": 577,
        "name": "Servilletas Papel Hoja Simple 32,3 cm x 30 cm Felpita x 70 Un.",
        "price": 1550.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilletas Papel Hoja Simple 323 cm x 3_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 578,
        "name": "Servilletas Papel 33X33 Elegante x 80 un.",
        "price": 1800.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilletas Papel 33X33 Elegante x 80 un_45.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 579,
        "name": "Servilleta Sussex Clásica hoja simple 80 un",
        "price": 1900.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilleta Sussex Clásica hoja simple 80_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1800.0
            },
            {
                "date": "2026-04-02",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 580,
        "name": "Servilletas Papel Tissue La Anónima Decoradas 32cmx30cm x 70 un.",
        "price": 1900.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilletas Papel Tissue La Anónima Deco_24.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 581,
        "name": "Servilletas La Anónima x 80 un.",
        "price": 2150.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilletas La Anónima x 80 un_20.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 582,
        "name": "Bolsas para Residuos Best 45x55cm x 20 un.",
        "price": 2200.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Bolsas para Residuos Best 45x55cm x 20 u_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 583,
        "name": "Papel Higiénico Hoja Simple Elegante 30 Mts Blanco x 4 un.",
        "price": 2400.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Papel Higiénico Hoja Simple Elegante 30 _13.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 584,
        "name": "Papel higiénico Higienol Fresh hoja simple 30 m 4 un",
        "price": 2450.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Papel higiénico Higienol Fresh hoja simp_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2450.0
            }
        ]
    },
    {
        "id": 585,
        "name": "Rollo Cocina Blanco Elegante 50 paños x 3 un.",
        "price": 2700.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Rollo Cocina Blanco Elegante 50 paños x _12.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 586,
        "name": "Papel Higiénico Hoja Simple Best 4 x 30 metros",
        "price": 2700.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Papel Higiénico Hoja Simple Best 4 x 30 _19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 587,
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
        "id": 588,
        "name": "Pollo Fresco La Anónima (Kg)",
        "price": 4190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Fresco La Anónima Kg_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 589,
        "name": "Pollo Tres Arroyos Congelado (Kg)",
        "price": 4190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Tres Arroyos Congelado Kg_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 590,
        "name": "Cuarto Trasero de Pollo La Anónima (Kg)",
        "price": 5190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cuarto Trasero de Pollo La Anónima Kg_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5190.0
            }
        ]
    },
    {
        "id": 591,
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
        "id": 592,
        "name": "PataMuslo de Pollo La Anónima (Kg)",
        "price": 6490.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/PataMuslo de Pollo La Anónima Kg_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6490.0
            }
        ]
    },
    {
        "id": 593,
        "name": "Pollo Refrigerado Bandeja Pollolin (Kg)",
        "price": 6550.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Refrigerado Bandeja Pollolin Kg_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6550.0
            }
        ]
    },
    {
        "id": 594,
        "name": "Cuarto Trasero Bandeja Pollolin (Kg)",
        "price": 6990.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cuarto Trasero Bandeja Pollolin Kg_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            }
        ]
    },
    {
        "id": 595,
        "name": "Pollo Parrillero Pollolin (Kg)",
        "price": 7490.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Parrillero Pollolin Kg_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7490.0
            }
        ]
    },
    {
        "id": 596,
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
        "id": 597,
        "name": "Aderezo Rallado Sabor Queso Best x 40 g.",
        "price": 960.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 40 g_7.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 960.0
            }
        ]
    },
    {
        "id": 598,
        "name": "Queso Rallado La Quesera x 40 g.",
        "price": 970.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Quesera x 40 g_23.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 970.0
            }
        ]
    },
    {
        "id": 599,
        "name": "Queso Rallado Reggianito La Serenísima x 35 g.",
        "price": 1800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Reggianito La Serenísima x_57.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 600,
        "name": "Queso Rallado Tregar x 40 g.",
        "price": 2200.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Tregar x 40 g_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2050.0
            },
            {
                "date": "2026-03-21",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 601,
        "name": "Aderezo Rallado Sabor Queso Best x 100 g.",
        "price": 2350.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 100 g_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2350.0
            }
        ]
    },
    {
        "id": 602,
        "name": "Queso Provolone En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Provolone En Fetas x 8 Un Tonadita_28.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 603,
        "name": "Queso Cheddar En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Cheddar En Fetas x 8 Un Tonadita x_35.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 604,
        "name": "Queso en Hebras Mini La Paulina x 80 g.",
        "price": 3050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso en Hebras Mini La Paulina x 80 g_63.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 605,
        "name": "Queso de Cerdo Feteado 42 x 200 g.",
        "price": 3300.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso de Cerdo Feteado 42 x 200 g_110.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 606,
        "name": "Queso Rallado Reggianito La Serenísima x 70 g.",
        "price": 3450.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Reggianito La Serenísima x_33.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3450.0
            }
        ]
    },
    {
        "id": 607,
        "name": "Cereal Bolitas de Chocolate Julicroc x 150 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cereal Bolitas de Chocolate Julicroc x 1_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 608,
        "name": "Cereal Aritos Frutados Julicroc x 150 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cereal Aritos Frutados Julicroc x 150 g_47.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 609,
        "name": "Barrita Vegana Choco Naranja Laddu Bar x 30 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Barrita Vegana Choco Naranja Laddu Bar x_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 610,
        "name": "Papas Fritas Sabor Cheddar Julicroc x 70 g.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Papas Fritas Sabor Cheddar Julicroc x 70_36.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 611,
        "name": "Almohaditas Rellena de Avellana sin Tacc Snuks x 90 g.",
        "price": 1850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Almohaditas Rellena de Avellana sin Tacc_50.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 612,
        "name": "Almohaditas Rellena de Frutilla sin Tacc Snuks x 90 g.",
        "price": 1850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Almohaditas Rellena de Frutilla sin Tacc_65.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 613,
        "name": "Galletitas sabor Frutilla sin Tacc Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Galletitas sabor Frutilla sin Tacc Smams_73.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 614,
        "name": "Galletitas Rellenas Vainilla Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Galletitas Rellenas Vainilla Smams x 105_74.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 615,
        "name": "Harina de Arroz s/Gluten Dos Hermanos x 500 g.",
        "price": 2000.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Harina de Arroz sGluten Dos Hermanos x 5_1.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 616,
        "name": "Palitos de Maíz Queso Libre de Gluten Julicroc x 180 g.",
        "price": 2100.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Palitos de Maíz Queso Libre de Gluten Ju_56.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 617,
        "name": "Vinagre De Alcohol 1lts Cuisine & Co",
        "price": 1450.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol 1lts Cuisine  Co_10.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1490.0
            },
            {
                "date": "2026-04-12",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 618,
        "name": "Vinagre De Alcohol Clasico Botella 1 Lt.",
        "price": 1700.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol Clasico Botella 1 Lt_8.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 619,
        "name": "Vinagre De Alcohol Dos Anclas 1 L",
        "price": 1750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol Dos Anclas 1 L_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            },
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 620,
        "name": "Vinagre De Manzana 500 Grs Cuisine & Co",
        "price": 2150.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Manzana 500 Grs Cuisine  Co_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 621,
        "name": "Aceite Girasol Legitimo 900 Ml",
        "price": 3149.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite Girasol Legitimo 900 Ml_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2850.0
            },
            {
                "date": "2026-03-28",
                "price": 3149.0
            }
        ]
    },
    {
        "id": 622,
        "name": "Aceite Alsamar Girasol X900ml",
        "price": 3350.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite Alsamar Girasol X900ml_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3350.0
            }
        ]
    },
    {
        "id": 623,
        "name": "Aceite De Girasol Cañuelas 900 Ml",
        "price": 3750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite De Girasol Cañuelas 900 Ml_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 624,
        "name": "Aceite De Girasol 900 Ml Cocinero",
        "price": 3750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite De Girasol 900 Ml Cocinero_6.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 625,
        "name": "Aceite De Girasol Natura 900 Ml",
        "price": 4000.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite De Girasol Natura 900 Ml_4.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 4000.0
            }
        ]
    },
    {
        "id": 626,
        "name": "Jugo De Limón Minerva X1 Lt",
        "price": 4750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Jugo De Limón Minerva X1 Lt_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4750.0
            }
        ]
    },
    {
        "id": 627,
        "name": "Agua Cellier Sin Gas 2lt",
        "price": 1159.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Cellier Sin Gas 2lt_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 628,
        "name": "Soda 1.75 Lts Cuisine & Co",
        "price": 1300.0,
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
            }
        ]
    },
    {
        "id": 629,
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
            }
        ]
    },
    {
        "id": 630,
        "name": "Saborizada H2oh Limoneto Con Gas 2.25lt",
        "price": 1475.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Saborizada H2oh Limoneto Con Gas 225lt_18.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1475.0
            }
        ]
    },
    {
        "id": 631,
        "name": "Agua Nestle Pureza Vital 2.25lt",
        "price": 1501.8,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Nestle Pureza Vital 225lt_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1626.95
            },
            {
                "date": "2026-04-12",
                "price": 1501.8
            }
        ]
    },
    {
        "id": 632,
        "name": "Soda Sierra De Los Padres 1.75lt",
        "price": 1667.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Soda Sierra De Los Padres 175lt_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1667.0
            }
        ]
    },
    {
        "id": 633,
        "name": "Agua Mineral Eco De Los Andes Sin Gas 2 L",
        "price": 1770.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Mineral Eco De Los Andes Sin Gas 2 _12.jpg",
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
            }
        ]
    },
    {
        "id": 634,
        "name": "Agua Sin Gas Villavicencio 2 L",
        "price": 1890.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Sin Gas Villavicencio 2 L_3.jpg",
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
            }
        ]
    },
    {
        "id": 635,
        "name": "Agua Glaciar Sin Gas Botella 2ltx1",
        "price": 1920.6,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Glaciar Sin Gas Botella 2ltx1_16.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2080.65
            },
            {
                "date": "2026-04-12",
                "price": 1920.6
            }
        ]
    },
    {
        "id": 636,
        "name": "Saborizada Aquarius Manzana 2.25lt",
        "price": 1980.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Saborizada Aquarius Manzana 225lt_13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1980.0
            }
        ]
    },
    {
        "id": 637,
        "name": "Arroz Luchetti Largo Fino X500g",
        "price": 750.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Luchetti Largo Fino X500g_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1000.0
            },
            {
                "date": "2026-03-28",
                "price": 750.0
            },
            {
                "date": "2026-04-02",
                "price": 1000.0
            },
            {
                "date": "2026-04-12",
                "price": 750.0
            }
        ]
    },
    {
        "id": 638,
        "name": "Maíz Pisingallo 400 Grs Cuisine & Co",
        "price": 773.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Maíz Pisingallo 400 Grs Cuisine  Co_13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 773.5
            }
        ]
    },
    {
        "id": 639,
        "name": "Arroz Largo Fino Vanguardia 1 Kg",
        "price": 824.25,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Largo Fino Vanguardia 1 Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1029.0
            },
            {
                "date": "2026-03-28",
                "price": 1099.0
            },
            {
                "date": "2026-04-12",
                "price": 824.25
            }
        ]
    },
    {
        "id": 640,
        "name": "Arroz Parboil Luchetti 500 Gr",
        "price": 862.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Parboil Luchetti 500 Gr_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1150.0
            },
            {
                "date": "2026-03-28",
                "price": 862.5
            },
            {
                "date": "2026-04-02",
                "price": 1150.0
            },
            {
                "date": "2026-04-12",
                "price": 862.5
            }
        ]
    },
    {
        "id": 641,
        "name": "Arroz ápostoles Grano Largo 1 Kg",
        "price": 900.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz ápostoles Grano Largo 1 Kg_19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 900.0
            }
        ]
    },
    {
        "id": 642,
        "name": "Arroz Grano Largo Parboil 500 Grs Molinos Ala",
        "price": 937.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo Parboil 500 Grs Molino_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 937.5
            }
        ]
    },
    {
        "id": 643,
        "name": "Arroz Molinos Ala Integral X500g",
        "price": 975.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Molinos Ala Integral X500g_7.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 910.0
            },
            {
                "date": "2026-04-08",
                "price": 1300.0
            },
            {
                "date": "2026-04-12",
                "price": 975.0
            }
        ]
    },
    {
        "id": 644,
        "name": "Arroz Gallo Parboil Selec X 500 Gr Gallo",
        "price": 1012.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Gallo Parboil Selec X 500 Gr Gallo_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1012.5
            }
        ]
    },
    {
        "id": 645,
        "name": "Arroz Gallo Integral Selec X 500 Gr Gallo",
        "price": 1275.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Gallo Integral Selec X 500 Gr Gall_9.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 646,
        "name": "Arroz Grano Largo 1 Kg Cuisine &co",
        "price": 1275.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo 1 Kg Cuisine co_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 647,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_44.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 648,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_45.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 649,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 650,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 5200.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Clásico 500 Gr Casancrem_33.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-16",
                "price": 4800.0
            },
            {
                "date": "2026-04-02",
                "price": 8000.0
            },
            {
                "date": "2026-04-08",
                "price": 4800.0
            },
            {
                "date": "2026-04-12",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 651,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 5200.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Clásico 500 Gr Casancrem_34.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-16",
                "price": 4800.0
            },
            {
                "date": "2026-04-02",
                "price": 8000.0
            },
            {
                "date": "2026-04-08",
                "price": 4800.0
            },
            {
                "date": "2026-04-12",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 652,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 5200.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Clásico 500 Gr Casancrem_35.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-16",
                "price": 4800.0
            },
            {
                "date": "2026-04-02",
                "price": 8000.0
            },
            {
                "date": "2026-04-08",
                "price": 4800.0
            },
            {
                "date": "2026-04-12",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 653,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_22.jpg",
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
        "id": 654,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_23.jpg",
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
        "id": 655,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_24.jpg",
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
        "id": 656,
        "name": "Queso Cremoso Punta Del Agua Horma X Kg",
        "price": 12899.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Cremoso Punta Del Agua Horma X Kg_0.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 11490.0
            },
            {
                "date": "2026-04-12",
                "price": 12899.0
            }
        ]
    },
    {
        "id": 657,
        "name": "Espinazo",
        "price": 3935.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Espinazo_17.jpg",
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
        "id": 658,
        "name": "Carne Vacuna Picada Común La Hacienda",
        "price": 6499.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Carne Vacuna Picada Común La Hacienda_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6499.0
            }
        ]
    },
    {
        "id": 659,
        "name": "Azotillo",
        "price": 8315.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Azotillo_13.jpg",
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
        "id": 660,
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
        "id": 661,
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
        "id": 662,
        "name": "Tapa De Bife Novillito Ev Al Vacio",
        "price": 11499.0,
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
            }
        ]
    },
    {
        "id": 663,
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
        "id": 664,
        "name": "Manta Parrillera La Hacienda",
        "price": 13859.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Manta Parrillera La Hacienda_15.jpg",
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
        "id": 665,
        "name": "Tapa De Nalga",
        "price": 14999.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Tapa De Nalga_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 14999.0
            }
        ]
    },
    {
        "id": 666,
        "name": "Roast Beef Churrasco",
        "price": 15599.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Roast Beef Churrasco_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12999.0
            },
            {
                "date": "2026-04-08",
                "price": 12479.2
            },
            {
                "date": "2026-04-12",
                "price": 15599.0
            }
        ]
    },
    {
        "id": 667,
        "name": "Barra Frutilla Y Chocolate Cereal Mix 26 Gr",
        "price": 1150.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra Frutilla Y Chocolate Cereal Mix 26_19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 668,
        "name": "Barrita De Arroz Chocolate Negro 3 Un Crowie",
        "price": 1550.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barrita De Arroz Chocolate Negro 3 Un Cr_18.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 669,
        "name": "Copos De Maíz Tradicionales Granix 160 Gr",
        "price": 1600.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos De Maíz Tradicionales Granix 160 G_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 670,
        "name": "Barra De Avena Caju Y Arándanos 41 Gr Integra",
        "price": 1700.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Avena Caju Y Arándanos 41 Gr In_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            },
            {
                "date": "2026-03-21",
                "price": 1190.0
            },
            {
                "date": "2026-03-28",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 671,
        "name": "Barra De Avena, Almendra Y Nuez 41 Gr Integra",
        "price": 1700.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Avena Almendra Y Nuez 41 Gr Int_13.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 672,
        "name": "Barra Sin Tacc Semillas Arandanos 38 Gr Integra",
        "price": 1750.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra Sin Tacc Semillas Arandanos 38 Gr _15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            },
            {
                "date": "2026-03-21",
                "price": 1225.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 673,
        "name": "Copos De Maíz Azucarados 240 Grs Cuisine & Co",
        "price": 1950.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos De Maíz Azucarados 240 Grs Cuisine_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1189.5
            },
            {
                "date": "2026-03-21",
                "price": 1267.5
            },
            {
                "date": "2026-03-28",
                "price": 1365.0
            },
            {
                "date": "2026-04-02",
                "price": 1267.5
            },
            {
                "date": "2026-04-08",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 674,
        "name": "Barra De Cereal Cacao 45 Gr Muecas",
        "price": 2050.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Cereal Cacao 45 Gr Muecas_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1800.0
            },
            {
                "date": "2026-03-21",
                "price": 1260.0
            },
            {
                "date": "2026-03-28",
                "price": 1800.0
            },
            {
                "date": "2026-04-12",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 675,
        "name": "Barra De Cereal Banana 45 Gr Muecas",
        "price": 2050.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Cereal Banana 45 Gr Muecas_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1800.0
            },
            {
                "date": "2026-03-21",
                "price": 1260.0
            },
            {
                "date": "2026-03-28",
                "price": 1800.0
            },
            {
                "date": "2026-04-12",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 676,
        "name": "Barra De Cereal Manzana 45 Gr Muecas",
        "price": 2050.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Cereal Manzana 45 Gr Muecas_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1800.0
            },
            {
                "date": "2026-04-12",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 677,
        "name": "Cerveza Brahma Chopp Lata 354mlx1",
        "price": 966.75,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Brahma Chopp Lata 354mlx1_13.jpg",
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
        "id": 678,
        "name": "Cerveza Sin Alcohol 330 Cc Corona",
        "price": 1700.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Sin Alcohol 330 Cc Corona_17.jpg",
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
            }
        ]
    },
    {
        "id": 679,
        "name": "Cerveza Imperial Golden 473cc",
        "price": 1740.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Imperial Golden 473cc_18.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1350.0
            },
            {
                "date": "2026-04-02",
                "price": 2700.0
            },
            {
                "date": "2026-04-08",
                "price": 2950.0
            },
            {
                "date": "2026-04-12",
                "price": 1740.0
            }
        ]
    },
    {
        "id": 680,
        "name": "Cerveza Quilmes Bajo Cero 1lt Ret.",
        "price": 1750.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Quilmes Bajo Cero 1lt Ret_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2550.0
            },
            {
                "date": "2026-03-21",
                "price": 2625.0
            },
            {
                "date": "2026-04-02",
                "price": 2275.0
            },
            {
                "date": "2026-04-08",
                "price": 2625.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 681,
        "name": "Cerveza Rubia 473 Ml Schneider",
        "price": 1800.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Rubia 473 Ml Schneider_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1495.0
            },
            {
                "date": "2026-03-21",
                "price": 2300.0
            },
            {
                "date": "2026-04-02",
                "price": 1725.0
            },
            {
                "date": "2026-04-08",
                "price": 2350.0
            },
            {
                "date": "2026-04-12",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 682,
        "name": "Cerveza Heineken 473 Ml",
        "price": 2220.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Heineken 473 Ml_2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 683,
        "name": "Cerveza Stella Artois Botella No Retornable 330mlx1",
        "price": 2220.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Stella Artois Botella No Retorna_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2775.0
            },
            {
                "date": "2026-04-12",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 684,
        "name": "Cerveza Heineken 330 Ml",
        "price": 2340.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Heineken 330 Ml_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2340.0
            }
        ]
    },
    {
        "id": 685,
        "name": "Cerveza Rubia 710 Ml Schneider",
        "price": 2500.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Rubia 710 Ml Schneider_4.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2550.0
            },
            {
                "date": "2026-04-08",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 686,
        "name": "Cerveza Quilmes Clasica 710cc",
        "price": 2550.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Quilmes Clasica 710cc_5.jpg",
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
            }
        ]
    },
    {
        "id": 687,
        "name": "Salame Bocatti Feteado 70 Gr",
        "price": 3297.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Bocatti Feteado 70 Gr_18.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3297.0
            }
        ]
    },
    {
        "id": 688,
        "name": "Salame Fuet Doina 150 Gr",
        "price": 3900.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Fuet Doina 150 Gr_14.jpg",
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
        "id": 689,
        "name": "Mortadela Paladini Familiar 300 Gr",
        "price": 5115.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Mortadela Paladini Familiar 300 Gr_17.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 5115.0
            }
        ]
    },
    {
        "id": 690,
        "name": "Jamón Cocido Linea Permi Paladini X 150 Gr",
        "price": 5400.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamón Cocido Linea Permi Paladini X 150 _2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5400.0
            }
        ]
    },
    {
        "id": 691,
        "name": "Salame Bocatti Feteado 100 Gr",
        "price": 5606.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Bocatti Feteado 100 Gr_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5606.0
            }
        ]
    },
    {
        "id": 692,
        "name": "Jamón Cocido Bocatti Feteado 130 Gr",
        "price": 6625.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamón Cocido Bocatti Feteado 130 Gr_0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6625.0
            }
        ]
    },
    {
        "id": 693,
        "name": "Jamon Paladini Cocido Fetas Finas X 200 Gr",
        "price": 7600.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Paladini Cocido Fetas Finas X 200 _1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7600.0
            }
        ]
    },
    {
        "id": 694,
        "name": "Fiambre De Cerdo Tripack X Kg",
        "price": 10490.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Fiambre De Cerdo Tripack X Kg_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 10490.0
            }
        ]
    },
    {
        "id": 695,
        "name": "Fiambre De Cerdo Cocido Campo Austral Kg",
        "price": 15840.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Fiambre De Cerdo Cocido Campo Austral Kg_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 15840.0
            }
        ]
    },
    {
        "id": 696,
        "name": "Jamon Cocido Lario Sobre 1 Kg",
        "price": 23647.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Cocido Lario Sobre 1 Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 23647.0
            }
        ]
    },
    {
        "id": 697,
        "name": "Frutilla X 250 Gr Alif Agro",
        "price": 3150.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frutilla X 250 Gr Alif Agro_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3150.0
            }
        ]
    },
    {
        "id": 698,
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
        "id": 699,
        "name": "Arandano X 250 Gr Alif Agro",
        "price": 4850.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Arandano X 250 Gr Alif Agro_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4850.0
            }
        ]
    },
    {
        "id": 700,
        "name": "Mix Patagonico X 250 Gr Alif Agro",
        "price": 5650.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mix Patagonico X 250 Gr Alif Agro_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5650.0
            }
        ]
    },
    {
        "id": 701,
        "name": "Arandanos Green Life X 300 Gr",
        "price": 6600.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Arandanos Green Life X 300 Gr_3.jpg",
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
        "id": 702,
        "name": "Frutillas Green Life 400g",
        "price": 7450.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frutillas Green Life 400g_4.jpg",
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
        "id": 703,
        "name": "Frambuesa X 250 Gr Alif Agro",
        "price": 8650.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frambuesa X 250 Gr Alif Agro_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 8650.0
            }
        ]
    },
    {
        "id": 704,
        "name": "Mix 4 Berries Green Life 400g",
        "price": 9600.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mix 4 Berries Green Life 400g_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9600.0
            },
            {
                "date": "2026-04-02",
                "price": 7200.0
            },
            {
                "date": "2026-04-08",
                "price": 9600.0
            }
        ]
    },
    {
        "id": 705,
        "name": "Frutilla X 1 Kg Alif Agro",
        "price": 11150.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frutilla X 1 Kg Alif Agro_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10750.0
            },
            {
                "date": "2026-03-16",
                "price": 11150.0
            }
        ]
    },
    {
        "id": 706,
        "name": "Frambuesas X400g Green Life",
        "price": 14300.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frambuesas X400g Green Life_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 707,
        "name": "Gaseosa Pepsi  Botella 500mlx1",
        "price": 1424.25,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Botella 500mlx1_19.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1424.25
            }
        ]
    },
    {
        "id": 708,
        "name": "Gaseosa Pepsi  Lata 354ml X 1u",
        "price": 1500.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Lata 354ml X 1u_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 709,
        "name": "Gaseosa Coca-cola Sabor Original 354 Ml",
        "price": 1533.33,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Coca-cola Sabor Original 354 Ml_4.jpg",
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
            }
        ]
    },
    {
        "id": 710,
        "name": "Gaseosa Sprite Lima-limón 354 Ml",
        "price": 1533.33,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Sprite Lima-limón 354 Ml_18.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1533.33
            }
        ]
    },
    {
        "id": 711,
        "name": "Gaseosa Mirinda Naranja Botella 2,25ltx1",
        "price": 1837.5,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Mirinda Naranja Botella 225ltx1_14.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1470.0
            },
            {
                "date": "2026-04-12",
                "price": 1837.5
            }
        ]
    },
    {
        "id": 712,
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
        "id": 713,
        "name": "Gaseosa 7 Up Sin Azucar 1.5lt",
        "price": 2000.0,
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
            }
        ]
    },
    {
        "id": 714,
        "name": "Gaseosa Pepsi  Botella 2 L",
        "price": 2500.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Botella 2 L_2.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 715,
        "name": "Gaseosa 7 Up Botella 2,25ltx1",
        "price": 2500.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa 7 Up Botella 225ltx1_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 716,
        "name": "Gaseosa 7 Up Sin Azucar 2.25lt",
        "price": 2500.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa 7 Up Sin Azucar 225lt_16.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 717,
        "name": "Isotonico Zero Moras 400 Ml Gatorade",
        "price": 975.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Zero Moras 400 Ml Gatorade_11.jpg",
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
            }
        ]
    },
    {
        "id": 718,
        "name": "Isotonico Zero Fresa-kiwi 400 Ml Gatorade",
        "price": 975.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Zero Fresa-kiwi 400 Ml Gatorad_13.jpg",
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
            }
        ]
    },
    {
        "id": 719,
        "name": "Bebida Isotónica Fresh Blue 500 Ml Full Sport",
        "price": 1170.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Fresh Blue 500 Ml Full _14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1000.0
            },
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-03-21",
                "price": 1072.5
            },
            {
                "date": "2026-04-02",
                "price": 1237.5
            },
            {
                "date": "2026-04-08",
                "price": 1800.0
            },
            {
                "date": "2026-04-12",
                "price": 1170.0
            }
        ]
    },
    {
        "id": 720,
        "name": "Isotónica Gatorade Cool Blue Botella 500mlx1",
        "price": 1527.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotónica Gatorade Cool Blue Botella 500_2.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-08",
                "price": 1762.5
            },
            {
                "date": "2026-04-12",
                "price": 1527.5
            }
        ]
    },
    {
        "id": 721,
        "name": "Isotónica Gatorade Naranja Botella 500mlx1",
        "price": 1527.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotónica Gatorade Naranja Botella 500ml_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-03-21",
                "price": 1430.0
            },
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-08",
                "price": 1762.5
            },
            {
                "date": "2026-04-12",
                "price": 1527.5
            }
        ]
    },
    {
        "id": 722,
        "name": "Isotónica Gatorade Uva Botella 500mlx1",
        "price": 1527.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotónica Gatorade Uva Botella 500mlx1_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1650.0
            },
            {
                "date": "2026-04-08",
                "price": 1762.5
            },
            {
                "date": "2026-04-12",
                "price": 1527.5
            }
        ]
    },
    {
        "id": 723,
        "name": "Isotonico Gatorade Manzana 750cc",
        "price": 1690.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Gatorade Manzana 750cc_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 724,
        "name": "Isotonico Gatorade Cool Blue 750cc",
        "price": 1690.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Gatorade Cool Blue 750cc_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 725,
        "name": "Isotonico Gatorade Frutas Tropical 750cc",
        "price": 1690.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Gatorade Frutas Tropical 750cc_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 726,
        "name": "Isotonico Gatorade Manzana 1.25lt",
        "price": 1820.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Gatorade Manzana 125lt_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1820.0
            }
        ]
    },
    {
        "id": 727,
        "name": "Jugo Naranja Dulce 7 Gr Bc",
        "price": 175.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo Naranja Dulce 7 Gr Bc_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 233.33
            },
            {
                "date": "2026-04-08",
                "price": 350.0
            },
            {
                "date": "2026-04-12",
                "price": 175.0
            }
        ]
    },
    {
        "id": 728,
        "name": "Jugo Manzana Roja 7 Gr Bc",
        "price": 175.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo Manzana Roja 7 Gr Bc_16.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 233.33
            },
            {
                "date": "2026-04-08",
                "price": 350.0
            },
            {
                "date": "2026-04-12",
                "price": 175.0
            }
        ]
    },
    {
        "id": 729,
        "name": "Jugo Pomelo Amarillo 7 Gr Bc",
        "price": 175.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo Pomelo Amarillo 7 Gr Bc_18.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 350.0
            },
            {
                "date": "2026-04-12",
                "price": 175.0
            }
        ]
    },
    {
        "id": 730,
        "name": "Jugo En Polvo Tang Naranja Dulce 15gr",
        "price": 484.0,
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
            }
        ]
    },
    {
        "id": 731,
        "name": "Jugo En Polvo Tang Naranja Mango 15gr",
        "price": 484.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Mango 15gr_3.jpg",
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
            }
        ]
    },
    {
        "id": 732,
        "name": "Jugo En Polvo Tang Manzana 15gr",
        "price": 484.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Manzana 15gr_6.jpg",
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
            }
        ]
    },
    {
        "id": 733,
        "name": "Jugo En Polvo Tang Limon Dulce 15gr",
        "price": 484.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Limon Dulce 15gr_8.jpg",
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
            }
        ]
    },
    {
        "id": 734,
        "name": "Jugo En Polvo Tang Naranja Banana 15gr",
        "price": 484.0,
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
            }
        ]
    },
    {
        "id": 735,
        "name": "Jugo En Polvo Tang Pomelo Rosado 15 Gr",
        "price": 484.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Pomelo Rosado 15 Gr_13.jpg",
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
            }
        ]
    },
    {
        "id": 736,
        "name": "Jugo En Polvo Tang Naranja 15gr",
        "price": 484.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja 15gr_15.jpg",
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
            }
        ]
    },
    {
        "id": 737,
        "name": "Leche Uat Descremada Apostoles 1 L",
        "price": 1490.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Descremada Apostoles 1 L_8.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1117.5
            },
            {
                "date": "2026-04-02",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 738,
        "name": "Leche Uat Descremada 2apostoles 1l",
        "price": 1490.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Descremada 2apostoles 1l_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1117.5
            },
            {
                "date": "2026-04-02",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 739,
        "name": "Leche Entera 1 Lts Cuisine & Co",
        "price": 1702.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera 1 Lts Cuisine  Co_9.jpg",
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
        "id": 740,
        "name": "Leche Semi Descremada 1 Lts Cuisine & Co",
        "price": 1702.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Semi Descremada 1 Lts Cuisine  Co_13.jpg",
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
        "id": 741,
        "name": "Leche Uat Entera Sachet X 1 L Cuisine & Co",
        "price": 1740.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Entera Sachet X 1 L Cuisine  C_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1740.0
            }
        ]
    },
    {
        "id": 742,
        "name": "Leche Desc Ls Reduc. Lactosa Sachet 1l",
        "price": 1780.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Desc Ls Reduc Lactosa Sachet 1l_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1649.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1749.0
            },
            {
                "date": "2026-04-08",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 743,
        "name": "Leche Entera La Serenísima 3sachet 1lt",
        "price": 1780.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera La Serenísima 3sachet 1lt_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1649.0
            },
            {
                "date": "2026-03-21",
                "price": 1749.0
            },
            {
                "date": "2026-04-08",
                "price": 1780.0
            }
        ]
    },
    {
        "id": 744,
        "name": "Yogur Griego Firme Natural X 190 Grs Yogurisimo",
        "price": 1899.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Yogur Griego Firme Natural X 190 Grs Yog_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1899.0
            }
        ]
    },
    {
        "id": 745,
        "name": "Leche Uat Entera Las Tres Niñas 1l",
        "price": 1950.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Entera Las Tres Niñas 1l_5.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1700.0
            },
            {
                "date": "2026-04-12",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 746,
        "name": "Leche Uat Serenisima 3 - 1 Lt",
        "price": 2100.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Serenisima 3 - 1 Lt_0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 747,
        "name": "Leche En Polvo Descremada La Serenisima 200 Gr",
        "price": 3550.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Descremada La Serenisima _15.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3550.0
            }
        ]
    },
    {
        "id": 748,
        "name": "Leche Condensada Orgánica 395 Grs Nestlé®",
        "price": 3990.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Condensada Orgánica 395 Grs Nestlé_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5100.0
            },
            {
                "date": "2026-03-21",
                "price": 2550.0
            },
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
                "price": 3990.0
            }
        ]
    },
    {
        "id": 749,
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
        "id": 750,
        "name": "Leche Polvo Fortigrow 200 Grs Nido®",
        "price": 4700.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Polvo Fortigrow 200 Grs Nido_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4700.0
            }
        ]
    },
    {
        "id": 751,
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
        "id": 752,
        "name": "Leche En Polvo Entera 400 Grs Cuisine & Co",
        "price": 6010.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Entera 400 Grs Cuisine  C_6.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 6010.0
            }
        ]
    },
    {
        "id": 753,
        "name": "Leche Polvo Nutrifuerza 800 Grs La Lechera®",
        "price": 6990.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Polvo Nutrifuerza 800 Grs La Leche_0.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 6990.0
            }
        ]
    },
    {
        "id": 754,
        "name": "Leche En Polvo Plus Entera Instantanea Purisima 800 Gr",
        "price": 7052.5,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Plus Entera Instantanea P_2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7052.5
            }
        ]
    },
    {
        "id": 755,
        "name": "Leche En Polvo Descremada La Serenisima 400 Gr",
        "price": 7100.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Descremada La Serenisima _12.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 7100.0
            }
        ]
    },
    {
        "id": 756,
        "name": "Leche En Polvo Purísima Plus X 800 Gr",
        "price": 7377.5,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Purísima Plus X 800 Gr_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7377.5
            }
        ]
    },
    {
        "id": 757,
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
        "id": 758,
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
        "id": 759,
        "name": "Esponja Go! Power Protec Uñas",
        "price": 1400.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Go Power Protec Uñas_2.jpg",
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
        "id": 760,
        "name": "Paño Rejilla Costero Blanco Optico Super Cocina  1 U",
        "price": 1450.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Paño Rejilla Costero Blanco Optico Super_8.jpg",
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
        "id": 761,
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
        "id": 762,
        "name": "Trapo De Piso Home Care Gris Reforzado",
        "price": 1610.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Gris Reforzado_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1610.0
            }
        ]
    },
    {
        "id": 763,
        "name": "Bolsa Rollo Impeke 45x60 15u",
        "price": 1750.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Bolsa Rollo Impeke 45x60 15u_19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 764,
        "name": "Trapo De Piso Home Care Gris Super",
        "price": 1790.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Gris Super_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 765,
        "name": "Esponja Mortimer Doble Cara 1 U",
        "price": 1850.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Mortimer Doble Cara 1 U_12.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1850.0
            },
            {
                "date": "2026-04-08",
                "price": 1233.33
            },
            {
                "date": "2026-04-12",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 766,
        "name": "Trapo De Piso Home Care Blanco Reforzado",
        "price": 2160.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Blanco Reforzado_16.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2160.0
            }
        ]
    },
    {
        "id": 767,
        "name": "Alimento Para Gatos Whiskas Pasta Pollo 85 Gr",
        "price": 900.0,
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
            }
        ]
    },
    {
        "id": 768,
        "name": "Alimento Para Gatos Whiskas Pasta Pavo 85 Gr",
        "price": 900.0,
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
            }
        ]
    },
    {
        "id": 769,
        "name": "Alimento Para Gatos Whiskas Pasta Salmón 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Salmón_5.jpg",
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
            }
        ]
    },
    {
        "id": 770,
        "name": "Alimento Para Gatos Whiskas Pasta Gatitos 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Gatito_9.jpg",
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
            }
        ]
    },
    {
        "id": 771,
        "name": "Alimento Para Gatos Whiskas Pasta Sardina 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Sardin_13.jpg",
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
            }
        ]
    },
    {
        "id": 772,
        "name": "Alimento Para Gatos Whiskas Pasta Carne 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Carne _14.jpg",
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
            }
        ]
    },
    {
        "id": 773,
        "name": "Alimento Whiskas Para Gatos Souffle Adulto Carne X85g",
        "price": 900.0,
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
            }
        ]
    },
    {
        "id": 774,
        "name": "Alimento Humedo Cat Chow Ad Pollo",
        "price": 1237.5,
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
            }
        ]
    },
    {
        "id": 775,
        "name": "Alimento Sabrositos Gato Mix P,c,v 1k",
        "price": 2775.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Sabrositos Gato Mix Pcv 1k_10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3550.0
            },
            {
                "date": "2026-04-12",
                "price": 2775.0
            }
        ]
    },
    {
        "id": 776,
        "name": "Alimento Sabrositos Para Gatos Pescado X1kg",
        "price": 2850.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Sabrositos Para Gatos Pescado X_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2850.0
            }
        ]
    },
    {
        "id": 777,
        "name": "Alimento Para Perros Pedigree Carne 100 Gr",
        "price": 900.0,
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
            }
        ]
    },
    {
        "id": 778,
        "name": "Alimento Para Perros Pedigree Pollo 100 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Pollo 100 _5.jpg",
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
            }
        ]
    },
    {
        "id": 779,
        "name": "Alimento Para Perros Pedigree Carne Pouch Adulto 100 Gr",
        "price": 900.0,
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
            }
        ]
    },
    {
        "id": 780,
        "name": "Snacks Dentastix Razas Mediano Cuidado Oral",
        "price": 3900.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Snacks Dentastix Razas Mediano Cuidado O_9.jpg",
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
            }
        ]
    },
    {
        "id": 781,
        "name": "Alimento Dog Chow Adulto Medianos Y Grandes 1,5 Kg",
        "price": 4125.0,
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
            }
        ]
    },
    {
        "id": 782,
        "name": "Alimento Dog Chow Adulto Minis Y Pequeños 1,5 Kg",
        "price": 5287.5,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Adulto Minis Y Pequeño_14.jpg",
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
            }
        ]
    },
    {
        "id": 783,
        "name": "Alimento Para Perros Pedigree Adulto 3 Kg",
        "price": 8812.5,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Adulto 3 K_13.jpg",
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
            }
        ]
    },
    {
        "id": 784,
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
        "id": 785,
        "name": "Alimento Para Perros Pedigree Adulto Razas Pequeñas 3 Kg",
        "price": 9675.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Adulto Raz_10.jpg",
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
            }
        ]
    },
    {
        "id": 786,
        "name": "Alimento Dog Chow Longevidad 3k",
        "price": 10950.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Longevidad 3k_17.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 14600.0
            },
            {
                "date": "2026-04-12",
                "price": 10950.0
            }
        ]
    },
    {
        "id": 787,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_44.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 788,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_45.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 789,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 790,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 5200.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Clásico 500 Gr Casancrem_33.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-16",
                "price": 4800.0
            },
            {
                "date": "2026-04-02",
                "price": 8000.0
            },
            {
                "date": "2026-04-08",
                "price": 4800.0
            },
            {
                "date": "2026-04-12",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 791,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 5200.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Clásico 500 Gr Casancrem_34.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-16",
                "price": 4800.0
            },
            {
                "date": "2026-04-02",
                "price": 8000.0
            },
            {
                "date": "2026-04-08",
                "price": 4800.0
            },
            {
                "date": "2026-04-12",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 792,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 5200.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Clásico 500 Gr Casancrem_35.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-16",
                "price": 4800.0
            },
            {
                "date": "2026-04-02",
                "price": 8000.0
            },
            {
                "date": "2026-04-08",
                "price": 4800.0
            },
            {
                "date": "2026-04-12",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 793,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_22.jpg",
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
        "id": 794,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_23.jpg",
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
        "id": 795,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 8990.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Super Crem 14 Horma Mínimo 1 Kg Ma_24.jpg",
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
        "id": 796,
        "name": "Queso Cremoso Punta Del Agua Horma X Kg",
        "price": 12899.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Cremoso Punta Del Agua Horma X Kg_0.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 11490.0
            },
            {
                "date": "2026-04-12",
                "price": 12899.0
            }
        ]
    },
    {
        "id": 797,
        "name": "Rollo De Cocina Sol Mayor X 3 Unid",
        "price": 1250.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo De Cocina Sol Mayor X 3 Unid_5.jpg",
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
        "id": 798,
        "name": "Servilleta 80 Un Home Care",
        "price": 1500.0,
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
            }
        ]
    },
    {
        "id": 799,
        "name": "Rollo Cocina Doble Hoja 50 X 3 Un Home Care",
        "price": 1638.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Doble Hoja 50 X 3 Un Home C_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1673.0
            },
            {
                "date": "2026-03-28",
                "price": 2390.0
            },
            {
                "date": "2026-04-02",
                "price": 1792.5
            },
            {
                "date": "2026-04-08",
                "price": 1890.0
            },
            {
                "date": "2026-04-12",
                "price": 1638.0
            }
        ]
    },
    {
        "id": 800,
        "name": "Papel Higienico Simple Hoja 4x30 M Family Care",
        "price": 2160.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higienico Simple Hoja 4x30 M Famil_4.jpg",
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
            }
        ]
    },
    {
        "id": 801,
        "name": "Papel Higiénico Fresh Hoja Simple 30 M X 4 Un Higienol",
        "price": 2450.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higiénico Fresh Hoja Simple 30 M X_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2450.0
            }
        ]
    },
    {
        "id": 802,
        "name": "Rollo Cocina Clásico 50 Paños 3 Un Sussex",
        "price": 2800.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Clásico 50 Paños 3 Un Susse_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 803,
        "name": "Papel Higiénico Plus Fusión Doble Hoja 30 M X 4 Un Higienol",
        "price": 3000.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higiénico Plus Fusión Doble Hoja 3_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3000.0
            }
        ]
    },
    {
        "id": 804,
        "name": "Papel Higienico Max Aloe Vera X 4 Un Higienol",
        "price": 4500.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higienico Max Aloe Vera X 4 Un Hig_1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4500.0
            }
        ]
    },
    {
        "id": 805,
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
            }
        ]
    },
    {
        "id": 806,
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
        "id": 807,
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
        "id": 808,
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
        "id": 809,
        "name": "Muslo De Pollo",
        "price": 6699.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Muslo De Pollo_5.jpg",
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
        "id": 810,
        "name": "Pata De Pollo",
        "price": 7999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pata De Pollo_4.jpg",
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
        "id": 811,
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
            }
        ]
    },
    {
        "id": 812,
        "name": "Muslo De Pollo Cristal",
        "price": 12299.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Muslo De Pollo Cristal_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 12299.0
            }
        ]
    },
    {
        "id": 813,
        "name": "Pata De Pollo Cristal",
        "price": 13299.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pata De Pollo Cristal_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 13299.0
            }
        ]
    },
    {
        "id": 814,
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
        "id": 815,
        "name": "Salchichas X 6 Un - 190 Grs Cuisine & Co",
        "price": 1489.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas X 6 Un - 190 Grs Cuisine  Co_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1389.0
            },
            {
                "date": "2026-04-02",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 816,
        "name": "Queso Reggianito Rallado La Serenisima 35gr",
        "price": 1800.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Reggianito Rallado La Serenisima 3_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 817,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 818,
        "name": "Queso Blanco Light 290 Gr La Serenísima Clásico",
        "price": 2399.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Blanco Light 290 Gr La Serenísima _7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            },
            {
                "date": "2026-04-02",
                "price": 2350.0
            },
            {
                "date": "2026-04-08",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 819,
        "name": "Salchichas Granja Iris De Viena 6 U- 225 Gr",
        "price": 2500.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas Granja Iris De Viena 6 U- 225_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 820,
        "name": "Queso Untable La Serenísima Cremón 280 Gr",
        "price": 2689.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable La Serenísima Cremón 280 G_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2689.0
            }
        ]
    },
    {
        "id": 821,
        "name": "Queso Crema La Paulina Tradicional 290 Gr",
        "price": 3300.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema La Paulina Tradicional 290 G_13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 822,
        "name": "Queso Untable Finlandia Clásico 290 Gr",
        "price": 3850.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable Finlandia Clásico 290 Gr_14.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3850.0
            }
        ]
    },
    {
        "id": 823,
        "name": "Queso Untable Finlandia 290 Gr",
        "price": 3850.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable Finlandia 290 Gr_18.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3850.0
            }
        ]
    },
    {
        "id": 824,
        "name": "Queso Crema Light Tregar 280g",
        "price": 4050.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Light Tregar 280g_19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4050.0
            }
        ]
    },
    {
        "id": 825,
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
            }
        ]
    },
    {
        "id": 826,
        "name": "Sal Entrefina Dos Anclas 500 Gr",
        "price": 1400.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Entrefina Dos Anclas 500 Gr_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 827,
        "name": "Sal Gruesa Dos Anclas 500 Gr",
        "price": 1400.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa Dos Anclas 500 Gr_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 828,
        "name": "Sal Fina Celusal 500 Gr",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Celusal 500 Gr_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-20",
                "price": 1450.0
            },
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-20",
                "price": 1450.0
            },
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-20",
                "price": 1450.0
            },
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-21",
                "price": 1450.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-03-21",
                "price": 1450.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-31",
                "price": 1450.0
            },
            {
                "date": "2026-03-31",
                "price": 1750.0
            },
            {
                "date": "2026-03-31",
                "price": 1450.0
            },
            {
                "date": "2026-03-31",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-08",
                "price": 1450.0
            },
            {
                "date": "2026-04-08",
                "price": 1750.0
            },
            {
                "date": "2026-04-08",
                "price": 1450.0
            },
            {
                "date": "2026-04-08",
                "price": 1750.0
            },
            {
                "date": "2026-04-12",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            },
            {
                "date": "2026-04-12",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 829,
        "name": "Sal Entrefina Celusal 500 Gr",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Entrefina Celusal 500 Gr_9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 830,
        "name": "Sal Gruesa Celusal 500 Gr",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa Celusal 500 Gr_10.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 831,
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
            }
        ]
    },
    {
        "id": 832,
        "name": "Sal Fina Celusal 500 Gr",
        "price": 1750.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Celusal 500 Gr_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-20",
                "price": 1450.0
            },
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-20",
                "price": 1450.0
            },
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-20",
                "price": 1450.0
            },
            {
                "date": "2026-03-20",
                "price": 1750.0
            },
            {
                "date": "2026-03-21",
                "price": 1450.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-03-21",
                "price": 1450.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-28",
                "price": 1450.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            },
            {
                "date": "2026-03-31",
                "price": 1450.0
            },
            {
                "date": "2026-03-31",
                "price": 1750.0
            },
            {
                "date": "2026-03-31",
                "price": 1450.0
            },
            {
                "date": "2026-03-31",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-02",
                "price": 1450.0
            },
            {
                "date": "2026-04-02",
                "price": 1750.0
            },
            {
                "date": "2026-04-08",
                "price": 1450.0
            },
            {
                "date": "2026-04-08",
                "price": 1750.0
            },
            {
                "date": "2026-04-08",
                "price": 1450.0
            },
            {
                "date": "2026-04-08",
                "price": 1750.0
            },
            {
                "date": "2026-04-12",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            },
            {
                "date": "2026-04-12",
                "price": 1450.0
            },
            {
                "date": "2026-04-12",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 833,
        "name": "Sal Fina Celusal 100 Gr",
        "price": 2000.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Celusal 100 Gr_15.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 834,
        "name": "Sal Gruesa Celusal 1 Kg",
        "price": 2500.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa Celusal 1 Kg_8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2500.0
            }
        ]
    }
];