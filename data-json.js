`
















`



let produtos = [
    {
        codigo: 1,
        nome: "HD 2TB 7200RPM",
        marca: "Saga",
        categoria: "HD/SSD",
        preco: 499.19,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/TkzLZMX/HD2TB.jpg",
    },
    
    {   
        codigo: 2,
        nome: "Placa de Vídeo RTX 3060 12GB",
        marca: "Gigabyte",
        categoria: "Placa de vídeo",
        preco: 12999.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/YZkjvGY/RTX3060.jpg",
    },
    
    {
        codigo: 3,
        nome: "Gabinete TG4 Blue",
        marca: "Sharkoon",
        categoria: "Gabinete",
        preco: 159.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/8MJhwp6/TG4.jpg",
    },
    
    {
        codigo: 4,
        nome: "Monitor Aopen 27´",
        marca: "Acer",
        categoria: "Monitor",
        preco: 1999.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/BKnK8S9/AOPEN-27.jpg",
    },
    {
        codigo: 5,
        nome: "Processador i9-10800kfjy",
        marca: "Intel",
        categoria: "Processador",
        preco: 15899.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/W5cBwGN/i9-10900k.jpg",
    },
    
    {
        codigo: 6,
        nome: "Placa-Mãe GA-AB350M-DS3H",
        marca: "Gigabyte",
        categoria: "Placa-mãe",
        preco: 689.80,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/N9fGnRg/GA-AB350-M.png",
    },
    
    {
        codigo: 7,
        nome: "Memória RAM Fury, 8GB, 2666MHz, DDR4",
        marca: "HyperX",
        categoria: "Memória RAM",
        preco: 329.70,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/bNBdNX2/FURY-8GB.jpg",
    },
    
    {
        codigo: 8,
        nome: "Mouse Gamer Cobra",
        marca: "Redragon",
        categoria: "Periféricos",
        preco: 149.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/7JYr7XC/COBRA.png",
    },
    
    {
        codigo: 9,
        nome: "Teclado Gamer G213 Prodigy",
        marca: "Logitech",
        categoria: "Periféricos",
        preco: 139.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/3m6NBvm/G213-PROD.jpg",
    },
    
    {
        codigo: 10,
        nome: "Fonte 550W 80 Plus Bronze",
        marca: "Corsair",
        categoria: "Fonte",
        preco: 349.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/L1dvXtb/500W-80P.jpg",
    },

    {
        codigo: 11,
        nome: "Console Xbox Series S 500gb Ssd",
        marca: "Microsoft",
        categoria: "Console",
        preco: 2799.99,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/Wgqs6nv/xbox-S.jpg",
    },

    {
        codigo: 12,
        nome: "Console Nintendo Switch",
        marca: "Nintendo",
        categoria: "Console",
        preco: 2495.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/3B51sx9/nintendo-Switch.jpg",
    },

    {
        codigo: 13,
        nome: "Sony Playstation 5 825gb",
        marca: "Sony",
        categoria: "Console",
        preco: 6994.90,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/RB5nzNk/ps5.jpg",
    },

    {
        codigo: 14,
        nome: "PLACA DE VIDEO ASUS GEFORCE RTX 2060 DUAL OC EDITION 6GB",
        marca: "ASUS",
        categoria: "Placa de vídeo",
        preco: 5899.92,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/pdW4R0M/rtx2060.jpg",
    },

    {
        codigo: 15,
        nome: "SSD CS900 500GB 2.5 SATA III 6GB/S",
        marca: "PNY",
        categoria: "HD/SSD",
        preco: 549.01,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/wKxM8s4/ssd.jpg",
    },

    {
        codigo: 16,
        nome: "PLACA MAE B550MH DDR4",
        marca: "Biostar",
        categoria: "Placa-mãe",
        preco: 638.99,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/zH1CDH7/b550mh.jpg",
    },

    {
        codigo: 17,
        nome: "WATER COOLER COOLER MASTER MASTERLIQUID ML120L V2 RGB",
        marca: "Cooler Master",
        categoria: "Cooler",
        preco: 369.50,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/HFstS9W/water-Cooler.jpg",
    },

    {
        codigo: 18,
        nome: "COOLER DEEPCOOL GAMMAXX 400S 120MM",
        marca: "DeepCool",
        categoria: "Cooler",
        preco: 115.00,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://i.ibb.co/F32Fzzr/cooler.jpg",
    }

]




