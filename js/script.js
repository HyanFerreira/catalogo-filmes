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

  modeloFilme.querySelector("button").addEventListener("click", (e) => {
    c(".card-trailer-poster img").src = item.img;
    c(".card-trailer-info h1").innerHTML = item.name;
    c(".card-carousel-imgEtaria img").src = item.etario;
    c(".card-category").innerHTML = item.category;
    c(".card-duration").innerHTML = item.duration;
    c(".card-synopsis").innerHTML = item.synopsis;
    c(".card-buttons a").href = item.link;
  });

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
      }, 1000);
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

function updateCarouselInfo(index) {
  const slideInfo = c(".carousel-info");
  const slideName = slideInfo.querySelector("h1");
  const slideCategory = slideInfo.querySelector(".carousel-category");
  const slideEtaria = slideInfo.querySelector(".carousel-imgEtaria img");
  const slideDuration = slideInfo.querySelector(".carousel-duration");
  const slideSynopsis = slideInfo.querySelector(".carousel-synopsis");
  const slideLink = slideInfo.querySelector(".carousel-buttons a");

  const filme = modeloFilmes[index];

  slideName.textContent = filme.name;
  slideCategory.textContent = filme.category;
  slideEtaria.src = filme.etario;
  slideDuration.textContent = filme.duration;
  slideSynopsis.textContent = filme.synopsis;
  slideLink.href = filme.link;
}

const slideImgs = document.querySelectorAll(".carousel-filme img");

slideImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    slideImgs.forEach((img) => {
      img.classList.remove("active");
    });
    img.classList.add("active");

    updateCarouselInfo(index);
  });
});

const carouselContainer = document.querySelector(".carousel-container");

function atualizarBackground(imagem) {
  carouselContainer.style.backgroundImage = `url(${imagem})`;
}

function escutarMudancaSlide() {
  const slideInputs = document.querySelectorAll('#slider input[type="radio"]');

  slideInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const slideIndex = parseInt(input.id.slice(1)) - 1;

      if (slideIndex >= 0 && slideIndex < modeloFilmes.length) {
        const imagem = modeloFilmes[slideIndex].background;
        atualizarBackground(imagem);
        updateCarouselInfo(slideIndex);
        slideImgs.forEach((img, index) => {
          img.src = modeloFilmes[index].img;
        });
      }
    });
  });
}

function definirBackgroundInicial() {
  const slideInputs = document.querySelectorAll('#slider input[type="radio"]');
  const slideIndex = Array.from(slideInputs).findIndex(
    (input) => input.checked
  );

  if (slideIndex >= 0 && slideIndex < modeloFilmes.length) {
    const imagem = modeloFilmes[slideIndex].background;
    atualizarBackground(imagem);
    updateCarouselInfo(slideIndex);
    slideImgs.forEach((img, index) => {
      img.src = modeloFilmes[index].img;
    });
  }
}

escutarMudancaSlide();
definirBackgroundInicial();

function exibirOverlay() {
  const btnTrailers = document.querySelectorAll(".btnTrailer");
  const overlay = document.querySelector(".overlay");

  btnTrailers.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlay.style.display = "flex";
    });
  });
}

exibirOverlay();

function hiddenOverlay() {
  const btnBack = document.getElementById("btnBack");
  const overlay = document.querySelector(".overlay");

  btnBack.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}

hiddenOverlay();

const searchBar = document.getElementById("search-bar");

const filmesDiv = document.getElementById("filmes-div");

function atualizarFilmes() {

  const searchTerm = searchBar.value.toLowerCase();

  if (searchTerm === "") {
    filmesDiv.innerHTML = "";
    document.querySelector(".filmes-div").style.padding = "0";
    return;
  } else {
    document.querySelector(".filmes-div").style.padding = "50px 20px 0 20px";
  }

  const filmesFiltrados = modeloFilmes.filter(
    (filme) =>
      filme.name.toLowerCase().includes(searchTerm) ||
      filme.category.toLowerCase().includes(searchTerm)
  );

  filmesDiv.innerHTML = "";

  filmesFiltrados.forEach((filme) => {
    const filmeElement = document.createElement("div");
    filmeElement.classList.add("modelo-filme");
    filmeElement.innerHTML = `
    <a href="${filme.link}"><img src="${filme.img}" alt="${filme.name}"></a>
    `;
    filmesDiv.appendChild(filmeElement);
  });
}

searchBar.addEventListener("input", atualizarFilmes);
