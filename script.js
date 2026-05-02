document.addEventListener('DOMContentLoaded', () => {
    window.onload = () => {
    window.scrollTo(0, 0);
    };

   const botao = document.querySelector('.botao'); 
   const searcharea = document.querySelector('.search');
   botao.addEventListener('click', (e) => {
    if (!searcharea.classList.contains('aberto')) {
        e.preventDefault();
    }
    searcharea.classList.toggle('aberto');   
    if (searcharea.classList.contains('aberto')) {
        searcharea.focus();
    }
   });

    const carousel = document.querySelector('.carousel');
    const arraycarrosel =  [
        {
            img: "img.carousel/laferrari.frontthreequarter.webp",
            modelo: "Ferrari Laferrari Aperta",
            km: "0km",
            preco: "AED 26.000.000,00"
        },
        {
            img: "img.carousel/enzo.frontthreequarter.webp",
            modelo: "Ferrari Enzo",
            km: "112km",
            preco: "AED  32.000.000,00"
        },
        {
            img: "img.carousel/sian.frontthreequarter.webp",
            modelo: "Lamborghini Sián Roadster",
            km: "587km",
            preco: "AED 36.500.000,00"
        },
        {
            img: "img.carousel/bugatti.frontthreequarter.webp",
            modelo: "Bugatti Chiron",
            km: "1789km",
            preco: "AED 15.250.000,00"
        },
        {
            img: "img.carousel/mistral.frontthreequarter.webp",
            modelo: "Bugatti Mistral",
            km: "270km",
            preco: "AED 39.900.000,00"
        },
        {
            img: "img.carousel/svj.frontthreequarter.webp",
            modelo: "Lamborghini Aventador svj",
            km: "12.553km",
            preco: "AED 2.200.000,00"
        },
        {
            img: "img.carousel/918.frontthreequarter.webp",
            modelo: "Porsche 918 Spyder",
            km: "300km",
            preco: "AED 11.000.000,00"
        }
    ];

    const listacarroselcarros = document.querySelector('.carousel');
    arraycarrosel.slice(0, 3).forEach((car, index) => {
        const itemdalista = document.createElement('li');
        itemdalista.innerHTML = `
            <a href="" class="itens-carrosel" data-id="${index}">
                <img src="${car.img}" loading="lazy" alt="${car.modelo}" class="carousel-image">
                <h3 class="carousel-title-item">${car.modelo}</h3>
                <p class="carousel-km-item">${car.km}</p>
                <p class="carousel-price-item">${car.preco}</p>
            </a>
        `;
        listacarroselcarros.appendChild(itemdalista);
    });
    
    const botaoesquerdocarrosel = document.querySelector('.botao-carrosel-esquerdo');
    const botaodireitocarrosel = document.querySelector('.botao-carrosel-direito');
    
    let posiçao = 0;
    function mudarimagem () {
        listacarroselcarros.innerHTML = '';
        arraycarrosel.slice(posiçao, posiçao + 3).forEach((car, index) => {
            const itemdalista = document.createElement('li');
            itemdalista.innerHTML = `
                <a href="" class="itens-carrosel" data-id="${index}">
                <img src="${car.img}" loading="lazy" alt="${car.modelo}" class="carousel-image">
                <h3 class="carousel-title-item">${car.modelo}</h3>
                <p class="carousel-km-item">${car.km}</p>
                <p class="carousel-price-item">${car.preco}</p>
            </a>
            `;
            listacarroselcarros.appendChild(itemdalista);
        });
        atualizarbotoes();
    };
    
    function atualizarbotoes() {
        if (posiçao === 0) {
            botaoesquerdocarrosel.style.display = 'none';
        } else {
            botaoesquerdocarrosel.style.display = 'inline-block';
        }
        if (posiçao + 3 >= arraycarrosel.length) {
            botaodireitocarrosel.style.display = 'none';
        } else {
            botaodireitocarrosel.style.display = 'inline-block';
        }
    }

    botaoesquerdocarrosel.addEventListener('click', () => {
        posiçao --;
        mudarimagem();
    });
    botaodireitocarrosel.addEventListener('click', () => {
        posiçao ++;
        mudarimagem();
    });
    atualizarbotoes();
});