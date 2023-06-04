function dicionario_mulheres() {
  var biografias = {

    bio01: {
    nome: "Ada Lovelace",
    imagem: "assets/img/ada-lovelace.jpg",
    descricao:
    "Ada Augusta King — a Condessa de Lovelace — viveu durante o século XIX e, desde pequena, demonstrou grande interesse pela matemática, recebendo incentivo de seus pais — Anne Isabella Milbanke e Lord Byron. Considerada uma das precursoras da Ciência da Computação, Ada foi a criadora do primeiro algoritmo da história, que foi processado pela máquina de Charles Babbage. O único problema encontrado por Lovelace, na época, é que ela simplesmente não possuía o maquinário necessário para colocar seus estudos à prova. Seu algoritmo, entretanto, foi provado como correto anos depois de seu falecimento.",
  },

  bio02: { 
    nome: "Carol Shaw",
    imagem: "assets/img/carol-shaw.jpg",
    descricao:
    "Nascida na Califórnia, em 1955, Carol Shaw se tornou uma notória engenheira de software para microprocessadores e criou o primeiro sistema de geração procedural de conteúdo, além de ter sido a primeira mulher a desbravar o universo dos games, na década de 70. Quando trabalhava na Atari, ela lançou comercialmente o primeiro jogo criado por uma mulher, o 3-D Tic-Tac-Toe, que tinha como base o tradicional jogo da velha. Depois, na Activision, ela programou seu jogo de maior repercussão: o River Raid, um clássico que ficou entre os mais populares de sua época.",
  },

  bio03: {
    nome: "Garotas do ENIAC",
    imagem: "assets/img/garotas-do-eniac.jpg",
    descricao:
    "As “Garotas do ENIAC” foi um grupo composto por seis mulheres consideradas as primeiras computers da história da informática e responsáveis pela configuração do ENIAC. O grupo formado por (Betty Snyder, Marlyn Wescoff, Fran Bilas, Kay McNulty, Ruth Lichterman e Adele Goldstine) lidava, manualmente, com milhares de botões para dar ao ENIAC as instruções necessárias para realizar os cálculos. O ENIAC (Electrical Numerical Integrator and Computer) foi o primeiro computador digital completamente eletrônico da história. O significado do nome é Computador e Integrador Numérico Eletrônico. ",
  },

  bio04: { 
    nome: "Grace Hopper",
    imagem: "assets/img/grace-hopper.jpg",
    descricao:
    "Primeira mulher a se formar PhD em matemática, além de ter sido a primeira almirante da marinha dos EUA. No campo da tecnologia, ela foi uma das criadoras do COBOL. Sua história mais famosa é a que remonta à popularização do termo “bug” para indicar problemas em software. Hopper também criou linguagens de programação para o UNIVAC, o primeiro computador comercial fabricado nos Estados Unidos.",
  },


  bio05: { 
    nome: "Hedy Lamarr",
    imagem: "assets/img/hedy-lamarr.jpg",
    descricao: "Hedy Lamarr, uma atriz e inventora austríaca. Notou que a frequência emitida pelas notas tocadas no piano poderiam funcionar de forma parecida que as estações de radiocomunicação. junto de George Antheil, desenvolveu um sistema de interferência de rádio, utilizado para evitar a detecção de mensagens pelos países inimigos na Segunda Guerra Mundial. Esse conceito é aplicado até hoje em smartphones, Wi-Fi, GPS, Bluetooth.",
  },

  bio06: {
    nome: "Irmã Mary Kenneth Keller",
    imagem: "assets/img/irma-mary-kenneth-keller.jpg",
    descricao:
    "Considerada a primeira mulher a receber um doutorado em ciências da computação. Sua contribuição foi fundamental na criação da linguagem de programação BASIC, criada com fins didáticos e utilizada por décadas. Fundando um departamento de ciências da computação, o qual permaneceu dirigindo até seu falecimento. Ela também foi uma das primeiras vozes pela inclusão das mulheres no ramo da informática.",
  },


};

var content = document.getElementById ("cards_content");

  for (var bio in biografias) {
    content.innerHTML +=
      '<div class="card">' +
      '<img class="imagem" src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      '<summary class="nome">' +
      biografias[bio].nome +
      "</summary>" +
      '<p class="descricao">' +
      biografias[bio].descricao +
      "</p>" +
      "</details>" +
      "</div>";
  }

}

dicionario_mulheres()
