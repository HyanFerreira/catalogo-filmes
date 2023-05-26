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
