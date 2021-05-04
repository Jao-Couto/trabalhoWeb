let prod1 ={
    nome: "Saga 2TB",
    marca: "Saga",
    categoria: "HD/SSD",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod2={
    nome: "RTX 3060 12GB",
    marca: "Gigabyte",
    categoria: "Placa de video",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod3={
    nome: "Gabinete Gamer Sharkoon TG4 Blue",
    marca: "Sharkoon",
    categoria: "Gabinete",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod4={
    nome: "Monitor Gamer Acer Aopen 27´",
    marca: "Acer",
    categoria: "Monitor",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod5={
    nome: "Intel i9-10800kfjy",
    marca: "Intel",
    categoria: "Processador",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod6={
    nome: "Placa-Mãe Gigabyte GA-AB350M-DS3H",
    marca: "Gigabyte",
    categoria: "Placa-mae",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod7={
    nome: "Memória HyperX Fury, 8GB, 2666MHz, DDR4",
    marca: "HyperX",
    categoria: "Memoria RAM",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod8={
    nome: "Mouse Gamer Redragon Cobra",
    marca: "Redragon",
    categoria: "Perifericos",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod9={
    nome: "Teclado Gamer Logitech G213 Prodigy",
    marca: "Logitech",
    categoria: "Perifericos",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let prod10={
    nome: "Fonte Corsair 550W 80 Plus Bronze",
    marca: "Corsair",
    categoria: "Fonte",
    preco: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
};

let produtos = [
    prod1,
    prod2,
    prod3,
    prod4,
    prod5,
    prod6,
    prod7,
    prod8,
    prod9,
    prod10
]
let contador = 0


export function getProdutos(){
    return produtos;
}

export function setProdutos(produtoSet){
    produtos = produtosSet
}

