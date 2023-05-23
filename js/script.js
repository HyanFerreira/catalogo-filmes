const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modeloFilmes.map((item, index) => {
  let modeloFilme = c(".models .modelo-filme").cloneNode(true);

  modeloFilme.querySelector(".modelo-filme-img img").src = item.img;
  modeloFilme.querySelector(".link-filme").href = item.link;

  c(".main .main-content").append(modeloFilme);
});
