const allProductsData = [
    {
        "id": 1,
        "name": "Vinagre de alcohol Alcazar 1 lt",
        "price": 1319.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Vinagre de alcohol Alcazar 1 lt_15.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1319.0
            }
        ]
    },
    {
        "id": 2,
        "name": "Vinagre de alcohol Carrefour classic 1 l.",
        "price": 1395.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Vinagre de alcohol Carrefour classic 1 l_4.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1305.0
            },
            {
                "date": "2026-05-30",
                "price": 1395.0
            }
        ]
    },
    {
        "id": 3,
        "name": "Vinagre de alcohol Casalta 1 lt",
        "price": 1709.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Vinagre de alcohol Casalta 1 lt_9.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1709.0
            },
            {
                "date": "2026-06-14",
                "price": 1281.75
            },
            {
                "date": "2026-06-21",
                "price": 1709.0
            },
            {
                "date": "2026-07-06",
                "price": 1281.75
            },
            {
                "date": "2026-07-19",
                "price": 1709.0
            }
        ]
    },
    {
        "id": 4,
        "name": "Aceite de girasol Cocinero 900 cc.",
        "price": 3265.88,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Aceite de girasol Cocinero 900 cc_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3705.0
            },
            {
                "date": "2026-04-18",
                "price": 3889.0
            },
            {
                "date": "2026-05-23",
                "price": 4085.0
            },
            {
                "date": "2026-08-03",
                "price": 3265.88
            }
        ]
    },
    {
        "id": 5,
        "name": "Aceite de girasol Carrefour Classic alto omega pet 900 cc.",
        "price": 3431.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Aceite de girasol Carrefour Classic  alt_1.jpg",
        "history": [
            {
                "date": "2026-06-09",
                "price": 3092.6
            },
            {
                "date": "2026-07-06",
                "price": 3431.0
            },
            {
                "date": "2026-07-25",
                "price": 3650.0
            },
            {
                "date": "2026-08-03",
                "price": 3431.0
            }
        ]
    },
    {
        "id": 6,
        "name": "Aceite de girasol Carrefour Classic pet 900 ml",
        "price": 3431.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Aceite de girasol Carrefour Classic pet _10.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3650.0
            },
            {
                "date": "2026-08-03",
                "price": 3431.0
            }
        ]
    },
    {
        "id": 7,
        "name": "Aceite en aerosol Carrefour classic girasol 150 cc.",
        "price": 3994.9,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Aceite en aerosol Carrefour classic gira_6.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 2902.9
            },
            {
                "date": "2026-05-09",
                "price": 3539.9
            },
            {
                "date": "2026-05-16",
                "price": 3266.9
            },
            {
                "date": "2026-05-30",
                "price": 3539.9
            },
            {
                "date": "2026-06-14",
                "price": 3175.9
            },
            {
                "date": "2026-07-06",
                "price": 3994.9
            },
            {
                "date": "2026-07-25",
                "price": 4390.0
            },
            {
                "date": "2026-08-03",
                "price": 3994.9
            }
        ]
    },
    {
        "id": 8,
        "name": "Aceite de girasol Natura 900 cc.",
        "price": 4405.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Aceite de girasol Natura 900 cc_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4405.0
            }
        ]
    },
    {
        "id": 9,
        "name": "Aceite en aerosol Natura 120 cc.",
        "price": 4419.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Aceite en aerosol Natura 120 cc_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 4419.0
            }
        ]
    },
    {
        "id": 10,
        "name": "Aceite de girasol alto omega Carrefour Classic pet 1.5 lts",
        "price": 5405.0,
        "market": "zenith",
        "category": "aceite",
        "image": "images\\carrefour/Aceite de girasol alto omega Carrefour C_0.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5405.0
            }
        ]
    },
    {
        "id": 11,
        "name": "Agua mineral sin gas Carrefour Classic 2 lts",
        "price": 1311.2,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua mineral sin gas Carrefour Classic 2_3.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1223.2
            },
            {
                "date": "2026-05-30",
                "price": 1100.0
            },
            {
                "date": "2026-06-07",
                "price": 1188.0
            },
            {
                "date": "2026-07-06",
                "price": 1311.2
            }
        ]
    },
    {
        "id": 12,
        "name": "Agua mineralizada sin gas Cellier Favaloro 2 lts",
        "price": 1345.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua mineralizada sin gas Cellier Favalo_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1345.0
            }
        ]
    },
    {
        "id": 13,
        "name": "Soda Carrefour Classic sifón 2 lts",
        "price": 1554.8,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Soda Carrefour Classic sifón 2 lts_0.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 1553.88
            },
            {
                "date": "2026-03-28",
                "price": 1554.8
            },
            {
                "date": "2026-05-02",
                "price": 1610.0
            },
            {
                "date": "2026-07-06",
                "price": 1554.8
            },
            {
                "date": "2026-07-25",
                "price": 1690.0
            },
            {
                "date": "2026-08-03",
                "price": 1554.8
            }
        ]
    },
    {
        "id": 14,
        "name": "Soda saldan sifón 2 lts",
        "price": 1800.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Soda saldan sifón 2 lts_13.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 15,
        "name": "Agua mineralizada sin gas Glaciar bajo sodio 2 lts",
        "price": 2025.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua mineralizada sin gas Glaciar bajo s_8.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 2272.4
            },
            {
                "date": "2026-07-06",
                "price": 2270.0
            },
            {
                "date": "2026-07-19",
                "price": 2027.35
            },
            {
                "date": "2026-08-03",
                "price": 2025.0
            }
        ]
    },
    {
        "id": 16,
        "name": "Agua mineral sin gas Villa del Sur 2,25 lts",
        "price": 2449.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua mineral sin gas Villa del Sur 225 l_11.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2449.0
            },
            {
                "date": "2026-06-21",
                "price": 1632.67
            },
            {
                "date": "2026-07-06",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 17,
        "name": "Agua saborizada limoneto H2OH con gas 2,25 lts",
        "price": 2819.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua saborizada limoneto H2OH con gas 22_7.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2655.0
            },
            {
                "date": "2026-07-25",
                "price": 2819.0
            }
        ]
    },
    {
        "id": 18,
        "name": "Agua saborizada citrus H2OH con gas 2,25 lts",
        "price": 2819.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua saborizada citrus H2OH con gas 225 _14.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2655.0
            },
            {
                "date": "2026-07-25",
                "price": 2819.0
            }
        ]
    },
    {
        "id": 19,
        "name": "Agua mineral sin gas Villavicencio 2 lts",
        "price": 3200.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua mineral sin gas Villavicencio 2 lts_2.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 2028.99
            },
            {
                "date": "2026-07-06",
                "price": 2589.0
            },
            {
                "date": "2026-07-19",
                "price": 2530.0
            },
            {
                "date": "2026-07-25",
                "price": 2150.0
            },
            {
                "date": "2026-08-03",
                "price": 3200.0
            }
        ]
    },
    {
        "id": 20,
        "name": "Agua saborizada de pomelo Levité 2,25 lts",
        "price": 3390.0,
        "market": "zenith",
        "category": "aguas",
        "image": "images\\carrefour/Agua saborizada de pomelo Levité 225 lts_5.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3390.0
            }
        ]
    },
    {
        "id": 21,
        "name": "Alimento húmedo para gato Carrefour 85 g. salmón rosado",
        "price": 1190.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Alimento húmedo para gato Carrefour 85 g_14.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1100.0
            },
            {
                "date": "2026-05-23",
                "price": 825.0
            },
            {
                "date": "2026-05-30",
                "price": 1100.0
            },
            {
                "date": "2026-07-06",
                "price": 1190.0
            },
            {
                "date": "2026-07-19",
                "price": 892.5
            },
            {
                "date": "2026-07-25",
                "price": 1190.0
            }
        ]
    },
    {
        "id": 22,
        "name": "Alimento húmedo para gato Cat Chow 85 g. pollo",
        "price": 1275.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images\\carrefour/Alimento húmedo para gato Cat Chow 85 g _10.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1200.0
            },
            {
                "date": "2026-06-21",
                "price": 1600.0
            },
            {
                "date": "2026-08-03",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 23,
        "name": "Alimento húmedo para gato Cat Chow castrados 85 g. pescado",
        "price": 1275.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images\\carrefour/Alimento húmedo para gato Cat Chow castr_12.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 1200.0
            },
            {
                "date": "2026-05-30",
                "price": 1600.0
            },
            {
                "date": "2026-06-14",
                "price": 1200.0
            },
            {
                "date": "2026-06-21",
                "price": 1600.0
            },
            {
                "date": "2026-08-03",
                "price": 1275.0
            }
        ]
    },
    {
        "id": 24,
        "name": "Alimento húmedo para gato Whiskas 85 g. salmón",
        "price": 1399.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Alimento húmedo para gato Whiskas 85 g s_0.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-05-30",
                "price": 1399.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 25,
        "name": "Alimento húmedo para gato Whiskas 85 g. pollo",
        "price": 1399.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images\\carrefour/Alimento húmedo para gato Whiskas 85 g p_1.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-05-30",
                "price": 1399.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 26,
        "name": "Alimento húmedo para gato Whiskas 85 g. carne",
        "price": 1399.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Alimento húmedo para gato Whiskas 85 g c_2.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-05-30",
                "price": 1399.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 27,
        "name": "Alimento húmedo para gato Whiskas 85 g. pavo",
        "price": 1399.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images\\carrefour/Alimento húmedo para gato Whiskas 85 g p_3.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-05-30",
                "price": 1399.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 28,
        "name": "Alimento húmedo para gato Whiskas 85 g. sardina",
        "price": 1399.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images\\carrefour/Alimento húmedo para gato Whiskas 85 g s_6.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-05-30",
                "price": 1399.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 29,
        "name": "Alimento húmedo para gatitos Whiskas 85 g. carne",
        "price": 1399.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Alimento húmedo para gatitos Whiskas 85 _13.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 30,
        "name": "Alimento húmedo para gato Whiskas 85 g. pescado souffle",
        "price": 1399.0,
        "market": "zenith",
        "category": "gatos",
        "image": "images\\carrefour/Alimento húmedo para gato Whiskas 85 g p_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 31,
        "name": "Arroz Molinos Ala largo fino 00000 bolsa 500 g.",
        "price": 1025.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz Molinos Ala largo fino 00000 bolsa_6.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 787.5
            },
            {
                "date": "2026-06-21",
                "price": 1140.0
            },
            {
                "date": "2026-07-06",
                "price": 855.0
            },
            {
                "date": "2026-07-19",
                "price": 723.75
            },
            {
                "date": "2026-07-25",
                "price": 1025.0
            }
        ]
    },
    {
        "id": 32,
        "name": "Arroz blanco Shangrila 1 kg",
        "price": 1050.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz blanco Shangrila 1 kg_8.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 33,
        "name": "Arroz largo fino Bulnez 1 kg",
        "price": 1250.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz largo fino Bulnez 1 kg_13.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1280.0
            },
            {
                "date": "2026-07-06",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 34,
        "name": "Arroz largo fino Crucero 00000 1 kg.",
        "price": 1280.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz largo fino Crucero 00000 1 kg_9.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1280.0
            },
            {
                "date": "2026-05-30",
                "price": 960.0
            },
            {
                "date": "2026-06-07",
                "price": 1280.0
            },
            {
                "date": "2026-06-21",
                "price": 999.0
            },
            {
                "date": "2026-07-06",
                "price": 1280.0
            },
            {
                "date": "2026-07-25",
                "price": 990.0
            },
            {
                "date": "2026-08-03",
                "price": 1280.0
            }
        ]
    },
    {
        "id": 35,
        "name": "Arroz largo fino 00000 Carrefour Classic en bolsa 1 kg.",
        "price": 1370.8,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz largo fino 00000 Carrefour Classic_2.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1334.0
            },
            {
                "date": "2026-05-09",
                "price": 1242.0
            },
            {
                "date": "2026-05-16",
                "price": 1334.0
            },
            {
                "date": "2026-05-30",
                "price": 1242.0
            },
            {
                "date": "2026-06-14",
                "price": 1334.0
            },
            {
                "date": "2026-07-06",
                "price": 1242.0
            },
            {
                "date": "2026-07-19",
                "price": 1370.8
            },
            {
                "date": "2026-07-25",
                "price": 1350.0
            },
            {
                "date": "2026-08-03",
                "price": 1370.8
            }
        ]
    },
    {
        "id": 36,
        "name": "Arroz parboil Gallo oro en bolsa 500 g",
        "price": 1435.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz parboil Gallo oro en bolsa 500 g_11.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1435.0
            }
        ]
    },
    {
        "id": 37,
        "name": "Arroz integral Gallo en bolsa 500 g",
        "price": 1459.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz integral Gallo en bolsa 500 g_7.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1459.0
            }
        ]
    },
    {
        "id": 38,
        "name": "Arroz largo fino Molinos Ala 1 kg.",
        "price": 1885.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz largo fino Molinos Ala 1 kg_0.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1340.0
            },
            {
                "date": "2026-06-21",
                "price": 1950.0
            },
            {
                "date": "2026-07-06",
                "price": 1462.5
            },
            {
                "date": "2026-07-19",
                "price": 1364.25
            },
            {
                "date": "2026-07-25",
                "price": 1819.0
            },
            {
                "date": "2026-08-03",
                "price": 1885.0
            }
        ]
    },
    {
        "id": 39,
        "name": "Arroz parboil Carrefour Classic en bolsa 1 kg.",
        "price": 1927.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz parboil Carrefour Classic en bolsa_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1776.6
            },
            {
                "date": "2026-07-25",
                "price": 2050.0
            },
            {
                "date": "2026-08-03",
                "price": 1927.0
            }
        ]
    },
    {
        "id": 40,
        "name": "Arroz parboil Dos Hermanos bolsa 1 kg.",
        "price": 2050.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Arroz parboil Dos Hermanos bolsa 1 kg_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 41,
        "name": "Carne picada Swift congelada 500 grs",
        "price": 7990.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Carne picada Swift congelada 500 grs_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 7990.0
            }
        ]
    },
    {
        "id": 42,
        "name": "Osobuco x kg",
        "price": 11200.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Osobuco x kg_3.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 11200.0
            }
        ]
    },
    {
        "id": 43,
        "name": "Tapa de asado x kg",
        "price": 11990.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Tapa de asado x kg_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 13290.0
            },
            {
                "date": "2026-08-03",
                "price": 11990.0
            }
        ]
    },
    {
        "id": 44,
        "name": "Asado Novillo x kg",
        "price": 12490.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Asado Novillo x kg_5.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 12490.0
            }
        ]
    },
    {
        "id": 45,
        "name": "Roast beef Novillo x kg",
        "price": 13290.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Roast beef Novillo x kg_0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 13290.0
            }
        ]
    },
    {
        "id": 46,
        "name": "Paleta x kg",
        "price": 14390.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Paleta x kg_7.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 14390.0
            }
        ]
    },
    {
        "id": 47,
        "name": "Tapa de nalga Novillo x kg",
        "price": 14790.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Tapa de nalga Novillo x kg_10.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 14790.0
            }
        ]
    },
    {
        "id": 48,
        "name": "Bife ancho Novillo x kg",
        "price": 15900.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Bife ancho Novillo x kg_13.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 15900.0
            }
        ]
    },
    {
        "id": 49,
        "name": "Bife americano Novillo x kg",
        "price": 16700.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Bife americano Novillo x kg_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 16700.0
            }
        ]
    },
    {
        "id": 50,
        "name": "Milanesa bola de lomo Novillo x kg",
        "price": 16890.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Milanesa bola de lomo Novillo x kg_1.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 13990.0
            },
            {
                "date": "2026-08-03",
                "price": 16890.0
            }
        ]
    },
    {
        "id": 51,
        "name": "Copos de maiz Granix 160 g.",
        "price": 1575.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Copos de maiz Granix 160 g_10.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1575.0
            }
        ]
    },
    {
        "id": 52,
        "name": "Copos de maíz 3 Arroyos azucarados bolsa 200 g.",
        "price": 1659.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Copos de maíz 3 Arroyos azucarados bolsa_8.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1659.0
            }
        ]
    },
    {
        "id": 53,
        "name": "Aritos de cereal frutado Granix bolsa 130 g.",
        "price": 1820.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Aritos de cereal frutado Granix bolsa 13_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1779.0
            },
            {
                "date": "2026-07-19",
                "price": 1820.0
            }
        ]
    },
    {
        "id": 54,
        "name": "Aritos de cereal 3 Arroyos frutado bolsa 160 g.",
        "price": 1899.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Aritos de cereal 3 Arroyos frutado bolsa_6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1899.0
            }
        ]
    },
    {
        "id": 55,
        "name": "Almohaditas rellenas Molino Ala de frutilla 90 g.",
        "price": 1940.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Almohaditas rellenas Molino Ala de fruti_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1940.0
            }
        ]
    },
    {
        "id": 56,
        "name": "Almohaditas rellenas Molinos Ala cacao y vainilla 90 g.",
        "price": 1940.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Almohaditas rellenas Molinos Ala cacao y_11.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1940.0
            }
        ]
    },
    {
        "id": 57,
        "name": "Cereal copita con chocolate Carrefour Classic sin gluten 200 grs",
        "price": 2047.5,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Cereal copita con chocolate Carrefour Cl_3.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2047.5
            },
            {
                "date": "2026-07-25",
                "price": 2250.0
            },
            {
                "date": "2026-08-03",
                "price": 2047.5
            }
        ]
    },
    {
        "id": 58,
        "name": "Copos de maíz 3 Arroyos bolsa 400 g.",
        "price": 2330.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Copos de maíz 3 Arroyos bolsa 400 g_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1955.0
            },
            {
                "date": "2026-07-19",
                "price": 2330.0
            }
        ]
    },
    {
        "id": 59,
        "name": "Almohaditas rellenas de chocolate Carrefour Classic 180 grs",
        "price": 2810.6,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Almohaditas rellenas de chocolate Carref_14.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2810.6
            }
        ]
    },
    {
        "id": 60,
        "name": "Copos de maíz Granix 400 g.",
        "price": 3199.0,
        "market": "zenith",
        "category": "cereales",
        "image": "images\\carrefour/Copos de maíz Granix 400 g_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2875.0
            },
            {
                "date": "2026-08-03",
                "price": 3199.0
            }
        ]
    },
    {
        "id": 61,
        "name": "Cerveza rubia Brahma 354 ml",
        "price": 1251.75,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza rubia Brahma 354 ml_14.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 926.0
            },
            {
                "date": "2026-06-14",
                "price": 1041.75
            },
            {
                "date": "2026-06-21",
                "price": 1389.0
            },
            {
                "date": "2026-07-19",
                "price": 1251.75
            }
        ]
    },
    {
        "id": 62,
        "name": "Cerveza blanca Quilmes sin alcohol 473 ml",
        "price": 1290.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza blanca Quilmes sin alcohol 473 m_4.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1413.33
            },
            {
                "date": "2026-06-14",
                "price": 1378.0
            },
            {
                "date": "2026-07-19",
                "price": 1290.0
            },
            {
                "date": "2026-07-25",
                "price": 1287.69
            },
            {
                "date": "2026-08-03",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 63,
        "name": "Cerveza Lager República Artesanal en lata 473 ml",
        "price": 1290.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza Lager República Artesanal en lat_10.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 64,
        "name": "Cerveza Amber República Artesanal en lata 473 ml",
        "price": 1290.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza Amber República Artesanal en lat_11.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 65,
        "name": "Cerveza Honey República Artesanal en lata 473 ml",
        "price": 1290.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza Honey República Artesanal en lat_12.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 66,
        "name": "Cerveza Mecklenburger Pilsener 500 ml",
        "price": 1590.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza Mecklenburger Pilsener 500 ml_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1590.0
            }
        ]
    },
    {
        "id": 67,
        "name": "Cerveza blanca Quilmes Bajo cero en lata 473 ml",
        "price": 1619.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza blanca Quilmes Bajo cero en lata_8.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1032.67
            },
            {
                "date": "2026-06-14",
                "price": 1161.75
            },
            {
                "date": "2026-06-21",
                "price": 1549.0
            },
            {
                "date": "2026-07-19",
                "price": 1619.0
            }
        ]
    },
    {
        "id": 68,
        "name": "Cerveza light Michelob Ultra 473 ml",
        "price": 1635.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza light Michelob Ultra 473 ml_5.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1899.33
            },
            {
                "date": "2026-06-14",
                "price": 2136.75
            },
            {
                "date": "2026-06-21",
                "price": 1851.85
            },
            {
                "date": "2026-07-06",
                "price": 1850.0
            },
            {
                "date": "2026-07-19",
                "price": 1635.0
            }
        ]
    },
    {
        "id": 69,
        "name": "Cerveza negra Quilmes Stout 473 ml",
        "price": 1941.75,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza negra Quilmes Stout 473 ml_2.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1652.67
            },
            {
                "date": "2026-06-14",
                "price": 1859.25
            },
            {
                "date": "2026-07-19",
                "price": 1294.5
            },
            {
                "date": "2026-07-25",
                "price": 1941.75
            }
        ]
    },
    {
        "id": 70,
        "name": "Cerveza rubia Budweiser 473 ml",
        "price": 2002.0,
        "market": "zenith",
        "category": "cervezas",
        "image": "images\\carrefour/Cerveza rubia Budweiser 473 ml_9.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1832.67
            },
            {
                "date": "2026-06-14",
                "price": 2061.75
            },
            {
                "date": "2026-07-19",
                "price": 2145.0
            },
            {
                "date": "2026-07-25",
                "price": 2002.0
            }
        ]
    },
    {
        "id": 71,
        "name": "Aperitivo sin alcohol Serrano Carrefour Classic 1,5 lts",
        "price": 1364.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Serrano Carrefour _15.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1276.0
            },
            {
                "date": "2026-07-25",
                "price": 1364.0
            }
        ]
    },
    {
        "id": 72,
        "name": "Aperitivo sin alcohol Limón Terma Cero 1,35 lts",
        "price": 2129.25,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Limón Terma Cero 1_11.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2025.0
            },
            {
                "date": "2026-05-09",
                "price": 2699.0
            },
            {
                "date": "2026-05-16",
                "price": 2130.0
            },
            {
                "date": "2026-05-23",
                "price": 2699.0
            },
            {
                "date": "2026-05-30",
                "price": 2100.0
            },
            {
                "date": "2026-06-07",
                "price": 2699.0
            },
            {
                "date": "2026-06-14",
                "price": 2159.0
            },
            {
                "date": "2026-06-21",
                "price": 2839.0
            },
            {
                "date": "2026-07-19",
                "price": 2129.25
            },
            {
                "date": "2026-07-25",
                "price": 2839.0
            },
            {
                "date": "2026-08-03",
                "price": 2129.25
            }
        ]
    },
    {
        "id": 73,
        "name": "Aperitivo sin alcohol Pomelo Terma sin azúcar 1,35 lts",
        "price": 2129.25,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Pomelo Terma sin a_14.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2839.0
            },
            {
                "date": "2026-07-19",
                "price": 2129.25
            },
            {
                "date": "2026-07-25",
                "price": 2839.0
            },
            {
                "date": "2026-08-03",
                "price": 2129.25
            }
        ]
    },
    {
        "id": 74,
        "name": "Aperitivo sin alcohol Serrano Terma Cero 1,35 lts",
        "price": 2130.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Serrano Terma Cero_5.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2025.0
            },
            {
                "date": "2026-05-09",
                "price": 2699.0
            },
            {
                "date": "2026-05-16",
                "price": 2130.0
            },
            {
                "date": "2026-05-23",
                "price": 2699.0
            },
            {
                "date": "2026-05-30",
                "price": 2100.0
            },
            {
                "date": "2026-06-07",
                "price": 2699.0
            },
            {
                "date": "2026-06-14",
                "price": 2159.0
            },
            {
                "date": "2026-06-21",
                "price": 2840.0
            },
            {
                "date": "2026-07-19",
                "price": 2130.0
            },
            {
                "date": "2026-07-25",
                "price": 2840.0
            },
            {
                "date": "2026-08-03",
                "price": 2130.0
            }
        ]
    },
    {
        "id": 75,
        "name": "Aperitivo sin alcohol Pomelo Terma Cero 1,35 lts",
        "price": 2130.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Pomelo Terma Cero _10.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 2025.0
            },
            {
                "date": "2026-05-09",
                "price": 2699.0
            },
            {
                "date": "2026-05-16",
                "price": 2130.0
            },
            {
                "date": "2026-05-23",
                "price": 2699.0
            },
            {
                "date": "2026-05-30",
                "price": 2100.0
            },
            {
                "date": "2026-06-07",
                "price": 2699.0
            },
            {
                "date": "2026-06-14",
                "price": 2159.0
            },
            {
                "date": "2026-06-21",
                "price": 2840.0
            },
            {
                "date": "2026-07-19",
                "price": 2130.0
            },
            {
                "date": "2026-07-25",
                "price": 2840.0
            },
            {
                "date": "2026-08-03",
                "price": 2130.0
            }
        ]
    },
    {
        "id": 76,
        "name": "Aperitivo sin alcohol Gancia americano 0% en lata 473 ml",
        "price": 2789.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Gancia americano 0_7.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2100.0
            },
            {
                "date": "2026-05-09",
                "price": 2640.0
            },
            {
                "date": "2026-05-16",
                "price": 2700.0
            },
            {
                "date": "2026-05-23",
                "price": 2100.0
            },
            {
                "date": "2026-06-07",
                "price": 2789.0
            },
            {
                "date": "2026-06-14",
                "price": 1952.3
            },
            {
                "date": "2026-06-21",
                "price": 2789.0
            },
            {
                "date": "2026-07-25",
                "price": 1952.3
            },
            {
                "date": "2026-08-03",
                "price": 2789.0
            }
        ]
    },
    {
        "id": 77,
        "name": "Aperitivo sin alcohol Limón Terma Light 1,75 lts",
        "price": 3309.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Limón Terma Light _4.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2363.0
            },
            {
                "date": "2026-05-09",
                "price": 3149.0
            },
            {
                "date": "2026-05-23",
                "price": 2480.0
            },
            {
                "date": "2026-05-30",
                "price": 3149.0
            },
            {
                "date": "2026-06-21",
                "price": 2150.85
            },
            {
                "date": "2026-07-06",
                "price": 3309.0
            },
            {
                "date": "2026-07-25",
                "price": 2150.85
            },
            {
                "date": "2026-08-03",
                "price": 3309.0
            }
        ]
    },
    {
        "id": 78,
        "name": "Aperitivo sin alcohol Serrano Terma 1,7 lts",
        "price": 3309.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Serrano Terma 17 l_6.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2363.0
            },
            {
                "date": "2026-05-09",
                "price": 3149.0
            },
            {
                "date": "2026-05-23",
                "price": 2480.0
            },
            {
                "date": "2026-05-30",
                "price": 3149.0
            },
            {
                "date": "2026-06-21",
                "price": 2150.85
            },
            {
                "date": "2026-07-06",
                "price": 3309.0
            },
            {
                "date": "2026-07-25",
                "price": 2150.85
            },
            {
                "date": "2026-08-03",
                "price": 3309.0
            }
        ]
    },
    {
        "id": 79,
        "name": "Aperitivo sin alcohol Pomelo Rosado Terma 1,75 lts",
        "price": 3309.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Aperitivo sin alcohol Pomelo Rosado Term_9.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2363.0
            },
            {
                "date": "2026-05-09",
                "price": 3149.0
            },
            {
                "date": "2026-05-23",
                "price": 2480.0
            },
            {
                "date": "2026-05-30",
                "price": 3149.0
            },
            {
                "date": "2026-06-21",
                "price": 2150.85
            },
            {
                "date": "2026-07-06",
                "price": 3309.0
            },
            {
                "date": "2026-07-25",
                "price": 2150.85
            },
            {
                "date": "2026-08-03",
                "price": 3309.0
            }
        ]
    },
    {
        "id": 80,
        "name": "Vermouth Carpano Rosso 950 cc.",
        "price": 6880.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Vermouth Carpano Rosso 950 cc_2.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 6889.35
            },
            {
                "date": "2026-07-25",
                "price": 6359.4
            },
            {
                "date": "2026-08-03",
                "price": 6880.0
            }
        ]
    },
    {
        "id": 81,
        "name": "Jamón cocido feteado Bulnez 150 grs",
        "price": 2590.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Jamón cocido feteado Bulnez 150 grs_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2210.0
            },
            {
                "date": "2026-07-19",
                "price": 3400.0
            },
            {
                "date": "2026-08-03",
                "price": 2590.0
            }
        ]
    },
    {
        "id": 82,
        "name": "Lomo de cerdo feteado Bocatti horneado 70 g.",
        "price": 2679.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Lomo de cerdo feteado Bocatti horneado 7_14.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3555.0
            },
            {
                "date": "2026-07-19",
                "price": 3610.0
            },
            {
                "date": "2026-07-25",
                "price": 3555.0
            },
            {
                "date": "2026-08-03",
                "price": 2679.0
            }
        ]
    },
    {
        "id": 83,
        "name": "Leberwurst Paladini 250 g.",
        "price": 3425.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Leberwurst Paladini 250 g_10.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3390.0
            },
            {
                "date": "2026-07-19",
                "price": 3425.0
            },
            {
                "date": "2026-07-25",
                "price": 2790.0
            },
            {
                "date": "2026-08-03",
                "price": 3425.0
            }
        ]
    },
    {
        "id": 84,
        "name": "Lomito feteado 150 g.",
        "price": 3610.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Lomito feteado 150 g_13.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3610.0
            }
        ]
    },
    {
        "id": 85,
        "name": "Lomo de cerdo feteado Paladini 120 g.",
        "price": 3700.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Lomo de cerdo feteado Paladini 120 g_7.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 4220.0
            },
            {
                "date": "2026-07-19",
                "price": 3390.0
            },
            {
                "date": "2026-07-25",
                "price": 4220.0
            },
            {
                "date": "2026-08-03",
                "price": 3700.0
            }
        ]
    },
    {
        "id": 86,
        "name": "Jamón cocido Paladini 150 g.",
        "price": 4390.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Jamón cocido Paladini 150 g_5.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 5090.0
            },
            {
                "date": "2026-07-19",
                "price": 5185.0
            },
            {
                "date": "2026-08-03",
                "price": 4390.0
            }
        ]
    },
    {
        "id": 87,
        "name": "Salame tipo milán Lario picado fino feteado 150 g.",
        "price": 4700.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Salame tipo milán Lario picado fino fete_8.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 4610.0
            },
            {
                "date": "2026-08-03",
                "price": 4700.0
            }
        ]
    },
    {
        "id": 88,
        "name": "Jamón cocido natural feteado Bocatti 130 g.",
        "price": 4849.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Jamón cocido natural feteado Bocatti 130_1.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4849.0
            }
        ]
    },
    {
        "id": 89,
        "name": "Mortadela Paladini mini 300 g.",
        "price": 4885.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Mortadela Paladini mini 300 g_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 4885.0
            },
            {
                "date": "2026-07-25",
                "price": 3900.0
            },
            {
                "date": "2026-08-03",
                "price": 4885.0
            }
        ]
    },
    {
        "id": 90,
        "name": "Jamón genuino Cagnoli 120 g.",
        "price": 5195.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Jamón genuino Cagnoli 120 g_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5195.0
            }
        ]
    },
    {
        "id": 91,
        "name": "Gaseosa naranja Mirinda 2,25 lts",
        "price": 1837.5,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa naranja Mirinda 225 lts_10.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1633.33
            },
            {
                "date": "2026-06-14",
                "price": 1837.5
            }
        ]
    },
    {
        "id": 92,
        "name": "Gaseosa cola Cunnington suave sin tacc 2,25 lts",
        "price": 2515.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa cola Cunnington suave sin tacc 2_7.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 2659.0
            },
            {
                "date": "2026-06-07",
                "price": 2749.0
            },
            {
                "date": "2026-06-14",
                "price": 2339.0
            },
            {
                "date": "2026-06-21",
                "price": 2159.0
            },
            {
                "date": "2026-07-06",
                "price": 2339.0
            },
            {
                "date": "2026-07-19",
                "price": 2400.0
            },
            {
                "date": "2026-07-25",
                "price": 2515.0
            }
        ]
    },
    {
        "id": 93,
        "name": "Gaseosa pomelo Cunnignton suave sin tacc 2,25 lts",
        "price": 2515.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa pomelo Cunnignton suave sin tacc_8.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 2659.0
            },
            {
                "date": "2026-06-07",
                "price": 2749.0
            },
            {
                "date": "2026-06-14",
                "price": 2339.0
            },
            {
                "date": "2026-06-21",
                "price": 2159.0
            },
            {
                "date": "2026-07-06",
                "price": 2339.0
            },
            {
                "date": "2026-07-19",
                "price": 2400.0
            },
            {
                "date": "2026-07-25",
                "price": 2515.0
            }
        ]
    },
    {
        "id": 94,
        "name": "Gaseosa tónica Paso de los Toros 1,5 lts",
        "price": 2781.75,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa tónica Paso de los Toros 15 lts_14.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2781.75
            }
        ]
    },
    {
        "id": 95,
        "name": "Gaseosa lima limón 7 Up sin azúcar 1,5 lts",
        "price": 3000.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa lima limón 7 Up sin azúcar 15 lt_2.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2633.33
            },
            {
                "date": "2026-06-14",
                "price": 2962.5
            },
            {
                "date": "2026-06-21",
                "price": 3000.0
            }
        ]
    },
    {
        "id": 96,
        "name": "Gaseosa cola Pepsi Black pet 1,5 lts",
        "price": 3000.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa cola Pepsi Black pet 15 lts_5.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2633.33
            },
            {
                "date": "2026-06-14",
                "price": 2962.5
            },
            {
                "date": "2026-06-21",
                "price": 3000.0
            },
            {
                "date": "2026-07-25",
                "price": 2400.0
            },
            {
                "date": "2026-08-03",
                "price": 3000.0
            }
        ]
    },
    {
        "id": 97,
        "name": "Gaseosa lima limón 7 Up regular 1,5 lts",
        "price": 3000.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa lima limón 7 Up regular 15 lts_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3000.0
            }
        ]
    },
    {
        "id": 98,
        "name": "Gaseosa cola Coca Cola Zero 1,25 lts",
        "price": 3265.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa cola Coca Cola Zero 125 lts_6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3165.0
            },
            {
                "date": "2026-08-03",
                "price": 3265.0
            }
        ]
    },
    {
        "id": 99,
        "name": "Gaseosa cola Coca Cola sabor original 1,25 lts",
        "price": 3265.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa cola Coca Cola sabor original 12_12.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3165.0
            },
            {
                "date": "2026-08-03",
                "price": 3265.0
            }
        ]
    },
    {
        "id": 100,
        "name": "Gaseosa lima limón 7 Up sin azúcar 2.25 lts",
        "price": 3975.0,
        "market": "zenith",
        "category": "gaseosas",
        "image": "images\\carrefour/Gaseosa lima limón 7 Up sin azúcar 225 l_4.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 3466.67
            },
            {
                "date": "2026-06-14",
                "price": 3900.0
            },
            {
                "date": "2026-06-21",
                "price": 3975.0
            }
        ]
    },
    {
        "id": 101,
        "name": "Medallón de merluza rebozados 100 g.",
        "price": 1220.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Medallón de merluza rebozados 100 g_12.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1070.0
            },
            {
                "date": "2026-05-09",
                "price": 899.0
            },
            {
                "date": "2026-05-16",
                "price": 1120.0
            },
            {
                "date": "2026-05-23",
                "price": 899.0
            },
            {
                "date": "2026-05-30",
                "price": 1120.0
            },
            {
                "date": "2026-06-07",
                "price": 949.0
            },
            {
                "date": "2026-06-14",
                "price": 1165.0
            },
            {
                "date": "2026-07-19",
                "price": 1220.0
            }
        ]
    },
    {
        "id": 102,
        "name": "Hamburguesa congelada Carrefour 2 u.",
        "price": 2499.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Hamburguesa congelada Carrefour 2 u_13.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2100.0
            },
            {
                "date": "2026-05-09",
                "price": 3020.0
            },
            {
                "date": "2026-05-23",
                "price": 2500.0
            },
            {
                "date": "2026-05-30",
                "price": 2600.0
            },
            {
                "date": "2026-06-07",
                "price": 3020.0
            },
            {
                "date": "2026-06-21",
                "price": 2600.0
            },
            {
                "date": "2026-07-19",
                "price": 3020.0
            },
            {
                "date": "2026-08-03",
                "price": 2499.0
            }
        ]
    },
    {
        "id": 103,
        "name": "Hamburguesas de pollo Granja tres Arroyos 166 g.",
        "price": 3500.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Hamburguesas de pollo Granja tres Arroyo_14.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 2400.0
            },
            {
                "date": "2026-04-08",
                "price": 3200.0
            },
            {
                "date": "2026-05-02",
                "price": 2400.0
            },
            {
                "date": "2026-05-09",
                "price": 3200.0
            },
            {
                "date": "2026-05-23",
                "price": 2800.0
            },
            {
                "date": "2026-05-30",
                "price": 3500.0
            },
            {
                "date": "2026-06-07",
                "price": 2800.0
            },
            {
                "date": "2026-06-14",
                "price": 3500.0
            },
            {
                "date": "2026-06-21",
                "price": 2800.0
            },
            {
                "date": "2026-07-06",
                "price": 3500.0
            },
            {
                "date": "2026-07-19",
                "price": 2800.0
            },
            {
                "date": "2026-07-25",
                "price": 3500.0
            }
        ]
    },
    {
        "id": 104,
        "name": "Medallones de pollo Lucchetti en bolsa 280 g",
        "price": 5309.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Medallones de pollo Lucchetti en bolsa 2_9.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 5049.0
            },
            {
                "date": "2026-06-21",
                "price": 5249.0
            },
            {
                "date": "2026-07-06",
                "price": 5049.0
            },
            {
                "date": "2026-07-19",
                "price": 5350.0
            },
            {
                "date": "2026-07-25",
                "price": 5249.0
            },
            {
                "date": "2026-08-03",
                "price": 5309.0
            }
        ]
    },
    {
        "id": 105,
        "name": "Medallón de carne Paty express en caja 4 uni",
        "price": 5955.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Medallón de carne Paty express en caja 4_4.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 5955.0
            },
            {
                "date": "2026-07-19",
                "price": 4466.25
            },
            {
                "date": "2026-07-25",
                "price": 5955.0
            }
        ]
    },
    {
        "id": 106,
        "name": "Hamburguesa Carrefour Classic clásica 4 uni",
        "price": 6194.6,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Hamburguesa Carrefour Classic clásica 4 _15.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 5630.6
            },
            {
                "date": "2026-07-25",
                "price": 7290.0
            },
            {
                "date": "2026-08-03",
                "price": 6194.6
            }
        ]
    },
    {
        "id": 107,
        "name": "Hamburguesa Paty clásico en caja 4 uni",
        "price": 6850.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Hamburguesa Paty clásico en caja 4 uni_1.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 6862.5
            },
            {
                "date": "2026-05-16",
                "price": 9150.0
            },
            {
                "date": "2026-06-07",
                "price": 6859.0
            },
            {
                "date": "2026-06-14",
                "price": 9150.0
            },
            {
                "date": "2026-08-03",
                "price": 6850.0
            }
        ]
    },
    {
        "id": 108,
        "name": "Hamburguesa Swift clásica 4 u",
        "price": 7013.93,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Hamburguesa Swift clásica 4 u_8.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 8439.0
            },
            {
                "date": "2026-06-21",
                "price": 6329.0
            },
            {
                "date": "2026-07-19",
                "price": 7013.93
            }
        ]
    },
    {
        "id": 109,
        "name": "Hamburguesa Paty 72 g. caja x 4 uni",
        "price": 8165.0,
        "market": "zenith",
        "category": "hamburguesas",
        "image": "images\\carrefour/Hamburguesa Paty 72 g caja x 4 uni_10.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 8165.0
            }
        ]
    },
    {
        "id": 110,
        "name": "Hamburguesa de carne Unión ganadera 4 uni",
        "price": 10439.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Hamburguesa de carne Unión ganadera 4 un_5.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 7829.25
            },
            {
                "date": "2026-05-16",
                "price": 10439.0
            },
            {
                "date": "2026-06-14",
                "price": 6785.35
            },
            {
                "date": "2026-06-21",
                "price": 10439.0
            }
        ]
    },
    {
        "id": 111,
        "name": "Polenta instantánea Presto Pronta en bolsa 490 g.",
        "price": 1039.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Polenta instantánea Presto Pronta en bol_6.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1500.0
            },
            {
                "date": "2026-05-09",
                "price": 1599.0
            },
            {
                "date": "2026-05-30",
                "price": 1039.0
            },
            {
                "date": "2026-06-07",
                "price": 1599.0
            },
            {
                "date": "2026-06-14",
                "price": 1090.0
            },
            {
                "date": "2026-06-21",
                "price": 1599.0
            },
            {
                "date": "2026-08-03",
                "price": 1039.0
            }
        ]
    },
    {
        "id": 112,
        "name": "Harina de trigo Morixe 000 1 kg.",
        "price": 1109.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina de trigo Morixe 000 1 kg_2.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 999.0
            },
            {
                "date": "2026-06-07",
                "price": 649.0
            },
            {
                "date": "2026-06-14",
                "price": 999.0
            },
            {
                "date": "2026-07-06",
                "price": 699.0
            },
            {
                "date": "2026-07-19",
                "price": 1069.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.0
            },
            {
                "date": "2026-08-03",
                "price": 1109.0
            }
        ]
    },
    {
        "id": 113,
        "name": "Harina leudante Bulnez 1 kg",
        "price": 1137.5,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina leudante Bulnez 1 kg_5.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1250.0
            },
            {
                "date": "2026-08-03",
                "price": 1137.5
            }
        ]
    },
    {
        "id": 114,
        "name": "Harina leudante Chacabuco 1 kg",
        "price": 1184.25,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina leudante Chacabuco 1 kg_7.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1479.0
            },
            {
                "date": "2026-06-14",
                "price": 1449.0
            },
            {
                "date": "2026-06-21",
                "price": 1086.75
            },
            {
                "date": "2026-07-06",
                "price": 1579.0
            },
            {
                "date": "2026-08-03",
                "price": 1184.25
            }
        ]
    },
    {
        "id": 115,
        "name": "Harina integral fina Chacabuco 1 kg.",
        "price": 1274.25,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina integral fina Chacabuco 1 kg_13.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1699.0
            },
            {
                "date": "2026-08-03",
                "price": 1274.25
            }
        ]
    },
    {
        "id": 116,
        "name": "Avena instantanea Carrefour Classic pouch 300 g.",
        "price": 1478.7,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Avena instantanea Carrefour Classic pouc_12.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1385.7
            },
            {
                "date": "2026-05-30",
                "price": 1292.7
            },
            {
                "date": "2026-06-14",
                "price": 1199.7
            },
            {
                "date": "2026-06-21",
                "price": 1292.7
            },
            {
                "date": "2026-07-06",
                "price": 1478.7
            },
            {
                "date": "2026-07-25",
                "price": 1590.0
            },
            {
                "date": "2026-08-03",
                "price": 1478.7
            }
        ]
    },
    {
        "id": 117,
        "name": "Harina de trigo Pureza 0000 1 kg.",
        "price": 1489.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina de trigo Pureza 0000 1 kg_8.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1485.0
            },
            {
                "date": "2026-07-06",
                "price": 1109.0
            },
            {
                "date": "2026-07-19",
                "price": 1345.0
            },
            {
                "date": "2026-07-25",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 118,
        "name": "Harina de trigo Morixe 0000 1 kg.",
        "price": 1509.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina de trigo Morixe 0000 1 kg_4.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1509.0
            }
        ]
    },
    {
        "id": 119,
        "name": "Harina leudante Caserita x 1 kg",
        "price": 1600.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina leudante Caserita x 1 kg_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 120,
        "name": "Harina leudante Pureza con vitamina D 1 kg.",
        "price": 1829.0,
        "market": "zenith",
        "category": "harinas",
        "image": "images\\carrefour/Harina leudante Pureza con vitamina D 1 _9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1829.0
            }
        ]
    },
    {
        "id": 121,
        "name": "Bebida energizante Rockstar en botella 500 ml",
        "price": 1350.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Rockstar en botella 5_2.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1800.0
            },
            {
                "date": "2026-06-14",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 122,
        "name": "Bebida energizante Rockstar de maracuyá pet 500 ml",
        "price": 1350.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Rockstar de maracuyá _13.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1800.0
            },
            {
                "date": "2026-06-14",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 123,
        "name": "Bebida energizante Speed 250 ml",
        "price": 1955.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Speed 250 ml_4.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1955.0
            },
            {
                "date": "2026-06-21",
                "price": 1465.0
            },
            {
                "date": "2026-07-19",
                "price": 1955.0
            },
            {
                "date": "2026-07-25",
                "price": 1466.25
            },
            {
                "date": "2026-08-03",
                "price": 1955.0
            }
        ]
    },
    {
        "id": 124,
        "name": "Bebida energizante Speed Zero en lata 250 ml",
        "price": 1955.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Speed Zero en lata 25_15.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1955.0
            },
            {
                "date": "2026-06-21",
                "price": 1466.25
            },
            {
                "date": "2026-07-19",
                "price": 1955.0
            },
            {
                "date": "2026-07-25",
                "price": 1466.25
            },
            {
                "date": "2026-08-03",
                "price": 1955.0
            }
        ]
    },
    {
        "id": 125,
        "name": "Bebida energizante Red Bull 250 ml",
        "price": 2572.5,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Red Bull 250 ml_6.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2572.5
            }
        ]
    },
    {
        "id": 126,
        "name": "Bebida energizante Red Bull Sugar Free 250 ml",
        "price": 2579.25,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Red Bull Sugar Free 2_10.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2579.25
            }
        ]
    },
    {
        "id": 127,
        "name": "Bebida energizante Speed 473 ml",
        "price": 2925.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Speed 473 ml_0.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2925.0
            },
            {
                "date": "2026-06-21",
                "price": 2193.75
            },
            {
                "date": "2026-07-19",
                "price": 2925.0
            },
            {
                "date": "2026-07-25",
                "price": 2193.75
            },
            {
                "date": "2026-08-03",
                "price": 2925.0
            }
        ]
    },
    {
        "id": 128,
        "name": "Bebida energizante Speed Zero Sugar 473 ml",
        "price": 2925.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Speed Zero Sugar 473 _12.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2925.0
            },
            {
                "date": "2026-07-25",
                "price": 2193.75
            },
            {
                "date": "2026-08-03",
                "price": 2925.0
            }
        ]
    },
    {
        "id": 129,
        "name": "Bebida energizante sin azúcar Monster energy en lata 473 cc.",
        "price": 3400.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante sin azúcar Monster en_1.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 3300.0
            },
            {
                "date": "2026-06-07",
                "price": 3200.0
            },
            {
                "date": "2026-06-14",
                "price": 3299.0
            },
            {
                "date": "2026-08-03",
                "price": 3400.0
            }
        ]
    },
    {
        "id": 130,
        "name": "Bebida energizante Monster Mango Loco 473 ml",
        "price": 3400.0,
        "market": "zenith",
        "category": "isotonicas",
        "image": "images\\carrefour/Bebida energizante Monster Mango Loco 47_3.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3299.0
            },
            {
                "date": "2026-08-03",
                "price": 3400.0
            }
        ]
    },
    {
        "id": 131,
        "name": "Jugo en polvo Tang naranja dulce 15 g",
        "price": 366.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en polvo Tang naranja dulce 15 g_9.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 339.0
            },
            {
                "date": "2026-06-14",
                "price": 339.33
            },
            {
                "date": "2026-06-21",
                "price": 339.0
            },
            {
                "date": "2026-07-06",
                "price": 508.5
            },
            {
                "date": "2026-07-19",
                "price": 412.5
            },
            {
                "date": "2026-07-25",
                "price": 550.0
            },
            {
                "date": "2026-08-03",
                "price": 366.67
            }
        ]
    },
    {
        "id": 132,
        "name": "Jugo en polvo Tang naranja mango 15 g",
        "price": 366.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en polvo Tang naranja mango 15 g_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 508.5
            },
            {
                "date": "2026-07-19",
                "price": 412.5
            },
            {
                "date": "2026-07-25",
                "price": 550.0
            },
            {
                "date": "2026-08-03",
                "price": 366.67
            }
        ]
    },
    {
        "id": 133,
        "name": "Jugo en polvo Tang multifruta 15 g",
        "price": 366.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en polvo Tang multifruta 15 g_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 366.67
            }
        ]
    },
    {
        "id": 134,
        "name": "Jugo en Polvo Clight Manzana Deliciosa 7 grs",
        "price": 386.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en Polvo Clight Manzana Deliciosa 7_0.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 352.67
            },
            {
                "date": "2026-06-14",
                "price": 529.0
            },
            {
                "date": "2026-06-21",
                "price": 352.67
            },
            {
                "date": "2026-07-06",
                "price": 529.0
            },
            {
                "date": "2026-07-19",
                "price": 435.0
            },
            {
                "date": "2026-07-25",
                "price": 580.0
            },
            {
                "date": "2026-08-03",
                "price": 386.67
            }
        ]
    },
    {
        "id": 135,
        "name": "Jugo en Polvo Clight Naranja Dulce 7,5 grs",
        "price": 386.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en Polvo Clight Naranja Dulce 75 gr_1.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 352.67
            },
            {
                "date": "2026-06-14",
                "price": 529.0
            },
            {
                "date": "2026-06-21",
                "price": 352.67
            },
            {
                "date": "2026-07-06",
                "price": 529.0
            },
            {
                "date": "2026-07-19",
                "price": 435.0
            },
            {
                "date": "2026-07-25",
                "price": 580.0
            },
            {
                "date": "2026-08-03",
                "price": 386.67
            }
        ]
    },
    {
        "id": 136,
        "name": "Jugo en Polvo Clight Naranja Durazno 7,5 grs",
        "price": 386.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en Polvo Clight Naranja Durazno 75 _2.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 352.67
            },
            {
                "date": "2026-06-14",
                "price": 529.0
            },
            {
                "date": "2026-06-21",
                "price": 352.67
            },
            {
                "date": "2026-07-06",
                "price": 529.0
            },
            {
                "date": "2026-07-19",
                "price": 435.0
            },
            {
                "date": "2026-07-25",
                "price": 580.0
            },
            {
                "date": "2026-08-03",
                "price": 386.67
            }
        ]
    },
    {
        "id": 137,
        "name": "Jugo en Polvo Clight Limonada Arandanos 7,5 grs",
        "price": 386.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en Polvo Clight Limonada Arandanos _4.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 352.67
            },
            {
                "date": "2026-06-14",
                "price": 529.0
            },
            {
                "date": "2026-06-21",
                "price": 352.67
            },
            {
                "date": "2026-07-06",
                "price": 529.0
            },
            {
                "date": "2026-07-19",
                "price": 435.0
            },
            {
                "date": "2026-07-25",
                "price": 580.0
            },
            {
                "date": "2026-08-03",
                "price": 386.67
            }
        ]
    },
    {
        "id": 138,
        "name": "Jugo en Polvo Clight Pomelo Rosado 8 grs",
        "price": 386.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en Polvo Clight Pomelo Rosado 8 grs_5.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 352.67
            },
            {
                "date": "2026-06-14",
                "price": 529.0
            },
            {
                "date": "2026-06-21",
                "price": 352.67
            },
            {
                "date": "2026-07-06",
                "price": 529.0
            },
            {
                "date": "2026-07-19",
                "price": 435.0
            },
            {
                "date": "2026-07-25",
                "price": 580.0
            },
            {
                "date": "2026-08-03",
                "price": 386.67
            }
        ]
    },
    {
        "id": 139,
        "name": "Jugo en polvo Clight ananá 7grs",
        "price": 386.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en polvo Clight ananá 7grs_6.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 352.67
            },
            {
                "date": "2026-07-06",
                "price": 529.0
            },
            {
                "date": "2026-07-19",
                "price": 435.0
            },
            {
                "date": "2026-07-25",
                "price": 580.0
            },
            {
                "date": "2026-08-03",
                "price": 386.67
            }
        ]
    },
    {
        "id": 140,
        "name": "Jugo en Polvo Clight Limonada 8 grs",
        "price": 386.67,
        "market": "zenith",
        "category": "jugos",
        "image": "images\\carrefour/Jugo en Polvo Clight Limonada 8 grs_7.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 352.67
            },
            {
                "date": "2026-06-14",
                "price": 529.0
            },
            {
                "date": "2026-06-21",
                "price": 352.67
            },
            {
                "date": "2026-07-06",
                "price": 529.0
            },
            {
                "date": "2026-07-19",
                "price": 435.0
            },
            {
                "date": "2026-07-25",
                "price": 580.0
            },
            {
                "date": "2026-08-03",
                "price": 386.67
            }
        ]
    },
    {
        "id": 141,
        "name": "Leche ulta parcial descremada Carrefour classic sachet 1 lt.",
        "price": 1646.8,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche ulta parcial descremada Carrefour _6.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 1462.8
            },
            {
                "date": "2026-05-16",
                "price": 1554.8
            },
            {
                "date": "2026-05-30",
                "price": 1646.8
            },
            {
                "date": "2026-07-06",
                "price": 1702.0
            },
            {
                "date": "2026-07-25",
                "price": 1790.0
            },
            {
                "date": "2026-08-03",
                "price": 1646.8
            }
        ]
    },
    {
        "id": 142,
        "name": "Leche ultra entera Carrefour classic sachet 1 lt.",
        "price": 1702.0,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche ultra entera Carrefour classic sac_7.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 1462.8
            },
            {
                "date": "2026-05-16",
                "price": 1554.8
            },
            {
                "date": "2026-05-30",
                "price": 1646.8
            },
            {
                "date": "2026-07-06",
                "price": 1702.0
            },
            {
                "date": "2026-07-25",
                "price": 1850.0
            },
            {
                "date": "2026-08-03",
                "price": 1702.0
            }
        ]
    },
    {
        "id": 143,
        "name": "Leche liviana UAT clásica Bulnez 1 lt",
        "price": 1790.0,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche liviana UAT clásica Bulnez 1 lt_14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 144,
        "name": "Leche La Serenísima ultra entera multivit 3% sachet 1 lt",
        "price": 1975.0,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche La Serenísima ultra entera multivi_8.jpg",
        "history": [
            {
                "date": "2026-04-02",
                "price": 1780.0
            },
            {
                "date": "2026-04-25",
                "price": 1930.0
            },
            {
                "date": "2026-05-02",
                "price": 2005.0
            },
            {
                "date": "2026-05-16",
                "price": 1850.0
            },
            {
                "date": "2026-05-23",
                "price": 2005.0
            },
            {
                "date": "2026-06-07",
                "price": 1925.0
            },
            {
                "date": "2026-07-06",
                "price": 1975.0
            }
        ]
    },
    {
        "id": 145,
        "name": "Leche La Serenísima ultra parc descremada multivit 1% sachet 1 lt",
        "price": 1975.0,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche La Serenísima ultra parc descremad_9.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 2005.0
            },
            {
                "date": "2026-06-07",
                "price": 1925.0
            },
            {
                "date": "2026-07-06",
                "price": 1975.0
            }
        ]
    },
    {
        "id": 146,
        "name": "Leche La Serenísima reducida en lactosa sachet 1 l.",
        "price": 1975.0,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche La Serenísima reducida en lactosa _11.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1925.0
            },
            {
                "date": "2026-07-06",
                "price": 1975.0
            }
        ]
    },
    {
        "id": 147,
        "name": "Leche UAT parcialmente descremada Carrefour classic brik 1 lt.",
        "price": 2152.6,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche UAT parcialmente descremada Carref_1.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 1870.6
            },
            {
                "date": "2026-05-23",
                "price": 1776.6
            },
            {
                "date": "2026-07-06",
                "price": 2058.6
            },
            {
                "date": "2026-07-25",
                "price": 2290.0
            },
            {
                "date": "2026-08-03",
                "price": 2152.6
            }
        ]
    },
    {
        "id": 148,
        "name": "Leche UAT entera Carrefour classic brik 1 lt.",
        "price": 2152.6,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche UAT entera Carrefour classic brik _5.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 1870.6
            },
            {
                "date": "2026-05-23",
                "price": 1776.6
            },
            {
                "date": "2026-07-06",
                "price": 2058.6
            },
            {
                "date": "2026-07-25",
                "price": 2290.0
            },
            {
                "date": "2026-08-03",
                "price": 2152.6
            }
        ]
    },
    {
        "id": 149,
        "name": "Leche parcialmente descremada UAT Carrefour classic tetra 1 lt.",
        "price": 2152.6,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche parcialmente descremada UAT Carref_10.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2152.6
            }
        ]
    },
    {
        "id": 150,
        "name": "Leche Protein La Serenisima 1L",
        "price": 2240.0,
        "market": "zenith",
        "category": "leches",
        "image": "images\\carrefour/Leche Protein La Serenisima 1L_0.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2240.0
            }
        ]
    },
    {
        "id": 151,
        "name": "Limpiador multiuso Multimax para diluir lavanda (rinde 5 litros) 150 ml.",
        "price": 2045.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador multiuso Multimax para diluir _5.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1350.0
            },
            {
                "date": "2026-05-09",
                "price": 1170.0
            },
            {
                "date": "2026-05-16",
                "price": 1949.0
            },
            {
                "date": "2026-07-25",
                "price": 1461.75
            },
            {
                "date": "2026-08-03",
                "price": 2045.0
            }
        ]
    },
    {
        "id": 152,
        "name": "Limpiador Vidrios y Multiuso Cif Expert Doypack 450 ml",
        "price": 2509.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador Vidrios y Multiuso Cif Expert _1.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 2509.0
            },
            {
                "date": "2026-07-25",
                "price": 1879.0
            },
            {
                "date": "2026-08-03",
                "price": 2509.0
            }
        ]
    },
    {
        "id": 153,
        "name": "Limpiador líquido aromatizante Poett frescura de lavanda 900 ml.",
        "price": 2585.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador líquido aromatizante Poett fre_4.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1829.0
            },
            {
                "date": "2026-06-21",
                "price": 1815.75
            },
            {
                "date": "2026-07-06",
                "price": 2439.0
            },
            {
                "date": "2026-07-25",
                "price": 2585.0
            }
        ]
    },
    {
        "id": 154,
        "name": "Lustramuebles en aerosol Carrefour Expert 340 ml",
        "price": 2594.7,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Lustramuebles en aerosol Carrefour Exper_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3245.7
            },
            {
                "date": "2026-07-25",
                "price": 3490.0
            },
            {
                "date": "2026-08-03",
                "price": 2594.7
            }
        ]
    },
    {
        "id": 155,
        "name": "Limpiador Cif repuesto pisos plastificados 450 cc.",
        "price": 3469.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador Cif repuesto pisos plastificad_14.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 3469.0
            }
        ]
    },
    {
        "id": 156,
        "name": "Limpiador líquido aromatizante Poett frescura de lavanda 1.8 lts.",
        "price": 4535.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador líquido aromatizante Poett fre_2.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4535.0
            }
        ]
    },
    {
        "id": 157,
        "name": "Limpiador líquido aromatizante Poett alegra tu día 1.8 lts.",
        "price": 4535.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador líquido aromatizante Poett ale_7.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4535.0
            }
        ]
    },
    {
        "id": 158,
        "name": "Limpiador líquido aromatizante Poett flores de primavera 1.8 lts.",
        "price": 4535.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador líquido aromatizante Poett flo_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4535.0
            }
        ]
    },
    {
        "id": 159,
        "name": "Limpiador líquido Procenex pisos lavanda 1.8 l.",
        "price": 4549.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador líquido Procenex pisos lavanda_0.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 3150.0
            },
            {
                "date": "2026-05-30",
                "price": 4200.0
            },
            {
                "date": "2026-06-07",
                "price": 2730.0
            },
            {
                "date": "2026-06-14",
                "price": 4200.0
            },
            {
                "date": "2026-07-06",
                "price": 2730.0
            },
            {
                "date": "2026-07-19",
                "price": 4200.0
            },
            {
                "date": "2026-08-03",
                "price": 4549.0
            }
        ]
    },
    {
        "id": 160,
        "name": "Limpiador líquido Procenex pisos marina 1.8 l.",
        "price": 4549.0,
        "market": "zenith",
        "category": "limpieza",
        "image": "images\\carrefour/Limpiador líquido Procenex pisos marina _6.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4549.0
            }
        ]
    },
    {
        "id": 161,
        "name": "Alimento húmedo para perro Carrefour 100 g. adultos carne",
        "price": 1190.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Alimento húmedo para perro Carrefour 100_10.jpg",
        "history": [
            {
                "date": "2026-03-28",
                "price": 1100.0
            },
            {
                "date": "2026-04-25",
                "price": 733.33
            },
            {
                "date": "2026-05-02",
                "price": 1100.0
            },
            {
                "date": "2026-05-23",
                "price": 825.0
            },
            {
                "date": "2026-05-30",
                "price": 1100.0
            },
            {
                "date": "2026-07-06",
                "price": 1190.0
            },
            {
                "date": "2026-07-19",
                "price": 825.0
            },
            {
                "date": "2026-07-25",
                "price": 1190.0
            }
        ]
    },
    {
        "id": 162,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pequeños carne",
        "price": 1399.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Alimento húmedo para perro Pedigree 100 _0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            },
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-05-30",
                "price": 1399.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 163,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos carne",
        "price": 1399.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Alimento húmedo para perro Pedigree 100 _2.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            },
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 164,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pequeños pollo",
        "price": 1399.0,
        "market": "zenith",
        "category": "perros",
        "image": "images\\carrefour/Alimento húmedo para perro Pedigree 100 _4.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            },
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 165,
        "name": "Alimento húmedo para perro Pedigree 100 g. adultos pollo",
        "price": 1399.0,
        "market": "zenith",
        "category": "perros",
        "image": "images\\carrefour/Alimento húmedo para perro Pedigree 100 _9.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            },
            {
                "date": "2026-05-09",
                "price": 866.0
            },
            {
                "date": "2026-05-16",
                "price": 1299.0
            },
            {
                "date": "2026-05-30",
                "price": 1399.0
            },
            {
                "date": "2026-06-07",
                "price": 932.67
            },
            {
                "date": "2026-06-14",
                "price": 1399.0
            },
            {
                "date": "2026-07-06",
                "price": 932.67
            },
            {
                "date": "2026-07-19",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 1049.25
            },
            {
                "date": "2026-08-03",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 166,
        "name": "Snack para perros Pedigree Biscrok 100 g.",
        "price": 2038.0,
        "market": "zenith",
        "category": "perros",
        "image": "images\\carrefour/Snack para perros Pedigree Biscrok 100 g_11.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2038.0
            },
            {
                "date": "2026-07-25",
                "price": 1528.5
            },
            {
                "date": "2026-08-03",
                "price": 2038.0
            }
        ]
    },
    {
        "id": 167,
        "name": "Snack para perros Pedigree Rodeo 4 u. carne",
        "price": 2569.0,
        "market": "zenith",
        "category": "carnes",
        "image": "images\\carrefour/Snack para perros Pedigree Rodeo 4 u car_14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1926.75
            },
            {
                "date": "2026-08-03",
                "price": 2569.0
            }
        ]
    },
    {
        "id": 168,
        "name": "Snack para perros Pedigree Dentastix 7 u. razas medianas",
        "price": 4959.0,
        "market": "zenith",
        "category": "perros",
        "image": "images\\carrefour/Snack para perros Pedigree Dentastix 7 u_3.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 4959.0
            },
            {
                "date": "2026-05-09",
                "price": 3306.0
            },
            {
                "date": "2026-05-16",
                "price": 4959.0
            },
            {
                "date": "2026-06-07",
                "price": 3306.0
            },
            {
                "date": "2026-06-14",
                "price": 4959.0
            },
            {
                "date": "2026-07-06",
                "price": 3306.0
            },
            {
                "date": "2026-07-19",
                "price": 4959.0
            },
            {
                "date": "2026-07-25",
                "price": 3719.25
            },
            {
                "date": "2026-08-03",
                "price": 4959.0
            }
        ]
    },
    {
        "id": 169,
        "name": "Alimento seco para perro Pedigree 3 kg. adultos pequeños",
        "price": 13019.0,
        "market": "zenith",
        "category": "perros",
        "image": "images\\carrefour/Alimento seco para perro Pedigree 3 kg a_12.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 12305.0
            },
            {
                "date": "2026-05-30",
                "price": 13019.0
            },
            {
                "date": "2026-06-07",
                "price": 9113.3
            },
            {
                "date": "2026-06-14",
                "price": 13019.0
            },
            {
                "date": "2026-07-06",
                "price": 9764.25
            },
            {
                "date": "2026-07-19",
                "price": 13019.0
            },
            {
                "date": "2026-07-25",
                "price": 9764.25
            },
            {
                "date": "2026-08-03",
                "price": 13019.0
            }
        ]
    },
    {
        "id": 170,
        "name": "Alimento seco para perro Matute 15 kg. adultos",
        "price": 18500.0,
        "market": "zenith",
        "category": "perros",
        "image": "images\\carrefour/Alimento seco para perro Matute 15 kg ad_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 18500.0
            }
        ]
    },
    {
        "id": 171,
        "name": "Pañales Babysec ultrasoft XG 32 uni",
        "price": 10237.5,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañales Babysec ultrasoft XG 32 uni_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 15750.0
            },
            {
                "date": "2026-08-03",
                "price": 10237.5
            }
        ]
    },
    {
        "id": 172,
        "name": "Pañal Carrefour baby talle XXG hiperpack 26 uni",
        "price": 11834.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañal Carrefour baby talle XXG hiperpack_0.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 8190.0
            },
            {
                "date": "2026-05-09",
                "price": 8450.6
            },
            {
                "date": "2026-05-16",
                "price": 10330.6
            },
            {
                "date": "2026-05-30",
                "price": 8450.6
            },
            {
                "date": "2026-06-14",
                "price": 11834.6
            },
            {
                "date": "2026-07-06",
                "price": 9390.6
            },
            {
                "date": "2026-07-19",
                "price": 11834.6
            },
            {
                "date": "2026-07-25",
                "price": 9990.0
            },
            {
                "date": "2026-08-03",
                "price": 11834.6
            }
        ]
    },
    {
        "id": 173,
        "name": "Pañal Carrefour baby talle XG hiperpack 28 uni",
        "price": 11834.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañal Carrefour baby talle XG hiperpack _2.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 11834.6
            },
            {
                "date": "2026-07-25",
                "price": 9990.0
            },
            {
                "date": "2026-08-03",
                "price": 11834.6
            }
        ]
    },
    {
        "id": 174,
        "name": "Pañal Carrefour baby talle G hiperpack 32 uni",
        "price": 11834.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañal Carrefour baby talle G hiperpack 3_5.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 8190.0
            },
            {
                "date": "2026-05-09",
                "price": 8450.6
            },
            {
                "date": "2026-05-16",
                "price": 10330.6
            },
            {
                "date": "2026-05-30",
                "price": 8450.6
            },
            {
                "date": "2026-06-14",
                "price": 11834.6
            },
            {
                "date": "2026-07-06",
                "price": 9390.6
            },
            {
                "date": "2026-07-19",
                "price": 11834.6
            },
            {
                "date": "2026-07-25",
                "price": 9990.0
            },
            {
                "date": "2026-08-03",
                "price": 11834.6
            }
        ]
    },
    {
        "id": 175,
        "name": "Pañal talle M Carrefour baby hiperpack 38 uni",
        "price": 11834.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañal talle M Carrefour baby hiperpack 3_8.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 11834.6
            },
            {
                "date": "2026-07-25",
                "price": 9990.0
            },
            {
                "date": "2026-08-03",
                "price": 11834.6
            }
        ]
    },
    {
        "id": 176,
        "name": "Pañal Carrefour baby talle P hiperpack 44 uni",
        "price": 11834.6,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañal Carrefour baby talle P hiperpack 4_14.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 11834.6
            }
        ]
    },
    {
        "id": 177,
        "name": "Pañales talle XG Toddler Deluxe 30 uni",
        "price": 19470.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañales talle XG Toddler Deluxe 30 uni_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 19470.0
            },
            {
                "date": "2026-07-19",
                "price": 12655.5
            },
            {
                "date": "2026-07-25",
                "price": 19470.0
            }
        ]
    },
    {
        "id": 178,
        "name": "Pañales Huggies Talle XXG Protect Plus 30 uni",
        "price": 20650.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañales Huggies Talle XXG Protect Plus 3_10.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 20650.0
            }
        ]
    },
    {
        "id": 179,
        "name": "Pañales Huggies Natural Care RN 34 uni",
        "price": 20849.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pañales Huggies Natural Care RN 34 uni_1.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 11730.0
            },
            {
                "date": "2026-07-06",
                "price": 12509.4
            },
            {
                "date": "2026-07-19",
                "price": 13551.85
            },
            {
                "date": "2026-07-25",
                "price": 20849.0
            }
        ]
    },
    {
        "id": 180,
        "name": "Pants Huggies Soft Comfort XG 24 uni",
        "price": 22925.0,
        "market": "zenith",
        "category": "pañales",
        "image": "images\\carrefour/Pants Huggies Soft Comfort XG 24 uni_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 22925.0
            }
        ]
    },
    {
        "id": 181,
        "name": "Papel higiénico Higienol Fresh hoja simple 30 mts 4 uni",
        "price": 1730.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico Higienol Fresh hoja simp_3.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1566.75
            },
            {
                "date": "2026-07-19",
                "price": 2319.0
            },
            {
                "date": "2026-07-25",
                "price": 2579.0
            },
            {
                "date": "2026-08-03",
                "price": 1730.0
            }
        ]
    },
    {
        "id": 182,
        "name": "Papel higiénico hoja simple Carrefour Essential 4 x 30 mts",
        "price": 1774.5,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico hoja simple Carrefour Es_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1901.9
            },
            {
                "date": "2026-07-25",
                "price": 1950.0
            },
            {
                "date": "2026-08-03",
                "price": 1774.5
            }
        ]
    },
    {
        "id": 183,
        "name": "Papel higiénico doble hoja Higienol plus x4 30 mts",
        "price": 2714.25,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico doble hoja Higienol plus_0.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 3435.0
            },
            {
                "date": "2026-07-25",
                "price": 3619.0
            },
            {
                "date": "2026-08-03",
                "price": 2714.25
            }
        ]
    },
    {
        "id": 184,
        "name": "Papel higiénico doble hoja Carrefour Essential 4 x 30 mts",
        "price": 2780.7,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico doble hoja Carrefour Ess_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2780.7
            }
        ]
    },
    {
        "id": 185,
        "name": "Papel higiénico doble hoja Elegante 4 x 30 m.",
        "price": 3279.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico doble hoja Elegante 4 x _7.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3335.0
            },
            {
                "date": "2026-07-19",
                "price": 3279.0
            },
            {
                "date": "2026-07-25",
                "price": 2459.25
            },
            {
                "date": "2026-08-03",
                "price": 3279.0
            }
        ]
    },
    {
        "id": 186,
        "name": "Papel higiénico Higienol Premium doble hoja 30 mts 4 uni",
        "price": 3539.25,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico Higienol Premium doble h_11.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3539.25
            },
            {
                "date": "2026-07-19",
                "price": 4719.0
            },
            {
                "date": "2026-08-03",
                "price": 3539.25
            }
        ]
    },
    {
        "id": 187,
        "name": "Papel higiénico Higienol Max hoja simple 80 mts 4 uni",
        "price": 4386.75,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico Higienol Max hoja simple_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4386.75
            }
        ]
    },
    {
        "id": 188,
        "name": "Papel higiénico hoja simple Carrefour Essential x4 80 mts.",
        "price": 4682.8,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico hoja simple Carrefour Es_2.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 5014.0
            },
            {
                "date": "2026-07-25",
                "price": 4890.0
            },
            {
                "date": "2026-08-03",
                "price": 4682.8
            }
        ]
    },
    {
        "id": 189,
        "name": "Papel higiénico hoja simple Elegante 4 x 80 m.",
        "price": 5045.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico hoja simple Elegante 4 x_14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3783.75
            },
            {
                "date": "2026-08-03",
                "price": 5045.0
            }
        ]
    },
    {
        "id": 190,
        "name": "Papel higiénico Elite Ultra Suave doble hoja 30 mts 4 uni",
        "price": 5459.0,
        "market": "zenith",
        "category": "papeles",
        "image": "images\\carrefour/Papel higiénico Elite Ultra Suave doble _6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 4479.0
            },
            {
                "date": "2026-07-19",
                "price": 4745.0
            },
            {
                "date": "2026-07-25",
                "price": 3558.75
            },
            {
                "date": "2026-08-03",
                "price": 5459.0
            }
        ]
    },
    {
        "id": 191,
        "name": "Cuarto trasero al vacio Que Rico x kg",
        "price": 9449.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Cuarto trasero al vacio Que Rico x kg_7.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 10500.0
            },
            {
                "date": "2026-08-03",
                "price": 9449.0
            }
        ]
    },
    {
        "id": 192,
        "name": "¨Pata de pollo al vacio Que Rico x kg",
        "price": 9999.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Pata de pollo al vacio Que Rico x kg_5.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 11500.0
            },
            {
                "date": "2026-08-03",
                "price": 9999.0
            }
        ]
    },
    {
        "id": 193,
        "name": "Pata de pollo El Mercado x kg",
        "price": 9999.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Pata de pollo El Mercado x kg_8.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 11400.0
            },
            {
                "date": "2026-08-03",
                "price": 9999.0
            }
        ]
    },
    {
        "id": 194,
        "name": "Cuarto Trasero El Mercado x kg",
        "price": 10400.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Cuarto Trasero El Mercado x kg_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 10400.0
            }
        ]
    },
    {
        "id": 195,
        "name": "Muslo El Mercado x kg",
        "price": 10700.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Muslo El Mercado x kg_6.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 10700.0
            }
        ]
    },
    {
        "id": 196,
        "name": "Muslo de pollo al vacio Que Rico x kg",
        "price": 11200.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Muslo de pollo al vacio Que Rico x kg_1.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 11200.0
            }
        ]
    },
    {
        "id": 197,
        "name": "Pechuga El Mercado x kg",
        "price": 16549.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Pechuga El Mercado x kg_4.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 18400.0
            },
            {
                "date": "2026-08-03",
                "price": 16549.0
            }
        ]
    },
    {
        "id": 198,
        "name": "Pechuga de pollo al vacio Que Rico x kg",
        "price": 16649.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Pechuga de pollo al vacio Que Rico x kg_3.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 18500.0
            },
            {
                "date": "2026-08-03",
                "price": 16649.0
            }
        ]
    },
    {
        "id": 199,
        "name": "Suprema El Mercado x kg",
        "price": 22400.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Suprema El Mercado x kg_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 22400.0
            }
        ]
    },
    {
        "id": 200,
        "name": "Suprema de pollo al vacio Que Rico x kg",
        "price": 22500.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Suprema de pollo al vacio Que Rico x kg_0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 22500.0
            }
        ]
    },
    {
        "id": 201,
        "name": "Queso La Serenísima cremón light pote 280 g.",
        "price": 2996.25,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso La Serenísima cremón light pote 28_10.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 3899.0
            },
            {
                "date": "2026-06-14",
                "price": 3655.0
            },
            {
                "date": "2026-06-21",
                "price": 2741.25
            },
            {
                "date": "2026-07-06",
                "price": 3995.0
            },
            {
                "date": "2026-07-19",
                "price": 2996.25
            },
            {
                "date": "2026-07-25",
                "price": 3995.0
            },
            {
                "date": "2026-08-03",
                "price": 2996.25
            }
        ]
    },
    {
        "id": 202,
        "name": "Queso rallado Tregar 120 g.",
        "price": 3600.35,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso rallado Tregar 120 g_9.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 5539.0
            },
            {
                "date": "2026-07-06",
                "price": 3600.35
            },
            {
                "date": "2026-07-19",
                "price": 5849.0
            },
            {
                "date": "2026-07-25",
                "price": 5539.0
            },
            {
                "date": "2026-08-03",
                "price": 3600.35
            }
        ]
    },
    {
        "id": 203,
        "name": "Queso crema clásico Casancrem 290 grs",
        "price": 3630.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso crema clásico Casancrem 290 grs_6.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 3636.75
            },
            {
                "date": "2026-06-14",
                "price": 5595.0
            },
            {
                "date": "2026-06-21",
                "price": 3635.0
            },
            {
                "date": "2026-07-19",
                "price": 5595.0
            },
            {
                "date": "2026-07-25",
                "price": 5765.0
            },
            {
                "date": "2026-08-03",
                "price": 3630.0
            }
        ]
    },
    {
        "id": 204,
        "name": "Queso blanco original La SerenÍsima Clásico 290 grs",
        "price": 4135.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso blanco original La SerenÍsima Clás_15.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 4015.0
            },
            {
                "date": "2026-06-14",
                "price": 2609.0
            },
            {
                "date": "2026-06-21",
                "price": 4015.0
            },
            {
                "date": "2026-07-06",
                "price": 3011.25
            },
            {
                "date": "2026-07-19",
                "price": 4135.0
            },
            {
                "date": "2026-07-25",
                "price": 2687.75
            },
            {
                "date": "2026-08-03",
                "price": 4135.0
            }
        ]
    },
    {
        "id": 205,
        "name": "Queso blanco Tregar light 290 g.",
        "price": 4190.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso blanco Tregar light 290 g_11.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3989.0
            },
            {
                "date": "2026-07-19",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 206,
        "name": "Queso untable Finlandia light pote 290 g.",
        "price": 5479.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso untable Finlandia light pote 290 g_4.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 5135.0
            },
            {
                "date": "2026-05-09",
                "price": 3851.25
            },
            {
                "date": "2026-05-16",
                "price": 5340.0
            },
            {
                "date": "2026-05-23",
                "price": 4005.0
            },
            {
                "date": "2026-05-30",
                "price": 5340.0
            },
            {
                "date": "2026-06-14",
                "price": 4005.0
            },
            {
                "date": "2026-06-21",
                "price": 5340.0
            },
            {
                "date": "2026-07-06",
                "price": 5475.0
            },
            {
                "date": "2026-07-19",
                "price": 5345.0
            },
            {
                "date": "2026-07-25",
                "price": 4008.75
            },
            {
                "date": "2026-08-03",
                "price": 5479.0
            }
        ]
    },
    {
        "id": 207,
        "name": "Queso untable Finlandia pote 290 g.",
        "price": 5479.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso untable Finlandia pote 290 g_13.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 5135.0
            },
            {
                "date": "2026-05-09",
                "price": 3851.25
            },
            {
                "date": "2026-05-16",
                "price": 5340.0
            },
            {
                "date": "2026-05-23",
                "price": 4005.0
            },
            {
                "date": "2026-05-30",
                "price": 5340.0
            },
            {
                "date": "2026-06-14",
                "price": 4005.0
            },
            {
                "date": "2026-06-21",
                "price": 5340.0
            },
            {
                "date": "2026-07-06",
                "price": 5475.0
            },
            {
                "date": "2026-07-19",
                "price": 5345.0
            },
            {
                "date": "2026-07-25",
                "price": 4008.75
            },
            {
                "date": "2026-08-03",
                "price": 5479.0
            }
        ]
    },
    {
        "id": 208,
        "name": "Queso crema Casancrem clásico 500 grs",
        "price": 5817.5,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso crema Casancrem clásico 500 grs_2.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5817.5
            }
        ]
    },
    {
        "id": 209,
        "name": "Queso blanco balance Casancrem 500 grs",
        "price": 5817.5,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Queso blanco balance Casancrem 500 grs_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5817.5
            }
        ]
    },
    {
        "id": 210,
        "name": "La Paulina queso reggianito rallado 150 grs",
        "price": 6159.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/La Paulina queso reggianito rallado 150 _5.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 6000.0
            },
            {
                "date": "2026-07-25",
                "price": 4619.0
            },
            {
                "date": "2026-08-03",
                "price": 6159.0
            }
        ]
    },
    {
        "id": 211,
        "name": "Sal fina Bulnez en bolsa 500 g.",
        "price": 809.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal fina Bulnez en bolsa 500 g_1.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 989.0
            },
            {
                "date": "2026-05-23",
                "price": 988.0
            },
            {
                "date": "2026-07-06",
                "price": 779.0
            },
            {
                "date": "2026-07-25",
                "price": 809.0
            }
        ]
    },
    {
        "id": 212,
        "name": "Sal fina Dos Estrellas 500 g.",
        "price": 809.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal fina Dos Estrellas 500 g_2.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 989.0
            },
            {
                "date": "2026-05-23",
                "price": 840.0
            },
            {
                "date": "2026-05-30",
                "price": 779.0
            },
            {
                "date": "2026-07-06",
                "price": 809.0
            }
        ]
    },
    {
        "id": 213,
        "name": "Sal gruesa Bulnez en bolsa 1 kg.",
        "price": 1390.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal gruesa Bulnez en bolsa 1 kg_3.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1378.0
            },
            {
                "date": "2026-05-23",
                "price": 1415.0
            },
            {
                "date": "2026-07-06",
                "price": 1350.0
            },
            {
                "date": "2026-07-25",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 214,
        "name": "Sal parrillera Dos Anclas caja 500 g.",
        "price": 1419.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal parrillera Dos Anclas caja 500 g_7.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1359.0
            },
            {
                "date": "2026-07-06",
                "price": 1419.0
            },
            {
                "date": "2026-07-19",
                "price": 1064.25
            },
            {
                "date": "2026-07-25",
                "price": 1419.0
            }
        ]
    },
    {
        "id": 215,
        "name": "Sal gruesa Dos Anclas caja 500 g.",
        "price": 1450.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal gruesa Dos Anclas caja 500 g_4.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1450.0
            }
        ]
    },
    {
        "id": 216,
        "name": "Sal gruesa Celusal 500 g.",
        "price": 1479.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal gruesa Celusal 500 g_8.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1479.0
            }
        ]
    },
    {
        "id": 217,
        "name": "Sal fina Celusal paquete 500 g.",
        "price": 1549.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal fina Celusal paquete 500 g_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1549.0
            }
        ]
    },
    {
        "id": 218,
        "name": "Sal fina Dos Anclas caja 500 g.",
        "price": 1679.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal fina Dos Anclas caja 500 g_5.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1679.0
            },
            {
                "date": "2026-07-19",
                "price": 1199.0
            },
            {
                "date": "2026-07-25",
                "price": 1679.0
            }
        ]
    },
    {
        "id": 219,
        "name": "Sal fina Celusal caja 500 g.",
        "price": 1785.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal fina Celusal caja 500 g_6.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1785.0
            }
        ]
    },
    {
        "id": 220,
        "name": "Sal entrefina parrillera Celusal paquete 1 kg",
        "price": 2589.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Sal entrefina parrillera Celusal paquete_10.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2589.0
            }
        ]
    },
    {
        "id": 221,
        "name": "Mani pelado salado Carrefour Classic 115 g.",
        "price": 1173.9,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Mani pelado salado Carrefour Classic 115_5.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1173.9
            },
            {
                "date": "2026-05-09",
                "price": 1137.5
            },
            {
                "date": "2026-07-06",
                "price": 1173.9
            },
            {
                "date": "2026-07-25",
                "price": 1290.0
            },
            {
                "date": "2026-08-03",
                "price": 1173.9
            }
        ]
    },
    {
        "id": 222,
        "name": "Palitos salados Carrefour Classic 115 g.",
        "price": 1341.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Palitos salados Carrefour Classic 115 g_1.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1251.0
            },
            {
                "date": "2026-05-30",
                "price": 1395.0
            },
            {
                "date": "2026-07-06",
                "price": 1521.0
            },
            {
                "date": "2026-08-03",
                "price": 1341.0
            }
        ]
    },
    {
        "id": 223,
        "name": "Aritos de arroz Dos Hermanos crema y cebolla 80 g.",
        "price": 1639.0,
        "market": "zenith",
        "category": "arroz",
        "image": "images\\carrefour/Aritos de arroz Dos Hermanos crema y ceb_14.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1600.0
            },
            {
                "date": "2026-05-23",
                "price": 1639.0
            }
        ]
    },
    {
        "id": 224,
        "name": "Palitos salados Krachitos 110 g.",
        "price": 1665.0,
        "market": "zenith",
        "category": "sal",
        "image": "images\\carrefour/Palitos salados Krachitos 110 g_3.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1665.0
            },
            {
                "date": "2026-06-14",
                "price": 1248.75
            },
            {
                "date": "2026-06-21",
                "price": 1665.0
            }
        ]
    },
    {
        "id": 225,
        "name": "Palitos de maíz sabor queso Carrefour Classic 145 g.",
        "price": 2241.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Palitos de maíz sabor queso Carrefour Cl_4.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1935.0
            },
            {
                "date": "2026-05-09",
                "price": 2025.0
            },
            {
                "date": "2026-07-06",
                "price": 2241.0
            }
        ]
    },
    {
        "id": 226,
        "name": "Papas fritas Bulnez sabor original en tubo 100 grs",
        "price": 2290.0,
        "market": "zenith",
        "category": "snacks",
        "image": "images\\carrefour/Papas fritas Bulnez sabor original en tu_8.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 2190.0
            },
            {
                "date": "2026-05-09",
                "price": 2572.0
            },
            {
                "date": "2026-05-23",
                "price": 2612.0
            },
            {
                "date": "2026-06-14",
                "price": 2290.0
            }
        ]
    },
    {
        "id": 227,
        "name": "Papas fritas Bulnez sabor queso y cebolla en tubo 100 grs",
        "price": 2290.0,
        "market": "zenith",
        "category": "fiambres",
        "image": "images\\carrefour/Papas fritas Bulnez sabor queso y ceboll_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2290.0
            }
        ]
    },
    {
        "id": 228,
        "name": "Papas fritas Carrefour Classic corte tradicional 150 g.",
        "price": 2394.1,
        "market": "zenith",
        "category": "snacks",
        "image": "images\\carrefour/Papas fritas Carrefour Classic corte tra_0.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 2483.1
            },
            {
                "date": "2026-05-09",
                "price": 2572.1
            },
            {
                "date": "2026-05-30",
                "price": 2394.1
            },
            {
                "date": "2026-06-07",
                "price": 2572.1
            },
            {
                "date": "2026-06-14",
                "price": 2305.1
            },
            {
                "date": "2026-07-19",
                "price": 2661.1
            },
            {
                "date": "2026-07-25",
                "price": 2394.1
            }
        ]
    },
    {
        "id": 229,
        "name": "Papas fritas acanaladas Pehuamar 135 g.",
        "price": 2534.35,
        "market": "zenith",
        "category": "snacks",
        "image": "images\\carrefour/Papas fritas acanaladas Pehuamar 135 g_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2534.35
            }
        ]
    },
    {
        "id": 230,
        "name": "Papas fritas Carrefour Classic corte americano 150 g.",
        "price": 2840.5,
        "market": "zenith",
        "category": "snacks",
        "image": "images\\carrefour/Papas fritas Carrefour Classic corte ame_7.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2745.5
            },
            {
                "date": "2026-06-14",
                "price": 2460.5
            },
            {
                "date": "2026-07-19",
                "price": 2365.5
            },
            {
                "date": "2026-07-25",
                "price": 2990.0
            },
            {
                "date": "2026-08-03",
                "price": 2840.5
            }
        ]
    },
    {
        "id": 231,
        "name": "Yogur Firme Entero Vainilla La Serenísima Nutrición Activa 120 grs",
        "price": 850.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur Firme Entero Vainilla La Serenísim_8.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 783.33
            },
            {
                "date": "2026-05-16",
                "price": 1250.0
            },
            {
                "date": "2026-05-23",
                "price": 763.75
            },
            {
                "date": "2026-05-30",
                "price": 1250.0
            },
            {
                "date": "2026-06-07",
                "price": 750.0
            },
            {
                "date": "2026-06-14",
                "price": 1250.0
            },
            {
                "date": "2026-06-21",
                "price": 937.5
            },
            {
                "date": "2026-07-06",
                "price": 812.5
            },
            {
                "date": "2026-07-19",
                "price": 1315.0
            },
            {
                "date": "2026-08-03",
                "price": 850.0
            }
        ]
    },
    {
        "id": 232,
        "name": "Yogur Cremoso Vainilla Descremado La Serenísima Nutrición Activa 120 grs",
        "price": 850.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur Cremoso Vainilla Descremado La Ser_13.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1175.0
            },
            {
                "date": "2026-05-09",
                "price": 783.33
            },
            {
                "date": "2026-05-16",
                "price": 1250.0
            },
            {
                "date": "2026-05-23",
                "price": 812.5
            },
            {
                "date": "2026-05-30",
                "price": 1250.0
            },
            {
                "date": "2026-06-07",
                "price": 750.0
            },
            {
                "date": "2026-06-14",
                "price": 1250.0
            },
            {
                "date": "2026-06-21",
                "price": 937.5
            },
            {
                "date": "2026-07-06",
                "price": 812.5
            },
            {
                "date": "2026-07-19",
                "price": 1315.0
            },
            {
                "date": "2026-08-03",
                "price": 850.0
            }
        ]
    },
    {
        "id": 233,
        "name": "Yogur cremoso Milkaut sabor natural en pote 180 g.",
        "price": 1342.25,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur cremoso Milkaut sabor natural en p_5.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1342.25
            },
            {
                "date": "2026-07-25",
                "price": 1548.75
            },
            {
                "date": "2026-08-03",
                "price": 1342.25
            }
        ]
    },
    {
        "id": 234,
        "name": "Yogur entero natural Tregar sin azúcar en pote 140 g.",
        "price": 2090.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur entero natural Tregar sin azúcar e_14.jpg",
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
            },
            {
                "date": "2026-05-23",
                "price": 1387.5
            },
            {
                "date": "2026-05-30",
                "price": 1990.0
            },
            {
                "date": "2026-06-21",
                "price": 1492.5
            },
            {
                "date": "2026-07-06",
                "price": 1990.0
            },
            {
                "date": "2026-07-19",
                "price": 1492.5
            },
            {
                "date": "2026-08-03",
                "price": 2090.0
            }
        ]
    },
    {
        "id": 235,
        "name": "Yogur Griego sabor vainilla Yogurísimo 140 grs",
        "price": 2185.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur Griego sabor vainilla Yogurísimo 1_2.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1235.4
            },
            {
                "date": "2026-06-14",
                "price": 1338.35
            },
            {
                "date": "2026-06-21",
                "price": 2059.0
            },
            {
                "date": "2026-07-06",
                "price": 1338.35
            },
            {
                "date": "2026-07-19",
                "price": 2185.0
            },
            {
                "date": "2026-07-25",
                "price": 1638.75
            },
            {
                "date": "2026-08-03",
                "price": 2185.0
            }
        ]
    },
    {
        "id": 236,
        "name": "Yogur Griego sabor frutilla Yogurísimo 140 grs",
        "price": 2185.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur Griego sabor frutilla Yogurísimo 1_7.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1235.4
            },
            {
                "date": "2026-06-14",
                "price": 1338.35
            },
            {
                "date": "2026-06-21",
                "price": 2059.0
            },
            {
                "date": "2026-07-06",
                "price": 1338.35
            },
            {
                "date": "2026-07-19",
                "price": 2185.0
            },
            {
                "date": "2026-07-25",
                "price": 1638.75
            },
            {
                "date": "2026-08-03",
                "price": 2185.0
            }
        ]
    },
    {
        "id": 237,
        "name": "Yogur batido Ser PRO+ con proteínas sabor natural 175 grs",
        "price": 2206.75,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur batido Ser PRO con proteínas sabor_1.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2206.75
            }
        ]
    },
    {
        "id": 238,
        "name": "Yogur batido Ser PRO + con proteínas sabor frutos rojos 175 grs",
        "price": 2206.75,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur batido Ser PRO  con proteínas sabo_4.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2206.75
            }
        ]
    },
    {
        "id": 239,
        "name": "Yogur bebible entero Carrefour Classic sabor frutilla 900 ml",
        "price": 2256.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur bebible entero Carrefour Classic s_9.jpg",
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
            },
            {
                "date": "2026-07-06",
                "price": 1910.4
            },
            {
                "date": "2026-07-25",
                "price": 2350.0
            },
            {
                "date": "2026-08-03",
                "price": 2256.0
            }
        ]
    },
    {
        "id": 240,
        "name": "Yogur Griego natural sin endulzar Yogurísimo 190 grs",
        "price": 3265.0,
        "market": "zenith",
        "category": "all",
        "image": "images\\carrefour/Yogur Griego natural sin endulzar Yogurí_3.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3265.0
            }
        ]
    },
    {
        "id": 241,
        "name": "Aceite Mezcla Siglo De Oro 900 Ml",
        "price": 3129.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite Mezcla Siglo De Oro 900 Ml_19.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 2839.0
            },
            {
                "date": "2026-04-08",
                "price": 2979.0
            },
            {
                "date": "2026-07-19",
                "price": 3129.0
            },
            {
                "date": "2026-07-25",
                "price": 2499.0
            },
            {
                "date": "2026-08-03",
                "price": 3129.0
            }
        ]
    },
    {
        "id": 242,
        "name": "Aceite Mezcla Cocinero 900 Ml",
        "price": 3469.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite Mezcla Cocinero 900 Ml_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 3089.0
            },
            {
                "date": "2026-05-09",
                "price": 2899.0
            },
            {
                "date": "2026-05-16",
                "price": 3239.0
            },
            {
                "date": "2026-07-06",
                "price": 2429.25
            },
            {
                "date": "2026-07-19",
                "price": 3469.0
            }
        ]
    },
    {
        "id": 243,
        "name": "Aceite De Girasol Legítimo 900 Ml",
        "price": 3969.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite De Girasol Legítimo 900 Ml_5.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3969.0
            }
        ]
    },
    {
        "id": 244,
        "name": "Rocío Vegetal Check A Base De Aceite De Girasol 120 G",
        "price": 3999.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Rocío Vegetal Check A Base De Aceite De _21.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 245,
        "name": "Aceite En Aerosol Cañuelas Oliva 150 Ml",
        "price": 4146.75,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite En Aerosol Cañuelas Oliva 150 Ml_17.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 5529.0
            },
            {
                "date": "2026-08-03",
                "price": 4146.75
            }
        ]
    },
    {
        "id": 246,
        "name": "Aceite De Girasol Cocinero 900 Ml",
        "price": 4369.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite De Girasol Cocinero 900 Ml_7.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 4089.0
            },
            {
                "date": "2026-05-23",
                "price": 3066.75
            },
            {
                "date": "2026-05-30",
                "price": 4089.0
            },
            {
                "date": "2026-06-21",
                "price": 3066.75
            },
            {
                "date": "2026-07-19",
                "price": 3271.2
            },
            {
                "date": "2026-07-25",
                "price": 4369.0
            }
        ]
    },
    {
        "id": 247,
        "name": "Aceite De Girasol Cañuelas 900 Ml",
        "price": 4409.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite De Girasol Cañuelas 900 Ml_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 4119.0
            },
            {
                "date": "2026-08-03",
                "price": 4409.0
            }
        ]
    },
    {
        "id": 248,
        "name": "Aceite En Aerosol Natura Con Aceite De Girasol 120 Ml",
        "price": 4649.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite En Aerosol Natura Con Aceite De G_4.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 3314.25
            },
            {
                "date": "2026-05-16",
                "price": 4419.0
            },
            {
                "date": "2026-07-19",
                "price": 3486.75
            },
            {
                "date": "2026-07-25",
                "price": 2999.0
            },
            {
                "date": "2026-08-03",
                "price": 4649.0
            }
        ]
    },
    {
        "id": 249,
        "name": "Aceite De Girasol Natural 900 Ml",
        "price": 4719.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite De Girasol Natural 900 Ml_6.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 3149.25
            },
            {
                "date": "2026-05-16",
                "price": 4409.0
            },
            {
                "date": "2026-06-14",
                "price": 3306.75
            },
            {
                "date": "2026-06-21",
                "price": 4409.0
            },
            {
                "date": "2026-07-19",
                "price": 3775.2
            },
            {
                "date": "2026-07-25",
                "price": 4719.0
            }
        ]
    },
    {
        "id": 250,
        "name": "Aceite De Girasol Legítimo 1.5 L",
        "price": 4799.0,
        "market": "terra",
        "category": "aceite",
        "image": "images\\changomas/Aceite De Girasol Legítimo 15 L_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 6389.0
            },
            {
                "date": "2026-08-03",
                "price": 4799.0
            }
        ]
    },
    {
        "id": 251,
        "name": "Agua Mineral Sin Gas Check 2 L",
        "price": 1279.0,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Agua Mineral Sin Gas Check 2 L_4.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 899.0
            },
            {
                "date": "2026-03-28",
                "price": 1069.0
            },
            {
                "date": "2026-05-02",
                "price": 1279.0
            },
            {
                "date": "2026-05-16",
                "price": 1479.0
            },
            {
                "date": "2026-05-30",
                "price": 999.0
            },
            {
                "date": "2026-06-07",
                "price": 1279.0
            },
            {
                "date": "2026-06-21",
                "price": 999.0
            },
            {
                "date": "2026-07-06",
                "price": 1479.0
            },
            {
                "date": "2026-07-19",
                "price": 1279.0
            }
        ]
    },
    {
        "id": 252,
        "name": "Sifón De Soda Check 2 L",
        "price": 1401.75,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Sifón De Soda Check 2 L_1.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 1869.0
            },
            {
                "date": "2026-06-14",
                "price": 1489.0
            },
            {
                "date": "2026-06-21",
                "price": 1869.0
            },
            {
                "date": "2026-07-19",
                "price": 1401.75
            }
        ]
    },
    {
        "id": 253,
        "name": "Agua Mineralizada Cellier 2 Lts",
        "price": 1599.0,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Agua Mineralizada Cellier 2 Lts_3.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 999.0
            },
            {
                "date": "2026-05-09",
                "price": 1099.0
            },
            {
                "date": "2026-05-16",
                "price": 1599.0
            },
            {
                "date": "2026-06-14",
                "price": 1099.0
            },
            {
                "date": "2026-06-21",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 254,
        "name": "Soda Ivess 2,25 L",
        "price": 1599.0,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Soda Ivess 225 L_11.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1299.0
            },
            {
                "date": "2026-05-09",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 255,
        "name": "Agua Cellier Favaloro Con Gas 2 L",
        "price": 1749.0,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Agua Cellier Favaloro Con Gas 2 L_8.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1749.0
            }
        ]
    },
    {
        "id": 256,
        "name": "Agua Con Gas Sifón Sierra De Los Padres 1.75 Lt",
        "price": 1749.0,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Agua Con Gas Sifón Sierra De Los Padres _17.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 1299.0
            },
            {
                "date": "2026-05-16",
                "price": 1749.0
            }
        ]
    },
    {
        "id": 257,
        "name": "Soda Ivess Menos Sodio 1.75 L",
        "price": 1869.0,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Soda Ivess Menos Sodio 175 L_5.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1299.0
            },
            {
                "date": "2026-05-02",
                "price": 1399.0
            },
            {
                "date": "2026-05-09",
                "price": 1869.0
            },
            {
                "date": "2026-05-23",
                "price": 1399.0
            },
            {
                "date": "2026-05-30",
                "price": 1869.0
            },
            {
                "date": "2026-06-07",
                "price": 1499.0
            },
            {
                "date": "2026-06-14",
                "price": 1869.0
            }
        ]
    },
    {
        "id": 258,
        "name": "Agua Mineral Sin Gas Villa Del Sur 2,25 Lt",
        "price": 1874.25,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Agua Mineral Sin Gas Villa Del Sur 225 L_14.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1599.0
            },
            {
                "date": "2026-08-03",
                "price": 1874.25
            }
        ]
    },
    {
        "id": 259,
        "name": "Soda Ivess 2 L",
        "price": 2089.0,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Soda Ivess 2 L_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2089.0
            }
        ]
    },
    {
        "id": 260,
        "name": "Agua Mineral De Manantial Sin Gas Eco De Los Andes 2 Lt",
        "price": 2176.85,
        "market": "terra",
        "category": "aguas",
        "image": "images\\changomas/Agua Mineral De Manantial Sin Gas Eco De_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2176.85
            }
        ]
    },
    {
        "id": 261,
        "name": "Alimento Adulto Pollo Pouch Whiskas 85 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "gatos",
        "image": "images\\changomas/Alimento Adulto Pollo Pouch Whiskas 85 G_5.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 262,
        "name": "Alimento Adulto Salmon Pouch Whiskas 85 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Alimento Adulto Salmon Pouch Whiskas 85 _8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 263,
        "name": "Alimento Gato Pavo Pocuh Whiskas 85 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "gatos",
        "image": "images\\changomas/Alimento Gato Pavo Pocuh Whiskas 85 Gr_10.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 264,
        "name": "Alimento Adulto Sardina Pouch Whiskas 85 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "gatos",
        "image": "images\\changomas/Alimento Adulto Sardina Pouch Whiskas 85_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 265,
        "name": "Alimento Adulto Carne Pouch Whiskas 85 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Alimento Adulto Carne Pouch Whiskas 85 G_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 266,
        "name": "Alimento Humedo Pouch Pescado Souffle Whiskas 85gr",
        "price": 1049.25,
        "market": "terra",
        "category": "gatos",
        "image": "images\\changomas/Alimento Humedo Pouch Pescado Souffle Wh_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 267,
        "name": "Alimento Humedo Gatos Felix Salmon 100 Gr",
        "price": 1499.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Alimento Humedo Gatos Felix Salmon 100 G_17.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1449.0
            },
            {
                "date": "2026-07-19",
                "price": 1086.75
            },
            {
                "date": "2026-07-25",
                "price": 1124.25
            },
            {
                "date": "2026-08-03",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 268,
        "name": "Alimento Húmedo Adultos Pollo Cat Chow X85gr",
        "price": 1699.0,
        "market": "terra",
        "category": "gatos",
        "image": "images\\changomas/Alimento Húmedo Adultos Pollo Cat Chow X_20.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1609.0
            },
            {
                "date": "2026-07-19",
                "price": 1206.75
            },
            {
                "date": "2026-07-25",
                "price": 1274.25
            },
            {
                "date": "2026-08-03",
                "price": 1699.0
            }
        ]
    },
    {
        "id": 269,
        "name": "Piedras Sanitarias Pets Class 2 Kg",
        "price": 2049.0,
        "market": "terra",
        "category": "gatos",
        "image": "images\\changomas/Piedras Sanitarias Pets Class  2 Kg_1.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1536.75
            },
            {
                "date": "2026-07-25",
                "price": 2049.0
            }
        ]
    },
    {
        "id": 270,
        "name": "Piedras Sanitarias Aliada 2 Kg",
        "price": 2599.0,
        "market": "terra",
        "category": "gatos",
        "image": "images\\changomas/Piedras Sanitarias Aliada 2 Kg_4.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2599.0
            }
        ]
    },
    {
        "id": 271,
        "name": "Alimento Perro Razas Grandes Carne Pedigree 100 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Alimento Perro Razas Grandes Carne Pedig_5.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 272,
        "name": "Alimento Humedo Perro Pouch Adulto Pedigree 100 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "perros",
        "image": "images\\changomas/Alimento Humedo Perro Pouch Adulto Pedig_9.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1399.0
            },
            {
                "date": "2026-05-16",
                "price": 932.67
            },
            {
                "date": "2026-05-23",
                "price": 1399.0
            },
            {
                "date": "2026-05-30",
                "price": 1049.25
            },
            {
                "date": "2026-06-07",
                "price": 1399.0
            },
            {
                "date": "2026-06-14",
                "price": 932.67
            },
            {
                "date": "2026-06-21",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 979.3
            },
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 273,
        "name": "Alimento Perro Razas Grandes Pollo Pedigree 100 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "perros",
        "image": "images\\changomas/Alimento Perro  Razas Grandes Pollo Pedi_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 274,
        "name": "Alimento Adulto Raza Peq Carne Pouch Pedigree 100 Gr",
        "price": 1049.25,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Alimento Adulto Raza Peq Carne Pouch Ped_15.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1399.0
            },
            {
                "date": "2026-05-16",
                "price": 932.67
            },
            {
                "date": "2026-05-23",
                "price": 1399.0
            },
            {
                "date": "2026-05-30",
                "price": 1049.25
            },
            {
                "date": "2026-06-07",
                "price": 1399.0
            },
            {
                "date": "2026-06-14",
                "price": 932.67
            },
            {
                "date": "2026-06-21",
                "price": 1399.0
            },
            {
                "date": "2026-07-25",
                "price": 979.3
            },
            {
                "date": "2026-08-03",
                "price": 1049.25
            }
        ]
    },
    {
        "id": 275,
        "name": "Snack Biscrok Multi Pedigree X 100gr",
        "price": 1529.25,
        "market": "terra",
        "category": "perros",
        "image": "images\\changomas/Snack Biscrok Multi Pedigree X 100gr_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1529.25
            }
        ]
    },
    {
        "id": 276,
        "name": "Snack Rodeo Carne Pedigree X 4un",
        "price": 1926.75,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Snack Rodeo Carne Pedigree X 4un_21.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 2569.0
            },
            {
                "date": "2026-05-16",
                "price": 1798.3
            },
            {
                "date": "2026-05-23",
                "price": 2569.0
            },
            {
                "date": "2026-05-30",
                "price": 1926.75
            },
            {
                "date": "2026-06-07",
                "price": 2569.0
            },
            {
                "date": "2026-06-14",
                "price": 1712.67
            },
            {
                "date": "2026-06-21",
                "price": 2569.0
            },
            {
                "date": "2026-08-03",
                "price": 1926.75
            }
        ]
    },
    {
        "id": 277,
        "name": "Alimento Adulto Carne Lata Pedigree 340 Gr",
        "price": 3224.25,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Alimento Adulto Carne Lata Pedigree 340 _23.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3224.25
            }
        ]
    },
    {
        "id": 278,
        "name": "Snack Dentastix Razas Medianas Pedigree X 7un",
        "price": 3719.25,
        "market": "terra",
        "category": "perros",
        "image": "images\\changomas/Snack Dentastix Razas Medianas Pedigree _7.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3719.25
            }
        ]
    },
    {
        "id": 279,
        "name": "Snack Biscrok Multi Pedigree X 500gr",
        "price": 5781.75,
        "market": "terra",
        "category": "perros",
        "image": "images\\changomas/Snack Biscrok Multi Pedigree X 500gr_17.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5781.75
            }
        ]
    },
    {
        "id": 280,
        "name": "Alimento Dog Chow Para Perros Adultos, Medianos Y Grandes Sabor Carne Y Pollo 1.5 Kg",
        "price": 5799.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Alimento Dog Chow Para Perros Adultos Me_13.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 5499.0
            },
            {
                "date": "2026-07-06",
                "price": 4124.25
            },
            {
                "date": "2026-07-19",
                "price": 3849.3
            },
            {
                "date": "2026-07-25",
                "price": 5799.0
            }
        ]
    },
    {
        "id": 281,
        "name": "Arroz Largo Fino Maximo 500 G",
        "price": 909.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Largo Fino Maximo 500 G_17.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 779.0
            },
            {
                "date": "2026-05-16",
                "price": 909.0
            }
        ]
    },
    {
        "id": 282,
        "name": "Arroz Largo Fino Lucchetti 500 G",
        "price": 1059.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Largo Fino Lucchetti 500 G_19.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 969.0
            },
            {
                "date": "2026-05-16",
                "price": 688.35
            },
            {
                "date": "2026-05-23",
                "price": 1059.0
            },
            {
                "date": "2026-06-21",
                "price": 794.25
            },
            {
                "date": "2026-07-06",
                "price": 1059.0
            },
            {
                "date": "2026-07-25",
                "price": 794.25
            },
            {
                "date": "2026-08-03",
                "price": 1059.0
            }
        ]
    },
    {
        "id": 283,
        "name": "Arroz Lucchetti Parboil 500 G",
        "price": 1209.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Lucchetti Parboil 500 G_14.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1109.0
            },
            {
                "date": "2026-05-16",
                "price": 785.85
            },
            {
                "date": "2026-05-23",
                "price": 1209.0
            },
            {
                "date": "2026-06-21",
                "price": 906.75
            },
            {
                "date": "2026-07-06",
                "price": 1209.0
            },
            {
                "date": "2026-07-25",
                "price": 906.75
            },
            {
                "date": "2026-08-03",
                "price": 1209.0
            }
        ]
    },
    {
        "id": 284,
        "name": "Arroz Largo Fino Gallo Selección 500 G",
        "price": 1269.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Largo Fino Gallo Selección 500 G_22.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1159.0
            },
            {
                "date": "2026-05-02",
                "price": 753.35
            },
            {
                "date": "2026-05-09",
                "price": 1159.0
            },
            {
                "date": "2026-05-16",
                "price": 1269.0
            },
            {
                "date": "2026-06-07",
                "price": 846.0
            },
            {
                "date": "2026-06-14",
                "price": 1269.0
            },
            {
                "date": "2026-07-25",
                "price": 951.75
            },
            {
                "date": "2026-08-03",
                "price": 1269.0
            }
        ]
    },
    {
        "id": 285,
        "name": "Arroz Largo Fino Dos Hermanos 1 Kg",
        "price": 1329.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Largo Fino Dos Hermanos 1 Kg_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1329.0
            }
        ]
    },
    {
        "id": 286,
        "name": "Arroz Dos Hermanos Doble Carolina 500 G",
        "price": 1379.25,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Dos Hermanos Doble Carolina 500 G_10.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1379.25
            }
        ]
    },
    {
        "id": 287,
        "name": "Arroz Molinos Ala Integral 500 Gr",
        "price": 1419.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Molinos Ala Integral 500 Gr_15.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1369.0
            },
            {
                "date": "2026-06-07",
                "price": 1419.0
            },
            {
                "date": "2026-07-06",
                "price": 1064.25
            },
            {
                "date": "2026-07-25",
                "price": 1419.0
            }
        ]
    },
    {
        "id": 288,
        "name": "Arroz Parboil Gallo Oro Selección 500 G",
        "price": 1439.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Parboil Gallo Oro Selección 500 G_1.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1319.0
            },
            {
                "date": "2026-05-02",
                "price": 857.35
            },
            {
                "date": "2026-05-09",
                "price": 1319.0
            },
            {
                "date": "2026-05-16",
                "price": 1439.0
            },
            {
                "date": "2026-06-07",
                "price": 959.33
            },
            {
                "date": "2026-06-14",
                "price": 1439.0
            },
            {
                "date": "2026-07-25",
                "price": 1079.25
            },
            {
                "date": "2026-08-03",
                "price": 1439.0
            }
        ]
    },
    {
        "id": 289,
        "name": "Arroz Gallo Integral 500 G",
        "price": 1459.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Gallo Integral 500 G_6.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 1459.0
            },
            {
                "date": "2026-06-07",
                "price": 972.67
            },
            {
                "date": "2026-06-14",
                "price": 1459.0
            },
            {
                "date": "2026-07-25",
                "price": 1094.25
            },
            {
                "date": "2026-08-03",
                "price": 1459.0
            }
        ]
    },
    {
        "id": 290,
        "name": "Arroz Check Largo Fino 1 Kg",
        "price": 1489.0,
        "market": "terra",
        "category": "arroz",
        "image": "images\\changomas/Arroz Check Largo Fino 1 Kg_0.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 1099.0
            },
            {
                "date": "2026-05-30",
                "price": 1489.0
            },
            {
                "date": "2026-06-07",
                "price": 1265.65
            },
            {
                "date": "2026-06-21",
                "price": 1099.0
            },
            {
                "date": "2026-07-06",
                "price": 1489.0
            },
            {
                "date": "2026-07-19",
                "price": 1265.65
            },
            {
                "date": "2026-08-03",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 291,
        "name": "Carre De Cerdo Congelado 1 Kg",
        "price": 8799.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Carre De Cerdo Congelado 1 Kg_9.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 8799.0
            }
        ]
    },
    {
        "id": 292,
        "name": "Pechito De Cerdo Congelado 900 G",
        "price": 8799.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Pechito De Cerdo Congelado 900 G_12.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 8799.0
            }
        ]
    },
    {
        "id": 293,
        "name": "Bondiola Congelada 2.5 Kg",
        "price": 10900.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Bondiola Congelada 25 Kg_8.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 6989.0
            },
            {
                "date": "2026-04-25",
                "price": 10900.0
            },
            {
                "date": "2026-05-02",
                "price": 7289.0
            },
            {
                "date": "2026-05-09",
                "price": 10900.0
            },
            {
                "date": "2026-05-23",
                "price": 7289.0
            },
            {
                "date": "2026-05-30",
                "price": 10900.0
            },
            {
                "date": "2026-06-21",
                "price": 7289.0
            },
            {
                "date": "2026-07-06",
                "price": 10900.0
            },
            {
                "date": "2026-07-25",
                "price": 6889.0
            },
            {
                "date": "2026-08-03",
                "price": 10900.0
            }
        ]
    },
    {
        "id": 294,
        "name": "Chorizo Tradicional Campo Austral Tradicional Al Vacio 400 Gr",
        "price": 11089.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Chorizo Tradicional Campo Austral Tradic_18.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 11089.0
            },
            {
                "date": "2026-07-25",
                "price": 8316.75
            },
            {
                "date": "2026-08-03",
                "price": 11089.0
            }
        ]
    },
    {
        "id": 295,
        "name": "Matambre De Novillito Envasado Al Vacío 1.5 Kg",
        "price": 12989.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Matambre De Novillito Envasado Al Vacío _11.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 12989.0
            }
        ]
    },
    {
        "id": 296,
        "name": "Carne Picada Especial 750 G",
        "price": 14899.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Carne Picada Especial 750 G_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14499.0
            },
            {
                "date": "2026-03-21",
                "price": 8999.0
            },
            {
                "date": "2026-05-02",
                "price": 14499.0
            },
            {
                "date": "2026-05-23",
                "price": 14699.0
            },
            {
                "date": "2026-07-25",
                "price": 14899.0
            }
        ]
    },
    {
        "id": 297,
        "name": "Carne Picada Magra 650 G",
        "price": 15399.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Carne Picada Magra 650 G_15.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 14999.0
            },
            {
                "date": "2026-05-23",
                "price": 15199.0
            },
            {
                "date": "2026-07-25",
                "price": 15399.0
            }
        ]
    },
    {
        "id": 298,
        "name": "Tortuguita De Novillo Envasado Al Vacío 900 G",
        "price": 15899.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Tortuguita De Novillo Envasado Al Vacío _16.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 15699.0
            },
            {
                "date": "2026-07-25",
                "price": 15899.0
            }
        ]
    },
    {
        "id": 299,
        "name": "Paleta De Novillito Envasado Al Vacío 1.2 Kg",
        "price": 16399.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Paleta De Novillito Envasado Al Vacío 12_7.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 16399.0
            }
        ]
    },
    {
        "id": 300,
        "name": "Asado De Tira De Novillito 1 Kg",
        "price": 16399.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Asado De Tira De Novillito 1 Kg_14.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 16399.0
            }
        ]
    },
    {
        "id": 301,
        "name": "Cereal Nikitos Bolitas Dulces 80 G",
        "price": 959.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Cereal Nikitos Bolitas Dulces 80 G_16.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 959.0
            }
        ]
    },
    {
        "id": 302,
        "name": "Cereal De Maiz Nikitos Inflado Dulce 80 G",
        "price": 959.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Cereal De Maiz Nikitos Inflado Dulce 80 _18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 959.0
            }
        ]
    },
    {
        "id": 303,
        "name": "Barrita De Cereal Cachamai Frutty Frutilla Con Yogur 24 G",
        "price": 1009.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Barrita De Cereal Cachamai Frutty Frutil_21.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1009.0
            }
        ]
    },
    {
        "id": 304,
        "name": "Barra De Cereal Flow Almendras Con Chocolate X 30 G",
        "price": 1099.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Barra De Cereal Flow Almendras Con Choco_15.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1099.0
            }
        ]
    },
    {
        "id": 305,
        "name": "Cereales Naturitos Granix Sabor Frutos Rojos 90 G",
        "price": 1566.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Cereales Naturitos Granix Sabor Frutos R_12.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1499.0
            },
            {
                "date": "2026-05-30",
                "price": 1124.25
            },
            {
                "date": "2026-06-07",
                "price": 1499.0
            },
            {
                "date": "2026-07-06",
                "price": 974.35
            },
            {
                "date": "2026-07-19",
                "price": 2349.0
            },
            {
                "date": "2026-08-03",
                "price": 1566.0
            }
        ]
    },
    {
        "id": 306,
        "name": "Cereal Bolitas Check Chocolate 200 G",
        "price": 1626.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Cereal Bolitas Check Chocolate 200 G_0.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1494.35
            },
            {
                "date": "2026-05-09",
                "price": 1724.25
            },
            {
                "date": "2026-05-16",
                "price": 2299.0
            },
            {
                "date": "2026-05-30",
                "price": 1724.25
            },
            {
                "date": "2026-06-07",
                "price": 2299.0
            },
            {
                "date": "2026-06-14",
                "price": 1724.25
            },
            {
                "date": "2026-06-21",
                "price": 2299.0
            },
            {
                "date": "2026-07-06",
                "price": 1494.35
            },
            {
                "date": "2026-07-19",
                "price": 2299.0
            },
            {
                "date": "2026-08-03",
                "price": 1626.0
            }
        ]
    },
    {
        "id": 307,
        "name": "Cereal Check Ositos Azucarados 200 G",
        "price": 1626.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Cereal Check Ositos Azucarados 200 G_10.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2099.0
            },
            {
                "date": "2026-06-14",
                "price": 1724.25
            },
            {
                "date": "2026-06-21",
                "price": 2299.0
            },
            {
                "date": "2026-07-06",
                "price": 1494.35
            },
            {
                "date": "2026-07-19",
                "price": 2299.0
            },
            {
                "date": "2026-08-03",
                "price": 1626.0
            }
        ]
    },
    {
        "id": 308,
        "name": "Cereal Check Anillos De Colores Frutal 200 G",
        "price": 1679.33,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Cereal Check Anillos De Colores Frutal 2_1.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1799.25
            },
            {
                "date": "2026-06-21",
                "price": 2399.0
            },
            {
                "date": "2026-07-06",
                "price": 1559.35
            },
            {
                "date": "2026-07-19",
                "price": 2399.0
            },
            {
                "date": "2026-07-25",
                "price": 1799.0
            },
            {
                "date": "2026-08-03",
                "price": 1679.33
            }
        ]
    },
    {
        "id": 309,
        "name": "Cereal Azucarado Skarchitos 240 Gr",
        "price": 1872.67,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Cereal Azucarado Skarchitos 240 Gr_4.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1123.85
            },
            {
                "date": "2026-05-09",
                "price": 1729.0
            },
            {
                "date": "2026-05-30",
                "price": 1296.75
            },
            {
                "date": "2026-06-07",
                "price": 1729.0
            },
            {
                "date": "2026-07-06",
                "price": 1123.85
            },
            {
                "date": "2026-07-19",
                "price": 2809.0
            },
            {
                "date": "2026-08-03",
                "price": 1872.67
            }
        ]
    },
    {
        "id": 310,
        "name": "Almohaditas Check Sabor Frutilla 180 G",
        "price": 2146.0,
        "market": "terra",
        "category": "cereales",
        "image": "images\\changomas/Almohaditas Check Sabor Frutilla 180 G_20.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2146.0
            }
        ]
    },
    {
        "id": 311,
        "name": "Cerveza Rubia Quilmes Bajocero 473 Ml",
        "price": 1133.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Quilmes Bajocero 473 Ml_0.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1109.25
            },
            {
                "date": "2026-05-16",
                "price": 1035.3
            },
            {
                "date": "2026-05-23",
                "price": 986.0
            },
            {
                "date": "2026-05-30",
                "price": 1549.0
            },
            {
                "date": "2026-06-07",
                "price": 1032.67
            },
            {
                "date": "2026-06-14",
                "price": 999.0
            },
            {
                "date": "2026-06-21",
                "price": 1084.3
            },
            {
                "date": "2026-07-06",
                "price": 1032.67
            },
            {
                "date": "2026-07-19",
                "price": 1133.3
            }
        ]
    },
    {
        "id": 312,
        "name": "Cerveza Rubia Quilmes Sin Alcohol 473 Ml",
        "price": 1504.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Quilmes Sin Alcohol 473 Ml_9.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1412.67
            },
            {
                "date": "2026-06-14",
                "price": 1483.3
            },
            {
                "date": "2026-07-06",
                "price": 1412.67
            },
            {
                "date": "2026-07-19",
                "price": 1074.5
            },
            {
                "date": "2026-07-25",
                "price": 752.15
            },
            {
                "date": "2026-08-03",
                "price": 1504.3
            }
        ]
    },
    {
        "id": 313,
        "name": "Cerveza Rubia Quilmes 1890 473 Cc",
        "price": 1553.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Quilmes 1890 473 Cc_14.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1329.3
            },
            {
                "date": "2026-05-23",
                "price": 1266.0
            },
            {
                "date": "2026-05-30",
                "price": 2129.0
            },
            {
                "date": "2026-06-07",
                "price": 1419.33
            },
            {
                "date": "2026-06-14",
                "price": 1596.75
            },
            {
                "date": "2026-06-21",
                "price": 2129.0
            },
            {
                "date": "2026-07-06",
                "price": 1419.33
            },
            {
                "date": "2026-07-19",
                "price": 1553.3
            }
        ]
    },
    {
        "id": 314,
        "name": "Cerveza Rubia Amstel Lager 473 Ml",
        "price": 1910.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Amstel Lager 473 Ml_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1910.3
            }
        ]
    },
    {
        "id": 315,
        "name": "Cerveza En Lata Brahma 354ml",
        "price": 1929.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza En Lata Brahma 354ml_20.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 966.75
            },
            {
                "date": "2026-05-09",
                "price": 1289.0
            },
            {
                "date": "2026-05-23",
                "price": 859.33
            },
            {
                "date": "2026-05-30",
                "price": 972.3
            },
            {
                "date": "2026-06-07",
                "price": 926.0
            },
            {
                "date": "2026-06-14",
                "price": 1041.75
            },
            {
                "date": "2026-06-21",
                "price": 1389.0
            },
            {
                "date": "2026-07-06",
                "price": 926.0
            },
            {
                "date": "2026-07-19",
                "price": 1929.0
            }
        ]
    },
    {
        "id": 316,
        "name": "Cerveza Rubia Quilmes Laton 710 Cc",
        "price": 2099.0,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Quilmes Laton 710 Cc_1.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1854.5
            },
            {
                "date": "2026-07-25",
                "price": 2596.3
            },
            {
                "date": "2026-08-03",
                "price": 2099.0
            }
        ]
    },
    {
        "id": 317,
        "name": "Cerveza Rubia Imperial Ipa 473 Ml",
        "price": 2309.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Imperial Ipa 473 Ml_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2309.3
            }
        ]
    },
    {
        "id": 318,
        "name": "Cerveza Rubia Andes Origen Ipa Lata 473ml",
        "price": 2337.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Andes Origen Ipa Lata 473m_22.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2337.3
            }
        ]
    },
    {
        "id": 319,
        "name": "Cerveza Rubia Heineken Sin Alcohol 473 Cc",
        "price": 2365.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Heineken Sin Alcohol 473 C_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2365.3
            }
        ]
    },
    {
        "id": 320,
        "name": "Cerveza Rubia Stella Artois Sin Alcohol 330 Ml",
        "price": 2379.3,
        "market": "terra",
        "category": "cervezas",
        "image": "images\\changomas/Cerveza Rubia Stella Artois Sin Alcohol _21.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2379.3
            }
        ]
    },
    {
        "id": 321,
        "name": "Paleta Nuestra Fiambrería Campo Austral Trozado 150 G",
        "price": 2159.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Paleta Nuestra Fiambrería Campo Austral _7.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2159.0
            }
        ]
    },
    {
        "id": 322,
        "name": "Paleta De Cerdo Trozer Feteada 200 G",
        "price": 3409.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Paleta De Cerdo Trozer Feteada 200 G_4.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3409.0
            }
        ]
    },
    {
        "id": 323,
        "name": "Paleta Aliada Feteada 200 G",
        "price": 3799.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Paleta Aliada Feteada 200 G_3.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3679.0
            },
            {
                "date": "2026-08-03",
                "price": 3799.0
            }
        ]
    },
    {
        "id": 324,
        "name": "Jamón Cocido Trozer Feteado 200 G",
        "price": 3989.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Jamón Cocido Trozer Feteado 200 G_0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3989.0
            }
        ]
    },
    {
        "id": 325,
        "name": "Jamón Cocido Natural Check Feteado 130 G",
        "price": 3999.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Jamón Cocido Natural Check Feteado 130 G_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3849.0
            },
            {
                "date": "2026-08-03",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 326,
        "name": "Paleta De Cerdo Nuestra Fiambrería Campo Austral Feteada 200 G",
        "price": 4299.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Paleta De Cerdo Nuestra Fiambrería Campo_9.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4299.0
            }
        ]
    },
    {
        "id": 327,
        "name": "Jamón Cocido Lario Feteado 150 G",
        "price": 4989.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Jamón Cocido Lario Feteado 150 G_5.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3649.0
            },
            {
                "date": "2026-08-03",
                "price": 4989.0
            }
        ]
    },
    {
        "id": 328,
        "name": "Jamón Cocido Cagnoli 120g",
        "price": 5459.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Jamón Cocido Cagnoli 120g_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5459.0
            }
        ]
    },
    {
        "id": 329,
        "name": "Jamón Cocido Nuestra Fiambrería Lario Feteado 200 G",
        "price": 5489.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Jamón Cocido Nuestra Fiambrería Lario Fe_1.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5489.0
            }
        ]
    },
    {
        "id": 330,
        "name": "Jamón Crudo El Artesano Feteado 100 G",
        "price": 5889.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Jamón Crudo El Artesano Feteado 100 G_10.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 5889.0
            }
        ]
    },
    {
        "id": 331,
        "name": "Gaseosa Crush Sin Azúcar Lima-Limón 2,25 L",
        "price": 2150.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Crush Sin Azúcar Lima-Limón 225 _14.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1439.2
            },
            {
                "date": "2026-05-23",
                "price": 1349.25
            },
            {
                "date": "2026-05-30",
                "price": 1619.1
            },
            {
                "date": "2026-07-06",
                "price": 1999.0
            },
            {
                "date": "2026-07-19",
                "price": 1699.15
            },
            {
                "date": "2026-08-03",
                "price": 2150.0
            }
        ]
    },
    {
        "id": 332,
        "name": "Gaseosa Pepsi Black Sin Azúcar 2 L",
        "price": 2274.5,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Pepsi Black Sin Azúcar 2 L_0.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2274.5
            }
        ]
    },
    {
        "id": 333,
        "name": "Gaseosa Mirinda Sabor Naranja 2.25 L",
        "price": 2449.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Mirinda Sabor Naranja 225 L_11.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1591.85
            },
            {
                "date": "2026-05-23",
                "price": 1836.75
            },
            {
                "date": "2026-05-30",
                "price": 2081.65
            },
            {
                "date": "2026-08-03",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 334,
        "name": "Gaseosa Mirinda Sabor Manzana 2.25 L",
        "price": 2449.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Mirinda Sabor Manzana 225 L_17.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2081.65
            },
            {
                "date": "2026-08-03",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 335,
        "name": "Gaseosa Cunnington Pomelo Suave 2.25 L",
        "price": 2499.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Cunnington Pomelo Suave 225 L_2.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 2061.75
            },
            {
                "date": "2026-05-30",
                "price": 1799.0
            },
            {
                "date": "2026-06-07",
                "price": 2499.0
            },
            {
                "date": "2026-06-14",
                "price": 1899.0
            },
            {
                "date": "2026-06-21",
                "price": 2499.0
            },
            {
                "date": "2026-07-06",
                "price": 2749.0
            },
            {
                "date": "2026-07-19",
                "price": 2499.0
            },
            {
                "date": "2026-07-25",
                "price": 1899.0
            },
            {
                "date": "2026-08-03",
                "price": 2499.0
            }
        ]
    },
    {
        "id": 336,
        "name": "Gaseosa Cunnington Cola Sin Azúcar 2.25 L",
        "price": 2749.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Cunnington Cola Sin Azúcar 225 L_5.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 2061.75
            },
            {
                "date": "2026-05-30",
                "price": 1799.0
            },
            {
                "date": "2026-06-07",
                "price": 2749.0
            },
            {
                "date": "2026-06-14",
                "price": 1899.0
            },
            {
                "date": "2026-06-21",
                "price": 2749.0
            },
            {
                "date": "2026-07-25",
                "price": 1899.0
            },
            {
                "date": "2026-08-03",
                "price": 2749.0
            }
        ]
    },
    {
        "id": 337,
        "name": "Gaseosa Cunnington Lima 2.25 L",
        "price": 2749.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Cunnington Lima 225 L_7.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2749.0
            },
            {
                "date": "2026-07-25",
                "price": 1899.0
            },
            {
                "date": "2026-08-03",
                "price": 2749.0
            }
        ]
    },
    {
        "id": 338,
        "name": "Gaseosa Cunnington Pomelo Classic 2.25 L",
        "price": 2749.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Cunnington Pomelo Classic 225 L_8.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1899.0
            },
            {
                "date": "2026-08-03",
                "price": 2749.0
            }
        ]
    },
    {
        "id": 339,
        "name": "Gaseosa Cunnington Cola Classic 2.25 L",
        "price": 2749.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Gaseosa Cunnington Cola Classic 225 L_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1899.0
            },
            {
                "date": "2026-08-03",
                "price": 2749.0
            }
        ]
    },
    {
        "id": 340,
        "name": "Agua Tónica Cunnington 2.25 L",
        "price": 2749.0,
        "market": "terra",
        "category": "gaseosas",
        "image": "images\\changomas/Agua Tónica Cunnington 225 L_12.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1899.0
            },
            {
                "date": "2026-08-03",
                "price": 2749.0
            }
        ]
    },
    {
        "id": 341,
        "name": "Medallones De Carne Aliada 2 U 110 G",
        "price": 1099.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Medallones De Carne Aliada 2 U 110 G_11.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2159.0
            },
            {
                "date": "2026-06-14",
                "price": 1079.5
            },
            {
                "date": "2026-06-21",
                "price": 999.0
            },
            {
                "date": "2026-07-06",
                "price": 1049.0
            },
            {
                "date": "2026-07-19",
                "price": 2249.0
            },
            {
                "date": "2026-07-25",
                "price": 1574.3
            },
            {
                "date": "2026-08-03",
                "price": 1099.0
            }
        ]
    },
    {
        "id": 342,
        "name": "Medallon De Carne Vacuna Express 110 G 2u",
        "price": 2449.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Medallon De Carne Vacuna Express 110 G 2_7.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1591.85
            },
            {
                "date": "2026-06-14",
                "price": 2449.0
            },
            {
                "date": "2026-07-19",
                "price": 1836.75
            },
            {
                "date": "2026-07-25",
                "price": 2449.0
            }
        ]
    },
    {
        "id": 343,
        "name": "Hamburguesas De Carne Vacuna Check 110 G 2 U",
        "price": 3039.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Hamburguesas De Carne Vacuna Check 110 G_19.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3039.0
            }
        ]
    },
    {
        "id": 344,
        "name": "Medallones De Carne Vacuna Paty Express 276 G 4u",
        "price": 5959.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Medallones De Carne Vacuna Paty Express _6.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 5959.0
            },
            {
                "date": "2026-06-14",
                "price": 3873.35
            },
            {
                "date": "2026-06-21",
                "price": 5959.0
            },
            {
                "date": "2026-07-19",
                "price": 4469.25
            },
            {
                "date": "2026-07-25",
                "price": 5959.0
            }
        ]
    },
    {
        "id": 345,
        "name": "Medallones Swift De Carne 276g 4u",
        "price": 6159.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Medallones Swift De Carne 276g 4u_18.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 4116.75
            },
            {
                "date": "2026-06-14",
                "price": 2744.5
            },
            {
                "date": "2026-06-21",
                "price": 5869.0
            },
            {
                "date": "2026-07-19",
                "price": 4399.0
            },
            {
                "date": "2026-07-25",
                "price": 6159.0
            }
        ]
    },
    {
        "id": 346,
        "name": "Hamburguesa Unión Ganadera Clásica 4 U 332 G",
        "price": 7829.25,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images\\changomas/Hamburguesa Unión Ganadera Clásica 4 U 3_10.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 7829.25
            }
        ]
    },
    {
        "id": 347,
        "name": "Supremas Granja Del Sol 4 U",
        "price": 8001.75,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images\\changomas/Supremas Granja Del Sol 4 U_9.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 8001.75
            }
        ]
    },
    {
        "id": 348,
        "name": "Supremas Granja Del Sol Con Espinaca Y Queso 4 U",
        "price": 8001.75,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Supremas Granja Del Sol Con Espinaca Y Q_21.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 8001.75
            }
        ]
    },
    {
        "id": 349,
        "name": "Hamburguesas Swift Tipo Casera 240g 2u",
        "price": 8019.0,
        "market": "terra",
        "category": "hamburguesas",
        "image": "images\\changomas/Hamburguesas Swift Tipo Casera 240g 2u_20.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 8019.0
            }
        ]
    },
    {
        "id": 350,
        "name": "Medallones De Carne Vacuna Goodmark Classic 320 G 4u",
        "price": 8049.0,
        "market": "terra",
        "category": "carnes",
        "image": "images\\changomas/Medallones De Carne Vacuna Goodmark Clas_23.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 8049.0
            }
        ]
    },
    {
        "id": 351,
        "name": "Harina Cañuelas 000 1kg",
        "price": 799.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Harina Cañuelas 000 1kg_22.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 799.0
            }
        ]
    },
    {
        "id": 352,
        "name": "Harina Check 000 1 Kg",
        "price": 919.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Harina Check 000 1 Kg_10.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 689.25
            },
            {
                "date": "2026-07-25",
                "price": 799.0
            },
            {
                "date": "2026-08-03",
                "price": 919.0
            }
        ]
    },
    {
        "id": 353,
        "name": "Harina De Trigo Chacabuco 000 1 Kg",
        "price": 1039.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Harina De Trigo Chacabuco 000 1 Kg_11.jpg",
        "history": [
            {
                "date": "2026-04-12",
                "price": 741.75
            },
            {
                "date": "2026-04-18",
                "price": 989.0
            },
            {
                "date": "2026-05-02",
                "price": 799.0
            },
            {
                "date": "2026-05-09",
                "price": 989.0
            },
            {
                "date": "2026-05-23",
                "price": 779.25
            },
            {
                "date": "2026-05-30",
                "price": 1039.0
            },
            {
                "date": "2026-06-07",
                "price": 799.0
            },
            {
                "date": "2026-06-14",
                "price": 1039.0
            },
            {
                "date": "2026-07-19",
                "price": 779.25
            },
            {
                "date": "2026-07-25",
                "price": 1039.0
            }
        ]
    },
    {
        "id": 354,
        "name": "Harina 000 Morixe X 1 Kg",
        "price": 1109.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Harina 000 Morixe X 1 Kg_8.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 999.0
            },
            {
                "date": "2026-05-09",
                "price": 779.0
            },
            {
                "date": "2026-05-16",
                "price": 999.0
            },
            {
                "date": "2026-05-30",
                "price": 779.0
            },
            {
                "date": "2026-06-07",
                "price": 999.0
            },
            {
                "date": "2026-06-14",
                "price": 649.0
            },
            {
                "date": "2026-06-21",
                "price": 1109.0
            },
            {
                "date": "2026-07-19",
                "price": 799.0
            },
            {
                "date": "2026-07-25",
                "price": 1109.0
            }
        ]
    },
    {
        "id": 355,
        "name": "Harina Leudante Morixe X 1 Kg",
        "price": 1249.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Harina Leudante Morixe X 1 Kg_13.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1249.0
            }
        ]
    },
    {
        "id": 356,
        "name": "Harina 0000 Chacabuco 1 Kg",
        "price": 1369.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Harina 0000 Chacabuco 1 Kg_9.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1289.0
            },
            {
                "date": "2026-05-16",
                "price": 999.0
            },
            {
                "date": "2026-05-23",
                "price": 1369.0
            },
            {
                "date": "2026-06-21",
                "price": 999.0
            },
            {
                "date": "2026-07-06",
                "price": 1369.0
            },
            {
                "date": "2026-07-19",
                "price": 1026.75
            },
            {
                "date": "2026-07-25",
                "price": 1369.0
            }
        ]
    },
    {
        "id": 357,
        "name": "Avena Instantánea Morixe 400 G",
        "price": 1466.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Avena Instantánea Morixe 400 G_3.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1466.0
            }
        ]
    },
    {
        "id": 358,
        "name": "Avena Tradicional Morixe 400 G",
        "price": 1466.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Avena Tradicional Morixe 400 G_23.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1466.0
            }
        ]
    },
    {
        "id": 359,
        "name": "Harina Para Pizza Morixe 1kg",
        "price": 1499.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Harina Para Pizza Morixe 1kg_14.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 360,
        "name": "Polenta Molinos Ala Instantánea 730 G",
        "price": 1529.0,
        "market": "terra",
        "category": "harinas",
        "image": "images\\changomas/Polenta Molinos Ala Instantánea 730 G_17.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1146.75
            },
            {
                "date": "2026-08-03",
                "price": 1529.0
            }
        ]
    },
    {
        "id": 361,
        "name": "Jugo En Polvo Naranja Bc 7 Gr",
        "price": 194.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Naranja Bc 7 Gr_1.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 269.25
            },
            {
                "date": "2026-06-14",
                "price": 359.0
            },
            {
                "date": "2026-07-06",
                "price": 179.5
            },
            {
                "date": "2026-07-19",
                "price": 194.5
            }
        ]
    },
    {
        "id": 362,
        "name": "Jugo En Polvo Manzana Roja Bc 7 Gr",
        "price": 194.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Manzana Roja Bc 7 Gr_10.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 269.25
            },
            {
                "date": "2026-06-14",
                "price": 359.0
            },
            {
                "date": "2026-07-06",
                "price": 179.5
            },
            {
                "date": "2026-07-19",
                "price": 194.5
            }
        ]
    },
    {
        "id": 363,
        "name": "Jugo En Polvo Pomelo Rosado Bc 7 Gr",
        "price": 194.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Pomelo Rosado Bc 7 Gr_16.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 359.0
            },
            {
                "date": "2026-07-06",
                "price": 179.5
            },
            {
                "date": "2026-07-19",
                "price": 194.5
            }
        ]
    },
    {
        "id": 364,
        "name": "Jugo En Polvo Ananá Bc 7 Gr",
        "price": 194.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Ananá Bc 7 Gr_18.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 359.0
            },
            {
                "date": "2026-07-06",
                "price": 179.5
            },
            {
                "date": "2026-07-19",
                "price": 194.5
            }
        ]
    },
    {
        "id": 365,
        "name": "Jugo En Polvo Pomelo Amarillo Bc 7 Gr",
        "price": 194.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Pomelo Amarillo Bc 7 Gr_19.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 194.5
            }
        ]
    },
    {
        "id": 366,
        "name": "Jugo En Polvo Tang Naranja Dulce 15 G",
        "price": 274.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Tang Naranja Dulce 15 G_6.jpg",
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
            },
            {
                "date": "2026-05-16",
                "price": 305.4
            },
            {
                "date": "2026-05-23",
                "price": 509.0
            },
            {
                "date": "2026-05-30",
                "price": 339.33
            },
            {
                "date": "2026-06-07",
                "price": 381.75
            },
            {
                "date": "2026-06-14",
                "price": 549.0
            },
            {
                "date": "2026-07-06",
                "price": 274.5
            }
        ]
    },
    {
        "id": 367,
        "name": "Jugo En Polvo Tang Naranja Mango 15 G",
        "price": 274.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Tang Naranja Mango 15 G_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 274.5
            }
        ]
    },
    {
        "id": 368,
        "name": "Jugo En Polvo Tang Multifruta 15 G",
        "price": 274.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Tang Multifruta 15 G_12.jpg",
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
            },
            {
                "date": "2026-05-16",
                "price": 305.4
            },
            {
                "date": "2026-05-23",
                "price": 509.0
            },
            {
                "date": "2026-05-30",
                "price": 339.33
            },
            {
                "date": "2026-06-07",
                "price": 381.75
            },
            {
                "date": "2026-06-14",
                "price": 549.0
            },
            {
                "date": "2026-07-06",
                "price": 274.5
            }
        ]
    },
    {
        "id": 369,
        "name": "Jugo En Polvo Tang Manzana 15 G",
        "price": 274.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Tang  Manzana 15 G_17.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 274.5
            }
        ]
    },
    {
        "id": 370,
        "name": "Jugo En Polvo Tang Limonada Dulce 15 G",
        "price": 274.5,
        "market": "terra",
        "category": "jugos",
        "image": "images\\changomas/Jugo En Polvo Tang Limonada Dulce 15 G_23.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 274.5
            }
        ]
    },
    {
        "id": 371,
        "name": "Leche Chocolatada Las Tres Niñas Libre De Sellos 200 Ml",
        "price": 949.5,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Chocolatada Las Tres Niñas Libre D_23.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 949.5
            }
        ]
    },
    {
        "id": 372,
        "name": "Leche Entera La Serenisima Fort C 200 Cc",
        "price": 974.25,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Entera La Serenisima Fort C 200 Cc_15.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 929.25
            },
            {
                "date": "2026-05-09",
                "price": 1239.0
            },
            {
                "date": "2026-06-07",
                "price": 929.25
            },
            {
                "date": "2026-07-06",
                "price": 1389.0
            },
            {
                "date": "2026-07-19",
                "price": 1299.0
            },
            {
                "date": "2026-07-25",
                "price": 974.25
            }
        ]
    },
    {
        "id": 373,
        "name": "Leche Descremada Check Larga Vida 1l",
        "price": 1499.0,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Descremada Check Larga Vida 1l_0.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 374,
        "name": "Leche Uat 0% Lactosa Tregar 1 Litro",
        "price": 1649.0,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Uat 0 Lactosa Tregar 1 Litro_21.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1649.0
            }
        ]
    },
    {
        "id": 375,
        "name": "Leche Entera Casanto 1 L",
        "price": 1869.0,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Entera Casanto 1 L_11.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1729.0
            },
            {
                "date": "2026-07-06",
                "price": 1999.0
            },
            {
                "date": "2026-07-19",
                "price": 1869.0
            }
        ]
    },
    {
        "id": 376,
        "name": "Leche Descremada Casanto 1 L",
        "price": 1869.0,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Descremada Casanto 1 L_14.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1729.0
            },
            {
                "date": "2026-07-06",
                "price": 1999.0
            },
            {
                "date": "2026-07-19",
                "price": 1869.0
            }
        ]
    },
    {
        "id": 377,
        "name": "Leche Descremada Ilolay 1 Lt",
        "price": 1911.75,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Descremada Ilolay 1 Lt_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1911.75
            }
        ]
    },
    {
        "id": 378,
        "name": "Leche Entera Las Tres Niñas Clásica 1 L",
        "price": 1964.25,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Entera Las Tres Niñas Clásica 1 L_2.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1964.25
            }
        ]
    },
    {
        "id": 379,
        "name": "Leche Las Tres Niñas Liviana 1 L",
        "price": 1964.25,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Las Tres Niñas Liviana 1 L_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1964.25
            }
        ]
    },
    {
        "id": 380,
        "name": "Leche Entera La Serenísima Multivitaminas 3% 1 L",
        "price": 1975.0,
        "market": "terra",
        "category": "leches",
        "image": "images\\changomas/Leche Entera La Serenísima Multivitamina_5.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 2009.0
            },
            {
                "date": "2026-05-09",
                "price": 1850.0
            },
            {
                "date": "2026-05-23",
                "price": 2009.0
            },
            {
                "date": "2026-06-07",
                "price": 1925.0
            },
            {
                "date": "2026-07-06",
                "price": 2199.0
            },
            {
                "date": "2026-07-19",
                "price": 1975.0
            }
        ]
    },
    {
        "id": 381,
        "name": "Esponja Check Ultrafina 1un",
        "price": 606.75,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja Check Ultrafina 1un_17.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 606.75
            }
        ]
    },
    {
        "id": 382,
        "name": "Esponja Esfrebom Teflon",
        "price": 719.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja Esfrebom Teflon_14.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 719.0
            }
        ]
    },
    {
        "id": 383,
        "name": "Esponja Fibra Bettanin",
        "price": 769.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja Fibra Bettanin_13.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 769.0
            }
        ]
    },
    {
        "id": 384,
        "name": "Esponja Multiuso Virulana 1 U",
        "price": 919.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja Multiuso Virulana 1 U_5.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 558.35
            },
            {
                "date": "2026-05-16",
                "price": 859.0
            },
            {
                "date": "2026-06-07",
                "price": 558.35
            },
            {
                "date": "2026-06-14",
                "price": 859.0
            },
            {
                "date": "2026-07-25",
                "price": 919.0
            }
        ]
    },
    {
        "id": 385,
        "name": "Esponja Mortimer Lisa 1 U",
        "price": 979.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja Mortimer Lisa 1 U_16.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 979.0
            }
        ]
    },
    {
        "id": 386,
        "name": "Esponja Sed Metal Hogar Acero Inoxidable",
        "price": 1019.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja Sed Metal Hogar Acero Inoxidable_2.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 577.85
            },
            {
                "date": "2026-05-16",
                "price": 889.0
            },
            {
                "date": "2026-05-23",
                "price": 666.75
            },
            {
                "date": "2026-05-30",
                "price": 889.0
            },
            {
                "date": "2026-06-07",
                "price": 577.85
            },
            {
                "date": "2026-06-14",
                "price": 889.0
            },
            {
                "date": "2026-06-21",
                "price": 666.75
            },
            {
                "date": "2026-07-06",
                "price": 1019.0
            }
        ]
    },
    {
        "id": 387,
        "name": "Rejilla Check Economica",
        "price": 1049.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Rejilla Check Economica_19.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1049.0
            }
        ]
    },
    {
        "id": 388,
        "name": "Trapo Piso Check Gris 47 X 50 Cm",
        "price": 1069.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Trapo Piso Check Gris 47 X 50 Cm_1.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1069.0
            }
        ]
    },
    {
        "id": 389,
        "name": "Esponja Vajilla Inoxidable Virulana 1 U",
        "price": 1069.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja Vajilla Inoxidable Virulana 1 U_3.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 649.35
            },
            {
                "date": "2026-05-16",
                "price": 999.0
            },
            {
                "date": "2026-06-07",
                "price": 649.35
            },
            {
                "date": "2026-06-14",
                "price": 999.0
            },
            {
                "date": "2026-07-25",
                "price": 1069.0
            }
        ]
    },
    {
        "id": 390,
        "name": "Esponja De Acero Inoxidable Mortimer 1 Un",
        "price": 1119.0,
        "market": "terra",
        "category": "limpieza",
        "image": "images\\changomas/Esponja De Acero Inoxidable Mortimer 1 U_4.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1119.0
            }
        ]
    },
    {
        "id": 391,
        "name": "Jabón En Barra Baby Dove Humectación Sensible 75 G",
        "price": 2399.0,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Jabón En Barra Baby Dove Humectación Sen_2.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 2299.0
            },
            {
                "date": "2026-05-09",
                "price": 1609.3
            },
            {
                "date": "2026-05-23",
                "price": 2299.0
            },
            {
                "date": "2026-06-21",
                "price": 1609.3
            },
            {
                "date": "2026-07-06",
                "price": 1679.3
            },
            {
                "date": "2026-07-25",
                "price": 2399.0
            }
        ]
    },
    {
        "id": 392,
        "name": "Toallitas Húmedas Con Q-Soft Aloe Y Vitamina E 50 U",
        "price": 2879.0,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallitas Húmedas Con Q-Soft Aloe Y Vita_14.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 2879.0
            },
            {
                "date": "2026-06-21",
                "price": 1727.4
            },
            {
                "date": "2026-07-06",
                "price": 1871.35
            },
            {
                "date": "2026-07-19",
                "price": 2879.0
            }
        ]
    },
    {
        "id": 393,
        "name": "Toallitas Humedas Antibacterial Q-Soft 30 Un",
        "price": 3149.0,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallitas Humedas Antibacterial Q-Soft 3_6.jpg",
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
            },
            {
                "date": "2026-07-19",
                "price": 3149.0
            }
        ]
    },
    {
        "id": 394,
        "name": "Toallitas Húmedas Huggies Triple Protección 48un",
        "price": 3164.85,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallitas Húmedas Huggies Triple Protecc_3.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3164.85
            }
        ]
    },
    {
        "id": 395,
        "name": "Toallitas Húmedas Huggies 48 U",
        "price": 3444.35,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallitas Húmedas Huggies 48 U_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3444.35
            }
        ]
    },
    {
        "id": 396,
        "name": "Toallas Humedas Soul Baby Con Aloe Y Vit E 50un",
        "price": 3499.0,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallas Humedas Soul Baby Con Aloe Y Vit_0.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1999.0
            },
            {
                "date": "2026-05-09",
                "price": 3499.0
            },
            {
                "date": "2026-05-23",
                "price": 2099.4
            },
            {
                "date": "2026-05-30",
                "price": 1749.5
            },
            {
                "date": "2026-06-07",
                "price": 1749.0
            },
            {
                "date": "2026-06-14",
                "price": 3499.0
            },
            {
                "date": "2026-06-21",
                "price": 2099.4
            },
            {
                "date": "2026-07-06",
                "price": 2999.0
            },
            {
                "date": "2026-07-19",
                "price": 1749.0
            },
            {
                "date": "2026-07-25",
                "price": 3499.0
            }
        ]
    },
    {
        "id": 397,
        "name": "Toallas Humedas Soul Baby Animales Fantasticos 45un",
        "price": 3499.0,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallas Humedas Soul Baby Animales Fanta_9.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 3499.0
            }
        ]
    },
    {
        "id": 398,
        "name": "Toallitas Húmedas Toddler Deluxe Sin Perfume 48 U",
        "price": 4669.0,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallitas Húmedas Toddler Deluxe Sin Per_1.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 3126.75
            },
            {
                "date": "2026-08-03",
                "price": 4669.0
            }
        ]
    },
    {
        "id": 399,
        "name": "Toallitas Húmedas Toddler Deluxe Aloe Vera 48 U",
        "price": 4669.0,
        "market": "terra",
        "category": "pañales",
        "image": "images\\changomas/Toallitas Húmedas Toddler Deluxe Aloe Ve_5.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 2501.4
            },
            {
                "date": "2026-07-06",
                "price": 4169.0
            },
            {
                "date": "2026-07-19",
                "price": 3126.75
            },
            {
                "date": "2026-08-03",
                "price": 4669.0
            }
        ]
    },
    {
        "id": 400,
        "name": "Papel Higiénico Sol Mayor Simple Hoja 4 U 30 M",
        "price": 1079.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higiénico Sol Mayor Simple Hoja 4 _22.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1799.0
            },
            {
                "date": "2026-06-21",
                "price": 1079.4
            },
            {
                "date": "2026-07-19",
                "price": 1799.0
            },
            {
                "date": "2026-08-03",
                "price": 1079.4
            }
        ]
    },
    {
        "id": 401,
        "name": "Papel Higiénico Aliada Simple Hoja 30 M 4u",
        "price": 1139.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higiénico Aliada Simple Hoja 30 M _2.jpg",
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
            },
            {
                "date": "2026-05-23",
                "price": 1073.4
            },
            {
                "date": "2026-05-30",
                "price": 1899.0
            },
            {
                "date": "2026-06-21",
                "price": 1139.4
            },
            {
                "date": "2026-07-19",
                "price": 1899.0
            },
            {
                "date": "2026-08-03",
                "price": 1139.4
            }
        ]
    },
    {
        "id": 402,
        "name": "Papel Hgiénico Check Simple Hoja 30 M X 10 Cm 4u",
        "price": 1283.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Hgiénico Check Simple Hoja 30 M X _18.jpg",
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
            },
            {
                "date": "2026-05-23",
                "price": 1211.4
            },
            {
                "date": "2026-05-30",
                "price": 2139.0
            },
            {
                "date": "2026-06-21",
                "price": 1283.4
            },
            {
                "date": "2026-07-19",
                "price": 2139.0
            },
            {
                "date": "2026-08-03",
                "price": 1283.4
            }
        ]
    },
    {
        "id": 403,
        "name": "Papel Higienico Campanita Soft Simple Hoja 4 U 30 Mt",
        "price": 1409.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higienico Campanita Soft Simple Ho_20.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 2349.0
            },
            {
                "date": "2026-06-21",
                "price": 1409.4
            },
            {
                "date": "2026-07-19",
                "price": 2349.0
            },
            {
                "date": "2026-07-25",
                "price": 1599.0
            },
            {
                "date": "2026-08-03",
                "price": 1409.4
            }
        ]
    },
    {
        "id": 404,
        "name": "Papel Higiénico Higienol Fresh Hoja Simple 30 M 4 U",
        "price": 1559.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higiénico Higienol Fresh Hoja Simp_1.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1391.4
            },
            {
                "date": "2026-07-19",
                "price": 1739.25
            },
            {
                "date": "2026-07-25",
                "price": 1499.0
            },
            {
                "date": "2026-08-03",
                "price": 1559.4
            }
        ]
    },
    {
        "id": 405,
        "name": "Papel Higiénico Felpita Hoja Simple 30 M 4 U",
        "price": 1559.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higiénico Felpita Hoja Simple 30 M_13.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 2399.0
            },
            {
                "date": "2026-05-09",
                "price": 1699.0
            },
            {
                "date": "2026-05-16",
                "price": 2599.0
            },
            {
                "date": "2026-05-23",
                "price": 1559.4
            },
            {
                "date": "2026-05-30",
                "price": 2599.0
            },
            {
                "date": "2026-06-14",
                "price": 1799.0
            },
            {
                "date": "2026-06-21",
                "price": 1559.4
            },
            {
                "date": "2026-07-19",
                "price": 2599.0
            },
            {
                "date": "2026-08-03",
                "price": 1559.4
            }
        ]
    },
    {
        "id": 406,
        "name": "Papel Higienico Elegante Blanco Hoja Simple 4u",
        "price": 1601.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higienico Elegante Blanco Hoja Sim_7.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1601.4
            },
            {
                "date": "2026-07-19",
                "price": 2669.0
            },
            {
                "date": "2026-07-25",
                "price": 1734.85
            },
            {
                "date": "2026-08-03",
                "price": 1601.4
            }
        ]
    },
    {
        "id": 407,
        "name": "Papel Higiénico Felpita Premium Doble Hoja 4 U 20 M",
        "price": 1799.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higiénico Felpita Premium Doble Ho_9.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1799.4
            }
        ]
    },
    {
        "id": 408,
        "name": "Papel Higienico Elegante Simple Hoja 30 M 6 U",
        "price": 2129.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higienico Elegante Simple Hoja 30 _11.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2129.4
            },
            {
                "date": "2026-07-19",
                "price": 2484.3
            },
            {
                "date": "2026-07-25",
                "price": 2306.85
            },
            {
                "date": "2026-08-03",
                "price": 2129.4
            }
        ]
    },
    {
        "id": 409,
        "name": "Papel Higiénico Check Doble Hoja 30 M X 10 Cm 4u",
        "price": 2387.4,
        "market": "terra",
        "category": "papeles",
        "image": "images\\changomas/Papel Higiénico Check Doble Hoja 30 M X _16.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2387.4
            }
        ]
    },
    {
        "id": 410,
        "name": "Pollo 1/4 Trasero Congelado 2 Kg",
        "price": 3789.0,
        "market": "terra",
        "category": "all",
        "image": "images\\changomas/Pollo 14 Trasero Congelado 2 Kg_1.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 4990.0
            },
            {
                "date": "2026-05-09",
                "price": 5190.0
            },
            {
                "date": "2026-05-30",
                "price": 3889.0
            },
            {
                "date": "2026-06-07",
                "price": 5190.0
            },
            {
                "date": "2026-08-03",
                "price": 3789.0
            }
        ]
    },
    {
        "id": 411,
        "name": "Pollo Entero Congelado 3 Kg",
        "price": 3789.0,
        "market": "terra",
        "category": "all",
        "image": "images\\changomas/Pollo Entero Congelado 3 Kg_2.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 3789.0
            },
            {
                "date": "2026-07-06",
                "price": 2989.0
            },
            {
                "date": "2026-07-19",
                "price": 3789.0
            },
            {
                "date": "2026-07-25",
                "price": 2989.0
            },
            {
                "date": "2026-08-03",
                "price": 3789.0
            }
        ]
    },
    {
        "id": 412,
        "name": "Suprema De Pollo Congelada 2 Kg",
        "price": 11900.0,
        "market": "terra",
        "category": "all",
        "image": "images\\changomas/Suprema De Pollo Congelada 2 Kg_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 11900.0
            },
            {
                "date": "2026-07-19",
                "price": 7599.0
            },
            {
                "date": "2026-07-25",
                "price": 11900.0
            }
        ]
    },
    {
        "id": 413,
        "name": "Queso Rallado La Quesera 100 G",
        "price": 1799.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Rallado La Quesera 100 G_3.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1499.0
            },
            {
                "date": "2026-05-09",
                "price": 2099.0
            },
            {
                "date": "2026-05-16",
                "price": 1499.0
            },
            {
                "date": "2026-05-23",
                "price": 1574.25
            },
            {
                "date": "2026-05-30",
                "price": 1499.0
            },
            {
                "date": "2026-06-07",
                "price": 2099.0
            },
            {
                "date": "2026-06-14",
                "price": 1499.0
            },
            {
                "date": "2026-06-21",
                "price": 2099.0
            },
            {
                "date": "2026-07-19",
                "price": 2249.0
            },
            {
                "date": "2026-08-03",
                "price": 1799.0
            }
        ]
    },
    {
        "id": 414,
        "name": "Queso Rallado La Serenísima Reggianito 35 G",
        "price": 1819.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Rallado La Serenísima Reggianito 3_16.jpg",
        "history": [
            {
                "date": "2026-04-25",
                "price": 1669.0
            },
            {
                "date": "2026-05-02",
                "price": 1729.0
            },
            {
                "date": "2026-07-06",
                "price": 1819.0
            },
            {
                "date": "2026-07-19",
                "price": 1546.15
            },
            {
                "date": "2026-07-25",
                "price": 1819.0
            }
        ]
    },
    {
        "id": 415,
        "name": "Queso Crema Check 290 G",
        "price": 1999.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Crema Check 290 G_10.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1899.0
            },
            {
                "date": "2026-06-14",
                "price": 2679.0
            },
            {
                "date": "2026-06-21",
                "price": 1741.35
            },
            {
                "date": "2026-07-06",
                "price": 2679.0
            },
            {
                "date": "2026-07-19",
                "price": 1899.0
            },
            {
                "date": "2026-07-25",
                "price": 2679.0
            },
            {
                "date": "2026-08-03",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 416,
        "name": "Queso Crema Check Descremado 290 G",
        "price": 1999.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Crema Check Descremado 290 G_17.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2679.0
            },
            {
                "date": "2026-07-19",
                "price": 1899.0
            },
            {
                "date": "2026-07-25",
                "price": 2679.0
            },
            {
                "date": "2026-08-03",
                "price": 1999.0
            }
        ]
    },
    {
        "id": 417,
        "name": "Queso Untable Tonadita Gruyere 180 G",
        "price": 2849.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Untable Tonadita Gruyere 180 G_21.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1949.25
            },
            {
                "date": "2026-05-02",
                "price": 1899.0
            },
            {
                "date": "2026-05-09",
                "price": 1949.25
            },
            {
                "date": "2026-05-16",
                "price": 1949.0
            },
            {
                "date": "2026-05-23",
                "price": 2024.25
            },
            {
                "date": "2026-06-21",
                "price": 2699.0
            },
            {
                "date": "2026-07-19",
                "price": 2849.0
            }
        ]
    },
    {
        "id": 418,
        "name": "Queso Untable Tonadita Jamón 180 G",
        "price": 2849.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Untable Tonadita Jamón 180 G_22.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1949.25
            },
            {
                "date": "2026-05-02",
                "price": 1899.0
            },
            {
                "date": "2026-05-09",
                "price": 1949.25
            },
            {
                "date": "2026-05-16",
                "price": 1949.0
            },
            {
                "date": "2026-05-23",
                "price": 2024.25
            },
            {
                "date": "2026-06-21",
                "price": 2699.0
            },
            {
                "date": "2026-07-19",
                "price": 2849.0
            }
        ]
    },
    {
        "id": 419,
        "name": "Queso Untable La Serenísima Cremón Light 280 G",
        "price": 2999.25,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Untable La Serenísima Cremón Light_7.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2999.25
            }
        ]
    },
    {
        "id": 420,
        "name": "Queso Crema Tonadita Cremette Reducido 290 G",
        "price": 3399.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Crema Tonadita Cremette Reducido 2_19.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 3199.0
            },
            {
                "date": "2026-06-21",
                "price": 2079.35
            },
            {
                "date": "2026-07-06",
                "price": 3199.0
            },
            {
                "date": "2026-07-19",
                "price": 3399.0
            },
            {
                "date": "2026-07-25",
                "price": 2209.35
            },
            {
                "date": "2026-08-03",
                "price": 3399.0
            }
        ]
    },
    {
        "id": 421,
        "name": "Queso Crema La Paulina Tradicional 290 G",
        "price": 3429.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Crema La Paulina Tradicional 290 G_1.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2571.75
            },
            {
                "date": "2026-08-03",
                "price": 3429.0
            }
        ]
    },
    {
        "id": 422,
        "name": "Queso Crema La Paulina Light 290 G",
        "price": 3429.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Queso Crema La Paulina Light 290 G_14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2571.75
            },
            {
                "date": "2026-08-03",
                "price": 3429.0
            }
        ]
    },
    {
        "id": 423,
        "name": "Pimienta Negra Alicante Molida Sin Tacc 25gr",
        "price": 1026.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Pimienta Negra Alicante Molida Sin Tacc _9.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1026.0
            }
        ]
    },
    {
        "id": 424,
        "name": "Sal Fina Aliada 500 G",
        "price": 1059.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Sal Fina Aliada 500 G_2.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 799.0
            },
            {
                "date": "2026-05-09",
                "price": 1059.0
            },
            {
                "date": "2026-07-19",
                "price": 794.25
            },
            {
                "date": "2026-07-25",
                "price": 1059.0
            }
        ]
    },
    {
        "id": 425,
        "name": "Pimienta Negra La Campagnola Molida 23 G",
        "price": 1139.33,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Pimienta Negra La Campagnola Molida 23 G_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1139.33
            }
        ]
    },
    {
        "id": 426,
        "name": "Pimienta Negra Molida Dos Anclas 25 Gr",
        "price": 1139.33,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Pimienta Negra Molida Dos Anclas 25 Gr_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1139.33
            }
        ]
    },
    {
        "id": 427,
        "name": "Sal Check Fina 500 G",
        "price": 1159.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Sal Check Fina 500 G_10.jpg",
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
            },
            {
                "date": "2026-07-19",
                "price": 869.25
            },
            {
                "date": "2026-07-25",
                "price": 1159.0
            }
        ]
    },
    {
        "id": 428,
        "name": "Pimienta Blanca Alicante En Granos Sin Tacc 25gr",
        "price": 1372.67,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Pimienta Blanca Alicante En Granos Sin T_17.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1372.67
            }
        ]
    },
    {
        "id": 429,
        "name": "Sal Entrefina Parrillera Dos Anclas 500 Gr",
        "price": 1419.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Sal Entrefina Parrillera Dos Anclas 500 _6.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1369.0
            },
            {
                "date": "2026-06-21",
                "price": 1419.0
            },
            {
                "date": "2026-07-19",
                "price": 1064.25
            },
            {
                "date": "2026-07-25",
                "price": 1419.0
            }
        ]
    },
    {
        "id": 430,
        "name": "Sal Gruesa Dos Anclas 500 Gr",
        "price": 1459.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Sal Gruesa Dos Anclas 500 Gr_7.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1094.25
            },
            {
                "date": "2026-07-25",
                "price": 1459.0
            }
        ]
    },
    {
        "id": 431,
        "name": "Sal Fina Dos Anclas 500 Gr",
        "price": 1489.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Sal Fina Dos Anclas 500 Gr_1.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1116.75
            },
            {
                "date": "2026-07-25",
                "price": 1039.0
            },
            {
                "date": "2026-08-03",
                "price": 1489.0
            }
        ]
    },
    {
        "id": 432,
        "name": "Sal Gruesa Paquete Celusal 500 Gr",
        "price": 1579.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Sal Gruesa Paquete Celusal 500 Gr_14.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1479.0
            },
            {
                "date": "2026-07-06",
                "price": 1109.25
            },
            {
                "date": "2026-07-25",
                "price": 1579.0
            }
        ]
    },
    {
        "id": 433,
        "name": "Palitos Aliada Salados 120 G",
        "price": 1289.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Palitos Aliada Salados 120 G_5.jpg",
        "history": [
            {
                "date": "2026-07-19",
                "price": 859.33
            },
            {
                "date": "2026-07-25",
                "price": 1289.0
            }
        ]
    },
    {
        "id": 434,
        "name": "Galletita Pizza Saladix 100 Gr",
        "price": 1569.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Galletita Pizza Saladix 100 Gr_11.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1569.0
            }
        ]
    },
    {
        "id": 435,
        "name": "Galletita Jamon Saladix 100 Gr",
        "price": 1569.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Galletita Jamon Saladix 100 Gr_12.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1046.0
            },
            {
                "date": "2026-05-09",
                "price": 1569.0
            },
            {
                "date": "2026-06-07",
                "price": 1046.0
            },
            {
                "date": "2026-06-14",
                "price": 1569.0
            },
            {
                "date": "2026-07-06",
                "price": 1046.0
            },
            {
                "date": "2026-07-25",
                "price": 1569.0
            }
        ]
    },
    {
        "id": 436,
        "name": "Palitos Krachitos Salados 110g",
        "price": 1809.0,
        "market": "terra",
        "category": "sal",
        "image": "images\\changomas/Palitos Krachitos Salados 110g_4.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1119.33
            },
            {
                "date": "2026-05-09",
                "price": 1679.0
            },
            {
                "date": "2026-06-07",
                "price": 1119.33
            },
            {
                "date": "2026-06-14",
                "price": 1679.0
            },
            {
                "date": "2026-07-06",
                "price": 1206.0
            },
            {
                "date": "2026-07-25",
                "price": 1809.0
            }
        ]
    },
    {
        "id": 437,
        "name": "Papas Fritas Quento Queso Crema Y Ciboulette 82 G",
        "price": 2639.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Papas Fritas Quento Queso Crema Y Ciboul_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2639.0
            }
        ]
    },
    {
        "id": 438,
        "name": "Papas Fritas Quento Jamón Serrano 82 G",
        "price": 2639.0,
        "market": "terra",
        "category": "snacks",
        "image": "images\\changomas/Papas Fritas Quento Jamón Serrano 82 G_23.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1719.33
            },
            {
                "date": "2026-07-25",
                "price": 2639.0
            }
        ]
    },
    {
        "id": 439,
        "name": "Papas Fritas Tubo Aliada Sabor Original 140 G",
        "price": 2999.0,
        "market": "terra",
        "category": "snacks",
        "image": "images\\changomas/Papas Fritas Tubo Aliada Sabor Original _2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2999.25
            },
            {
                "date": "2026-08-03",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 440,
        "name": "Papas Fritas Tubo Aliada Sabor Crema Y Cebolla 140 G",
        "price": 2999.0,
        "market": "terra",
        "category": "snacks",
        "image": "images\\changomas/Papas Fritas Tubo Aliada Sabor Crema Y C_13.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2999.25
            },
            {
                "date": "2026-08-03",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 441,
        "name": "Galletita Club Social Sabor Original 144gr",
        "price": 2999.0,
        "market": "terra",
        "category": "snacks",
        "image": "images\\changomas/Galletita Club Social Sabor Original 144_14.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1999.33
            },
            {
                "date": "2026-05-09",
                "price": 2999.0
            },
            {
                "date": "2026-06-07",
                "price": 1999.33
            },
            {
                "date": "2026-06-14",
                "price": 2999.0
            },
            {
                "date": "2026-07-06",
                "price": 1999.33
            },
            {
                "date": "2026-07-25",
                "price": 2999.0
            }
        ]
    },
    {
        "id": 442,
        "name": "Galletitas Snacks Kesitas Queso 250 G",
        "price": 3239.0,
        "market": "terra",
        "category": "fiambres",
        "image": "images\\changomas/Galletitas Snacks Kesitas Queso 250 G_17.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 3239.0
            },
            {
                "date": "2026-07-06",
                "price": 2159.33
            },
            {
                "date": "2026-07-25",
                "price": 3239.0
            }
        ]
    },
    {
        "id": 443,
        "name": "Rocío Vegetal de Aceite Girasol Natura x 126 cc.",
        "price": 3637.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Rocío_Vegetal_de_Aceite_Girasol_Natura_x_126_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3637.0
            }
        ]
    },
    {
        "id": 444,
        "name": "Rocío Vegetal La Anónima x 120 g.",
        "price": 3760.0,
        "market": "aura",
        "category": "aceite",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3760.0
            }
        ]
    },
    {
        "id": 445,
        "name": "Aceite de Girasol Legitimo x 900 cc.",
        "price": 4150.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Aceite_de_Girasol_Cañuelas_x_900_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4150.0
            }
        ]
    },
    {
        "id": 446,
        "name": "Aceite de Girasol La Anónima x 900 cc.",
        "price": 4160.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Aceite_de_Girasol_La_Anónima_x_900_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4160.0
            }
        ]
    },
    {
        "id": 447,
        "name": "Aceite de Maíz Mazola x 900 cc.",
        "price": 4350.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Aceite_de_Maíz_Mazola_x_900_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4350.0
            }
        ]
    },
    {
        "id": 448,
        "name": "Aceite de Girasol Natura x 900 cc.",
        "price": 4750.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Aceite_de_Girasol_Natura_x_900_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4750.0
            }
        ]
    },
    {
        "id": 449,
        "name": "Rocío Vegetal Oliva Natura x 120 cc.",
        "price": 4762.0,
        "market": "aura",
        "category": "aceite",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4762.0
            }
        ]
    },
    {
        "id": 450,
        "name": "Aceite de Oliva Extra Virgen Lira x 250 cc.",
        "price": 6020.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Aceite_de_Oliva_Extra_Virgen_cAjo_La_Toscana_x_250_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 6020.0
            }
        ]
    },
    {
        "id": 451,
        "name": "Aceite de Girasol Natura x 1,5 Lt.",
        "price": 7500.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Aceite_de_Girasol_Natura_x_1,5_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 7500.0
            }
        ]
    },
    {
        "id": 452,
        "name": "Aceite de Oliva Extra Virgen Vidrio La Anónima x 250 cc.",
        "price": 7720.0,
        "market": "aura",
        "category": "aceite",
        "image": "images\\laanonima/Aceite_de_Oliva_Extra_Virgen_La_Toscana_Vidrio_x_250_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 7720.0
            }
        ]
    },
    {
        "id": 453,
        "name": "Agua Mineral s/Gas Villa del Sur x 600 cc.",
        "price": 1575.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_Mineral_sGas_Villa_del_Sur_x_600_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1575.0
            }
        ]
    },
    {
        "id": 454,
        "name": "Agua Mineral sin gas Glaciar x 500 cc.",
        "price": 1592.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_Mineral_sin_gas_Glaciar_x_500_cc..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 2350.0
            },
            {
                "date": "2026-07-19",
                "price": 1527.0
            },
            {
                "date": "2026-08-03",
                "price": 1592.0
            }
        ]
    },
    {
        "id": 455,
        "name": "Agua Mineral sin gas Cellier x 2 lt.",
        "price": 1650.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_Mineral_sin_gas_Cellier_x_2_lt..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2100.0
            },
            {
                "date": "2026-08-03",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 456,
        "name": "Agua Glaciar sin gas Botella 750cc x1",
        "price": 1852.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_Glaciar_sin_gas_Botella_750cc_x1.webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1787.0
            },
            {
                "date": "2026-08-03",
                "price": 1852.0
            }
        ]
    },
    {
        "id": 457,
        "name": "Agua Eco de los Andes sin gas Botella 850cc x1",
        "price": 1852.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_Glaciar_sin_gas_Botella_2Lt._x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1852.0
            }
        ]
    },
    {
        "id": 458,
        "name": "Agua Eco de los Andes sin gas Botella 1Lt. x1",
        "price": 1950.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_Glaciar_sin_gas_Botella_2Lt._x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 459,
        "name": "Agua Mineral s/Gas Villa del Sur x 1,65 Lt.",
        "price": 1987.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_Mineral_sGas_Villa_del_Sur_x_1,65_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1987.0
            }
        ]
    },
    {
        "id": 460,
        "name": "Agua S/ Gas Baja En Sodio Ser x 1,5 Lt.",
        "price": 2065.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_sin_Gas_Baja_en_Sodio_La_Anónima_x_6,5_Lt..webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1917.0
            },
            {
                "date": "2026-08-03",
                "price": 2065.0
            }
        ]
    },
    {
        "id": 461,
        "name": "Agua de Mesa sin gas Villa Del Sur x 2,25 Lt.",
        "price": 2175.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_de_Mesa_sin_gas_Villa_Del_Sur_x_2,25_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 462,
        "name": "Agua sin Gas Bidón Villa Del Sur x 6,2 Lt.",
        "price": 3965.0,
        "market": "aura",
        "category": "aguas",
        "image": "images\\laanonima/Agua_de_Mesa_sin_gas_Villa_Del_Sur_x_2,25_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3965.0
            }
        ]
    },
    {
        "id": 463,
        "name": "Arroz Largo Fino Bolsa Lucchetti x 500 g.",
        "price": 980.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Grano_Largo_Fino_Molinos_Ala_x_500_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 980.0
            }
        ]
    },
    {
        "id": 464,
        "name": "Arroz Parboilizado Bolsa Lucchetti x 500 g.",
        "price": 1050.0,
        "market": "aura",
        "category": "arroz",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 465,
        "name": "Arroz Grano Largo Fino Molinos Ala x 500 g.",
        "price": 1050.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Grano_Largo_Fino_Molinos_Ala_x_500_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1050.0
            }
        ]
    },
    {
        "id": 466,
        "name": "Arroz Dorado Natural Molinos Ala x 500 g.",
        "price": 1162.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Dorado_Natural_Molinos_Ala_x_500_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1162.0
            }
        ]
    },
    {
        "id": 467,
        "name": "Arroz Integral Molinos Ala x 500 g.",
        "price": 1162.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Dorado_Natural_Molinos_Ala_x_500_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1162.0
            }
        ]
    },
    {
        "id": 468,
        "name": "Arroz Largo Fino Best x 1 Kg.",
        "price": 1600.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Grano_Largo_Fino_Molinos_Ala_x_1_kg..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 469,
        "name": "Arroz Doble Carolina Molinos Ala x 500 g.",
        "price": 1650.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Dorado_Natural_Molinos_Ala_x_500_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1650.0
            }
        ]
    },
    {
        "id": 470,
        "name": "Arroz Grano Largo Fino Lucchetti x 1000 g.",
        "price": 1785.0,
        "market": "aura",
        "category": "arroz",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1785.0
            }
        ]
    },
    {
        "id": 471,
        "name": "Arroz Ita Caabo Largo Fino Bolsa Molinos Ala x 1 Kg.",
        "price": 1912.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Grano_Largo_Fino_Molinos_Ala_x_1_kg..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1912.0
            }
        ]
    },
    {
        "id": 472,
        "name": "Arroz Parboilizado Bolsa Lucchetti x 1 Kg.",
        "price": 1960.0,
        "market": "aura",
        "category": "arroz",
        "image": "images\\laanonima/Arroz_Parbolizado_Molinos_Ala_Bolsa_x_1_kg..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1960.0
            }
        ]
    },
    {
        "id": 473,
        "name": "Carne Picada Envasado al Vacío Best x 500 g.",
        "price": 7980.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Carne_Picada_Envasado_al_Vacío_Best_x_500_g..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 6790.0
            },
            {
                "date": "2026-06-25",
                "price": 7980.0
            }
        ]
    },
    {
        "id": 474,
        "name": "Carne Picada E/V Estancias LA x 500 g.",
        "price": 10210.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Carne_Picada_EV_Estancias_LA_x_500_g..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 8690.0
            },
            {
                "date": "2026-06-25",
                "price": 10210.0
            }
        ]
    },
    {
        "id": 475,
        "name": "Preparado para Medallones Estancias La x 500 g.",
        "price": 11740.0,
        "market": "aura",
        "category": "carnes",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-25",
                "price": 11740.0
            }
        ]
    },
    {
        "id": 476,
        "name": "Carne Picada M. E/V Estancias LA x 500 g.",
        "price": 12790.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Carne_Picada_M._EV_Estancias_LA_x_500_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 12790.0
            }
        ]
    },
    {
        "id": 477,
        "name": "Milanesa de Carne La Anónima (Kg)",
        "price": 14290.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Milanesa_de_Carne_Congelada_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 14290.0
            }
        ]
    },
    {
        "id": 478,
        "name": "Tapa de Asado Envasado al Vacio Estancias La Anónima (Kg)",
        "price": 18990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Tapa_de_Asado_Envasado_al_Vacio_Estancias_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 18990.0
            }
        ]
    },
    {
        "id": 479,
        "name": "Vacio Congelado Estancias La x (Kg)",
        "price": 20990.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Asado_con_Hueso_Congelado_Estancias_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 20990.0
            }
        ]
    },
    {
        "id": 480,
        "name": "Carnaza de Paleta Fraccionada/F E/V Estancias LA (Kg)",
        "price": 21440.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Carnaza_de_Paleta_FraccionadaF_EV_Estancias_LA_(Kg).webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 20900.0
            },
            {
                "date": "2026-08-03",
                "price": 21440.0
            }
        ]
    },
    {
        "id": 481,
        "name": "Cuadrada Feteada E/V Best (Kg)",
        "price": 22190.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Cuadrada_Feteada_EV_Best_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 22190.0
            }
        ]
    },
    {
        "id": 482,
        "name": "Nalga s/ Tapa Feteada E/V Estancias LA (Kg)",
        "price": 26330.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Nalga_s_Tapa_Feteada_EV_Estancias_LA_(Kg).webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 25860.0
            },
            {
                "date": "2026-08-03",
                "price": 26330.0
            }
        ]
    },
    {
        "id": 483,
        "name": "Cerveza Quilmes 0.0% Lata 473cc x1",
        "price": 1380.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Quilmes_0.0%_Lata_473cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1380.0
            }
        ]
    },
    {
        "id": 484,
        "name": "Cerveza Lata Remix Schneider x 473 cc.",
        "price": 1960.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Schneider_Lata_x_473_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1960.0
            }
        ]
    },
    {
        "id": 485,
        "name": "Cerveza Quilmes Hinchada Lata 473cc x1",
        "price": 2030.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Quilmes_0.0%_Lata_473cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2030.0
            }
        ]
    },
    {
        "id": 486,
        "name": "Cerveza Quilmes Stout Lata 473cc x1",
        "price": 2175.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Quilmes_0.0%_Lata_473cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 487,
        "name": "Cerveza Quilmes IPA Lata 473cc x1",
        "price": 2175.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Andes_Origen_IPA_Andina_Lata_473cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 488,
        "name": "Cerveza Brahma Chopp Lata 473cc x1",
        "price": 2175.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Andes_Origen_IPA_Andina_Lata_473cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 489,
        "name": "Cerveza Warsteiner Lata x 473 cc.",
        "price": 2307.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Warsteiner_Lata_x_473_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2307.0
            }
        ]
    },
    {
        "id": 490,
        "name": "Cerveza Porrón sin Alcohol Heineken x 330 cc.",
        "price": 2512.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Long_Neck_Heineken_Pack_x_6_Latas_de_330_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2512.0
            }
        ]
    },
    {
        "id": 491,
        "name": "Cerveza Lata Ipa Sin Alcohol Antares x 473 cc",
        "price": 2730.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Andes_Origen_IPA_Andina_Lata_473cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2730.0
            }
        ]
    },
    {
        "id": 492,
        "name": "Cerveza Schneider Lata x 710 cc.",
        "price": 2730.0,
        "market": "aura",
        "category": "cervezas",
        "image": "images\\laanonima/Cerveza_Imperial_Lata_x_710_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2730.0
            }
        ]
    },
    {
        "id": 493,
        "name": "Dr. Lemon Vodka s/ Tacc x 275 cc.",
        "price": 1066.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Dr._Lemon_Vodka_s_Tacc_x_275_cc..webp",
        "history": [
            {
                "date": "2026-07-05",
                "price": 1600.0
            },
            {
                "date": "2026-07-19",
                "price": 1200.0
            },
            {
                "date": "2026-08-03",
                "price": 1066.0
            }
        ]
    },
    {
        "id": 494,
        "name": "Amargo Serrano La Anónima x 1,5 Lt.",
        "price": 1360.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Amargo_Serrano_Terma_Pet_Pack_Ahorro_x_1,75_Lt..webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1400.0
            },
            {
                "date": "2026-08-03",
                "price": 1360.0
            }
        ]
    },
    {
        "id": 495,
        "name": "Amargo Pomelo Rosado La Anónima x 1,5 Lt.",
        "price": 1360.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Amargo_Pomelo_Rosado_sAzúcar_Terma_x_1,35_Lt..webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1400.0
            },
            {
                "date": "2026-08-03",
                "price": 1360.0
            }
        ]
    },
    {
        "id": 496,
        "name": "Amargo Citrus La Anónima x 1,5 Lt.",
        "price": 1360.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Amargo_Citrus_Pet_Terma_x_1,75_Lt..webp",
        "history": [
            {
                "date": "2026-07-05",
                "price": 1750.0
            },
            {
                "date": "2026-07-19",
                "price": 1400.0
            },
            {
                "date": "2026-08-03",
                "price": 1360.0
            }
        ]
    },
    {
        "id": 497,
        "name": "Amargo Cordillerano La Anónima x 1,5 Lt.",
        "price": 1360.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1400.0
            },
            {
                "date": "2026-08-03",
                "price": 1360.0
            }
        ]
    },
    {
        "id": 498,
        "name": "Fernet con Pomelo 1882 x 473 cc.",
        "price": 1575.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Fernet_1882_x_750_cc..webp",
        "history": [
            {
                "date": "2026-07-05",
                "price": 2100.0
            },
            {
                "date": "2026-07-19",
                "price": 1575.0
            }
        ]
    },
    {
        "id": 499,
        "name": "Amargo Blanco Tres Torres Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Amargo_Blanco_Tres_Torres_Pet_x_1,5_lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 500,
        "name": "Amargo Serrano Tres Torres Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Amargo_Serrano_Tres_Torres_Pet_x_1,5_lt..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1700.0
            },
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 501,
        "name": "Amargo Pomelo Rosado Tres Torres x 1,5 Lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Amargo_Blanco_Tres_Torres_Pet_x_1,5_lt..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 1700.0
            },
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 502,
        "name": "Amargo Tres Torres Limón Pet x 1,5 lt.",
        "price": 1600.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Amargo_Tres_Torres_Limón_Pet_x_1,5_lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 503,
        "name": "Leberwurst Cabaña Argentina x 200 g.",
        "price": 2050.0,
        "market": "aura",
        "category": "fiambres",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 504,
        "name": "Salchichón Mini con Jamón Cabaña Argentina x 240 g.",
        "price": 2900.0,
        "market": "aura",
        "category": "sal",
        "image": "images\\laanonima/Salchichón_Mini_tipo_Primavera_Cabaña_Argentina_x_240_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 505,
        "name": "Salchichón Mini tipo Primavera Cabaña Argentina x 240 g.",
        "price": 2900.0,
        "market": "aura",
        "category": "sal",
        "image": "images\\laanonima/Salchichón_Mini_tipo_Primavera_Cabaña_Argentina_x_240_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2900.0
            }
        ]
    },
    {
        "id": 506,
        "name": "Fiambre Cocido de Cerdo Feteado Zur Linde x 200 g.",
        "price": 3500.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Fiambre_Cocido_de_Cerdo_Feteado_Zur_Linde_x_200_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3500.0
            }
        ]
    },
    {
        "id": 507,
        "name": "Mortadela Mini Cabaña Argentina x 300 g.",
        "price": 3650.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Mortadela_Mini_Cabaña_Argentina_x_300_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3650.0
            }
        ]
    },
    {
        "id": 508,
        "name": "Leberwurst Paladini x 250 g.",
        "price": 4450.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Leberwurst_Paladini_x_250_g..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 4350.0
            },
            {
                "date": "2026-08-03",
                "price": 4450.0
            }
        ]
    },
    {
        "id": 509,
        "name": "Jamón Cocido tipo Mont Blanc Feteado Los Calvos x 200 g.",
        "price": 6150.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Jamón_Cocido_tipo_Mont_Blanc_Feteado_Los_Calvos_x_200_g..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 6300.0
            },
            {
                "date": "2026-08-03",
                "price": 6150.0
            }
        ]
    },
    {
        "id": 510,
        "name": "Jamón Cocido Feteado 42 x 200 g.",
        "price": 0.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Jamón_Cocido_Feteado_42_x_200_g..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 6100.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 511,
        "name": "Jamón Cocido Bocatti Feteado x 130 g.",
        "price": 0.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Jamón_Cocido_Bocatti_Feteado_x_130_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 512,
        "name": "Paleta Cocida Feteada 42 x 200 g.",
        "price": 0.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Paleta_Cocida_Feteada_42_x_200_g..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 5850.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 513,
        "name": "Mix Frutos Rojos Congelados La Anónima x 300 g.",
        "price": 5512.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Mix_Berries_Congelados_Karinat_x_300_g..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 7450.0
            },
            {
                "date": "2026-07-19",
                "price": 5960.0
            },
            {
                "date": "2026-08-03",
                "price": 5512.0
            }
        ]
    },
    {
        "id": 514,
        "name": "Frutillas Enteras Congeladas Green Life x 400 g.",
        "price": 5775.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Frambuesas_Congeladas_Green_Life_x_400_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5775.0
            }
        ]
    },
    {
        "id": 515,
        "name": "Mix Cuatro Berries Green Life x 400 g.",
        "price": 7425.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Frambuesas_Congeladas_Green_Life_x_400_g..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 10200.0
            },
            {
                "date": "2026-06-25",
                "price": 0.0
            },
            {
                "date": "2026-07-05",
                "price": 9900.0
            },
            {
                "date": "2026-07-19",
                "price": 0.0
            },
            {
                "date": "2026-08-03",
                "price": 7425.0
            }
        ]
    },
    {
        "id": 516,
        "name": "Frambuesas Congeladas Green Life x 400 g.",
        "price": 11062.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Frambuesas_Congeladas_Green_Life_x_400_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 11062.0
            }
        ]
    },
    {
        "id": 517,
        "name": "Moras Congeladas Green Life x 550 g.",
        "price": 12037.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Moras_Congeladas_Green_Life_x_550_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 12037.0
            }
        ]
    },
    {
        "id": 518,
        "name": "Mango Congelado en Cubos Biomac x 500 g.",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 8550.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 519,
        "name": "Arándanos Congelados Karinat x 300 g.",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Arándanos_Congelados_Karinat_x_300_g..webp",
        "history": [
            {
                "date": "2026-07-05",
                "price": 8250.0
            },
            {
                "date": "2026-07-19",
                "price": 0.0
            }
        ]
    },
    {
        "id": 520,
        "name": "Mix Berries Congelados Karinat x 300 g.",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Mix_Berries_Congelados_Karinat_x_300_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 521,
        "name": "Mix Berries Congelados Karinat x 1 Kg.",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 522,
        "name": "Mix Berries Congelados Karinat x 400 g.",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Mix_Berries_Congelados_Karinat_x_400_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 523,
        "name": "Gaseosa Pepsi Black Lata 354cc x1",
        "price": 1235.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_Pepsi_Black_Lata_354cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1235.0
            }
        ]
    },
    {
        "id": 524,
        "name": "Gaseosa Pepsi Black Botella 500cc x1",
        "price": 1267.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_Pepsi_Black_Botella_500cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1267.0
            }
        ]
    },
    {
        "id": 525,
        "name": "Gaseosa 7 Up Sin Azucar Botella 500cc x1",
        "price": 1267.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_7_Up_Sin_Azucar_Botella_500cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1267.0
            }
        ]
    },
    {
        "id": 526,
        "name": "Gaseosa 7 Up Sin Azucar Botella 1,5Lt. x1",
        "price": 3112.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_7_Up_Sin_Azucar_Botella_500cc_x1.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3112.0
            }
        ]
    },
    {
        "id": 527,
        "name": "Gaseosa Pepsi Black Botella 1,5Lt. x1",
        "price": 4100.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_Pepsi_Black_Botella_500cc_x1.webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3037.0
            },
            {
                "date": "2026-08-03",
                "price": 4100.0
            }
        ]
    },
    {
        "id": 528,
        "name": "Gaseosa Sprite Zero Lima Limón Light Pet x 1,5 lt.",
        "price": 4350.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_Sprite_Zero_Lima_Limón_Light_Pet_x_1,5_lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4350.0
            }
        ]
    },
    {
        "id": 529,
        "name": "Gaseosa Cola Black Pet Pepsi x 2 Lt.",
        "price": 4600.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_Cola_Coca-Cola_Light_Pet_x_2,25_Lt..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1680.0
            },
            {
                "date": "2026-08-03",
                "price": 4600.0
            }
        ]
    },
    {
        "id": 530,
        "name": "Gaseosa Lima Limon Sa Pet Seven Up x 2000 cc.",
        "price": 4600.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4600.0
            }
        ]
    },
    {
        "id": 531,
        "name": "Gaseosa Schweppes Zero Pomelo 1,5 Lt",
        "price": 0.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_Schweppes_Zero_Pomelo_1,5_Lt.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 532,
        "name": "Gaseosa Schweppes Zero Agua Tónica 1,5 Lt",
        "price": 0.0,
        "market": "aura",
        "category": "gaseosas",
        "image": "images\\laanonima/Gaseosa_Schweppes_Zero_Agua_Tónica_1,5_Lt.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 533,
        "name": "Medallones de Carne Vacuna Best x 2 un. 110 gr.",
        "price": 1840.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Medallones_de_Carne_Vacuna_Best_x_2_un._110_gr..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 2350.0
            },
            {
                "date": "2026-07-19",
                "price": 1880.0
            },
            {
                "date": "2026-08-03",
                "price": 1840.0
            }
        ]
    },
    {
        "id": 534,
        "name": "Hamburguesa Carne Vacuna Finitas x 2 Un. Paty x 110 g.",
        "price": 2625.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Hamburguesa_Carne_Vacuna_Finitas_x_2_Un._Paty_x_110_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2625.0
            }
        ]
    },
    {
        "id": 535,
        "name": "Hamburguesas de Carne Vacuna La Anónima x 2 un. 110 gr.",
        "price": 2700.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Hamburguesas_de_Carne_Vacuna_La_Anónima_x_2_un._110_gr..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 3650.0
            },
            {
                "date": "2026-07-19",
                "price": 2920.0
            },
            {
                "date": "2026-08-03",
                "price": 2700.0
            }
        ]
    },
    {
        "id": 536,
        "name": "Medallón de Carne Rebozado x 2 un. Paty x 200 gr.",
        "price": 3975.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Medallón_de_Carne_Rebozado_x_2_un._Paty_x_200_gr..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3975.0
            }
        ]
    },
    {
        "id": 537,
        "name": "Medallones de Carne Vacuna Best x 4 un. 276 gr.",
        "price": 4440.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Medallones_de_Carne_Vacuna_Best_x_4_un._276_gr..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 5700.0
            },
            {
                "date": "2026-07-19",
                "price": 4560.0
            },
            {
                "date": "2026-08-03",
                "price": 4440.0
            }
        ]
    },
    {
        "id": 538,
        "name": "Medallones de Carne Vacuna c/ Queso Paty x 2 un. 200 gr.",
        "price": 4800.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Medallones_de_Carne_Vacuna_c_Queso_Paty_x_2_un._200_gr..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4800.0
            }
        ]
    },
    {
        "id": 539,
        "name": "Medallón de Carne Vacuna de Casa x 2 Un. Paty x 240 g.",
        "price": 5212.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Medallones_de_Carne_Vacuna_c_Queso_Paty_x_2_un._200_gr..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 7400.0
            },
            {
                "date": "2026-08-03",
                "price": 5212.0
            }
        ]
    },
    {
        "id": 540,
        "name": "Hamburguesa Carne Vacuna Grandes x 2 Un. Paty x 240 g.",
        "price": 5437.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Hamburguesa_Carne_Vacuna_Finitas_x_2_Un._Paty_x_110_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5437.0
            }
        ]
    },
    {
        "id": 541,
        "name": "Hamburguesa de Carne Vacuna de Cancha x 2 Un. Paty x 250 g.",
        "price": 5962.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Hamburguesa_Carne_Vacuna_Finitas_x_2_Un._Paty_x_110_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5962.0
            }
        ]
    },
    {
        "id": 542,
        "name": "Hamburguesa Carne Vacuna Parrillera x 2 Un. Union Ganadera x 240 g.",
        "price": 6337.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Hamburguesa_Carne_Vacuna_Finitas_x_2_Un._Paty_x_110_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 6337.0
            }
        ]
    },
    {
        "id": 543,
        "name": "Harina de Trigo 000 Morixe x 1 Kg.",
        "price": 900.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_0000_Morixe_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 1250.0
            },
            {
                "date": "2026-07-05",
                "price": 1200.0
            },
            {
                "date": "2026-07-19",
                "price": 1250.0
            },
            {
                "date": "2026-08-03",
                "price": 900.0
            }
        ]
    },
    {
        "id": 544,
        "name": "Harina de Trigo Tipo 000 Best x 1 Kg.",
        "price": 1000.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_0000_Chacabuco_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 1200.0
            },
            {
                "date": "2026-07-19",
                "price": 960.0
            },
            {
                "date": "2026-08-03",
                "price": 1000.0
            }
        ]
    },
    {
        "id": 545,
        "name": "Harina de Trigo 000 La Anonima x 1 Kg.",
        "price": 1120.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_0000_Chacabuco_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 1450.0
            },
            {
                "date": "2026-07-19",
                "price": 1160.0
            },
            {
                "date": "2026-08-03",
                "price": 1120.0
            }
        ]
    },
    {
        "id": 546,
        "name": "Harina de Trigo 000 Chacabuco x 1 Kg.",
        "price": 1150.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_000_Chacabuco_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 547,
        "name": "Harina de Trigo 0000 Favorita x 1 Kg.",
        "price": 1280.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_0000_Chacabuco_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1280.0
            }
        ]
    },
    {
        "id": 548,
        "name": "Harina de Trigo Tipo 0000 Best x 1 Kg.",
        "price": 1320.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_0000_Chacabuco_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-07-05",
                "price": 1500.0
            },
            {
                "date": "2026-07-19",
                "price": 1280.0
            },
            {
                "date": "2026-08-03",
                "price": 1320.0
            }
        ]
    },
    {
        "id": 549,
        "name": "Harina de Trigo 0000 La Anonima x 1 Kg.",
        "price": 1400.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_0000_Chacabuco_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 1800.0
            },
            {
                "date": "2026-07-19",
                "price": 1440.0
            },
            {
                "date": "2026-08-03",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 550,
        "name": "Harina Leudante La Anonima x 1 Kg.",
        "price": 1560.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_Leudante_Morixe_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1600.0
            },
            {
                "date": "2026-08-03",
                "price": 1560.0
            }
        ]
    },
    {
        "id": 551,
        "name": "Harina de Trigo 0000 Caserita x 1 Kg.",
        "price": 1600.0,
        "market": "aura",
        "category": "harinas",
        "image": "images\\laanonima/Harina_de_Trigo_0000_para_Pizza_Caserita_x_1_Kg..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 552,
        "name": "Harina de Fuerza Masa Madre La Anónima x 1 Kg.",
        "price": 1840.0,
        "market": "aura",
        "category": "harinas",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1840.0
            }
        ]
    },
    {
        "id": 553,
        "name": "Energizante Rockstar Botella 500cc x1",
        "price": 1997.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images\\laanonima/Agua_Nestlé_Pureza_Vital_sin_gas_Botella_500cc_x1.webp",
        "history": [
            {
                "date": "2026-07-05",
                "price": 2350.0
            },
            {
                "date": "2026-07-19",
                "price": 1997.0
            }
        ]
    },
    {
        "id": 554,
        "name": "Bebida Frutilla&Kiwi Suerox x 630 cc.",
        "price": 2175.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 555,
        "name": "Bebida Manzana Suerox x 630 cc.",
        "price": 2175.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 556,
        "name": "Bebida sin Azúcar Frutos Rojos Suerox x 630 cc.",
        "price": 2175.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 557,
        "name": "Bebida Arándano&Pomelo Suerox x 630 cc.",
        "price": 2175.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 558,
        "name": "Bebida sin Ázucar sabor Limonada Suerox x 630 cc.",
        "price": 2175.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2175.0
            }
        ]
    },
    {
        "id": 559,
        "name": "Bebida Energizante Zero Speed x 473 cc.",
        "price": 2212.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images\\laanonima/Bebida_Energizante_Speed_x_473_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2212.0
            }
        ]
    },
    {
        "id": 560,
        "name": "Bebida Energizante Speed x 473 cc.",
        "price": 2212.0,
        "market": "aura",
        "category": "isotonicas",
        "image": "images\\laanonima/Bebida_Energizante_Speed_x_473_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2212.0
            }
        ]
    },
    {
        "id": 561,
        "name": "Isotónica Gatorade Cool Blue Botella 500cc x1",
        "price": 2275.0,
        "market": "aura",
        "category": "gatos",
        "image": "images\\laanonima/Isotónica_Gatorade_Cool_Blue_Botella_500cc_x1.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2362.0
            },
            {
                "date": "2026-08-03",
                "price": 2275.0
            }
        ]
    },
    {
        "id": 562,
        "name": "Isotónica Gatorade Uva Botella 500cc x1",
        "price": 2275.0,
        "market": "aura",
        "category": "gatos",
        "image": "images\\laanonima/Isotónica_Gatorade_Uva_Botella_500cc_x1.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2362.0
            },
            {
                "date": "2026-08-03",
                "price": 2275.0
            }
        ]
    },
    {
        "id": 563,
        "name": "Leche L.V. Descremada La Anónima x 1 lt.",
        "price": 2056.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_L.V._Descremada_La_Anónima_x_1_lt..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2670.0
            },
            {
                "date": "2026-07-19",
                "price": 1779.0
            },
            {
                "date": "2026-08-03",
                "price": 2056.0
            }
        ]
    },
    {
        "id": 564,
        "name": "Leche L.V. Entera La Anónima x 1 lt.",
        "price": 2056.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_L.V._Entera_La_Anónima_x_1_lt..webp",
        "history": [
            {
                "date": "2026-07-05",
                "price": 2670.0
            },
            {
                "date": "2026-07-19",
                "price": 1779.0
            },
            {
                "date": "2026-08-03",
                "price": 2056.0
            }
        ]
    },
    {
        "id": 565,
        "name": "Leche L.V. La Anónima Descremada x 1 Lt.",
        "price": 2056.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_L.V._La_Anónima_Descremada_x_1_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2056.0
            }
        ]
    },
    {
        "id": 566,
        "name": "Leche 0% Lactosa La Anónima x 1 Lt.",
        "price": 2137.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_Entera_La_Anónima_Ultra_Fortificada_Sachet_x_1_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2137.0
            }
        ]
    },
    {
        "id": 567,
        "name": "Leche LV Entera Clasica 3% La Serenisima x 1 Lt.",
        "price": 2250.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_L.V._Entera_Clásica_3%_La_Serenísima_Botella_x_1_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2250.0
            }
        ]
    },
    {
        "id": 568,
        "name": "Leche LV Parcialmente Descremada Liviana 1% La Serenisima x 1 Lt.",
        "price": 2250.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_L.V._Parcialmente_Descremada_Liviana_1%_La_Serenísima_Botella_x_1_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2250.0
            }
        ]
    },
    {
        "id": 569,
        "name": "Leche Chocolatada NESQUIK® x200ml.",
        "price": 2250.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_LV_Chocolatada_Kids_Ilolay_x_200_cc..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2250.0
            }
        ]
    },
    {
        "id": 570,
        "name": "Leche LV Parcialmente Descremada Clasica 2% La Serenisima x 1 Lt.",
        "price": 2250.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_L.V._Parcialmente_Descremada_0%_Botella_La_Serenísima_x_1_Lt..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2250.0
            }
        ]
    },
    {
        "id": 571,
        "name": "Leche Protein La Serenisima 1L",
        "price": 2400.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_Protein_La_Serenisima_1L.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 572,
        "name": "Leche UAT Zero lactosa La Serenisima 1L",
        "price": 2400.0,
        "market": "aura",
        "category": "leches",
        "image": "images\\laanonima/Leche_UAT_Zero_lactosa_La_Serenisima_1L.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 573,
        "name": "Pouch Gato Adulto Pollo Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "gatos",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Pollo_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1650.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 574,
        "name": "Pouch Gato Adulto Sardina Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "gatos",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Sardina_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1650.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 575,
        "name": "Pouch Gato Adulto Salmon Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "sal",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Carne_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 576,
        "name": "Pouch Gato Adulto Carne Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Carne_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1650.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 577,
        "name": "Pouch Gato Adulto Pavo Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "gatos",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Pavo_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1650.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 578,
        "name": "Pocuh Gatito Carne Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Carne_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 579,
        "name": "Pouch Gato Adulto Pescado Souffle Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "gatos",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Carne_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 580,
        "name": "Alimento para Gatitos Carne Souff Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Carne_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 581,
        "name": "Pouch Gato Adulto Carne Souffle Whiskas x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Pouch_Gato_Adulto_Carne_Whiskas_x_85_g.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 582,
        "name": "Snack Gato Sabor Pollo Whiskas x 80 g.",
        "price": 2300.0,
        "market": "aura",
        "category": "gatos",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2300.0
            }
        ]
    },
    {
        "id": 583,
        "name": "Palito Saludable Dentastix Raza Pequeña Pedigree x 1 Un.",
        "price": 533.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 533.0
            }
        ]
    },
    {
        "id": 584,
        "name": "Palito Saludable Dentastix Raza Mediana Pedigree x 1 Un.",
        "price": 640.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 640.0
            }
        ]
    },
    {
        "id": 585,
        "name": "Palito Saludable Dentastix Raza Grande Pedigree x 1 Un.",
        "price": 933.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 933.0
            }
        ]
    },
    {
        "id": 586,
        "name": "Pouch Perro Adulto Razas Pequeñas Carne Pedigree x 100 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Pouch_Perro_Adulto_Razas_Pequeñas_Carne_Pedigree_x_100_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1290.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 587,
        "name": "Pouch Perro Adulto Pollo Pedigree x 100 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "perros",
        "image": "images\\laanonima/Alimento_para_Perro_Adulto_RP_Pouch_Pollo_Pedigree_x_100_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1290.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 588,
        "name": "Alimento para Perro Adulto Pouch Carne Pedigree x 100 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Alimento_para_Perro_Adulto_Pouch_Carne_Pedigree_x_100_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1290.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 589,
        "name": "Alimento para Perros Cachorros Carne Pedigree x 85 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 590,
        "name": "Alimento para Perro Adulto RP Pouch Pollo Pedigree x 100 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "perros",
        "image": "images\\laanonima/Alimento_para_Perro_Adulto_RP_Pouch_Pollo_Pedigree_x_100_g.webp",
        "history": [
            {
                "date": "2026-07-07",
                "price": 1650.0
            },
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 591,
        "name": "Alimento para Perro Adulto 7+ Pouch Carne Pedigree x 100 g.",
        "price": 1033.0,
        "market": "aura",
        "category": "carnes",
        "image": "images\\laanonima/Alimento_para_Perro_Adulto_Pouch_Carne_Pedigree_x_100_g.webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1100.0
            },
            {
                "date": "2026-08-03",
                "price": 1033.0
            }
        ]
    },
    {
        "id": 592,
        "name": "Galletas Perro Biscrok Multi Pedigree x 100 g.",
        "price": 1266.0,
        "market": "aura",
        "category": "perros",
        "image": "images\\laanonima/Alimento_para_Perro_Adulto_Pouch_Carne_Pedigree_x_100_g.webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1266.0
            }
        ]
    },
    {
        "id": 593,
        "name": "Servilletas Papel Hoja Simple 32,3 cm x 30 cm Felpita x 70 Un.",
        "price": 1120.0,
        "market": "aura",
        "category": "papeles",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1200.0
            },
            {
                "date": "2026-08-03",
                "price": 1120.0
            }
        ]
    },
    {
        "id": 594,
        "name": "Servilletas de Papel Disney Felpita Disney x 70 un.",
        "price": 1260.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Servilletas_de_Papel_Disney_Felpita_Disney_x_70_un..webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1350.0
            },
            {
                "date": "2026-08-03",
                "price": 1260.0
            }
        ]
    },
    {
        "id": 595,
        "name": "Servilletas Papel Tissue La Anónima Decoradas 32cmx30cm x 70 un.",
        "price": 1537.0,
        "market": "aura",
        "category": "papeles",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2050.0
            },
            {
                "date": "2026-07-19",
                "price": 1640.0
            },
            {
                "date": "2026-08-03",
                "price": 1537.0
            }
        ]
    },
    {
        "id": 596,
        "name": "Rollo Cocina Doble Hoja x 60 Un. Paños Felpita x 3 Un.",
        "price": 1722.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Rollo_Cocina_Blanco_Elegante_50_paños_x_3_un..webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1987.0
            },
            {
                "date": "2026-08-03",
                "price": 1722.0
            }
        ]
    },
    {
        "id": 597,
        "name": "Servilletas La Anónima x 80 un.",
        "price": 1725.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Servilletas_La_Anónima_x_80_un..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2350.0
            },
            {
                "date": "2026-07-19",
                "price": 1762.0
            },
            {
                "date": "2026-08-03",
                "price": 1725.0
            }
        ]
    },
    {
        "id": 598,
        "name": "Bolsas para Residuos Best 45x55cm x 20 un.",
        "price": 1800.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Bolsa_para_Residuos_La_Anónima_45x55cm_x_20_un..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2450.0
            },
            {
                "date": "2026-07-19",
                "price": 1715.0
            },
            {
                "date": "2026-08-03",
                "price": 1800.0
            }
        ]
    },
    {
        "id": 599,
        "name": "Bolsa para Residuos Rollo Task 45x60cm x 20 un.",
        "price": 1830.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Bolsa_para_Residuos_Rollo_Task_45x60cm_x_20_un..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1830.0
            }
        ]
    },
    {
        "id": 600,
        "name": "Bolsa para Residuos 45 x 55 cm. Ata Facil Task x 20 Un.",
        "price": 1980.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Bolsa_para_Residuos_Rollo_Task_45x60cm_x_20_un..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1980.0
            }
        ]
    },
    {
        "id": 601,
        "name": "Bolsa para Residuos 45X55 Mortimer x 15 Un.",
        "price": 2010.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Bolsa_para_Residuos_B.P._45x60cm_x_10_un..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2010.0
            }
        ]
    },
    {
        "id": 602,
        "name": "Papel Higiénico Hoja Simple Best 4 x 30 metros",
        "price": 2025.0,
        "market": "aura",
        "category": "papeles",
        "image": "images\\laanonima/Papel_Higiénico_Hoja_Simple_Best_4_x_30_metros.webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2750.0
            },
            {
                "date": "2026-07-19",
                "price": 2200.0
            },
            {
                "date": "2026-08-03",
                "price": 2025.0
            }
        ]
    },
    {
        "id": 603,
        "name": "Pañales Huggies Classic P x30",
        "price": 8775.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 8775.0
            }
        ]
    },
    {
        "id": 604,
        "name": "Traje de Baño Descremado Splashers G-XG Pampers x 10 un.",
        "price": 9810.0,
        "market": "aura",
        "category": "pañales",
        "image": "images\\laanonima/Traje_de_Baño_Descremado_Splashers_G-XG_Pampers_x_10_un..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 9810.0
            }
        ]
    },
    {
        "id": 605,
        "name": "Traje de Baño Descremado Splashers M-G Pampers x 11 un.",
        "price": 9810.0,
        "market": "aura",
        "category": "pañales",
        "image": "images\\laanonima/Traje_de_Baño_Descremado_Splashers_M-G_Pampers_x_11_un..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 9810.0
            }
        ]
    },
    {
        "id": 606,
        "name": "Pañales Babysec Super Premium Recien Nacido 20 Un.",
        "price": 10850.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-25",
                "price": 15950.0
            },
            {
                "date": "2026-08-03",
                "price": 10850.0
            }
        ]
    },
    {
        "id": 607,
        "name": "Pañal XG Classic Huggies x 30 Un.",
        "price": 12512.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 12512.0
            }
        ]
    },
    {
        "id": 608,
        "name": "Pañal Huggies Classic G x36",
        "price": 12512.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 12512.0
            }
        ]
    },
    {
        "id": 609,
        "name": "Pañal M Classic Huggies x 44 Un.",
        "price": 12512.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 12512.0
            }
        ]
    },
    {
        "id": 610,
        "name": "Pañal P classic mega Huggies x 48 Un.",
        "price": 12707.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 12707.0
            }
        ]
    },
    {
        "id": 611,
        "name": "Pañal RN+ Babydry Pampers x 36 Un.",
        "price": 13440.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 14560.0
            },
            {
                "date": "2026-08-03",
                "price": 13440.0
            }
        ]
    },
    {
        "id": 612,
        "name": "Pañal P Dermacare Ahorro PAck Huggies x 28 Un.",
        "price": 14560.0,
        "market": "aura",
        "category": "pañales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 14560.0
            }
        ]
    },
    {
        "id": 613,
        "name": "Pollo Fresco Pollolin (Kg)",
        "price": 4390.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Pollo_Fresco_Pollolin_(Kg).webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 3990.0
            },
            {
                "date": "2026-06-25",
                "price": 4690.0
            },
            {
                "date": "2026-07-05",
                "price": 0.0
            },
            {
                "date": "2026-07-25",
                "price": 4690.0
            },
            {
                "date": "2026-08-03",
                "price": 4390.0
            }
        ]
    },
    {
        "id": 614,
        "name": "Pollo Fresco La Anónima (Kg)",
        "price": 4390.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Pollo_Fresco_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 3990.0
            },
            {
                "date": "2026-06-25",
                "price": 4690.0
            },
            {
                "date": "2026-07-05",
                "price": 0.0
            },
            {
                "date": "2026-07-25",
                "price": 4690.0
            },
            {
                "date": "2026-08-03",
                "price": 4390.0
            }
        ]
    },
    {
        "id": 615,
        "name": "Filet de Pechuga La Anónima (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Filet_de_Pechuga_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 11790.0
            },
            {
                "date": "2026-06-25",
                "price": 0.0
            },
            {
                "date": "2026-07-19",
                "price": 11790.0
            },
            {
                "date": "2026-07-25",
                "price": 0.0
            }
        ]
    },
    {
        "id": 616,
        "name": "PataMuslo de Pollo La Anónima (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/PataMuslo_de_Pollo_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-06-27",
                "price": 0.0
            },
            {
                "date": "2026-07-19",
                "price": 6890.0
            },
            {
                "date": "2026-07-25",
                "price": 0.0
            }
        ]
    },
    {
        "id": 617,
        "name": "Muslo de Pollo La Anónima (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Muslo_de_Pollo_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-06-24",
                "price": 5990.0
            },
            {
                "date": "2026-06-25",
                "price": 0.0
            },
            {
                "date": "2026-07-19",
                "price": 5990.0
            },
            {
                "date": "2026-07-25",
                "price": 0.0
            }
        ]
    },
    {
        "id": 618,
        "name": "Patitas de Pollo Pollolin (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Arrollado_de_Pollo_Congelado_Pollolin_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 619,
        "name": "Pechugas Especiales Bandeja Pollolin (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 620,
        "name": "Pata Muslo Bandeja Pollolin (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 621,
        "name": "Milanesas de Pechuga de Pollo La Anónima (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Cuarto_Trasero_de_Pollo_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 622,
        "name": "Cuarto Trasero Bandeja Pollolin (Kg)",
        "price": 0.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Cuarto_Trasero_de_Pollo_La_Anónima_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 623,
        "name": "Yogur Helado Griego S/G Natural La Anonima x 100 g.",
        "price": 2362.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-06-25",
                "price": 3250.0
            },
            {
                "date": "2026-07-19",
                "price": 2600.0
            },
            {
                "date": "2026-08-03",
                "price": 2362.0
            }
        ]
    },
    {
        "id": 624,
        "name": "Yogur Helado Griego S/G Frutilla La Anomima x 100 g.",
        "price": 2587.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2800.0
            },
            {
                "date": "2026-08-03",
                "price": 2587.0
            }
        ]
    },
    {
        "id": 625,
        "name": "Yogur Helado Griego S/G Frutilla La Anonima x 100 g.",
        "price": 2662.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-06-25",
                "price": 3600.0
            },
            {
                "date": "2026-07-19",
                "price": 2880.0
            },
            {
                "date": "2026-08-03",
                "price": 2662.0
            }
        ]
    },
    {
        "id": 626,
        "name": "Helado Frutilla Naranja x 6 un. La Anónima x 294 gr.",
        "price": 3640.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Helado_Frutilla_Naranja_x_6_un._La_Anónima_x_294_gr..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 3850.0
            },
            {
                "date": "2026-07-19",
                "price": 3080.0
            },
            {
                "date": "2026-07-25",
                "price": 3840.0
            },
            {
                "date": "2026-08-03",
                "price": 3640.0
            }
        ]
    },
    {
        "id": 627,
        "name": "Helado Frutilla x 6 un. La Anónima x 294 gr.",
        "price": 3680.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Helado_Frutilla_x_6_un._La_Anónima_x_294_gr..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 3950.0
            },
            {
                "date": "2026-07-19",
                "price": 3160.0
            },
            {
                "date": "2026-07-25",
                "price": 3880.0
            },
            {
                "date": "2026-08-03",
                "price": 3680.0
            }
        ]
    },
    {
        "id": 628,
        "name": "Waffle Tradicional x 6 Un. Forno De Minas x 210 g.",
        "price": 4350.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-05",
                "price": 7250.0
            },
            {
                "date": "2026-07-19",
                "price": 4350.0
            }
        ]
    },
    {
        "id": 629,
        "name": "Helado Mini Bites x 14 Un. Oreo x 72 g.",
        "price": 5120.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 4575.0
            },
            {
                "date": "2026-08-03",
                "price": 5120.0
            }
        ]
    },
    {
        "id": 630,
        "name": "Helado Chocolate DDL Vainilla Best x 524 gr.",
        "price": 6320.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Helado_Chocolate_DDL_Vainilla_Best_x_524_gr..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 6700.0
            },
            {
                "date": "2026-07-19",
                "price": 5360.0
            },
            {
                "date": "2026-07-25",
                "price": 6640.0
            },
            {
                "date": "2026-08-03",
                "price": 6320.0
            }
        ]
    },
    {
        "id": 631,
        "name": "Helado Chocolate Vainilla Frutilla Best x 524 gr.",
        "price": 6320.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Helado_Chocolate_Vainilla_Frutilla_Best_x_524_gr..webp",
        "history": [
            {
                "date": "2026-06-25",
                "price": 6700.0
            },
            {
                "date": "2026-07-19",
                "price": 5360.0
            },
            {
                "date": "2026-07-25",
                "price": 6640.0
            },
            {
                "date": "2026-08-03",
                "price": 6320.0
            }
        ]
    },
    {
        "id": 632,
        "name": "Helado DDL Americana Frutilla Best x 524 gr.",
        "price": 6320.0,
        "market": "aura",
        "category": "all",
        "image": "images\\laanonima/Helado_DDL_Americana_Frutilla_Best_x_524_gr..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 6320.0
            }
        ]
    },
    {
        "id": 633,
        "name": "Aderezo Rallado Sabor Queso Best x 40 g.",
        "price": 840.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Queso_Rallado_La_Paulina_x_40_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 840.0
            }
        ]
    },
    {
        "id": 634,
        "name": "Queso Rallado Tregar x 40 g.",
        "price": 1687.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Queso_Rallado_Tregar_x_40_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1687.0
            }
        ]
    },
    {
        "id": 635,
        "name": "Aderezo Rallado Sabor Queso Best x 100 g.",
        "price": 2000.0,
        "market": "aura",
        "category": "fiambres",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2040.0
            },
            {
                "date": "2026-08-03",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 636,
        "name": "Queso Cheddar En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2362.0,
        "market": "aura",
        "category": "fiambres",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2362.0
            }
        ]
    },
    {
        "id": 637,
        "name": "Queso Provolone En Fetas x 8 Un. Tonadita x 120 g.",
        "price": 2362.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Queso_Provolone_Santa_Rosa_Grana_Trozado_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2362.0
            }
        ]
    },
    {
        "id": 638,
        "name": "Queso Cheddar Feteado La Anonima x 120 g.",
        "price": 2520.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Queso_Rallado_La_Anónima_x_120_g..webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2600.0
            },
            {
                "date": "2026-08-03",
                "price": 2520.0
            }
        ]
    },
    {
        "id": 639,
        "name": "Queso Mozzarella Mediterránea x 250 g.",
        "price": 3357.0,
        "market": "aura",
        "category": "fiambres",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3357.0
            }
        ]
    },
    {
        "id": 640,
        "name": "Queso Cheddar en Fetas Doña Aurora x 150 g.",
        "price": 3800.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Queso_Provoleta_H.Frac_Doña_Aurora_(Kg).webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3800.0
            }
        ]
    },
    {
        "id": 641,
        "name": "Queso Mozzarella Best x 250 g.",
        "price": 4120.0,
        "market": "aura",
        "category": "fiambres",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-25",
                "price": 4200.0
            },
            {
                "date": "2026-08-03",
                "price": 4120.0
            }
        ]
    },
    {
        "id": 642,
        "name": "Queso Mozzarella Doña Aurora x 500 g.",
        "price": 4500.0,
        "market": "aura",
        "category": "fiambres",
        "image": "images\\laanonima/Queso_Mozzarella_Doña_Aurora_x_500_g..webp",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4500.0
            }
        ]
    },
    {
        "id": 643,
        "name": "Sal Fina Paquete Dos Anclas x 500 g.",
        "price": 1120.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 0.0
            },
            {
                "date": "2026-08-03",
                "price": 1120.0
            }
        ]
    },
    {
        "id": 644,
        "name": "Sal Fina Dos Anclas Estuche x 500 g.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "images\\laanonima/Arroz_Carnaroli_Estuche_Dos_Hermanos_x_500_g..webp",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1400.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 645,
        "name": "Provenzal Dos Anclas x 50 g.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 2280.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 646,
        "name": "Sal Entrefina Paquete Dos Anclas x 500 g.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 0.0
            }
        ]
    },
    {
        "id": 647,
        "name": "Oregano Doy Pack Dos Anclas x 25 g.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1280.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 648,
        "name": "Ajo en Polvo Deshidratado Dos Anclas x 20 g.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1160.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 649,
        "name": "Ají Molido Dos Anclas x 50 g.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1800.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 650,
        "name": "Pimentón Seleccionado Dos Anclas x 50 g.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1920.0
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 651,
        "name": "Sal Gruesa Paquete Dos Anclas x 1 Kg.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 652,
        "name": "Sal Entrefina Parrillera Estuche Dos Anclas x 1 Kg.",
        "price": 0.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 653,
        "name": "Anillos de Cereal Frutados Sin Gluten La Anonima x 200 g.",
        "price": 1720.0,
        "market": "aura",
        "category": "cereales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1720.0
            }
        ]
    },
    {
        "id": 654,
        "name": "Bolitas de Cereal Sabor Chocolate Sin Gluten La Anonima x 200 g.",
        "price": 1880.0,
        "market": "aura",
        "category": "cereales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2400.0
            },
            {
                "date": "2026-07-19",
                "price": 1800.0
            },
            {
                "date": "2026-08-03",
                "price": 1880.0
            }
        ]
    },
    {
        "id": 655,
        "name": "Copos de Maiz Azucarados Sin Gluten La Anonima x 200 g.",
        "price": 2000.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2000.0
            }
        ]
    },
    {
        "id": 656,
        "name": "Alfajor de Arroz Relleno Sabor Chocolate sin Tacc Donn x 78 g.",
        "price": 2137.0,
        "market": "aura",
        "category": "arroz",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2137.0
            }
        ]
    },
    {
        "id": 657,
        "name": "Galletitas de Limón sin Tacc Happy Food x 120 g.",
        "price": 2240.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2240.0
            }
        ]
    },
    {
        "id": 658,
        "name": "Grisines Clásicas sin Tacc Happy Food x 100 g.",
        "price": 2400.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2400.0
            }
        ]
    },
    {
        "id": 659,
        "name": "Polvo para Preparar Bizcochuelo Chocolate Sin Gluten La Anonima x 500 g.",
        "price": 3360.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3360.0
            }
        ]
    },
    {
        "id": 660,
        "name": "Polvo para Preparar Bizcochuelo Vainilla Sin Gluten La Anonima x 500 g.",
        "price": 3360.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3360.0
            }
        ]
    },
    {
        "id": 661,
        "name": "Rebozador sin Gluten Preferido x 350 g.",
        "price": 3562.0,
        "market": "aura",
        "category": "all",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3562.0
            }
        ]
    },
    {
        "id": 662,
        "name": "Pasta Multicereal de Maiz Spaghetti Wakas x 400g.",
        "price": 3600.0,
        "market": "aura",
        "category": "cereales",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3600.0
            }
        ]
    },
    {
        "id": 663,
        "name": "Maní Tostado Salado sin Piel La Anónima x 105 g.",
        "price": 1040.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1040.0
            }
        ]
    },
    {
        "id": 664,
        "name": "Maní Frito Salado sin Piel La Anónima x 105 g.",
        "price": 1040.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1080.0
            },
            {
                "date": "2026-08-03",
                "price": 1040.0
            }
        ]
    },
    {
        "id": 665,
        "name": "Maní Tostado Natural sin Sal & Sin Piel La Anónima x 105 g.",
        "price": 1040.0,
        "market": "aura",
        "category": "sal",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1080.0
            },
            {
                "date": "2026-08-03",
                "price": 1040.0
            }
        ]
    },
    {
        "id": 666,
        "name": "Tubo de Maíz Dinamita Extra Flamin Hot Doritos x 45 g.",
        "price": 1300.0,
        "market": "aura",
        "category": "snacks",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1300.0
            }
        ]
    },
    {
        "id": 667,
        "name": "Papas Fritas Corte Americano X-Treme Hot Krachitos x 55 g.",
        "price": 1425.0,
        "market": "aura",
        "category": "snacks",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-05",
                "price": 1900.0
            },
            {
                "date": "2026-07-19",
                "price": 1425.0
            }
        ]
    },
    {
        "id": 668,
        "name": "Papas fritas Lays Clásicas x 40 g",
        "price": 1527.0,
        "market": "aura",
        "category": "snacks",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1410.0
            },
            {
                "date": "2026-08-03",
                "price": 1527.0
            }
        ]
    },
    {
        "id": 669,
        "name": "Nachos Sabor a Queso Doritos x 40 g.",
        "price": 1527.0,
        "market": "aura",
        "category": "fiambres",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1527.0
            }
        ]
    },
    {
        "id": 670,
        "name": "Snacks Horneados Cebolla Y Crema Molinos Ala x 80 g.",
        "price": 1575.0,
        "market": "aura",
        "category": "snacks",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-06-25",
                "price": 2100.0
            },
            {
                "date": "2026-07-19",
                "price": 1575.0
            }
        ]
    },
    {
        "id": 671,
        "name": "Snacks Horneados Queso Molinos Ala x 80 g.",
        "price": 1575.0,
        "market": "aura",
        "category": "fiambres",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-07-19",
                "price": 1575.0
            }
        ]
    },
    {
        "id": 672,
        "name": "Mani Crocante Clasico La Anonima x 85 g.",
        "price": 1600.0,
        "market": "aura",
        "category": "snacks",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 673,
        "name": "Vinagre de Alcohol 1 Lts Cuisine y Co",
        "price": 1620.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Vinagre de Alcohol 1 Lts Cuisine y Co_7.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1029.0
            },
            {
                "date": "2026-07-25",
                "price": 1620.0
            }
        ]
    },
    {
        "id": 674,
        "name": "Vinagre de Alcohol 1 Lts Casalta",
        "price": 1700.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Vinagre de Alcohol 1 Lts Casalta_14.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1700.0
            }
        ]
    },
    {
        "id": 675,
        "name": "Vinagre de Manzana 500 Cc Cuisine & Co",
        "price": 2230.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Vinagre de Manzana 500 Cc Cuisine  Co_15.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 2230.0
            }
        ]
    },
    {
        "id": 676,
        "name": "Aceite de Girasol 900 Ml Cañuelas",
        "price": 2950.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Aceite de Girasol 900 Ml Cañuelas_6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3399.0
            },
            {
                "date": "2026-07-25",
                "price": 2950.0
            }
        ]
    },
    {
        "id": 677,
        "name": "Aceite de Girasol 900 Ml Legitimo",
        "price": 3490.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Aceite de Girasol 900 Ml Legitimo_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3397.0
            },
            {
                "date": "2026-07-25",
                "price": 3290.0
            },
            {
                "date": "2026-08-03",
                "price": 3490.0
            }
        ]
    },
    {
        "id": 678,
        "name": "Aceite De Girasol 900 Ml Cocinero",
        "price": 3599.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Aceite De Girasol 900 Ml Cocinero_1.jpg",
        "history": [
            {
                "date": "2026-03-21",
                "price": 3750.0
            },
            {
                "date": "2026-04-18",
                "price": 3950.0
            },
            {
                "date": "2026-05-16",
                "price": 2697.5
            },
            {
                "date": "2026-05-23",
                "price": 4150.0
            },
            {
                "date": "2026-05-30",
                "price": 3649.0
            },
            {
                "date": "2026-06-07",
                "price": 4150.0
            },
            {
                "date": "2026-06-21",
                "price": 3589.0
            },
            {
                "date": "2026-07-06",
                "price": 3599.0
            }
        ]
    },
    {
        "id": 679,
        "name": "Aceite de Girasol 900 Ml Natura",
        "price": 4190.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Aceite de Girasol 900 Ml Natura_8.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 3799.0
            },
            {
                "date": "2026-07-25",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 680,
        "name": "Aceite de Girasol 1.5 Lts Legitimo",
        "price": 4799.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Aceite de Girasol 15 Lts Legitimo_2.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 3919.0
            },
            {
                "date": "2026-05-30",
                "price": 5724.0
            },
            {
                "date": "2026-06-07",
                "price": 5865.0
            },
            {
                "date": "2026-06-21",
                "price": 5684.0
            },
            {
                "date": "2026-07-06",
                "price": 4799.0
            }
        ]
    },
    {
        "id": 681,
        "name": "Aceite de Girasol 1.5 Lts Cocinero",
        "price": 5990.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Aceite de Girasol 15 Lts Cocinero_0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 5990.0
            }
        ]
    },
    {
        "id": 682,
        "name": "Aceite de Girasol 1.5 Lts con Pico Dosificador Cañuelas",
        "price": 5990.0,
        "market": "lumina",
        "category": "aceite",
        "image": "images\\vea/Aceite de Girasol 15 Lts con Pico Dosifi_5.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5990.0
            }
        ]
    },
    {
        "id": 683,
        "name": "Soda Gasificada 2.25 Lts Cuisine & Co",
        "price": 1190.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Soda Gasificada 225 Lts Cuisine  Co_1.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1340.0
            },
            {
                "date": "2026-08-03",
                "price": 1190.0
            }
        ]
    },
    {
        "id": 684,
        "name": "Soda Sifón 1.75 Lts Cuisine & Co",
        "price": 1235.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Soda Sifón 175 Lts Cuisine  Co_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1199.0
            },
            {
                "date": "2026-07-25",
                "price": 1900.0
            },
            {
                "date": "2026-08-03",
                "price": 1235.0
            }
        ]
    },
    {
        "id": 685,
        "name": "Agua Mineral Sin Gas 2 Lts Cellier",
        "price": 1390.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Agua Mineral Sin Gas 2 Lts Cellier_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1296.0
            },
            {
                "date": "2026-07-25",
                "price": 1290.0
            },
            {
                "date": "2026-08-03",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 686,
        "name": "Agua Sin Gas 500 Ml Eco de los Andes",
        "price": 1399.45,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Agua Sin Gas 500 Ml Eco de los Andes_19.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1399.45
            }
        ]
    },
    {
        "id": 687,
        "name": "Agua Mineral Sin Gas 2250 Ml Villa del Sur",
        "price": 1625.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Agua Mineral Sin Gas 2250 Ml Villa del S_7.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1625.0
            }
        ]
    },
    {
        "id": 688,
        "name": "Agua Mineral Sin Gas 2 Lts Villavicencio",
        "price": 1748.5,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Agua Mineral Sin Gas 2 Lts Villavicencio_3.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1939.0
            },
            {
                "date": "2026-07-06",
                "price": 1899.0
            },
            {
                "date": "2026-07-25",
                "price": 1842.1
            },
            {
                "date": "2026-08-03",
                "price": 1748.5
            }
        ]
    },
    {
        "id": 689,
        "name": "Soda Gasificada 1.75 Lts Sierra de los Padres",
        "price": 1750.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Soda Gasificada 175 Lts Sierra de los Pa_15.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1750.0
            }
        ]
    },
    {
        "id": 690,
        "name": "Agua Mineral Sin Gas 1,5 Lts Villavicencio",
        "price": 1820.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Agua Mineral Sin Gas 15 Lts Villavicenci_17.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1820.0
            }
        ]
    },
    {
        "id": 691,
        "name": "Agua Mineral Sin Gas 2.25 Lts Nestle",
        "price": 1911.0,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Agua Mineral Sin Gas 225 Lts Nestle_13.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1911.0
            }
        ]
    },
    {
        "id": 692,
        "name": "Agua Mineral Sin Gas 2 Lts Eco de los Andes",
        "price": 2047.8,
        "market": "lumina",
        "category": "aguas",
        "image": "images\\vea/Agua Mineral Sin Gas 2 Lts Eco de los An_11.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2218.45
            },
            {
                "date": "2026-08-03",
                "price": 2047.8
            }
        ]
    },
    {
        "id": 693,
        "name": "Maíz Pisingallo 400 Grs Cuisine y Co",
        "price": 750.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Maíz Pisingallo 400 Grs Cuisine y Co_8.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 859.0
            },
            {
                "date": "2026-07-25",
                "price": 750.0
            }
        ]
    },
    {
        "id": 694,
        "name": "Maíz Pisingallo 400 Grs Egran",
        "price": 910.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Maíz Pisingallo 400 Grs Egran_19.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 910.0
            }
        ]
    },
    {
        "id": 695,
        "name": "Arroz Parboil 500 Grs Lucchetti",
        "price": 990.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Arroz Parboil 500 Grs Lucchetti_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1099.0
            },
            {
                "date": "2026-07-25",
                "price": 990.0
            }
        ]
    },
    {
        "id": 696,
        "name": "Arroz Grano Largo Fino 500 Grs Lucchetti",
        "price": 999.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Arroz Grano Largo Fino 500 Grs Lucchetti_7.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 999.0
            }
        ]
    },
    {
        "id": 697,
        "name": "Maíz Pelado Blanco 400 Grs Cuisine & Co",
        "price": 1150.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Maíz Pelado Blanco 400 Grs Cuisine  Co_14.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1179.0
            },
            {
                "date": "2026-07-25",
                "price": 1150.0
            }
        ]
    },
    {
        "id": 698,
        "name": "Garbanzos 400 Grs Cuisine & Co",
        "price": 1183.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Garbanzos 400 Grs Cuisine  Co_11.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1183.0
            }
        ]
    },
    {
        "id": 699,
        "name": "Arroz Blanco Largo Fino 1 Kg Vanguardia",
        "price": 1190.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Arroz Blanco Largo Fino 1 Kg Vanguardia_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1038.0
            },
            {
                "date": "2026-07-25",
                "price": 1190.0
            }
        ]
    },
    {
        "id": 700,
        "name": "Arroz Integral 500 Grs Molinos Ala",
        "price": 1199.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Arroz Integral 500 Grs Molinos Ala_16.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1199.0
            }
        ]
    },
    {
        "id": 701,
        "name": "Lentejas 400 Grs Cuisine y Co",
        "price": 1250.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Lentejas 400 Grs Cuisine y Co_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 702,
        "name": "Arroz Integral Selección 500 Grs Gallo",
        "price": 1299.0,
        "market": "lumina",
        "category": "arroz",
        "image": "images\\vea/Arroz Integral Selección 500 Grs Gallo_13.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1105.0
            },
            {
                "date": "2026-07-06",
                "price": 1299.0
            }
        ]
    },
    {
        "id": 703,
        "name": "Queso Crema Clásico Individual 0.290 Kg Cuisine y Co",
        "price": 1989.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Crema Clásico Individual 0290 Kg C_22.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1899.0
            },
            {
                "date": "2026-06-07",
                "price": 1999.0
            },
            {
                "date": "2026-08-03",
                "price": 1989.0
            }
        ]
    },
    {
        "id": 704,
        "name": "Queso Crema Blanco 290 Grs La Serenísima Clásico",
        "price": 2989.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Crema Blanco 290 Grs La Serenísima_11.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2499.0
            },
            {
                "date": "2026-08-03",
                "price": 2989.0
            }
        ]
    },
    {
        "id": 705,
        "name": "Queso Cremoso Barraza",
        "price": 9990.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Cremoso Barraza_44.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 9990.0
            }
        ]
    },
    {
        "id": 706,
        "name": "Queso Cremoso x 1 Un Punta Del Agua",
        "price": 14500.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Cremoso x 1 Un Punta Del Agua_0.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 12899.0
            },
            {
                "date": "2026-05-09",
                "price": 10900.0
            },
            {
                "date": "2026-06-07",
                "price": 14120.0
            },
            {
                "date": "2026-07-06",
                "price": 14500.0
            }
        ]
    },
    {
        "id": 707,
        "name": "Espinazo",
        "price": 4215.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Espinazo_16.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 3935.0
            },
            {
                "date": "2026-05-30",
                "price": 4215.0
            }
        ]
    },
    {
        "id": 708,
        "name": "Carne Vacuna Picada Común La Hacienda",
        "price": 6499.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Carne Vacuna Picada Común La Hacienda_0.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 6499.0
            },
            {
                "date": "2026-04-25",
                "price": 5999.0
            },
            {
                "date": "2026-05-16",
                "price": 7789.0
            },
            {
                "date": "2026-05-23",
                "price": 5999.0
            },
            {
                "date": "2026-06-07",
                "price": 8335.0
            },
            {
                "date": "2026-07-25",
                "price": 6499.0
            }
        ]
    },
    {
        "id": 709,
        "name": "Falda",
        "price": 7905.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Falda_12.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 7905.0
            },
            {
                "date": "2026-07-25",
                "price": 7115.0
            },
            {
                "date": "2026-08-03",
                "price": 7905.0
            }
        ]
    },
    {
        "id": 710,
        "name": "Azotillo",
        "price": 8899.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Azotillo_14.jpg",
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
            },
            {
                "date": "2026-05-30",
                "price": 8899.0
            }
        ]
    },
    {
        "id": 711,
        "name": "Osobuco Vacuno La Hacienda",
        "price": 9705.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Osobuco Vacuno La Hacienda_8.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 9065.0
            },
            {
                "date": "2026-05-30",
                "price": 9705.0
            }
        ]
    },
    {
        "id": 712,
        "name": "Carnaza Comun La Hacienda",
        "price": 9749.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Carnaza Comun La Hacienda_2.jpg",
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
            },
            {
                "date": "2026-05-30",
                "price": 9749.0
            }
        ]
    },
    {
        "id": 713,
        "name": "Matambre Vacuno",
        "price": 9999.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Matambre Vacuno_7.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 9999.0
            }
        ]
    },
    {
        "id": 714,
        "name": "Tapa De Bife Novillito Ev Al Vacio",
        "price": 12829.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Tapa De Bife Novillito Ev Al Vacio_13.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 10999.0
            },
            {
                "date": "2026-05-23",
                "price": 12829.0
            },
            {
                "date": "2026-05-30",
                "price": 10999.0
            },
            {
                "date": "2026-06-21",
                "price": 12829.0
            },
            {
                "date": "2026-07-06",
                "price": 10999.0
            },
            {
                "date": "2026-08-03",
                "price": 12829.0
            }
        ]
    },
    {
        "id": 715,
        "name": "Manta Vacuna La Hacienda",
        "price": 13859.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Manta Vacuna La Hacienda_17.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 13859.0
            }
        ]
    },
    {
        "id": 716,
        "name": "Carne Vacuna Picada Especial La Hacienda",
        "price": 13875.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Carne Vacuna Picada Especial La Hacienda_3.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 13875.0
            }
        ]
    },
    {
        "id": 717,
        "name": "Barra de Cereal Sabor Frutos del Bosque con Yogur 27 Grs Flow",
        "price": 910.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Cereal Sabor Frutos del Bosque _7.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 910.0
            }
        ]
    },
    {
        "id": 718,
        "name": "Barra de Cereal Sabor Almendras con piso de chocolate 30 Grs Flow",
        "price": 950.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Cereal Sabor Almendras con piso_11.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 950.0
            }
        ]
    },
    {
        "id": 719,
        "name": "Barra de Cereal Sabor Cajú y Arándanos 41 Grs Integra",
        "price": 1690.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Cereal Sabor Cajú y Arándanos 4_13.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1790.0
            },
            {
                "date": "2026-08-03",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 720,
        "name": "Barra de Cereal Sabor Cacao y Chocolate 40 Grs Integra",
        "price": 1690.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Cereal Sabor Cacao y Chocolate _19.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 721,
        "name": "Barra de Chocolate Sabor maní y Arándanos 41 Grs Integra",
        "price": 1890.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Chocolate Sabor maní y Arándano_17.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1900.0
            },
            {
                "date": "2026-08-03",
                "price": 1890.0
            }
        ]
    },
    {
        "id": 722,
        "name": "Barra de Proteína Sabor Chocolate Brownie 45 Grs Notprotein Bar",
        "price": 1950.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Proteína Sabor Chocolate Browni_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2290.0
            },
            {
                "date": "2026-08-03",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 723,
        "name": "Copos de Maíz Sabor Azucarados 240 Grs Granix",
        "price": 2050.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Copos de Maíz Sabor Azucarados 240 Grs G_1.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2050.0
            }
        ]
    },
    {
        "id": 724,
        "name": "Barra de Cereal Sabor Cacao y Avellanas 45 Grs Muecas",
        "price": 2099.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Cereal Sabor Cacao y Avellanas _0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1490.0
            },
            {
                "date": "2026-08-03",
                "price": 2099.0
            }
        ]
    },
    {
        "id": 725,
        "name": "Barra de Cereal Sabor Banana y Dulce de Leche 45 Grs Muecas",
        "price": 2099.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Barra de Cereal Sabor Banana y Dulce de _18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2099.0
            }
        ]
    },
    {
        "id": 726,
        "name": "Anillitos Frutales Sin Tacc 200 Grs Cuisine & Co",
        "price": 2190.0,
        "market": "lumina",
        "category": "cereales",
        "image": "images\\vea/Anillitos Frutales Sin Tacc 200 Grs Cuis_14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2190.0
            }
        ]
    },
    {
        "id": 727,
        "name": "Cerveza Lager 500 Ml Landvik",
        "price": 1899.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Lager 500 Ml Landvik_16.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1799.0
            },
            {
                "date": "2026-07-25",
                "price": 1899.0
            }
        ]
    },
    {
        "id": 728,
        "name": "Cerveza Rubia 473 Cc Quilmes",
        "price": 1941.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Rubia 473 Cc Quilmes_9.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2588.0
            },
            {
                "date": "2026-08-03",
                "price": 1941.0
            }
        ]
    },
    {
        "id": 729,
        "name": "Cerveza Lager Sin Alcohol 473 Cc Heineken",
        "price": 2057.9,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Lager Sin Alcohol 473 Cc Heineke_18.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 3166.0
            },
            {
                "date": "2026-08-03",
                "price": 2057.9
            }
        ]
    },
    {
        "id": 730,
        "name": "Cerveza Sin Alcohol 330 Cc Corona",
        "price": 2340.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Sin Alcohol 330 Cc Corona_17.jpg",
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
            },
            {
                "date": "2026-05-09",
                "price": 2210.0
            },
            {
                "date": "2026-05-16",
                "price": 1700.0
            },
            {
                "date": "2026-05-23",
                "price": 2275.0
            },
            {
                "date": "2026-06-14",
                "price": 1750.0
            },
            {
                "date": "2026-06-21",
                "price": 2100.0
            },
            {
                "date": "2026-07-06",
                "price": 2450.0
            },
            {
                "date": "2026-07-25",
                "price": 2340.0
            }
        ]
    },
    {
        "id": 731,
        "name": "Cerveza Bajo Cero 1 Lts Quilmes",
        "price": 2479.1,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Bajo Cero 1 Lts Quilmes_6.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2479.1
            }
        ]
    },
    {
        "id": 732,
        "name": "Cerveza Lager 710 Cc Quilmes",
        "price": 2590.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Lager 710 Cc Quilmes_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2300.0
            },
            {
                "date": "2026-07-25",
                "price": 3706.0
            },
            {
                "date": "2026-08-03",
                "price": 2590.0
            }
        ]
    },
    {
        "id": 733,
        "name": "Cerveza Rubia 710 Cc Schneider",
        "price": 2659.3,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Rubia 710 Cc Schneider_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2190.0
            },
            {
                "date": "2026-07-25",
                "price": 3799.0
            },
            {
                "date": "2026-08-03",
                "price": 2659.3
            }
        ]
    },
    {
        "id": 734,
        "name": "Cerveza Rubia 330 Cc Stella Artois",
        "price": 3060.75,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Rubia 330 Cc Stella Artois_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2887.5
            },
            {
                "date": "2026-07-25",
                "price": 4081.0
            },
            {
                "date": "2026-08-03",
                "price": 3060.75
            }
        ]
    },
    {
        "id": 735,
        "name": "Cerveza Rubia 473 Ml Heineken",
        "price": 3074.25,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Rubia 473 Ml Heineken_5.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3074.25
            }
        ]
    },
    {
        "id": 736,
        "name": "Cerveza Rubia 330 Cc Corona",
        "price": 3190.0,
        "market": "lumina",
        "category": "cervezas",
        "image": "images\\vea/Cerveza Rubia 330 Cc Corona_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3190.0
            }
        ]
    },
    {
        "id": 737,
        "name": "Salame Sabor Salame Feteado 70 Grs Bocatti",
        "price": 3350.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Salame Sabor Salame Feteado 70 Grs Bocat_19.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3350.0
            }
        ]
    },
    {
        "id": 738,
        "name": "Salame Fuet Doina 150 Gr",
        "price": 3900.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Salame Fuet Doina 150 Gr_15.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 3900.0
            },
            {
                "date": "2026-06-14",
                "price": 3490.0
            },
            {
                "date": "2026-07-06",
                "price": 3900.0
            }
        ]
    },
    {
        "id": 739,
        "name": "Jamón Cocido Premium Feteado 150 Grs Paladini",
        "price": 6400.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Jamón Cocido Premium Feteado 150 Grs Pal_2.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 5200.0
            },
            {
                "date": "2026-07-25",
                "price": 6400.0
            }
        ]
    },
    {
        "id": 740,
        "name": "Jamón Cocido Feteado 130 Grs Bocatti",
        "price": 6625.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Jamón Cocido Feteado 130 Grs Bocatti_0.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 6625.0
            }
        ]
    },
    {
        "id": 741,
        "name": "Jamon Cocido Fetas Finas 200 Grs Paladini",
        "price": 8950.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Jamon Cocido Fetas Finas 200 Grs Paladin_1.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 8950.0
            }
        ]
    },
    {
        "id": 742,
        "name": "Jamón Cocido Cerdo Fresco x Kg",
        "price": 10900.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Jamón Cocido Cerdo Fresco x Kg_13.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 10900.0
            }
        ]
    },
    {
        "id": 743,
        "name": "Fiambre De Cerdo Tripack X Kg",
        "price": 11290.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Fiambre De Cerdo Tripack X Kg_6.jpg",
        "history": [
            {
                "date": "2026-03-20",
                "price": 10490.0
            },
            {
                "date": "2026-05-09",
                "price": 9900.0
            },
            {
                "date": "2026-05-16",
                "price": 10970.0
            },
            {
                "date": "2026-05-23",
                "price": 8900.0
            },
            {
                "date": "2026-05-30",
                "price": 10970.0
            },
            {
                "date": "2026-07-06",
                "price": 11290.0
            }
        ]
    },
    {
        "id": 744,
        "name": "Jamón Crudo Fetas Finas x 120 Grs Paladini",
        "price": 14500.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Jamón Crudo Fetas Finas x 120 Grs Paladi_3.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 13450.0
            },
            {
                "date": "2026-07-06",
                "price": 14150.0
            },
            {
                "date": "2026-07-25",
                "price": 14500.0
            }
        ]
    },
    {
        "id": 745,
        "name": "Jamón Cocido Feteado x 1 Kg x 3 Un Jumbo",
        "price": 16190.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Jamón Cocido Feteado x 1 Kg x 3 Un Jumbo_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 16190.0
            }
        ]
    },
    {
        "id": 746,
        "name": "Fiambre de Paleta de Cerdo 200 Grs Campo Austral",
        "price": 16990.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Fiambre de Paleta de Cerdo 200 Grs Campo_12.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 16990.0
            }
        ]
    },
    {
        "id": 747,
        "name": "Mango Congelado en Cubos 250 Grs",
        "price": 3800.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Mango Congelado en Cubos 250 Grs_4.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3800.0
            }
        ]
    },
    {
        "id": 748,
        "name": "Frutillas Congeladas 250 Grs",
        "price": 4100.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Frutillas Congeladas 250 Grs_1.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4100.0
            }
        ]
    },
    {
        "id": 749,
        "name": "Frutillas Green Life 400g",
        "price": 5737.5,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Frutillas Green Life 400g_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 5737.5
            }
        ]
    },
    {
        "id": 750,
        "name": "Frutillas Congeladas 300 Grs",
        "price": 6400.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Frutillas Congeladas 300 Grs_5.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 6400.0
            }
        ]
    },
    {
        "id": 751,
        "name": "Mix 4 Berries Green Life 400g",
        "price": 7387.5,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Mix 4 Berries Green Life 400g_0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 7387.5
            }
        ]
    },
    {
        "id": 752,
        "name": "Mix de 3 Berries Congeladas 300 Grs",
        "price": 8500.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Mix de 3 Berries Congeladas 300 Grs_6.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 8500.0
            }
        ]
    },
    {
        "id": 753,
        "name": "Moras 550g Green Life",
        "price": 12000.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Moras 550g Green Life_7.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 12000.0
            }
        ]
    },
    {
        "id": 754,
        "name": "Frutillas Congeladas Enteras 1 Kg",
        "price": 13300.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Frutillas Congeladas Enteras 1 Kg_3.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 13300.0
            }
        ]
    },
    {
        "id": 755,
        "name": "Gaseosa Cola 500 Ml Pepsi",
        "price": 1400.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Cola 500 Ml Pepsi_9.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1050.0
            },
            {
                "date": "2026-07-06",
                "price": 2100.0
            },
            {
                "date": "2026-07-25",
                "price": 1575.0
            },
            {
                "date": "2026-08-03",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 756,
        "name": "Gaseosa Black Sin Azúcar 500 Ml Pepsi",
        "price": 1400.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Black Sin Azúcar 500 Ml Pepsi_15.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1050.0
            },
            {
                "date": "2026-07-06",
                "price": 2100.0
            },
            {
                "date": "2026-07-25",
                "price": 1575.0
            },
            {
                "date": "2026-08-03",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 757,
        "name": "Gaseosa Pepsi Lata 354ml X 1u",
        "price": 1500.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Pepsi  Lata 354ml X 1u_13.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1687.5
            },
            {
                "date": "2026-08-03",
                "price": 1500.0
            }
        ]
    },
    {
        "id": 758,
        "name": "Gaseosa Sabor Original 354 Ml Coca Cola",
        "price": 1726.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Sabor Original 354 Ml Coca Cola_4.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1533.33
            },
            {
                "date": "2026-05-30",
                "price": 2500.0
            },
            {
                "date": "2026-06-07",
                "price": 1666.67
            },
            {
                "date": "2026-07-06",
                "price": 2500.0
            },
            {
                "date": "2026-08-03",
                "price": 1726.67
            }
        ]
    },
    {
        "id": 759,
        "name": "Gaseosa Sin Azúcar Sabor Cola 354 Ml Coca Cola",
        "price": 1726.67,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Sin Azúcar Sabor Cola 354 Ml Coc_8.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1726.67
            }
        ]
    },
    {
        "id": 760,
        "name": "Gaseosa Cola 2.25 Lts Cunnington",
        "price": 1790.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Cola 225 Lts Cunnington_16.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 761,
        "name": "Gaseosa Sabor Naranja 2.25 Lts Mirinda",
        "price": 1950.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Sabor Naranja 225 Lts Mirinda_11.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1950.0
            }
        ]
    },
    {
        "id": 762,
        "name": "Gaseosa Cola Sabor Suave 2.25 Lts Cunnington",
        "price": 1990.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Cola Sabor Suave 225 Lts Cunning_6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1985.0
            },
            {
                "date": "2026-07-25",
                "price": 1890.0
            },
            {
                "date": "2026-08-03",
                "price": 1990.0
            }
        ]
    },
    {
        "id": 763,
        "name": "Gaseosa Cunnington Pomelo Suave 2.25lt",
        "price": 1990.0,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Cunnington Pomelo Suave 225lt_14.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1985.0
            },
            {
                "date": "2026-07-25",
                "price": 1890.0
            },
            {
                "date": "2026-08-03",
                "price": 1990.0
            }
        ]
    },
    {
        "id": 764,
        "name": "Gaseosa Sabor Original 600 Ml Coca-cola",
        "price": 2158.33,
        "market": "lumina",
        "category": "gaseosas",
        "image": "images\\vea/Gaseosa Sabor Original 600 Ml Coca-cola_3.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2500.0
            },
            {
                "date": "2026-07-25",
                "price": 2083.33
            },
            {
                "date": "2026-08-03",
                "price": 2158.33
            }
        ]
    },
    {
        "id": 765,
        "name": "Harina 000 1 Kg Morixe",
        "price": 790.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina 000 1 Kg Morixe_1.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 690.0
            },
            {
                "date": "2026-07-25",
                "price": 790.0
            }
        ]
    },
    {
        "id": 766,
        "name": "Harina 000 1 Kg Caserita",
        "price": 799.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina 000 1 Kg Caserita_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 900.0
            },
            {
                "date": "2026-05-02",
                "price": 675.0
            },
            {
                "date": "2026-05-09",
                "price": 900.0
            },
            {
                "date": "2026-05-23",
                "price": 675.0
            },
            {
                "date": "2026-05-30",
                "price": 900.0
            },
            {
                "date": "2026-06-21",
                "price": 849.0
            },
            {
                "date": "2026-07-06",
                "price": 799.0
            }
        ]
    },
    {
        "id": 767,
        "name": "Harina Cañuelas Ultra Refinada Vitamina D 1kg",
        "price": 799.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina Cañuelas Ultra Refinada Vitamina _14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 799.0
            }
        ]
    },
    {
        "id": 768,
        "name": "Harina 0000 1 Kg Morixe",
        "price": 890.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina 0000 1 Kg Morixe_3.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 999.0
            },
            {
                "date": "2026-07-25",
                "price": 890.0
            }
        ]
    },
    {
        "id": 769,
        "name": "Harina 000 1 Kg Valle Fertil",
        "price": 950.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina 000 1 Kg Valle Fertil_7.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 799.0
            },
            {
                "date": "2026-07-25",
                "price": 790.0
            },
            {
                "date": "2026-08-03",
                "price": 950.0
            }
        ]
    },
    {
        "id": 770,
        "name": "Harina Leudante Morixe 1 Kg",
        "price": 990.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina Leudante Morixe 1 Kg_6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1199.0
            },
            {
                "date": "2026-07-25",
                "price": 990.0
            }
        ]
    },
    {
        "id": 771,
        "name": "Harina 000 1 Kg Favorita",
        "price": 999.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina 000 1 Kg Favorita_10.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 999.0
            }
        ]
    },
    {
        "id": 772,
        "name": "Harina 0000 1 Kg Caserita",
        "price": 1390.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina 0000 1 Kg Caserita_11.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1300.0
            },
            {
                "date": "2026-05-23",
                "price": 975.0
            },
            {
                "date": "2026-05-30",
                "price": 1300.0
            },
            {
                "date": "2026-07-06",
                "price": 1199.0
            },
            {
                "date": "2026-08-03",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 773,
        "name": "Harina 0000 1 Kg Favorita",
        "price": 1499.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Harina 0000 1 Kg Favorita_18.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1600.0
            },
            {
                "date": "2026-07-06",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 774,
        "name": "Polenta Presto Pronta 490gr",
        "price": 1599.0,
        "market": "lumina",
        "category": "harinas",
        "image": "images\\vea/Polenta Presto Pronta 490gr_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1599.0
            }
        ]
    },
    {
        "id": 775,
        "name": "Bebida Isotónica Zero Sabor Fresa y Kiwi 400 Ml Gatorade",
        "price": 1349.25,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Bebida Isotónica Zero Sabor Fresa y Kiwi_8.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1040.0
            },
            {
                "date": "2026-07-06",
                "price": 1200.0
            },
            {
                "date": "2026-07-25",
                "price": 1450.0
            },
            {
                "date": "2026-08-03",
                "price": 1349.25
            }
        ]
    },
    {
        "id": 776,
        "name": "Bebida Isotónica Zero Sabor Moras 400 Ml Gatorade",
        "price": 1349.25,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Bebida Isotónica Zero Sabor Moras 400 Ml_16.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1040.0
            },
            {
                "date": "2026-07-06",
                "price": 1200.0
            },
            {
                "date": "2026-07-25",
                "price": 1450.0
            },
            {
                "date": "2026-08-03",
                "price": 1349.25
            }
        ]
    },
    {
        "id": 777,
        "name": "Bebida Isotónica Sabor Multifruta 500 Ml Full Sport",
        "price": 1350.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images\\vea/Bebida Isotónica Sabor Multifruta 500 Ml_13.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1350.0
            }
        ]
    },
    {
        "id": 778,
        "name": "Bebida Isotónica Sabor Mountain Blast 500 Ml Powerade",
        "price": 1460.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images\\vea/Bebida Isotónica Sabor Mountain Blast 50_0.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1500.0
            },
            {
                "date": "2026-06-21",
                "price": 1300.0
            },
            {
                "date": "2026-07-06",
                "price": 2000.0
            },
            {
                "date": "2026-08-03",
                "price": 1460.0
            }
        ]
    },
    {
        "id": 779,
        "name": "Bebida Isotónica Sabor Frutas Tropicales 500 Cc Powerade",
        "price": 1460.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images\\vea/Bebida Isotónica Sabor Frutas Tropicales_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2000.0
            },
            {
                "date": "2026-08-03",
                "price": 1460.0
            }
        ]
    },
    {
        "id": 780,
        "name": "Bebida Isotónica Sabor Manzana 500 Ml Powerade",
        "price": 1460.0,
        "market": "lumina",
        "category": "isotonicas",
        "image": "images\\vea/Bebida Isotónica Sabor Manzana 500 Ml Po_5.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2000.0
            },
            {
                "date": "2026-08-03",
                "price": 1460.0
            }
        ]
    },
    {
        "id": 781,
        "name": "Bebida Isotónica Sabor Manzana 500 Ml Gatorade",
        "price": 1725.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Bebida Isotónica Sabor Manzana 500 Ml Ga_9.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1495.0
            },
            {
                "date": "2026-07-06",
                "price": 1725.0
            },
            {
                "date": "2026-07-25",
                "price": 1950.0
            },
            {
                "date": "2026-08-03",
                "price": 1725.0
            }
        ]
    },
    {
        "id": 782,
        "name": "Bebida Isotónica Sabor Cool Blue 500 Ml Gatorade",
        "price": 1725.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Bebida Isotónica Sabor Cool Blue 500 Ml _10.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 1687.5
            },
            {
                "date": "2026-05-16",
                "price": 1462.5
            },
            {
                "date": "2026-05-23",
                "price": 1687.5
            },
            {
                "date": "2026-06-21",
                "price": 1495.0
            },
            {
                "date": "2026-07-06",
                "price": 1725.0
            },
            {
                "date": "2026-07-25",
                "price": 1950.0
            },
            {
                "date": "2026-08-03",
                "price": 1725.0
            }
        ]
    },
    {
        "id": 783,
        "name": "Bebida Isotónica Sabor Uva 500 Ml Gatorade",
        "price": 1725.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Bebida Isotónica Sabor Uva 500 Ml Gatora_12.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1725.0
            },
            {
                "date": "2026-07-25",
                "price": 1950.0
            },
            {
                "date": "2026-08-03",
                "price": 1725.0
            }
        ]
    },
    {
        "id": 784,
        "name": "Bebida Isotónica Sabor Naranja 500 Ml Gatorade",
        "price": 1725.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Bebida Isotónica Sabor Naranja 500 Ml Ga_17.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1495.0
            },
            {
                "date": "2026-07-06",
                "price": 1725.0
            },
            {
                "date": "2026-07-25",
                "price": 1950.0
            },
            {
                "date": "2026-08-03",
                "price": 1725.0
            }
        ]
    },
    {
        "id": 785,
        "name": "Jugo en Polvo Sabor Naranja Dulce 15 Grs Arcor",
        "price": 250.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Naranja Dulce 15 Grs_10.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 200.0
            },
            {
                "date": "2026-07-06",
                "price": 400.0
            },
            {
                "date": "2026-07-25",
                "price": 250.0
            }
        ]
    },
    {
        "id": 786,
        "name": "Jugo en Polvo Sabor Manzana 15 Grs Arcor",
        "price": 250.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Manzana 15 Grs Arcor_17.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 250.0
            }
        ]
    },
    {
        "id": 787,
        "name": "Jugo en Polvo Sabor Naranja y Mango 15 Grs Arcor",
        "price": 250.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Naranja y Mango 15 G_18.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 250.0
            }
        ]
    },
    {
        "id": 788,
        "name": "Jugo en Polvo Sabor Naranja 15 Grs Arcor",
        "price": 250.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Naranja 15 Grs Arcor_19.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 250.0
            }
        ]
    },
    {
        "id": 789,
        "name": "Jugo en Polvo Sabor Naranja Dulce 7,5 Grs Clight",
        "price": 350.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Naranja Dulce 75 Grs_0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 350.0
            }
        ]
    },
    {
        "id": 790,
        "name": "Jugo en Polvo Sabor Manzana 7 Grs Clight",
        "price": 350.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Manzana 7 Grs Clight_2.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 350.0
            }
        ]
    },
    {
        "id": 791,
        "name": "Jugo en Polvo Sabor Pomelo Rosado 8 Grs Clight",
        "price": 350.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Pomelo Rosado 8 Grs _4.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 350.0
            }
        ]
    },
    {
        "id": 792,
        "name": "Jugo en Polvo Sabor Limonada 8 Grs Clight",
        "price": 350.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Limonada 8 Grs Cligh_6.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 350.0
            }
        ]
    },
    {
        "id": 793,
        "name": "Jugo En Polvo Ananá 7 Grs Clight",
        "price": 350.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo En Polvo Ananá 7 Grs Clight_13.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 350.0
            }
        ]
    },
    {
        "id": 794,
        "name": "Jugo en Polvo Sabor Naranja 8 Grs Clight",
        "price": 350.0,
        "market": "lumina",
        "category": "jugos",
        "image": "images\\vea/Jugo en Polvo Sabor Naranja 8 Grs Clight_14.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 350.0
            }
        ]
    },
    {
        "id": 795,
        "name": "Yogur Sabor Vainilla Firme Semidescremado 120 Grs La Serenisima",
        "price": 989.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Yogur Sabor Vainilla Firme Semidescremad_13.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 899.0
            },
            {
                "date": "2026-08-03",
                "price": 989.0
            }
        ]
    },
    {
        "id": 796,
        "name": "Yogurt Sabor Frutilla Firme Semidescremado 120 Grs La Serenisima",
        "price": 989.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Yogurt Sabor Frutilla Firme Semidescrema_19.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 899.0
            },
            {
                "date": "2026-08-03",
                "price": 989.0
            }
        ]
    },
    {
        "id": 797,
        "name": "Leche Semi Descremada 1 Lts Cuisine & Co",
        "price": 1673.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Semi Descremada 1 Lts Cuisine  Co_1.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1673.0
            }
        ]
    },
    {
        "id": 798,
        "name": "Leche Entera 1 Lts Manfrey",
        "price": 1790.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Entera 1 Lts Manfrey_3.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1850.0
            },
            {
                "date": "2026-08-03",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 799,
        "name": "Leche Entera Larga Vida 1 Lts Cuisine & Co",
        "price": 1790.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Entera Larga Vida 1 Lts Cuisine  C_7.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1589.0
            },
            {
                "date": "2026-08-03",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 800,
        "name": "Leche Parcialmente Descremada 1uat Sachet Cuisine & Co",
        "price": 1790.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Parcialmente Descremada 1uat Sache_12.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1589.0
            },
            {
                "date": "2026-08-03",
                "price": 1790.0
            }
        ]
    },
    {
        "id": 801,
        "name": "Leche Entera Clásica 1 Lts Las Tres Niñas",
        "price": 1957.5,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Entera Clásica 1 Lts Las Tres Niña_6.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1957.5
            }
        ]
    },
    {
        "id": 802,
        "name": "Leche Desc Ls Reduc. Lactosa Sachet 1l",
        "price": 1975.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Desc Ls Reduc Lactosa Sachet 1l_8.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1975.0
            }
        ]
    },
    {
        "id": 803,
        "name": "Leche Entera 3% Sachet 1 Lts La Serenísima",
        "price": 1975.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Entera 3 Sachet 1 Lts La Serenísim_16.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1975.0
            }
        ]
    },
    {
        "id": 804,
        "name": "Postre Sabor Dulce de Leche y Crema 1 Un 100 Grs Danette",
        "price": 2025.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Postre Sabor Dulce de Leche y Crema 1 Un_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2025.0
            }
        ]
    },
    {
        "id": 805,
        "name": "Leche en Polvo Descremada 200 Grs La Serenisima",
        "price": 3599.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche en Polvo Descremada 200 Grs La Ser_12.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 3800.0
            },
            {
                "date": "2026-07-06",
                "price": 3599.0
            }
        ]
    },
    {
        "id": 806,
        "name": "Leche Condensada 395 Grs Cuisine & Co",
        "price": 4489.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Condensada 395 Grs Cuisine  Co_10.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3100.0
            },
            {
                "date": "2026-03-28",
                "price": 4450.0
            },
            {
                "date": "2026-05-16",
                "price": 3115.0
            },
            {
                "date": "2026-05-23",
                "price": 4450.0
            },
            {
                "date": "2026-05-30",
                "price": 4950.0
            },
            {
                "date": "2026-06-07",
                "price": 3465.0
            },
            {
                "date": "2026-06-14",
                "price": 4950.0
            },
            {
                "date": "2026-07-06",
                "price": 4489.0
            }
        ]
    },
    {
        "id": 807,
        "name": "Leche Descremada en Polvo 400 Grs Cuisine y Co",
        "price": 4500.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Descremada en Polvo 400 Grs Cuisin_11.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 4489.0
            },
            {
                "date": "2026-08-03",
                "price": 4500.0
            }
        ]
    },
    {
        "id": 808,
        "name": "Leche en Polvo Entera 400 Grs Cuisine y Co",
        "price": 4660.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche en Polvo Entera 400 Grs Cuisine y _6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 4659.0
            },
            {
                "date": "2026-08-03",
                "price": 4660.0
            }
        ]
    },
    {
        "id": 809,
        "name": "Leche Condensada Descremada Orgánica 395 Grs Nestlé®",
        "price": 4999.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Condensada Descremada Orgánica 395_14.jpg",
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
            },
            {
                "date": "2026-05-16",
                "price": 2725.0
            },
            {
                "date": "2026-05-23",
                "price": 3999.0
            },
            {
                "date": "2026-05-30",
                "price": 5450.0
            },
            {
                "date": "2026-07-06",
                "price": 4999.0
            }
        ]
    },
    {
        "id": 810,
        "name": "Leche Condensada 395 Grs Nestle",
        "price": 5199.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Condensada 395 Grs Nestle_1.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5199.0
            }
        ]
    },
    {
        "id": 811,
        "name": "Leche Polvo Extra Calcio 370 Grs Svelty®",
        "price": 6590.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche Polvo Extra Calcio 370 Grs Svelty_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 6590.0
            }
        ]
    },
    {
        "id": 812,
        "name": "Leche en Polvo Nutrifuerza 400 Grs La Lechera",
        "price": 7199.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche en Polvo Nutrifuerza 400 Grs La Le_17.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 7199.0
            }
        ]
    },
    {
        "id": 813,
        "name": "Leche en Polvo Deslactosada 400 Grs Purisima",
        "price": 7590.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche en Polvo Deslactosada 400 Grs Puri_4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 7099.0
            },
            {
                "date": "2026-07-25",
                "price": 7590.0
            }
        ]
    },
    {
        "id": 814,
        "name": "Leche en Polvo Entera 800 Grs Cuisine y Co",
        "price": 7909.0,
        "market": "lumina",
        "category": "leches",
        "image": "images\\vea/Leche en Polvo Entera 800 Grs Cuisine y _3.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 7909.0
            }
        ]
    },
    {
        "id": 815,
        "name": "Esponja De Acero Inoxidable 13 Gr Dea",
        "price": 600.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Esponja De Acero Inoxidable 13 Gr Dea_16.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 600.0
            }
        ]
    },
    {
        "id": 816,
        "name": "Esponja Antirrayas 1 Un Alklin",
        "price": 750.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Esponja Antirrayas 1 Un Alklin_17.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 750.0
            }
        ]
    },
    {
        "id": 817,
        "name": "Esponja Go! Salvauñas",
        "price": 900.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Esponja Go Salvauñas_5.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1200.0
            },
            {
                "date": "2026-08-03",
                "price": 900.0
            }
        ]
    },
    {
        "id": 818,
        "name": "Esponja Lisa de Poliéster 90 x 65 x 35 Cm 1 Un Home Care",
        "price": 950.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Esponja Lisa de Poliéster 90 x 65 x 35 C_14.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 617.5
            },
            {
                "date": "2026-06-21",
                "price": 950.0
            }
        ]
    },
    {
        "id": 819,
        "name": "Esponja de Acero Inoxidable x 1 Un Mortimer",
        "price": 1099.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Esponja de Acero Inoxidable x 1 Un Morti_3.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1099.0
            }
        ]
    },
    {
        "id": 820,
        "name": "Esponja Cuadriculada 10 x 6 x 3.6 Cm x 1 Un Mortimer",
        "price": 1250.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Esponja Cuadriculada 10 x 6 x 36 Cm x 1 _0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1250.0
            }
        ]
    },
    {
        "id": 821,
        "name": "Rejilla Home Care Cocina",
        "price": 1320.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Rejilla Home Care Cocina_1.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 1240.0
            },
            {
                "date": "2026-07-06",
                "price": 1320.0
            }
        ]
    },
    {
        "id": 822,
        "name": "Trapo de Piso Gris 48x50 Cm x 1 Un",
        "price": 1550.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Trapo de Piso Gris 48x50 Cm x 1 Un_2.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1550.0
            }
        ]
    },
    {
        "id": 823,
        "name": "Esponja de Cocina Poderosa x 1 Un Mortimer",
        "price": 1600.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Esponja de Cocina Poderosa x 1 Un Mortim_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 824,
        "name": "Paño Rejilla Costero Blanco Optico Super Cocina 1 U",
        "price": 1600.0,
        "market": "lumina",
        "category": "limpieza",
        "image": "images\\vea/Paño Rejilla Costero Blanco Optico Super_12.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1600.0
            }
        ]
    },
    {
        "id": 825,
        "name": "Alimento Para Gatos Whiskas Pasta Salmón 85 Gr",
        "price": 1400.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Alimento Para Gatos Whiskas Pasta Salmón_5.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 900.0
            },
            {
                "date": "2026-05-09",
                "price": 945.0
            },
            {
                "date": "2026-05-16",
                "price": 1012.5
            },
            {
                "date": "2026-05-23",
                "price": 1350.0
            },
            {
                "date": "2026-06-07",
                "price": 900.0
            },
            {
                "date": "2026-06-21",
                "price": 933.33
            },
            {
                "date": "2026-07-06",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 826,
        "name": "Alimento para Gatos Húmedo Sabor Pavo Adultos 85 Grs Whiskas",
        "price": 1400.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento para Gatos Húmedo Sabor Pavo Ad_8.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 827,
        "name": "Alimento Para Gatos Whiskas Pasta Pollo 85 Gr",
        "price": 1400.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento Para Gatos Whiskas Pasta Pollo _11.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1400.0
            }
        ]
    },
    {
        "id": 828,
        "name": "Alimento para Gatos Húmedo Sabor Pollo Adultos 85 Grs Purina Cat Chow",
        "price": 1690.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento para Gatos Húmedo Sabor Pollo A_2.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1650.0
            },
            {
                "date": "2026-08-03",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 829,
        "name": "Alimento para Gatos Húmedo Sabor Pollo Cachorros 85 Grs Purina Cat Chow",
        "price": 1690.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento para Gatos Húmedo Sabor Pollo C_4.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1650.0
            },
            {
                "date": "2026-08-03",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 830,
        "name": "Alimento para Gatos Húmedo Sabor Pescado Adultos 85 Grs Purina Cat Chow",
        "price": 1690.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento para Gatos Húmedo Sabor Pescado_7.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1650.0
            },
            {
                "date": "2026-08-03",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 831,
        "name": "Alimento Humedo Cat Chow Estir.pescados",
        "price": 1690.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento Humedo Cat Chow Estirpescados_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1650.0
            },
            {
                "date": "2026-08-03",
                "price": 1690.0
            }
        ]
    },
    {
        "id": 832,
        "name": "Alimento para Gatos Sabor Pescado Todas las Edades 1 Kg Sabrositos",
        "price": 3990.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento para Gatos Sabor Pescado Todas _12.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 3800.0
            },
            {
                "date": "2026-06-14",
                "price": 2850.0
            },
            {
                "date": "2026-06-21",
                "price": 3800.0
            },
            {
                "date": "2026-08-03",
                "price": 3990.0
            }
        ]
    },
    {
        "id": 833,
        "name": "Alimento Gatos Cat Chow Adulto Carne Pollo 500 Gr",
        "price": 4490.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Alimento Gatos Cat Chow Adulto Carne Pol_16.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 4100.0
            },
            {
                "date": "2026-08-03",
                "price": 4490.0
            }
        ]
    },
    {
        "id": 834,
        "name": "Alimento para Gatos Sabor Pescado y Pollo Adultos 500 Grs Cat Chow",
        "price": 4490.0,
        "market": "lumina",
        "category": "gatos",
        "image": "images\\vea/Alimento Gatos Cat Chow Adulto Carne Pol_0.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 4100.0
            },
            {
                "date": "2026-08-03",
                "price": 4490.0
            }
        ]
    },
    {
        "id": 835,
        "name": "Alimento para Perros Húmedo Sabor Carne Adultos 100 Grs Pet's Class",
        "price": 1200.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Alimento para Perros Húmedo Sabor Carne _10.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 836,
        "name": "Alimento para Perros Húmedo Sabor Pollo y Leche Cachorros 85 Grs Pet's Class",
        "price": 1200.0,
        "market": "lumina",
        "category": "perros",
        "image": "images\\vea/Alimento para Perros Húmedo Sabor Pollo _18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1200.0
            }
        ]
    },
    {
        "id": 837,
        "name": "Alimento para Perros Húmedo Sabor Carne Adulto Razas Pequeñas 100 Grs Pedigree",
        "price": 1399.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Alimento para Perros Húmedo Sabor Carne _3.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 932.67
            },
            {
                "date": "2026-07-06",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 838,
        "name": "Alimento para Perros Húmedo Sabor Pollo Adulto Razas Pequeñas 100 Grs Pedigree",
        "price": 1399.0,
        "market": "lumina",
        "category": "perros",
        "image": "images\\vea/Alimento para Perros Húmedo Sabor Pollo _4.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 932.67
            },
            {
                "date": "2026-07-06",
                "price": 1399.0
            }
        ]
    },
    {
        "id": 839,
        "name": "Alimento para Perros Orgánico Sabor Carne, Pollo y Cerdo Adultos 1.5 Kg Sabrositos",
        "price": 4190.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Alimento para Perros Orgánico Sabor Carn_11.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 3850.0
            },
            {
                "date": "2026-06-14",
                "price": 2887.5
            },
            {
                "date": "2026-06-21",
                "price": 3850.0
            },
            {
                "date": "2026-08-03",
                "price": 4190.0
            }
        ]
    },
    {
        "id": 840,
        "name": "Snacks Dentastix Razas Mediano Cuidado Oral",
        "price": 5200.0,
        "market": "lumina",
        "category": "snacks",
        "image": "images\\vea/Snacks Dentastix Razas Mediano Cuidado O_12.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 5200.0
            },
            {
                "date": "2026-06-07",
                "price": 3900.0
            },
            {
                "date": "2026-06-14",
                "price": 5200.0
            },
            {
                "date": "2026-06-21",
                "price": 3900.0
            },
            {
                "date": "2026-07-06",
                "price": 5200.0
            }
        ]
    },
    {
        "id": 841,
        "name": "Alimento para Perros Seco Saborizado Adultos Medianos y Grandes 1,5 Kg Dog Chow",
        "price": 5790.0,
        "market": "lumina",
        "category": "perros",
        "image": "images\\vea/Alimento para Perros Seco Saborizado Adu_1.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 3850.0
            },
            {
                "date": "2026-05-23",
                "price": 4125.0
            },
            {
                "date": "2026-05-30",
                "price": 3850.0
            },
            {
                "date": "2026-06-07",
                "price": 4125.0
            },
            {
                "date": "2026-06-14",
                "price": 5500.0
            },
            {
                "date": "2026-08-03",
                "price": 5790.0
            }
        ]
    },
    {
        "id": 842,
        "name": "Alimento para Perros Seco Sabor Carnes, Cereales y Vegetales Cachorro 3 Kg Sabrositos",
        "price": 9190.0,
        "market": "lumina",
        "category": "carnes",
        "image": "images\\vea/Alimento para Perros Seco Sabor Carnes C_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 8750.0
            },
            {
                "date": "2026-08-03",
                "price": 9190.0
            }
        ]
    },
    {
        "id": 843,
        "name": "Alimento para Perros Seco Saborizado Adultos 3 Kg Dogui",
        "price": 9650.0,
        "market": "lumina",
        "category": "perros",
        "image": "images\\vea/Alimento para Perros Seco Saborizado Adu_14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 9650.0
            }
        ]
    },
    {
        "id": 844,
        "name": "Alimento para Perros Seco Saborizado Adulto Mini y Pequeño 3 Kg Dog Chow",
        "price": 13290.0,
        "market": "lumina",
        "category": "perros",
        "image": "images\\vea/Alimento para Perros Seco Saborizado Adu_6.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 13050.0
            },
            {
                "date": "2026-08-03",
                "price": 13290.0
            }
        ]
    },
    {
        "id": 845,
        "name": "Papel Higienico Simple Hoja 4x30 M Family Care",
        "price": 909.3,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Papel Higienico Simple Hoja 4x30 M Famil_0.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1649.0
            },
            {
                "date": "2026-05-16",
                "price": 1477.0
            },
            {
                "date": "2026-05-30",
                "price": 1649.0
            },
            {
                "date": "2026-06-07",
                "price": 1345.5
            },
            {
                "date": "2026-06-14",
                "price": 1649.0
            },
            {
                "date": "2026-08-03",
                "price": 909.3
            }
        ]
    },
    {
        "id": 846,
        "name": "Papel Higiénico Texturado Hoja Simple x 4 Un Campanita",
        "price": 1290.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Papel Higiénico Texturado Hoja Simple x _10.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1220.0
            },
            {
                "date": "2026-07-25",
                "price": 1190.0
            },
            {
                "date": "2026-08-03",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 847,
        "name": "Rollo de Cocina Doble Hoja 19 Cm x 18.7 Cm x 3 Un Sol Mayor",
        "price": 1390.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Rollo de Cocina Doble Hoja 19 Cm x 187 C_13.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1400.0
            },
            {
                "date": "2026-07-25",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 848,
        "name": "Papel Higienico Elegante Simple Hoja 4x30m",
        "price": 1899.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Papel Higienico Elegante Simple Hoja 4x3_14.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1495.0
            },
            {
                "date": "2026-06-21",
                "price": 1785.0
            },
            {
                "date": "2026-07-06",
                "price": 1899.0
            }
        ]
    },
    {
        "id": 849,
        "name": "Rollo de Cocina Doble Hoja 50 Paños x 3 Un Home Care",
        "price": 1990.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Rollo de Cocina Doble Hoja 50 Paños x 3 _4.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1799.0
            },
            {
                "date": "2026-07-25",
                "price": 1990.0
            }
        ]
    },
    {
        "id": 850,
        "name": "Papel Higiénico Fresh Hoja Simple 30 Mts x 4 Un Higienol",
        "price": 1990.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Papel Higiénico Fresh Hoja Simple 30 Mts_6.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1499.0
            },
            {
                "date": "2026-07-25",
                "price": 1990.0
            }
        ]
    },
    {
        "id": 851,
        "name": "Rollo de Cocina Doble Hoja 200 Paños x 1 Un Home Care",
        "price": 2199.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Rollo de Cocina Doble Hoja 200 Paños x 1_1.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2199.0
            },
            {
                "date": "2026-07-25",
                "price": 1649.25
            },
            {
                "date": "2026-08-03",
                "price": 2199.0
            }
        ]
    },
    {
        "id": 852,
        "name": "Rollo de Cocina 50 Paños x 3 Un Elegante",
        "price": 2490.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Rollo de Cocina 50 Paños x 3 Un Elegante_12.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2199.0
            },
            {
                "date": "2026-07-25",
                "price": 2490.0
            }
        ]
    },
    {
        "id": 853,
        "name": "Rollo de Cocina Doble Hoja 150 Un x 3 Un Sussex",
        "price": 2590.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Rollo de Cocina Doble Hoja 150 Un x 3 Un_2.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1999.0
            },
            {
                "date": "2026-07-25",
                "price": 2590.0
            }
        ]
    },
    {
        "id": 854,
        "name": "Rollo de Cocina Doble Hoja 200 Paños x 1 Un Elegante",
        "price": 2690.0,
        "market": "lumina",
        "category": "papeles",
        "image": "images\\vea/Rollo de Cocina Doble Hoja 200 Paños x 1_5.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2690.0
            }
        ]
    },
    {
        "id": 855,
        "name": "Pollo Entero con Menudos 1,8 Kg",
        "price": 3299.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Pollo Entero con Menudos 18 Kg_4.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 4299.0
            },
            {
                "date": "2026-05-23",
                "price": 3799.0
            },
            {
                "date": "2026-05-30",
                "price": 4299.0
            },
            {
                "date": "2026-06-07",
                "price": 3499.0
            },
            {
                "date": "2026-06-14",
                "price": 4299.0
            },
            {
                "date": "2026-07-25",
                "price": 3499.0
            },
            {
                "date": "2026-08-03",
                "price": 3299.0
            }
        ]
    },
    {
        "id": 856,
        "name": "Cuarto Trasero de Pollo Fresco",
        "price": 3499.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Cuarto Trasero de Pollo Fresco_0.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 3799.0
            },
            {
                "date": "2026-05-30",
                "price": 3999.0
            },
            {
                "date": "2026-06-07",
                "price": 3799.0
            },
            {
                "date": "2026-07-06",
                "price": 4399.0
            },
            {
                "date": "2026-07-25",
                "price": 3799.0
            },
            {
                "date": "2026-08-03",
                "price": 3499.0
            }
        ]
    },
    {
        "id": 857,
        "name": "Pollo Congelado Con Menudos",
        "price": 3999.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Pollo Congelado Con Menudos_2.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 3999.0
            },
            {
                "date": "2026-06-14",
                "price": 3399.0
            },
            {
                "date": "2026-07-06",
                "price": 3999.0
            }
        ]
    },
    {
        "id": 858,
        "name": "Pollo Parrillero",
        "price": 5449.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Pollo Parrillero_8.jpg",
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
            },
            {
                "date": "2026-05-23",
                "price": 5199.0
            },
            {
                "date": "2026-06-21",
                "price": 5449.0
            }
        ]
    },
    {
        "id": 859,
        "name": "Muslo de Pollo Fresco",
        "price": 7290.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Muslo de Pollo Fresco_6.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 6699.0
            },
            {
                "date": "2026-05-23",
                "price": 6999.0
            },
            {
                "date": "2026-07-25",
                "price": 7290.0
            }
        ]
    },
    {
        "id": 860,
        "name": "Pata De Pollo",
        "price": 8690.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Pata De Pollo_5.jpg",
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
            },
            {
                "date": "2026-05-23",
                "price": 8349.0
            },
            {
                "date": "2026-07-25",
                "price": 8690.0
            }
        ]
    },
    {
        "id": 861,
        "name": "Suprema De Pollo Granel Fresca",
        "price": 8999.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Suprema De Pollo Granel Fresca_1.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 9990.0
            },
            {
                "date": "2026-05-09",
                "price": 11990.0
            },
            {
                "date": "2026-05-23",
                "price": 9899.0
            },
            {
                "date": "2026-06-14",
                "price": 11990.0
            },
            {
                "date": "2026-06-21",
                "price": 9899.0
            },
            {
                "date": "2026-07-06",
                "price": 11990.0
            },
            {
                "date": "2026-07-25",
                "price": 8999.0
            }
        ]
    },
    {
        "id": 862,
        "name": "Suprema De Pollo Granel Congelada.",
        "price": 9299.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Suprema De Pollo Granel Congelada_3.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 7999.0
            },
            {
                "date": "2026-07-06",
                "price": 9299.0
            }
        ]
    },
    {
        "id": 863,
        "name": "Pavita Sadia X Kg",
        "price": 13749.0,
        "market": "lumina",
        "category": "all",
        "image": "images\\vea/Pavita Sadia X Kg_7.jpg",
        "history": [
            {
                "date": "2026-03-16",
                "price": 13749.0
            }
        ]
    },
    {
        "id": 864,
        "name": "Salchichas 66 X 6 190 Grs",
        "price": 1189.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Salchichas 66 X 6 190 Grs_18.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1189.0
            }
        ]
    },
    {
        "id": 865,
        "name": "Salchichas Familiares x 6 Un 190 Grs Cuisine & Co",
        "price": 1289.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Salchichas Familiares x 6 Un 190 Grs Cui_15.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1289.0
            }
        ]
    },
    {
        "id": 866,
        "name": "Salchichas Cocidas sin Piel x 6 Un 190 Grs La Blanca",
        "price": 1390.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Salchichas Cocidas sin Piel x 6 Un 190 G_16.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1350.0
            },
            {
                "date": "2026-08-03",
                "price": 1390.0
            }
        ]
    },
    {
        "id": 867,
        "name": "Queso Reggianito Rallado 35 Grs x 1 Un La Serenisima",
        "price": 1792.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Reggianito Rallado 35 Grs x 1 Un L_17.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1350.0
            },
            {
                "date": "2026-05-02",
                "price": 1462.5
            },
            {
                "date": "2026-05-09",
                "price": 1726.0
            },
            {
                "date": "2026-05-23",
                "price": 1294.5
            },
            {
                "date": "2026-05-30",
                "price": 1208.2
            },
            {
                "date": "2026-06-07",
                "price": 1726.0
            },
            {
                "date": "2026-07-25",
                "price": 1792.0
            }
        ]
    },
    {
        "id": 868,
        "name": "Queso Reggianito Rallado 40 Grs La Paulina",
        "price": 1850.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Reggianito Rallado 40 Grs La Pauli_12.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1850.0
            }
        ]
    },
    {
        "id": 869,
        "name": "Queso Crema Blanco x 290 Grs La Serenísima Clásico",
        "price": 2989.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Crema Blanco x 290 Grs La Serenísi_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 2499.0
            },
            {
                "date": "2026-08-03",
                "price": 2989.0
            }
        ]
    },
    {
        "id": 870,
        "name": "Queso Crema Blanco Fresco 500 Grs Casancrem",
        "price": 5990.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Crema Blanco Fresco 500 Grs Casanc_10.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5990.0
            }
        ]
    },
    {
        "id": 871,
        "name": "Queso Rallado x 0.15 Kg La Paulina",
        "price": 6158.0,
        "market": "lumina",
        "category": "fiambres",
        "image": "images\\vea/Queso Rallado x 015 Kg La Paulina_14.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 6158.0
            }
        ]
    },
    {
        "id": 872,
        "name": "Sal Fina 500 Grs Dos Estrellas",
        "price": 790.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Fina 500 Grs Dos Estrellas_2.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 649.0
            },
            {
                "date": "2026-08-03",
                "price": 790.0
            }
        ]
    },
    {
        "id": 873,
        "name": "Sal Gruesa 1 Kg Dos Estrellas",
        "price": 1290.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Gruesa 1 Kg Dos Estrellas_8.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1099.0
            },
            {
                "date": "2026-07-25",
                "price": 1190.0
            },
            {
                "date": "2026-08-03",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 874,
        "name": "Sal Entrefina 1 Kg Estrella de Mar",
        "price": 1290.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Entrefina 1 Kg Estrella de Mar_12.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1190.0
            },
            {
                "date": "2026-08-03",
                "price": 1290.0
            }
        ]
    },
    {
        "id": 875,
        "name": "Sal Entrefina para Parrilla 500 Grs Celusal",
        "price": 1487.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Entrefina para Parrilla 500 Grs Celu_9.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1487.0
            }
        ]
    },
    {
        "id": 876,
        "name": "Sal Gruesa 500 Grs Celusal",
        "price": 1487.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Gruesa 500 Grs Celusal_11.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1450.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-06-07",
                "price": 1549.0
            },
            {
                "date": "2026-06-14",
                "price": 1487.0
            }
        ]
    },
    {
        "id": 877,
        "name": "Sal Fina 500 Grs Dos Anclas",
        "price": 1488.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Fina 500 Grs Dos Anclas_1.jpg",
        "history": [
            {
                "date": "2026-07-06",
                "price": 1435.0
            },
            {
                "date": "2026-07-25",
                "price": 1488.0
            }
        ]
    },
    {
        "id": 878,
        "name": "Sal Parrillera Entrefina 500 Grs Dos Anclas",
        "price": 1499.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Parrillera Entrefina 500 Grs Dos Anc_4.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            },
            {
                "date": "2026-05-02",
                "price": 1332.0
            },
            {
                "date": "2026-05-23",
                "price": 1400.0
            },
            {
                "date": "2026-07-25",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 879,
        "name": "Sal Gruesa 500 Grs Dos Anclas",
        "price": 1499.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Gruesa 500 Grs Dos Anclas_5.jpg",
        "history": [
            {
                "date": "2026-04-18",
                "price": 1050.0
            },
            {
                "date": "2026-04-25",
                "price": 1400.0
            },
            {
                "date": "2026-05-02",
                "price": 1332.0
            },
            {
                "date": "2026-05-23",
                "price": 1400.0
            },
            {
                "date": "2026-07-25",
                "price": 1499.0
            }
        ]
    },
    {
        "id": 880,
        "name": "Sal Fina 500 Grs Celusal",
        "price": 1549.0,
        "market": "lumina",
        "category": "sal",
        "image": "images\\vea/Sal Fina 500 Grs Celusal_0.jpg",
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
            },
            {
                "date": "2026-05-02",
                "price": 1450.0
            },
            {
                "date": "2026-05-02",
                "price": 1750.0
            },
            {
                "date": "2026-05-02",
                "price": 1450.0
            },
            {
                "date": "2026-05-02",
                "price": 1750.0
            },
            {
                "date": "2026-05-03",
                "price": 1450.0
            },
            {
                "date": "2026-05-03",
                "price": 1750.0
            },
            {
                "date": "2026-05-03",
                "price": 1450.0
            },
            {
                "date": "2026-05-03",
                "price": 1750.0
            },
            {
                "date": "2026-05-03",
                "price": 1450.0
            },
            {
                "date": "2026-05-03",
                "price": 1750.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-05-09",
                "price": 1750.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-05-09",
                "price": 1750.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-05-09",
                "price": 1750.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-05-09",
                "price": 1750.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-05-09",
                "price": 1750.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-05-09",
                "price": 1750.0
            },
            {
                "date": "2026-05-09",
                "price": 1503.0
            },
            {
                "date": "2026-05-09",
                "price": 1750.0
            },
            {
                "date": "2026-05-16",
                "price": 1800.0
            },
            {
                "date": "2026-07-06",
                "price": 1549.0
            }
        ]
    },
    {
        "id": 881,
        "name": "AGUA 401 600 CC",
        "price": 449.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA 401 600 CC.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 399.91
            },
            {
                "date": "2026-08-03",
                "price": 449.9
            }
        ]
    },
    {
        "id": 882,
        "name": "AGUA CELLIER 600 ML",
        "price": 449.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA CELLIER 600 ML.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 419.89
            },
            {
                "date": "2026-05-02",
                "price": 469.89
            },
            {
                "date": "2026-05-23",
                "price": 499.9
            },
            {
                "date": "2026-05-30",
                "price": 399.91
            },
            {
                "date": "2026-06-07",
                "price": 499.9
            },
            {
                "date": "2026-08-03",
                "price": 449.9
            }
        ]
    },
    {
        "id": 883,
        "name": "AGUA 401 2 LT",
        "price": 649.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA 401 2 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 589.9
            },
            {
                "date": "2026-06-21",
                "price": 569.9
            },
            {
                "date": "2026-07-25",
                "price": 549.9
            },
            {
                "date": "2026-08-03",
                "price": 649.9
            }
        ]
    },
    {
        "id": 884,
        "name": "AGUA DASH BAJA SODIO 2 LT",
        "price": 749.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA DASH BAJA SODIO 2 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 749.9
            }
        ]
    },
    {
        "id": 885,
        "name": "AGUA CELLIER 2 LT",
        "price": 949.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA CELLIER 2 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 848.43
            },
            {
                "date": "2026-05-09",
                "price": 799.91
            },
            {
                "date": "2026-05-23",
                "price": 949.9
            },
            {
                "date": "2026-06-07",
                "price": 799.91
            },
            {
                "date": "2026-06-14",
                "price": 949.9
            }
        ]
    },
    {
        "id": 886,
        "name": "AGUA BENEDICTINO 500 CC",
        "price": 1149.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA BENEDICTINO 500 CC.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1049.89
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-08-03",
                "price": 1149.9
            }
        ]
    },
    {
        "id": 887,
        "name": "AGUA GLACIAR SIN GAS 500 cc",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA GLACIAR SIN GAS 500 cc.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.9
            },
            {
                "date": "2026-05-02",
                "price": 1049.89
            },
            {
                "date": "2026-05-09",
                "price": 1049.9
            },
            {
                "date": "2026-05-16",
                "price": 949.9
            },
            {
                "date": "2026-05-23",
                "price": 1049.9
            },
            {
                "date": "2026-06-14",
                "price": 1099.9
            },
            {
                "date": "2026-06-21",
                "price": 999.9
            },
            {
                "date": "2026-07-25",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 888,
        "name": "AGUA NESTLE PUREZA VITAL 1.5 LT",
        "price": 1349.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA NESTLE PUREZA VITAL 15 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1149.9
            },
            {
                "date": "2026-05-02",
                "price": 1099.9
            },
            {
                "date": "2026-05-09",
                "price": 1199.9
            },
            {
                "date": "2026-06-07",
                "price": 1099.9
            },
            {
                "date": "2026-06-14",
                "price": 1299.9
            },
            {
                "date": "2026-07-25",
                "price": 1199.9
            },
            {
                "date": "2026-08-03",
                "price": 1349.9
            }
        ]
    },
    {
        "id": 889,
        "name": "AGUA VILLA DEL SUR 600 CC",
        "price": 1399.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA VILLA DEL SUR 600 CC.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1149.9
            },
            {
                "date": "2026-06-14",
                "price": 1269.9
            },
            {
                "date": "2026-07-25",
                "price": 1399.9
            }
        ]
    },
    {
        "id": 890,
        "name": "AGUA NESTLE PUREZA VITAL 2.25 LT",
        "price": 1399.9,
        "market": "maxiconsumo",
        "category": "aguas",
        "image": "images\\maxiconsumo/AGUA NESTLE PUREZA VITAL 225 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1299.9
            },
            {
                "date": "2026-07-25",
                "price": 1499.9
            },
            {
                "date": "2026-08-03",
                "price": 1399.9
            }
        ]
    },
    {
        "id": 891,
        "name": "ALIMENTO PARA PERROS PETS CLASS PERRO ADULTOS CARNE 100 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS PETS CLASS PERRO AD.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            },
            {
                "date": "2026-05-23",
                "price": 729.9
            },
            {
                "date": "2026-05-30",
                "price": 799.9
            },
            {
                "date": "2026-06-07",
                "price": 729.9
            },
            {
                "date": "2026-06-14",
                "price": 799.9
            },
            {
                "date": "2026-06-21",
                "price": 729.9
            },
            {
                "date": "2026-07-25",
                "price": 899.89
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 892,
        "name": "ALIMENTO PARA PERROS PETS CLASS CACHORROS POLLO Y LECHE 85 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS PETS CLASS CACHORRO.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            },
            {
                "date": "2026-05-23",
                "price": 729.9
            },
            {
                "date": "2026-05-30",
                "price": 799.9
            },
            {
                "date": "2026-06-07",
                "price": 729.9
            },
            {
                "date": "2026-06-14",
                "price": 799.9
            },
            {
                "date": "2026-06-21",
                "price": 729.9
            },
            {
                "date": "2026-07-25",
                "price": 899.89
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 893,
        "name": "ALIMENTO PARA PERROS PETS CLASS ADULTOS POLLO 100 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS PETS CLASS ADULTOS .jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            },
            {
                "date": "2026-05-23",
                "price": 729.9
            },
            {
                "date": "2026-05-30",
                "price": 799.9
            },
            {
                "date": "2026-06-07",
                "price": 729.9
            },
            {
                "date": "2026-06-14",
                "price": 799.9
            },
            {
                "date": "2026-06-21",
                "price": 729.9
            },
            {
                "date": "2026-07-25",
                "price": 899.89
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 894,
        "name": "ALIMENTO PARA ANIMALES PEDIGREE POUCH RAZAS PEQUEÑAS CARNE 100 gr",
        "price": 1099.89,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/ALIMENTO PARA ANIMALES PEDIGREE POUCH RA.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            },
            {
                "date": "2026-06-07",
                "price": 1099.89
            }
        ]
    },
    {
        "id": 895,
        "name": "ALIMENTO PARA ANIMALES PEDIGREE POUCH RAZAS PEQUEÑAS POLLO 100 gr",
        "price": 1099.89,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images\\maxiconsumo/ALIMENTO PARA ANIMALES PEDIGREE POUCH RA.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1099.89
            }
        ]
    },
    {
        "id": 896,
        "name": "ALIMENTO PARA PERROS PEDIGREE POUCH CARNE ADULTO 100 GR",
        "price": 1099.89,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS PEDIGREE POUCH CARN.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            },
            {
                "date": "2026-06-07",
                "price": 1099.89
            }
        ]
    },
    {
        "id": 897,
        "name": "ALIMENTO PARA PERROS PEDIGREE POUCH CACHORRO 85 GR",
        "price": 1099.89,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS PEDIGREE POUCH CACH.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            },
            {
                "date": "2026-06-07",
                "price": 1099.89
            }
        ]
    },
    {
        "id": 898,
        "name": "ALIMENTO PARA PERROS DOG CHOW ADULTOS ALTO EN PROTEINAS 85 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS DOG CHOW ADULTOS AL.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 899,
        "name": "ALIMENTO PARA PERROS DOG CHOW ADULTOS CORDERO 85 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS DOG CHOW ADULTOS CO.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 900,
        "name": "ALIMENTO PARA PERROS DOG CHOW ADULTO 3 PROTEINAS 85 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "perros",
        "image": "images\\maxiconsumo/ALIMENTO PARA PERROS DOG CHOW ADULTO 3 P.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 901,
        "name": "ALIMENTO PARA GATOS PETS CLASS FRUTOS DE MAR 85 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images\\maxiconsumo/ALIMENTO PARA GATOS PETS CLASS FRUTOS DE.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            },
            {
                "date": "2026-05-23",
                "price": 729.9
            },
            {
                "date": "2026-05-30",
                "price": 799.9
            },
            {
                "date": "2026-06-07",
                "price": 729.9
            },
            {
                "date": "2026-06-14",
                "price": 799.9
            },
            {
                "date": "2026-06-21",
                "price": 729.9
            },
            {
                "date": "2026-07-25",
                "price": 899.89
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 902,
        "name": "ALIMENTO PARA GATOS PETS CLASS SALMON ROSADO 85 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/ALIMENTO PARA GATOS PETS CLASS SALMON RO.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            },
            {
                "date": "2026-05-23",
                "price": 729.9
            },
            {
                "date": "2026-05-30",
                "price": 799.9
            },
            {
                "date": "2026-06-07",
                "price": 729.9
            },
            {
                "date": "2026-06-14",
                "price": 799.9
            },
            {
                "date": "2026-06-21",
                "price": 729.9
            },
            {
                "date": "2026-07-25",
                "price": 899.89
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 903,
        "name": "ALIMENTO PARA GATOS PETS CLASS CARNE 85 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/ALIMENTO PARA GATOS PETS CLASS CARNE 85 .jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            },
            {
                "date": "2026-05-23",
                "price": 729.9
            },
            {
                "date": "2026-05-30",
                "price": 799.9
            },
            {
                "date": "2026-06-07",
                "price": 729.9
            },
            {
                "date": "2026-06-14",
                "price": 799.9
            },
            {
                "date": "2026-06-21",
                "price": 729.9
            },
            {
                "date": "2026-07-25",
                "price": 899.89
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 904,
        "name": "ALIMENTO PARA ANIMALES WHISKAS POUCH GATITOS CARNE 85 GR",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/ALIMENTO PARA ANIMALES WHISKAS POUCH GAT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            },
            {
                "date": "2026-05-16",
                "price": 899.9
            },
            {
                "date": "2026-05-23",
                "price": 1099.9
            },
            {
                "date": "2026-06-14",
                "price": 899.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 905,
        "name": "ALIMENTO PARA ANIMALES WHISKAS POUCH POLLO 85 GR",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images\\maxiconsumo/ALIMENTO PARA ANIMALES WHISKAS POUCH POL.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            },
            {
                "date": "2026-05-16",
                "price": 899.9
            },
            {
                "date": "2026-05-23",
                "price": 1099.9
            },
            {
                "date": "2026-06-14",
                "price": 899.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 906,
        "name": "ALIMENTO PARA ANIMALES WHISKAS POUCH PAVO 85 gr",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images\\maxiconsumo/ALIMENTO PARA ANIMALES WHISKAS POUCH PAV.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1099.9
            },
            {
                "date": "2026-06-14",
                "price": 899.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 907,
        "name": "ALIMENTO PARA GATOS WHISKAS POUCH CARNE 85 GR",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/ALIMENTO PARA GATOS WHISKAS POUCH CARNE .jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 908,
        "name": "ALIMENTO PARA GATOS WHISKAS POUCH SARDINA 85 GR",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images\\maxiconsumo/ALIMENTO PARA GATOS WHISKAS POUCH SARDIN.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 909,
        "name": "ALIMENTO PARA GATOS CAT CHOW ADULTOS POLLO 85 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "gatos",
        "image": "images\\maxiconsumo/ALIMENTO PARA GATOS CAT CHOW ADULTOS POL.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1199.9
            },
            {
                "date": "2026-05-02",
                "price": 999.9
            },
            {
                "date": "2026-05-09",
                "price": 1199.9
            },
            {
                "date": "2026-05-30",
                "price": 999.9
            },
            {
                "date": "2026-06-07",
                "price": 1199.9
            },
            {
                "date": "2026-07-25",
                "price": 999.9
            },
            {
                "date": "2026-08-03",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 910,
        "name": "ALIMENTO PARA GATOS FELIX SALMON 85 GR",
        "price": 1199.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/ALIMENTO PARA GATOS FELIX SALMON 85 GR.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1199.9
            }
        ]
    },
    {
        "id": 911,
        "name": "ARROZ EL DIQUE \"0000\" 500 GR",
        "price": 579.89,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ EL DIQUE 0000 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 499.9
            },
            {
                "date": "2026-05-02",
                "price": 479.9
            },
            {
                "date": "2026-05-09",
                "price": 499.9
            },
            {
                "date": "2026-05-23",
                "price": 549.9
            },
            {
                "date": "2026-05-30",
                "price": 499.9
            },
            {
                "date": "2026-06-07",
                "price": 549.9
            },
            {
                "date": "2026-07-25",
                "price": 579.89
            }
        ]
    },
    {
        "id": 912,
        "name": "ARROZ CAÑUELAS LARGO FINO 500 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ CAÑUELAS LARGO FINO 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 589.9
            },
            {
                "date": "2026-05-02",
                "price": 629.9
            },
            {
                "date": "2026-05-09",
                "price": 619.9
            },
            {
                "date": "2026-05-16",
                "price": 649.9
            },
            {
                "date": "2026-05-23",
                "price": 579.9
            },
            {
                "date": "2026-05-30",
                "price": 699.9
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 913,
        "name": "ARROZ MARIA LARGO FINO 500 GR",
        "price": 729.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ MARIA LARGO FINO 500 GR.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 629.9
            },
            {
                "date": "2026-05-09",
                "price": 619.9
            },
            {
                "date": "2026-05-16",
                "price": 649.9
            },
            {
                "date": "2026-05-23",
                "price": 579.9
            },
            {
                "date": "2026-05-30",
                "price": 699.9
            },
            {
                "date": "2026-08-03",
                "price": 729.9
            }
        ]
    },
    {
        "id": 914,
        "name": "ARROZ ALA LARGO 500 GR",
        "price": 749.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ ALA LARGO 500 GR.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 679.9
            },
            {
                "date": "2026-06-07",
                "price": 699.9
            },
            {
                "date": "2026-06-14",
                "price": 749.9
            },
            {
                "date": "2026-07-25",
                "price": 699.9
            },
            {
                "date": "2026-08-03",
                "price": 749.9
            }
        ]
    },
    {
        "id": 915,
        "name": "ARROZ MOLTO INTEGRAL 500 GR",
        "price": 749.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ MOLTO INTEGRAL 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 619.9
            },
            {
                "date": "2026-06-07",
                "price": 699.9
            },
            {
                "date": "2026-07-25",
                "price": 749.9
            }
        ]
    },
    {
        "id": 916,
        "name": "ARROZ MOLTO LARGO FINO 500 GR",
        "price": 749.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ MOLTO LARGO FINO 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 619.9
            },
            {
                "date": "2026-05-02",
                "price": 659.9
            },
            {
                "date": "2026-06-07",
                "price": 699.9
            },
            {
                "date": "2026-07-25",
                "price": 749.9
            }
        ]
    },
    {
        "id": 917,
        "name": "ARROZ MAROLIO DOBLE 500 GR",
        "price": 849.89,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ MAROLIO DOBLE 500 GR.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 989.9
            },
            {
                "date": "2026-06-07",
                "price": 879.9
            },
            {
                "date": "2026-07-25",
                "price": 849.89
            }
        ]
    },
    {
        "id": 918,
        "name": "ARROZ MAROLIO PARBOLIZADO 500 GR",
        "price": 849.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ MAROLIO PARBOLIZADO 500 GR.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 859.9
            },
            {
                "date": "2026-07-25",
                "price": 699.9
            },
            {
                "date": "2026-08-03",
                "price": 849.9
            }
        ]
    },
    {
        "id": 919,
        "name": "ARROZ LUCCHETTI LARGO FINO 500 GR",
        "price": 879.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ LUCCHETTI LARGO FINO 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 749.9
            },
            {
                "date": "2026-05-16",
                "price": 879.9
            }
        ]
    },
    {
        "id": 920,
        "name": "ARROZ ALA DORADO 500 GR",
        "price": 949.9,
        "market": "maxiconsumo",
        "category": "arroz",
        "image": "images\\maxiconsumo/ARROZ ALA DORADO 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 749.9
            },
            {
                "date": "2026-06-07",
                "price": 949.9
            }
        ]
    },
    {
        "id": 921,
        "name": "PAÑAL BABYSEC ULTRA REGULAR XX GRANDE 8 UN",
        "price": 2099.89,
        "market": "maxiconsumo",
        "category": "pañales",
        "image": "images\\maxiconsumo/PAÑAL BABYSEC ULTRA REGULAR XX GRANDE 8 .jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 2199.9
            },
            {
                "date": "2026-05-09",
                "price": 1959.9
            },
            {
                "date": "2026-05-16",
                "price": 2299.9
            },
            {
                "date": "2026-05-30",
                "price": 1959.9
            },
            {
                "date": "2026-06-07",
                "price": 2299.9
            },
            {
                "date": "2026-06-14",
                "price": 2499.9
            },
            {
                "date": "2026-08-03",
                "price": 2099.89
            }
        ]
    },
    {
        "id": 922,
        "name": "PAÑAL BABYSEC ULTRA REGULAR GRANDE 8 UN",
        "price": 2099.89,
        "market": "maxiconsumo",
        "category": "pañales",
        "image": "images\\maxiconsumo/PAÑAL BABYSEC ULTRA REGULAR GRANDE 8 UN.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2099.89
            }
        ]
    },
    {
        "id": 923,
        "name": "PAÑAL BABYSEC ULTRA REGULAR CHICO 12 UN",
        "price": 2099.89,
        "market": "maxiconsumo",
        "category": "pañales",
        "image": "images\\maxiconsumo/PAÑAL BABYSEC ULTRA REGULAR CHICO 12 UN.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2099.89
            }
        ]
    },
    {
        "id": 924,
        "name": "OLEO CALCAREO ESTRELLA SIN FRAGANCIA 245 ML",
        "price": 3999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/OLEO CALCAREO ESTRELLA SIN FRAGANCIA 245.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 3849.9
            },
            {
                "date": "2026-06-21",
                "price": 3849.91
            },
            {
                "date": "2026-07-25",
                "price": 3999.9
            }
        ]
    },
    {
        "id": 925,
        "name": "OLEO CALCAREO ESTRELLA CON MANZANILLA 250 ml",
        "price": 3999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/OLEO CALCAREO ESTRELLA CON MANZANILLA 25.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 3849.9
            },
            {
                "date": "2026-06-21",
                "price": 3849.91
            },
            {
                "date": "2026-07-25",
                "price": 3999.9
            }
        ]
    },
    {
        "id": 926,
        "name": "OLEO LIMPIEZA ESTRELLA EXTRA VITAMINA 250 ML",
        "price": 3999.9,
        "market": "maxiconsumo",
        "category": "limpieza",
        "image": "images\\maxiconsumo/OLEO LIMPIEZA ESTRELLA EXTRA VITAMINA 25.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 3849.9
            },
            {
                "date": "2026-06-21",
                "price": 3849.91
            },
            {
                "date": "2026-07-25",
                "price": 3999.9
            }
        ]
    },
    {
        "id": 927,
        "name": "OLEO LIMPIEZA ESTRELLA EXTRA VITAMINA 500 ml",
        "price": 5499.9,
        "market": "maxiconsumo",
        "category": "limpieza",
        "image": "images\\maxiconsumo/OLEO LIMPIEZA ESTRELLA EXTRA VITAMINA 50.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 5199.9
            },
            {
                "date": "2026-07-25",
                "price": 5499.9
            }
        ]
    },
    {
        "id": 928,
        "name": "OLEO CALCAREO ESTRELLA 500 ML",
        "price": 5499.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/OLEO CALCAREO ESTRELLA 500 ML.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 5199.9
            },
            {
                "date": "2026-07-25",
                "price": 5499.9
            }
        ]
    },
    {
        "id": 929,
        "name": "OLEO LIMPIEZA ESTRELLA 500 ML",
        "price": 5499.9,
        "market": "maxiconsumo",
        "category": "limpieza",
        "image": "images\\maxiconsumo/OLEO LIMPIEZA ESTRELLA 500 ML.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 5199.9
            },
            {
                "date": "2026-07-25",
                "price": 5499.9
            }
        ]
    },
    {
        "id": 930,
        "name": "ACEITE JOHNSON'S NORMAL 200 CC",
        "price": 7899.9,
        "market": "maxiconsumo",
        "category": "aceite",
        "image": "images\\maxiconsumo/ACEITE JOHNSONS NORMAL 200 CC.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 7499.9
            },
            {
                "date": "2026-07-25",
                "price": 7899.9
            }
        ]
    },
    {
        "id": 931,
        "name": "QUEBRACHO COLORADO 10 KG",
        "price": 7799.89,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/QUEBRACHO COLORADO 10 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7799.89
            }
        ]
    },
    {
        "id": 932,
        "name": "BONDIOLA DE CERDO INTERPORC PORCION 1 KG",
        "price": 8499.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/BONDIOLA DE CERDO INTERPORC PORCION 1 KG.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 6899.9
            },
            {
                "date": "2026-08-03",
                "price": 8499.9
            }
        ]
    },
    {
        "id": 933,
        "name": "PICADA CARNES CONGELADA 1 KG",
        "price": 12499.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/PICADA CARNES CONGELADA 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 14999.9
            },
            {
                "date": "2026-05-02",
                "price": 13999.9
            },
            {
                "date": "2026-05-09",
                "price": 15799.9
            },
            {
                "date": "2026-05-23",
                "price": 13499.9
            },
            {
                "date": "2026-05-30",
                "price": 15799.9
            },
            {
                "date": "2026-06-07",
                "price": 12999.91
            },
            {
                "date": "2026-07-25",
                "price": 12499.9
            }
        ]
    },
    {
        "id": 934,
        "name": "PALETA TF AL VACIO 1 KG",
        "price": 13999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/PALETA TF AL VACIO 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 16449.9
            },
            {
                "date": "2026-05-09",
                "price": 15789.9
            },
            {
                "date": "2026-05-16",
                "price": 16449.9
            },
            {
                "date": "2026-05-30",
                "price": 15789.9
            },
            {
                "date": "2026-06-07",
                "price": 13999.9
            }
        ]
    },
    {
        "id": 935,
        "name": "TAPA DE ASADO TF AL VACIO 1KG",
        "price": 13999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/TAPA DE ASADO TF AL VACIO 1KG.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 16999.89
            },
            {
                "date": "2026-06-07",
                "price": 13999.9
            },
            {
                "date": "2026-07-25",
                "price": 13699.9
            },
            {
                "date": "2026-08-03",
                "price": 13999.9
            }
        ]
    },
    {
        "id": 936,
        "name": "PALOMITA CARNES PORCION 1 KG",
        "price": 13999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/PALOMITA CARNES PORCION 1 KG.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 16999.89
            },
            {
                "date": "2026-06-07",
                "price": 13999.9
            }
        ]
    },
    {
        "id": 937,
        "name": "MATAMBRE TF CARNES AL VACIO 1 KG",
        "price": 14999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/MATAMBRE TF CARNES AL VACIO 1 KG.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 16999.89
            },
            {
                "date": "2026-08-03",
                "price": 14999.9
            }
        ]
    },
    {
        "id": 938,
        "name": "TORTUGUITA CARNES PORCION 1 KG",
        "price": 15999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/TORTUGUITA CARNES PORCION 1 KG.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 15999.9
            }
        ]
    },
    {
        "id": 939,
        "name": "PECETO TF CARNES PORCION CONGELADO 1 KG",
        "price": 16999.89,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/PECETO TF CARNES PORCION CONGELADO 1 KG.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 16999.89
            }
        ]
    },
    {
        "id": 940,
        "name": "VACIO TF CARNE COGELADO 1 KG",
        "price": 18999.9,
        "market": "maxiconsumo",
        "category": "carnes",
        "image": "images\\maxiconsumo/VACIO TF CARNE COGELADO 1 KG.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 14999.9
            },
            {
                "date": "2026-07-25",
                "price": 18999.9
            }
        ]
    },
    {
        "id": 941,
        "name": "CEREAL NUTRIFOODS COPO MAIZ 150 gr",
        "price": 1349.9,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL NUTRIFOODS COPO MAIZ 150 gr.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1279.89
            },
            {
                "date": "2026-06-07",
                "price": 1349.9
            }
        ]
    },
    {
        "id": 942,
        "name": "CEREAL MAROLIO ARITOS FRUTADOS 160 gr",
        "price": 1449.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL MAROLIO ARITOS FRUTADOS 160 gr.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1379.9
            },
            {
                "date": "2026-06-07",
                "price": 1449.89
            }
        ]
    },
    {
        "id": 943,
        "name": "CEREAL NUTRIFOODS COPO AZUCAR 200 gr",
        "price": 1549.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL NUTRIFOODS COPO AZUCAR 200 gr.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1459.89
            },
            {
                "date": "2026-06-07",
                "price": 1549.89
            }
        ]
    },
    {
        "id": 944,
        "name": "CEREAL LASFOR BOLITAS CHOCOLATADAS 160/180 GR",
        "price": 1599.9,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL LASFOR BOLITAS CHOCOLATADAS 16018.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 1499.89
            },
            {
                "date": "2026-06-21",
                "price": 1599.9
            }
        ]
    },
    {
        "id": 945,
        "name": "CEREAL MAROLIO REDONDITOS CHOCOLATE 210 gr",
        "price": 1699.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL MAROLIO REDONDITOS CHOCOLATE 210 .jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1499.89
            },
            {
                "date": "2026-06-07",
                "price": 1699.89
            }
        ]
    },
    {
        "id": 946,
        "name": "CEREAL MAROLIO ALMOHADITAS CHOCOLATE 180 gr",
        "price": 1899.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL MAROLIO ALMOHADITAS CHOCOLATE 180.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1699.89
            },
            {
                "date": "2026-06-21",
                "price": 1899.89
            }
        ]
    },
    {
        "id": 947,
        "name": "CEREAL MAROLIO ALMOHADITAS FRUTILLA 180 gr",
        "price": 1899.89,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL MAROLIO ALMOHADITAS FRUTILLA 180 .jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1699.89
            },
            {
                "date": "2026-06-21",
                "price": 1899.89
            }
        ]
    },
    {
        "id": 948,
        "name": "SEMILLA GENSER MIX DESAYUNO 150 gr",
        "price": 1970.92,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/SEMILLA GENSER MIX DESAYUNO 150 gr.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1970.92
            }
        ]
    },
    {
        "id": 949,
        "name": "SEMILLA GENSER MIX ENSALADAS Y SOPAS 150 gr",
        "price": 1999.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SEMILLA GENSER MIX ENSALADAS Y SOPAS 150.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1999.9
            }
        ]
    },
    {
        "id": 950,
        "name": "CEREAL KELLOGGS ZUCARITAS POUCH 240 GR",
        "price": 2499.9,
        "market": "maxiconsumo",
        "category": "cereales",
        "image": "images\\maxiconsumo/CEREAL KELLOGGS ZUCARITAS POUCH 240 GR.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2874.88
            },
            {
                "date": "2026-08-03",
                "price": 2499.9
            }
        ]
    },
    {
        "id": 951,
        "name": "CERVEZA ZEUS 473 CC",
        "price": 1099.89,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA ZEUS 473 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 799.9
            },
            {
                "date": "2026-05-02",
                "price": 689.89
            },
            {
                "date": "2026-05-09",
                "price": 799.9
            },
            {
                "date": "2026-05-16",
                "price": 899.9
            },
            {
                "date": "2026-05-30",
                "price": 999.9
            },
            {
                "date": "2026-06-14",
                "price": 1199.9
            },
            {
                "date": "2026-06-21",
                "price": 999.9
            },
            {
                "date": "2026-07-25",
                "price": 1099.89
            }
        ]
    },
    {
        "id": 952,
        "name": "CERVEZA QUILMES 0.0 SIN ALCOHOL 473 CC",
        "price": 1299.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA QUILMES 00 SIN ALCOHOL 473 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1249.91
            },
            {
                "date": "2026-05-09",
                "price": 1199.9
            },
            {
                "date": "2026-05-16",
                "price": 1249.91
            },
            {
                "date": "2026-05-23",
                "price": 1399.9
            },
            {
                "date": "2026-05-30",
                "price": 1249.91
            },
            {
                "date": "2026-06-07",
                "price": 1399.9
            },
            {
                "date": "2026-06-21",
                "price": 1299.9
            },
            {
                "date": "2026-07-25",
                "price": 1449.89
            },
            {
                "date": "2026-08-03",
                "price": 1299.9
            }
        ]
    },
    {
        "id": 953,
        "name": "CERVEZA ZEUS 710 CC",
        "price": 1849.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA ZEUS 710 CC.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1699.89
            },
            {
                "date": "2026-06-07",
                "price": 1799.9
            },
            {
                "date": "2026-06-14",
                "price": 1999.9
            },
            {
                "date": "2026-06-21",
                "price": 1599.9
            },
            {
                "date": "2026-07-25",
                "price": 1849.9
            }
        ]
    },
    {
        "id": 954,
        "name": "CERVEZA QUILMES STOUT 473 CC",
        "price": 1849.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA QUILMES STOUT 473 CC.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1799.91
            },
            {
                "date": "2026-07-25",
                "price": 1849.9
            }
        ]
    },
    {
        "id": 955,
        "name": "CERVEZA QUILMES LATA 473 CC",
        "price": 1849.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA QUILMES LATA 473 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1849.91
            },
            {
                "date": "2026-05-02",
                "price": 1499.9
            },
            {
                "date": "2026-05-09",
                "price": 1699.9
            },
            {
                "date": "2026-05-23",
                "price": 1499.9
            },
            {
                "date": "2026-05-30",
                "price": 1699.9
            },
            {
                "date": "2026-06-07",
                "price": 1799.9
            },
            {
                "date": "2026-06-14",
                "price": 1599.91
            },
            {
                "date": "2026-06-21",
                "price": 1799.91
            },
            {
                "date": "2026-07-25",
                "price": 1849.9
            }
        ]
    },
    {
        "id": 956,
        "name": "CERVEZA BRAHMA AMARILLA MUSICA 473 CC",
        "price": 1949.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA BRAHMA AMARILLA MUSICA 473 CC.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 1899.91
            },
            {
                "date": "2026-06-21",
                "price": 1649.9
            },
            {
                "date": "2026-07-25",
                "price": 1699.91
            },
            {
                "date": "2026-08-03",
                "price": 1949.9
            }
        ]
    },
    {
        "id": 957,
        "name": "CERVEZA BUDWEISER LATA 473 CC",
        "price": 1949.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA BUDWEISER LATA 473 CC.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1649.91
            },
            {
                "date": "2026-07-25",
                "price": 1699.91
            },
            {
                "date": "2026-08-03",
                "price": 1949.9
            }
        ]
    },
    {
        "id": 958,
        "name": "CERVEZA ANDES ORIGEN RUBIA 473 CC",
        "price": 2249.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA ANDES ORIGEN RUBIA 473 CC.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1949.9
            },
            {
                "date": "2026-08-03",
                "price": 2249.9
            }
        ]
    },
    {
        "id": 959,
        "name": "CERVEZA ANTARES MICRO IPA 25 473 CC",
        "price": 2399.89,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA ANTARES MICRO IPA 25 473 CC.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 2399.89
            }
        ]
    },
    {
        "id": 960,
        "name": "CERVEZA CORONA 0.0 SIN ALCOHOL 330 CC",
        "price": 2399.9,
        "market": "maxiconsumo",
        "category": "cervezas",
        "image": "images\\maxiconsumo/CERVEZA CORONA 00 SIN ALCOHOL 330 CC.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2399.9
            }
        ]
    },
    {
        "id": 961,
        "name": "APERITIVO FERCHO FERNET-COCA 1 LT",
        "price": 849.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/APERITIVO FERCHO FERNET-COCA 1 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 999.9
            },
            {
                "date": "2026-05-02",
                "price": 999.91
            },
            {
                "date": "2026-05-09",
                "price": 1149.9
            },
            {
                "date": "2026-05-16",
                "price": 999.91
            },
            {
                "date": "2026-05-23",
                "price": 1049.9
            },
            {
                "date": "2026-06-07",
                "price": 899.9
            },
            {
                "date": "2026-06-14",
                "price": 799.91
            },
            {
                "date": "2026-06-21",
                "price": 799.9
            },
            {
                "date": "2026-07-25",
                "price": 699.91
            },
            {
                "date": "2026-08-03",
                "price": 849.9
            }
        ]
    },
    {
        "id": 962,
        "name": "FERNET BRANCA MINI 5 CC",
        "price": 2999.88,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET BRANCA MINI 5 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.88
            }
        ]
    },
    {
        "id": 963,
        "name": "FERNET CAPRI 750 CC",
        "price": 3999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET CAPRI 750 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3199.89
            },
            {
                "date": "2026-05-02",
                "price": 3999.9
            },
            {
                "date": "2026-06-14",
                "price": 3499.9
            },
            {
                "date": "2026-07-25",
                "price": 3599.9
            },
            {
                "date": "2026-08-03",
                "price": 3999.9
            }
        ]
    },
    {
        "id": 964,
        "name": "FERNET 1882 450 CC",
        "price": 5299.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET 1882 450 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 5499.9
            },
            {
                "date": "2026-05-23",
                "price": 5199.9
            },
            {
                "date": "2026-05-30",
                "price": 5499.9
            },
            {
                "date": "2026-06-21",
                "price": 5299.9
            },
            {
                "date": "2026-07-25",
                "price": 5499.89
            },
            {
                "date": "2026-08-03",
                "price": 5299.9
            }
        ]
    },
    {
        "id": 965,
        "name": "FERNET BUHERO 700 ML",
        "price": 6799.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET BUHERO 700 ML.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7499.91
            },
            {
                "date": "2026-05-09",
                "price": 7499.9
            },
            {
                "date": "2026-05-16",
                "price": 7999.9
            },
            {
                "date": "2026-05-30",
                "price": 7999.89
            },
            {
                "date": "2026-06-07",
                "price": 7999.9
            },
            {
                "date": "2026-06-14",
                "price": 8499.9
            },
            {
                "date": "2026-06-21",
                "price": 6499.9
            },
            {
                "date": "2026-07-25",
                "price": 7499.9
            },
            {
                "date": "2026-08-03",
                "price": 6799.9
            }
        ]
    },
    {
        "id": 966,
        "name": "FERNET 1882 750 CC",
        "price": 7399.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET 1882 750 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7499.88
            },
            {
                "date": "2026-05-02",
                "price": 6999.9
            },
            {
                "date": "2026-05-09",
                "price": 7591.06
            },
            {
                "date": "2026-07-25",
                "price": 6999.9
            },
            {
                "date": "2026-08-03",
                "price": 7399.9
            }
        ]
    },
    {
        "id": 967,
        "name": "FERNET 1882 1.008 LT",
        "price": 7999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET 1882 1008 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 7499.9
            },
            {
                "date": "2026-05-02",
                "price": 7999.88
            },
            {
                "date": "2026-05-16",
                "price": 7199.9
            },
            {
                "date": "2026-05-23",
                "price": 7999.88
            },
            {
                "date": "2026-06-07",
                "price": 7199.9
            },
            {
                "date": "2026-06-14",
                "price": 7999.88
            },
            {
                "date": "2026-07-25",
                "price": 7999.9
            }
        ]
    },
    {
        "id": 968,
        "name": "FERNET BRANCA MENTA 450 CC",
        "price": 10899.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET BRANCA MENTA 450 CC.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 10899.89
            }
        ]
    },
    {
        "id": 969,
        "name": "FERNET BRANCA 750 CC",
        "price": 16499.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET BRANCA 750 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 15399.9
            },
            {
                "date": "2026-05-09",
                "price": 14499.9
            },
            {
                "date": "2026-05-16",
                "price": 15399.9
            },
            {
                "date": "2026-06-07",
                "price": 16499.9
            },
            {
                "date": "2026-07-25",
                "price": 16499.89
            }
        ]
    },
    {
        "id": 970,
        "name": "FERNET BRANCA 1 LT",
        "price": 21899.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/FERNET BRANCA 1 LT.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 20499.9
            },
            {
                "date": "2026-06-07",
                "price": 21899.9
            },
            {
                "date": "2026-07-25",
                "price": 21899.89
            }
        ]
    },
    {
        "id": 971,
        "name": "SALAME TIPO MILAN CHACRA 43 FETEADO 150 GR",
        "price": 3999.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAME TIPO MILAN CHACRA 43 FETEADO 150 .jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 3999.9
            }
        ]
    },
    {
        "id": 972,
        "name": "BONDIOLITAS CAGNOLI X 200 GR 2 UN",
        "price": 4009.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/BONDIOLITAS CAGNOLI X 200 GR 2 UN.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 5399.89
            },
            {
                "date": "2026-06-21",
                "price": 4598.9
            },
            {
                "date": "2026-07-25",
                "price": 4009.9
            }
        ]
    },
    {
        "id": 973,
        "name": "SALAME CAGNOLI MILAN FETEADO 180 GR",
        "price": 4999.89,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAME CAGNOLI MILAN FETEADO 180 GR.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4999.89
            }
        ]
    },
    {
        "id": 974,
        "name": "SALAMIN CAGNOLI FUET 150 GR",
        "price": 6699.89,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAMIN CAGNOLI FUET 150 GR.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 6699.89
            }
        ]
    },
    {
        "id": 975,
        "name": "SALAME MAROLIO PAPEL 1 KG",
        "price": 11999.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAME MAROLIO PAPEL 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 12899.89
            },
            {
                "date": "2026-07-25",
                "price": 13549.89
            },
            {
                "date": "2026-08-03",
                "price": 11999.9
            }
        ]
    },
    {
        "id": 976,
        "name": "SALAME MAROLIO MILAN 1/2 1 KG",
        "price": 11999.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAME MAROLIO MILAN 12 1 KG.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 13569.9
            },
            {
                "date": "2026-07-25",
                "price": 14249.89
            },
            {
                "date": "2026-08-03",
                "price": 11999.9
            }
        ]
    },
    {
        "id": 977,
        "name": "SALAME LA RESIDENCIA MILA 1/2 FINO 1 KG",
        "price": 12469.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAME LA RESIDENCIA MILA 12 FINO 1 KG.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 10799.9
            },
            {
                "date": "2026-06-21",
                "price": 12469.9
            }
        ]
    },
    {
        "id": 978,
        "name": "SALAMIN LA CASONA PICADO GRUESO 1 KG",
        "price": 16699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAMIN LA CASONA PICADO GRUESO 1 KG.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 16699.9
            },
            {
                "date": "2026-07-25",
                "price": 14449.9
            },
            {
                "date": "2026-08-03",
                "price": 16699.9
            }
        ]
    },
    {
        "id": 979,
        "name": "SALAME CHAMPION MILAN 1 KG",
        "price": 16769.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAME CHAMPION MILAN 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 15819.89
            },
            {
                "date": "2026-07-25",
                "price": 16769.9
            }
        ]
    },
    {
        "id": 980,
        "name": "SALAMIN CHAMPION FINO 1 KG",
        "price": 18449.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SALAMIN CHAMPION FINO 1 KG.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 17399.9
            },
            {
                "date": "2026-07-25",
                "price": 18449.9
            }
        ]
    },
    {
        "id": 981,
        "name": "DURAZNO MAROLIO TROZO TETRA RECART 200 GR",
        "price": 1259.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/DURAZNO MAROLIO TROZO TETRA RECART 200 G.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            },
            {
                "date": "2026-07-25",
                "price": 1259.89
            }
        ]
    },
    {
        "id": 982,
        "name": "DURAZNO MAROLIO MITAD 820 GR",
        "price": 2099.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/DURAZNO MAROLIO MITAD 820 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2099.89
            }
        ]
    },
    {
        "id": 983,
        "name": "DURAZNO MOLTO MITADES 820 GR",
        "price": 2799.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/DURAZNO MOLTO MITADES 820 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2399.9
            },
            {
                "date": "2026-05-09",
                "price": 2999.9
            },
            {
                "date": "2026-06-21",
                "price": 2999.91
            },
            {
                "date": "2026-07-25",
                "price": 2799.9
            }
        ]
    },
    {
        "id": 984,
        "name": "COCTEL DE FRUTAS MOLTO 4 FRUTAS 820 GR",
        "price": 2999.91,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/COCTEL DE FRUTAS MOLTO 4 FRUTAS 820 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2999.9
            },
            {
                "date": "2026-06-21",
                "price": 2999.91
            }
        ]
    },
    {
        "id": 985,
        "name": "ANANA MAROLIO RODAJA 565 GR",
        "price": 3499.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/ANANA MAROLIO RODAJA 565 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3299.9
            },
            {
                "date": "2026-07-25",
                "price": 3499.9
            }
        ]
    },
    {
        "id": 986,
        "name": "ANANA MOLTO RODAJA 565 GR",
        "price": 3699.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/ANANA MOLTO RODAJA 565 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 3699.9
            }
        ]
    },
    {
        "id": 987,
        "name": "ANANA MAROLIO TROZO 850 GR",
        "price": 4499.91,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/ANANA MAROLIO TROZO 850 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 4249.9
            },
            {
                "date": "2026-07-25",
                "price": 4499.91
            }
        ]
    },
    {
        "id": 988,
        "name": "ANANA MAROLIO RODAJA 825 GR",
        "price": 4749.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/ANANA MAROLIO RODAJA 825 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 4199.9
            },
            {
                "date": "2026-05-02",
                "price": 4699.89
            },
            {
                "date": "2026-05-16",
                "price": 4199.9
            },
            {
                "date": "2026-05-23",
                "price": 4699.89
            },
            {
                "date": "2026-07-25",
                "price": 4749.9
            }
        ]
    },
    {
        "id": 989,
        "name": "ANANA MOLTO RODAJA 850 GR",
        "price": 4999.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/ANANA MOLTO RODAJA 850 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 4999.9
            }
        ]
    },
    {
        "id": 990,
        "name": "ANANA CARACAS 836 GR",
        "price": 5399.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/ANANA CARACAS 836 GR.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 5099.0
            },
            {
                "date": "2026-06-14",
                "price": 5099.9
            },
            {
                "date": "2026-06-21",
                "price": 5399.9
            }
        ]
    },
    {
        "id": 991,
        "name": "GASEOSA CUNNINGTON CLASICA POMELO 500 CC",
        "price": 699.89,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA CUNNINGTON CLASICA POMELO 500 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 669.9
            },
            {
                "date": "2026-05-23",
                "price": 699.89
            }
        ]
    },
    {
        "id": 992,
        "name": "GASEOSA FRESHY NARANJA 2.25 LT",
        "price": 999.91,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA FRESHY NARANJA 225 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            },
            {
                "date": "2026-05-09",
                "price": 1299.9
            },
            {
                "date": "2026-06-07",
                "price": 999.91
            },
            {
                "date": "2026-06-14",
                "price": 1299.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-07-25",
                "price": 999.91
            }
        ]
    },
    {
        "id": 993,
        "name": "GASEOSA FRESHY COLA 2.25 LT",
        "price": 999.91,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA FRESHY COLA 225 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            },
            {
                "date": "2026-05-09",
                "price": 1299.9
            },
            {
                "date": "2026-06-07",
                "price": 999.91
            },
            {
                "date": "2026-06-14",
                "price": 1299.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-07-25",
                "price": 999.91
            }
        ]
    },
    {
        "id": 994,
        "name": "GASEOSA FRESHY LIMA LIMON 2.25 LT",
        "price": 999.91,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA FRESHY LIMA LIMON 225 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1099.9
            },
            {
                "date": "2026-05-09",
                "price": 1299.9
            },
            {
                "date": "2026-06-07",
                "price": 999.91
            },
            {
                "date": "2026-06-14",
                "price": 1299.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-07-25",
                "price": 999.91
            }
        ]
    },
    {
        "id": 995,
        "name": "GASEOSA FRESHY POMELO 2.25 LT",
        "price": 999.91,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA FRESHY POMELO 225 LT.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1299.9
            },
            {
                "date": "2026-06-07",
                "price": 999.91
            },
            {
                "date": "2026-06-14",
                "price": 1299.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-07-25",
                "price": 999.91
            }
        ]
    },
    {
        "id": 996,
        "name": "GASEOSA FRESHY TONICA 2.25 LT",
        "price": 999.91,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA FRESHY TONICA 225 LT.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1299.9
            },
            {
                "date": "2026-06-07",
                "price": 999.91
            },
            {
                "date": "2026-06-14",
                "price": 1299.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-07-25",
                "price": 999.91
            }
        ]
    },
    {
        "id": 997,
        "name": "GASEOSA FRESHY GUARANA 2.25 LT",
        "price": 999.91,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA FRESHY GUARANA 225 LT.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 1299.9
            },
            {
                "date": "2026-06-07",
                "price": 999.91
            },
            {
                "date": "2026-06-14",
                "price": 1299.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-07-25",
                "price": 999.91
            }
        ]
    },
    {
        "id": 998,
        "name": "AGUA SMARTWATER 591 CC",
        "price": 1149.89,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/AGUA SMARTWATER 591 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1049.89
            },
            {
                "date": "2026-05-02",
                "price": 949.9
            },
            {
                "date": "2026-05-09",
                "price": 1023.96
            },
            {
                "date": "2026-06-07",
                "price": 1099.9
            },
            {
                "date": "2026-06-14",
                "price": 949.9
            },
            {
                "date": "2026-06-21",
                "price": 1099.9
            },
            {
                "date": "2026-08-03",
                "price": 1149.89
            }
        ]
    },
    {
        "id": 999,
        "name": "GASEOSA PEPSI COLA 500 CC",
        "price": 1399.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA PEPSI COLA 500 CC.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 1249.89
            },
            {
                "date": "2026-07-25",
                "price": 1399.9
            }
        ]
    },
    {
        "id": 1000,
        "name": "GASEOSA SEVEN UP 500 CC",
        "price": 1399.9,
        "market": "maxiconsumo",
        "category": "gaseosas",
        "image": "images\\maxiconsumo/GASEOSA SEVEN UP 500 CC.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1399.9
            }
        ]
    },
    {
        "id": 1001,
        "name": "MEDALLON PATY EXPRESS 2X55 GR",
        "price": 2219.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/MEDALLON PATY EXPRESS 2X55 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2219.9
            },
            {
                "date": "2026-05-09",
                "price": 1698.9
            },
            {
                "date": "2026-05-16",
                "price": 2219.9
            }
        ]
    },
    {
        "id": 1002,
        "name": "MEDALLONES CHAMPION ESTUCHE 4 UN",
        "price": 2389.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/MEDALLONES CHAMPION ESTUCHE 4 UN.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2249.9
            },
            {
                "date": "2026-07-25",
                "price": 2389.9
            }
        ]
    },
    {
        "id": 1003,
        "name": "HAMBURGUESA UNION GANADERA FINITAS 2 UN",
        "price": 2399.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA UNION GANADERA FINITAS 2 UN.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 2899.9
            },
            {
                "date": "2026-05-02",
                "price": 2168.9
            },
            {
                "date": "2026-05-09",
                "price": 2499.9
            },
            {
                "date": "2026-05-16",
                "price": 1868.91
            },
            {
                "date": "2026-05-23",
                "price": 2579.9
            },
            {
                "date": "2026-06-07",
                "price": 1868.91
            },
            {
                "date": "2026-06-14",
                "price": 2579.9
            },
            {
                "date": "2026-07-25",
                "price": 1868.91
            },
            {
                "date": "2026-08-03",
                "price": 2399.9
            }
        ]
    },
    {
        "id": 1004,
        "name": "HAMBURGUESA PATY FINITA 2 UN",
        "price": 3154.89,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA PATY FINITA 2 UN.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 1899.58
            },
            {
                "date": "2026-07-25",
                "price": 3154.89
            }
        ]
    },
    {
        "id": 1005,
        "name": "HAMBURGUESA PATY CLASICA FLOW 2 UN",
        "price": 4499.89,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA PATY CLASICA FLOW 2 UN.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 4339.89
            },
            {
                "date": "2026-07-25",
                "price": 4499.89
            }
        ]
    },
    {
        "id": 1006,
        "name": "HAMBURGUESA PATY DE CANCHA 2X125 GR",
        "price": 6779.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA PATY DE CANCHA 2X125 GR.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 6779.9
            }
        ]
    },
    {
        "id": 1007,
        "name": "HAMBURGUESA UNION GANADERA CLASICA 4 UN",
        "price": 8979.89,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA UNION GANADERA CLASICA 4 UN.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 8979.89
            }
        ]
    },
    {
        "id": 1008,
        "name": "HAMBURGUESA MAROLIO 12 UN",
        "price": 14999.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA MAROLIO 12 UN.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 14999.9
            },
            {
                "date": "2026-05-02",
                "price": 12499.9
            },
            {
                "date": "2026-05-09",
                "price": 14999.9
            },
            {
                "date": "2026-05-30",
                "price": 12399.9
            },
            {
                "date": "2026-06-07",
                "price": 14999.9
            }
        ]
    },
    {
        "id": 1009,
        "name": "HAMBURGUESA PATY X 12 UN 80 GR",
        "price": 22599.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA PATY X 12 UN 80 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 15487.88
            },
            {
                "date": "2026-07-25",
                "price": 22599.9
            }
        ]
    },
    {
        "id": 1010,
        "name": "HAMBURGUESA MAROLIO 20 UN",
        "price": 24899.9,
        "market": "maxiconsumo",
        "category": "hamburguesas",
        "image": "images\\maxiconsumo/HAMBURGUESA MAROLIO 20 UN.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 24899.9
            }
        ]
    },
    {
        "id": 1011,
        "name": "ISOTONICA UP GRADE BLUEBERRY 750 CC",
        "price": 799.89,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA UP GRADE BLUEBERRY 750 CC.jpg",
        "history": [
            {
                "date": "2026-05-02",
                "price": 879.9
            },
            {
                "date": "2026-05-16",
                "price": 849.9
            },
            {
                "date": "2026-05-23",
                "price": 843.6
            },
            {
                "date": "2026-05-30",
                "price": 799.89
            },
            {
                "date": "2026-06-07",
                "price": 843.6
            },
            {
                "date": "2026-06-21",
                "price": 749.9
            },
            {
                "date": "2026-07-25",
                "price": 799.89
            }
        ]
    },
    {
        "id": 1012,
        "name": "ISOTONICA UP GRADE FRUTOS ROJOS 750 CC",
        "price": 799.89,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA UP GRADE FRUTOS ROJOS 750 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 879.9
            },
            {
                "date": "2026-05-16",
                "price": 849.9
            },
            {
                "date": "2026-05-23",
                "price": 843.6
            },
            {
                "date": "2026-05-30",
                "price": 799.89
            },
            {
                "date": "2026-06-07",
                "price": 843.6
            },
            {
                "date": "2026-06-21",
                "price": 749.9
            },
            {
                "date": "2026-07-25",
                "price": 799.89
            }
        ]
    },
    {
        "id": 1013,
        "name": "ISOTONICA UP GRADE MANZANA 750 C",
        "price": 799.89,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA UP GRADE MANZANA 750 C.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 879.9
            },
            {
                "date": "2026-05-16",
                "price": 849.9
            },
            {
                "date": "2026-05-23",
                "price": 843.6
            },
            {
                "date": "2026-05-30",
                "price": 799.89
            },
            {
                "date": "2026-06-07",
                "price": 843.6
            },
            {
                "date": "2026-06-21",
                "price": 749.9
            },
            {
                "date": "2026-07-25",
                "price": 799.89
            }
        ]
    },
    {
        "id": 1014,
        "name": "ISOTONICA POWERADE MOUNTAIN BLAST PET 500 CC",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA POWERADE MOUNTAIN BLAST PET 50.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1199.9
            },
            {
                "date": "2026-08-03",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 1015,
        "name": "ISOTONICA POWERADE MANZANA PET 500 CC",
        "price": 1099.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA POWERADE MANZANA PET 500 CC.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1149.9
            },
            {
                "date": "2026-05-23",
                "price": 1049.9
            },
            {
                "date": "2026-05-30",
                "price": 1149.9
            },
            {
                "date": "2026-06-14",
                "price": 1049.9
            },
            {
                "date": "2026-06-21",
                "price": 1149.9
            },
            {
                "date": "2026-07-25",
                "price": 1199.9
            },
            {
                "date": "2026-08-03",
                "price": 1099.9
            }
        ]
    },
    {
        "id": 1016,
        "name": "ISOTONICA GATORADE FRUTOS TROPICALES 750 CC",
        "price": 1499.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA GATORADE FRUTOS TROPICALES 750.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1499.9
            }
        ]
    },
    {
        "id": 1017,
        "name": "ISOTONICA GATORADE COOL BLUE PET 750 CC",
        "price": 1499.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA GATORADE COOL BLUE PET 750 CC.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1499.9
            }
        ]
    },
    {
        "id": 1018,
        "name": "ISOTONICA GATORADE MANZANA PET 750 CC",
        "price": 1499.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA GATORADE MANZANA PET 750 CC.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1499.9
            }
        ]
    },
    {
        "id": 1019,
        "name": "ISOTONICA POWERADE MANZANA PET 995 CC",
        "price": 1599.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA POWERADE MANZANA PET 995 CC.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 1499.9
            },
            {
                "date": "2026-05-30",
                "price": 1349.9
            },
            {
                "date": "2026-06-07",
                "price": 1499.9
            },
            {
                "date": "2026-06-21",
                "price": 1569.9
            },
            {
                "date": "2026-08-03",
                "price": 1599.9
            }
        ]
    },
    {
        "id": 1020,
        "name": "ISOTONICA GATORADE NARANJA PET 500 CC",
        "price": 1649.9,
        "market": "maxiconsumo",
        "category": "isotonicas",
        "image": "images\\maxiconsumo/ISOTONICA GATORADE NARANJA PET 500 CC.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1569.9
            },
            {
                "date": "2026-05-02",
                "price": 1549.89
            },
            {
                "date": "2026-05-09",
                "price": 1399.9
            },
            {
                "date": "2026-05-16",
                "price": 1549.89
            },
            {
                "date": "2026-05-30",
                "price": 1399.9
            },
            {
                "date": "2026-07-25",
                "price": 1649.9
            }
        ]
    },
    {
        "id": 1021,
        "name": "JUGO NOEL MULTIFRUTA 16 GR",
        "price": 299.9,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO NOEL MULTIFRUTA 16 GR.jpg",
        "history": [
            {
                "date": "2026-06-14",
                "price": 279.9
            },
            {
                "date": "2026-07-25",
                "price": 249.9
            },
            {
                "date": "2026-08-03",
                "price": 299.9
            }
        ]
    },
    {
        "id": 1022,
        "name": "JUGO NOEL NARANJA 16 GR",
        "price": 299.9,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO NOEL NARANJA 16 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 279.89
            },
            {
                "date": "2026-05-16",
                "price": 249.9
            },
            {
                "date": "2026-05-23",
                "price": 279.9
            },
            {
                "date": "2026-07-25",
                "price": 249.9
            },
            {
                "date": "2026-08-03",
                "price": 299.9
            }
        ]
    },
    {
        "id": 1023,
        "name": "JUGO ARCOR ANANA 15 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO ARCOR ANANA 15 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 289.89
            },
            {
                "date": "2026-05-02",
                "price": 299.89
            },
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1024,
        "name": "JUGO ARCOR NARANJA DULCE 15 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO ARCOR NARANJA DULCE 15 GR.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 299.89
            },
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1025,
        "name": "JUGO ARCOR MULTIFRUTA 15 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO ARCOR MULTIFRUTA 15 GR.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 299.89
            },
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1026,
        "name": "JUGO ARCOR NARANJA DURAZNO 15 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO ARCOR NARANJA DURAZNO 15 GR.jpg",
        "history": [
            {
                "date": "2026-05-09",
                "price": 299.89
            },
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1027,
        "name": "JUGO ARCOR NARANJA BANANA 15 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO ARCOR NARANJA BANANA 15 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 299.89
            },
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1028,
        "name": "JUGO LA CAMPAGNOLA BC NARANJA 9,2 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO LA CAMPAGNOLA BC NARANJA 92 GR.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1029,
        "name": "JUGO LA CAMPAGNOLA BC MANGO NARANJA 7,5 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO LA CAMPAGNOLA BC MANGO NARANJA 75 G.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1030,
        "name": "JUGO LA CAMPAGNOLA BC MANZANA ROJA 8 GR",
        "price": 329.88,
        "market": "maxiconsumo",
        "category": "jugos",
        "image": "images\\maxiconsumo/JUGO LA CAMPAGNOLA BC MANZANA ROJA 8 GR.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 329.88
            }
        ]
    },
    {
        "id": 1031,
        "name": "LECHE ANGELITA LARGA VIDA LIVIANA 1 LT",
        "price": 1599.9,
        "market": "maxiconsumo",
        "category": "leches",
        "image": "images\\maxiconsumo/LECHE ANGELITA LARGA VIDA LIVIANA 1 LT.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1849.9
            },
            {
                "date": "2026-08-03",
                "price": 1599.9
            }
        ]
    },
    {
        "id": 1032,
        "name": "LECHE ARMONIA SACHET 2% 1 LT",
        "price": 1819.9,
        "market": "maxiconsumo",
        "category": "leches",
        "image": "images\\maxiconsumo/LECHE ARMONIA SACHET 2 1 LT.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1449.89
            },
            {
                "date": "2026-05-09",
                "price": 1549.89
            },
            {
                "date": "2026-05-23",
                "price": 1779.9
            },
            {
                "date": "2026-07-25",
                "price": 1819.9
            }
        ]
    },
    {
        "id": 1033,
        "name": "LECHE ARMONIA SACHET 1% 1 LT",
        "price": 1819.9,
        "market": "maxiconsumo",
        "category": "leches",
        "image": "images\\maxiconsumo/LECHE ARMONIA SACHET 1 1 LT.jpg",
        "history": [
            {
                "date": "2026-05-23",
                "price": 1779.9
            },
            {
                "date": "2026-07-25",
                "price": 1819.9
            }
        ]
    },
    {
        "id": 1034,
        "name": "LECHE LA SERENISIMA LIVIANA 1% SACHET 1 LT",
        "price": 1899.89,
        "market": "maxiconsumo",
        "category": "leches",
        "image": "images\\maxiconsumo/LECHE LA SERENISIMA LIVIANA 1 SACHET 1 L.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 1599.9
            },
            {
                "date": "2026-05-16",
                "price": 1749.89
            },
            {
                "date": "2026-05-23",
                "price": 1849.9
            },
            {
                "date": "2026-05-30",
                "price": 1799.9
            },
            {
                "date": "2026-06-07",
                "price": 1849.9
            },
            {
                "date": "2026-07-25",
                "price": 1899.89
            }
        ]
    },
    {
        "id": 1035,
        "name": "LECHE LA SERENISIMA CLASICA 3% 1 LT",
        "price": 1899.89,
        "market": "maxiconsumo",
        "category": "leches",
        "image": "images\\maxiconsumo/LECHE LA SERENISIMA CLASICA 3 1 LT.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 1899.89
            }
        ]
    },
    {
        "id": 1036,
        "name": "CREMA LA SERENISIMA CULINARIA 200 CC",
        "price": 2699.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/CREMA LA SERENISIMA CULINARIA 200 CC.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 2499.9
            },
            {
                "date": "2026-07-25",
                "price": 3099.9
            },
            {
                "date": "2026-08-03",
                "price": 2699.9
            }
        ]
    },
    {
        "id": 1037,
        "name": "CREMA LA SERENISIMA VITAMINAS A y E 200 GR",
        "price": 2699.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/CREMA LA SERENISIMA VITAMINAS A y E 200 .jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 2499.9
            },
            {
                "date": "2026-07-25",
                "price": 3099.9
            },
            {
                "date": "2026-08-03",
                "price": 2699.9
            }
        ]
    },
    {
        "id": 1038,
        "name": "CREMA MILKAUT DOBLE 200 CC",
        "price": 2899.9,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/CREMA MILKAUT DOBLE 200 CC.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 2899.9
            }
        ]
    },
    {
        "id": 1039,
        "name": "CREMA LA PAULINA 350 CC",
        "price": 3579.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/CREMA LA PAULINA 350 CC.jpg",
        "history": [
            {
                "date": "2026-06-07",
                "price": 3499.89
            },
            {
                "date": "2026-07-25",
                "price": 3579.89
            }
        ]
    },
    {
        "id": 1040,
        "name": "CREMA MILKAUT 330 CC",
        "price": 4299.89,
        "market": "maxiconsumo",
        "category": "all",
        "image": "images\\maxiconsumo/CREMA MILKAUT 330 CC.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 4299.89
            }
        ]
    },
    {
        "id": 1041,
        "name": "QUESO SANTA ROSA AZUL PORCION 140 gr",
        "price": 5299.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO SANTA ROSA AZUL PORCION 140 gr.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 5299.9
            }
        ]
    },
    {
        "id": 1042,
        "name": "QUESO SAINT PAUL CREMOSO 1 KG",
        "price": 8199.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO SAINT PAUL CREMOSO 1 KG.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 8199.9
            }
        ]
    },
    {
        "id": 1043,
        "name": "QUESO SPALEN BARRA TYBO 1 KG",
        "price": 8999.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO SPALEN BARRA TYBO 1 KG.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 8999.9
            }
        ]
    },
    {
        "id": 1044,
        "name": "QUESO PUYEHUE BARRA 1 KG",
        "price": 9999.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO PUYEHUE BARRA 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11249.9
            },
            {
                "date": "2026-05-09",
                "price": 11899.89
            },
            {
                "date": "2026-07-25",
                "price": 12499.89
            },
            {
                "date": "2026-08-03",
                "price": 9999.9
            }
        ]
    },
    {
        "id": 1045,
        "name": "QUESO MAROLIO BARRA 1 KG",
        "price": 9999.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO MAROLIO BARRA 1 KG.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 12399.9
            },
            {
                "date": "2026-08-03",
                "price": 9999.9
            }
        ]
    },
    {
        "id": 1046,
        "name": "MUZZARELLA MAROLIO 1/4 HORMA 1 KG",
        "price": 10499.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/MUZZARELLA MAROLIO 14 HORMA 1 KG.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 8679.9
            },
            {
                "date": "2026-07-25",
                "price": 10499.9
            }
        ]
    },
    {
        "id": 1047,
        "name": "QUESO LA PAULINA BARRA PRATO 1 KG",
        "price": 11989.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO LA PAULINA BARRA PRATO 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11449.89
            },
            {
                "date": "2026-05-09",
                "price": 9888.89
            },
            {
                "date": "2026-05-16",
                "price": 11499.9
            },
            {
                "date": "2026-05-30",
                "price": 9999.9
            },
            {
                "date": "2026-06-07",
                "price": 11729.9
            },
            {
                "date": "2026-06-21",
                "price": 9899.91
            },
            {
                "date": "2026-07-25",
                "price": 11989.9
            }
        ]
    },
    {
        "id": 1048,
        "name": "QUESO LA PAULINA BARRA SANDWICH 1 KG",
        "price": 11989.9,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO LA PAULINA BARRA SANDWICH 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11499.9
            },
            {
                "date": "2026-05-09",
                "price": 9888.89
            },
            {
                "date": "2026-05-16",
                "price": 11499.9
            },
            {
                "date": "2026-05-30",
                "price": 9999.9
            },
            {
                "date": "2026-06-07",
                "price": 11729.9
            },
            {
                "date": "2026-06-21",
                "price": 9899.91
            },
            {
                "date": "2026-07-25",
                "price": 11989.9
            }
        ]
    },
    {
        "id": 1049,
        "name": "QUESO BARRAZA BARRA TYBO 1 kg",
        "price": 12249.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO BARRAZA BARRA TYBO 1 kg.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 11199.89
            },
            {
                "date": "2026-06-07",
                "price": 11759.89
            },
            {
                "date": "2026-07-25",
                "price": 12249.89
            }
        ]
    },
    {
        "id": 1050,
        "name": "QUESO LA QUESERA AZUL MITAD 1 KG",
        "price": 18399.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/QUESO LA QUESERA AZUL MITAD 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 17399.9
            },
            {
                "date": "2026-07-25",
                "price": 18399.89
            }
        ]
    },
    {
        "id": 1051,
        "name": "SAL DOS ESTRELLAS FINA 500 gr",
        "price": 499.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL DOS ESTRELLAS FINA 500 gr.jpg",
        "history": [
            {
                "date": "2026-05-16",
                "price": 599.89
            },
            {
                "date": "2026-05-23",
                "price": 489.9
            },
            {
                "date": "2026-05-30",
                "price": 599.89
            },
            {
                "date": "2026-06-07",
                "price": 489.9
            },
            {
                "date": "2026-06-14",
                "price": 599.89
            },
            {
                "date": "2026-08-03",
                "price": 499.9
            }
        ]
    },
    {
        "id": 1052,
        "name": "SAL COLOSAL ENTREFINA DOYPACK 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL COLOSAL ENTREFINA DOYPACK 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            },
            {
                "date": "2026-05-09",
                "price": 599.89
            },
            {
                "date": "2026-05-16",
                "price": 599.91
            },
            {
                "date": "2026-05-23",
                "price": 699.9
            },
            {
                "date": "2026-06-07",
                "price": 599.91
            },
            {
                "date": "2026-06-14",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1053,
        "name": "SAL COLOSAL GRUESA DOYPACK 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL COLOSAL GRUESA DOYPACK 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 699.9
            },
            {
                "date": "2026-05-09",
                "price": 599.89
            },
            {
                "date": "2026-05-16",
                "price": 599.91
            },
            {
                "date": "2026-05-23",
                "price": 699.9
            },
            {
                "date": "2026-06-07",
                "price": 599.91
            },
            {
                "date": "2026-06-14",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1054,
        "name": "SAL MAROLIO FINA PAQUETE 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL MAROLIO FINA PAQUETE 500 GR.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 649.9
            },
            {
                "date": "2026-05-09",
                "price": 699.9
            },
            {
                "date": "2026-05-30",
                "price": 649.9
            },
            {
                "date": "2026-06-07",
                "price": 699.9
            },
            {
                "date": "2026-06-14",
                "price": 649.9
            },
            {
                "date": "2026-06-21",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1055,
        "name": "SAL MAROLIO FINA ESTUCHE 500 GR",
        "price": 699.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL MAROLIO FINA ESTUCHE 500 GR.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 699.9
            }
        ]
    },
    {
        "id": 1056,
        "name": "SAL DOS ANCLAS FINA PAQUETE 500 GR",
        "price": 829.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL DOS ANCLAS FINA PAQUETE 500 GR.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 829.9
            }
        ]
    },
    {
        "id": 1057,
        "name": "SAL EL DIQUE ENTREFINA 1 KG",
        "price": 899.89,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL EL DIQUE ENTREFINA 1 KG.jpg",
        "history": [
            {
                "date": "2026-04-24",
                "price": 849.89
            },
            {
                "date": "2026-07-25",
                "price": 899.9
            },
            {
                "date": "2026-08-03",
                "price": 899.89
            }
        ]
    },
    {
        "id": 1058,
        "name": "SAL DOS ANCLAS GRUESA ESTUCHE 500 GR",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL DOS ANCLAS GRUESA ESTUCHE 500 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 999.9
            }
        ]
    },
    {
        "id": 1059,
        "name": "SAL CELUSAL ENTREFINA P 500 gr",
        "price": 999.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL CELUSAL ENTREFINA P 500 gr.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 999.9
            }
        ]
    },
    {
        "id": 1060,
        "name": "SAL MAROLIO ENTREFINA PAQUETE 1 KG",
        "price": 1089.9,
        "market": "maxiconsumo",
        "category": "sal",
        "image": "images\\maxiconsumo/SAL MAROLIO ENTREFINA PAQUETE 1 KG.jpg",
        "history": [
            {
                "date": "2026-08-03",
                "price": 1089.9
            }
        ]
    },
    {
        "id": 1061,
        "name": "SNACK TAKIS ORIGINAL 85 GR",
        "price": 2969.9,
        "market": "maxiconsumo",
        "category": "snacks",
        "image": "images\\maxiconsumo/SNACK TAKIS ORIGINAL 85 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 2399.9
            },
            {
                "date": "2026-07-25",
                "price": 2969.9
            }
        ]
    },
    {
        "id": 1062,
        "name": "SNACK DORITOS QUESO 77 GR",
        "price": 3399.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/SNACK DORITOS QUESO 77 GR.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 3199.89
            },
            {
                "date": "2026-06-14",
                "price": 3399.89
            }
        ]
    },
    {
        "id": 1063,
        "name": "SNACK MAICITOS PEHUAMAR 265 GR",
        "price": 4199.9,
        "market": "maxiconsumo",
        "category": "snacks",
        "image": "images\\maxiconsumo/SNACK MAICITOS PEHUAMAR 265 GR.jpg",
        "history": [
            {
                "date": "2026-05-30",
                "price": 3899.9
            },
            {
                "date": "2026-06-07",
                "price": 4499.9
            },
            {
                "date": "2026-06-14",
                "price": 3899.9
            },
            {
                "date": "2026-06-21",
                "price": 4499.91
            },
            {
                "date": "2026-07-25",
                "price": 4799.9
            },
            {
                "date": "2026-08-03",
                "price": 4199.9
            }
        ]
    },
    {
        "id": 1064,
        "name": "SNACK DORITOS QUESO 129 GR",
        "price": 4999.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/SNACK DORITOS QUESO 129 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 4999.89
            }
        ]
    },
    {
        "id": 1065,
        "name": "SNACK CHEETOS QUESO 229 GR",
        "price": 6299.89,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/SNACK CHEETOS QUESO 229 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 5899.9
            },
            {
                "date": "2026-07-25",
                "price": 6299.89
            }
        ]
    },
    {
        "id": 1066,
        "name": "SEMILLAS DE GIRASOL PIPAS SNACKS 150 gr",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "snacks",
        "image": "images\\maxiconsumo/SEMILLAS DE GIRASOL PIPAS SNACKS 150 gr.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1067,
        "name": "SNACK DORITOS QUESO 200 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/SNACK DORITOS QUESO 200 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 6799.9
            },
            {
                "date": "2026-07-25",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1068,
        "name": "SNACK 3D QUESO 85 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "fiambres",
        "image": "images\\maxiconsumo/SNACK 3D QUESO 85 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1069,
        "name": "SNACK TOSTITOS ROUNDED 160 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "snacks",
        "image": "images\\maxiconsumo/SNACK TOSTITOS ROUNDED 160 GR.jpg",
        "history": [
            {
                "date": "2026-06-21",
                "price": 0.0
            },
            {
                "date": "2026-07-25",
                "price": 3799.9
            },
            {
                "date": "2026-08-03",
                "price": 0.0
            }
        ]
    },
    {
        "id": 1070,
        "name": "SNACK DORITOS DINAMITA 82 GR",
        "price": 0.0,
        "market": "maxiconsumo",
        "category": "snacks",
        "image": "images\\maxiconsumo/SNACK DORITOS DINAMITA 82 GR.jpg",
        "history": [
            {
                "date": "2026-07-25",
                "price": 0.0
            }
        ]
    }
];