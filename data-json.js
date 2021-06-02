let produtos = [
    {
        codigo: 1,
        nome: "HD 2TB 7200RPM",
        marca: "Saga",
        categoria: "HD/SSD",
        preco: 499.19,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/HD2TB.jpg",
    },
    
    {   
        codigo: 2,
        nome: "Placa de Vídeo RTX 3060 12GB",
        marca: "Gigabyte",
        categoria: "Placa de vídeo",
        preco: 12999.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/RTX3060.jpg",
    },
    
    {
        codigo: 3,
        nome: "Gabinete TG4 Blue",
        marca: "Sharkoon",
        categoria: "Gabinete",
        preco: 159.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/TG4.jpg",
    },
    
    {
        codigo: 4,
        nome: "Monitor Aopen 27´",
        marca: "Acer",
        categoria: "Monitor",
        preco: 1999.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/AOPEN 27.jpg",
    },
    {
        codigo: 5,
        nome: "Processador i9-10800kfjy",
        marca: "Intel",
        categoria: "Processador",
        preco: 15899.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/i9-10900k.jpg",
    },
    
    {
        codigo: 6,
        nome: "Placa-Mãe GA-AB350M-DS3H",
        marca: "Gigabyte",
        categoria: "Placa-mãe",
        preco: 689.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/GA-AB350M.png",
    },
    
    {
        codigo: 7,
        nome: "Memória RAM Fury, 8GB, 2666MHz, DDR4",
        marca: "HyperX",
        categoria: "Memória RAM",
        preco: 329.70,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/FURY 8GB.jpg",
    },
    
    {
        codigo: 8,
        nome: "Mouse Gamer Cobra",
        marca: "Redragon",
        categoria: "Periféricos",
        preco: 149.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/COBRA.png",
    },
    
    {
        codigo: 9,
        nome: "Teclado Gamer G213 Prodigy",
        marca: "Logitech",
        categoria: "Periféricos",
        preco: 139.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/G213 PROD.jpg",
    },
    
    {
        codigo: 10,
        nome: "Fonte 550W 80 Plus Bronze",
        marca: "Corsair",
        categoria: "Fonte",
        preco: 349.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/500W 80P.jpg",
    },

    {
        codigo: 11,
        nome: "Console Xbox Series S 500gb Ssd",
        marca: "Microsoft",
        categoria: "Console",
        preco: 2799.99,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/xbox-S.jpg",
    },

    {
        codigo: 12,
        nome: "Console Nintendo Switch",
        marca: "Nintendo",
        categoria: "Console",
        preco: 2495.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/nintendoSwitch.jpg",
    },

    {
        codigo: 13,
        nome: "Sony Playstation 5 825gb",
        marca: "Sony",
        categoria: "Console",
        preco: 6994.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/ps5.jpg",
    },

    {
        codigo: 14,
        nome: "PLACA DE VIDEO ASUS GEFORCE RTX 2060 DUAL OC EDITION 6GB",
        marca: "ASUS",
        categoria: "Placa de vídeo",
        preco: 5899.92,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/rtx2060.jpg",
    },

    {
        codigo: 15,
        nome: "SSD CS900 500GB 2.5 SATA III 6GB/S",
        marca: "PNY",
        categoria: "HD/SSD",
        preco: 549.01,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/ssd.jpg",
    },

    {
        codigo: 16,
        nome: "PLACA MAE B550MH DDR4",
        marca: "Biostar",
        categoria: "Placa-mãe",
        preco: 638.99,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/b550mh.jpg",
    },

    {
        codigo: 17,
        nome: "WATER COOLER COOLER MASTER MASTERLIQUID ML120L V2 RGB",
        marca: "Cooler Master",
        categoria: "Cooler",
        preco: 369.50,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/waterCooler.jpg",
    },

    {
        codigo: 18,
        nome: "COOLER DEEPCOOL GAMMAXX 400S 120MM",
        marca: "DeepCool ",
        categoria: "Cooler",
        preco: 115.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/cooler.jpg",
    },
    {
        codigo: 19,
        nome: "HD 2TB 7200RPM",
        marca: "Saga",
        categoria: "HD/SSD",
        preco: 499.19,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/HD2TB.jpg",
    },
    
    {   
        codigo: 20,
        nome: "Placa de Vídeo RTX 3060 12GB",
        marca: "Gigabyte",
        categoria: "Placa de vídeo",
        preco: 12999.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/RTX3060.jpg",
    },
    
    {
        codigo: 21,
        nome: "Gabinete TG4 Blue",
        marca: "Sharkoon",
        categoria: "Gabinete",
        preco: 159.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/TG4.jpg",
    },
    
    {
        codigo: 22,
        nome: "Monitor Aopen 27´",
        marca: "Acer",
        categoria: "Monitor",
        preco: 1999.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/AOPEN 27.jpg",
    },
    {
        codigo: 23,
        nome: "Processador i9-10800kfjy",
        marca: "Intel",
        categoria: "Processador",
        preco: 15899.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/i9-10900k.jpg",
    },
    
    {
        codigo: 24,
        nome: "Placa-Mãe GA-AB350M-DS3H",
        marca: "Gigabyte",
        categoria: "Placa-mãe",
        preco: 689.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/GA-AB350M.png",
    },
    
    {
        codigo: 25,
        nome: "Memória RAM Fury, 8GB, 2666MHz, DDR4",
        marca: "HyperX",
        categoria: "Memória RAM",
        preco: 329.70,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/FURY 8GB.jpg",
    },
    
    {
        codigo: 26,
        nome: "Mouse Gamer Cobra",
        marca: "Redragon",
        categoria: "Periféricos",
        preco: 149.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/COBRA.png",
    },
    
    {
        codigo: 27,
        nome: "Teclado Gamer G213 Prodigy",
        marca: "Logitech",
        categoria: "Periféricos",
        preco: 139.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/G213 PROD.jpg",
    },
    
    {
        codigo: 28,
        nome: "Fonte 550W 80 Plus Bronze",
        marca: "Corsair",
        categoria: "Fonte",
        preco: 349.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/500W 80P.jpg",
    },

    {
        codigo: 29,
        nome: "Console Xbox Series S 500gb Ssd",
        marca: "Microsoft",
        categoria: "Console",
        preco: 2799.99,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/xbox-S.jpg",
    },

    {
        codigo: 30,
        nome: "Console Nintendo Switch",
        marca: "Nintendo",
        categoria: "Console",
        preco: 2495.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/nintendoSwitch.jpg",
    },

    {
        codigo: 31,
        nome: "Sony Playstation 5 825gb",
        marca: "Sony",
        categoria: "Console",
        preco: 6994.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/ps5.jpg",
    },

    {
        codigo: 32,
        nome: "PLACA DE VIDEO ASUS GEFORCE RTX 2060 DUAL OC EDITION 6GB",
        marca: "ASUS",
        categoria: "Placa de vídeo",
        preco: 5899.92,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/rtx2060.jpg",
    },

    {
        codigo: 33,
        nome: "SSD CS900 500GB 2.5 SATA III 6GB/S",
        marca: "PNY",
        categoria: "HD/SSD",
        preco: 549.01,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/ssd.jpg",
    },

    {
        codigo: 34,
        nome: "PLACA MAE B550MH DDR4",
        marca: "Biostar",
        categoria: "Placa-mãe",
        preco: 638.99,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/b550mh.jpg",
    },

    {
        codigo: 35,
        nome: "WATER COOLER COOLER MASTER MASTERLIQUID ML120L V2 RGB",
        marca: "Cooler Master",
        categoria: "Cooler",
        preco: 369.50,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/waterCooler.jpg",
    },

    {
        codigo: 36,
        nome: "COOLER DEEPCOOL GAMMAXX 400S 120MM",
        marca: "DeepCool ",
        categoria: "Cooler",
        preco: 115.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "images/cooler.jpg",
    }

]




