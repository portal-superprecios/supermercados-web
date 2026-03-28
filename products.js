const allProductsData = [
    {
        "id": 1,
        "name": "Vinagre de alcohol Alcazar 1 l.",
        "price": 1230.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Alcazar 1 l_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1230.0
            }
        ]
    },
    {
        "id": 2,
        "name": "Vinagre de alcohol Carrefour classic 1 l.",
        "price": 1431.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Carrefour classic 1 l_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1431.0
            }
        ]
    },
    {
        "id": 3,
        "name": "Vinagre de alcohol Casalta 1 l.",
        "price": 1565.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Casalta 1 l_9.jpg",
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
            }
        ]
    },
    {
        "id": 4,
        "name": "Vinagre de alcohol Menoyo 1 l.",
        "price": 1639.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Vinagre de alcohol Menoyo 1 l_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1229.25
            },
            {
                "date": "2026-03-21",
                "price": 1639.0
            }
        ]
    },
    {
        "id": 5,
        "name": "Aceite de girasol Carrefour Classic  alto omega pet 900 cc.",
        "price": 2998.6,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Carrefour Classic  alt_3.jpg",
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
        "id": 6,
        "name": "Aceite de girasol Pureza 900 cc.",
        "price": 3240.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Pureza 900 cc_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3240.0
            }
        ]
    },
    {
        "id": 7,
        "name": "Aceite de girasol Legitimo 900 cc.",
        "price": 3329.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Legitimo 900 cc_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3449.0
            },
            {
                "date": "2026-03-21",
                "price": 3569.0
            },
            {
                "date": "2026-03-28",
                "price": 3329.0
            }
        ]
    },
    {
        "id": 8,
        "name": "Aceite en aerosol Carrefour classic girasol 150 cc.",
        "price": 3539.9,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite en aerosol Carrefour classic gira_10.jpg",
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
            }
        ]
    },
    {
        "id": 9,
        "name": "Aceite de girasol Cocinero 900 cc.",
        "price": 3705.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Cocinero 900 cc_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3705.0
            }
        ]
    },
    {
        "id": 10,
        "name": "Aceite de girasol Natura 900 cc.",
        "price": 3999.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images/carrefour/Aceite de girasol Natura 900 cc_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 11,
        "name": "Agua mineral sin gas Carrefour Classic 2 lts",
        "price": 959.2,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Carrefour Classic 2_5.jpg",
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
        "image": "images/carrefour/Soda Bulnez 225 lts_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1190.0
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
        "name": "Soda saldan sifón 2 lts",
        "price": 1650.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Soda saldan sifón 2 lts_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 15,
        "name": "Agua saborizada limoneto H2OH con gas 2,25 lts",
        "price": 1692.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua saborizada limoneto H2OH con gas 22_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1692.0
            }
        ]
    },
    {
        "id": 16,
        "name": "Agua mineral sin gas Villavicencio 2 lts",
        "price": 1899.33,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineral sin gas Villavicencio 2 lts_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1899.33
            },
            {
                "date": "2026-03-21",
                "price": 2849.0
            },
            {
                "date": "2026-03-28",
                "price": 1899.33
            }
        ]
    },
    {
        "id": 17,
        "name": "Agua mineralizada sin gas Glaciar bajo sodio 2 lts",
        "price": 2006.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua mineralizada sin gas Glaciar bajo s_11.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2080.0
            },
            {
                "date": "2026-03-28",
                "price": 2006.0
            }
        ]
    },
    {
        "id": 18,
        "name": "Agua mineral sin gas Villa del Sur 2,25 lts",
        "price": 2299.0,
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
            }
        ]
    },
    {
        "id": 19,
        "name": "Agua saborizada de pomelo Levité 2,25 lts",
        "price": 2324.25,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua saborizada de pomelo Levité 225 lts_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2324.25
            }
        ]
    },
    {
        "id": 20,
        "name": "Agua saborizada de manzana Levité 2,25 lts",
        "price": 2324.25,
        "market": "zenith",
        "category": "aguas",
        "image": "images/carrefour/Agua saborizada de manzana Levité 225 lt_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2324.25
            }
        ]
    },
    {
        "id": 21,
        "name": "Alimento húmedo para gato Carrefour 85 g. frutos de mar",
        "price": 1100.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento húmedo para gato Carrefour 85 g_11.jpg",
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
        "image": "images/carrefour/Alimento húmedo para gato Carrefour 85 g_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
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
                "date": "2026-03-28",
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
                "date": "2026-03-28",
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
                "date": "2026-03-28",
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
                "date": "2026-03-28",
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
        "image": "images/carrefour/Alimento húmedo para gato Whiskas 85 g s_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
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
        "image": "images/carrefour/Alimento húmedo para gatitos Whiskas 85 _12.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 29,
        "name": "Alimento seco para gato Raza 1 kg. carne, pescado y arroz",
        "price": 3689.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Raza 1 kg carne _9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3689.0
            }
        ]
    },
    {
        "id": 30,
        "name": "Alimento seco para gato Raza 1 kg. pescado",
        "price": 3689.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images/carrefour/Alimento seco para gato Raza 1 kg pescad_10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3689.0
            }
        ]
    },
    {
        "id": 31,
        "name": "Arroz Molinos Ala largo fino 00000 bolsa 500 g.",
        "price": 787.5,
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
            }
        ]
    },
    {
        "id": 32,
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
            }
        ]
    },
    {
        "id": 33,
        "name": "Arroz parboil Gallo oro en bolsa 500 g.",
        "price": 989.25,
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
            }
        ]
    },
    {
        "id": 34,
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
        "id": 35,
        "name": "Arroz integral Gallo en bolsa 500 g.",
        "price": 1184.25,
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
            }
        ]
    },
    {
        "id": 36,
        "name": "Arroz largo fino 00000 Carrefour Classic en bolsa 1 kg.",
        "price": 1241.08,
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
            }
        ]
    },
    {
        "id": 37,
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
        "id": 38,
        "name": "Arroz largo fino Molinos Ala 1 kg.",
        "price": 1342.5,
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
            }
        ]
    },
    {
        "id": 39,
        "name": "Arroz largo fino 00000 Lucchetti 1 kg.",
        "price": 1349.25,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz largo fino 00000 Lucchetti 1 kg_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1349.25
            }
        ]
    },
    {
        "id": 40,
        "name": "Arroz parboil Lucchetti 1 kg.",
        "price": 1574.25,
        "market": "zenith",
        "category": "arroz",
        "image": "images/carrefour/Arroz parboil Lucchetti 1 kg_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1574.25
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
        "image": "images/carrefour/Osobuco x kg_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/carrefour/Tapa de asado x kg_6.jpg",
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
        "image": "images/carrefour/Tapa de nalga Novillo x kg_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/carrefour/Paleta x kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/carrefour/Bife americano Novillo x kg_8.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 16700.0
            }
        ]
    },
    {
        "id": 51,
        "name": "Almohaditas rellenas Molino Ala de frutilla 90 g.",
        "price": 1237.5,
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
            }
        ]
    },
    {
        "id": 52,
        "name": "Almohaditas rellenas Molinos Ala cacao y vainilla 90 g.",
        "price": 1237.5,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Almohaditas rellenas Molinos Ala cacao y_6.jpg",
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
            }
        ]
    },
    {
        "id": 53,
        "name": "Aritos de cereal 3 Arroyos frutado bolsa 160 g.",
        "price": 1399.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Aritos de cereal 3 Arroyos frutado bolsa_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 54,
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
        "id": 55,
        "name": "Copos de maíz 3 Arroyos azucarados bolsa 200 g.",
        "price": 1570.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz 3 Arroyos azucarados bolsa_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1570.0
            }
        ]
    },
    {
        "id": 56,
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
        "id": 57,
        "name": "Cereal Carrefour copitas con chocolate sin gluten 200 g.",
        "price": 1810.9,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Cereal Carrefour copitas con chocolate s_4.jpg",
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
        "image": "images/carrefour/Cereal Carrefour anillitos fruta sin glu_7.jpg",
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
        "price": 2159.0,
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
            }
        ]
    },
    {
        "id": 60,
        "name": "Copos de maíz 3 Arroyos azucarados bolsa 500 g.",
        "price": 3170.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images/carrefour/Copos de maíz 3 Arroyos azucarados bolsa_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3170.0
            }
        ]
    },
    {
        "id": 61,
        "name": "Cerveza blanca Quilmes Bajo cero en lata 473 ml",
        "price": 1106.25,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Quilmes Bajo cero en lata_9.jpg",
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
        "id": 62,
        "name": "Cerveza blanca Quilmes sin alcohol 473 ml",
        "price": 1200.0,
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
            }
        ]
    },
    {
        "id": 63,
        "name": "Cerveza blanca Amstel Lager pura malta 473 ml",
        "price": 1691.25,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Amstel Lager pura malta 4_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1691.25
            }
        ]
    },
    {
        "id": 64,
        "name": "Cerveza light Michelob Ultra 473 ml",
        "price": 1771.25,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza light Michelob Ultra 473 ml_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1300.0
            },
            {
                "date": "2026-03-21",
                "price": 1771.25
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
        "image": "images/carrefour/Cerveza rubia Brahma 473 ml_11.jpg",
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
        "image": "images/carrefour/Cerveza rubia Andes Origen 473 ml_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1820.0
            },
            {
                "date": "2026-03-21",
                "price": 1901.25
            }
        ]
    },
    {
        "id": 68,
        "name": "Cerveza rubia Budweiser 473 ml",
        "price": 1972.5,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza rubia Budweiser 473 ml_13.jpg",
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
            }
        ]
    },
    {
        "id": 69,
        "name": "Cerveza blanca sin alcohol Corona 0.0% 330 ml",
        "price": 1980.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca sin alcohol Corona 00 330_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1980.0
            }
        ]
    },
    {
        "id": 70,
        "name": "Cerveza blanca Stella Artois 473 ml",
        "price": 2275.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images/carrefour/Cerveza blanca Stella Artois 473 ml_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2275.0
            }
        ]
    },
    {
        "id": 71,
        "name": "Aperitivo sin alcohol Gancia americano 0% en lata 473 ml",
        "price": 2093.0,
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
            }
        ]
    },
    {
        "id": 72,
        "name": "Aperitivo sin alcohol Limón Terma Light 1,75 lts",
        "price": 2360.0,
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
            }
        ]
    },
    {
        "id": 73,
        "name": "Aperitivo sin alcohol Serrano Terma 1,7 lts",
        "price": 2360.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Terma 17 l_8.jpg",
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
            }
        ]
    },
    {
        "id": 74,
        "name": "Aperitivo sin alcohol Pomelo Rosado Terma 1,75 lts",
        "price": 2360.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Pomelo Rosado Term_11.jpg",
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
            }
        ]
    },
    {
        "id": 75,
        "name": "Aperitivo sin alcohol Serrano Terma Cero 1,35 lts",
        "price": 2599.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Serrano Terma Cero_6.jpg",
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
            }
        ]
    },
    {
        "id": 76,
        "name": "Aperitivo sin alcohol Limón Terma Cero 1,35 lts",
        "price": 2599.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Limón Terma Cero 1_12.jpg",
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
            }
        ]
    },
    {
        "id": 77,
        "name": "Aperitivo sin alcohol Pomelo Terma Cero 1,35 lts",
        "price": 2599.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo sin alcohol Pomelo Terma Cero _13.jpg",
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
            }
        ]
    },
    {
        "id": 78,
        "name": "Aperitivo sin alcohol Patagónico Terma Cero 1,35 lts",
        "price": 2599.0,
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
            }
        ]
    },
    {
        "id": 79,
        "name": "Aperitivo americano Gancia en botella 950 ml",
        "price": 7190.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo americano Gancia en botella 95_1.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 7190.0
            }
        ]
    },
    {
        "id": 80,
        "name": "Aperitivo Vermouth Cinzano Rosso  1 l.",
        "price": 7199.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Aperitivo Vermouth Cinzano Rosso  1 l_2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 7199.0
            }
        ]
    },
    {
        "id": 81,
        "name": "Jamón cocido feteado Bulnez 150 grs",
        "price": 1700.0,
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
            }
        ]
    },
    {
        "id": 82,
        "name": "Leberwurst Paladini 250 g.",
        "price": 2190.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Leberwurst Paladini 250 g_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3029.0
            },
            {
                "date": "2026-03-28",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 83,
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
        "name": "Mortadela Paladini mini 300 g.",
        "price": 4399.0,
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
            }
        ]
    },
    {
        "id": 86,
        "name": "Jamón cocido Paladini bajo sodio 150 g.",
        "price": 4899.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido Paladini bajo sodio 150 g_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4899.0
            }
        ]
    },
    {
        "id": 87,
        "name": "Jamón crudo feteado El Artesano 100 g.",
        "price": 5140.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón crudo feteado El Artesano 100 g_15.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 5140.0
            }
        ]
    },
    {
        "id": 88,
        "name": "Jamón cocido feteado Paladini 200 g.",
        "price": 5490.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Jamón cocido feteado Paladini 200 g_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 5490.0
            }
        ]
    },
    {
        "id": 89,
        "name": "Salame tipo milán Lario picado fino feteado 150 g.",
        "price": 5490.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Salame tipo milán Lario picado fino fete_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
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
            }
        ]
    },
    {
        "id": 91,
        "name": "Gaseosa naranja Mirinda 2,25 lts",
        "price": 1837.5,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa naranja Mirinda 225 lts_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1762.5
            },
            {
                "date": "2026-03-21",
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
        "image": "images/carrefour/Gaseosa cola Cunnington suave sin tacc 2_11.jpg",
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
        "image": "images/carrefour/Gaseosa pomelo Cunnignton suave sin tacc_12.jpg",
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
        "name": "Gaseosa cola Pepsi Black pet 1,5 lts",
        "price": 2590.0,
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
            }
        ]
    },
    {
        "id": 95,
        "name": "Gaseosa lima limón 7 Up sin azúcar 1,5 lts",
        "price": 2775.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa lima limón 7 Up sin azúcar 15 lt_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/carrefour/Gaseosa tónica Paso de los Toros 15 lts_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2775.0
            }
        ]
    },
    {
        "id": 97,
        "name": "Gaseosa lima limón 7 Up regular 1,5 lts",
        "price": 2775.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa lima limón 7 Up regular 15 lts_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2775.0
            }
        ]
    },
    {
        "id": 98,
        "name": "Gaseosa cola Coca Cola Zero 1,25 lts",
        "price": 2915.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Coca Cola Zero 125 lts_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2915.0
            }
        ]
    },
    {
        "id": 99,
        "name": "Gaseosa cola Coca Cola sabor original 1,25 lts",
        "price": 2915.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola Coca Cola sabor original 12_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2915.0
            }
        ]
    },
    {
        "id": 100,
        "name": "Gaseosa cola regular Pepsi 2 lts.",
        "price": 2940.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images/carrefour/Gaseosa cola regular Pepsi 2 lts_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2940.0
            }
        ]
    },
    {
        "id": 101,
        "name": "Medallón de merluza rebozados 100 g.",
        "price": 1070.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de merluza rebozados 100 g_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 949.0
            },
            {
                "date": "2026-03-21",
                "price": 1070.0
            }
        ]
    },
    {
        "id": 102,
        "name": "Hamburguesas de pollo Granja tres Arroyos 166 g.",
        "price": 2400.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesas de pollo Granja tres Arroyo_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 103,
        "name": "Hamburguesa congelada Carrefour 2 u.",
        "price": 2800.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa congelada Carrefour 2 u_13.jpg",
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
            }
        ]
    },
    {
        "id": 104,
        "name": "Hamburguesa Swift casera 2 u.",
        "price": 4821.75,
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
            }
        ]
    },
    {
        "id": 105,
        "name": "Medallón de carne Paty express en caja 4 uni",
        "price": 5400.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de carne Paty express en caja 4_4.jpg",
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
            }
        ]
    },
    {
        "id": 106,
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
            }
        ]
    },
    {
        "id": 107,
        "name": "Medallón de carne sin tacc Good Mark en caja 4 uni",
        "price": 7810.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Medallón de carne sin tacc Good Mark en _11.jpg",
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
        "id": 108,
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
            }
        ]
    },
    {
        "id": 109,
        "name": "Hamburguesa Paty clásico en caja 4 uni",
        "price": 8885.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa Paty clásico en caja 4 uni_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 8300.0
            },
            {
                "date": "2026-03-21",
                "price": 8885.0
            }
        ]
    },
    {
        "id": 110,
        "name": "Hamburguesa de carne Unión ganadera 4 uni",
        "price": 10135.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images/carrefour/Hamburguesa de carne Unión ganadera 4 un_10.jpg",
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
            }
        ]
    },
    {
        "id": 111,
        "name": "Harina de Trigo 000 Caserita x 1 kg",
        "price": 899.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina de Trigo 000 Caserita x 1 kg_4.jpg",
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
        "image": "images/carrefour/Harina de trigo Morixe 000 1 kg_1.jpg",
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
        "name": "Harina leudante Bulnez 1 kg",
        "price": 991.9,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina leudante Bulnez 1 kg_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 991.9
            }
        ]
    },
    {
        "id": 114,
        "name": "Harina 0000 Chacabuco 1 kg.",
        "price": 1289.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina 0000 Chacabuco 1 kg_6.jpg",
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
        "image": "images/carrefour/Harina de trigo Morixe 0000 1 kg_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
                "date": "2026-03-16",
                "price": 1335.0
            },
            {
                "date": "2026-03-28",
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
        "image": "images/carrefour/Avena instantanea Carrefour Classic pouc_14.jpg",
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
        "image": "images/carrefour/Harina leudante Chacabuco 1 kg_13.jpg",
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
        "name": "Harina leudante Pureza con vitamina D 1 kg.",
        "price": 1689.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images/carrefour/Harina leudante Pureza con vitamina D 1 _8.jpg",
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
        "image": "images/carrefour/Harina integral Pureza 1 kg_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "name": "Bebida energizante Speed Zero en lata 250 ml",
        "price": 1859.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Speed Zero en lata 25_14.jpg",
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
        "id": 125,
        "name": "Bebida energizante Red Bull Summer Pomerlo en lata 250 ml",
        "price": 2276.25,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Red Bull Summer Pomer_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2276.25
            }
        ]
    },
    {
        "id": 126,
        "name": "Bebida energizante Red Bull Watermelon 250 ml",
        "price": 2399.25,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Red Bull Watermelon 2_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2399.25
            }
        ]
    },
    {
        "id": 127,
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
        "id": 128,
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
        "id": 129,
        "name": "Bebida energizante Monster Mango Loco 473 ml",
        "price": 3100.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante Monster Mango Loco 47_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            }
        ]
    },
    {
        "id": 130,
        "name": "Bebida energizante sin azúcar Monster energy en lata 473 cc.",
        "price": 3100.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images/carrefour/Bebida energizante sin azúcar Monster en_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            }
        ]
    },
    {
        "id": 131,
        "name": "Jugo en polvo Tang naranja dulce 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en polvo Tang naranja dulce 15 g_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 132,
        "name": "Jugo en polvo Tang naranja mango 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en polvo Tang naranja mango 15 g_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 133,
        "name": "Jugo en polvo Tang limonada dulce 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en polvo Tang limonada dulce 15 g_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 134,
        "name": "Jugo en polvo Tang multifruta 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en polvo Tang multifruta 15 g_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 135,
        "name": "Jugo en Polvo Clight Naranja Dulce 7,5 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en Polvo Clight Naranja Dulce 75 gr_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 136,
        "name": "Jugo en Polvo Clight Manzana Deliciosa 7 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en Polvo Clight Manzana Deliciosa 7_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 137,
        "name": "Jugo en Polvo Clight Limonada Arandanos 7,5 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada Arandanos _2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 138,
        "name": "Jugo en Polvo Clight Limonada 8 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada 8 grs_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 139,
        "name": "Jugo en Polvo Clight Naranja Durazno 7,5 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en Polvo Clight Naranja Durazno 75 _4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 140,
        "name": "Jugo en Polvo Clight Pomelo Rosado 8 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "jugos",
        "image": "images/carrefour/Jugo en Polvo Clight Pomelo Rosado 8 grs_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 141,
        "name": "Jugo en polvo Tang naranja dulce 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang naranja dulce 15 g_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 142,
        "name": "Jugo en polvo Tang naranja mango 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang naranja mango 15 g_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 143,
        "name": "Jugo en polvo Tang limonada dulce 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang limonada dulce 15 g_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 144,
        "name": "Jugo en polvo Tang multifruta 15 g.",
        "price": 359.25,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en polvo Tang multifruta 15 g_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 359.25
            }
        ]
    },
    {
        "id": 145,
        "name": "Jugo en Polvo Clight Naranja Dulce 7,5 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Naranja Dulce 75 gr_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 146,
        "name": "Jugo en Polvo Clight Manzana Deliciosa 7 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Manzana Deliciosa 7_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 147,
        "name": "Jugo en Polvo Clight Limonada Arandanos 7,5 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada Arandanos _2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 148,
        "name": "Jugo en Polvo Clight Limonada 8 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Limonada 8 grs_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 149,
        "name": "Jugo en Polvo Clight Naranja Durazno 7,5 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Naranja Durazno 75 _4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 150,
        "name": "Jugo en Polvo Clight Pomelo Rosado 8 grs",
        "price": 366.75,
        "market": "zenith",
        "category": "leches",
        "image": "images/carrefour/Jugo en Polvo Clight Pomelo Rosado 8 grs_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 366.75
            }
        ]
    },
    {
        "id": 151,
        "name": "Limpiador multiuso Multimax para diluir lavanda (rinde 5 litros) 150 ml.",
        "price": 1267.5,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1690.0
            },
            {
                "date": "2026-03-28",
                "price": 1267.5
            }
        ]
    },
    {
        "id": 152,
        "name": "Limpiador multiuso Multimax para diluir marina (rinde 5 litros) 150 ml.",
        "price": 1267.5,
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
            }
        ]
    },
    {
        "id": 153,
        "name": "Limpiador multiuso Multimax para diluir cherry (rinde 5 litros) 150 ml.",
        "price": 1267.5,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador multiuso Multimax para diluir _11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1690.0
            },
            {
                "date": "2026-03-28",
                "price": 1267.5
            }
        ]
    },
    {
        "id": 154,
        "name": "Limpiador líquido aromatizante Poett frescura de lavanda 900 ml.",
        "price": 1481.35,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido aromatizante Poett fre_10.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2279.0
            },
            {
                "date": "2026-03-28",
                "price": 1481.35
            }
        ]
    },
    {
        "id": 155,
        "name": "Limpiador Vidrios y Multiuso Cif Expert Doypack 450 ml",
        "price": 2139.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador Vidrios y Multiuso Cif Expert _2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2139.0
            }
        ]
    },
    {
        "id": 156,
        "name": "Limpiador Multisuperficies Cif Original Ultra Brillo Doypack 380 ml",
        "price": 2145.0,
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
            }
        ]
    },
    {
        "id": 157,
        "name": "Limpiador líquido Procenex pisos lavanda 1.8 l.",
        "price": 3890.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos lavanda_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3890.0
            }
        ]
    },
    {
        "id": 158,
        "name": "Limpiador líquido Procenex pisos marina 1.8 l.",
        "price": 3890.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos marina _9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3890.0
            }
        ]
    },
    {
        "id": 159,
        "name": "Limpiador líquido Procenex pisos flores de jardín 1.8 l.",
        "price": 3890.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido Procenex pisos flores _13.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3890.0
            }
        ]
    },
    {
        "id": 160,
        "name": "Limpiador líquido aromatizante Poett frescura de lavanda 1.8 lts.",
        "price": 3995.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images/carrefour/Limpiador líquido aromatizante Poett fre_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3995.0
            }
        ]
    },
    {
        "id": 161,
        "name": "Alimento húmedo para perro Carrefour 100 g. adultos carne",
        "price": 1100.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Carrefour 100_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            }
        ]
    },
    {
        "id": 162,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pequeños carne",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 163,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pequeños pollo",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 164,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos carne",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 165,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pollo",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 166,
        "name": "Alimento húmedo para perro Pedigree 100 g. mayores 7 años carne",
        "price": 1299.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento húmedo para perro Pedigree 100 _15.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/carrefour/Snack para perros Pedigree Biscrok 100 g_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2038.0
            }
        ]
    },
    {
        "id": 168,
        "name": "Snack para perros Pedigree Rodeo 4 u. carne",
        "price": 2569.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Snack para perros Pedigree Rodeo 4 u car_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2569.0
            }
        ]
    },
    {
        "id": 169,
        "name": "Snack para perros Pedigree Dentastix 7 u. razas medianas",
        "price": 4959.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Snack para perros Pedigree Dentastix 7 u_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4959.0
            }
        ]
    },
    {
        "id": 170,
        "name": "Alimento seco para perro Pedigree 3 kg. adultos pequeños",
        "price": 12305.0,
        "market": "zenith",
        "category": "perros",
        "image": "images/carrefour/Alimento seco para perro Pedigree 3 kg a_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 12305.0
            }
        ]
    },
    {
        "id": 171,
        "name": "Pañal Carrefour baby talle XXG hiperpack 26 uni",
        "price": 8074.6,
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
            }
        ]
    },
    {
        "id": 172,
        "name": "Pañal Carrefour baby talle XG hiperpack 28 uni",
        "price": 8074.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Carrefour baby talle XG hiperpack _2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10330.6
            },
            {
                "date": "2026-03-28",
                "price": 8074.6
            }
        ]
    },
    {
        "id": 173,
        "name": "Pañal Carrefour baby talle G hiperpack 32 uni",
        "price": 8074.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Carrefour baby talle G hiperpack 3_8.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 8074.6
            }
        ]
    },
    {
        "id": 174,
        "name": "Pañal Huggies Flexi Comfort talle RN edición limitada 34 uni",
        "price": 10271.4,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Flexi Comfort talle RN edi_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 17119.0
            },
            {
                "date": "2026-03-21",
                "price": 10271.4
            }
        ]
    },
    {
        "id": 175,
        "name": "Pañales Babysec ultrasoft XXG 30 uni",
        "price": 14365.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Babysec ultrasoft XXG 30 uni_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 14365.0
            }
        ]
    },
    {
        "id": 176,
        "name": "Pañal Huggies Flexi Comfort talle P edición limitada 50 uni",
        "price": 15921.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañal Huggies Flexi Comfort talle P edic_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 15921.0
            }
        ]
    },
    {
        "id": 177,
        "name": "Pañales Estrella talle XXG 34 u.",
        "price": 17989.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Estrella talle XXG 34 u_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 17989.0
            }
        ]
    },
    {
        "id": 178,
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
            }
        ]
    },
    {
        "id": 179,
        "name": "Pañales Huggies Natural Care P 30 uni",
        "price": 18949.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales Huggies Natural Care P 30 uni_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 18949.0
            }
        ]
    },
    {
        "id": 180,
        "name": "Pañales talle XXG Toddler Deluxe 28 uni",
        "price": 19470.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images/carrefour/Pañales talle XXG Toddler Deluxe 28 uni_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 19470.0
            }
        ]
    },
    {
        "id": 181,
        "name": "Papel higie´nico Bulnez hoja simple x4 30 mts",
        "price": 1590.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higienico Bulnez hoja simple x4 30_12.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1590.0
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
        "name": "Papel higiénico Higienol Fresh hoja simple 30 mts 4 uni",
        "price": 2219.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Fresh hoja simp_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2219.0
            }
        ]
    },
    {
        "id": 184,
        "name": "Papel higiénico doble hoja Carrefour Essential 4 x 30 mts",
        "price": 3617.7,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico doble hoja Carrefour Ess_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2780.7
            },
            {
                "date": "2026-03-28",
                "price": 3617.7
            }
        ]
    },
    {
        "id": 185,
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
            }
        ]
    },
    {
        "id": 186,
        "name": "Papel higienico Elite Ultra Suave doble hoja 30 mts 4 uni",
        "price": 3712.5,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higienico Elite Ultra Suave doble _9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3712.5
            }
        ]
    },
    {
        "id": 187,
        "name": "Papel higiénico doble hoja Elegante 4 x 30 m.",
        "price": 3999.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico doble hoja Elegante 4 x _6.jpg",
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
        "id": 188,
        "name": "Papel higienico doble hoja Higienol plus x4 30 mts.",
        "price": 4045.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higienico doble hoja Higienol plus_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4045.0
            }
        ]
    },
    {
        "id": 189,
        "name": "Papel higiénico Felpita blanquísimo hoja simple 4 x 80 m.",
        "price": 4196.25,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Felpita blanquísimo hoja_10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 4196.25
            }
        ]
    },
    {
        "id": 190,
        "name": "Papel higiénico Higienol Premium doble hoja 30 mts 4 uni",
        "price": 4449.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images/carrefour/Papel higiénico Higienol Premium doble h_14.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 4449.0
            }
        ]
    },
    {
        "id": 191,
        "name": "Pollo entero congelado x kg.",
        "price": 3979.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pollo entero congelado x kg_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3979.0
            }
        ]
    },
    {
        "id": 192,
        "name": "Cuarto trasero congelado x kg.",
        "price": 4190.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Cuarto trasero congelado x kg_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4990.0
            },
            {
                "date": "2026-03-21",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 193,
        "name": "Pollo fresco en bandeja marca propia x kg.",
        "price": 6700.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Pollo fresco en bandeja marca propia x k_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6700.0
            }
        ]
    },
    {
        "id": 194,
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
        "id": 195,
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
        "id": 196,
        "name": "Muslos de pollo al vacío Que Rico x kg.",
        "price": 10040.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Muslos de pollo al vacío Que Rico x kg_3.jpg",
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
        "image": "images/carrefour/Muslo de pollo Granja tres arroyos x kg_12.jpg",
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
        "image": "images/carrefour/Patas de pollo al vacio Que rico x kg_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10800.0
            }
        ]
    },
    {
        "id": 199,
        "name": "Suprema congelada x kg.",
        "price": 12900.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Suprema congelada x kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7290.0
            },
            {
                "date": "2026-03-21",
                "price": 12900.0
            }
        ]
    },
    {
        "id": 200,
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
        "id": 201,
        "name": "Queso blanco original La SerenÍsima clásico 290 grs",
        "price": 2466.0,
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
            }
        ]
    },
    {
        "id": 202,
        "name": "Queso blanco light La SerenÍsima Clásico 290 grs",
        "price": 2466.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso blanco light La SerenÍsima Clásico_11.jpg",
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
            }
        ]
    },
    {
        "id": 203,
        "name": "Queso crema Tonadita cremette light 290 g.",
        "price": 2999.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema Tonadita cremette light 290 _9.jpg",
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
        "id": 204,
        "name": "Ricotta Tregar magra bajo sodio en pote 290 g.",
        "price": 3349.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Ricotta Tregar magra bajo sodio en pote _15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3349.0
            }
        ]
    },
    {
        "id": 205,
        "name": "Queso La Serenísima cremón light pote 280 g.",
        "price": 3750.0,
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
            }
        ]
    },
    {
        "id": 206,
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
            }
        ]
    },
    {
        "id": 207,
        "name": "Queso untable Finlandia pote 290 g.",
        "price": 3851.25,
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
            }
        ]
    },
    {
        "id": 208,
        "name": "La Paulina queso reggianito rallado 150 grs",
        "price": 4146.75,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/La Paulina queso reggianito rallado 150 _2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 4146.75
            }
        ]
    },
    {
        "id": 209,
        "name": "Queso crema clásico Casancrem 290 grs",
        "price": 5155.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso crema clásico Casancrem 290 grs_6.jpg",
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
            }
        ]
    },
    {
        "id": 210,
        "name": "Queso cremoso Puyehue horma x kg.",
        "price": 7990.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images/carrefour/Queso cremoso Puyehue horma x kg_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 7990.0
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
        "image": "images/carrefour/Sal fina Dos Estrellas 500 g_4.jpg",
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
        "image": "images/carrefour/Sal fina Carrefour Classic en bolsa 500 _9.jpg",
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
        "name": "Sal gruesa Dos Anclas caja 500 g.",
        "price": 1349.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Dos Anclas caja 500 g_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1349.0
            }
        ]
    },
    {
        "id": 215,
        "name": "Sal parrillera Dos Anclas caja 500 g.",
        "price": 1359.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal parrillera Dos Anclas caja 500 g_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1339.0
            },
            {
                "date": "2026-03-28",
                "price": 1359.0
            }
        ]
    },
    {
        "id": 216,
        "name": "Sal gruesa Celusal 500 g.",
        "price": 1405.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Celusal 500 g_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1405.0
            }
        ]
    },
    {
        "id": 217,
        "name": "Sal fina Celusal paquete 500 g.",
        "price": 1409.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Celusal paquete 500 g_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1409.0
            }
        ]
    },
    {
        "id": 218,
        "name": "Sal fina Dos Anclas en paquete 500 grs",
        "price": 1429.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Dos Anclas en paquete 500 grs_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 219,
        "name": "Sal gruesa Bulnez en bolsa 1 kg.",
        "price": 1490.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal gruesa Bulnez en bolsa 1 kg_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 220,
        "name": "Sal fina Dos Anclas 500 g.",
        "price": 1619.0,
        "market": "zenith",
        "category": "sal",
        "image": "images/carrefour/Sal fina Dos Anclas 500 g_8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1619.0
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
        "image": "images/carrefour/Mani pelado salado Carrefour classic 115_7.jpg",
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
        "name": "Palitos de maíz sabor queso Carrefour classic 145 g.",
        "price": 1341.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Palitos de maíz sabor queso Carrefour cl_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1341.0
            }
        ]
    },
    {
        "id": 224,
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
        "id": 225,
        "name": "Aritos de arroz Dos Hermanos crema y cebolla 80 g.",
        "price": 1549.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Aritos de arroz Dos Hermanos crema y ceb_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1549.0
            }
        ]
    },
    {
        "id": 226,
        "name": "Papas fritas Carrefour classic corte tradicional 150 g.",
        "price": 1771.1,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Carrefour classic corte tra_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1771.1
            }
        ]
    },
    {
        "id": 227,
        "name": "Galletitas crackers Kesitas 125 g.",
        "price": 2059.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Galletitas crackers Kesitas 125 g_13.jpg",
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
        "name": "Papas fritas Bulnez sabor original en tubo 100 grs",
        "price": 2190.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Bulnez sabor original en tu_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 229,
        "name": "Papas fritas Bulnez sabor queso y cebolla en tubo 100 grs",
        "price": 2190.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Bulnez sabor queso y ceboll_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 230,
        "name": "Papas fritas Carrefour classic corte americano 150 g.",
        "price": 2460.5,
        "market": "zenith",
        "category": "snacks",
        "image": "images/carrefour/Papas fritas Carrefour classic corte ame_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2460.5
            }
        ]
    },
    {
        "id": 231,
        "name": "Yogur entero La Serenísima sabor vainilla 120 grs",
        "price": 783.33,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur entero La Serenísima sabor vainill_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 783.33
            }
        ]
    },
    {
        "id": 232,
        "name": "Yogur cremoso descremado La Serenísima sabor frutilla 120 grs",
        "price": 783.33,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur cremoso descremado La Serenísima s_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 783.33
            }
        ]
    },
    {
        "id": 233,
        "name": "Yogur Griego sabor vainilla Yogurísimo 140 grs",
        "price": 1223.33,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego sabor vainilla Yogurísimo 1_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1835.0
            },
            {
                "date": "2026-03-21",
                "price": 1223.33
            }
        ]
    },
    {
        "id": 234,
        "name": "Yogur Griego sabor frutilla Yogurísimo 140 grs",
        "price": 1223.33,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego sabor frutilla Yogurísimo 1_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1835.0
            },
            {
                "date": "2026-03-21",
                "price": 1223.33
            }
        ]
    },
    {
        "id": 235,
        "name": "Yogur entero natural Tregar sin azúcar en pote 140 g.",
        "price": 1387.5,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur entero natural Tregar sin azúcar e_12.jpg",
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
            }
        ]
    },
    {
        "id": 236,
        "name": "Yogur cremoso Milkaut sabor natural en pote 180 g.",
        "price": 1556.25,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur cremoso Milkaut sabor natural en p_8.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1556.25
            }
        ]
    },
    {
        "id": 237,
        "name": "Yogur Griego natural sin endulzar Yogurísimo 190 grs",
        "price": 1766.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego natural sin endulzar Yogurí_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2649.0
            },
            {
                "date": "2026-03-21",
                "price": 1766.0
            }
        ]
    },
    {
        "id": 238,
        "name": "Yogur batido Ser PRO+ con proteínas sabor natural 175 grs",
        "price": 1800.0,
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
            }
        ]
    },
    {
        "id": 239,
        "name": "Yogur batido Ser PRO+ con proteínas sabor frutos rojos 175 grs",
        "price": 1800.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur batido Ser PRO con proteínas sabor_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2700.0
            },
            {
                "date": "2026-03-21",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 240,
        "name": "Yogur Griego natural endulzado Yogurísimo 190 grs",
        "price": 1830.0,
        "market": "zenith",
        "category": "all",
        "image": "images/carrefour/Yogur Griego natural endulzado Yogurísim_15.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1830.0
            }
        ]
    },
    {
        "id": 241,
        "name": "Aceite Mezcla Cocinero 900cc",
        "price": 2204.25,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Cocinero 900cc_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2939.0
            },
            {
                "date": "2026-03-28",
                "price": 2204.25
            }
        ]
    },
    {
        "id": 242,
        "name": "Aceite Mezcla Siglo De Oro 900 Ml",
        "price": 2839.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Mezcla Siglo De Oro 900 Ml_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2839.0
            }
        ]
    },
    {
        "id": 243,
        "name": "Aceite De Girasol Cocinero 900 Ml",
        "price": 2924.25,
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
            }
        ]
    },
    {
        "id": 244,
        "name": "Aceite De Girasol Legitimo 900 Ml",
        "price": 3329.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Legitimo 900 Ml_3.jpg",
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
            }
        ]
    },
    {
        "id": 245,
        "name": "Aceite De Girasol Cañuelas 900 Ml",
        "price": 3729.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Cañuelas 900 Ml_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3729.0
            }
        ]
    },
    {
        "id": 246,
        "name": "Aceite De Girasol Natural 900 Ml",
        "price": 3999.0,
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
            }
        ]
    },
    {
        "id": 247,
        "name": "Aceite En Aerosol Natura Con Aceite De Girasol 120 Ml",
        "price": 4129.0,
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
            }
        ]
    },
    {
        "id": 248,
        "name": "Aceite De Girasol Cocinero 1.5 L",
        "price": 4401.75,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite De Girasol Cocinero 15 L_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 4401.75
            }
        ]
    },
    {
        "id": 249,
        "name": "Aceite Fritolim Cocinero Clásico 120 G",
        "price": 4759.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Fritolim Cocinero Clásico 120 G_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4759.0
            }
        ]
    },
    {
        "id": 250,
        "name": "Aceite Fritolim Cocinero Sabor Manteca 120 G",
        "price": 4759.0,
        "market": "terra",
        "category": "aceite",
        "image": "images/changomas/Aceite Fritolim Cocinero Sabor Manteca 1_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4759.0
            }
        ]
    },
    {
        "id": 251,
        "name": "Agua Mineral Sin Gas Check 2 L",
        "price": 1069.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Sin Gas Check 2 L_7.jpg",
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
        "id": 252,
        "name": "Soda Ivess 2,25 L",
        "price": 1199.0,
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
            }
        ]
    },
    {
        "id": 253,
        "name": "Agua Mineral Ivess Sin Gas Baja En Sodio 2, 255 L",
        "price": 1199.0,
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
            }
        ]
    },
    {
        "id": 254,
        "name": "Agua Mineralizada Cellier 2 Lts",
        "price": 1429.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineralizada Cellier 2 Lts_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 255,
        "name": "Agua Saborizada H2oh! Still Sabor Limoneto 2 L",
        "price": 1524.5,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Saborizada H2oh Still Sabor Limonet_22.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1524.5
            }
        ]
    },
    {
        "id": 256,
        "name": "Agua Cellier Favaloro Con Gas 2 L",
        "price": 1599.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Cellier Favaloro Con Gas 2 L_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 257,
        "name": "Agua Con Gas Sifón Sierra De Los Padres 1.75 Lt",
        "price": 1629.0,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Con Gas Sifón Sierra De Los Padres _11.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "name": "Soda Ivess Menos Sodio 1.75 L",
        "price": 1699.0,
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
            }
        ]
    },
    {
        "id": 260,
        "name": "Agua Mineral Villavicencio Sin Gas 2 L",
        "price": 1994.3,
        "market": "terra",
        "category": "aguas",
        "image": "images/changomas/Agua Mineral Villavicencio Sin Gas 2 L_8.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1994.3
            }
        ]
    },
    {
        "id": 261,
        "name": "Alimento Humedo Gato Atun Sardina Pets Class X85gr",
        "price": 772.67,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Humedo Gato Atun Sardina Pets C_21.jpg",
        "history": [
            {
                "date": "2026-03-28",
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
        "image": "images/changomas/Alimento Humedo Gato Salmon Rosado Pets _23.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 772.67
            }
        ]
    },
    {
        "id": 263,
        "name": "Alimento Adulto Salmon Pouch Whiskas 85 Gr",
        "price": 1299.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Adulto Salmon Pouch Whiskas 85 _5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 264,
        "name": "Alimento Adulto Carne Pouch Whiskas 85 Gr",
        "price": 1299.0,
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
            }
        ]
    },
    {
        "id": 265,
        "name": "Alimento Adulto Pollo Pouch Whiskas 85 Gr",
        "price": 1299.0,
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
            }
        ]
    },
    {
        "id": 266,
        "name": "Alimento Adulto Sardina Pouch Whiskas 85 Gr",
        "price": 1299.0,
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
            }
        ]
    },
    {
        "id": 267,
        "name": "Alimento Gato Pavo Pocuh Whiskas 85 Gr",
        "price": 1299.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento Gato Pavo Pocuh Whiskas 85 Gr_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 866.0
            },
            {
                "date": "2026-03-21",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 268,
        "name": "Alimento De Gatos Cat Chow Sabor Pollo 85 G",
        "price": 1609.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Alimento De Gatos Cat Chow Sabor Pollo 8_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1609.0
            },
            {
                "date": "2026-03-21",
                "price": 1206.75
            },
            {
                "date": "2026-03-28",
                "price": 1609.0
            }
        ]
    },
    {
        "id": 269,
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
        "id": 270,
        "name": "Piedras Sanitarias Pets Class  2 Kg",
        "price": 2049.0,
        "market": "terra",
        "category": "gatos",
        "image": "images/changomas/Piedras Sanitarias Pets Class  2 Kg_8.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1536.75
            },
            {
                "date": "2026-03-28",
                "price": 2049.0
            }
        ]
    },
    {
        "id": 271,
        "name": "Alimento Humedo  Perro Carne Pets Class X 100 Grs",
        "price": 772.67,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Humedo  Perro Carne Pets Class _13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1159.0
            },
            {
                "date": "2026-03-28",
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
        "image": "images/changomas/Alimento Humedo   Perro Pollo Pets Clas _17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1159.0
            },
            {
                "date": "2026-03-28",
                "price": 772.67
            }
        ]
    },
    {
        "id": 273,
        "name": "Alimento Perro  Razas Grandes Pollo Pedigree 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Perro  Razas Grandes Pollo Pedi_5.jpg",
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
            }
        ]
    },
    {
        "id": 274,
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
            }
        ]
    },
    {
        "id": 275,
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
            }
        ]
    },
    {
        "id": 276,
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
            }
        ]
    },
    {
        "id": 277,
        "name": "Alimento Adulto Raza Peq Pollo Pedigree Pouch 100 Gr",
        "price": 866.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Raza Peq Pollo Pedigree _19.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1299.0
            },
            {
                "date": "2026-03-28",
                "price": 866.0
            }
        ]
    },
    {
        "id": 278,
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
            }
        ]
    },
    {
        "id": 279,
        "name": "Alimento Adulto Carne Lata Pedigree 340 Gr",
        "price": 2666.0,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Alimento Adulto Carne Lata Pedigree 340 _22.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2666.0
            }
        ]
    },
    {
        "id": 280,
        "name": "Snack Dentastix Razas Medianas Pedigree X 7un",
        "price": 3719.25,
        "market": "terra",
        "category": "perros",
        "image": "images/changomas/Snack Dentastix Razas Medianas Pedigree _10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4959.0
            },
            {
                "date": "2026-03-28",
                "price": 3719.25
            }
        ]
    },
    {
        "id": 281,
        "name": "Arroz Largo Fino Maximo 500gr",
        "price": 779.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Maximo 500gr_10.jpg",
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
        "image": "images/changomas/Arroz Largo Fino Lucchetti 500gr_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 969.0
            }
        ]
    },
    {
        "id": 283,
        "name": "Arroz Lucchetti Parboil 500 G",
        "price": 1109.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Lucchetti Parboil 500 G_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1109.0
            }
        ]
    },
    {
        "id": 284,
        "name": "Arroz Integral Cañuelas 500 G",
        "price": 1149.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Integral Cañuelas 500 G_23.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1149.0
            }
        ]
    },
    {
        "id": 285,
        "name": "Arroz Gallo Largo Fino Selección 500 G",
        "price": 1159.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Gallo Largo Fino Selección 500 G_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 286,
        "name": "Arroz Largo Fino Dos Hermanos 1 Kg",
        "price": 1199.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Largo Fino Dos Hermanos 1 Kg_2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1199.0
            }
        ]
    },
    {
        "id": 287,
        "name": "Arroz Gallo Oro 500 G",
        "price": 1319.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Gallo Oro 500 G_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1319.0
            }
        ]
    },
    {
        "id": 288,
        "name": "Arroz Molinos Ala Integral 500 Gr",
        "price": 1369.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Molinos Ala Integral 500 Gr_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1369.0
            }
        ]
    },
    {
        "id": 289,
        "name": "Arroz Check Largo Fino 1 Kg",
        "price": 1399.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Check Largo Fino 1 Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1439.0
            },
            {
                "date": "2026-03-21",
                "price": 1349.0
            },
            {
                "date": "2026-03-28",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 290,
        "name": "Arroz Gallo Integral 500 G",
        "price": 1579.0,
        "market": "terra",
        "category": "arroz",
        "image": "images/changomas/Arroz Gallo Integral 500 G_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1579.0
            }
        ]
    },
    {
        "id": 291,
        "name": "Carne Picada Swift Congelada 500 G",
        "price": 6989.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carne Picada Swift Congelada 500 G_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6989.0
            }
        ]
    },
    {
        "id": 292,
        "name": "Carre De Cerdo Congelado 1 Kg",
        "price": 8299.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Carre De Cerdo Congelado 1 Kg_8.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 8299.0
            }
        ]
    },
    {
        "id": 293,
        "name": "Pechito De Cerdo Congelado 900 G",
        "price": 8299.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Pechito De Cerdo Congelado 900 G_14.jpg",
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
        "image": "images/changomas/Carne Picada Especial 750 G_7.jpg",
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
        "name": "Bondiola Congelada 2.5 Kg",
        "price": 10900.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Bondiola Congelada 25 Kg_10.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 6989.0
            },
            {
                "date": "2026-03-28",
                "price": 10900.0
            }
        ]
    },
    {
        "id": 296,
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
        "id": 297,
        "name": "Tapa De Nalga De Novillito Envasado Al Vacío 1.3 Kg",
        "price": 12899.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Tapa De Nalga De Novillito Envasado Al V_5.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 12899.0
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
        "name": "Asado De Tira De Novillito 1 Kg",
        "price": 15999.0,
        "market": "terra",
        "category": "carnes",
        "image": "images/changomas/Asado De Tira De Novillito 1 Kg_17.jpg",
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
        "image": "images/changomas/Barritas De Cereal Yogurt Frutilla Light_20.jpg",
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
        "image": "images/changomas/Aritos De Cereal Frutados 3 Arroyos 160g_7.jpg",
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
        "name": "Cereal Azucarado Skarchitos 240 Gr",
        "price": 1729.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Azucarado Skarchitos 240 Gr_4.jpg",
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
        "id": 304,
        "name": "Cereal Check Bastoncitos Integrales De Salvado 250 G",
        "price": 1999.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Check Bastoncitos Integrales De S_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 305,
        "name": "Cereales Formis Estrellas Sabor Frutal 145 G",
        "price": 2059.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereales Formis Estrellas Sabor Frutal 1_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2059.0
            }
        ]
    },
    {
        "id": 306,
        "name": "Cereal Check Ositos Azucarados 200 G",
        "price": 2099.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Check Ositos Azucarados 200 G_16.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2099.0
            }
        ]
    },
    {
        "id": 307,
        "name": "Cereal Bolitas Check Chocolate 200 G",
        "price": 2299.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Cereal Bolitas Check Chocolate 200 G_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 308,
        "name": "Barra Proteica Integra De Maní Chocolate 45 G",
        "price": 2299.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Barra Proteica Integra De Maní Chocolate_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1532.67
            },
            {
                "date": "2026-03-21",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 309,
        "name": "Barra Proteica Integra De Pasta De Maní Y Arándanos 43 G",
        "price": 2299.0,
        "market": "terra",
        "category": "cereales",
        "image": "images/changomas/Barra Proteica Integra De Pasta De Maní _23.jpg",
        "history": [
            {
                "date": "2026-03-28",
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
                "date": "2026-03-28",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 311,
        "name": "Cerveza En Lata Brahma 354ml",
        "price": 1289.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza En Lata Brahma 354ml_22.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1289.0
            }
        ]
    },
    {
        "id": 312,
        "name": "Cerveza Rubia Quilmes 1890 473 Cc",
        "price": 1424.25,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes 1890 473 Cc_3.jpg",
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
            }
        ]
    },
    {
        "id": 313,
        "name": "Cerveza Rubia Amstel Lager 473 Ml",
        "price": 1799.25,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Amstel Lager 473 Ml_8.jpg",
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
            }
        ]
    },
    {
        "id": 314,
        "name": "Cerveza Rubia Schneider 473 Ml",
        "price": 2159.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider 473 Ml_11.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1619.25
            },
            {
                "date": "2026-03-28",
                "price": 2159.0
            }
        ]
    },
    {
        "id": 315,
        "name": "Cerveza Rubia Corona Cero Alcohol 330 Ml",
        "price": 2379.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Corona Cero Alcohol 330 Ml_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2144.35
            },
            {
                "date": "2026-03-21",
                "price": 2379.3
            }
        ]
    },
    {
        "id": 316,
        "name": "Cerveza Rubia Schneider Remix Limón 473 Ml",
        "price": 2399.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Schneider Remix Limón 473 _23.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 317,
        "name": "Cerveza Rubia Quilmes Laton 710 Cc",
        "price": 2549.25,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes Laton 710 Cc_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2549.25
            }
        ]
    },
    {
        "id": 318,
        "name": "Cerveza Rubia Quilmes 1890 Retornable 1 L",
        "price": 2624.25,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Quilmes 1890 Retornable 1 _2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2624.25
            }
        ]
    },
    {
        "id": 319,
        "name": "Cerveza Rubia Imperial 473 Ml",
        "price": 2699.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Imperial 473 Ml_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1754.35
            },
            {
                "date": "2026-03-21",
                "price": 2024.25
            },
            {
                "date": "2026-03-28",
                "price": 2699.0
            }
        ]
    },
    {
        "id": 320,
        "name": "Cerveza Rubia Corona 330 Cc",
        "price": 2729.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images/changomas/Cerveza Rubia Corona 330 Cc_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2729.3
            }
        ]
    },
    {
        "id": 321,
        "name": "Gaseosa Cunnington Pomelo Suave 2.25 L",
        "price": 1874.25,
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
            }
        ]
    },
    {
        "id": 322,
        "name": "Gaseosa Cunnington Cola Sin Azúcar 2.25 L",
        "price": 1874.25,
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
            }
        ]
    },
    {
        "id": 323,
        "name": "Gaseosa Cunnington Lima 2.25 L",
        "price": 1874.25,
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
            }
        ]
    },
    {
        "id": 324,
        "name": "Agua Tónica Cunnington 2.25 L",
        "price": 1874.25,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Agua Tónica Cunnington 225 L_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1874.25
            }
        ]
    },
    {
        "id": 325,
        "name": "Gaseosa Lima Limón 7up Sin Azúcar 1.5 L",
        "price": 1889.0,
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
            }
        ]
    },
    {
        "id": 326,
        "name": "Gaseosa Pepsi Black Sin Azúcar 2 L",
        "price": 2099.5,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Pepsi Black Sin Azúcar 2 L_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2099.5
            }
        ]
    },
    {
        "id": 327,
        "name": "Gaseosa Coca Cola Original 354ml",
        "price": 2199.0,
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
        "name": "Gaseosa Coca Cola Zero 1.25 L",
        "price": 2481.15,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Coca Cola Zero 125 L_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2481.15
            },
            {
                "date": "2026-03-21",
                "price": 1946.0
            },
            {
                "date": "2026-03-28",
                "price": 2481.15
            }
        ]
    },
    {
        "id": 330,
        "name": "Gaseosa Coca Cola Sabor Original Menos Azúcares 1,25 L",
        "price": 2481.15,
        "market": "terra",
        "category": "gaseosas",
        "image": "images/changomas/Gaseosa Coca Cola Sabor Original Menos A_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2481.15
            },
            {
                "date": "2026-03-21",
                "price": 1946.0
            },
            {
                "date": "2026-03-28",
                "price": 2481.15
            }
        ]
    },
    {
        "id": 331,
        "name": "Medallones De Carne Aliada 2 U 110 G",
        "price": 1511.3,
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
            }
        ]
    },
    {
        "id": 332,
        "name": "Medallon De Carne Vacuna Express 110 G 2u",
        "price": 2379.0,
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
            }
        ]
    },
    {
        "id": 333,
        "name": "Hamburguesas Paty Finas 2 U 110 G",
        "price": 3339.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Hamburguesas Paty Finas 2 U 110 G_23.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3339.0
            }
        ]
    },
    {
        "id": 334,
        "name": "Medallones Veggies Granja Del Sol Con Cebolla Caramelizada Y Arroz Yamaní 440g 4u",
        "price": 3554.5,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Veggies Granja Del Sol Con Ce_22.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3554.5
            }
        ]
    },
    {
        "id": 335,
        "name": "Medallón Green Life De Calabaza Y Choclo 380 G 4u",
        "price": 3574.35,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallón Green Life De Calabaza Y Choclo_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5499.0
            },
            {
                "date": "2026-03-28",
                "price": 3574.35
            }
        ]
    },
    {
        "id": 336,
        "name": "Medallón Green Life De Lentejas Y Zanahorias 380 G 4u",
        "price": 3574.35,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallón Green Life De Lentejas Y Zanaho_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5499.0
            },
            {
                "date": "2026-03-28",
                "price": 3574.35
            }
        ]
    },
    {
        "id": 337,
        "name": "Medallones De Merluza Grangys Con Espinaca Y Queso 430 G",
        "price": 3649.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Merluza Grangys Con Espina_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3649.0
            }
        ]
    },
    {
        "id": 338,
        "name": "Medallones Swift De Carne 276g 4u",
        "price": 5039.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones Swift De Carne 276g 4u_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5039.0
            }
        ]
    },
    {
        "id": 339,
        "name": "Medallones De Carne Vacuna Paty Express 276 G 4u",
        "price": 5789.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Medallones De Carne Vacuna Paty Express _7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4049.25
            },
            {
                "date": "2026-03-21",
                "price": 5789.0
            }
        ]
    },
    {
        "id": 340,
        "name": "Hamburguesas Swift Tipo Casera 240g 2u",
        "price": 6429.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images/changomas/Hamburguesas Swift Tipo Casera 240g 2u_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 6429.0
            }
        ]
    },
    {
        "id": 341,
        "name": "Harina 000 Morixe X 1 Kg",
        "price": 599.0,
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
            }
        ]
    },
    {
        "id": 342,
        "name": "Harina De Trigo Caserita Tipo 000 1 Kg",
        "price": 899.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Caserita Tipo 000 1 Kg_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 899.0
            }
        ]
    },
    {
        "id": 343,
        "name": "Harina De Trigo Caserita Tipo 0000 1 Kg",
        "price": 899.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Caserita Tipo 0000 1 Kg_4.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 899.0
            }
        ]
    },
    {
        "id": 344,
        "name": "Harina De Trigo Favorita 000 1 Kg",
        "price": 969.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Favorita 000 1 Kg_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 699.0
            },
            {
                "date": "2026-03-21",
                "price": 969.0
            }
        ]
    },
    {
        "id": 345,
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
        "id": 346,
        "name": "Polenta Instantánea Prestopronta 490 G",
        "price": 1146.75,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Polenta Instantánea Prestopronta 490 G_12.jpg",
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
        "id": 347,
        "name": "Harina 0000 Chacabuco 1 Kg",
        "price": 1289.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 0000 Chacabuco 1 Kg_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1289.0
            },
            {
                "date": "2026-03-21",
                "price": 966.75
            },
            {
                "date": "2026-03-28",
                "price": 1289.0
            }
        ]
    },
    {
        "id": 348,
        "name": "Harina 0000 Morixe X 1 Kg",
        "price": 1339.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 0000 Morixe X 1 Kg_15.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1339.0
            }
        ]
    },
    {
        "id": 349,
        "name": "Harina 0000 Pureza Ultra Refinada 1 Kg",
        "price": 1419.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina 0000 Pureza Ultra Refinada 1 Kg_6.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1329.0
            },
            {
                "date": "2026-03-28",
                "price": 1419.0
            }
        ]
    },
    {
        "id": 350,
        "name": "Harina De Trigo Favorita 0000 1 Kg",
        "price": 1429.0,
        "market": "terra",
        "category": "harinas",
        "image": "images/changomas/Harina De Trigo Favorita 0000 1 Kg_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1429.0
            }
        ]
    },
    {
        "id": 351,
        "name": "Jugo En Polvo Multifruta Bc 7 Gr",
        "price": 172.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Multifruta Bc 7 Gr_17.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 345.0
            },
            {
                "date": "2026-03-28",
                "price": 172.5
            }
        ]
    },
    {
        "id": 352,
        "name": "Jugo En Polvo Mango Y Naranja Bc 7 Gr",
        "price": 172.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Mango Y Naranja Bc 7 Gr_18.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 345.0
            },
            {
                "date": "2026-03-28",
                "price": 172.5
            }
        ]
    },
    {
        "id": 353,
        "name": "Jugo En Polvo Pomelo Rosado Bc 7 Gr",
        "price": 172.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Pomelo Rosado Bc 7 Gr_19.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 345.0
            },
            {
                "date": "2026-03-28",
                "price": 172.5
            }
        ]
    },
    {
        "id": 354,
        "name": "Jugo En Polvo Frutilla Y Limón Bc 7 Gr",
        "price": 172.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Frutilla Y Limón Bc 7 Gr_20.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 345.0
            },
            {
                "date": "2026-03-28",
                "price": 172.5
            }
        ]
    },
    {
        "id": 355,
        "name": "Jugo En Polvo Naranja Y Durazno Bc 7 Gr",
        "price": 172.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Naranja Y Durazno Bc 7 Gr_21.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 345.0
            },
            {
                "date": "2026-03-28",
                "price": 172.5
            }
        ]
    },
    {
        "id": 356,
        "name": "Jugo En Polvo Manzana Roja Bc 7 Gr",
        "price": 172.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Manzana Roja Bc 7 Gr_22.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 345.0
            },
            {
                "date": "2026-03-28",
                "price": 172.5
            }
        ]
    },
    {
        "id": 357,
        "name": "Jugo En Polvo Ananá Bc 7 Gr",
        "price": 172.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Ananá Bc 7 Gr_23.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 172.5
            }
        ]
    },
    {
        "id": 358,
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
            }
        ]
    },
    {
        "id": 359,
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
            }
        ]
    },
    {
        "id": 360,
        "name": "Jugo En Polvo Tang Limonada Dulce 15 G",
        "price": 239.5,
        "market": "terra",
        "category": "jugos",
        "image": "images/changomas/Jugo En Polvo Tang Limonada Dulce 15 G_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 239.5
            }
        ]
    },
    {
        "id": 361,
        "name": "Leche Entera La Serenisima Fort C 200 Cc",
        "price": 891.75,
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
            }
        ]
    },
    {
        "id": 362,
        "name": "Leche Descremada Check Larga Vida 1 L",
        "price": 1349.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada Check Larga Vida 1 L_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1349.0
            }
        ]
    },
    {
        "id": 363,
        "name": "Leche Uat Check  Baja En Lactosa Parcialmente Descremada 1 L",
        "price": 1349.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Uat Check  Baja En Lactosa Parcial_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1349.0
            }
        ]
    },
    {
        "id": 364,
        "name": "Leche Parcialmente Descremada San Ignacio Larga Vida 1 L",
        "price": 1349.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Parcialmente Descremada San Ignaci_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1349.0
            }
        ]
    },
    {
        "id": 365,
        "name": "Leche Chocolatada Las Tres Niñas Libre De Sellos 200 Ml",
        "price": 1599.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Chocolatada Las Tres Niñas Libre D_23.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 749.5
            },
            {
                "date": "2026-03-28",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 366,
        "name": "Leche Entera Casanto 1 L",
        "price": 1600.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera Casanto 1 L_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 367,
        "name": "Leche Descremada Casanto 1 L",
        "price": 1600.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada Casanto 1 L_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            },
            {
                "date": "2026-03-21",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 368,
        "name": "Leche Entera La Serenísima Multivitaminas 3% 1 L",
        "price": 1750.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Entera La Serenísima Multivitamina_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 369,
        "name": "Leche Descremada La Serenísima Multivitaminas 1% 1 L",
        "price": 1750.0,
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
            }
        ]
    },
    {
        "id": 370,
        "name": "Leche Descremada La Serenísima Reducida En Lactosa 1 L",
        "price": 1750.0,
        "market": "terra",
        "category": "leches",
        "image": "images/changomas/Leche Descremada La Serenísima Reducida _10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 371,
        "name": "Esponja Check Ultrafina 1un",
        "price": 524.25,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Check Ultrafina 1un_12.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 699.0
            },
            {
                "date": "2026-03-28",
                "price": 524.25
            }
        ]
    },
    {
        "id": 372,
        "name": "Esponja Check Cuadros 1un",
        "price": 689.25,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Check Cuadros 1un_20.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 919.0
            },
            {
                "date": "2026-03-28",
                "price": 689.25
            }
        ]
    },
    {
        "id": 373,
        "name": "Esponja Mortimer Cuadriculada 1un",
        "price": 831.2,
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
            }
        ]
    },
    {
        "id": 374,
        "name": "Esponja Multiuso Virulana 1 U",
        "price": 859.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Multiuso Virulana 1 U_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 859.0
            }
        ]
    },
    {
        "id": 375,
        "name": "Esponja Mortimer Lisa 1 U",
        "price": 859.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Mortimer Lisa 1 U_23.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 572.67
            },
            {
                "date": "2026-03-28",
                "price": 859.0
            }
        ]
    },
    {
        "id": 376,
        "name": "Esponja Mortimer Cuadriculada Antibacterial 1 Un",
        "price": 887.2,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Mortimer Cuadriculada Antibacter_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 739.33
            },
            {
                "date": "2026-03-28",
                "price": 887.2
            }
        ]
    },
    {
        "id": 377,
        "name": "Esponja Sed Metal Hogar Acero Inoxidable",
        "price": 889.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Sed Metal Hogar Acero Inoxidable_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 889.0
            }
        ]
    },
    {
        "id": 378,
        "name": "Esponja Fibra C/ Cuadraditos 1un",
        "price": 949.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Fibra C Cuadraditos 1un_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 949.0
            }
        ]
    },
    {
        "id": 379,
        "name": "Esponja De Acero Inoxidable Mortimer 1 Un",
        "price": 979.0,
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
            }
        ]
    },
    {
        "id": 380,
        "name": "Esponja Vajilla Inoxidable Virulana 1 U",
        "price": 999.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images/changomas/Esponja Vajilla Inoxidable Virulana 1 U_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 999.0
            }
        ]
    },
    {
        "id": 381,
        "name": "Jabón En Barra Johnson's Glicerina 80gr",
        "price": 1769.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Jabón En Barra Johnsons Glicerina 80gr_11.jpg",
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
        "name": "Toallitas Húmedas Kimbies 48un",
        "price": 2015.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Kimbies 48un_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2015.4
            }
        ]
    },
    {
        "id": 383,
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
            }
        ]
    },
    {
        "id": 384,
        "name": "Toallas Humedas Soul Baby Animales Fantasticos 45un",
        "price": 2099.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallas Humedas Soul Baby Animales Fanta_3.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3499.0
            },
            {
                "date": "2026-03-28",
                "price": 2099.4
            }
        ]
    },
    {
        "id": 385,
        "name": "Jabón En Barra Baby Dove Humectación Sensible 75 G",
        "price": 2109.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Jabón En Barra Baby Dove Humectación Sen_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2109.0
            },
            {
                "date": "2026-03-21",
                "price": 1581.75
            },
            {
                "date": "2026-03-28",
                "price": 2109.0
            }
        ]
    },
    {
        "id": 386,
        "name": "Jabón En Barra Baby Dove Humectación Enriquecida 75 G",
        "price": 2109.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Jabón En Barra Baby Dove Humectación Enr_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2109.0
            },
            {
                "date": "2026-03-21",
                "price": 1581.75
            },
            {
                "date": "2026-03-28",
                "price": 2109.0
            }
        ]
    },
    {
        "id": 387,
        "name": "Toallitas Humedas Antibacterial Q-Soft 30 Un",
        "price": 2749.0,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Humedas Antibacterial Q-Soft 3_9.jpg",
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
        "id": 388,
        "name": "Toallitas Húmedas Huggies Triple Protección 48un",
        "price": 2813.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Toallitas Húmedas Huggies Triple Protecc_2.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2747.4
            },
            {
                "date": "2026-03-28",
                "price": 2813.4
            }
        ]
    },
    {
        "id": 389,
        "name": "Pañales Toddler Deluxe Talle P 12 U",
        "price": 2891.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Pañales Toddler Deluxe Talle P 12 U_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2891.4
            }
        ]
    },
    {
        "id": 390,
        "name": "Pañales Toddler Deluxe Talle Xxg 8 U",
        "price": 2891.4,
        "market": "terra",
        "category": "pañales",
        "image": "images/changomas/Pañales Toddler Deluxe Talle Xxg 8 U_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2891.4
            }
        ]
    },
    {
        "id": 391,
        "name": "Papel Higiénico Aliada Simple Hoja 30 M 4u",
        "price": 1779.0,
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
            }
        ]
    },
    {
        "id": 392,
        "name": "Papel Higiénico Higienol Fresh Hoja Simple 30 M 4 U",
        "price": 1971.15,
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
            }
        ]
    },
    {
        "id": 393,
        "name": "Papel Higiénico Felpita Premium Doble Hoja 4 U 20 M",
        "price": 1999.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Felpita Premium Doble Ho_13.jpg",
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
            }
        ]
    },
    {
        "id": 394,
        "name": "Papel Hgiénico Check Simple Hoja 30 M X 10 Cm 4u",
        "price": 2019.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Hgiénico Check Simple Hoja 30 M X _22.jpg",
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
        "id": 395,
        "name": "Papel Higienico Elegante Blanco Hoja Simple 4u",
        "price": 2669.0,
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
            }
        ]
    },
    {
        "id": 396,
        "name": "Papel Higiénico Higienol Plus Doble Hoja 20 M 4 U",
        "price": 3389.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Higienol Plus Doble Hoja_18.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3389.0
            },
            {
                "date": "2026-03-21",
                "price": 2033.4
            },
            {
                "date": "2026-03-28",
                "price": 3389.0
            }
        ]
    },
    {
        "id": 397,
        "name": "Papel Higénico Higienol Plus Doble Hoja 30 M 4 U",
        "price": 3433.15,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higénico Higienol Plus Doble Hoja _0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3433.15
            }
        ]
    },
    {
        "id": 398,
        "name": "Papel Higienico Elegante Simple Hoja 30 M 6 U",
        "price": 3549.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higienico Elegante Simple Hoja 30 _10.jpg",
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
            }
        ]
    },
    {
        "id": 399,
        "name": "Papel Higiénico Check Doble Hoja 30 M X 10 Cm 4u",
        "price": 3759.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Check Doble Hoja 30 M X _23.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3759.0
            }
        ]
    },
    {
        "id": 400,
        "name": "Papel Higiénico Elegante Doble Hoja 4x30mts",
        "price": 3999.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Papel Higiénico Elegante Doble Hoja 4x30_5.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2399.4
            },
            {
                "date": "2026-03-28",
                "price": 3999.0
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
            }
        ]
    },
    {
        "id": 404,
        "name": "Muslo De Pollo 1 Kg",
        "price": 6190.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Muslo De Pollo 1 Kg_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6190.0
            }
        ]
    },
    {
        "id": 405,
        "name": "Patas De Pollo 1,5 Kg",
        "price": 7139.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Patas De Pollo 15 Kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7139.0
            }
        ]
    },
    {
        "id": 406,
        "name": "Pechuga De Pollo 0.9 Gr",
        "price": 9190.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Pechuga De Pollo 09 Gr_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9190.0
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
                "date": "2026-03-16",
                "price": 11900.0
            }
        ]
    },
    {
        "id": 408,
        "name": "Filet De Pechuga Sin Hueso 1,5 Kg",
        "price": 13399.0,
        "market": "terra",
        "category": "all",
        "image": "images/changomas/Filet De Pechuga Sin Hueso 15 Kg_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13399.0
            }
        ]
    },
    {
        "id": 409,
        "name": "Queso Rallado La Serenisima Reggianito 35g",
        "price": 1669.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Rallado La Serenisima Reggianito 3_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1669.0
            }
        ]
    },
    {
        "id": 410,
        "name": "Queso Untable Tonadita Jamón 180g",
        "price": 1949.25,
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
            }
        ]
    },
    {
        "id": 411,
        "name": "Queso Untable Tonadita Gruyere 180g",
        "price": 1949.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Untable Tonadita Gruyere 180g_21.jpg",
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
            }
        ]
    },
    {
        "id": 412,
        "name": "Queso Crema Tonadita Cremette Light 290g",
        "price": 1949.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Tonadita Cremette Light 290g_13.jpg",
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
            }
        ]
    },
    {
        "id": 413,
        "name": "Queso Crema Cremette Tonadita Clasico 290g",
        "price": 1949.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Crema Cremette Tonadita Clasico 29_19.jpg",
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
            }
        ]
    },
    {
        "id": 414,
        "name": "Queso Rallado La Quesera 100 G",
        "price": 1999.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Rallado La Quesera 100 G_7.jpg",
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
            }
        ]
    },
    {
        "id": 415,
        "name": "Ricotta Tregar Light 290 G",
        "price": 2511.75,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Ricotta Tregar Light 290 G_22.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3349.0
            },
            {
                "date": "2026-03-28",
                "price": 2511.75
            }
        ]
    },
    {
        "id": 416,
        "name": "Queso Con Crema Cremette Tonadita Light 480g",
        "price": 2794.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Con Crema Cremette Tonadita Light _6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2794.35
            }
        ]
    },
    {
        "id": 417,
        "name": "Queso Con Crema Cremette Tonadita Clásico 480g",
        "price": 2794.35,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso Con Crema Cremette Tonadita Clásic_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2794.35
            }
        ]
    },
    {
        "id": 418,
        "name": "Queso La Serenisima Untable Cremón Light 280g",
        "price": 2819.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images/changomas/Queso La Serenisima Untable Cremón Light_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2819.25
            }
        ]
    },
    {
        "id": 419,
        "name": "Sal Fina Aliada 500 G",
        "price": 999.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Aliada 500 G_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 999.0
            }
        ]
    },
    {
        "id": 420,
        "name": "Sal Check Fina 500 G",
        "price": 1099.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Check Fina 500 G_8.jpg",
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
                "date": "2026-03-20",
                "price": 1369.0
            }
        ]
    },
    {
        "id": 422,
        "name": "Sal Gruesa Paquete Celusal 500 Gr",
        "price": 1399.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Paquete Celusal 500 Gr_14.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 423,
        "name": "Sal Gruesa Dos Anclas 500 Gr",
        "price": 1409.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Dos Anclas 500 Gr_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1409.0
            }
        ]
    },
    {
        "id": 424,
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
            }
        ]
    },
    {
        "id": 425,
        "name": "Sal Fina Celusal Paquete 500 Gr",
        "price": 1469.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Celusal Paquete 500 Gr_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1469.0
            }
        ]
    },
    {
        "id": 426,
        "name": "Sal Gruesa Aliada 1 Kg",
        "price": 1499.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Aliada 1 Kg_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 427,
        "name": "Sal Gruesa Check 1 Kg",
        "price": 1499.0,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Gruesa Check 1 Kg_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 428,
        "name": "Sal Fina Celusal 100 Gr",
        "price": 1574.25,
        "market": "terra",
        "category": "sal",
        "image": "images/changomas/Sal Fina Celusal 100 Gr_15.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1574.25
            }
        ]
    },
    {
        "id": 429,
        "name": "Maní Salado Maní King Sin Piel 100 G",
        "price": 1116.75,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Maní Salado Maní King Sin Piel 100 G_18.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1489.0
            },
            {
                "date": "2026-03-28",
                "price": 1116.75
            }
        ]
    },
    {
        "id": 430,
        "name": "Palitos Krachitos Salados 110g",
        "price": 1519.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Palitos Krachitos Salados 110g_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1139.25
            },
            {
                "date": "2026-03-21",
                "price": 1519.0
            }
        ]
    },
    {
        "id": 431,
        "name": "Galletita Jamon Saladix 100 Gr",
        "price": 1569.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletita Jamon Saladix 100 Gr_12.jpg",
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
        "id": 432,
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
        "id": 433,
        "name": "Galletita Club Social Sabor Original 144gr",
        "price": 2129.25,
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
            }
        ]
    },
    {
        "id": 434,
        "name": "Galletitas Crackers Club Social Sabor Jamón 24 G 6u",
        "price": 2129.25,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Crackers Club Social Sabor Ja_13.jpg",
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
            }
        ]
    },
    {
        "id": 435,
        "name": "Papas Fritas Quento Sabor Queso Crema Y Ciboulette 82 G",
        "price": 2299.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Papas Fritas Quento Sabor Queso Crema Y _10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2299.0
            }
        ]
    },
    {
        "id": 436,
        "name": "Papas Fritas Krachitos Tradicionales 105 G",
        "price": 2799.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Papas Fritas Krachitos Tradicionales 105_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2091.75
            },
            {
                "date": "2026-03-21",
                "price": 2799.0
            }
        ]
    },
    {
        "id": 437,
        "name": "Chizitos Krachitos Sabor Queso 170g",
        "price": 2929.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Chizitos Krachitos Sabor Queso 170g_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2196.75
            },
            {
                "date": "2026-03-21",
                "price": 2929.0
            }
        ]
    },
    {
        "id": 438,
        "name": "Galletitas Snacks Rex Sabor Original 225 G",
        "price": 2939.0,
        "market": "terra",
        "category": "snacks",
        "image": "images/changomas/Galletitas Snacks Rex Sabor Original 225_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2939.0
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
        "image": "images/laanonima/Aceite Mezcla Cocinero x 900 cc_32.jpg",
        "history": [
            {
                "date": "2026-03-16",
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
        "image": "images/laanonima/Aceite de Girasol Legitimo x 900 cc_23.jpg",
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
        "price": 3800.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Cañuelas x 900 cc_24.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3800.0
            }
        ]
    },
    {
        "id": 443,
        "name": "Aceite de Girasol Pureza x 900 cc.",
        "price": 3800.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Pureza x 900 cc_67.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3800.0
            }
        ]
    },
    {
        "id": 444,
        "name": "Aceite de Girasol Cocinero x 900 cc.",
        "price": 3950.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol Cocinero x 900 cc_39.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3950.0
            }
        ]
    },
    {
        "id": 445,
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
        "id": 446,
        "name": "Rocio Vegetal sin Manteca con Harina Mama Cocina x 150 cc.",
        "price": 4150.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Rocio Vegetal sin Manteca con Harina Mam_69.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4150.0
            }
        ]
    },
    {
        "id": 447,
        "name": "Aceite de Girasol La Anónima x 900 cc.",
        "price": 4250.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Aceite de Girasol La Anónima x 900 cc_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4250.0
            }
        ]
    },
    {
        "id": 448,
        "name": "Rocío Vegetal de Aceite Girasol Natura x 126 cc.",
        "price": 4350.0,
        "market": "aura",
        "category": "aceite",
        "image": "images/laanonima/Rocío Vegetal de Aceite Girasol Natura x_27.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4200.0
            },
            {
                "date": "2026-03-21",
                "price": 4350.0
            }
        ]
    },
    {
        "id": 449,
        "name": "Agua Mineral s/Gas Alvura x 500 cc.",
        "price": 1200.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 500 cc_25.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 450,
        "name": "Agua Mineral sin gas Bonaqua x 500 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Bonaqua x 500 cc_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 451,
        "name": "Agua sin Gas Benedictino x 500 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua sin Gas Benedictino x 500 cc_24.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 452,
        "name": "Agua Mineral s/Gas Alvura x 1,5 Lt.",
        "price": 1500.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 15 Lt_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 453,
        "name": "Agua Nestlé Pureza Vital sin gas Botella 500cc x1",
        "price": 1700.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Nestlé Pureza Vital sin gas Botella_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 454,
        "name": "Agua Mineral s/Gas Alvura x 2,25 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Alvura x 225 Lt_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 455,
        "name": "Agua Mineral s/Gas Villa del Sur x 600 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sGas Villa del Sur x 600 cc_26.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 456,
        "name": "Agua Mineral sin Gas Sierra de los Padres x 2 Lt.",
        "price": 1850.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin Gas Sierra de los Padre_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 457,
        "name": "Agua Mineral sin gas Cellier x 2 lt.",
        "price": 1900.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Cellier x 2 lt_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 458,
        "name": "Agua Mineral sin gas Glaciar x 500 cc.",
        "price": 2000.0,
        "market": "aura",
        "category": "aguas",
        "image": "images/laanonima/Agua Mineral sin gas Glaciar x 500 cc_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 459,
        "name": "Pulpa de Manzana Pouch Zummy x 110 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de Manzana Pouch Zummy x 110 g_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 460,
        "name": "Pulpa de Manzana&Durazno Pouch Zummy x 110 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pulpa de ManzanaDurazno Pouch Zummy x 11_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 461,
        "name": "Leche LV Modificada Etapa 4 Profutura Nutrilón x 200 cc.",
        "price": 2650.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Leche LV Modificada Etapa 4 Profutura Nu_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 462,
        "name": "NESTUM® sabor Banana x 225gr",
        "price": 7050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM sabor Banana x 225gr_8.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 7050.0
            }
        ]
    },
    {
        "id": 463,
        "name": "NESTUM® Trigo y Miel x 225gr",
        "price": 7050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Trigo y Miel x 225gr_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7050.0
            }
        ]
    },
    {
        "id": 464,
        "name": "NESTUM® Arroz x 225gr",
        "price": 7250.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Arroz x 225gr_7.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 7250.0
            }
        ]
    },
    {
        "id": 465,
        "name": "NESTUM® Multicereal x 500gr",
        "price": 12200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NESTUM Multicereal x 500gr_19.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 12200.0
            }
        ]
    },
    {
        "id": 466,
        "name": "NIDO® 4 PREBIO 3 Leche en Polvo x 800gr",
        "price": 19200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NIDO 4 PREBIO 3 Leche en Polvo x 800gr_5.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 19200.0
            }
        ]
    },
    {
        "id": 467,
        "name": "NIDO® 3 PREBIO 1 Leche en Polvo x 800gr",
        "price": 20200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NIDO 3 PREBIO 1 Leche en Polvo x 800gr_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 20200.0
            }
        ]
    },
    {
        "id": 468,
        "name": "NAN® Optipro® 1 x 400gr",
        "price": 25400.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/NAN Optipro 1 x 400gr_17.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 25400.0
            }
        ]
    },
    {
        "id": 469,
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
        "id": 470,
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
        "id": 471,
        "name": "Preparado para Medallones Estancias La x 500 g.",
        "price": 11740.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Preparado para Medallones Estancias La x_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11740.0
            }
        ]
    },
    {
        "id": 472,
        "name": "Tapa de Bife Envasado al Vacío FB MEATS (Kg)",
        "price": 12490.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Tapa de Bife Envasado al Vacío FB MEATS _15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12490.0
            }
        ]
    },
    {
        "id": 473,
        "name": "Carne Picada M. E/V Estancias LA x 500 g.",
        "price": 12790.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Carne Picada M EV Estancias LA x 500 g_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12790.0
            }
        ]
    },
    {
        "id": 474,
        "name": "Asado C/hueso Congelado FB MEATS (Kg)",
        "price": 12990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Asado Chueso Congelado FB MEATS Kg_43.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12990.0
            }
        ]
    },
    {
        "id": 475,
        "name": "Chingolo Envasado al Vacío FB MEATS (Kg)",
        "price": 13490.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Chingolo Envasado al Vacío FB MEATS Kg_9.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 13490.0
            }
        ]
    },
    {
        "id": 476,
        "name": "Matambre Envasado al Vacío FB MEATS (Kg)",
        "price": 13490.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Matambre Envasado al Vacío FB MEATS Kg_12.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 13490.0
            }
        ]
    },
    {
        "id": 477,
        "name": "Vacío Envasado al Vacío FB MEATS (Kg)",
        "price": 14490.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Vacío Envasado al Vacío FB MEATS Kg_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 14490.0
            }
        ]
    },
    {
        "id": 478,
        "name": "Tapa de Nalga FB MEATS Envasado al Vacío",
        "price": 14490.0,
        "market": "aura",
        "category": "carnes",
        "image": "images/laanonima/Tapa de Nalga FB MEATS Envasado al Vacío_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14490.0
            }
        ]
    },
    {
        "id": 479,
        "name": "Maíz Inflado Dulce Capullitos Flor x 80 g.",
        "price": 650.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maíz Inflado Dulce Capullitos Flor x 80 _27.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 650.0
            }
        ]
    },
    {
        "id": 480,
        "name": "Trigo Inflado Dulce Capullitos Flor x 80 g.",
        "price": 680.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Trigo Inflado Dulce Capullitos Flor x 80_49.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 680.0
            }
        ]
    },
    {
        "id": 481,
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
        "id": 482,
        "name": "Maíz Inflado Acaramelado Egran con Maní x 80 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Maíz Inflado Acaramelado Egran con Maní _56.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 483,
        "name": "Barra de Cereal Almendras y Maní Cereal Mix x 33 g.",
        "price": 1250.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Barra de Cereal Almendras y Maní Cereal _73.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 484,
        "name": "Copos de Maíz La Anónima x 160 g.",
        "price": 1550.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Copos de Maíz La Anónima x 160 g_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 485,
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
        "id": 486,
        "name": "Copos de Maíz Bolsa Granix x 160 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Copos de Maíz Bolsa Granix x 160 g_51.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 487,
        "name": "Cereal con Cacao Cereal Mix x 100 g.",
        "price": 1650.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Cereal con Cacao Cereal Mix x 100 g_43.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 488,
        "name": "Barra Crocante de Arroz Egran x 60 g.",
        "price": 1700.0,
        "market": "aura",
        "category": "cereales",
        "image": "images/laanonima/Barra Crocante de Arroz Egran x 60 g_48.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 489,
        "name": "Cerveza Quilmes 0.0% Lata 473cc x1",
        "price": 2150.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Quilmes 00 Lata 473cc x1_34.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2150.0
            },
            {
                "date": "2026-03-21",
                "price": 2200.0
            },
            {
                "date": "2026-03-28",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 490,
        "name": "Cerveza Porrón Michelob x 275 cc.",
        "price": 2350.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Porrón Michelob x 275 cc_5.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2350.0
            }
        ]
    },
    {
        "id": 491,
        "name": "Cerveza Lata Rubia Andes x 473 cc.",
        "price": 2550.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Lata Rubia Andes x 473 cc_100.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2550.0
            }
        ]
    },
    {
        "id": 492,
        "name": "Cerveza Quilmes Hinchada Lata 473cc x1",
        "price": 2650.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Quilmes Hinchada Lata 473cc x1_51.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 493,
        "name": "Cerveza Brahma Chopp Lata 473cc x1",
        "price": 2650.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Brahma Chopp Lata 473cc x1_52.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 494,
        "name": "Cerveza Rubia Budweiser Lata 473cc",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Rubia Budweiser Lata 473cc_47.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 495,
        "name": "Cerveza Imperial Lata x 473 cc.",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Imperial Lata x 473 cc_64.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 496,
        "name": "Cerveza Golden Lata Imperial x 473 cc.",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Golden Lata Imperial x 473 cc_67.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 497,
        "name": "Cerveza Rubia Lata Salta x 473 cc.",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Rubia Lata Salta x 473 cc_85.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 498,
        "name": "Cerveza Quilmes IPA Lata 473cc x1",
        "price": 2750.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images/laanonima/Cerveza Quilmes IPA Lata 473cc x1_88.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2650.0
            },
            {
                "date": "2026-03-21",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 499,
        "name": "Amargo Pomelo Rosado Tres Torres x 1,5 Lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Amargo Pomelo Rosado Tres Torres x 15 Lt_51.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 500,
        "name": "Amargo Tres Torres Limón Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Amargo Tres Torres Limón Pet x 15 lt_56.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 501,
        "name": "Amargo Serrano Tres Torres Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Amargo Serrano Tres Torres Pet x 15 lt_57.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 502,
        "name": "Amargo Blanco Tres Torres Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Amargo Blanco Tres Torres Pet x 15 lt_61.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 503,
        "name": "Dr. Lemon Vodka s/ Tacc x 275 cc.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Dr Lemon Vodka s Tacc x 275 cc_65.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            },
            {
                "date": "2026-03-28",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 504,
        "name": "Amargo Pomelo Rosado La Anónima x 1,5 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Amargo Pomelo Rosado La Anónima x 15 Lt_37.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 505,
        "name": "Amargo Serrano La Anónima x 1,5 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Amargo Serrano La Anónima x 15 Lt_38.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 506,
        "name": "Amargo Cordillerano La Anónima x 1,5 Lt.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Amargo Cordillerano La Anónima x 15 Lt_39.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 507,
        "name": "Lata Frizzé Blue x 473 cc.",
        "price": 2450.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Lata Frizzé Blue x 473 cc_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2450.0
            }
        ]
    },
    {
        "id": 508,
        "name": "Fernet con Cola 1882 x 473 cc.",
        "price": 2450.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Fernet con Cola 1882 x 473 cc_63.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2300.0
            },
            {
                "date": "2026-03-28",
                "price": 2450.0
            }
        ]
    },
    {
        "id": 509,
        "name": "Pate de Jamón Bocatti x 90 g.",
        "price": 2000.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Pate de Jamón Bocatti x 90 g_44.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 510,
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
        "id": 511,
        "name": "Pate con Pimienta Verde Bocatti x 90 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Pate con Pimienta Verde Bocatti x 90 g_27.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 512,
        "name": "Salchichón Primavera Feteado Zur Linde x 200 g.",
        "price": 2650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Salchichón Primavera Feteado Zur Linde x_12.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 513,
        "name": "Mortadela con Pistacho Bocatti x 70 g.",
        "price": 2650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Mortadela con Pistacho Bocatti x 70 g_33.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2650.0
            }
        ]
    },
    {
        "id": 514,
        "name": "Lomo al Horno Feteado Var.Log5 Bocatti x 70 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Lomo al Horno Feteado VarLog5 Bocatti x _9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 515,
        "name": "Leberwurst Cabaña Argentina x 200 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Leberwurst Cabaña Argentina x 200 g_22.jpg",
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
        "id": 516,
        "name": "Salchichón con Jamón Feteado Zur Linde x 200 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Salchichón con Jamón Feteado Zur Linde x_40.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 517,
        "name": "Salame Milán Feteado Var.Log.5 Bocatti x 70 g.",
        "price": 2750.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Salame Milán Feteado VarLog5 Bocatti x 7_19.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2750.0
            }
        ]
    },
    {
        "id": 518,
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
        "id": 519,
        "name": "Frutillas Congeladas Karinat x 300 g.",
        "price": 5850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Frutillas Congeladas Karinat x 300 g_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5550.0
            },
            {
                "date": "2026-03-21",
                "price": 5850.0
            }
        ]
    },
    {
        "id": 520,
        "name": "Frutillas Congeladas La Anónima x 300 g.",
        "price": 6000.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Frutillas Congeladas La Anónima x 300 g_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6000.0
            }
        ]
    },
    {
        "id": 521,
        "name": "Arándanos Congelados La Anónima x 300 g.",
        "price": 6300.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Arándanos Congelados La Anónima x 300 g_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6300.0
            }
        ]
    },
    {
        "id": 522,
        "name": "Arándanos Congelados Green Life x 300 g.",
        "price": 6650.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Arándanos Congelados Green Life x 300 g_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6650.0
            }
        ]
    },
    {
        "id": 523,
        "name": "Mix Frutos Rojos Congelados La Anónima x 300 g.",
        "price": 7350.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Mix Frutos Rojos Congelados La Anónima x_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7350.0
            }
        ]
    },
    {
        "id": 524,
        "name": "Mix Berries Congelados Karinat x 300 g.",
        "price": 7400.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Mix Berries Congelados Karinat x 300 g_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6950.0
            },
            {
                "date": "2026-03-21",
                "price": 7400.0
            }
        ]
    },
    {
        "id": 525,
        "name": "Frutillas Enteras Congeladas Green Life x 400 g.",
        "price": 7700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Frutillas Enteras Congeladas Green Life _0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7700.0
            }
        ]
    },
    {
        "id": 526,
        "name": "Arándanos Congelados Karinat x 300 g.",
        "price": 7700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Arándanos Congelados Karinat x 300 g_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7250.0
            },
            {
                "date": "2026-03-21",
                "price": 7700.0
            }
        ]
    },
    {
        "id": 527,
        "name": "Mix Cuatro Berries Green Life x 400 g.",
        "price": 9900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Mix Cuatro Berries Green Life x 400 g_2.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 9900.0
            }
        ]
    },
    {
        "id": 528,
        "name": "Mix Berries Congelados Karinat x 400 g.",
        "price": 12050.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Mix Berries Congelados Karinat x 400 g_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 11300.0
            },
            {
                "date": "2026-03-21",
                "price": 12050.0
            }
        ]
    },
    {
        "id": 529,
        "name": "Gaseosa Cola s/Azúcar Lata Coca Cola x 354 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Cola sAzúcar Lata Coca Cola x 35_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 530,
        "name": "Gaseosa Pomelo Lata Schweppes x 310 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Pomelo Lata Schweppes x 310 cc_24.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 531,
        "name": "Gaseosa Lima Limón s/Azúcar Lata Sprite x 354 cc.",
        "price": 1450.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Lima Limón sAzúcar Lata Sprite x_26.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 532,
        "name": "Gaseosa Pepsi Black Lata 354cc x1",
        "price": 1550.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Pepsi Black Lata 354cc x1_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 533,
        "name": "Gaseosa Lima Limón Zero Ice Sprite x 473 cc.",
        "price": 1650.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Lima Limón Zero Ice Sprite x 473_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 534,
        "name": "Gaseosa Cola Diet Coca-Cola Zero Pet x 500 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Cola Diet Coca-Cola Zero Pet x 5_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 535,
        "name": "Gaseosa Lima Limón sin Azúcar Sprite Pet x 500 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Lima Limón sin Azúcar Sprite Pet_20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 536,
        "name": "Gaseosa Naranja Diet Fanta Zero Pet x 500 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Naranja Diet Fanta Zero Pet x 50_27.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 537,
        "name": "Gaseosa Schweppes Pomelo Zero Pet x 500 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Schweppes Pomelo Zero Pet x 500 _28.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 538,
        "name": "Gaseosa Cola Coca-Cola Light Pet x 500 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images/laanonima/Gaseosa Cola Coca-Cola Light Pet x 500 c_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 539,
        "name": "Medallón Hamburguesa Champion. x 2 u. 112 GR",
        "price": 1550.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallón Hamburguesa Champion x 2 u 112 _31.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 540,
        "name": "Medallones Carne Vacuna con Soja x 2 Un. Tres Cruces x 110 g.",
        "price": 1750.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones Carne Vacuna con Soja x 2 Un _32.jpg",
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
        "id": 541,
        "name": "Medallones de Carne Vacuna Best x 2 un. 110 gr.",
        "price": 2100.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Best x 2 un 1_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 542,
        "name": "Medallones de Carne Vacuna Doble Swift x 2 un. 112 gr.",
        "price": 2300.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Doble Swift x_42.jpg",
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
        "id": 543,
        "name": "Medallones de Carne Vacuna Express x 2 Un. Paty x 110 g.",
        "price": 2600.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna Express x 2 U_33.jpg",
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
        "id": 544,
        "name": "Medallones de Carne Vacuna x 2 Un.  Swift x 320 g.",
        "price": 3050.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna x 2 Un  Swift_35.jpg",
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
        "id": 545,
        "name": "Hamburguesas de Carne Vacuna La Anónima x 2 un. 110 gr.",
        "price": 3250.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesas de Carne Vacuna La Anónima _20.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3250.0
            }
        ]
    },
    {
        "id": 546,
        "name": "Medallón Hamburguesa Champion. x 4 u. 224 GR",
        "price": 3300.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallón Hamburguesa Champion x 4 u 224 _34.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 547,
        "name": "Hamburguesa Carne Vacuna Finitas x 2 Un. Paty x 110 g.",
        "price": 3400.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Hamburguesa Carne Vacuna Finitas x 2 Un _5.jpg",
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
        "id": 548,
        "name": "Medallones de Carne Vacuna x 4 un. La Blanca x 276 gr.",
        "price": 4100.0,
        "market": "aura",
        "category": "hamburguesas",
        "image": "images/laanonima/Medallones de Carne Vacuna x 4 un La Bla_36.jpg",
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
        "id": 549,
        "name": "Bebida Fresh Blue Full Sport x 500 cc.",
        "price": 1850.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Fresh Blue Full Sport x 500 cc_36.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 550,
        "name": "Bebida Energizante Speed x 269 cc.",
        "price": 1900.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Energizante Speed x 269 cc_22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 551,
        "name": "Energizante Rockstar  Botella 500cc x1",
        "price": 2000.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Energizante Rockstar  Botella 500cc x1_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 552,
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
        "id": 553,
        "name": "Bebida de Fresa y Kiwi Pet Gatorade Sin Azúcar x 400 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida de Fresa y Kiwi Pet Gatorade Sin _14.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 554,
        "name": "Bebida Uva Powerade x 500 cc.",
        "price": 2050.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Uva Powerade x 500 cc_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 555,
        "name": "Powerade Mountain Blast x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Powerade Mountain Blast x 500 cc_25.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 556,
        "name": "Bebida Powerade Manzana x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Powerade Manzana x 500 cc_27.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 557,
        "name": "Bebida Powerade Naranja x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Bebida Powerade Naranja x 500 cc_28.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 558,
        "name": "Powerade Frutas Tropicales x 500 cc.",
        "price": 2300.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images/laanonima/Powerade Frutas Tropicales x 500 cc_38.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 559,
        "name": "Bebida Láctea Vainilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Láctea Vainilla Tetra La Serenísi_53.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 560,
        "name": "Bebida Láctea Frutilla Tetra La Serenísima x 200 cc.",
        "price": 1250.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Láctea Frutilla Tetra La Serenísi_57.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 561,
        "name": "Leche LV Entera Clásica Fortificada c/ Vitamina 3% La Serenísima x 200 cc.",
        "price": 1350.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche LV Entera Clásica Fortificada c Vi_52.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 562,
        "name": "Leche LV Chocolatada Nescao x 185 cc.",
        "price": 1500.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche LV Chocolatada Nescao x 185 cc_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 563,
        "name": "Leche LV Modificada Etapa 3 Baby La Serenísima x 200 cc.",
        "price": 1550.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche LV Modificada Etapa 3 Baby La Sere_62.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 564,
        "name": "Protein chocolate 200ml",
        "price": 1700.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Protein chocolate 200ml_51.jpg",
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
        "id": 565,
        "name": "Bebida Lactea a Base de Leche Capuchino Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Capuchino _67.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 566,
        "name": "Bebida Lactea a Base de Leche Caramel Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Caramel Se_68.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 567,
        "name": "Bebida Lactea a Base de Leche Avellanas Sense x 200 cc.",
        "price": 1750.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Bebida Lactea a Base de Leche Avellanas _75.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 568,
        "name": "Leche chocolatada La Serenísima Clásico 200cc",
        "price": 1800.0,
        "market": "aura",
        "category": "leches",
        "image": "images/laanonima/Leche chocolatada La Serenísima Clásico _7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 569,
        "name": "Limpiador Líquido Concentrado Lavanda Rinde 1 Lt. Best x 30 cc.",
        "price": 660.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Limpiador Líquido Concentrado Lavanda Ri_137.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 660.0
            }
        ]
    },
    {
        "id": 570,
        "name": "Limpiador Líquido Concentrado Marina Rinde 1 Lt. Best x 30 cc.",
        "price": 660.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Limpiador Líquido Concentrado Marina Rin_138.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 660.0
            }
        ]
    },
    {
        "id": 571,
        "name": "Fibra Esponja Lisita Best x 1 un.",
        "price": 810.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Fibra Esponja Lisita Best x 1 un_105.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 800.0
            },
            {
                "date": "2026-03-28",
                "price": 810.0
            }
        ]
    },
    {
        "id": 572,
        "name": "Fibra Esponja Best Extra Delgada x 1 un.",
        "price": 910.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Fibra Esponja Best Extra Delgada x 1 un_145.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 870.0
            },
            {
                "date": "2026-03-28",
                "price": 910.0
            }
        ]
    },
    {
        "id": 573,
        "name": "Rejilla Blanca Best Pábilo 32x42cm x 1 un.",
        "price": 1150.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Rejilla Blanca Best Pábilo 32x42cm x 1 u_91.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1050.0
            },
            {
                "date": "2026-03-28",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 574,
        "name": "Fibra Esponja Suave Best No raya x 1 un.",
        "price": 1150.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Fibra Esponja Suave Best No raya x 1 un_118.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1100.0
            },
            {
                "date": "2026-03-28",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 575,
        "name": "Jabón en Pan Blanco Best x 1 un. x 200 g.",
        "price": 1300.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Jabón en Pan Blanco Best x 1 un x 200 g_27.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1300.0
            }
        ]
    },
    {
        "id": 576,
        "name": "Esponja de Acero Best x 2 un.",
        "price": 1350.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Esponja de Acero Best x 2 un_76.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 577,
        "name": "Rejilla Blanca Best Americana 38x43cm x 1 un.",
        "price": 1400.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Rejilla Blanca Best Americana 38x43cm x _67.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1300.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 578,
        "name": "Limpiador Líquido para Pisos Best Fragancia Lavanda x 900 cc.",
        "price": 1400.0,
        "market": "aura",
        "category": "limpieza",
        "image": "images/laanonima/Limpiador Líquido para Pisos Best Fragan_77.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1350.0
            },
            {
                "date": "2026-03-28",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 579,
        "name": "Pañales Huggies Classic P x30",
        "price": 12500.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Huggies Classic P x30_63.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12500.0
            }
        ]
    },
    {
        "id": 580,
        "name": "Pañales Babysec Super Premium Recien Nacido 20 Un.",
        "price": 13350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañales Babysec Super Premium Recien Nac_33.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13350.0
            }
        ]
    },
    {
        "id": 581,
        "name": "Pañal Huggies Flexi Comfort XG x16",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort XG x16_70.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 582,
        "name": "Pañal Huggies Flexi Comfort G x20",
        "price": 14300.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort G x20_71.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14300.0
            }
        ]
    },
    {
        "id": 583,
        "name": "Traje Baño M Little Swimm Huggies x 11 un.",
        "price": 14550.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje Baño M Little Swimm Huggies x 11 u_84.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14550.0
            }
        ]
    },
    {
        "id": 584,
        "name": "Pañal Huggies Protect Plus P x30",
        "price": 14600.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Protect Plus P x30_58.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14600.0
            }
        ]
    },
    {
        "id": 585,
        "name": "Traje de Baño Descremado  Splashers G-XG Pampers x 10 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers G-XG_21.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 586,
        "name": "Traje de Baño Descremado  Splashers P-M Pampers x 12 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers P-M _22.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 587,
        "name": "Traje de Baño Descremado  Splashers M-G Pampers x 11 un.",
        "price": 16350.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Traje de Baño Descremado  Splashers M-G _23.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16350.0
            }
        ]
    },
    {
        "id": 588,
        "name": "Pañal Huggies Flexi Comfort P x30",
        "price": 17150.0,
        "market": "aura",
        "category": "pañales",
        "image": "images/laanonima/Pañal Huggies Flexi Comfort P x30_55.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 17150.0
            }
        ]
    },
    {
        "id": 589,
        "name": "Servilletas Papel Hoja Simple 32,3 cm x 30 cm Felpita x 70 Un.",
        "price": 1550.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilletas Papel Hoja Simple 323 cm x 3_38.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 590,
        "name": "Servilleta Sussex Clásica hoja simple 80 un",
        "price": 1800.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilleta Sussex Clásica hoja simple 80_33.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 591,
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
        "id": 592,
        "name": "Servilletas Papel Tissue La Anónima Decoradas 32cmx30cm x 70 un.",
        "price": 1900.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilletas Papel Tissue La Anónima Deco_26.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 593,
        "name": "Servilletas La Anónima x 80 un.",
        "price": 2150.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Servilletas La Anónima x 80 un_10.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 594,
        "name": "Bolsas para Residuos Best 45x55cm x 20 un.",
        "price": 2200.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Bolsas para Residuos Best 45x55cm x 20 u_20.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 595,
        "name": "Papel Higiénico Hoja Simple Elegante 30 Mts Blanco x 4 un.",
        "price": 2400.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Papel Higiénico Hoja Simple Elegante 30 _40.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 596,
        "name": "Papel higiénico Higienol Fresh hoja simple 30 m 4 un",
        "price": 2450.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Papel higiénico Higienol Fresh hoja simp_39.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2450.0
            }
        ]
    },
    {
        "id": 597,
        "name": "Rollo Cocina Doble Hoja x 60 Un. Paños Felpita x 3 Un.",
        "price": 2500.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Rollo Cocina Doble Hoja x 60 Un Paños Fe_29.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 598,
        "name": "Papel Higiénico Hoja Simple Best 4 x 30 metros",
        "price": 2700.0,
        "market": "aura",
        "category": "papeles",
        "image": "images/laanonima/Papel Higiénico Hoja Simple Best 4 x 30 _16.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 599,
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
        "id": 600,
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
        "id": 601,
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
        "id": 602,
        "name": "Cuarto Trasero de Pollo La Anónima (Kg)",
        "price": 5190.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cuarto Trasero de Pollo La Anónima Kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5190.0
            }
        ]
    },
    {
        "id": 603,
        "name": "Muslo de Pollo La Anónima (Kg)",
        "price": 5890.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Muslo de Pollo La Anónima Kg_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5890.0
            }
        ]
    },
    {
        "id": 604,
        "name": "PataMuslo de Pollo La Anónima (Kg)",
        "price": 6490.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/PataMuslo de Pollo La Anónima Kg_6.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 6490.0
            }
        ]
    },
    {
        "id": 605,
        "name": "Pollo Refrigerado Bandeja Pollolin (Kg)",
        "price": 6550.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Refrigerado Bandeja Pollolin Kg_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6550.0
            }
        ]
    },
    {
        "id": 606,
        "name": "Cuarto Trasero Bandeja Pollolin (Kg)",
        "price": 6990.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cuarto Trasero Bandeja Pollolin Kg_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6990.0
            }
        ]
    },
    {
        "id": 607,
        "name": "Pollo Parrillero Pollolin (Kg)",
        "price": 7490.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Pollo Parrillero Pollolin Kg_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7490.0
            }
        ]
    },
    {
        "id": 608,
        "name": "Muslo Pollolin (Kg)",
        "price": 7690.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Muslo Pollolin Kg_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 7690.0
            }
        ]
    },
    {
        "id": 609,
        "name": "Queso Rallado La Quesera x 40 g.",
        "price": 950.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Quesera x 40 g_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 950.0
            }
        ]
    },
    {
        "id": 610,
        "name": "Queso Rallado Reggianito Tonadita x 40 g.",
        "price": 1650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Reggianito Tonadita x 40 g_8.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 611,
        "name": "Queso Rallado Reggianito La Serenísima x 35 g.",
        "price": 1800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Reggianito La Serenísima x_15.jpg",
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
        "price": 2150.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Quesera x 100 g_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 613,
        "name": "Queso Rallado Tregar x 40 g.",
        "price": 2200.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado Tregar x 40 g_69.jpg",
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
        "id": 614,
        "name": "Queso Rallado La Paulina x 40 g.",
        "price": 2400.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Rallado La Paulina x 40 g_46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2350.0
            },
            {
                "date": "2026-03-21",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 615,
        "name": "Queso Provolone En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Provolone En Fetas x 8 Un Tonadita_27.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 616,
        "name": "Queso Cheddar En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso Cheddar En Fetas x 8 Un Tonadita x_28.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2800.0
            }
        ]
    },
    {
        "id": 617,
        "name": "Queso en Hebras Mini La Paulina x 80 g.",
        "price": 3000.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso en Hebras Mini La Paulina x 80 g_62.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3000.0
            }
        ]
    },
    {
        "id": 618,
        "name": "Queso de Cerdo Feteado 42 x 200 g.",
        "price": 3300.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images/laanonima/Queso de Cerdo Feteado 42 x 200 g_70.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            },
            {
                "date": "2026-03-21",
                "price": 3300.0
            }
        ]
    },
    {
        "id": 619,
        "name": "Polvo para preparar Salsa Blanca Dos Anclas x 40 g.",
        "price": 840.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Polvo para preparar Salsa Blanca Dos Anc_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 840.0
            }
        ]
    },
    {
        "id": 620,
        "name": "Ajo en Polvo Deshidratado Dos Anclas x 20 g.",
        "price": 1400.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Ajo en Polvo Deshidratado Dos Anclas x 2_0.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 621,
        "name": "Perejil Deshidratado Dos Anclas x 25 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Perejil Deshidratado Dos Anclas x 25 g_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 622,
        "name": "Sal Fina Paquete Dos Anclas x 500 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Fina Paquete Dos Anclas x 500 g_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 623,
        "name": "Pimienta Negra Molida Sobre Dos Anclas x 25 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Pimienta Negra Molida Sobre Dos Anclas x_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 624,
        "name": "Ají Molido Dos Anclas x 50 g.",
        "price": 2200.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Ají Molido Dos Anclas x 50 g_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2200.0
            }
        ]
    },
    {
        "id": 625,
        "name": "Pimentón Seleccionado Dos Anclas x 50 g.",
        "price": 2300.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Pimentón Seleccionado Dos Anclas x 50 g_2.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 626,
        "name": "Sal Entrefina Parrillera Estuche Dos Anclas x 1 Kg.",
        "price": 2600.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Entrefina Parrillera Estuche Dos Anc_8.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 627,
        "name": "Sal Gruesa Paquete Dos Anclas x 1 Kg.",
        "price": 2600.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Sal Gruesa Paquete Dos Anclas x 1 Kg_9.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2600.0
            }
        ]
    },
    {
        "id": 628,
        "name": "Provenzal Dos Anclas x 50 g.",
        "price": 2700.0,
        "market": "aura",
        "category": "sal",
        "image": "images/laanonima/Provenzal Dos Anclas x 50 g_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 629,
        "name": "Cereal Aritos Frutados Julicroc x 150 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cereal Aritos Frutados Julicroc x 150 g_46.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 630,
        "name": "Cereal Bolitas de Chocolate Julicroc x 150 g.",
        "price": 1200.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Cereal Bolitas de Chocolate Julicroc x 1_47.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 631,
        "name": "Barrita Vegana Choco Naranja Laddu Bar x 30 g.",
        "price": 1500.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Barrita Vegana Choco Naranja Laddu Bar x_75.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 632,
        "name": "Chips de Remolachas y Batatas Nuestros Sabores x 80 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Chips de Remolachas y Batatas Nuestros S_29.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 633,
        "name": "Chips de Batata Frita Nuestros Sabores x 80 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Chips de Batata Frita Nuestros Sabores x_30.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 634,
        "name": "Papas Fritas Sabor Cheddar Julicroc x 70 g.",
        "price": 1700.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Papas Fritas Sabor Cheddar Julicroc x 70_66.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 635,
        "name": "Almohaditas Rellena de Avellana sin Tacc Snuks x 90 g.",
        "price": 1850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Almohaditas Rellena de Avellana sin Tacc_51.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 636,
        "name": "Almohaditas Rellena de Frutilla sin Tacc Snuks x 90 g.",
        "price": 1850.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Almohaditas Rellena de Frutilla sin Tacc_71.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 637,
        "name": "Galletitas sabor Frutilla sin Tacc Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Galletitas sabor Frutilla sin Tacc Smams_61.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 638,
        "name": "Galletitas Rellenas Vainilla Smams x 105 g.",
        "price": 1900.0,
        "market": "aura",
        "category": "all",
        "image": "images/laanonima/Galletitas Rellenas Vainilla Smams x 105_62.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1900.0
            }
        ]
    },
    {
        "id": 639,
        "name": "Vinagre De Alcohol 1lts Cuisine & Co",
        "price": 1490.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol 1lts Cuisine  Co_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 640,
        "name": "Vinagre De Alcohol Favinco Sin Tacc X 1lt",
        "price": 1550.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol Favinco Sin Tacc X 1l_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 641,
        "name": "Vinagre De Alcohol Clasico Botella 1 Lt.",
        "price": 1700.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol Clasico Botella 1 Lt_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 642,
        "name": "Vinagre De Alcohol Menoyo 1 L",
        "price": 1700.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol Menoyo 1 L_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 643,
        "name": "Vinagre De Alcohol Dos Anclas 1 L",
        "price": 1750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Vinagre De Alcohol Dos Anclas 1 L_15.jpg",
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
        "id": 644,
        "name": "Jugo De Limón Minerva 500 Ml",
        "price": 2475.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Jugo De Limón Minerva 500 Ml_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3300.0
            },
            {
                "date": "2026-03-28",
                "price": 2475.0
            }
        ]
    },
    {
        "id": 645,
        "name": "Aceite Girasol Legitimo 900 Ml",
        "price": 3149.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite Girasol Legitimo 900 Ml_1.jpg",
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
        "id": 646,
        "name": "Aceite Alsamar Girasol X900ml",
        "price": 3350.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite Alsamar Girasol X900ml_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3350.0
            }
        ]
    },
    {
        "id": 647,
        "name": "Aceite De Girasol Cañuelas 900 Ml",
        "price": 3750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite De Girasol Cañuelas 900 Ml_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 648,
        "name": "Aceite De Girasol 900 Ml Cocinero",
        "price": 3750.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images/vea/Aceite De Girasol 900 Ml Cocinero_7.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3750.0
            }
        ]
    },
    {
        "id": 649,
        "name": "Agua Cellier Sin Gas 2lt",
        "price": 1159.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Cellier Sin Gas 2lt_8.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 650,
        "name": "Agua Nestle Pureza Vital 1.5lt",
        "price": 1270.8,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Nestle Pureza Vital 15lt_18.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1270.8
            }
        ]
    },
    {
        "id": 651,
        "name": "Agua Villa Del Sur Pet Sin Gas 2250 Ml",
        "price": 1380.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Villa Del Sur Pet Sin Gas 2250 Ml_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1380.0
            },
            {
                "date": "2026-03-16",
                "price": 2300.0
            },
            {
                "date": "2026-03-21",
                "price": 1380.0
            }
        ]
    },
    {
        "id": 652,
        "name": "Soda 2.25 Lts Cuisine & Co",
        "price": 1590.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Soda 225 Lts Cuisine  Co_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1590.0
            }
        ]
    },
    {
        "id": 653,
        "name": "Soda Sierra De Los Padres 1.75lt",
        "price": 1667.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Soda Sierra De Los Padres 175lt_17.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1667.0
            }
        ]
    },
    {
        "id": 654,
        "name": "Agua Sin Gas Villavicencio 2 L",
        "price": 1710.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Agua Sin Gas Villavicencio 2 L_4.jpg",
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
            }
        ]
    },
    {
        "id": 655,
        "name": "Agua Mineral Eco De Los Andes Sin Gas 2 L",
        "price": 1750.8,
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
            }
        ]
    },
    {
        "id": 656,
        "name": "Saborizada Levite Pomelo 2.25lt",
        "price": 1860.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Saborizada Levite Pomelo 225lt_1.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2015.0
            },
            {
                "date": "2026-03-28",
                "price": 1860.0
            }
        ]
    },
    {
        "id": 657,
        "name": "Saborizada Levite Manzana 2.25lt",
        "price": 1860.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Saborizada Levite Manzana 225lt_5.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2015.0
            },
            {
                "date": "2026-03-28",
                "price": 1860.0
            }
        ]
    },
    {
        "id": 658,
        "name": "Saborizada Levite Naranja 2.25lt",
        "price": 1860.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images/vea/Saborizada Levite Naranja 225lt_7.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2015.0
            },
            {
                "date": "2026-03-28",
                "price": 1860.0
            }
        ]
    },
    {
        "id": 659,
        "name": "Arroz Luchetti Largo Fino X500g",
        "price": 750.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Luchetti Largo Fino X500g_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1000.0
            },
            {
                "date": "2026-03-28",
                "price": 750.0
            }
        ]
    },
    {
        "id": 660,
        "name": "Arroz Ala Grano Largo Fino 500 Gr",
        "price": 770.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Ala Grano Largo Fino 500 Gr_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 715.0
            },
            {
                "date": "2026-03-16",
                "price": 1100.0
            },
            {
                "date": "2026-03-21",
                "price": 715.0
            },
            {
                "date": "2026-03-28",
                "price": 770.0
            }
        ]
    },
    {
        "id": 661,
        "name": "Arroz Parboil Luchetti 500 Gr",
        "price": 862.5,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Parboil Luchetti 500 Gr_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1150.0
            },
            {
                "date": "2026-03-28",
                "price": 862.5
            }
        ]
    },
    {
        "id": 662,
        "name": "Arroz Largo Fino Vanguardia 1 Kg",
        "price": 1099.0,
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
            }
        ]
    },
    {
        "id": 663,
        "name": "Arroz Ala Grano Largo Fino - 1 Kg",
        "price": 1190.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Ala Grano Largo Fino - 1 Kg_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1163.5
            },
            {
                "date": "2026-03-16",
                "price": 1190.0
            },
            {
                "date": "2026-03-21",
                "price": 1163.5
            },
            {
                "date": "2026-03-28",
                "price": 1190.0
            }
        ]
    },
    {
        "id": 664,
        "name": "Maiz Pisingallo 400 Grs Cuisine & Co",
        "price": 1190.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Maiz Pisingallo 400 Grs Cuisine  Co_14.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 560.0
            },
            {
                "date": "2026-03-21",
                "price": 1190.0
            }
        ]
    },
    {
        "id": 665,
        "name": "Arroz Parboil 1 Kg Cuisine & Co",
        "price": 1350.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Parboil 1 Kg Cuisine  Co_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1350.0
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
                "date": "2026-03-16",
                "price": 877.5
            },
            {
                "date": "2026-03-16",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 667,
        "name": "Arroz Largo Fino Luchetti 1 Kg",
        "price": 1400.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Largo Fino Luchetti 1 Kg_3.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 668,
        "name": "Arroz Ala Grano Largo Dorado 1 Kg",
        "price": 1540.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images/vea/Arroz Ala Grano Largo Dorado 1 Kg_11.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1430.0
            },
            {
                "date": "2026-03-28",
                "price": 1540.0
            }
        ]
    },
    {
        "id": 669,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_44.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 670,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_45.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 671,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 672,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 4800.0,
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
            }
        ]
    },
    {
        "id": 673,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 4800.0,
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
            }
        ]
    },
    {
        "id": 674,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 4800.0,
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
            }
        ]
    },
    {
        "id": 675,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 7990.0,
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
            }
        ]
    },
    {
        "id": 676,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 7990.0,
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
            }
        ]
    },
    {
        "id": 677,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 7990.0,
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
            }
        ]
    },
    {
        "id": 678,
        "name": "Queso Barra Vea Tripack X Kg",
        "price": 10425.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Queso Barra Vea Tripack X Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 10425.0
            }
        ]
    },
    {
        "id": 679,
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
        "id": 680,
        "name": "Falda",
        "price": 7905.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Falda_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 7905.0
            }
        ]
    },
    {
        "id": 681,
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
            }
        ]
    },
    {
        "id": 684,
        "name": "Tapa De Bife Novillito Ev Al Vacio",
        "price": 12829.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Tapa De Bife Novillito Ev Al Vacio_12.jpg",
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
            }
        ]
    },
    {
        "id": 686,
        "name": "Roast Beef Churrasco",
        "price": 12999.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Roast Beef Churrasco_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 12999.0
            }
        ]
    },
    {
        "id": 687,
        "name": "Manta Parrillera La Hacienda",
        "price": 12999.0,
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
            }
        ]
    },
    {
        "id": 688,
        "name": "Vacio Congelado",
        "price": 15999.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images/vea/Vacio Congelado_4.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 15999.0
            }
        ]
    },
    {
        "id": 689,
        "name": "Copos De Maíz Azucarados 240 Grs Cuisine & Co",
        "price": 1365.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos De Maíz Azucarados 240 Grs Cuisine_11.jpg",
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
            }
        ]
    },
    {
        "id": 690,
        "name": "Copos De Maiz 150 Grs Cuisine & Co",
        "price": 1550.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos De Maiz 150 Grs Cuisine  Co_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 981.5
            },
            {
                "date": "2026-03-21",
                "price": 1007.5
            },
            {
                "date": "2026-03-28",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 691,
        "name": "Barra De Avena Caju Y Arándanos 41 Gr Integra",
        "price": 1700.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Avena Caju Y Arándanos 41 Gr In_14.jpg",
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
        "id": 692,
        "name": "Barra Sin Tacc Semillas Arandanos 38 Gr Integra",
        "price": 1750.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra Sin Tacc Semillas Arandanos 38 Gr _19.jpg",
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
        "id": 693,
        "name": "Barra De Cereal Cacao 45 Gr Muecas",
        "price": 1800.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Cereal Cacao 45 Gr Muecas_2.jpg",
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
            }
        ]
    },
    {
        "id": 694,
        "name": "Barra De Cereal Banana 45 Gr Muecas",
        "price": 1800.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra De Cereal Banana 45 Gr Muecas_5.jpg",
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
            }
        ]
    },
    {
        "id": 695,
        "name": "Copos De Maíz Granix Skarchitos 240 Gr",
        "price": 2100.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Copos De Maíz Granix Skarchitos 240 Gr_6.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1470.0
            },
            {
                "date": "2026-03-28",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 696,
        "name": "Barra Proteica Mani Chocolate 45 Gr Integra",
        "price": 2300.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra Proteica Mani Chocolate 45 Gr Inte_0.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1610.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 697,
        "name": "Barra Proteica Pasta De Mani Arandanos 43 Gr Integra",
        "price": 2300.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Barra Proteica Pasta De Mani Arandanos 4_1.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 698,
        "name": "Bolitas De Chocolate Rock´n Chock Sin Tacc 200 Grs Cuisine & Co",
        "price": 2300.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images/vea/Bolitas De Chocolate Rockn Chock Sin Tac_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1462.5
            },
            {
                "date": "2026-03-21",
                "price": 1495.0
            },
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 699,
        "name": "Cerveza Brahma Chopp Lata 354mlx1",
        "price": 800.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Brahma Chopp Lata 354mlx1_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 921.0
            },
            {
                "date": "2026-03-21",
                "price": 800.0
            }
        ]
    },
    {
        "id": 700,
        "name": "Cerveza Imperial Golden 473cc",
        "price": 1350.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Imperial Golden 473cc_19.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 701,
        "name": "Cerveza Heineken 473 Ml",
        "price": 1750.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Heineken 473 Ml_1.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2275.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 702,
        "name": "Cerveza Heineken 330 Ml",
        "price": 1875.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Heineken 330 Ml_16.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2437.5
            },
            {
                "date": "2026-03-28",
                "price": 1875.0
            }
        ]
    },
    {
        "id": 703,
        "name": "Cerveza Stella Artois Sin Alcohol 330 Ml",
        "price": 2250.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Stella Artois Sin Alcohol 330 Ml_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2175.0
            },
            {
                "date": "2026-03-16",
                "price": 2030.0
            },
            {
                "date": "2026-03-21",
                "price": 1800.0
            },
            {
                "date": "2026-03-28",
                "price": 2250.0
            }
        ]
    },
    {
        "id": 704,
        "name": "Cerveza Rubia 473 Ml Schneider",
        "price": 2300.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Rubia 473 Ml Schneider_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1495.0
            },
            {
                "date": "2026-03-21",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 705,
        "name": "Cerveza Imperial Golden 1 L",
        "price": 2300.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Imperial Golden 1 L_12.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 706,
        "name": "Cerveza Quilmes Clasica 710cc",
        "price": 2550.0,
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
            }
        ]
    },
    {
        "id": 707,
        "name": "Cerveza Sin Alcohol 330 Cc Corona",
        "price": 2550.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Sin Alcohol 330 Cc Corona_14.jpg",
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
            }
        ]
    },
    {
        "id": 708,
        "name": "Cerveza Quilmes Bajo Cero 1lt Ret.",
        "price": 2625.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images/vea/Cerveza Quilmes Bajo Cero 1lt Ret_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2550.0
            },
            {
                "date": "2026-03-21",
                "price": 2625.0
            }
        ]
    },
    {
        "id": 709,
        "name": "Salame Bocatti Feteado 70 Gr",
        "price": 3297.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Bocatti Feteado 70 Gr_17.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3297.0
            }
        ]
    },
    {
        "id": 710,
        "name": "Salame Fuet Doina 150 Gr",
        "price": 3690.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Fuet Doina 150 Gr_13.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 3690.0
            }
        ]
    },
    {
        "id": 711,
        "name": "Mortadela Paladini Familiar 300 Gr",
        "price": 5115.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Mortadela Paladini Familiar 300 Gr_16.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 5115.0
            }
        ]
    },
    {
        "id": 712,
        "name": "Jamón Cocido Linea Permi Paladini X 150 Gr",
        "price": 5400.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamón Cocido Linea Permi Paladini X 150 _0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 5400.0
            }
        ]
    },
    {
        "id": 713,
        "name": "Salame Bocatti Feteado 100 Gr",
        "price": 5606.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salame Bocatti Feteado 100 Gr_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 5606.0
            }
        ]
    },
    {
        "id": 714,
        "name": "Jamon Cocido Campo Austral X 200 Gr",
        "price": 6036.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Cocido Campo Austral X 200 Gr_18.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 6036.0
            }
        ]
    },
    {
        "id": 715,
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
        "id": 716,
        "name": "Jamon Crudo Paladini Fetas Finas X 120gr",
        "price": 13300.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Crudo Paladini Fetas Finas X 120gr_2.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 13300.0
            }
        ]
    },
    {
        "id": 717,
        "name": "Fiambre De Cerdo Cocido Campo Austral Kg",
        "price": 15840.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Fiambre De Cerdo Cocido Campo Austral Kg_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 15840.0
            }
        ]
    },
    {
        "id": 718,
        "name": "Jamon Cocido Campo Austral Tradicional Feteado Sobre 1 Kg",
        "price": 24213.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Jamon Cocido Campo Austral Tradicional F_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 24213.0
            }
        ]
    },
    {
        "id": 719,
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
        "id": 720,
        "name": "Mango En Cubos X 250 Gr Alif Agro",
        "price": 3450.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mango En Cubos X 250 Gr Alif Agro_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3450.0
            }
        ]
    },
    {
        "id": 721,
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
        "id": 722,
        "name": "Mix Patagonico X 250 Gr Alif Agro",
        "price": 5650.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mix Patagonico X 250 Gr Alif Agro_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5650.0
            }
        ]
    },
    {
        "id": 723,
        "name": "Frutillas Green Life 400g",
        "price": 7450.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frutillas Green Life 400g_3.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7450.0
            }
        ]
    },
    {
        "id": 724,
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
        "id": 725,
        "name": "Mix 4 Berries Green Life 400g",
        "price": 9600.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Mix 4 Berries Green Life 400g_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9600.0
            }
        ]
    },
    {
        "id": 726,
        "name": "Frutilla X 1 Kg Alif Agro",
        "price": 11150.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Frutilla X 1 Kg Alif Agro_5.jpg",
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
        "id": 727,
        "name": "Moras 550g Green Life",
        "price": 16000.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Moras 550g Green Life_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 16000.0
            }
        ]
    },
    {
        "id": 728,
        "name": "Gaseosa Coca-cola Sabor Original 354 Ml",
        "price": 1466.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Coca-cola Sabor Original 354 Ml_5.jpg",
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
            }
        ]
    },
    {
        "id": 729,
        "name": "Gaseosa Sprite Lima-limón 354 Ml",
        "price": 1466.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Sprite Lima-limón 354 Ml_18.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1466.67
            }
        ]
    },
    {
        "id": 730,
        "name": "Gaseosa Pepsi  Lata 354ml X 1u",
        "price": 1500.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Lata 354ml X 1u_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 731,
        "name": "Gaseosa Sabor Original X 600 Ml Coca-cola",
        "price": 1833.33,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Sabor Original X 600 Ml Coca-col_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1833.33
            }
        ]
    },
    {
        "id": 732,
        "name": "Gaseosa Zero X 600 Ml Coca-cola",
        "price": 1833.33,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Zero X 600 Ml Coca-cola_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1833.33
            }
        ]
    },
    {
        "id": 733,
        "name": "Gaseosa Mirinda Naranja Botella 2,25ltx1",
        "price": 1837.5,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Mirinda Naranja Botella 225ltx1_19.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1837.5
            }
        ]
    },
    {
        "id": 734,
        "name": "Gaseosa Pepsi Black 2 L",
        "price": 2100.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi Black 2 L_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2200.0
            },
            {
                "date": "2026-03-16",
                "price": 2500.0
            },
            {
                "date": "2026-03-21",
                "price": 2520.0
            },
            {
                "date": "2026-03-28",
                "price": 2100.0
            }
        ]
    },
    {
        "id": 735,
        "name": "Gaseosa 7 Up Sin Azucar 1.5lt",
        "price": 2200.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa 7 Up Sin Azucar 15lt_11.jpg",
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
            }
        ]
    },
    {
        "id": 736,
        "name": "Gaseosa Pepsi  Botella 2 L",
        "price": 2500.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Pepsi  Botella 2 L_3.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 737,
        "name": "Gaseosa Paso De Los Toros Tónica Botella 1,5ltx1",
        "price": 2775.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images/vea/Gaseosa Paso De Los Toros Tónica Botella_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2775.0
            }
        ]
    },
    {
        "id": 738,
        "name": "Isotonico Zero Fresa-kiwi 400 Ml Gatorade",
        "price": 975.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Zero Fresa-kiwi 400 Ml Gatorad_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 975.0
            }
        ]
    },
    {
        "id": 739,
        "name": "Isotonico Zero Moras 400 Ml Gatorade",
        "price": 975.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Zero Moras 400 Ml Gatorade_13.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 975.0
            }
        ]
    },
    {
        "id": 740,
        "name": "Bebida Isotónica Fresh Blue 500 Ml Full Sport",
        "price": 1072.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Fresh Blue 500 Ml Full _10.jpg",
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
            }
        ]
    },
    {
        "id": 741,
        "name": "Bebida Isotónica Manzana 500 Ml Full Sport",
        "price": 1072.5,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Manzana 500 Ml Full Spo_14.jpg",
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
            }
        ]
    },
    {
        "id": 742,
        "name": "Isotonico Powerade Frutas Tropical 500cc",
        "price": 1425.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Frutas Tropical 500cc_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            },
            {
                "date": "2026-03-21",
                "price": 1235.0
            },
            {
                "date": "2026-03-28",
                "price": 1425.0
            }
        ]
    },
    {
        "id": 743,
        "name": "Bebida Isotónica Mountain Blast 500 Ml Powerade",
        "price": 1425.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Mountain Blast 500 Ml P_1.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            },
            {
                "date": "2026-03-21",
                "price": 1235.0
            },
            {
                "date": "2026-03-28",
                "price": 1425.0
            }
        ]
    },
    {
        "id": 744,
        "name": "Isotonico Powerade Manzana 500cc",
        "price": 1425.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Powerade Manzana 500cc_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1900.0
            },
            {
                "date": "2026-03-21",
                "price": 1235.0
            },
            {
                "date": "2026-03-28",
                "price": 1425.0
            }
        ]
    },
    {
        "id": 745,
        "name": "Bebida Isotónica Uva 500 Ml Powerade",
        "price": 1425.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Bebida Isotónica Uva 500 Ml Powerade_7.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1425.0
            }
        ]
    },
    {
        "id": 746,
        "name": "Isotónica Gatorade Naranja Botella 500mlx1",
        "price": 1430.0,
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
            }
        ]
    },
    {
        "id": 747,
        "name": "Isotonico Gatorade Manzana 750cc",
        "price": 1625.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images/vea/Isotonico Gatorade Manzana 750cc_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1875.0
            },
            {
                "date": "2026-03-21",
                "price": 1625.0
            }
        ]
    },
    {
        "id": 748,
        "name": "Jugo En Polvo Tang Naranja Dulce 15gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Dulce 15gr_5.jpg",
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
            }
        ]
    },
    {
        "id": 749,
        "name": "Jugo En Polvo Tang Naranja Mango 15gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Mango 15gr_7.jpg",
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
            }
        ]
    },
    {
        "id": 750,
        "name": "Jugo En Polvo Tang Multifruta 15gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Multifruta 15gr_8.jpg",
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
            }
        ]
    },
    {
        "id": 751,
        "name": "Jugo En Polvo Tang Manzana 15gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Manzana 15gr_10.jpg",
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
            }
        ]
    },
    {
        "id": 752,
        "name": "Jugo En Polvo Tang Limon Dulce 15gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Limon Dulce 15gr_12.jpg",
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
            }
        ]
    },
    {
        "id": 753,
        "name": "Jugo En Polvo Tang Naranja Banana 15gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja Banana 15gr_15.jpg",
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
            }
        ]
    },
    {
        "id": 754,
        "name": "Jugo En Polvo Tang Pomelo Rosado 15 Gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Pomelo Rosado 15 Gr_17.jpg",
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
            }
        ]
    },
    {
        "id": 755,
        "name": "Jugo En Polvo Tang Naranja 15gr",
        "price": 244.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Tang Naranja 15gr_19.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 240.0
            },
            {
                "date": "2026-03-28",
                "price": 244.0
            }
        ]
    },
    {
        "id": 756,
        "name": "Jugo En Polvo Naranja Dulce 7,5 Grs Clight",
        "price": 246.5,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Naranja Dulce 75 Grs Cligh_4.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 249.5
            },
            {
                "date": "2026-03-28",
                "price": 246.5
            }
        ]
    },
    {
        "id": 757,
        "name": "Jugo En Polvo Manzana Deliciosa 7 Grs Clight",
        "price": 246.5,
        "market": "lumina",
        "category": "jugos",
        "image": "images/vea/Jugo En Polvo Manzana Deliciosa 7 Grs Cl_6.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 249.5
            },
            {
                "date": "2026-03-28",
                "price": 246.5
            }
        ]
    },
    {
        "id": 758,
        "name": "Leche Descremada Manfrey Uat 1 Lt",
        "price": 1117.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Descremada Manfrey Uat 1 Lt_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1490.0
            },
            {
                "date": "2026-03-21",
                "price": 1117.5
            }
        ]
    },
    {
        "id": 759,
        "name": "Leche Uat Descremada Apostoles 1 L",
        "price": 1117.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Descremada Apostoles 1 L_13.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1117.5
            }
        ]
    },
    {
        "id": 760,
        "name": "Leche Uat Descremada 2apostoles 1l",
        "price": 1117.5,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Descremada 2apostoles 1l_18.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1117.5
            }
        ]
    },
    {
        "id": 761,
        "name": "Leche Uat Entera Sachet X 1 L Cuisine & Co",
        "price": 1399.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Entera Sachet X 1 L Cuisine  C_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 762,
        "name": "Leche Entera 1 Lts Cuisine & Co",
        "price": 1490.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Entera 1 Lts Cuisine  Co_9.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 763,
        "name": "Leche Semi Descremada 1 Lts Cuisine & Co",
        "price": 1490.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Semi Descremada 1 Lts Cuisine  Co_11.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1490.0
            }
        ]
    },
    {
        "id": 764,
        "name": "Yogur Griego Firme Natural X 190 Grs Yogurisimo",
        "price": 1699.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Yogur Griego Firme Natural X 190 Grs Yog_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 765,
        "name": "Leche Uat Descremada 1l Las Tres Niñas",
        "price": 1700.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Uat Descremada 1l Las Tres Niñas_10.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1875.0
            },
            {
                "date": "2026-03-28",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 766,
        "name": "Leche Entera La Serenísima 3sachet 1lt",
        "price": 1749.0,
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
            }
        ]
    },
    {
        "id": 767,
        "name": "Leche Desc Ls Reduc. Lactosa Sachet 1l",
        "price": 1750.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Leche Desc Ls Reduc Lactosa Sachet 1l_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1649.0
            },
            {
                "date": "2026-03-21",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 768,
        "name": "Leche En Polvo Descremada La Serenisima 200 Gr",
        "price": 3550.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Descremada La Serenisima _15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3550.0
            }
        ]
    },
    {
        "id": 769,
        "name": "Leche Condensada 395 Grs Cuisine & Co",
        "price": 4450.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Condensada 395 Grs Cuisine  Co_3.jpg",
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
        "id": 770,
        "name": "Leche Polvo Fortigrow 200 Grs Nido®",
        "price": 4700.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Polvo Fortigrow 200 Grs Nido_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4600.0
            },
            {
                "date": "2026-03-21",
                "price": 3290.0
            },
            {
                "date": "2026-03-28",
                "price": 4700.0
            }
        ]
    },
    {
        "id": 771,
        "name": "Leche Condensada Orgánica 395 Grs Nestlé®",
        "price": 5100.0,
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
            }
        ]
    },
    {
        "id": 772,
        "name": "Leche Condensada Descremada Orgánica 395 Grs Nestlé®",
        "price": 5100.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Condensada Descremada Orgánica 395_17.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 5100.0
            }
        ]
    },
    {
        "id": 773,
        "name": "Leche En Polvo Modificada Armonia 400 Gr",
        "price": 5850.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Modificada Armonia 400 Gr_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5850.0
            }
        ]
    },
    {
        "id": 774,
        "name": "Leche En Polvo Descremada 400 Grs Cuisine & Co",
        "price": 6650.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Descremada 400 Grs Cuisin_6.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 6650.0
            }
        ]
    },
    {
        "id": 775,
        "name": "Leche Polvo 0 Porciento Lactosa 350 Grs Svelty®",
        "price": 6825.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche Polvo 0 Porciento Lactosa 350 Grs _8.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 7350.0
            },
            {
                "date": "2026-03-28",
                "price": 6825.0
            }
        ]
    },
    {
        "id": 776,
        "name": "Leche En Polvo Purisima 0grasa Deslactosada",
        "price": 6850.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Purisima 0grasa Deslactos_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6850.0
            }
        ]
    },
    {
        "id": 777,
        "name": "Leche En Polvo Descremada La Serenisima 400 Gr",
        "price": 7100.0,
        "market": "lumina",
        "category": "leches",
        "image": "images/vea/Leche En Polvo Descremada La Serenisima _12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7100.0
            }
        ]
    },
    {
        "id": 778,
        "name": "Esponja Virulana Multiuso Cuidauñas",
        "price": 735.0,
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
            }
        ]
    },
    {
        "id": 779,
        "name": "Esponja cuadradito Home Care.",
        "price": 900.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja cuadradito Home Care_9.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 585.0
            },
            {
                "date": "2026-03-28",
                "price": 900.0
            }
        ]
    },
    {
        "id": 780,
        "name": "Esponja Go! Max Multiuso",
        "price": 937.5,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Go Max Multiuso_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1050.0
            },
            {
                "date": "2026-03-28",
                "price": 937.5
            }
        ]
    },
    {
        "id": 781,
        "name": "Paño Rejilla Costero Blanco Optico Super Cocina  1 U",
        "price": 1450.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Paño Rejilla Costero Blanco Optico Super_7.jpg",
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
        "id": 782,
        "name": "Trapo De Piso Home Care Gris Reforzado",
        "price": 1610.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Trapo De Piso Home Care Gris Reforzado_10.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1610.0
            }
        ]
    },
    {
        "id": 783,
        "name": "Bolsa Rollo Impeke 45x60 15u",
        "price": 1750.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Bolsa Rollo Impeke 45x60 15u_18.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1225.0
            },
            {
                "date": "2026-03-28",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 784,
        "name": "Esponja Acero Home Care",
        "price": 1800.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Acero Home Care_15.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1170.0
            },
            {
                "date": "2026-03-28",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 785,
        "name": "Esponja Mortimer Doble Cara 1 U",
        "price": 1850.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Esponja Mortimer Doble Cara 1 U_12.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 786,
        "name": "Rollito De Acero Virulana - 10 U",
        "price": 1890.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Rollito De Acero Virulana - 10 U_11.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1890.0
            }
        ]
    },
    {
        "id": 787,
        "name": "Bolsa Rollo Asurin Baño 30u",
        "price": 1950.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images/vea/Bolsa Rollo Asurin Baño 30u_16.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 788,
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
            }
        ]
    },
    {
        "id": 789,
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
            }
        ]
    },
    {
        "id": 790,
        "name": "Alimento Para Gatos Whiskas Pasta Salmón 85 Gr",
        "price": 1350.0,
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
            }
        ]
    },
    {
        "id": 791,
        "name": "Alimento Whiskas Para Gatos Souffle Adulto Carne X85g",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Whiskas Para Gatos Souffle Adul_7.jpg",
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
            }
        ]
    },
    {
        "id": 792,
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
            }
        ]
    },
    {
        "id": 793,
        "name": "Alimento Para Gatos Whiskas Pasta Gatitos 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Gatito_13.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 945.0
            },
            {
                "date": "2026-03-28",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 794,
        "name": "Alimento Para Gatos Whiskas Pasta Carne 85 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Para Gatos Whiskas Pasta Carne _18.jpg",
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
            }
        ]
    },
    {
        "id": 795,
        "name": "Alimento Humedo Cat Chow Ad Pollo",
        "price": 1650.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Humedo Cat Chow Ad Pollo_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1155.0
            },
            {
                "date": "2026-03-16",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 796,
        "name": "Alimento Humedo Cat Chow Estir.pescados",
        "price": 1650.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Humedo Cat Chow Estirpescados_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1155.0
            },
            {
                "date": "2026-03-16",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 797,
        "name": "Alimento Sabrositos Gato Mix P,c,v 1k",
        "price": 3550.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images/vea/Alimento Sabrositos Gato Mix Pcv 1k_10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 3550.0
            }
        ]
    },
    {
        "id": 798,
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
            }
        ]
    },
    {
        "id": 799,
        "name": "Alimento Para Perros Pedigree Pollo 100 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Pollo 100 _6.jpg",
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
            }
        ]
    },
    {
        "id": 800,
        "name": "Alimento Para Perros Pedigree Carne Pouch Adulto 100 Gr",
        "price": 1350.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Para Perros Pedigree Carne Pouc_9.jpg",
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
            }
        ]
    },
    {
        "id": 801,
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
            }
        ]
    },
    {
        "id": 802,
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
            }
        ]
    },
    {
        "id": 803,
        "name": "Alimento Dog Chow Adulto Minis Y Pequeños 1,5 Kg",
        "price": 7050.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Adulto Minis Y Pequeño_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4935.0
            },
            {
                "date": "2026-03-16",
                "price": 7050.0
            }
        ]
    },
    {
        "id": 804,
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
        "id": 805,
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
            }
        ]
    },
    {
        "id": 806,
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
            }
        ]
    },
    {
        "id": 807,
        "name": "Alimento Dog Chow Adulto Minis Y Pequeños 3 Kg",
        "price": 13050.0,
        "market": "lumina",
        "category": "perros",
        "image": "images/vea/Alimento Dog Chow Adulto Minis Y Pequeño_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 9135.0
            },
            {
                "date": "2026-03-16",
                "price": 13050.0
            }
        ]
    },
    {
        "id": 808,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_44.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 809,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_45.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 810,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_46.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 811,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 4800.0,
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
            }
        ]
    },
    {
        "id": 812,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 4800.0,
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
            }
        ]
    },
    {
        "id": 813,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 4800.0,
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
            }
        ]
    },
    {
        "id": 814,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 7990.0,
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
            }
        ]
    },
    {
        "id": 815,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 7990.0,
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
            }
        ]
    },
    {
        "id": 816,
        "name": "Queso Super Crem 1/4 Horma Mínimo 1 Kg Mayorista",
        "price": 7990.0,
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
            }
        ]
    },
    {
        "id": 817,
        "name": "Queso Barra Vea Tripack X Kg",
        "price": 10425.0,
        "market": "lumina",
        "category": "pañales",
        "image": "images/vea/Queso Barra Vea Tripack X Kg_0.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 10425.0
            }
        ]
    },
    {
        "id": 818,
        "name": "Papel Higiénico Campanita Hoja Simple 4 U",
        "price": 1150.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higiénico Campanita Hoja Simple 4 _8.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1360.0
            },
            {
                "date": "2026-03-28",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 819,
        "name": "Rollo De Cocina Sol Mayor X 3 Unid",
        "price": 1250.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo De Cocina Sol Mayor X 3 Unid_6.jpg",
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
        "id": 820,
        "name": "Servilleta Clásica Hoja Simple 80 Un Sussex",
        "price": 1400.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Servilleta Clásica Hoja Simple 80 Un Sus_20.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 821,
        "name": "Papel Higienico Simple Hoja 4x30 M Family Care",
        "price": 1414.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higienico Simple Hoja 4x30 M Famil_7.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2020.0
            },
            {
                "date": "2026-03-28",
                "price": 1414.0
            }
        ]
    },
    {
        "id": 822,
        "name": "Servilleta 80 Un Home Care",
        "price": 1900.0,
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
            }
        ]
    },
    {
        "id": 823,
        "name": "Rollo Cocina Clásico 50 Paños 3 Un Sussex",
        "price": 1987.5,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Clásico 50 Paños 3 Un Susse_11.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1987.5
            }
        ]
    },
    {
        "id": 824,
        "name": "Rollo Cocina Elegante Doble Hoja Gigante 1x200 Paños",
        "price": 1995.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Elegante Doble Hoja Gigante_5.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1995.0
            }
        ]
    },
    {
        "id": 825,
        "name": "Rollo De Cocina Elegante 3 U",
        "price": 1995.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo De Cocina Elegante 3 U_16.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1995.0
            }
        ]
    },
    {
        "id": 826,
        "name": "Papel Higiénico Fresh Hoja Simple 30 M X 4 Un Higienol",
        "price": 2300.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Papel Higiénico Fresh Hoja Simple 30 M X_4.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 827,
        "name": "Rollo Cocina Doble Hoja 50 X 3 Un Home Care",
        "price": 2390.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images/vea/Rollo Cocina Doble Hoja 50 X 3 Un Home C_3.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1673.0
            },
            {
                "date": "2026-03-28",
                "price": 2390.0
            }
        ]
    },
    {
        "id": 828,
        "name": "Cuarto Trasero De Pollo Granel Fresco",
        "price": 3999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Cuarto Trasero De Pollo Granel Fresco_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4399.0
            },
            {
                "date": "2026-03-28",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 829,
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
        "id": 830,
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
        "id": 831,
        "name": "Pollo Parrillero",
        "price": 4999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pollo Parrillero_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 4999.0
            }
        ]
    },
    {
        "id": 832,
        "name": "Muslo De Pollo",
        "price": 6699.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Muslo De Pollo_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6699.0
            }
        ]
    },
    {
        "id": 833,
        "name": "Pata De Pollo",
        "price": 7999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pata De Pollo_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 7999.0
            }
        ]
    },
    {
        "id": 834,
        "name": "Suprema De Pollo Granel Fresca",
        "price": 8999.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Suprema De Pollo Granel Fresca_1.jpg",
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
            }
        ]
    },
    {
        "id": 835,
        "name": "Pechuga De Pollo",
        "price": 10699.0,
        "market": "lumina",
        "category": "all",
        "image": "images/vea/Pechuga De Pollo_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 10699.0
            }
        ]
    },
    {
        "id": 836,
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
        "id": 837,
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
        "id": 838,
        "name": "Salchichas La Blanca 190 Gr 6 U",
        "price": 1200.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas La Blanca 190 Gr 6 U_12.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 839,
        "name": "Salchichas X 6 Un - 190 Grs Cuisine & Co",
        "price": 1389.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas X 6 Un - 190 Grs Cuisine  Co_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1389.0
            }
        ]
    },
    {
        "id": 840,
        "name": "Queso Reggianito Rallado La Serenisima 35gr",
        "price": 1800.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Reggianito Rallado La Serenisima 3_19.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 841,
        "name": "Queso Crema Sin Tacc 290 Grs Cuisine & Co",
        "price": 1899.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Sin Tacc 290 Grs Cuisine  Co_6.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1899.0
            }
        ]
    },
    {
        "id": 842,
        "name": "Queso Blanco Original 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Blanco Original 290 Gr La Serenísi_5.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 843,
        "name": "Queso Blanco Light 290 Gr La Serenísima Clásico",
        "price": 2349.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Blanco Light 290 Gr La Serenísima _7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2349.0
            }
        ]
    },
    {
        "id": 844,
        "name": "Salchichas Granja Iris De Viena 6 U- 225 Gr",
        "price": 2500.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Salchichas Granja Iris De Viena 6 U- 225_13.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2500.0
            }
        ]
    },
    {
        "id": 845,
        "name": "Queso Untable La Serenísima Cremón 280 Gr",
        "price": 2689.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable La Serenísima Cremón 280 G_16.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2689.0
            }
        ]
    },
    {
        "id": 846,
        "name": "Queso Untable Finlandia Clásico 290 Gr",
        "price": 4200.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Untable Finlandia Clásico 290 Gr_17.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5400.0
            },
            {
                "date": "2026-03-21",
                "price": 3750.0
            },
            {
                "date": "2026-03-28",
                "price": 4200.0
            }
        ]
    },
    {
        "id": 847,
        "name": "Queso Crema Clásico 500 Gr Casancrem",
        "price": 4800.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images/vea/Queso Crema Clásico 500 Gr Casancrem_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 5200.0
            },
            {
                "date": "2026-03-16",
                "price": 4800.0
            }
        ]
    },
    {
        "id": 848,
        "name": "Sal Entrefina Dos Anclas 500 Gr",
        "price": 1400.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Entrefina Dos Anclas 500 Gr_1.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 849,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1400.0,
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
            }
        ]
    },
    {
        "id": 850,
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
        "id": 851,
        "name": "Sal Fina Celusal 500 Gr",
        "price": 1450.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Celusal 500 Gr_3.jpg",
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
            }
        ]
    },
    {
        "id": 852,
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
        "id": 853,
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
        "id": 854,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1600.0,
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
            }
        ]
    },
    {
        "id": 855,
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
            }
        ]
    },
    {
        "id": 856,
        "name": "Sal Fina Celusal 100 Gr",
        "price": 2000.0,
        "market": "lumina",
        "category": "sal",
        "image": "images/vea/Sal Fina Celusal 100 Gr_14.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 857,
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