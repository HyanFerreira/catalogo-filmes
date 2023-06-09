let modeloFilmes = [
  {
    id: 1,
    name: "Aladdin",
    category: "2019 ‧ Musical/Fantasia",
    duration: "2h08",
    img: "img/filme1.png",
    link: "https://www.youtube.com/embed/PRyOvcOhtms?autoplay=1",
    synopsis:
      "Um jovem humilde descobre uma lâmpada mágica com um gênio que pode conceder desejos. Agora, o rapaz quer conquistar a moça por quem se apaixonou, mas o que ele não sabe é que a jovem é uma princesa que já está comprometida. Com a ajuda do gênio, ele tenta se passar por um príncipe para fisgar o amor da moça e a confiança de seu pai.",
    background: "img/background-filmes/aladdin.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 2,
    name: "Gato de Botas 2: O Último Pedido",
    category: "2022 ‧ Aventura/Comédia",
    duration: "1h40",
    img: "img/gato-de-botas.png",
    link: "https://www.youtube.com/embed/qtHcEfpYIow?autoplay=1",
    synopsis:
      "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas. Ele então parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",
    background: "img/background-filmes/gato-de-botas-bg.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 3,
    name: "Homem Aranha, de volta ao lar",
    category: "2017 ‧ Ação/Aventura",
    duration: "2h13",
    img: "img/filme3.png",
    link: "https://www.youtube.com/embed/ntE5Jmsol70?autoplay=1",
    synopsis:
      "Depois de lutar ao lado dos Vingadores, chegou a hora do jovem Peter Parker voltar para casa em Nova York ao lado de sua tia May. Sob o olhar atento do mentor Tony Stark, Peter começa a abraçar sua nova identidade como Homem-Aranha e combate diariamente pequenos crimes nas redondezas. Ele acredita que encontrou a missão de sua vida quando o terrível vilão Abutre surge ameaçando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.",
    background: "img/background-filmes/spider-man-homecomming.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 4,
    name: "Homem de Ferro 3",
    category: "2013 ‧ Ação/Aventura",
    duration: "2h10",
    img: "img/filme4.png",
    link: "https://www.youtube.com/embed/ruFW4s_ZF-4?autoplay=1",
    synopsis: "Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.",
    background: "img/background-filmes/iron-man3-v2.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 5,
    name: "Vingadores Ultimato",
    category: "2019 ‧ Ação/Ficção científica",
    duration: "3h02",
    img: "img/filme5.png",
    link: "https://www.youtube.com/embed/g6ng8iy-l0U?autoplay=1",
    synopsis: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
    background: "img/background-filmes/avengers-ultimate.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 6,
    name: "Capitã Marvel",
    category: "2019 ‧ Ação/Ficção científica",
    duration: "2h04",
    img: "img/filme2.png",
    link: "https://www.youtube.com/embed/JhY6Yy4wtb4?autoplay=1",
    synopsis:
      "Capitã Marvel é uma alienígena Kree que se encontra no meio de uma batalha entre seu povo e os Skrulls. Com a ajuda de Nick Fury, ela tenta impedir uma invasão na Terra, descobrir os segredos de seu passado e pôr um fim ao antigo conflito.",
    background: "img/background-filmes/capitain-marvel.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 7,
    name: "Vingadores",
    category: "2012 ‧ Ação/Ficção científica",
    duration: "2h23",
    img: "img/filme6.png",
    link: "https://www.youtube.com/embed/KeNEGtsCWEk?autoplay=1",
    synopsis: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 8,
    name: "Como Treinar o seu Dragão 3",
    category: "2019 ‧ Infantil/Fantasia",
    duration: "1h44",
    img: "img/dragao3.png",
    link: "https://www.youtube.com/embed/VS4owMPt7sg?autoplay=1",
    synopsis: "Soluço busca realizar seu grande sonho de encontrar um lar pacífico onde os dragões possam viver em segurança. Lá, Banguela descobre uma companheira, assim como ele, mas um tanto selvagem. Mas é quando o perigo começa a rondar o lar, que a dupla Banguela e Soluço é testada e precisa tomar decisões difíceis para salvar suas espécies.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 9,
    name: "Up: Altas Aventuras",
    category: "2009 ‧ Infantil/Aventura",
    duration: "1h36",
    img: "img/up.png",
    link: "https://www.youtube.com/embed/ORFWdXl_zJ4?autoplay=1",
    synopsis: "Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. Após um incidente, Carl é considerado uma ameaça pública e forçado a ser internado. Para evitar que isto aconteça, ele põe balões em sua casa, fazendo com que ela levante voo. Carl quer viajar para uma floresta na América do Sul, onde ele e Ellie sempre desejaram morar, mas descobre que um problema embarcou junto: Russell, um menino de 8 anos.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 10,
    name: "Carros 3",
    category: "2017 ‧ Comédia/Esporte",
    duration: "1h49",
    img: "img/carros3.png",
    link: "https://www.youtube.com/embed/BuvJZGLclAU?autoplay=1",
    synopsis: "Durante mais uma disputa eletrizante nas pistas, o campeão Relâmpago McQueen acelerou demais e acabou perdendo o controle. Agora, após ter capotando várias vezes e quase ter partido dessa para melhor, o vermelinho vai ter sua vida alterada para sempre. O acidente foi tão grave que, com os estragos, McQueen pode ter que se aposentar de vez.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 11,
    name: "Como Treinar o Seu Dragão 2",
    category: "2014 ‧ Infantil/Aventura",
    duration: "1h42",
    img: "img/dragao2.png",
    link: "https://www.youtube.com/embed/VUoCQFNoRMc?autoplay=1",
    synopsis: "Cinco anos se passaram desde que Soluço estabeleceu a paz com os dragões e vive em harmonia, na Ilha de Berk, com Banguela. Eles voam, apostam corridas e se divertem muito. Em uma destas aventuras, descobrem uma caverna secreta cheia de dragões. Agora, a dupla luta para proteger Berk de um guerreiro perigoso, chamado Drago Bludvist, que deseja controlar todos os dragões existentes.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 12,
    name: "Capitão América: Guerra Civil",
    category: "2016 ‧ Ação/Aventura",
    duration: "2h28",
    img: "img/guerra-civil.png",
    link: "https://www.youtube.com/embed/FRLYZn5PGuA?autoplay=1",
    synopsis: "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 13,
    name: "Viúva Negra",
    category: "2021 ‧ Ação/Ficção científica",
    duration: "2h13",
    img: "img/viuva-negra.png",
    link: "https://www.youtube.com/embed/uNAxHLp7wv8?autoplay=1",
    synopsis: "Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 14,
    name: "Luca",
    category: "2021 ‧ Comédia/Fantasia",
    duration: "2h13",
    img: "img/luca.png",
    link: "https://www.youtube.com/embed/E7_4ZUpyoWM?autoplay=1",
    synopsis: "Luca vive aventuras com seu novo melhor amigo, mas a diversão é ameaçada por um segredo: seu amigo é um monstro marinho de outro mundo que fica abaixo da superfície da água.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 15,
    name: "Batman vs Superman: A Origem da Justiça",
    category: " 2016 ‧ Ação/Aventura",
    duration: "2h31",
    img: "img/batman-vs-superman.png",
    link: "https://www.youtube.com/embed/IHDgrNxO-5I?autoplay=1",
    synopsis: "O confronto entre Superman e Zod em Metrópolis fez a população mundial se dividir sobre a presença de extraterrestres na Terra. Enquanto muitos consideram Superman um novo deus, há aqueles que entendem ser extremamente perigosa a existência de um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele enfrenta Superman enquanto o mundo se pergunta que tipo de herói precisa.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 16,
    name: "WALL-E",
    category: "2008 ‧ Infantil/Aventura",
    duration: "1h38",
    img: "img/walle.png",
    link: "https://www.youtube.com/embed/CZ1CATNbXg0?autoplay=1",
    synopsis: "Após entulhar a Terra de lixo e poluir a atmosfera com gases tóxicos, a humanidade deixou o planeta e passou a viver em uma gigantesca nave. O plano era que o retiro durasse alguns poucos anos, com robôs sendo deixados para limpar o planeta. WALL-E é o último destes robôs, e sua vida consiste em compactar o lixo existente no planeta. Até que um dia surge repentinamente uma nave, que traz um novo e moderno robô: Eva. A princípio curioso, WALL-E se apaixona e resolve segui-la por toda a galáxia.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 17,
    name: "Megamente",
    category: "2010 ‧ Comédia/Infantil",
    duration: "1h36",
    img: "img/megamente.png",
    link: "https://www.youtube.com/embed/ead9HCX9fe4?autoplay=1",
    synopsis: "Megamind é um filme de animação, aventura e comédia de super-heróis, dirigido por Tom McGrath, produzido pela DreamWorks Animation e distribuído pela Paramount Pictures.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
  {
    id: 18,
    name: "Venom",
    category: "2018 ‧ Ação/Ficção científica",
    duration: "1h52",
    img: "img/venom.png",
    link: "https://www.youtube.com/embed/EQxCycVTfcU?autoplay=1",
    synopsis: "Megamind é um filme de animação, aventura e comédia de super-heróis, dirigido por Tom McGrath, produzido pela DreamWorks Animation e distribuído pela Paramount Pictures.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 19,
    name: "Capitão América 2: O Soldado Invernal",
    category: "2014 ‧ Ação/Aventura",
    duration: "2h16",
    img: "img/capitao-america-tws.png",
    link: "https://www.youtube.com/embed/CTdvZwwShqM?autoplay=1",
    synopsis: "Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, também conhecido como Capitão América, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco. Em parceria com a Viúva Negra e Falcão, seu novo aliado, o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/12years.png",
  },
  {
    id: 20,
    name: "Kung Fu Panda 3",
    category: "2016 ‧ Infantil/Comédia ",
    duration: "1h35",
    img: "img/kung-fu-panda3.png",
    link: "https://www.youtube.com/embed/q75bGipJzIg?autoplay=1",
    synopsis: "Depois de reencontrar o pai, Po precisa treinar os moradores de um vilarejo repleto de pandas atrapalhados e ajudá-los a derrotar um perigoso e malvado vilão.",
    background: "img/background-filmes/avengers.png",
    etario: "img/etaria/livre.png",
  },
];
