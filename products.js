const allProductsData = [
    {
        "id": 1,
        "name": "Vinagre de alcohol Carrefour classic 1 l.",
        "price": 1341.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Carrefour classic 1 l_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1431.0
            },
            {
                "date": "2026-04-18",
                "price": 1341.0
            }
        ]
    },
    {
        "id": 2,
        "name": "Vinagre de alcohol Casalta 1 l.",
        "price": 1565.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1565.0
            }
        ]
    },
    {
        "id": 3,
        "name": "Vinagre de alcohol Menoyo 1 l.",
        "price": 1689.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Menoyo 1 l_4.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 1689.0
            }
        ]
    },
    {
        "id": 4,
        "name": "Aceite de girasol Carrefour Classic pet 900 ml",
        "price": 2998.6,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Carrefour Classic pet _15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2998.6
            }
        ]
    },
    {
        "id": 5,
        "name": "Aceite de girasol Carrefour Classic  alto omega pet 900 cc.",
        "price": 3092.6,
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
            }
        ]
    },
    {
        "id": 6,
        "name": "Aceite de girasol Legitimo 900 cc.",
        "price": 3329.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Legitimo 900 cc_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3329.0
            }
        ]
    },
    {
        "id": 7,
        "name": "Aceite de girasol Pureza 900 cc.",
        "price": 3439.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Pureza 900 cc_12.jpg",
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
            }
        ]
    },
    {
        "id": 8,
        "name": "Aceite en aerosol Carrefour classic girasol 150 cc.",
        "price": 3539.9,
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
            },
            {
                "date": "2026-04-18",
                "price": 3539.9
            }
        ]
    },
    {
        "id": 9,
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
        "id": 10,
        "name": "Aceite en aerosol Natura 120 cc.",
        "price": 4135.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite en aerosol Natura 120 cc_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4135.0
            }
        ]
    },
    {
        "id": 11,
        "name": "Agua mineral sin gas Carrefour Classic 2 lts",
        "price": 1223.2,
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
            }
        ]
    },
    {
        "id": 12,
        "name": "Soda Bulnez 2,25 lts",
        "price": 1390.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Soda Bulnez 225 lts_9.jpg",
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
        "id": 14,
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
        "id": 15,
        "name": "Soda saldan sifón 2 lts",
        "price": 1699.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 16,
        "name": "Agua mineral sin gas Villavicencio 2 lts",
        "price": 2033.33,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Villavicencio 2 lts_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2033.33
            }
        ]
    },
    {
        "id": 17,
        "name": "Agua mineralizada sin gas Glaciar bajo sodio 2 lts",
        "price": 2106.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineralizada sin gas Glaciar bajo s_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2106.0
            }
        ]
    },
    {
        "id": 18,
        "name": "Agua mineral sin gas Villa del Sur 2,25 lts",
        "price": 2449.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Villa del Sur 225 l_6.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 19,
        "name": "Agua saborizada de pomelo Levité 2,25 lts",
        "price": 2542.5,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua saborizada de pomelo Levité 225 lts_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2542.5
            }
        ]
    },
    {
        "id": 20,
        "name": "Agua saborizada de manzana Levité 2,25 lts",
        "price": 2542.5,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua saborizada de manzana Levité 225 lt_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2542.5
            }
        ]
    },
    {
        "id": 21,
        "name": "Alimento húmedo para gato Pet's Class 85 g. adulto atún y sardinas",
        "price": 800.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Pets Class 85 _14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1200.0
            },
            {
                "date": "2026-04-18",
                "price": 800.0
            }
        ]
    },
    {
        "id": 22,
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
        "id": 23,
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
        "id": 24,
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
        "id": 25,
        "name": "Alimento seco para gato Gati pescado y salmón 1 kg",
        "price": 3585.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Gati pescado y s_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4780.0
            },
            {
                "date": "2026-04-18",
                "price": 3585.0
            }
        ]
    },
    {
        "id": 26,
        "name": "Alimento seco para gato Maintenance Criadores 1 kg",
        "price": 3854.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Maintenance Cria_12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3919.0
            },
            {
                "date": "2026-04-18",
                "price": 3854.0
            }
        ]
    },
    {
        "id": 27,
        "name": "Alimento seco para gato Raza 1 kg. carne, pescado y arroz",
        "price": 3911.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 3911.0
            }
        ]
    },
    {
        "id": 28,
        "name": "Alimento seco para gato Raza 1 kg. pescado",
        "price": 3911.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 3911.0
            }
        ]
    },
    {
        "id": 29,
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
        "id": 30,
        "name": "Alimento seco para gato Sabrositos mix p/v/c 3 kg",
        "price": 9790.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Sabrositos mix p_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7342.5
            },
            {
                "date": "2026-04-18",
                "price": 9790.0
            }
        ]
    },
    {
        "id": 31,
        "name": "Arroz parboil Lucchetti 500 g.",
        "price": 831.75,
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
            },
            {
                "date": "2026-04-18",
                "price": 831.75
            }
        ]
    },
    {
        "id": 32,
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
        "id": 33,
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
        "id": 34,
        "name": "Arroz largo fino Crucero 00000 1 kg.",
        "price": 1280.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino Crucero 00000 1 kg_10.jpg",
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
        "image": "images/carrefour/Arroz integral Gallo en bolsa 500 g_9.jpg",
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
        "name": "Arroz largo fino 00000 Lucchetti 1 kg.",
        "price": 1349.25,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino 00000 Lucchetti 1 kg_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1799.0
            },
            {
                "date": "2026-04-18",
                "price": 1349.25
            }
        ]
    },
    {
        "id": 38,
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
        "id": 39,
        "name": "Arroz parboil Lucchetti 1 kg.",
        "price": 1574.25,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz parboil Lucchetti 1 kg_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1574.25
            }
        ]
    },
    {
        "id": 40,
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
        "image": "images/carrefour/Carne picada Swift congelada 500 g_11.jpg",
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
        "image": "images/carrefour/Carnaza común Novillo x kg_8.jpg",
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
        "image": "images/carrefour/Osobuco x kg_10.jpg",
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
        "price": 13200.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Asado Novillo x kg_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13200.0
            }
        ]
    },
    {
        "id": 46,
        "name": "Tapa de nalga Novillo x kg.",
        "price": 13990.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Tapa de nalga Novillo x kg_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 15700.0
            },
            {
                "date": "2026-04-18",
                "price": 13990.0
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
        "name": "Paleta x kg.",
        "price": 15900.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Paleta x kg_7.jpg",
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
        "id": 49,
        "name": "Milanesa bola de lomo Novillo x kg.",
        "price": 15990.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images/carrefour/Milanesa bola de lomo Novillo x kg_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 15990.0
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
        "image": "images/carrefour/Copos de maíz 3 Arroyos en bolsa 150 g_12.jpg",
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
        "name": "Cereal Carrefour anillitos fruta sin gluten 200 g.",
        "price": 1901.9,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Cereal Carrefour anillitos fruta sin glu_9.jpg",
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
            }
        ]
    },
    {
        "id": 59,
        "name": "Copos de maíz Zucaritas azúcarados 240 g.",
        "price": 2392.5,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz Zucaritas azúcarados 240 g_14.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3190.0
            },
            {
                "date": "2026-04-18",
                "price": 2392.5
            }
        ]
    },
    {
        "id": 60,
        "name": "Aros de cereal frutado Kellogs froot loops en bolsa 195 g.",
        "price": 3066.75,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Aros de cereal frutado Kellogs froot loo_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3066.75
            }
        ]
    },
    {
        "id": 61,
        "name": "Cerveza blanca Quilmes Bajo cero en lata 473 ml",
        "price": 990.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 990.0
            }
        ]
    },
    {
        "id": 62,
        "name": "Cerveza light Michelob Ultra 473 ml",
        "price": 1362.5,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza light Michelob Ultra 473 ml_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1362.5
            }
        ]
    },
    {
        "id": 63,
        "name": "Cerveza blanca Quilmes sin alcohol 473 ml",
        "price": 1500.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes sin alcohol 473 m_2.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 64,
        "name": "Cerveza rubia Budweiser 473 ml",
        "price": 1725.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Budweiser 473 ml_9.jpg",
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
        "id": 68,
        "name": "Cerveza blanca sin alcohol Corona 0.0% 330 ml",
        "price": 2550.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca sin alcohol Corona 00 330_1.jpg",
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
            }
        ]
    },
    {
        "id": 69,
        "name": "Cerveza blanca Quilmes 1890 retornable 1 lt",
        "price": 2625.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes 1890 retornable 1_10.jpg",
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
        "name": "Aperitivo sin alcohol Gancia americano 0% en lata 473 ml",
        "price": 2100.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Gancia americano 0_6.jpg",
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
            }
        ]
    },
    {
        "id": 72,
        "name": "Aperitivo sin alcohol Serrano Terma Cero 1,35 lts",
        "price": 2699.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Terma Cero_4.jpg",
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
        "id": 73,
        "name": "Aperitivo sin alcohol Pomelo Terma Cero 1,35 lts",
        "price": 2699.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Pomelo Terma Cero _9.jpg",
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
        "id": 74,
        "name": "Aperitivo sin alcohol Limón Terma Cero 1,35 lts",
        "price": 2699.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Limón Terma Cero 1_10.jpg",
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
        "id": 75,
        "name": "Aperitivo sin alcohol Patagónico Terma Cero 1,35 lts",
        "price": 2699.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 2699.0
            }
        ]
    },
    {
        "id": 76,
        "name": "Aperitivo sin alcohol Limón Terma Light 1,75 lts",
        "price": 3149.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Limón Terma Light _5.jpg",
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
        "image": "images/carrefour/Vermouth Carpano Rosso 950 cc_8.jpg",
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
        "price": 2490.0,
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
            }
        ]
    },
    {
        "id": 82,
        "name": "Jamón cocido feteado Bulnez 150 grs",
        "price": 3400.0,
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
        "id": 87,
        "name": "Mortadela Paladini mini 300 g.",
        "price": 4649.0,
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
            }
        ]
    },
    {
        "id": 88,
        "name": "Jamón cocido Paladini 150 g.",
        "price": 4899.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido Paladini 150 g_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
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
        "name": "Gaseosa naranja Mirinda 2,25 lts",
        "price": 1837.5,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa naranja Mirinda 225 lts_11.jpg",
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
        "id": 93,
        "name": "Gaseosa pomelo Cunnignton suave sin tacc 2,25 lts",
        "price": 2499.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa pomelo Cunnignton suave sin tacc_13.jpg",
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
        "id": 94,
        "name": "Gaseosa lima limón 7 Up sin azúcar 1,5 lts",
        "price": 2775.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 2775.0
            }
        ]
    },
    {
        "id": 95,
        "name": "Gaseosa cola Pepsi Black pet 1,5 lts",
        "price": 2775.0,
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
            }
        ]
    },
    {
        "id": 96,
        "name": "Gaseosa tónica Paso de los Toros 1,5 lts",
        "price": 2775.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa tónica Paso de los Toros 15 lts_14.jpg",
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
        "id": 97,
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
        "id": 98,
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
        "id": 99,
        "name": "Gaseosa cola Pepsi Black pet 2 lts",
        "price": 3150.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 3150.0
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
        "price": 910.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 910.0
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
        "name": "Medallón de carne sin tacc Good Mark en caja 4 uni",
        "price": 5857.5,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de carne sin tacc Good Mark en _13.jpg",
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
            }
        ]
    },
    {
        "id": 105,
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
        "id": 106,
        "name": "Hamburguesa Swift casera 2 u.",
        "price": 6900.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa Swift casera 2 u_9.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 6900.0
            }
        ]
    },
    {
        "id": 107,
        "name": "Hamburguesa Swift clásica 4 u.",
        "price": 8099.0,
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
        "price": 10135.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa de carne Unión ganadera 4 un_15.jpg",
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
            }
        ]
    },
    {
        "id": 111,
        "name": "Harina de Trigo 000 Caserita x 1 kg",
        "price": 899.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de Trigo 000 Caserita x 1 kg_2.jpg",
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
        "price": 1251.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Pan rallado Carrefour classic 500 g_15.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1161.0
            },
            {
                "date": "2026-04-18",
                "price": 1251.0
            }
        ]
    },
    {
        "id": 114,
        "name": "Harina 0000 Chacabuco 1 kg.",
        "price": 1289.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina 0000 Chacabuco 1 kg_4.jpg",
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
        "id": 116,
        "name": "Harina de trigo Pureza 0000 1 kg.",
        "price": 1350.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de trigo Pureza 0000 1 kg_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 117,
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
        "id": 118,
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
        "id": 119,
        "name": "Polenta instantanea Prestopronta en bolsa 490 g.",
        "price": 1500.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Polenta instantanea Prestopronta en bols_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 120,
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
        "id": 123,
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
        "id": 124,
        "name": "Bebida energizante Speed Zero Sugar 473 ml",
        "price": 2785.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Speed Zero Sugar 473 _9.jpg",
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
        "id": 125,
        "name": "Bebida energizante Red Bull 250 ml",
        "price": 2849.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Red Bull 250 ml_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2849.0
            }
        ]
    },
    {
        "id": 126,
        "name": "Bebida energizante Monster Peachy Keen 473 ml",
        "price": 3100.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Monster Peachy Keen 4_10.jpg",
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
        "price": 319.33,
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
            },
            {
                "date": "2026-04-18",
                "price": 319.33
            }
        ]
    },
    {
        "id": 132,
        "name": "Jugo en polvo Tang naranja mango 15 g.",
        "price": 319.33,
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
            },
            {
                "date": "2026-04-18",
                "price": 319.33
            }
        ]
    },
    {
        "id": 133,
        "name": "Jugo en polvo Tang multifruta 15 g.",
        "price": 319.33,
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
            },
            {
                "date": "2026-04-18",
                "price": 319.33
            }
        ]
    },
    {
        "id": 134,
        "name": "Jugo en polvo Tang limonada dulce 15 g.",
        "price": 319.33,
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
            },
            {
                "date": "2026-04-18",
                "price": 319.33
            }
        ]
    },
    {
        "id": 135,
        "name": "Jugo en Polvo Clight Naranja Dulce 7,5 grs",
        "price": 326.0,
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
            }
        ]
    },
    {
        "id": 136,
        "name": "Jugo en Polvo Clight Manzana Deliciosa 7 grs",
        "price": 326.0,
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
            }
        ]
    },
    {
        "id": 137,
        "name": "Jugo en Polvo Clight Limonada Arandanos 7,5 grs",
        "price": 326.0,
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
            }
        ]
    },
    {
        "id": 138,
        "name": "Jugo en Polvo Clight Naranja Durazno 7,5 grs",
        "price": 326.0,
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
            }
        ]
    },
    {
        "id": 139,
        "name": "Jugo en Polvo Clight Limonada 8 grs",
        "price": 326.0,
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
            }
        ]
    },
    {
        "id": 140,
        "name": "Jugo en Polvo Clight Pomelo Rosado 8 grs",
        "price": 326.0,
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
            }
        ]
    },
    {
        "id": 141,
        "name": "Leche ulta parcial descremada Carrefour classic sachet 1 lt.",
        "price": 1462.8,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche ulta parcial descremada Carrefour _6.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            },
            {
                "date": "2026-04-18",
                "price": 1462.8
            }
        ]
    },
    {
        "id": 142,
        "name": "Leche ultra entera Carrefour classic sachet 1 lt.",
        "price": 1462.8,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche ultra entera Carrefour classic sac_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            },
            {
                "date": "2026-04-18",
                "price": 1462.8
            }
        ]
    },
    {
        "id": 143,
        "name": "Leche UAT parcialmente descremada Carrefour classic brik 1 lt.",
        "price": 1776.6,
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
            }
        ]
    },
    {
        "id": 144,
        "name": "Leche UAT entera Carrefour classic brik 1 lt.",
        "price": 1776.6,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche UAT entera Carrefour classic brik _3.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            },
            {
                "date": "2026-04-18",
                "price": 1776.6
            }
        ]
    },
    {
        "id": 145,
        "name": "Leche parcialmente descremada UAT Carrefour classic tetra 1 lt.",
        "price": 1776.6,
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
            }
        ]
    },
    {
        "id": 146,
        "name": "Leche entera UAT Carrefour classic tetra 1 lt.",
        "price": 1776.6,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche entera UAT Carrefour classic tetra_13.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1682.6
            },
            {
                "date": "2026-04-18",
                "price": 1776.6
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
        "image": "images/carrefour/Leche La Serenísima ultra parc descremad_12.jpg",
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
        "name": "Leche La Serenísima UAT parc descremada liviana 1% pet 1 lt",
        "price": 2021.25,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Leche La Serenísima UAT parc descremada _15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2021.25
            }
        ]
    },
    {
        "id": 151,
        "name": "Limpiador multiuso Multimax para diluir lavanda (rinde 5 litros) 150 ml.",
        "price": 1800.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 152,
        "name": "Limpiador multiuso Multimax para diluir cherry (rinde 5 litros) 150 ml.",
        "price": 1800.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _9.jpg",
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
        "id": 153,
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
        "id": 154,
        "name": "Limpiador líquido aromatizante Poett frescura de lavanda 900 ml.",
        "price": 2279.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido aromatizante Poett fre_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2279.0
            }
        ]
    },
    {
        "id": 155,
        "name": "Limpiador Vidrios y Multiuso Cif Expert Doypack 450 ml",
        "price": 2335.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Vidrios y Multiuso Cif Expert _3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2335.0
            }
        ]
    },
    {
        "id": 156,
        "name": "Limpiador desinfectante Ayudín lavanda 1.8 l.",
        "price": 2765.75,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador desinfectante Ayudín lavanda 1_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2765.75
            }
        ]
    },
    {
        "id": 157,
        "name": "Limpiador Multisuperficies Cif Original Ultra Brillo Doypack 380 ml",
        "price": 3079.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Multisuperficies Cif Original _12.jpg",
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
            }
        ]
    },
    {
        "id": 158,
        "name": "Limpiador Cif repuesto pisos plastificados 450 cc.",
        "price": 3235.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Cif repuesto pisos plastificad_15.jpg",
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
        "id": 159,
        "name": "Limpiador líquido Procenex pisos lavanda 1.8 l.",
        "price": 3890.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos lavanda_2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3890.0
            }
        ]
    },
    {
        "id": 160,
        "name": "Limpiador líquido Procenex pisos marina 1.8 l.",
        "price": 3890.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos marina _10.jpg",
        "history": [
            {
                "date": "2026-04-18",
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
        "image": "images/carrefour/Alimento seco para perro Raza 15 kg adul_13.jpg",
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
        "image": "images/carrefour/Alimento seco para perro Raza 3 kg adult_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 6819.0
            }
        ]
    },
    {
        "id": 166,
        "name": "Alimento seco para perro Dog Selection razas pequeñas 3 kg",
        "price": 7949.25,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Dog Selection r_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7949.25
            }
        ]
    },
    {
        "id": 167,
        "name": "Alimento seco para perro Voraz adultos sabor carne 15 kg",
        "price": 17400.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Voraz adultos s_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 21799.0
            },
            {
                "date": "2026-04-18",
                "price": 17400.0
            }
        ]
    },
    {
        "id": 168,
        "name": "Alimento seco para perro Matute 15 kg. adultos",
        "price": 22390.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Matute 15 kg ad_3.jpg",
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
        "id": 169,
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
        "id": 170,
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
        "id": 171,
        "name": "Pañales talle XXG Toddler Deluxe 28 uni",
        "price": 9735.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle XXG Toddler Deluxe 28 uni_2.jpg",
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
        "id": 172,
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
        "id": 173,
        "name": "Pañales talle M Toddler Deluxe 46 uni",
        "price": 9735.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle M Toddler Deluxe 46 uni_11.jpg",
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
        "id": 174,
        "name": "Pañal Huggies Flexi Comfort talle RN edición limitada 34 uni",
        "price": 10271.4,
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
            }
        ]
    },
    {
        "id": 175,
        "name": "Pañal Carrefour baby talle XG hiperpack 28 uni",
        "price": 10330.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Carrefour baby talle XG hiperpack _1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 10330.6
            }
        ]
    },
    {
        "id": 176,
        "name": "Pañales Huggies Natural Care RN 34 uni",
        "price": 11369.4,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Huggies Natural Care RN 34 uni_0.jpg",
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
            }
        ]
    },
    {
        "id": 177,
        "name": "Pañales Huggies Natural Care P 30 uni",
        "price": 11369.4,
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
            },
            {
                "date": "2026-04-18",
                "price": 11369.4
            }
        ]
    },
    {
        "id": 178,
        "name": "Pañales talle XXG Huggies Protect Plus 30 uni",
        "price": 11820.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle XXG Huggies Protect Plus 3_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 11820.0
            }
        ]
    },
    {
        "id": 179,
        "name": "Pañal Huggies Protect Plus G 40 uni",
        "price": 11831.4,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Protect Plus G 40 uni_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 11831.4
            }
        ]
    },
    {
        "id": 180,
        "name": "Pañal Huggies Protect Plus M 48 uni",
        "price": 11831.4,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Protect Plus M 48 uni_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 11831.4
            }
        ]
    },
    {
        "id": 181,
        "name": "Papel higie´nico Bulnez hoja simple x4 30 mts",
        "price": 1790.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higienico Bulnez hoja simple x4 30_14.jpg",
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
        "id": 182,
        "name": "Papel higiénico hoja simple Carrefour Essential 4 x 30 mts",
        "price": 1810.9,
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
            }
        ]
    },
    {
        "id": 183,
        "name": "Papel higiénico doble hoja Elegante 4 x 30 m.",
        "price": 1999.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 184,
        "name": "Papel higiénico Higienol Fresh hoja simple 30 mts 4 uni",
        "price": 2355.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 2355.0
            }
        ]
    },
    {
        "id": 185,
        "name": "Papel higiénico doble hoja Carrefour Essential 4 x 30 mts",
        "price": 2780.7,
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
            }
        ]
    },
    {
        "id": 186,
        "name": "Papel higiénico Felpita blanquísimo hoja simple 4 x 80 m.",
        "price": 4196.25,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Felpita blanquísimo hoja_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4196.25
            }
        ]
    },
    {
        "id": 187,
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
        "id": 188,
        "name": "Papel higiénico Higienol Premium doble hoja 30 mts 4 uni",
        "price": 4719.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Premium doble h_13.jpg",
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
        "id": 189,
        "name": "Papel higiénico hoja simple Campanita soft 4 x 80 m.",
        "price": 4949.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico hoja simple Campanita so_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4949.0
            }
        ]
    },
    {
        "id": 190,
        "name": "Papel higiénico hoja simple Carrefour Essential x4 80 mts.",
        "price": 5142.8,
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
        "name": "Pollo super dry Granja Tres Arroyos x kg.",
        "price": 8400.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pollo super dry Granja Tres Arroyos x kg_13.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 8400.0
            }
        ]
    },
    {
        "id": 193,
        "name": "Cuarto trasero de pollo al vacio Cresta roja.",
        "price": 8800.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Cuarto trasero de pollo al vacio Cresta _14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 8800.0
            }
        ]
    },
    {
        "id": 194,
        "name": "Cuarto Trasero El Mercado x kg.",
        "price": 9150.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Cuarto Trasero El Mercado x kg_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 9150.0
            }
        ]
    },
    {
        "id": 195,
        "name": "Cuarto trasero al vacio x kg.",
        "price": 9180.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Cuarto trasero al vacio x kg_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 9180.0
            }
        ]
    },
    {
        "id": 196,
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
        "id": 197,
        "name": "Muslo El Mercado x kg.",
        "price": 9500.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslo El Mercado x kg_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 9500.0
            }
        ]
    },
    {
        "id": 198,
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
        "id": 199,
        "name": "Patas de pollo al vacio Que rico x kg.",
        "price": 10800.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Patas de pollo al vacio Que rico x kg_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10800.0
            }
        ]
    },
    {
        "id": 200,
        "name": "Pechuga al vacio Cresta roja x kg.",
        "price": 17100.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pechuga al vacio Cresta roja x kg_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 17100.0
            }
        ]
    },
    {
        "id": 201,
        "name": "Queso crema Tonadita cremette light 290 g.",
        "price": 2249.25,
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
        "price": 2404.35,
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
            },
            {
                "date": "2026-04-18",
                "price": 2404.35
            }
        ]
    },
    {
        "id": 203,
        "name": "Queso blanco light La SerenÍsima Clásico 290 grs",
        "price": 2404.35,
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
            },
            {
                "date": "2026-04-18",
                "price": 2404.35
            }
        ]
    },
    {
        "id": 204,
        "name": "Queso La Serenísima cremón light pote 280 g.",
        "price": 2812.5,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso La Serenísima cremón light pote 28_5.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 2812.5
            }
        ]
    },
    {
        "id": 205,
        "name": "La Paulina queso crema tracidional 290 grs",
        "price": 3229.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/La Paulina queso crema tracidional 290 g_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3229.0
            }
        ]
    },
    {
        "id": 206,
        "name": "Queso untable Finlandia light pote 290 g.",
        "price": 5135.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso untable Finlandia light pote 290 g_3.jpg",
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
        "id": 207,
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
        "id": 208,
        "name": "Queso crema clásico Casancrem 290 grs",
        "price": 5155.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema clásico Casancrem 290 grs_4.jpg",
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
            }
        ]
    },
    {
        "id": 209,
        "name": "La Paulina queso reggianito rallado 150 grs",
        "price": 5639.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/La Paulina queso reggianito rallado 150 _1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5639.0
            }
        ]
    },
    {
        "id": 210,
        "name": "Queso rallado La Serenísima reggianito flow pack 175 g.",
        "price": 7359.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso rallado La Serenísima reggianito f_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7359.0
            }
        ]
    },
    {
        "id": 211,
        "name": "Sal fina Carrefour Classic en bolsa 500 grs",
        "price": 991.9,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Carrefour Classic en bolsa 500 _3.jpg",
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
        "id": 212,
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
        "id": 213,
        "name": "Sal gruesa Carrefour Classic 1 kg",
        "price": 1370.8,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Carrefour Classic 1 kg_4.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1370.8
            }
        ]
    },
    {
        "id": 214,
        "name": "Sal gruesa Bulnez en bolsa 1 kg.",
        "price": 1390.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Bulnez en bolsa 1 kg_2.jpg",
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
        "id": 216,
        "name": "Sal entrefina Bulnez en bolsa 1 kg.",
        "price": 1490.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal entrefina Bulnez en bolsa 1 kg_7.jpg",
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
        "id": 217,
        "name": "Sal fina Celusal 100 g.",
        "price": 1849.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Celusal 100 g_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1849.0
            }
        ]
    },
    {
        "id": 218,
        "name": "Sal gruesa Celusal paquete 1 kg.",
        "price": 2445.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Celusal paquete 1 kg_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2445.0
            }
        ]
    },
    {
        "id": 219,
        "name": "Sal entrefina Celusal parrilla paquete 1 kg.",
        "price": 2445.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal entrefina Celusal parrilla paquete 1_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2445.0
            }
        ]
    },
    {
        "id": 220,
        "name": "Sal gruesa Dos Anclas en paquete 1 kg.",
        "price": 2459.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Dos Anclas en paquete 1 kg_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2459.0
            }
        ]
    },
    {
        "id": 221,
        "name": "Palitos salados Carrefour classic 115 g.",
        "price": 1161.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Palitos salados Carrefour classic 115 g_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1161.0
            },
            {
                "date": "2026-03-28",
                "price": 1071.0
            },
            {
                "date": "2026-04-18",
                "price": 1161.0
            }
        ]
    },
    {
        "id": 222,
        "name": "Mani pelado salado Carrefour classic 115 g.",
        "price": 1173.9,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Mani pelado salado Carrefour classic 115_6.jpg",
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
        "name": "Aritos de arroz Dos Hermanos crema y cebolla 80 g.",
        "price": 1500.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Aritos de arroz Dos Hermanos crema y ceb_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1549.0
            },
            {
                "date": "2026-04-18",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 224,
        "name": "Palitos Krachitos salados 110 g.",
        "price": 1519.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Palitos Krachitos salados 110 g_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1519.0
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
        "image": "images/carrefour/Galletitas crackers Rex original 125 g_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 227,
        "name": "Papas fritas Bulnez sabor original en tubo 100 grs",
        "price": 2190.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Bulnez sabor original en tu_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 228,
        "name": "Papas fritas Bulnez sabor queso y cebolla en tubo 100 grs",
        "price": 2190.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Bulnez sabor queso y ceboll_10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 229,
        "name": "Papas fritas Carrefour classic corte tradicional 150 g.",
        "price": 2483.1,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Carrefour classic corte tra_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2483.1
            }
        ]
    },
    {
        "id": 230,
        "name": "Papas fritas Carrefour classic corte americano 150 g.",
        "price": 2650.5,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Carrefour classic corte ame_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2650.5
            }
        ]
    },
    {
        "id": 231,
        "name": "Yogur Griego sabor vainilla Yogurísimo 140 grs",
        "price": 1443.75,
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
            },
            {
                "date": "2026-04-18",
                "price": 1443.75
            }
        ]
    },
    {
        "id": 232,
        "name": "Yogur Griego sabor frutilla Yogurísimo 140 grs",
        "price": 1443.75,
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
            },
            {
                "date": "2026-04-18",
                "price": 1443.75
            }
        ]
    },
    {
        "id": 233,
        "name": "Yogur entero natural Tregar sin azúcar en pote 140 g.",
        "price": 1850.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 234,
        "name": "Yogur bebible entero Carrefour Classic sabor frutilla 900 ml",
        "price": 2006.4,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur bebible entero Carrefour Classic s_12.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2294.4
            },
            {
                "date": "2026-04-18",
                "price": 2006.4
            }
        ]
    },
    {
        "id": 235,
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
        "id": 236,
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
        "id": 237,
        "name": "Yogur Griego natural sin endulzar Yogurísimo 190 grs",
        "price": 2159.25,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego natural sin endulzar Yogurí_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2159.25
            }
        ]
    },
    {
        "id": 238,
        "name": "Yogur Griego natural endulzado Yogurísimo 190 grs",
        "price": 2159.25,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego natural endulzado Yogurísim_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2159.25
            }
        ]
    },
    {
        "id": 239,
        "name": "Yogur cremoso Milkaut sabor natural en pote 180 g.",
        "price": 2179.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur cremoso Milkaut sabor natural en p_7.jpg",
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
        "id": 240,
        "name": "Yogur Griego con Frutilla Yogurísimo 125 grs",
        "price": 2257.5,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego con Frutilla Yogurísimo 125_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2257.5
            }
        ]
    },
    {
        "id": 241,
        "name": "Aceite Mezcla Cocinero 900cc",
        "price": 2316.75,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Cocinero 900cc_13.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 2316.75
            }
        ]
    },
    {
        "id": 242,
        "name": "Aceite De Girasol Cocinero 900 Ml",
        "price": 2916.75,
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
            },
            {
                "date": "2026-04-18",
                "price": 2916.75
            }
        ]
    },
    {
        "id": 243,
        "name": "Aceite Mezcla Siglo De Oro 900 Ml",
        "price": 2979.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Siglo De Oro 900 Ml_15.jpg",
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
        "id": 244,
        "name": "Aceite De Girasol Legitimo 900 Ml",
        "price": 3779.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 3779.0
            }
        ]
    },
    {
        "id": 245,
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
        "id": 246,
        "name": "Aceite De Girasol Natural 900 Ml",
        "price": 4199.0,
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
        "image": "images/changomas/Aceite De Girasol Pureza 900 Ml_21.jpg",
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
        "image": "images/changomas/Aceite En Aerosol Natura Con Aceite De G_3.jpg",
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
        "name": "Aceite De Girasol Cocinero 1.5 L",
        "price": 4619.25,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Cocinero 15 L_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4619.25
            }
        ]
    },
    {
        "id": 250,
        "name": "Aceite Fritolim Cocinero Sabor Manteca 120 G",
        "price": 4899.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Fritolim Cocinero Sabor Manteca 1_16.jpg",
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
        "id": 251,
        "name": "Agua Mineral Sin Gas Sierra De Los Padres 2 Lt",
        "price": 999.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Sin Gas Sierra De Los Padre_16.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1789.0
            },
            {
                "date": "2026-04-18",
                "price": 999.0
            }
        ]
    },
    {
        "id": 252,
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
        "id": 253,
        "name": "Agua Saborizada H2oh! Still Sabor Limoneto 2 L",
        "price": 1524.5,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Saborizada H2oh Still Sabor Limonet_21.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1524.5
            }
        ]
    },
    {
        "id": 254,
        "name": "Agua Saborizada H2oh! Still Sabor Pomelo 2 L",
        "price": 1524.5,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Saborizada H2oh Still Sabor Pomelo _23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1524.5
            }
        ]
    },
    {
        "id": 255,
        "name": "Soda Ivess 2,25 L",
        "price": 1599.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 256,
        "name": "Agua Mineralizada Cellier 2 Lts",
        "price": 1599.0,
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
            }
        ]
    },
    {
        "id": 257,
        "name": "Agua Mineral Ivess Sin Gas Baja En Sodio 2, 255 L",
        "price": 1649.0,
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
        "name": "Agua Cellier Favaloro Con Gas 2 L",
        "price": 1749.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1749.0
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
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Gato Atun Sardina Pets C_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 262,
        "name": "Alimento Humedo Gato Salmon Rosado Pets Class X85gr",
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Gato Salmon Rosado Pets _16.jpg",
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
        "id": 263,
        "name": "Alimento Humedo  Gato Carne Pets Class X 85 Grs",
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo  Gato Carne Pets Class X_18.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 264,
        "name": "Alimento Húmedo Gato Frutos Mar Pets Class X85gr",
        "price": 1159.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Húmedo Gato Frutos Mar Pets Cla_21.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 265,
        "name": "Alimento Adulto Salmon Pouch Whiskas 85 Gr",
        "price": 1299.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 266,
        "name": "Alimento Adulto Carne Pouch Whiskas 85 Gr",
        "price": 1299.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Carne Pouch Whiskas 85 G_8.jpg",
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
            }
        ]
    },
    {
        "id": 267,
        "name": "Alimento Adulto Pollo Pouch Whiskas 85 Gr",
        "price": 1299.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Pollo Pouch Whiskas 85 G_9.jpg",
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
            }
        ]
    },
    {
        "id": 268,
        "name": "Alimento Adulto Sardina Pouch Whiskas 85 Gr",
        "price": 1299.0,
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
            }
        ]
    },
    {
        "id": 269,
        "name": "Alimento Gato Pavo Pocuh Whiskas 85 Gr",
        "price": 1299.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Gato Pavo Pocuh Whiskas 85 Gr_12.jpg",
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
            }
        ]
    },
    {
        "id": 270,
        "name": "Alimento De Gatos Cat Chow Sabor Pollo 85 G",
        "price": 1609.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento De Gatos Cat Chow Sabor Pollo 8_23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1609.0
            }
        ]
    },
    {
        "id": 271,
        "name": "Alimento Humedo  Perro Carne Pets Class X 100 Grs",
        "price": 1159.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo  Perro Carne Pets Class _12.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 272,
        "name": "Alimento Humedo   Perro Pollo Pets Clas X100gr",
        "price": 1159.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo   Perro Pollo Pets Clas _15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 273,
        "name": "Alimento Humedo Perro Pouch Adulto Pedigree 100 Gr",
        "price": 1299.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo Perro Pouch Adulto Pedig_5.jpg",
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
            }
        ]
    },
    {
        "id": 274,
        "name": "Alimento Perro  Razas Grandes Pollo Pedigree 100 Gr",
        "price": 1299.0,
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
            }
        ]
    },
    {
        "id": 275,
        "name": "Alimento Perro Razas Grandes Carne Pedigree 100 Gr",
        "price": 1299.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Perro Razas Grandes Carne Pedig_8.jpg",
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
            }
        ]
    },
    {
        "id": 276,
        "name": "Alimento Adulto Raza Peq Carne Pouch Pedigree 100 Gr",
        "price": 1299.0,
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
            }
        ]
    },
    {
        "id": 277,
        "name": "Alimento Adulto Raza Peq Pollo Pedigree Pouch 100 Gr",
        "price": 1299.0,
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
            }
        ]
    },
    {
        "id": 278,
        "name": "Snack Biscrok Multi Pedigree X 100gr",
        "price": 2039.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Snack Biscrok Multi Pedigree X 100gr_19.jpg",
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
            }
        ]
    },
    {
        "id": 279,
        "name": "Alimento Adulto Carne Lata Pedigree 340 Gr",
        "price": 3999.0,
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
            }
        ]
    },
    {
        "id": 280,
        "name": "Snack Dentastix Razas Pequeñas Pedigree X 7un",
        "price": 4319.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Snack Dentastix Razas Pequeñas Pedigree _23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4319.0
            }
        ]
    },
    {
        "id": 281,
        "name": "Arroz Largo Fino Maximo 500gr",
        "price": 779.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Maximo 500gr_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 779.0
            }
        ]
    },
    {
        "id": 282,
        "name": "Arroz Largo Fino Lucchetti 500gr",
        "price": 969.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Lucchetti 500gr_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 969.0
            }
        ]
    },
    {
        "id": 283,
        "name": "Arroz Largo Fino Dos Hermanos 1 Kg",
        "price": 999.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 999.0
            }
        ]
    },
    {
        "id": 284,
        "name": "Arroz Gallo Oro 500 G",
        "price": 1319.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Gallo Oro 500 G_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1319.0
            }
        ]
    },
    {
        "id": 285,
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
        "id": 286,
        "name": "Arroz Largo Fino Carogran 00000 X 1 Kg",
        "price": 1489.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Carogran 00000 X 1 Kg_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 287,
        "name": "Arroz Blanco Largo Fino Molinos Ala 1 Kg",
        "price": 1789.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Blanco Largo Fino Molinos Ala 1 Kg_4.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1789.0
            }
        ]
    },
    {
        "id": 288,
        "name": "Arroz Largo Fino Lucchetti 1kg",
        "price": 1799.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Lucchetti 1kg_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1799.0
            }
        ]
    },
    {
        "id": 289,
        "name": "Arroz Dos Hermanos Doble Carolina 500 G",
        "price": 1839.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Dos Hermanos Doble Carolina 500 G_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1839.0
            }
        ]
    },
    {
        "id": 290,
        "name": "Arroz Gallo Doble Carolina 500 G",
        "price": 1869.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Gallo Doble Carolina 500 G_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1869.0
            }
        ]
    },
    {
        "id": 291,
        "name": "Bondiola Congelada 2.5 Kg",
        "price": 6989.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Bondiola Congelada 25 Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6989.0
            }
        ]
    },
    {
        "id": 292,
        "name": "Carne Picada Swift Congelada 500 G",
        "price": 7239.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carne Picada Swift Congelada 500 G_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7239.0
            }
        ]
    },
    {
        "id": 293,
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
        "id": 294,
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
        "id": 295,
        "name": "Chorizo Tradicional Campo Austral Tradicional Al Vacio 400 Gr",
        "price": 11089.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Chorizo Tradicional Campo Austral Tradic_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11089.0
            }
        ]
    },
    {
        "id": 296,
        "name": "Matambre De Novillito Envasado Al Vacío 1.5 Kg",
        "price": 12389.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Matambre De Novillito Envasado Al Vacío _10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 12389.0
            }
        ]
    },
    {
        "id": 297,
        "name": "Asado De Tira De Novillito 1 Kg",
        "price": 12389.0,
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
            }
        ]
    },
    {
        "id": 298,
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
        "id": 299,
        "name": "Paleta De Novillito Envasado Al Vacío 1.2 Kg",
        "price": 15999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Paleta De Novillito Envasado Al Vacío 12_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 15999.0
            }
        ]
    },
    {
        "id": 300,
        "name": "Tapa De Asado De Novillito Envasado Al Vacío 1,2 Kg",
        "price": 16499.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Tapa De Asado De Novillito Envasado Al V_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 16499.0
            }
        ]
    },
    {
        "id": 301,
        "name": "Barritas De Cereal Yogurt Frutilla Light Cereal Mix 26gr",
        "price": 1129.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Barritas De Cereal Yogurt Frutilla Light_16.jpg",
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
        "name": "Copos De Maíz Granix 160gr",
        "price": 1274.25,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Copos De Maíz Granix 160gr_11.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1699.0
            },
            {
                "date": "2026-04-18",
                "price": 1274.25
            }
        ]
    },
    {
        "id": 303,
        "name": "Cereal Azucarado Skarchitos 240 Gr",
        "price": 1296.75,
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
            }
        ]
    },
    {
        "id": 304,
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
        "name": "Copos De Cereal Granix 400 Gr",
        "price": 1874.25,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Copos De Cereal Granix 400 Gr_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1874.25
            }
        ]
    },
    {
        "id": 307,
        "name": "Cereal Avena Y Trigo Con Frutilla Granix 180 Gr",
        "price": 1874.25,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Avena Y Trigo Con Frutilla Granix_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1874.25
            }
        ]
    },
    {
        "id": 308,
        "name": "Cereal Check Bastoncitos Integrales De Salvado 250 G",
        "price": 1999.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 309,
        "name": "Cereales Formis Estrellas Sabor Frutal 145 G",
        "price": 2059.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereales Formis Estrellas Sabor Frutal 1_20.jpg",
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
        "image": "images/changomas/Barra Proteica Integra De Maní Chocolate_19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 311,
        "name": "Cerveza En Lata Brahma 354ml",
        "price": 859.33,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza En Lata Brahma 354ml_17.jpg",
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
            }
        ]
    },
    {
        "id": 312,
        "name": "Cerveza Rubia Quilmes Bajocero 473 Ml",
        "price": 986.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes Bajocero 473 Ml_13.jpg",
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
            }
        ]
    },
    {
        "id": 313,
        "name": "Cerveza Rubia Quilmes 1890 473 Cc",
        "price": 1266.0,
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
            }
        ]
    },
    {
        "id": 314,
        "name": "Cerveza Rubia Schneider 473 Ml",
        "price": 1599.33,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider 473 Ml_10.jpg",
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
            }
        ]
    },
    {
        "id": 315,
        "name": "Cerveza Rubia Amstel Lager 473 Ml",
        "price": 1666.0,
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
            }
        ]
    },
    {
        "id": 316,
        "name": "Cerveza Rubia Imperial 473 Ml",
        "price": 1899.33,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Imperial 473 Ml_23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1899.33
            }
        ]
    },
    {
        "id": 317,
        "name": "Cerveza Negra Imperial  Stout 473 Ml",
        "price": 2016.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Negra Imperial  Stout 473 Ml_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2016.0
            }
        ]
    },
    {
        "id": 318,
        "name": "Cerveza Rubia Imperial Ipa 473 Ml",
        "price": 2016.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Imperial Ipa 473 Ml_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2016.0
            }
        ]
    },
    {
        "id": 319,
        "name": "Cerveza Rubia Heineken Sin Alcohol 473 Cc",
        "price": 2066.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Heineken Sin Alcohol 473 C_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2066.0
            }
        ]
    },
    {
        "id": 320,
        "name": "Cerveza Rubia Corona Cero Alcohol 330 Ml",
        "price": 2266.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Corona Cero Alcohol 330 Ml_9.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2379.3
            },
            {
                "date": "2026-04-18",
                "price": 2266.0
            }
        ]
    },
    {
        "id": 321,
        "name": "Gaseosa Crush Sin Azúcar Lima-Limón 2,25 L",
        "price": 1439.2,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Crush Sin Azúcar Lima-Limón 225 _22.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1439.2
            }
        ]
    },
    {
        "id": 322,
        "name": "Gaseosa Cunnington Pomelo Classic 2.25 L",
        "price": 1599.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Pomelo Classic 225 L_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 323,
        "name": "Gaseosa Cunnington Cola Classic 2.25 L",
        "price": 1599.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Cola Classic 225 L_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 324,
        "name": "Gaseosa Cunnington Indian Tonic Classic 2.25 L",
        "price": 1599.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Indian Tonic Classic _23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 325,
        "name": "Gaseosa Pepsi Cola 1,5 L",
        "price": 1999.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Pepsi Cola 15 L_17.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2404.35
            },
            {
                "date": "2026-04-18",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 326,
        "name": "Gaseosa Lima Limón 7up Sin Azúcar 1.5 L",
        "price": 2219.4,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Lima Limón 7up Sin Azúcar 15 L_1.jpg",
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
            }
        ]
    },
    {
        "id": 327,
        "name": "Gaseosa Coca Cola Original 354ml",
        "price": 2299.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Coca Cola Original 354ml_21.jpg",
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
        "id": 328,
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
        "id": 329,
        "name": "Gaseosa Cunnington Pomelo Suave 2.25 L",
        "price": 2499.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Cunnington Pomelo Suave 225 L_4.jpg",
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
            }
        ]
    },
    {
        "id": 330,
        "name": "Gaseosa Pepsi Black Sin Azúcar 2 L",
        "price": 2519.4,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Pepsi Black Sin Azúcar 2 L_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2519.4
            }
        ]
    },
    {
        "id": 331,
        "name": "Medallones De Carne Aliada 2 U 110 G",
        "price": 2159.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Aliada 2 U 110 G_18.jpg",
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
        "image": "images/changomas/Medallon De Carne Vacuna Express 110 G 2_10.jpg",
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
        "image": "images/changomas/Medallón De Pollo Jamón Y Queso Paladini_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3519.0
            }
        ]
    },
    {
        "id": 334,
        "name": "Medallones De Merluza Grangys Con Espinaca Y Queso 430 G",
        "price": 3649.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Merluza Grangys Con Espina_15.jpg",
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
        "name": "Medallones Swift De Carne 276g 4u",
        "price": 5489.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Swift De Carne 276g 4u_7.jpg",
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
        "id": 336,
        "name": "Medallón Green Life De Calabaza Y Choclo 380 G 4u",
        "price": 5499.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallón Green Life De Calabaza Y Choclo_20.jpg",
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
        "id": 337,
        "name": "Medallones De Carne Vacuna Paty Express 276 G 4u",
        "price": 5959.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Vacuna Paty Express _6.jpg",
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
        "id": 338,
        "name": "Medallones De Carne Vacuna Goodmark Classic 320 G 4u",
        "price": 6036.75,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Vacuna Goodmark Clas_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6036.75
            }
        ]
    },
    {
        "id": 339,
        "name": "Hamburguesas Swift Tipo Casera 240g 2u",
        "price": 7009.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Hamburguesas Swift Tipo Casera 240g 2u_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7009.0
            }
        ]
    },
    {
        "id": 340,
        "name": "Medallones Veggies Granja Del Sol Con Cebolla Caramelizada Y Arroz Yamaní 440g 4u",
        "price": 7109.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Veggies Granja Del Sol Con Ce_22.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7109.0
            }
        ]
    },
    {
        "id": 341,
        "name": "Harina De Trigo Caserita Tipo 000 1 Kg",
        "price": 679.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Caserita Tipo 000 1 Kg_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 679.0
            }
        ]
    },
    {
        "id": 342,
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
        "id": 343,
        "name": "Harina 000 Morixe X 1 Kg",
        "price": 979.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 000 Morixe X 1 Kg_6.jpg",
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
        "name": "Harina 0000 Pureza Ultra Refinada 1 Kg",
        "price": 999.0,
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
            }
        ]
    },
    {
        "id": 346,
        "name": "Harina Para Pizza Morixe 1kg",
        "price": 999.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina Para Pizza Morixe 1kg_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 999.0
            }
        ]
    },
    {
        "id": 347,
        "name": "Harina De Trigo Favorita 000 1 Kg",
        "price": 1039.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Favorita 000 1 Kg_22.jpg",
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
        "id": 348,
        "name": "Polenta Instantánea Prestopronta 490 G",
        "price": 1229.25,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Polenta Instantánea Prestopronta 490 G_8.jpg",
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
        "id": 349,
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
        "id": 350,
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
        "id": 351,
        "name": "Jugo En Polvo Mango Y Naranja Bc 7 Gr",
        "price": 230.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Mango Y Naranja Bc 7 Gr_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            }
        ]
    },
    {
        "id": 352,
        "name": "Jugo En Polvo Multifruta Bc 7 Gr",
        "price": 230.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Multifruta Bc 7 Gr_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            }
        ]
    },
    {
        "id": 353,
        "name": "Jugo En Polvo Pomelo Rosado Bc 7 Gr",
        "price": 230.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Pomelo Rosado Bc 7 Gr_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            }
        ]
    },
    {
        "id": 354,
        "name": "Jugo En Polvo Frutilla Y Limón Bc 7 Gr",
        "price": 230.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Frutilla Y Limón Bc 7 Gr_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            }
        ]
    },
    {
        "id": 355,
        "name": "Jugo En Polvo Naranja Bc 7 Gr",
        "price": 230.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Naranja Bc 7 Gr_20.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            }
        ]
    },
    {
        "id": 356,
        "name": "Jugo En Polvo Naranja Y Durazno Bc 7 Gr",
        "price": 230.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Naranja Y Durazno Bc 7 Gr_21.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            }
        ]
    },
    {
        "id": 357,
        "name": "Jugo En Polvo Ananá Bc 7 Gr",
        "price": 230.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Ananá Bc 7 Gr_22.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 230.0
            }
        ]
    },
    {
        "id": 358,
        "name": "Jugo En Polvo Tang Naranja Dulce 15 G",
        "price": 509.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Naranja Dulce 15 G_4.jpg",
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
            }
        ]
    },
    {
        "id": 359,
        "name": "Jugo En Polvo Tang Naranja Mango 15 G",
        "price": 509.0,
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
            }
        ]
    },
    {
        "id": 360,
        "name": "Jugo En Polvo Tang Multifruta 15 G",
        "price": 509.0,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Multifruta 15 G_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 239.5
            },
            {
                "date": "2026-04-18",
                "price": 509.0
            }
        ]
    },
    {
        "id": 361,
        "name": "Leche Entera La Serenisima Fort C 200 Cc",
        "price": 1189.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera La Serenisima Fort C 200 Cc_19.jpg",
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
        "price": 1299.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Parcialmente Descremada San Ignaci_6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 363,
        "name": "Leche Descremada Check Larga Vida 1 L",
        "price": 1399.0,
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
            }
        ]
    },
    {
        "id": 364,
        "name": "Leche Entera Check Larga Vida 1 L",
        "price": 1399.0,
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
            }
        ]
    },
    {
        "id": 365,
        "name": "Leche Entera Plenty 1 L",
        "price": 1499.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Plenty 1 L_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 366,
        "name": "Leche Uat Check  Baja En Lactosa Parcialmente Descremada 1 L",
        "price": 1599.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Uat Check  Baja En Lactosa Parcial_4.jpg",
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
        "id": 367,
        "name": "Leche Entera Casanto 1 L",
        "price": 1649.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Casanto 1 L_18.jpg",
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
        "name": "Leche Descremada Casanto 1 L",
        "price": 1649.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada Casanto 1 L_22.jpg",
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
        "id": 369,
        "name": "Leche Entera La Serenísima Multivitaminas 3% 1 L",
        "price": 1780.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera La Serenísima Multivitamina_7.jpg",
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
        "name": "Leche Descremada La Serenísima Multivitaminas 1% 1 L",
        "price": 1780.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada La Serenísima Multivita_9.jpg",
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
        "id": 371,
        "name": "Esponja Check Ultrafina 1un",
        "price": 699.0,
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
            }
        ]
    },
    {
        "id": 372,
        "name": "Esponja Multiuso Virulana 1 U",
        "price": 859.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Multiuso Virulana 1 U_6.jpg",
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
        "id": 373,
        "name": "Esponja Sed Metal Hogar Acero Inoxidable",
        "price": 889.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Sed Metal Hogar Acero Inoxidable_7.jpg",
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
        "id": 374,
        "name": "Esponja Check Cuadros 1un",
        "price": 919.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Check Cuadros 1un_19.jpg",
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
        "image": "images/changomas/Rejilla Check Economica_20.jpg",
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
        "price": 1326.75,
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
            },
            {
                "date": "2026-04-18",
                "price": 1326.75
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
        "id": 384,
        "name": "Toallitas Humedas Antibacterial Q-Soft 30 Un",
        "price": 2749.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Humedas Antibacterial Q-Soft 3_13.jpg",
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
        "id": 385,
        "name": "Toallitas Húmedas Huggies 48 U",
        "price": 2999.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Huggies 48 U_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2999.4
            }
        ]
    },
    {
        "id": 386,
        "name": "Toallitas Húmedas Kimbies 48un",
        "price": 3359.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Kimbies 48un_5.jpg",
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
        "id": 387,
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
        "id": 388,
        "name": "Toallitas Húmedas Toddler Deluxe Sin Perfume 48 U",
        "price": 3621.75,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Toddler Deluxe Sin Per_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3621.75
            }
        ]
    },
    {
        "id": 389,
        "name": "Toallitas Húmedas Toddler Deluxe Aloe Vera 48 U",
        "price": 3621.75,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Toddler Deluxe Aloe Ve_14.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3621.75
            }
        ]
    },
    {
        "id": 390,
        "name": "Toallitas Húmedas Huggies Triple Protección 48un",
        "price": 4689.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Huggies Triple Protecc_4.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 4689.0
            }
        ]
    },
    {
        "id": 391,
        "name": "Papel Higiénico Aliada Simple Hoja 30 M 4u",
        "price": 1073.4,
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
            }
        ]
    },
    {
        "id": 392,
        "name": "Papel Hgiénico Check Simple Hoja 30 M X 10 Cm 4u",
        "price": 1211.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Hgiénico Check Simple Hoja 30 M X _19.jpg",
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
            }
        ]
    },
    {
        "id": 393,
        "name": "Papel Higiénico Felpita Hoja Simple 30 M 4 U",
        "price": 1439.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Felpita Hoja Simple 30 M_18.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2399.0
            },
            {
                "date": "2026-04-18",
                "price": 1439.4
            }
        ]
    },
    {
        "id": 394,
        "name": "Papel Higiénico Higienol Fresh Hoja Simple 30 M 4 U",
        "price": 1475.4,
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
            },
            {
                "date": "2026-04-18",
                "price": 1475.4
            }
        ]
    },
    {
        "id": 395,
        "name": "Papel Higienico Elegante Blanco Hoja Simple 4u",
        "price": 1601.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higienico Elegante Blanco Hoja Sim_14.jpg",
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
            }
        ]
    },
    {
        "id": 396,
        "name": "Papel Higiénico Felpita Premium Doble Hoja 4 U 20 M",
        "price": 1799.4,
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
            }
        ]
    },
    {
        "id": 397,
        "name": "Papel Higienico Elegante Simple Hoja 30 M 6 U",
        "price": 2129.4,
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
            }
        ]
    },
    {
        "id": 398,
        "name": "Papel Higiénico Check Doble Hoja 30 M X 10 Cm 4u",
        "price": 2255.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Check Doble Hoja 30 M X _22.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2255.4
            }
        ]
    },
    {
        "id": 399,
        "name": "Papel Higiénico Elegante Doble Hoja 4x30mts",
        "price": 2399.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Elegante Doble Hoja 4x30_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2399.4
            }
        ]
    },
    {
        "id": 400,
        "name": "Papel Higiénico Elegante Aloe Vera 6x30mts",
        "price": 2399.4,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Elegante Aloe Vera 6x30m_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2399.4
            }
        ]
    },
    {
        "id": 401,
        "name": "Pollo Entero Congelado 3 Kg",
        "price": 3589.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo Entero Congelado 3 Kg_4.jpg",
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
        "id": 404,
        "name": "Pollo Parrillero 2,5 Kg",
        "price": 4999.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pollo Parrillero 25 Kg_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4999.0
            }
        ]
    },
    {
        "id": 405,
        "name": "Muslo De Pollo 1 Kg",
        "price": 6490.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Muslo De Pollo 1 Kg_3.jpg",
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
        "id": 406,
        "name": "Patas De Pollo 1,5 Kg",
        "price": 7439.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Patas De Pollo 15 Kg_6.jpg",
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
        "id": 407,
        "name": "Pechuga De Pollo 0.9 Gr",
        "price": 9490.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pechuga De Pollo 09 Gr_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 9490.0
            }
        ]
    },
    {
        "id": 408,
        "name": "Filet De Pechuga Sin Hueso 1,5 Kg",
        "price": 13699.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Filet De Pechuga Sin Hueso 15 Kg_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 13699.0
            }
        ]
    },
    {
        "id": 409,
        "name": "Queso Rallado La Serenisima Reggianito 35g",
        "price": 1669.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Rallado La Serenisima Reggianito 3_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/changomas/Queso Untable Tonadita Jamón 180 G_14.jpg",
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
        "image": "images/changomas/Queso Untable Tonadita Gruyere 180 G_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1949.25
            }
        ]
    },
    {
        "id": 412,
        "name": "Queso Untable Tonadita Clásico 180 G",
        "price": 1949.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Clásico 180 G_20.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1949.25
            }
        ]
    },
    {
        "id": 413,
        "name": "Queso Untable Tonadita Azul 180 G",
        "price": 1949.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Azul 180 G_23.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1949.25
            }
        ]
    },
    {
        "id": 414,
        "name": "Queso Rallado La Quesera 100 G",
        "price": 2099.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 2099.0
            }
        ]
    },
    {
        "id": 415,
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
        "id": 416,
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
        "id": 417,
        "name": "Queso Untable La Serenísima Cremón Light 280 G",
        "price": 2819.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable La Serenísima Cremón Light_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2819.25
            }
        ]
    },
    {
        "id": 418,
        "name": "Queso Crema Tonadita Cremette Light 480 G",
        "price": 3224.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Tonadita Cremette Light 480 _6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3224.25
            }
        ]
    },
    {
        "id": 419,
        "name": "Sal Check Fina 500 G",
        "price": 799.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 799.0
            }
        ]
    },
    {
        "id": 420,
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
        "id": 421,
        "name": "Sal Entrefina Parrillera Dos Anclas 500 Gr",
        "price": 1369.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Entrefina Parrillera Dos Anclas 500 _5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1369.0
            }
        ]
    },
    {
        "id": 422,
        "name": "Sal Gruesa Dos Anclas 500 Gr",
        "price": 1409.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Dos Anclas 500 Gr_8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1409.0
            }
        ]
    },
    {
        "id": 423,
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
        "image": "images/changomas/Sal Gruesa Check 1 Kg_9.jpg",
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
        "image": "images/changomas/Sal Fina Dos Anclas 500 Gr_7.jpg",
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
            }
        ]
    },
    {
        "id": 429,
        "name": "Palitos Aliada Salados 120 G",
        "price": 806.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Palitos Aliada Salados 120 G_15.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1119.0
            },
            {
                "date": "2026-04-18",
                "price": 806.0
            }
        ]
    },
    {
        "id": 430,
        "name": "Galletita Jamon Saladix 100 Gr",
        "price": 1046.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Jamon Saladix 100 Gr_13.jpg",
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
            }
        ]
    },
    {
        "id": 431,
        "name": "Galletita Pizza Saladix 100 Gr",
        "price": 1046.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Pizza Saladix 100 Gr_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1046.0
            }
        ]
    },
    {
        "id": 432,
        "name": "Palitos Krachitos Salados 110g",
        "price": 1119.33,
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
            }
        ]
    },
    {
        "id": 433,
        "name": "Galletita Snacks Rex 125 Gr",
        "price": 1506.0,
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
            }
        ]
    },
    {
        "id": 434,
        "name": "Papas Fritas Quento Sabor Queso Crema Y Ciboulette 82 G",
        "price": 1532.67,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Papas Fritas Quento Sabor Queso Crema Y _11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2299.0
            },
            {
                "date": "2026-04-18",
                "price": 1532.67
            }
        ]
    },
    {
        "id": 435,
        "name": "Galletitas Snacks Kesitas Queso 250 G",
        "price": 1959.33,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Snacks Kesitas Queso 250 G_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1959.33
            }
        ]
    },
    {
        "id": 436,
        "name": "Galletitas Snacks Rex Sabor Original 225 G",
        "price": 1959.33,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Snacks Rex Sabor Original 225_8.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2939.0
            },
            {
                "date": "2026-04-18",
                "price": 1959.33
            }
        ]
    },
    {
        "id": 437,
        "name": "Galletita Club Social Sabor Original 144gr",
        "price": 1999.33,
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
            }
        ]
    },
    {
        "id": 438,
        "name": "Galletitas Crackers Club Social Sabor Jamón 24 G 6u",
        "price": 1999.33,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Crackers Club Social Sabor Ja_10.jpg",
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
            }
        ]
    },
    {
        "id": 439,
        "name": "Aceite Mezcla Siglo de Oro x 900 cc.",
        "price": 2950.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite Mezcla Siglo de Oro x 900 cc_31.jpg",
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
        "price": 3250.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite Mezcla Cocinero x 900 cc_35.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            },
            {
                "date": "2026-04-18",
                "price": 3250.0
            }
        ]
    },
    {
        "id": 441,
        "name": "Aceite de Girasol Legitimo x 900 cc.",
        "price": 3750.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Legitimo x 900 cc_29.jpg",
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
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 900 cc_32.jpg",
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
        "image": "images/laanonima/Aceite de Girasol Pureza x 900 cc_39.jpg",
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
        "image": "images/laanonima/Aceite de Girasol Natura x 900 cc_30.jpg",
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
        "image": "images/laanonima/Aceite de Girasol Cocinero x 900 cc_38.jpg",
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
        "name": "Rocío Vegetal La Anónima x 120 g.",
        "price": 4400.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Rocío Vegetal La Anónima x 120 g_1.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 4400.0
            }
        ]
    },
    {
        "id": 447,
        "name": "Aceite de Girasol La Anónima x 900 cc.",
        "price": 4550.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol La Anónima x 900 cc_21.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 4550.0
            }
        ]
    },
    {
        "id": 448,
        "name": "Rocío Vegetal de Aceite Girasol Natura x 126 cc.",
        "price": 4650.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Rocío Vegetal de Aceite Girasol Natura x_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4650.0
            }
        ]
    },
    {
        "id": 449,
        "name": "Agua Mineral s/Gas Alvura x 500 cc.",
        "price": 1350.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 500 cc_24.jpg",
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
        "price": 1500.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua sin Gas Benedictino x 500 cc_5.jpg",
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
        "id": 451,
        "name": "Agua Mineral sin gas Bonaqua x 500 cc.",
        "price": 1500.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Bonaqua x 500 cc_8.jpg",
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
        "id": 452,
        "name": "Agua Mineral s/Gas Alvura x 1,5 Lt.",
        "price": 1650.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 15 Lt_23.jpg",
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
        "image": "images/laanonima/Agua Nestlé Pureza Vital sin gas Botella_4.jpg",
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
        "name": "Agua Mineral s/Gas Alvura x 2,25 Lt.",
        "price": 1900.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 225 Lt_18.jpg",
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
        "id": 455,
        "name": "Agua Mineral s/Gas Villa del Sur x 600 cc.",
        "price": 1900.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Villa del Sur x 600 cc_25.jpg",
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
        "id": 456,
        "name": "Agua Mineral sin Gas Sierra de los Padres x 2 Lt.",
        "price": 2000.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin Gas Sierra de los Padre_26.jpg",
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
        "image": "images/laanonima/Agua Mineral sin gas Glaciar x 500 cc_3.jpg",
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
        "image": "images/laanonima/Agua Mineral sin gas Cellier x 2 lt_15.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 459,
        "name": "Pulpa de Manzana&Durazno Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de ManzanaDurazno Pouch Zummy x 11_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 460,
        "name": "Pulpa de Manzana Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Manzana Pouch Zummy x 110 g_10.jpg",
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
        "name": "Pulpa de Pera Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Pera Pouch Zummy x 110 g_18.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 462,
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
        "id": 463,
        "name": "Pulpa de Ciruela Desecada Pouch Zummy x 110 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Ciruela Desecada Pouch Zummy x _20.jpg",
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
        "id": 464,
        "name": "Leche LV Modificada Etapa 3 Profutura Nutrilón x 200 cc.",
        "price": 2850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Leche LV Modificada Etapa 3 Profutura Nu_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2850.0
            }
        ]
    },
    {
        "id": 465,
        "name": "Formula Lactea LV Etapa 2 Profutura Nutrilón x 200 cc.",
        "price": 2950.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Formula Lactea LV Etapa 2 Profutura Nutr_16.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 2950.0
            }
        ]
    },
    {
        "id": 466,
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
        "id": 467,
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
        "id": 468,
        "name": "NESTUM® Arroz x 225gr",
        "price": 7650.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Arroz x 225gr_7.jpg",
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
        "id": 469,
        "name": "Arroz Grano Largo 00000 Cañuelas x 500 g.",
        "price": 1050.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Grano Largo 00000 Cañuelas x 500 g_8.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 470,
        "name": "Arroz Integral Cañuelas x 500 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Integral Cañuelas x 500 g_18.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 471,
        "name": "Arroz Grano Largo Fino Molinos Ala x 500 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Grano Largo Fino Molinos Ala x 500_17.jpg",
        "history": [
            {
                "date": "2026-04-02",
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
        "name": "Arroz Parboil Cañuelas x 500 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Parboil Cañuelas x 500 g_20.jpg",
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
        "name": "Arroz Integral Bolsa Gallo x 500 g.",
        "price": 1700.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Integral Bolsa Gallo x 500 g_31.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 477,
        "name": "Arroz Largo Fino 00000 Bolsa Vanguardia x 1 Kg.",
        "price": 1700.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Largo Fino 00000 Bolsa Vanguardia _44.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 478,
        "name": "Arroz Largo Fino Bolsa Lucchetti x 500 g.",
        "price": 1750.0,
        "market": "aura",
        "category": "arroz",
        "image": "images/laanonima/Arroz Largo Fino Bolsa Lucchetti x 500 g_25.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 479,
        "name": "Carne Picada Envasado al Vacío Best x 500 g.",
        "price": 7980.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Carne Picada Envasado al Vacío Best x 50_1.jpg",
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
        "image": "images/laanonima/Carne Picada EV Estancias LA x 500 g_0.jpg",
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
        "image": "images/laanonima/Preparado para Medallones Estancias La x_15.jpg",
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
        "image": "images/laanonima/Carne Picada M EV Estancias LA x 500 g_2.jpg",
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
        "image": "images/laanonima/Tapa de Bife Envasado al Vacío FB MEATS _24.jpg",
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
        "name": "Milanesa de Carne La Anónima (Kg)",
        "price": 13490.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Milanesa de Carne La Anónima Kg_36.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 13490.0
            }
        ]
    },
    {
        "id": 486,
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
        "id": 487,
        "name": "Tapa de Nalga FB MEATS Envasado al Vacío",
        "price": 14990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Tapa de Nalga FB MEATS Envasado al Vacío_13.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 14990.0
            }
        ]
    },
    {
        "id": 488,
        "name": "Cordero Congelado La Anónima (Kg)",
        "price": 15790.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Cordero Congelado La Anónima Kg_40.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 15790.0
            }
        ]
    },
    {
        "id": 489,
        "name": "Maíz Inflado Dulce Capullitos Flor x 80 g.",
        "price": 650.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maíz Inflado Dulce Capullitos Flor x 80 _23.jpg",
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
        "image": "images/laanonima/Trigo Inflado Dulce Capullitos Flor x 80_52.jpg",
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
        "image": "images/laanonima/Arroz Inflado Dulce Capullitos Flor x 80_39.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 950.0
            }
        ]
    },
    {
        "id": 492,
        "name": "Cereal en Barra Proteína Cereal Mix Yogur Frutilla y Frutos Rojos x 26 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Cereal en Barra Proteína Cereal Mix Yogu_61.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 493,
        "name": "Cereal en barra light Yogur Frutilla Cereal Mix x 26 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Cereal en barra light Yogur Frutilla Cer_30.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 494,
        "name": "Barra de Cereal Almendras y Maní Cereal Mix x 33 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Barra de Cereal Almendras y Maní Cereal _64.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 495,
        "name": "Maíz Inflado Acaramelado Egran con Maní x 80 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maíz Inflado Acaramelado Egran con Maní _79.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 496,
        "name": "Barra de Manzana Roja Frutty x 30 g.",
        "price": 1400.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Barra de Manzana Roja Frutty x 30 g_69.jpg",
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
        "image": "images/laanonima/Maiz Inflado Acaramelado Egran x 80 g_70.jpg",
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
        "name": "Cerveza Schneider Lata x 473 cc.",
        "price": 2450.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Schneider Lata x 473 cc_89.jpg",
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
        "id": 500,
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
        "id": 501,
        "name": "Cerveza Quilmes IPA Lata 473cc x1",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Quilmes IPA Lata 473cc x1_26.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 502,
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
        "id": 503,
        "name": "Cerveza Rubia Budweiser Lata 473cc",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Rubia Budweiser Lata 473cc_34.jpg",
        "history": [
            {
                "date": "2026-04-18",
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
        "image": "images/laanonima/Cerveza Imperial Lata x 473 cc_47.jpg",
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
        "image": "images/laanonima/Cerveza Golden Lata Imperial x 473 cc_93.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 506,
        "name": "Cerveza Rubia Lata Salta x 473 cc.",
        "price": 2900.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Rubia Lata Salta x 473 cc_97.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 507,
        "name": "Cerveza Lata Michelob x 473 cc.",
        "price": 2950.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Lata Michelob x 473 cc_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2950.0
            }
        ]
    },
    {
        "id": 508,
        "name": "Cerveza Long Neck Roja Scotch Blest x 355 cc.",
        "price": 3050.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Long Neck Roja Scotch Blest x 35_82.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 509,
        "name": "Paté Panceta Ahumada Bocatti x 90 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Paté Panceta Ahumada Bocatti x 90 g_42.jpg",
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
        "image": "images/laanonima/Leberwurst Cagnoli x 150 g_27.jpg",
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
        "image": "images/laanonima/Salchichón Primavera Feteado Zur Linde x_6.jpg",
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
        "image": "images/laanonima/Salchichón con Jamón Feteado Zur Linde x_17.jpg",
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
        "image": "images/laanonima/Leberwurst Cabaña Argentina x 200 g_32.jpg",
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
        "image": "images/laanonima/Salame Milán Feteado VarLog5 Bocatti x 7_14.jpg",
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
        "image": "images/laanonima/Mortadela Feteada 214 x 200 g_24.jpg",
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
        "image": "images/laanonima/Fiambre Cocido de Cerdo Feteado Zur Lind_1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3650.0
            }
        ]
    },
    {
        "id": 517,
        "name": "Mortadela Feteada 42 x 200 g.",
        "price": 3650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Mortadela Feteada 42 x 200 g_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3650.0
            }
        ]
    },
    {
        "id": 518,
        "name": "Salchichón Mini tipo Primavera Cabaña Argentina x 240 g.",
        "price": 3850.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Salchichón Mini tipo Primavera Cabaña Ar_26.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3850.0
            }
        ]
    },
    {
        "id": 519,
        "name": "Medallón Hamburguesa Champion. x 2 u. 112 GR",
        "price": 1550.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallón Hamburguesa Champion x 2 u 112 _15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 520,
        "name": "Medallones Carne Vacuna con Soja x 2 Un. Tres Cruces x 110 g.",
        "price": 1800.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 521,
        "name": "Medallones de Carne Vacuna Best x 2 un. 110 gr.",
        "price": 2200.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Best x 2 un 1_9.jpg",
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
        "id": 522,
        "name": "Medallones de Carne Vacuna Doble Swift x 2 un. 112 gr.",
        "price": 2300.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Doble Swift x_22.jpg",
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
        "id": 523,
        "name": "Medallones de Carne Vacuna Express x 2 Un. Paty x 110 g.",
        "price": 2600.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Express x 2 U_7.jpg",
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
        "id": 524,
        "name": "Medallones de Carne Vacuna x 2 Un.  Swift x 320 g.",
        "price": 3050.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna x 2 Un  Swift_39.jpg",
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
        "id": 525,
        "name": "Hamburguesas de Carne Vacuna La Anónima x 2 un. 110 gr.",
        "price": 3450.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesas de Carne Vacuna La Anónima _8.jpg",
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
        "id": 526,
        "name": "Hamburguesa Carne Vacuna Finitas x 2 Un. Paty x 110 g.",
        "price": 3500.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesa Carne Vacuna Finitas x 2 Un _40.jpg",
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
            }
        ]
    },
    {
        "id": 527,
        "name": "Medallones de Carne Vacuna x 4 un. La Blanca x 276 gr.",
        "price": 4100.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna x 4 un La Bla_35.jpg",
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
        "id": 528,
        "name": "Hamburguesa de Carne Vacuna Clásica Doble Plus Swift x 2 un. 160 gr.",
        "price": 4250.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesa de Carne Vacuna Clásica Dobl_26.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 4250.0
            }
        ]
    },
    {
        "id": 529,
        "name": "Bebida Energizante Speed x 269 cc.",
        "price": 1900.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Energizante Speed x 269 cc_25.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 530,
        "name": "Bebida Fresh Blue Full Sport x 500 cc.",
        "price": 2000.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Fresh Blue Full Sport x 500 cc_32.jpg",
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
        "id": 531,
        "name": "Bebida Uva Powerade x 500 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Uva Powerade x 500 cc_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 532,
        "name": "Bebida de Moras Pet Gatorade Sin Azúcar x 400 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida de Moras Pet Gatorade Sin Azúcar _10.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 533,
        "name": "Bebida de Fresa y Kiwi Pet Gatorade Sin Azúcar x 400 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida de Fresa y Kiwi Pet Gatorade Sin _11.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 534,
        "name": "Powerade Mountain Blast x 500 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Powerade Mountain Blast x 500 cc_2.jpg",
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
        "image": "images/laanonima/Powerade Frutas Tropicales x 500 cc_3.jpg",
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
        "name": "Bebida Powerade Manzana x 500 cc.",
        "price": 2350.0,
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
            }
        ]
    },
    {
        "id": 537,
        "name": "Bebida Powerade Naranja x 500 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Powerade Naranja x 500 cc_36.jpg",
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
        "id": 538,
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
        "id": 539,
        "name": "Bebida Láctea Frutilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Láctea Frutilla Tetra La Serenísi_42.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 540,
        "name": "Bebida Láctea Vainilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Láctea Vainilla Tetra La Serenísi_79.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 541,
        "name": "Leche LV Entera Clásica Fortificada c/ Vitamina 3% La Serenísima x 200 cc.",
        "price": 1350.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche LV Entera Clásica Fortificada c Vi_37.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 542,
        "name": "Alimento Lácteo Primeros Años  Las Tres Niñas  x 200 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Alimento Lácteo Primeros Años  Las Tres _40.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 543,
        "name": "Protein chocolate 200ml",
        "price": 1700.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Protein chocolate 200ml_44.jpg",
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
        "id": 544,
        "name": "NIDO® 3 Defensas Leche Infantil Listo para Tomar x 200ml.",
        "price": 1700.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/NIDO 3 Defensas Leche Infantil Listo par_51.jpg",
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
        "id": 545,
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
        "id": 546,
        "name": "Bebida Lactea a Base de Leche Capuchino Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Capuchino _59.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 547,
        "name": "Bebida Lactea a Base de Leche Avellanas Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Avellanas _69.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 548,
        "name": "Leche Ultra Entera Sachet 3% Casanto x 1 Lt.",
        "price": 1800.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche Ultra Entera Sachet 3 Casanto x 1 _45.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 549,
        "name": "Pañales Huggies Classic P x30",
        "price": 12500.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Huggies Classic P x30_46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12500.0
            }
        ]
    },
    {
        "id": 550,
        "name": "Pañales Babysec Super Premium Recien Nacido 20 Un.",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Babysec Super Premium Recien Nac_35.jpg",
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
        "id": 551,
        "name": "Pañal Huggies Flexi Comfort G x20",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort G x20_67.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 552,
        "name": "Pañal Huggies Flexi Comfort XG x16",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort XG x16_68.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 553,
        "name": "Traje Baño M Little Swimm Huggies x 11 un.",
        "price": 14550.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje Baño M Little Swimm Huggies x 11 u_80.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14550.0
            }
        ]
    },
    {
        "id": 554,
        "name": "Pañal Huggies Protect Plus P x30",
        "price": 14600.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Protect Plus P x30_37.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14600.0
            }
        ]
    },
    {
        "id": 555,
        "name": "Traje de Baño Descremado  Splashers P-M Pampers x 12 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers P-M _81.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 556,
        "name": "Traje de Baño Descremado  Splashers M-G Pampers x 11 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers M-G _82.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 557,
        "name": "Traje de Baño Descremado  Splashers G-XG Pampers x 10 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers G-XG_83.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 558,
        "name": "Pañal Huggies Flexi Comfort P x30",
        "price": 17150.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort P x30_33.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 17150.0
            }
        ]
    },
    {
        "id": 559,
        "name": "Pollo Fresco La Anónima (Kg)",
        "price": 4190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Fresco La Anónima Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 560,
        "name": "Pollo Fresco Pollolin (Kg)",
        "price": 4190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Fresco Pollolin Kg_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 561,
        "name": "Pollo Tres Arroyos Congelado (Kg)",
        "price": 4190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Tres Arroyos Congelado Kg_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 562,
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
        "id": 563,
        "name": "Muslo de Pollo La Anónima (Kg)",
        "price": 5890.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Muslo de Pollo La Anónima Kg_4.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5890.0
            }
        ]
    },
    {
        "id": 564,
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
        "id": 565,
        "name": "Pollo Refrigerado Bandeja Pollolin (Kg)",
        "price": 6550.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Refrigerado Bandeja Pollolin Kg_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6550.0
            }
        ]
    },
    {
        "id": 566,
        "name": "Pata de Pollo La Anónima (Kg)",
        "price": 6850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pata de Pollo La Anónima Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6850.0
            }
        ]
    },
    {
        "id": 567,
        "name": "Pollo Parrillero Pollolin (Kg)",
        "price": 7490.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Parrillero Pollolin Kg_10.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7490.0
            }
        ]
    },
    {
        "id": 568,
        "name": "Muslo Pollolin (Kg)",
        "price": 7690.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Muslo Pollolin Kg_15.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 7690.0
            }
        ]
    },
    {
        "id": 569,
        "name": "Aderezo Rallado Sabor Queso Best x 40 g.",
        "price": 960.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 40 g_9.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 960.0
            }
        ]
    },
    {
        "id": 570,
        "name": "Queso Rallado La Quesera x 40 g.",
        "price": 970.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Quesera x 40 g_27.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 970.0
            }
        ]
    },
    {
        "id": 571,
        "name": "Queso Rallado Reggianito La Serenísima x 35 g.",
        "price": 1800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Reggianito La Serenísima x_24.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 572,
        "name": "Queso Rallado Tregar x 40 g.",
        "price": 2200.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Tregar x 40 g_0.jpg",
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
        "id": 573,
        "name": "Queso Rallado La Quesera x 100 g.",
        "price": 2200.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Quesera x 100 g_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 574,
        "name": "Aderezo Rallado Sabor Queso Best x 100 g.",
        "price": 2350.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Aderezo Rallado Sabor Queso Best x 100 g_14.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 2350.0
            }
        ]
    },
    {
        "id": 575,
        "name": "Queso Cheddar En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Cheddar En Fetas x 8 Un Tonadita x_18.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 576,
        "name": "Queso en Hebras Mini La Paulina x 80 g.",
        "price": 3050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso en Hebras Mini La Paulina x 80 g_45.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3050.0
            }
        ]
    },
    {
        "id": 577,
        "name": "Queso de Cerdo Feteado 42 x 200 g.",
        "price": 3300.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso de Cerdo Feteado 42 x 200 g_117.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 578,
        "name": "Queso Rallado Reggianito La Serenísima x 70 g.",
        "price": 3450.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Reggianito La Serenísima x_20.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3450.0
            }
        ]
    },
    {
        "id": 579,
        "name": "Polvo para preparar Salsa Blanca Dos Anclas x 40 g.",
        "price": 840.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Polvo para preparar Salsa Blanca Dos Anc_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 840.0
            }
        ]
    },
    {
        "id": 580,
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
        "id": 581,
        "name": "Ajo en Polvo Deshidratado Dos Anclas x 20 g.",
        "price": 1400.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Ajo en Polvo Deshidratado Dos Anclas x 2_6.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 582,
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
        "id": 583,
        "name": "Condimento para Pizza Dos Anclas x 25 g.",
        "price": 1550.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Condimento para Pizza Dos Anclas x 25 g_9.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 584,
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
        "id": 585,
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
        "id": 586,
        "name": "Sal Gruesa Paquete Dos Anclas x 1 Kg.",
        "price": 2600.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Gruesa Paquete Dos Anclas x 1 Kg_3.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 587,
        "name": "Provenzal Dos Anclas x 50 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Provenzal Dos Anclas x 50 g_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 588,
        "name": "Sal Fina Salero Dos Anclas x 500 g.",
        "price": 3400.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Fina Salero Dos Anclas x 500 g_5.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 3400.0
            }
        ]
    },
    {
        "id": 589,
        "name": "Cereal Bolitas de Chocolate Julicroc x 150 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cereal Bolitas de Chocolate Julicroc x 1_32.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 590,
        "name": "Cereal Aritos Frutados Julicroc x 150 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cereal Aritos Frutados Julicroc x 150 g_56.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 591,
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
        "id": 592,
        "name": "Barrita Vegana Choco Naranja Laddu Bar x 30 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Barrita Vegana Choco Naranja Laddu Bar x_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 593,
        "name": "Papas Fritas Sabor Cheddar Julicroc x 70 g.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Papas Fritas Sabor Cheddar Julicroc x 70_55.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 594,
        "name": "Almohaditas Rellena de Frutilla sin Tacc Snuks x 90 g.",
        "price": 1850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Almohaditas Rellena de Frutilla sin Tacc_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 595,
        "name": "Almohaditas Rellena de Avellana sin Tacc Snuks x 90 g.",
        "price": 1850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Almohaditas Rellena de Avellana sin Tacc_75.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 596,
        "name": "Galletitas sabor Frutilla sin Tacc Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Galletitas sabor Frutilla sin Tacc Smams_42.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 597,
        "name": "Galletitas Rellenas Vainilla Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Galletitas Rellenas Vainilla Smams x 105_68.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 598,
        "name": "Galletitas sabor Chocolate sin Tacc Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Galletitas sabor Chocolate sin Tacc Smam_83.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 599,
        "name": "Vinagre de Alcohol 1 Lts Cuisine y Co",
        "price": 1450.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Alcohol 1 Lts Cuisine y Co_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 600,
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
        "id": 601,
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
        "id": 602,
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
        "id": 603,
        "name": "Vinagre de Alcohol 1 Lts Dos Anclas",
        "price": 1750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Alcohol 1 Lts Dos Anclas_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 604,
        "name": "Vinagre de Manzana 500 Cc Cuisine & Co",
        "price": 2150.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre de Manzana 500 Cc Cuisine  Co_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 605,
        "name": "Jugo Sabor Limón 500 Cc Minerva",
        "price": 2587.5,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Jugo Sabor Limón 500 Cc Minerva_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2587.5
            }
        ]
    },
    {
        "id": 606,
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
        "id": 607,
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
        "id": 608,
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
        "id": 609,
        "name": "Soda 2.25 Lts Cuisine & Co",
        "price": 890.0,
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
            }
        ]
    },
    {
        "id": 610,
        "name": "Soda 1.75 Lts Cuisine & Co",
        "price": 1215.5,
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
            }
        ]
    },
    {
        "id": 611,
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
        "id": 612,
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
        "id": 613,
        "name": "Agua Nestle Pureza Vital 2.25lt",
        "price": 1501.8,
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
            }
        ]
    },
    {
        "id": 614,
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
        "id": 615,
        "name": "Agua Mineral Eco De Los Andes Sin Gas 2 L",
        "price": 1770.0,
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
            }
        ]
    },
    {
        "id": 616,
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
        "id": 617,
        "name": "Agua Glaciar Sin Gas Botella 2ltx1",
        "price": 1920.6,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Glaciar Sin Gas Botella 2ltx1_19.jpg",
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
        "id": 618,
        "name": "Saborizada Levite Pomelo 2.25lt",
        "price": 2210.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Saborizada Levite Pomelo 225lt_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2210.0
            }
        ]
    },
    {
        "id": 619,
        "name": "Arroz Grano Largo 500 Grs Molinos Ala",
        "price": 825.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo 500 Grs Molinos Ala_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 825.0
            }
        ]
    },
    {
        "id": 620,
        "name": "Arroz Gallo Parboil Selec X 500 Gr Gallo",
        "price": 877.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Gallo Parboil Selec X 500 Gr Gallo_8.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1012.5
            },
            {
                "date": "2026-04-18",
                "price": 877.5
            }
        ]
    },
    {
        "id": 621,
        "name": "Arroz Integral Selección 500 Grs Gallo",
        "price": 877.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Integral Selección 500 Grs Gallo_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 877.5
            }
        ]
    },
    {
        "id": 622,
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
        "id": 623,
        "name": "Arroz Grano Largo Fino 500 Grs Lucchetti",
        "price": 1000.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo Fino 500 Grs Lucchetti_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1000.0
            }
        ]
    },
    {
        "id": 624,
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
        "id": 625,
        "name": "Arroz Parboil 500 Grs Lucchetti",
        "price": 1150.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Parboil 500 Grs Lucchetti_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 626,
        "name": "Arroz Grano Largo Fino 1 Kg Molinos Ala",
        "price": 1250.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Grano Largo Fino 1 Kg Molinos Ala_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 627,
        "name": "Arroz Doble Carolina 500 Grs Gallo",
        "price": 1267.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Doble Carolina 500 Grs Gallo_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            }
        ]
    },
    {
        "id": 628,
        "name": "Arroz Parboil Grano Largo 1 Kg Cuisine & Co",
        "price": 1350.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Parboil Grano Largo 1 Kg Cuisine  _4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 629,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_44.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 630,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_45.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 631,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_46.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 632,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 4830.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_33.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            }
        ]
    },
    {
        "id": 633,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 4830.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_34.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            }
        ]
    },
    {
        "id": 634,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 4830.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_35.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            }
        ]
    },
    {
        "id": 635,
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
        "id": 636,
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
        "id": 637,
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
        "id": 638,
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
        "id": 639,
        "name": "Espinazo",
        "price": 3935.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Espinazo_16.jpg",
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
        "id": 640,
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
        "id": 641,
        "name": "Falda",
        "price": 7905.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Falda_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7905.0
            }
        ]
    },
    {
        "id": 642,
        "name": "Azotillo",
        "price": 8315.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Azotillo_11.jpg",
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
        "id": 643,
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
        "id": 644,
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
        "id": 645,
        "name": "Tapa De Bife Novillito Ev Al Vacio",
        "price": 11499.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Tapa De Bife Novillito Ev Al Vacio_13.jpg",
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
        "id": 646,
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
        "id": 647,
        "name": "Manta Parrillera La Hacienda",
        "price": 13859.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Manta Parrillera La Hacienda_18.jpg",
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
        "id": 648,
        "name": "PALETA CHURRASCO",
        "price": 13999.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/PALETA CHURRASCO_15.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 13999.0
            }
        ]
    },
    {
        "id": 649,
        "name": "Barra de Cereal Sabor Frutilla y Chocolate 26 Grs Cereal Mix",
        "price": 1150.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Frutilla y Chocola_13.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 650,
        "name": "Cereales Sabor Chocolate 200 Grs Cuisine & Co",
        "price": 1390.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Cereales Sabor Chocolate 200 Grs Cuisine_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 651,
        "name": "Copos de Maíz Azucarados 150 Grs Cuisine & Co",
        "price": 1550.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Azucarados 150 Grs Cuisine_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 652,
        "name": "Copos de Maíz Sabor Tradicionales 160 Grs Granix",
        "price": 1600.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Sabor Tradicionales 160 Gr_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 653,
        "name": "Barra de Cereal Sabor Cajú y Arándanos 41 Grs Integra",
        "price": 1700.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Cajú y Arándanos 4_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 654,
        "name": "Barra de Cereal Sabor Avena, Almendra y Nuez 41 Grs Integra",
        "price": 1700.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Avena Almendra y N_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 655,
        "name": "Barra de Cereales Sabor Semillas y Arándanos 38 Grs Integra",
        "price": 1750.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereales Sabor Semillas y Aránd_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 656,
        "name": "Copos de Maíz Sabor Azucarado 240 Grs Cuisine & Co",
        "price": 1950.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Sabor Azucarado 240 Grs Cu_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 657,
        "name": "Copos de Maíz Sabor Azucarados 240 Grs Granix",
        "price": 2000.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos de Maíz Sabor Azucarados 240 Grs G_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 658,
        "name": "Barra de Cereal Sabor Banana y Dulce de Leche 45 Grs Muecas",
        "price": 2050.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra de Cereal Sabor Banana y Dulce de _6.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 659,
        "name": "Cerveza Brahma Chopp Lata 354mlx1",
        "price": 966.75,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Brahma Chopp Lata 354mlx1_11.jpg",
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
        "id": 660,
        "name": "Cerveza 4,5º Lata X 500 Ml Landvik",
        "price": 1095.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza 45º Lata X 500 Ml Landvik_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1095.0
            }
        ]
    },
    {
        "id": 661,
        "name": "Cerveza Sin Alcohol 330 Cc Corona",
        "price": 2040.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Sin Alcohol 330 Cc Corona_16.jpg",
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
            }
        ]
    },
    {
        "id": 662,
        "name": "Cerveza Quilmes Clasica 710cc",
        "price": 2210.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 2210.0
            }
        ]
    },
    {
        "id": 663,
        "name": "Cerveza Rubia 473 Ml Schneider",
        "price": 2400.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Rubia 473 Ml Schneider_10.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 664,
        "name": "Cerveza Heineken 473 Ml",
        "price": 2600.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Heineken 473 Ml_2.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2220.0
            },
            {
                "date": "2026-04-18",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 665,
        "name": "Cerveza Rubia 330ml Corona",
        "price": 2632.5,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Rubia 330ml Corona_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2632.5
            }
        ]
    },
    {
        "id": 666,
        "name": "Budwei Rub 1lt Ret",
        "price": 2760.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Budwei Rub 1lt Ret_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2760.0
            }
        ]
    },
    {
        "id": 667,
        "name": "Cerveza Brahma Chopp Rubia 1lt Ret",
        "price": 3300.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Brahma Chopp Rubia 1lt Ret_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 668,
        "name": "Cerveza Rubia 710 Ml Schneider",
        "price": 3499.0,
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
            },
            {
                "date": "2026-04-18",
                "price": 3499.0
            }
        ]
    },
    {
        "id": 669,
        "name": "Salame Fuet Doina 150 Gr",
        "price": 3900.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Fuet Doina 150 Gr_13.jpg",
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
        "id": 670,
        "name": "Mortadela Mini 300 Grs Paladini",
        "price": 5115.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Mortadela Mini 300 Grs Paladini_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5115.0
            }
        ]
    },
    {
        "id": 671,
        "name": "Jamón Cocido Linea Permi Paladini X 150 Gr",
        "price": 5400.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamón Cocido Linea Permi Paladini X 150 _1.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 5400.0
            }
        ]
    },
    {
        "id": 672,
        "name": "Salame Sabor Salame Feteado 100 Grs Bocatti",
        "price": 5606.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Sabor Salame Feteado 100 Grs Boca_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5606.0
            }
        ]
    },
    {
        "id": 673,
        "name": "Jamon Cocido Feteado 200 Grs Campo Austral",
        "price": 6036.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Cocido Feteado 200 Grs Campo Austr_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6036.0
            }
        ]
    },
    {
        "id": 674,
        "name": "Jamon Paladini Cocido Fetas Finas X 200 Gr",
        "price": 7600.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Paladini Cocido Fetas Finas X 200 _0.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 7600.0
            }
        ]
    },
    {
        "id": 675,
        "name": "Fiambre De Cerdo Tripack X Kg",
        "price": 10490.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Fiambre De Cerdo Tripack X Kg_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 10490.0
            }
        ]
    },
    {
        "id": 676,
        "name": "Bondiola Cerdo Fetas Finas 120 Grs Paladini",
        "price": 10699.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Bondiola Cerdo Fetas Finas 120 Grs Palad_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 10699.0
            }
        ]
    },
    {
        "id": 677,
        "name": "Fiambre de Paleta de Cerdo 200 Grs Campo Austral",
        "price": 15840.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Fiambre de Paleta de Cerdo 200 Grs Campo_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 15840.0
            }
        ]
    },
    {
        "id": 678,
        "name": "Jamon Cocido de Cerdo x 1 Kg Lario",
        "price": 23647.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Cocido de Cerdo x 1 Kg Lario_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 23647.0
            }
        ]
    },
    {
        "id": 679,
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
        "id": 680,
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
        "id": 681,
        "name": "Arandano X 250 Gr Alif Agro",
        "price": 5550.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Arandano X 250 Gr Alif Agro_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4850.0
            },
            {
                "date": "2026-04-18",
                "price": 5550.0
            }
        ]
    },
    {
        "id": 682,
        "name": "Mix Patagonico X 250 Gr Alif Agro",
        "price": 6450.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mix Patagonico X 250 Gr Alif Agro_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5650.0
            },
            {
                "date": "2026-04-18",
                "price": 6450.0
            }
        ]
    },
    {
        "id": 683,
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
        "id": 684,
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
        "id": 685,
        "name": "Frambuesa X 250 Gr Alif Agro",
        "price": 9600.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frambuesa X 250 Gr Alif Agro_5.jpg",
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
        "id": 686,
        "name": "Frambuesas X400g Green Life",
        "price": 14300.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frambuesas X400g Green Life_7.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 687,
        "name": "Gaseosa Coca-cola Sabor Original 354 Ml",
        "price": 1533.33,
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
            }
        ]
    },
    {
        "id": 688,
        "name": "Coca-cola Zero 354 Ml",
        "price": 1533.33,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Coca-cola Zero 354 Ml_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1533.33
            }
        ]
    },
    {
        "id": 689,
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
        "id": 690,
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
        "id": 691,
        "name": "Gaseosa Mirinda Naranja Botella 2,25ltx1",
        "price": 1950.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Mirinda Naranja Botella 225ltx1_13.jpg",
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
            }
        ]
    },
    {
        "id": 692,
        "name": "Gaseosa Pepsi  Lata 354ml X 1u",
        "price": 2000.0,
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
            }
        ]
    },
    {
        "id": 693,
        "name": "Gaseosa 7 Up Sin Azucar 1.5lt",
        "price": 2050.0,
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
            }
        ]
    },
    {
        "id": 694,
        "name": "Gaseosa Pepsi Black 2 L",
        "price": 2250.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi Black 2 L_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2250.0
            }
        ]
    },
    {
        "id": 695,
        "name": "Gaseosa Pepsi  Botella 2 L",
        "price": 2650.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Botella 2 L_3.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2500.0
            },
            {
                "date": "2026-04-18",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 696,
        "name": "Gaseosa Paso De Los Toros Tónica Botella 1,5ltx1",
        "price": 2887.5,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Paso De Los Toros Tónica Botella_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2887.5
            }
        ]
    },
    {
        "id": 697,
        "name": "Isotonico Zero Moras 400 Ml Gatorade",
        "price": 975.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Zero Moras 400 Ml Gatorade_14.jpg",
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
        "id": 698,
        "name": "Isotonico Zero Fresa-kiwi 400 Ml Gatorade",
        "price": 975.0,
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
            }
        ]
    },
    {
        "id": 699,
        "name": "Bebida Isotónica Fresh Blue 500 Ml Full Sport",
        "price": 1170.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Fresh Blue 500 Ml Full _18.jpg",
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
        "id": 700,
        "name": "Bebida Isotónica Mountain Blast 500 Ml Powerade",
        "price": 1267.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Mountain Blast 500 Ml P_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            }
        ]
    },
    {
        "id": 701,
        "name": "Isotonico Powerade Frutas Tropical 500cc",
        "price": 1267.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Frutas Tropical 500cc_1.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            }
        ]
    },
    {
        "id": 702,
        "name": "Isotonico Powerade Manzana 500cc",
        "price": 1267.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Manzana 500cc_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            }
        ]
    },
    {
        "id": 703,
        "name": "Bebida Isotónica Uva 500 Ml Powerade",
        "price": 1267.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Uva 500 Ml Powerade_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1267.5
            }
        ]
    },
    {
        "id": 704,
        "name": "Isotonico Powerade Mountain Blast 995cc",
        "price": 1430.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Mountain Blast 995cc_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1430.0
            }
        ]
    },
    {
        "id": 705,
        "name": "Bebida Isotónica Frutas Tropicales 995 Ml Powerade",
        "price": 1430.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Frutas Tropicales 995 M_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1430.0
            }
        ]
    },
    {
        "id": 706,
        "name": "Isotonico Powerade Manzana 995cc",
        "price": 1430.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Manzana 995cc_10.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1430.0
            }
        ]
    },
    {
        "id": 707,
        "name": "Jugo En Polvo Tang Naranja Dulce 15gr",
        "price": 247.5,
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
            }
        ]
    },
    {
        "id": 708,
        "name": "Jugo En Polvo Tang Manzana 15gr",
        "price": 247.5,
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
            }
        ]
    },
    {
        "id": 709,
        "name": "Jugo En Polvo Tang Limon Dulce 15gr",
        "price": 247.5,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Limon Dulce 15gr_6.jpg",
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
            }
        ]
    },
    {
        "id": 710,
        "name": "Jugo En Polvo Tang Naranja Banana 15gr",
        "price": 247.5,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Banana 15gr_8.jpg",
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
            }
        ]
    },
    {
        "id": 711,
        "name": "Jugo En Polvo Tang Pomelo Rosado 15 Gr",
        "price": 247.5,
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
            }
        ]
    },
    {
        "id": 712,
        "name": "Jugo En Polvo Tang Naranja 15gr",
        "price": 247.5,
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
            }
        ]
    },
    {
        "id": 713,
        "name": "Jugo En Polvo Tang Durazno 15 Gr",
        "price": 247.5,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Durazno 15 Gr_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 247.5
            }
        ]
    },
    {
        "id": 714,
        "name": "Jugo En Polvo Tang Naranja Lima 15 Gr",
        "price": 247.5,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Lima 15 Gr_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 247.5
            }
        ]
    },
    {
        "id": 715,
        "name": "Jugo En Polvo Naranja Dulce 7,5 Grs Clight",
        "price": 260.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Naranja Dulce 75 Grs Cligh_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 260.0
            }
        ]
    },
    {
        "id": 716,
        "name": "Jugo En Polvo Manzana Deliciosa 7 Grs Clight",
        "price": 260.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Manzana Deliciosa 7 Grs Cl_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 260.0
            }
        ]
    },
    {
        "id": 717,
        "name": "Yogur Firme Ffs Entero Sabor Vainilla 120 Grs La Serenísima",
        "price": 699.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Yogur Firme Ffs Entero Sabor Vainilla 12_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 699.0
            }
        ]
    },
    {
        "id": 718,
        "name": "Leche Uat Descremada Apostoles 1 L",
        "price": 1192.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Descremada Apostoles 1 L_6.jpg",
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
        "id": 719,
        "name": "Leche Uat Descremada 2apostoles 1l",
        "price": 1192.5,
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
            },
            {
                "date": "2026-04-18",
                "price": 1192.5
            }
        ]
    },
    {
        "id": 720,
        "name": "Leche Entera 1 Lts Cuisine & Co",
        "price": 1702.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera 1 Lts Cuisine  Co_10.jpg",
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
        "id": 721,
        "name": "Leche Semi Descremada 1 Lts Cuisine & Co",
        "price": 1702.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Semi Descremada 1 Lts Cuisine  Co_14.jpg",
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
        "id": 722,
        "name": "Leche Uat Entera Sachet X 1 L Cuisine & Co",
        "price": 1720.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Entera Sachet X 1 L Cuisine  C_19.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1740.0
            },
            {
                "date": "2026-04-18",
                "price": 1720.0
            }
        ]
    },
    {
        "id": 723,
        "name": "Leche Desc Ls Reduc. Lactosa Sachet 1l",
        "price": 1749.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Desc Ls Reduc Lactosa Sachet 1l_8.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 1749.0
            }
        ]
    },
    {
        "id": 724,
        "name": "Leche Entera La Serenísima 3sachet 1lt",
        "price": 1749.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera La Serenísima 3sachet 1lt_15.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 1749.0
            }
        ]
    },
    {
        "id": 725,
        "name": "Yogur Griego Firme Natural X 190 Grs Yogurisimo",
        "price": 1899.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Yogur Griego Firme Natural X 190 Grs Yog_9.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 1899.0
            }
        ]
    },
    {
        "id": 726,
        "name": "Leche Uat Entera Las Tres Niñas 1l",
        "price": 1912.5,
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
            },
            {
                "date": "2026-04-18",
                "price": 1912.5
            }
        ]
    },
    {
        "id": 727,
        "name": "Leche en Polvo Fortigrow 200 Grs Nido",
        "price": 3055.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Fortigrow 200 Grs Nido_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3055.0
            }
        ]
    },
    {
        "id": 728,
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
        "id": 729,
        "name": "Leche en Polvo Deslactosada 400 Grs Purisima",
        "price": 4452.5,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Deslactosada 400 Grs Puri_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4452.5
            }
        ]
    },
    {
        "id": 730,
        "name": "Leche en Polvo Entera Reducida en Lactosa 400 Grs Purisima",
        "price": 4907.5,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Entera Reducida En Lactos_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4907.5
            }
        ]
    },
    {
        "id": 731,
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
        "id": 732,
        "name": "Leche Condensada Descremada Orgánica 395 Grs Nestlé®",
        "price": 5450.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Condensada Descremada Orgánica 395_10.jpg",
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
        "id": 733,
        "name": "Leche Modificada en Polvo 400 Grs Armonia",
        "price": 5850.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Modificada en Polvo 400 Grs Armoni_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 5850.0
            }
        ]
    },
    {
        "id": 734,
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
        "id": 735,
        "name": "Leche en Polvo Clásica 400 Grs La Serenisima",
        "price": 6750.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Clásica 400 Grs La Sereni_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6750.0
            }
        ]
    },
    {
        "id": 736,
        "name": "Leche en Polvo Entera Instantánea Plus 800 Grs Purisima",
        "price": 7052.5,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche en Polvo Entera Instantánea Plus 8_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 7052.5
            }
        ]
    },
    {
        "id": 737,
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
        "id": 738,
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
        "id": 739,
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
        "id": 740,
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
        "id": 741,
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
        "id": 742,
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
        "id": 743,
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
        "id": 744,
        "name": "Trapo De Piso Home Care Gris Super",
        "price": 1790.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Gris Super_8.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 745,
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
        "id": 746,
        "name": "Esponja Mortimer Doble Cara 1 U",
        "price": 1850.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Mortimer Doble Cara 1 U_14.jpg",
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
        "id": 747,
        "name": "Alimento Para Gatos Whiskas Pasta Pollo 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Pollo _2.jpg",
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
        "id": 748,
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
        "id": 749,
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
        "id": 750,
        "name": "Alimento Para Gatos Whiskas Pasta Gatitos 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Gatito_7.jpg",
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
        "id": 751,
        "name": "Alimento Para Gatos Whiskas Pasta Sardina 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Sardin_10.jpg",
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
        "id": 752,
        "name": "Alimento Para Gatos Whiskas Pasta Carne 85 Gr",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Carne _11.jpg",
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
        "id": 753,
        "name": "Alimento Whiskas Para Gatos Souffle Adulto Carne X85g",
        "price": 900.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Whiskas Para Gatos Souffle Adul_14.jpg",
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
        "id": 754,
        "name": "Alimento Humedo Cat Chow Ad Pollo",
        "price": 1100.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Humedo Cat Chow Ad Pollo_6.jpg",
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
            }
        ]
    },
    {
        "id": 755,
        "name": "Alimento Humedo Cat Chow Estir.pescados",
        "price": 1100.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Humedo Cat Chow Estirpescados_16.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 756,
        "name": "Alimento Whiskas Gatitos Carne Y Leche 500gr",
        "price": 3750.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Whiskas Gatitos Carne Y Leche 5_19.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 757,
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
        "id": 758,
        "name": "Alimento Para Perros Pedigree Pollo 100 Gr",
        "price": 900.0,
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
            }
        ]
    },
    {
        "id": 759,
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
        "id": 760,
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
        "id": 761,
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
        "id": 762,
        "name": "Alimento Dog Chow Adulto Minis Y Pequeños 1,5 Kg",
        "price": 7050.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Adulto Minis Y Pequeño_15.jpg",
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
        "id": 763,
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
        "id": 764,
        "name": "Alimento Para Perros Pedigree Adulto 3 Kg",
        "price": 11750.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Adulto 3 K_11.jpg",
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
        "id": 765,
        "name": "Alimento Para Perros Pedigree Adulto Razas Pequeñas 3 Kg",
        "price": 12900.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Adulto Raz_9.jpg",
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
        "id": 766,
        "name": "Alimento Dog Chow Longevidad 3k",
        "price": 14600.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Longevidad 3k_18.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 14600.0
            },
            {
                "date": "2026-04-12",
                "price": 10950.0
            },
            {
                "date": "2026-04-18",
                "price": 14600.0
            }
        ]
    },
    {
        "id": 767,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_44.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 768,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_45.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 769,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_46.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 770,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 4830.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_33.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            }
        ]
    },
    {
        "id": 771,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 4830.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_34.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            }
        ]
    },
    {
        "id": 772,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 4830.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_35.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            }
        ]
    },
    {
        "id": 773,
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
        "id": 774,
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
        "id": 775,
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
        "id": 776,
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
        "id": 777,
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
        "id": 778,
        "name": "Rollo De Cocina Sol Mayor X 3 Unid",
        "price": 1250.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo De Cocina Sol Mayor X 3 Unid_8.jpg",
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
        "id": 779,
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
        "id": 780,
        "name": "Papel Higiénico Fresh Hoja Simple 30 M X 4 Un Higienol",
        "price": 1470.0,
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
            }
        ]
    },
    {
        "id": 781,
        "name": "Rollo Cocina Doble Hoja 50 X 3 Un Home Care",
        "price": 1550.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Doble Hoja 50 X 3 Un Home C_1.jpg",
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
            },
            {
                "date": "2026-04-18",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 782,
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
        "id": 783,
        "name": "Rollo Cocina Elegante Doble Hoja Gigante 1x200 Paños",
        "price": 1850.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Elegante Doble Hoja Gigante_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 784,
        "name": "Rollo Cocina Doble Hoja 200 Paños X 1 Un Home Care.",
        "price": 1920.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Doble Hoja 200 Paños X 1 Un_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1920.0
            }
        ]
    },
    {
        "id": 785,
        "name": "Rollo Cocina Clásico 50 Paños 3 Un Sussex",
        "price": 2100.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Clásico 50 Paños 3 Un Susse_7.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 2800.0
            },
            {
                "date": "2026-04-18",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 786,
        "name": "Papel De Cocina Megarollo 200 Sussex",
        "price": 2400.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel De Cocina Megarollo 200 Sussex_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 787,
        "name": "Pollo Congelado Con Menudos",
        "price": 3999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pollo Congelado Con Menudos_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 788,
        "name": "Pollo Fresco Con Menudos",
        "price": 4299.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pollo Fresco Con Menudos_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4299.0
            }
        ]
    },
    {
        "id": 789,
        "name": "Cuarto Trasero De Pollo Granel Fresco",
        "price": 4399.0,
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
            }
        ]
    },
    {
        "id": 790,
        "name": "Pollo Parrillero",
        "price": 4999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pollo Parrillero_6.jpg",
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
        "id": 791,
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
        "id": 792,
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
        "id": 793,
        "name": "Suprema De Pollo Granel Fresca",
        "price": 9899.0,
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
            }
        ]
    },
    {
        "id": 794,
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
        "id": 795,
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
        "id": 796,
        "name": "Pavita Sadia X Kg",
        "price": 13749.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pavita Sadia X Kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13749.0
            }
        ]
    },
    {
        "id": 797,
        "name": "Salchichas Cocidas sin Piel x 6 Un 190 Grs La Blanca",
        "price": 1200.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas Cocidas sin Piel x 6 Un 190 G_12.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 798,
        "name": "Queso Reggianito Rallado 35 Grs x 1 Un La Serenisima",
        "price": 1350.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Reggianito Rallado 35 Grs x 1 Un L_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 799,
        "name": "Queso Reggianito Rallado 40 Grs La Paulina",
        "price": 1800.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Reggianito Rallado 40 Grs La Pauli_18.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 800,
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
        "id": 801,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Blanco 290 Grs La Serenísima_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 802,
        "name": "Queso Crema Blanco x 290 Grs La Serenísima Clásico",
        "price": 2220.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Blanco x 290 Grs La Serenísi_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2220.0
            }
        ]
    },
    {
        "id": 803,
        "name": "Salchichas Viena x 6 Un 225 Grs Granja Iris",
        "price": 2500.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas Viena x 6 Un 225 Grs Granja I_14.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 804,
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
        "id": 805,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 4830.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Blanco Fresco 500 Grs Casanc_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 4830.0
            }
        ]
    },
    {
        "id": 806,
        "name": "Queso Untable Finlandia Clásico 290 Gr",
        "price": 5400.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable Finlandia Clásico 290 Gr_16.jpg",
        "history": [
            {
                "date": "2026-04-08",
                "price": 3850.0
            },
            {
                "date": "2026-04-18",
                "price": 5400.0
            }
        ]
    },
    {
        "id": 807,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1050.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Dos Anclas 500 Gr_0.jpg",
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
            }
        ]
    },
    {
        "id": 808,
        "name": "Sal Parrillera Entrefina 500 Grs Dos Anclas",
        "price": 1050.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Parrillera Entrefina 500 Grs Dos Anc_3.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 809,
        "name": "Sal Gruesa 500 Grs Dos Anclas",
        "price": 1050.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa 500 Grs Dos Anclas_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 810,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1237.5,
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
            }
        ]
    },
    {
        "id": 811,
        "name": "Sal Fina 500 Grs Celusal",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina 500 Grs Celusal_1.jpg",
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
            }
        ]
    },
    {
        "id": 812,
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
        "id": 813,
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
        "id": 814,
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
            }
        ]
    },
    {
        "id": 815,
        "name": "Sal Gruesa 1 Kg Dos Anclas",
        "price": 1912.5,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Gruesa 1 Kg Dos Anclas_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1912.5
            }
        ]
    },
    {
        "id": 816,
        "name": "Sal Parrillera Entrefina 1 Kg Dos Anclas",
        "price": 1912.5,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Parrillera Entrefina 1 Kg Dos Anclas_7.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1912.5
            }
        ]
    }
];