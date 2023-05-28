const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modeloFilmes.map((item, index) => {
  let modeloFilme = c(".models").cloneNode(true);

  modeloFilme.querySelector(".modelo-filme-img img").src = item.img;
  modeloFilme.querySelector(".link-filme").href = item.link;

  modeloFilme.querySelector(".hide-modelo-filme-info h1").innerHTML = item.name;
  modeloFilme.querySelector(".category").innerHTML = item.category;
  modeloFilme.querySelector(".duration").innerHTML = item.duration;
  modeloFilme.querySelector(".synopsis").innerHTML = item.synopsis;

  c(".main .main-content").append(modeloFilme);

  const models = cs(".models");

  models.forEach((model) => {
    let timeoutId;

    model.addEventListener("mouseenter", () => {
      timeoutId = setTimeout(() => {
        const modeloFilme = model.querySelector(".modelo-filme");
        const hiddenModeloFilme = model.querySelector(".hidden-modelo-filme");
        modeloFilme.classList.add("translate");
        hiddenModeloFilme.classList.add("translate");
      }, 2000);
    });

    model.addEventListener("mouseleave", () => {
      clearTimeout(timeoutId);
      const modeloFilme = model.querySelector(".modelo-filme");
      const hiddenModeloFilme = model.querySelector(".hidden-modelo-filme");
      modeloFilme.classList.remove("translate");
      hiddenModeloFilme.classList.remove("translate");
    });
  });
});

// Atualiza as informações dos slides do carrossel
function updateCarouselInfo(index) {
  const slideInfo = c(".carousel-info");
  const slideName = slideInfo.querySelector("h1");
  const slideCategory = slideInfo.querySelector(".carousel-category");
  const slideDuration = slideInfo.querySelector(".carousel-duration");
  const slideSynopsis = slideInfo.querySelector(".carousel-synopsis");

  const filme = modeloFilmes[index];

  slideName.textContent = filme.name;
  slideCategory.textContent = filme.category;
  slideDuration.textContent = filme.duration;
  slideSynopsis.textContent = filme.synopsis;
}

const slideImgs = document.querySelectorAll('.carousel-filme img');

slideImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    slideImgs.forEach((img) => {
      img.classList.remove("active");
    });
    img.classList.add("active");

    updateCarouselInfo(index);
  });
});

// Obtém uma referência para o elemento .carousel-container
const carouselContainer = document.querySelector('.carousel-container');

function atualizarBackground(imagem) {
  carouselContainer.style.backgroundImage = `url(${imagem})`;
}

function escutarMudancaSlide() {
  const slideInputs = document.querySelectorAll('#slider input[type="radio"]');

  slideInputs.forEach((input) => {
    input.addEventListener('change', () => {
      const slideIndex = parseInt(input.id.slice(1)) - 1;

      if (slideIndex >= 0 && slideIndex < modeloFilmes.length) {
        const imagem = modeloFilmes[slideIndex].background;
        atualizarBackground(imagem);
        updateCarouselInfo(slideIndex); // Adicionado para atualizar as informações do carrossel
        slideImgs.forEach((img, index) => {
          img.src = modeloFilmes[index].img; // Atualiza as imagens do carrossel
        });
      }
    });
  });
}

function definirBackgroundInicial() {
  const slideInputs = document.querySelectorAll('#slider input[type="radio"]');
  const slideIndex = Array.from(slideInputs).findIndex((input) => input.checked);

  if (slideIndex >= 0 && slideIndex < modeloFilmes.length) {
    const imagem = modeloFilmes[slideIndex].background;
    atualizarBackground(imagem);
    updateCarouselInfo(slideIndex); // Adicionado para definir as informações iniciais do carrossel
    slideImgs.forEach((img, index) => {
      img.src = modeloFilmes[index].img; // Atualiza as imagens do carrossel
    });
  }
}

escutarMudancaSlide();
definirBackgroundInicial();




// barra de pesquisa
// Obtém a referência para o elemento de input da barra de pesquisa
const searchBar = document.getElementById('search-bar');

// Obtém a referência para a div onde os filmes serão exibidos
const filmesDiv = document.getElementById('filmes-div');

// Função para atualizar a exibição dos filmes com base no valor de pesquisa
function atualizarFilmes() {
  // Obtém o valor digitado na barra de pesquisa
  const searchTerm = searchBar.value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (searchTerm === "") {
    filmesDiv.innerHTML = ""; // Limpa a div de filmes
    return; // Retorna imediatamente, não exibindo nenhum filme
  }

  // Filtra os filmes com base no valor de pesquisa
  const filmesFiltrados = modeloFilmes.filter((filme) =>
    filme.name.toLowerCase().includes(searchTerm)
  );

  // Limpa a div de filmes
  filmesDiv.innerHTML = '';

  // Adiciona os filmes filtrados à div de filmes
  filmesFiltrados.forEach(filme => {
    const filmeElement = document.createElement('div');
    filmeElement.classList.add('filme-item');
    filmeElement.innerHTML = `
    <a href="${filme.link}"><img src="${filme.img}" alt="${filme.name}"></a>
    `;
    filmesDiv.appendChild(filmeElement);
  });
}

// Registra um evento de digitação na barra de pesquisa
searchBar.addEventListener('input', atualizarFilmes);




const filmesDiv = c(".filmes-div");

// Função para criar um elemento de filme com base no modelo
function criarElementoFilme(filme) {
  const modeloFilme = c(".models").cloneNode(true);
  const modeloFilmeImg = modeloFilme.querySelector(".modelo-filme-img img");
  const linkFilme = modeloFilme.querySelector(".link-filme");

  modeloFilmeImg.src = filme.img;
  modeloFilmeImg.alt = filme.name;
  linkFilme.href = filme.link;

  return modeloFilme;

  
}

// Função para atualizar a exibição dos filmes com base no valor de pesquisa
function atualizarFilmes() {
  // Obtém o valor digitado na barra de pesquisa
  const searchTerm = searchBar.value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (searchTerm === "") {
    filmesDiv.innerHTML = ""; // Limpa a div de filmes
    return; // Retorna imediatamente, não exibindo nenhum filme
  }

  // Filtra os filmes com base no valor de pesquisa
  const filmesFiltrados = modeloFilmes.filter((filme) =>
    filme.name.toLowerCase().includes(searchTerm)
  );

  // Limpa a div de filmes
  filmesDiv.innerHTML = "";

  // Adiciona os filmes filtrados à div de filmes
  filmesFiltrados.forEach((filme) => {
    const filmeElement = criarElementoFilme(filme);
    filmesDiv.appendChild(filmeElement);
  });
}

// Obtém a barra de pesquisa
const searchBar = c("#search-bar");

// Adiciona o evento input à barra de pesquisa
searchBar.addEventListener("input", atualizarFilmes);






// codigo antigo

// const c = (el) => document.querySelector(el);
// const cs = (el) => document.querySelectorAll(el);

// modeloFilmes.map((item, index) => {
//   let modeloFilme = c(".models").cloneNode(true);

//   modeloFilme.querySelector(".modelo-filme-img img").src = item.img;
//   modeloFilme.querySelector(".link-filme").href = item.link;
  
//   modeloFilme.querySelector(".hide-modelo-filme-info h1").innerHTML = item.name;
//   modeloFilme.querySelector(".category").innerHTML = item.category;
//   modeloFilme.querySelector(".duration").innerHTML = item.duration;
//   modeloFilme.querySelector(".synopsis").innerHTML = item.synopsis;

//   c(".main .main-content").append(modeloFilme);

//   // Atualiza as informações dos slides do carrossel
//   const slideInfo = c(".carousel-info");
//   const slideName = slideInfo.querySelector("h1");
//   const slideCategory = slideInfo.querySelector(".carousel-category");
//   const slideDuration = slideInfo.querySelector(".carousel-duration");
//   const slideSynopsis = slideInfo.querySelector(".carousel-synopsis");

//   slideName.textContent = item.name;
//   slideCategory.textContent = item.category;
//   slideDuration.textContent = item.duration;
//   slideSynopsis.textContent = item.synopsis;

//   const models = cs(".models");

//   models.forEach((model) => {
//     let timeoutId;

//     model.addEventListener("mouseenter", () => {
//       timeoutId = setTimeout(() => {
//         const modeloFilme = model.querySelector(".modelo-filme");
//         const hiddenModeloFilme = model.querySelector(".hidden-modelo-filme");
//         modeloFilme.classList.add("translate");
//         hiddenModeloFilme.classList.add("translate");
//       }, 2000);
//     });

//     model.addEventListener("mouseleave", () => {
//       clearTimeout(timeoutId);
//       const modeloFilme = model.querySelector(".modelo-filme");
//       const hiddenModeloFilme = model.querySelector(".hidden-modelo-filme");
//       modeloFilme.classList.remove("translate");
//       hiddenModeloFilme.classList.remove("translate");
//     });
//   });
// });



// // modeloFilmes.map((item, index) => {
// //   let modeloFilme = c(".carousel-info").cloneNode(true);
  
// //   modeloFilme.querySelector(".carousel-info-filmes h1").innerHTML = item.name;
// //   modeloFilme.querySelector(".carousel-category").innerHTML = item.category;
// //   modeloFilme.querySelector(".carousel-duration").innerHTML = item.duration;
// //   modeloFilme.querySelector(".carousel-synopsis").innerHTML = item.synopsis;

// //   c(".main .carousel-overlay").append(modeloFilme);
// // });



// // Carrossel e background dos filmes
// // Obtém uma referência para as tags <img> dos slides
// const slideImgs = document.querySelectorAll('.carousel-filme img');

// // Itera sobre o array modeloFilmes e atualiza as imagens dos slides
// modeloFilmes.forEach((filme, index) => {
//   if (index < slideImgs.length) {
//     slideImgs[index].src = filme.img;
//     slideImgs[index].alt = filme.name;
//   }
// });

// // Obtém uma referência para o elemento .carousel-container
// const carouselContainer = document.querySelector('.carousel-container');

// // Função para atualizar o background-image
// function atualizarBackground(imagem) {
//   carouselContainer.style.backgroundImage = `url(${imagem})`;
// }

// // Função para escutar as mudanças de seleção nos slides
// function escutarMudancaSlide() {
//   const slideInputs = document.querySelectorAll('#slider input[type="radio"]');
  
//   slideInputs.forEach((input) => {
//     input.addEventListener('change', () => {
//       const slideIndex = parseInt(input.id.slice(1)) - 1;
      
//       if (slideIndex >= 0 && slideIndex < modeloFilmes.length) {
//         const imagem = modeloFilmes[slideIndex].background;
//         atualizarBackground(imagem);
//       }
//     });
//   });
// }

// // Função para definir o background-image inicialmente
// function definirBackgroundInicial() {
//   const slideInputs = document.querySelectorAll('#slider input[type="radio"]');
//   const slideIndex = Array.from(slideInputs).findIndex((input) => input.checked);
  
//   if (slideIndex >= 0 && slideIndex < modeloFilmes.length) {
//     const imagem = modeloFilmes[slideIndex].background;
//     atualizarBackground(imagem);
//   }
// }

// // Chama a função para escutar as mudanças de seleção nos slides
// escutarMudancaSlide();

// // Chama a função para definir o background-image inicialmente
// definirBackgroundInicial();


// // Teste do iframe
// // Seleciona a div pai existente pelo ID
// var divPai = document.getElementById("divPai");

// // Obtém o link do iframe do modeloFilmes
// var linkIframe = modeloFilmes[0].link;

// // Cria o elemento iframe
// var iframe = document.createElement("iframe");

// // Define os atributos do iframe
// iframe.width = "100%";
// iframe.height = "100%";
// iframe.src = linkIframe;
// iframe.title = "YouTube video player";
// iframe.frameBorder = "0";
// iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
// iframe.allowFullscreen = true;

// // Adiciona o iframe como filho da div pai
// divPai.appendChild(iframe);

// // modeloFilmes.map((item, index) => {
// //   let modeloFilme = c(".overlay .card-trailer").cloneNode(true);

// //   modeloFilme.querySelector(".card-trailer-container iframe").src = item.link;

// //   c(".overlay .card-trailer").replaceWith(modeloFilme);
// // });
