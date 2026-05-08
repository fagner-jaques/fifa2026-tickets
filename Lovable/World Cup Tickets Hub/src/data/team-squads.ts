// Times-base atuais das 48 seleções classificadas para a Copa do Mundo
// FIFA 2026. Referencial de fim de 2025 / início de 2026 — as listas
// podem mudar a cada nova convocação. Para contexto educacional,
// representamos a formação mais provável dada a última janela.

export type Position = 'GOL' | 'DEF' | 'MEI' | 'ATA';

export interface SquadPlayer {
  name: string;
  position: Position;
  club: string;
}

export interface CurrentSquad {
  coach: {
    name: string;
    nationality: string;
    since: string;        // ano em que assumiu
  };
  formation: string;      // ex.: "4-3-3"
  startingXI: SquadPlayer[];
  reserves?: SquadPlayer[]; // 3-5 reservas-chave
  highlight: {
    name: string;
    role: string;          // posição/função
    reason: string;        // por que é o destaque
  };
  lastCallup: {
    period: string;        // ex.: "Janeiro 2026"
    context: string;       // ex.: "Eliminatórias finais / Amistosos"
    note?: string;         // novidades, retornos, ausências
  };
}

export const teamSquads: Record<string, CurrentSquad> = {
  bra: {
    coach: { name: "Carlo Ancelotti", nationality: "Italiano", since: "2025" },
    formation: "4-3-3",
    startingXI: [
      { name: "Alisson Becker", position: "GOL", club: "Liverpool" },
      { name: "Vanderson", position: "DEF", club: "Monaco" },
      { name: "Marquinhos", position: "DEF", club: "PSG" },
      { name: "Gabriel Magalhães", position: "DEF", club: "Arsenal" },
      { name: "Wendell", position: "DEF", club: "Porto" },
      { name: "Bruno Guimarães", position: "MEI", club: "Newcastle" },
      { name: "Joelinton", position: "MEI", club: "Newcastle" },
      { name: "Lucas Paquetá", position: "MEI", club: "West Ham" },
      { name: "Vinícius Jr.", position: "ATA", club: "Real Madrid" },
      { name: "Rodrygo", position: "ATA", club: "Real Madrid" },
      { name: "Raphinha", position: "ATA", club: "Barcelona" },
    ],
    reserves: [
      { name: "Ederson", position: "GOL", club: "Manchester City" },
      { name: "Éder Militão", position: "DEF", club: "Real Madrid" },
      { name: "Casemiro", position: "MEI", club: "Manchester United" },
      { name: "Endrick", position: "ATA", club: "Real Madrid" },
      { name: "Estêvão", position: "ATA", club: "Chelsea" },
    ],
    highlight: {
      name: "Vinícius Jr.",
      role: "Atacante (esquerda)",
      reason: "Eleito FIFA Best 2024. Capitão técnico do Real Madrid e referência da Seleção pós-Neymar.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios para a Copa",
      note: "Ancelotti convocou nova geração: Estêvão, Endrick e Igor Jesus em destaque. Neymar Jr. ainda em recuperação.",
    },
  },

  arg: {
    coach: { name: "Lionel Scaloni", nationality: "Argentino", since: "2018" },
    formation: "4-4-2",
    startingXI: [
      { name: "Emiliano Martínez", position: "GOL", club: "Aston Villa" },
      { name: "Nahuel Molina", position: "DEF", club: "Atlético de Madrid" },
      { name: "Cristian Romero", position: "DEF", club: "Tottenham" },
      { name: "Nicolás Otamendi", position: "DEF", club: "Benfica" },
      { name: "Nicolás Tagliafico", position: "DEF", club: "Lyon" },
      { name: "Rodrigo De Paul", position: "MEI", club: "Atlético de Madrid" },
      { name: "Enzo Fernández", position: "MEI", club: "Chelsea" },
      { name: "Alexis Mac Allister", position: "MEI", club: "Liverpool" },
      { name: "Lionel Messi", position: "ATA", club: "Inter Miami" },
      { name: "Lautaro Martínez", position: "ATA", club: "Inter de Milão" },
      { name: "Julián Álvarez", position: "ATA", club: "Atlético de Madrid" },
    ],
    reserves: [
      { name: "Leandro Paredes", position: "MEI", club: "Boca Juniors" },
      { name: "Ángel Di María", position: "ATA", club: "Benfica (aposentado da Seleção)" },
      { name: "Thiago Almada", position: "MEI", club: "Olympique de Lyon" },
      { name: "Gonzalo Montiel", position: "DEF", club: "River Plate" },
      { name: "Lisandro Martínez", position: "DEF", club: "Manchester United" },
    ],
    highlight: {
      name: "Lionel Messi",
      role: "Atacante / 10",
      reason: "Aos 38 anos, capitão e ainda referência técnica. Vai disputar sua possível 6ª e última Copa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos finais antes da Copa",
      note: "Messi confirmado. Scaloni mantém base tricampeã com gradual rejuvenescimento (Almada, Garnacho, Echeverri).",
    },
  },

  ger: {
    coach: { name: "Julian Nagelsmann", nationality: "Alemão", since: "2023" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Manuel Neuer", position: "GOL", club: "Bayern de Munique" },
      { name: "Joshua Kimmich", position: "DEF", club: "Bayern de Munique" },
      { name: "Jonathan Tah", position: "DEF", club: "Bayer Leverkusen" },
      { name: "Antonio Rüdiger", position: "DEF", club: "Real Madrid" },
      { name: "David Raum", position: "DEF", club: "RB Leipzig" },
      { name: "Aleksandar Pavlović", position: "MEI", club: "Bayern de Munique" },
      { name: "Robert Andrich", position: "MEI", club: "Bayer Leverkusen" },
      { name: "Jamal Musiala", position: "MEI", club: "Bayern de Munique" },
      { name: "Florian Wirtz", position: "MEI", club: "Bayer Leverkusen" },
      { name: "Leroy Sané", position: "ATA", club: "Bayern de Munique" },
      { name: "Kai Havertz", position: "ATA", club: "Arsenal" },
    ],
    reserves: [
      { name: "Marc-André ter Stegen", position: "GOL", club: "Barcelona" },
      { name: "Niclas Füllkrug", position: "ATA", club: "West Ham" },
      { name: "Pascal Groß", position: "MEI", club: "Borussia Dortmund" },
      { name: "Maximilian Mittelstädt", position: "DEF", club: "VfB Stuttgart" },
    ],
    highlight: {
      name: "Florian Wirtz",
      role: "Meia ofensivo",
      reason: "Cérebro criativo da nova geração. Vencedor da Bundesliga 2024 com Bayer Leverkusen invicto. Maior contratação do Liverpool em 2025.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Nagelsmann recupera Musiala após lesão. Ter Stegen e Neuer disputam vaga de titular para a Copa.",
    },
  },

  fra: {
    coach: { name: "Didier Deschamps", nationality: "Francês", since: "2012" },
    formation: "4-3-3",
    startingXI: [
      { name: "Mike Maignan", position: "GOL", club: "Milan" },
      { name: "Jules Koundé", position: "DEF", club: "Barcelona" },
      { name: "William Saliba", position: "DEF", club: "Arsenal" },
      { name: "Dayot Upamecano", position: "DEF", club: "Bayern de Munique" },
      { name: "Théo Hernández", position: "DEF", club: "Al-Hilal" },
      { name: "Eduardo Camavinga", position: "MEI", club: "Real Madrid" },
      { name: "Aurélien Tchouaméni", position: "MEI", club: "Real Madrid" },
      { name: "Antoine Griezmann", position: "MEI", club: "Atlético de Madrid" },
      { name: "Ousmane Dembélé", position: "ATA", club: "PSG" },
      { name: "Kylian Mbappé", position: "ATA", club: "Real Madrid" },
      { name: "Marcus Thuram", position: "ATA", club: "Inter de Milão" },
    ],
    reserves: [
      { name: "Brice Samba", position: "GOL", club: "Lens" },
      { name: "Ibrahima Konaté", position: "DEF", club: "Liverpool" },
      { name: "Adrien Rabiot", position: "MEI", club: "Olympique de Marselha" },
      { name: "Bradley Barcola", position: "ATA", club: "PSG" },
      { name: "Randal Kolo Muani", position: "ATA", club: "PSG" },
    ],
    highlight: {
      name: "Kylian Mbappé",
      role: "Atacante / 9",
      reason: "Capitão e estrela máxima. Buscará seu 2º título mundial após o vice traumático de 2022 (com hat-trick na final).",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos finais",
      note: "Deschamps mantém Pogba e Kanté de fora. Estreia de jovens como Désiré Doué e Manu Koné no time titular.",
    },
  },

  eng: {
    coach: { name: "Thomas Tuchel", nationality: "Alemão", since: "2025" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Jordan Pickford", position: "GOL", club: "Everton" },
      { name: "Kyle Walker", position: "DEF", club: "Burnley" },
      { name: "John Stones", position: "DEF", club: "Manchester City" },
      { name: "Marc Guéhi", position: "DEF", club: "Crystal Palace" },
      { name: "Luke Shaw", position: "DEF", club: "Manchester United" },
      { name: "Declan Rice", position: "MEI", club: "Arsenal" },
      { name: "Jude Bellingham", position: "MEI", club: "Real Madrid" },
      { name: "Bukayo Saka", position: "MEI", club: "Arsenal" },
      { name: "Phil Foden", position: "MEI", club: "Manchester City" },
      { name: "Cole Palmer", position: "MEI", club: "Chelsea" },
      { name: "Harry Kane", position: "ATA", club: "Bayern de Munique" },
    ],
    reserves: [
      { name: "Dean Henderson", position: "GOL", club: "Crystal Palace" },
      { name: "Trent Alexander-Arnold", position: "DEF", club: "Real Madrid" },
      { name: "Conor Gallagher", position: "MEI", club: "Atlético de Madrid" },
      { name: "Ollie Watkins", position: "ATA", club: "Aston Villa" },
      { name: "Anthony Gordon", position: "ATA", club: "Newcastle" },
    ],
    highlight: {
      name: "Jude Bellingham",
      role: "Meia ofensivo",
      reason: "Cérebro técnico e líder emocional aos 22 anos. Decisivo no Real Madrid e símbolo do 'Three Lions Renovado' de Tuchel.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Tuchel reformula a base: estreia de jovens como Adam Wharton e Morgan Rogers. Saka e Bellingham confirmados.",
    },
  },

  uru: {
    coach: { name: "Marcelo Bielsa", nationality: "Argentino", since: "2023" },
    formation: "3-3-1-3",
    startingXI: [
      { name: "Sergio Rochet", position: "GOL", club: "Internacional" },
      { name: "Nahitan Nández", position: "DEF", club: "Al-Qadsiah" },
      { name: "José María Giménez", position: "DEF", club: "Atlético de Madrid" },
      { name: "Ronald Araújo", position: "DEF", club: "Barcelona" },
      { name: "Mathías Olivera", position: "DEF", club: "Napoli" },
      { name: "Federico Valverde", position: "MEI", club: "Real Madrid" },
      { name: "Manuel Ugarte", position: "MEI", club: "Manchester United" },
      { name: "Rodrigo Bentancur", position: "MEI", club: "Tottenham" },
      { name: "Maximiliano Araújo", position: "ATA", club: "Sporting" },
      { name: "Darwin Núñez", position: "ATA", club: "Al-Hilal" },
      { name: "Facundo Pellistri", position: "ATA", club: "Panathinaikos" },
    ],
    reserves: [
      { name: "Sebastián Cáceres", position: "DEF", club: "Club América" },
      { name: "Maximiliano Araújo", position: "DEF", club: "Sporting" },
      { name: "Luis Suárez", position: "ATA", club: "Inter Miami (aposentado da seleção)" },
      { name: "Edinson Cavani", position: "ATA", club: "Boca Juniors (aposentado)" },
    ],
    highlight: {
      name: "Federico Valverde",
      role: "Meio-campista box-to-box",
      reason: "Capitão da nova geração. Pulmão e qualidade técnica do Real Madrid, transição perfeita no esquema de Bielsa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Era pós-Suárez/Cavani consolidada. Bielsa aposta na renovação com Maximiliano Araújo e Pellistri.",
    },
  },

  esp: {
    coach: { name: "Luis de la Fuente", nationality: "Espanhol", since: "2022" },
    formation: "4-3-3",
    startingXI: [
      { name: "Unai Simón", position: "GOL", club: "Athletic Bilbao" },
      { name: "Pedro Porro", position: "DEF", club: "Tottenham" },
      { name: "Robin Le Normand", position: "DEF", club: "Atlético de Madrid" },
      { name: "Aymeric Laporte", position: "DEF", club: "Athletic Bilbao" },
      { name: "Marc Cucurella", position: "DEF", club: "Chelsea" },
      { name: "Rodri", position: "MEI", club: "Manchester City" },
      { name: "Pedri", position: "MEI", club: "Barcelona" },
      { name: "Dani Olmo", position: "MEI", club: "Barcelona" },
      { name: "Lamine Yamal", position: "ATA", club: "Barcelona" },
      { name: "Nico Williams", position: "ATA", club: "Athletic Bilbao" },
      { name: "Álvaro Morata", position: "ATA", club: "Como" },
    ],
    reserves: [
      { name: "David Raya", position: "GOL", club: "Arsenal" },
      { name: "Fabián Ruiz", position: "MEI", club: "PSG" },
      { name: "Mikel Merino", position: "MEI", club: "Arsenal" },
      { name: "Ferran Torres", position: "ATA", club: "Barcelona" },
    ],
    highlight: {
      name: "Lamine Yamal",
      role: "Atacante (direita)",
      reason: "Aos 18 anos é a maior promessa do futebol mundial. Bola de Ouro do futebol jovem e ídolo do Barcelona.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Rodri retorna de longa lesão. Yamal e Pedri confirmados no comando técnico.",
    },
  },

  por: {
    coach: { name: "Roberto Martínez", nationality: "Espanhol", since: "2023" },
    formation: "4-3-3",
    startingXI: [
      { name: "Diogo Costa", position: "GOL", club: "Porto" },
      { name: "João Cancelo", position: "DEF", club: "Al-Hilal" },
      { name: "António Silva", position: "DEF", club: "Benfica" },
      { name: "Rúben Dias", position: "DEF", club: "Manchester City" },
      { name: "Nuno Mendes", position: "DEF", club: "PSG" },
      { name: "Vitinha", position: "MEI", club: "PSG" },
      { name: "Bruno Fernandes", position: "MEI", club: "Manchester United" },
      { name: "Bernardo Silva", position: "MEI", club: "Manchester City" },
      { name: "João Félix", position: "ATA", club: "Chelsea" },
      { name: "Cristiano Ronaldo", position: "ATA", club: "Al-Nassr" },
      { name: "Rafael Leão", position: "ATA", club: "Milan" },
    ],
    reserves: [
      { name: "Pepe", position: "DEF", club: "Aposentado em 2024" },
      { name: "Rúben Neves", position: "MEI", club: "Al-Hilal" },
      { name: "Diogo Jota", position: "ATA", club: "Liverpool" },
      { name: "Gonçalo Ramos", position: "ATA", club: "PSG" },
    ],
    highlight: {
      name: "Cristiano Ronaldo",
      role: "Capitão / Atacante",
      reason: "Aos 41 anos, sua possível 6ª e última Copa. Único jogador a marcar em 5 Copas — busca seu primeiro título mundial.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "CR7 confirma presença. Roberto Martínez integra novos talentos como Francisco Conceição e Gonçalo Inácio.",
    },
  },

  ned: {
    coach: { name: "Ronald Koeman", nationality: "Holandês", since: "2023" },
    formation: "4-3-3",
    startingXI: [
      { name: "Bart Verbruggen", position: "GOL", club: "Brighton" },
      { name: "Denzel Dumfries", position: "DEF", club: "Inter de Milão" },
      { name: "Virgil van Dijk", position: "DEF", club: "Liverpool" },
      { name: "Stefan de Vrij", position: "DEF", club: "Inter de Milão" },
      { name: "Nathan Aké", position: "DEF", club: "Manchester City" },
      { name: "Jerdy Schouten", position: "MEI", club: "PSV Eindhoven" },
      { name: "Tijjani Reijnders", position: "MEI", club: "Manchester City" },
      { name: "Frenkie de Jong", position: "MEI", club: "Barcelona" },
      { name: "Xavi Simons", position: "ATA", club: "RB Leipzig" },
      { name: "Cody Gakpo", position: "ATA", club: "Liverpool" },
      { name: "Memphis Depay", position: "ATA", club: "Corinthians" },
    ],
    reserves: [
      { name: "Mark Flekken", position: "GOL", club: "Brentford" },
      { name: "Matthijs de Ligt", position: "DEF", club: "Manchester United" },
      { name: "Donyell Malen", position: "ATA", club: "Aston Villa" },
      { name: "Joshua Zirkzee", position: "ATA", club: "Manchester United" },
    ],
    highlight: {
      name: "Virgil van Dijk",
      role: "Capitão / Zagueiro",
      reason: "Aos 34 anos é referência defensiva mundial e líder espiritual da Oranje. Uma das maiores chances de título da Holanda.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Geração competitiva. Memphis Depay no Brasil ainda titular. De Ligt disputa vaga com De Vrij.",
    },
  },

  bel: {
    coach: { name: "Rudi García", nationality: "Francês", since: "2025" },
    formation: "4-3-3",
    startingXI: [
      { name: "Koen Casteels", position: "GOL", club: "Al-Qadsiah" },
      { name: "Timothy Castagne", position: "DEF", club: "Fulham" },
      { name: "Wout Faes", position: "DEF", club: "Leicester" },
      { name: "Zeno Debast", position: "DEF", club: "Sporting" },
      { name: "Maxim De Cuyper", position: "DEF", club: "Brighton" },
      { name: "Amadou Onana", position: "MEI", club: "Aston Villa" },
      { name: "Youri Tielemans", position: "MEI", club: "Aston Villa" },
      { name: "Kevin De Bruyne", position: "MEI", club: "Napoli" },
      { name: "Jérémy Doku", position: "ATA", club: "Manchester City" },
      { name: "Leandro Trossard", position: "ATA", club: "Arsenal" },
      { name: "Romelu Lukaku", position: "ATA", club: "Napoli" },
    ],
    reserves: [
      { name: "Matz Sels", position: "GOL", club: "Nottingham Forest" },
      { name: "Charles De Ketelaere", position: "MEI", club: "Atalanta" },
      { name: "Dodi Lukebakio", position: "ATA", club: "Sevilla" },
    ],
    highlight: {
      name: "Kevin De Bruyne",
      role: "Meia / 10",
      reason: "Cérebro técnico mundial. Aos 34 anos no Napoli, lidera os 'Diabos Vermelhos' em sua possível última grande Copa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Hazard, Witsel e Vertonghen aposentados. Geração de transição com Doku e Bakayoko.",
    },
  },

  cro: {
    coach: { name: "Zlatko Dalić", nationality: "Croata", since: "2017" },
    formation: "4-3-3",
    startingXI: [
      { name: "Dominik Livaković", position: "GOL", club: "Girona" },
      { name: "Josip Stanišić", position: "DEF", club: "Bayern de Munique" },
      { name: "Joško Gvardiol", position: "DEF", club: "Manchester City" },
      { name: "Joško Sutalo", position: "DEF", club: "Ajax" },
      { name: "Borna Sosa", position: "DEF", club: "Ajax" },
      { name: "Luka Modrić", position: "MEI", club: "Milan" },
      { name: "Marcelo Brozović", position: "MEI", club: "Al-Nassr" },
      { name: "Mateo Kovačić", position: "MEI", club: "Manchester City" },
      { name: "Mario Pašalić", position: "MEI", club: "Atalanta" },
      { name: "Andrej Kramarić", position: "ATA", club: "Hoffenheim" },
      { name: "Ivan Perišić", position: "ATA", club: "PSV Eindhoven" },
    ],
    reserves: [
      { name: "Ivica Ivušić", position: "GOL", club: "Pafos" },
      { name: "Nikola Vlašić", position: "MEI", club: "Torino" },
      { name: "Petar Sučić", position: "MEI", club: "Inter de Milão" },
      { name: "Ante Budimir", position: "ATA", club: "Osasuna" },
    ],
    highlight: {
      name: "Luka Modrić",
      role: "Capitão / Meia central",
      reason: "Aos 41 anos, ainda titular no Milan. Bola de Ouro 2018, vai para sua possível 5ª e última Copa do Mundo.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Geração veterana com Modrić, Brozović e Perišić. Renovação com Sučić e Pašalić em rota crescente.",
    },
  },

  mex: {
    coach: { name: "Javier Aguirre", nationality: "Mexicano", since: "2024 (3ª passagem)" },
    formation: "4-3-3",
    startingXI: [
      { name: "Luis Malagón", position: "GOL", club: "Club América" },
      { name: "Jorge Sánchez", position: "DEF", club: "Cruz Azul" },
      { name: "César Montes", position: "DEF", club: "Lokomotiv Moscou" },
      { name: "Johan Vásquez", position: "DEF", club: "Genoa" },
      { name: "Jesús Gallardo", position: "DEF", club: "Toluca" },
      { name: "Edson Álvarez", position: "MEI", club: "Fenerbahçe" },
      { name: "Luis Chávez", position: "MEI", club: "Pachuca" },
      { name: "Orbelín Pineda", position: "MEI", club: "AEK Atenas" },
      { name: "Hirving Lozano", position: "ATA", club: "San Diego FC" },
      { name: "Santiago Giménez", position: "ATA", club: "Milan" },
      { name: "Alexis Vega", position: "ATA", club: "Toluca" },
    ],
    reserves: [
      { name: "Guillermo Ochoa", position: "GOL", club: "AVS Futebol" },
      { name: "Henry Martín", position: "ATA", club: "Club América" },
      { name: "Diego Lainez", position: "ATA", club: "Tigres" },
    ],
    highlight: {
      name: "Edson Álvarez",
      role: "Volante / Capitão",
      reason: "Capitão e cérebro defensivo. Em 2026, a missão é finalmente passar das oitavas pela primeira vez em 7 oportunidades.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (anfitrião)",
      note: "Aguirre comandou histórica Copa de 2002 e 2010. Consolida o time em casa no Estádio Azteca.",
    },
  },

  usa: {
    coach: { name: "Mauricio Pochettino", nationality: "Argentino", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Matt Turner", position: "GOL", club: "Crystal Palace" },
      { name: "Sergiño Dest", position: "DEF", club: "PSV Eindhoven" },
      { name: "Chris Richards", position: "DEF", club: "Crystal Palace" },
      { name: "Tim Ream", position: "DEF", club: "Charlotte FC" },
      { name: "Antonee Robinson", position: "DEF", club: "Fulham" },
      { name: "Tyler Adams", position: "MEI", club: "Bournemouth" },
      { name: "Yunus Musah", position: "MEI", club: "Atalanta" },
      { name: "Weston McKennie", position: "MEI", club: "Juventus" },
      { name: "Christian Pulisic", position: "ATA", club: "Milan" },
      { name: "Folarin Balogun", position: "ATA", club: "AS Monaco" },
      { name: "Tim Weah", position: "ATA", club: "Marseille" },
    ],
    reserves: [
      { name: "Gio Reyna", position: "MEI", club: "Borussia Dortmund" },
      { name: "Brenden Aaronson", position: "MEI", club: "Leeds" },
      { name: "Ricardo Pepi", position: "ATA", club: "PSV Eindhoven" },
    ],
    highlight: {
      name: "Christian Pulisic",
      role: "Capitão / Atacante",
      reason: "Maior estrela do futebol americano. Decisivo no Milan e líder técnico da seleção em casa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (anfitrião)",
      note: "Pochettino é a aposta para chegar aos quartos pela primeira vez em casa. Geração mais talentosa da história.",
    },
  },

  col: {
    coach: { name: "Néstor Lorenzo", nationality: "Argentino", since: "2022" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Camilo Vargas", position: "GOL", club: "Atlas" },
      { name: "Daniel Muñoz", position: "DEF", club: "Crystal Palace" },
      { name: "Davinson Sánchez", position: "DEF", club: "Galatasaray" },
      { name: "Yerry Mina", position: "DEF", club: "Cagliari" },
      { name: "Johan Mojica", position: "DEF", club: "Magdeburg" },
      { name: "Jefferson Lerma", position: "MEI", club: "Crystal Palace" },
      { name: "Richard Ríos", position: "MEI", club: "Benfica" },
      { name: "James Rodríguez", position: "MEI", club: "Club León" },
      { name: "John Arias", position: "MEI", club: "Wolverhampton" },
      { name: "Luis Díaz", position: "ATA", club: "Bayern de Munique" },
      { name: "Jhon Durán", position: "ATA", club: "Fenerbahçe" },
    ],
    reserves: [
      { name: "Rafael Borré", position: "ATA", club: "Olympiakos" },
      { name: "Mateus Uribe", position: "MEI", club: "Sao Paulo" },
      { name: "Mateo Cassierra", position: "ATA", club: "Zenit" },
    ],
    highlight: {
      name: "Luis Díaz",
      role: "Atacante (esquerda)",
      reason: "Estrela do Bayern de Munique desde 2025 (transferência do Liverpool). Mais talentoso colombiano desde James.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "James aos 35 anos ainda titular. Geração com Lerma, Ríos e Durán mistura experiência com força física.",
    },
  },

  mar: {
    coach: { name: "Walid Regragui", nationality: "Marroquino", since: "2022" },
    formation: "4-3-3",
    startingXI: [
      { name: "Yassine Bounou", position: "GOL", club: "Al-Hilal" },
      { name: "Achraf Hakimi", position: "DEF", club: "PSG" },
      { name: "Romain Saïss", position: "DEF", club: "Al-Shabab" },
      { name: "Nayef Aguerd", position: "DEF", club: "West Ham" },
      { name: "Noussair Mazraoui", position: "DEF", club: "Manchester United" },
      { name: "Azzedine Ounahi", position: "MEI", club: "Marseille" },
      { name: "Sofyan Amrabat", position: "MEI", club: "Fenerbahçe" },
      { name: "Bilal El Khannouss", position: "MEI", club: "Leicester" },
      { name: "Hakim Ziyech", position: "ATA", club: "Al-Duhail" },
      { name: "Brahim Díaz", position: "ATA", club: "Real Madrid" },
      { name: "Youssef En-Nesyri", position: "ATA", club: "Fenerbahçe" },
    ],
    reserves: [
      { name: "Munir El Kajoui", position: "GOL", club: "Al-Hazm" },
      { name: "Abdessamad Ezzalzouli", position: "ATA", club: "Real Betis" },
      { name: "Eliesse Ben Seghir", position: "ATA", club: "AS Monaco" },
    ],
    highlight: {
      name: "Achraf Hakimi",
      role: "Lateral-direito",
      reason: "Capitão e ponta-de-lança ofensiva. Vencedor da Champions com PSG em 2025. Estrela do futebol mundial pós-Mané.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Geração consagrada de 2022 segue intacta. Regragui mantém esquema vencedor da histórica semi.",
    },
  },

  jpn: {
    coach: { name: "Hajime Moriyasu", nationality: "Japonês", since: "2018" },
    formation: "3-4-2-1",
    startingXI: [
      { name: "Zion Suzuki", position: "GOL", club: "Parma" },
      { name: "Takehiro Tomiyasu", position: "DEF", club: "Arsenal" },
      { name: "Kō Itakura", position: "DEF", club: "Borussia Mönchengladbach" },
      { name: "Hiroki Itō", position: "DEF", club: "Bayern de Munique" },
      { name: "Yukinari Sugawara", position: "DEF", club: "Southampton" },
      { name: "Wataru Endō", position: "MEI", club: "Liverpool" },
      { name: "Hidemasa Morita", position: "MEI", club: "Sporting" },
      { name: "Junya Itō", position: "MEI", club: "Stade Reims" },
      { name: "Kaoru Mitoma", position: "ATA", club: "Brighton" },
      { name: "Takefusa Kubo", position: "ATA", club: "Real Sociedad" },
      { name: "Ayase Ueda", position: "ATA", club: "Feyenoord" },
    ],
    reserves: [
      { name: "Daichi Kamada", position: "MEI", club: "Crystal Palace" },
      { name: "Daizen Maeda", position: "ATA", club: "Celtic" },
      { name: "Takumi Minamino", position: "ATA", club: "AS Monaco" },
    ],
    highlight: {
      name: "Kaoru Mitoma",
      role: "Atacante (esquerda)",
      reason: "Driblador letal do Brighton. Decisivo nas vitórias sobre Alemanha e Espanha em 2022. Ícone da geração mais talentosa do Japão.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Moriyasu mantém base do Catar. Geração mais europeu-experiente da história japonesa.",
    },
  },

  kor: {
    coach: { name: "Hong Myung-bo", nationality: "Coreano", since: "2024" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Kim Seung-gyu", position: "GOL", club: "Al-Shabab" },
      { name: "Kim Tae-hwan", position: "DEF", club: "Ulsan HD" },
      { name: "Kim Min-jae", position: "DEF", club: "Bayern de Munique" },
      { name: "Park Seung-jik", position: "DEF", club: "Seoul" },
      { name: "Kim Jin-su", position: "DEF", club: "Jeonbuk Hyundai" },
      { name: "Hwang In-beom", position: "MEI", club: "Feyenoord" },
      { name: "Lee Jae-sung", position: "MEI", club: "Mainz" },
      { name: "Hwang Hee-chan", position: "MEI", club: "Wolverhampton" },
      { name: "Lee Kang-in", position: "MEI", club: "PSG" },
      { name: "Son Heung-min", position: "ATA", club: "LAFC" },
      { name: "Cho Gue-sung", position: "ATA", club: "FC Midtjylland" },
    ],
    reserves: [
      { name: "Oh Hyeon-gyu", position: "ATA", club: "Genk" },
      { name: "Hwang Ui-jo", position: "ATA", club: "Alanyaspor" },
    ],
    highlight: {
      name: "Son Heung-min",
      role: "Capitão / Atacante",
      reason: "Maior artilheiro asiático da Premier League. Aos 33 anos no LAFC, lidera os 'Tigres da Ásia' em busca do feito de 2002.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Hong Myung-bo (capitão de 2002) reformula seleção. Lee Kang-in cresce no PSG. Kim Min-jae é zaga elite mundial.",
    },
  },

  aus: {
    coach: { name: "Tony Popovic", nationality: "Australiano", since: "2024" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Mathew Ryan", position: "GOL", club: "AZ Alkmaar" },
      { name: "Lewis Miller", position: "DEF", club: "Hibernian" },
      { name: "Harry Souttar", position: "DEF", club: "Sheffield United" },
      { name: "Cameron Burgess", position: "DEF", club: "Ipswich Town" },
      { name: "Aziz Behich", position: "DEF", club: "Melbourne City" },
      { name: "Jackson Irvine", position: "MEI", club: "St. Pauli" },
      { name: "Connor Metcalfe", position: "MEI", club: "St. Pauli" },
      { name: "Riley McGree", position: "MEI", club: "Middlesbrough" },
      { name: "Martin Boyle", position: "ATA", club: "Hibernian" },
      { name: "Nestory Irankunda", position: "ATA", club: "Bayern de Munique" },
      { name: "Mitchell Duke", position: "ATA", club: "Machida Zelvia" },
    ],
    reserves: [
      { name: "Adam Taggart", position: "ATA", club: "Perth Glory" },
      { name: "Awer Mabil", position: "ATA", club: "Ferencváros" },
    ],
    highlight: {
      name: "Jackson Irvine",
      role: "Capitão / Volante",
      reason: "Capitão experiente do St. Pauli. Líder defensivo dos 'Socceroos' que volta às oitavas pelo 2º vez seguida em 2026.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Popovic trocou Graham Arnold em 2024. Irankunda do Bayern é a maior promessa.",
    },
  },

  can: {
    coach: { name: "Jesse Marsch", nationality: "Americano", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Maxime Crépeau", position: "GOL", club: "Portland Timbers" },
      { name: "Alistair Johnston", position: "DEF", club: "Celtic" },
      { name: "Moïse Bombito", position: "DEF", club: "Nice" },
      { name: "Derek Cornelius", position: "DEF", club: "Olympique de Marseille" },
      { name: "Alphonso Davies", position: "DEF", club: "Bayern de Munique" },
      { name: "Stephen Eustáquio", position: "MEI", club: "Porto" },
      { name: "Ismaël Koné", position: "MEI", club: "Olympique de Marselha" },
      { name: "Tajon Buchanan", position: "ATA", club: "Inter de Milão" },
      { name: "Jonathan David", position: "ATA", club: "Juventus" },
      { name: "Cyle Larin", position: "ATA", club: "Mallorca" },
      { name: "Jacob Shaffelburg", position: "ATA", club: "Nashville SC" },
    ],
    reserves: [
      { name: "Dayne St. Clair", position: "GOL", club: "Minnesota United" },
      { name: "Jonathan Osorio", position: "MEI", club: "Toronto FC" },
    ],
    highlight: {
      name: "Alphonso Davies",
      role: "Lateral-esquerdo",
      reason: "Vencedor da Champions com Bayern em 2020. Maior estrela canadense da história — capitão e ícone nacional.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (anfitrião)",
      note: "Marsch (ex-Leeds, RB Leipzig) traz pressing alto. Como anfitrião, o Canadá quer suas primeiras oitavas.",
    },
  },

  sui: {
    coach: { name: "Murat Yakın", nationality: "Suíço", since: "2021" },
    formation: "3-4-2-1",
    startingXI: [
      { name: "Yann Sommer", position: "GOL", club: "Inter de Milão" },
      { name: "Manuel Akanji", position: "DEF", club: "Manchester City" },
      { name: "Nico Elvedi", position: "DEF", club: "Borussia Mönchengladbach" },
      { name: "Ricardo Rodríguez", position: "DEF", club: "Torino" },
      { name: "Silvan Widmer", position: "MEI", club: "Mainz" },
      { name: "Granit Xhaka", position: "MEI", club: "Bayer Leverkusen" },
      { name: "Remo Freuler", position: "MEI", club: "Bologna" },
      { name: "Michel Aebischer", position: "MEI", club: "Bologna" },
      { name: "Ruben Vargas", position: "ATA", club: "Sevilla" },
      { name: "Dan Ndoye", position: "ATA", club: "Bologna" },
      { name: "Breel Embolo", position: "ATA", club: "Stade Rennais" },
    ],
    reserves: [
      { name: "Gregor Kobel", position: "GOL", club: "Borussia Dortmund" },
      { name: "Xherdan Shaqiri", position: "MEI", club: "Chicago Fire" },
      { name: "Zeki Amdouni", position: "ATA", club: "Burnley" },
    ],
    highlight: {
      name: "Granit Xhaka",
      role: "Capitão / Volante",
      reason: "Cérebro do Bayer Leverkusen invencível 2024 e da Suíça. Líder técnico em sua possível 4ª e última Copa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Geração veterana com Sommer, Xhaka e Akanji. Embolo retorna após lesão de longa duração.",
    },
  },

  ecu: {
    coach: { name: "Sebastián Beccacece", nationality: "Argentino", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Hernán Galíndez", position: "GOL", club: "Huracán" },
      { name: "Ángelo Preciado", position: "DEF", club: "Sparta Praga" },
      { name: "Piero Hincapié", position: "DEF", club: "Bayer Leverkusen" },
      { name: "Willian Pacho", position: "DEF", club: "PSG" },
      { name: "Pervis Estupiñán", position: "DEF", club: "Brighton" },
      { name: "Moisés Caicedo", position: "MEI", club: "Chelsea" },
      { name: "Jhojan Sarmiento", position: "MEI", club: "Sevilla" },
      { name: "Kendry Páez", position: "MEI", club: "Strasbourg" },
      { name: "Gonzalo Plata", position: "ATA", club: "Flamengo" },
      { name: "Enner Valencia", position: "ATA", club: "Internacional" },
      { name: "Kevin Rodríguez", position: "ATA", club: "Union St-Gilloise" },
    ],
    reserves: [
      { name: "Alexander Domínguez", position: "GOL", club: "Liga de Quito" },
      { name: "Félix Torres", position: "DEF", club: "Corinthians" },
      { name: "Yaimar Medina", position: "MEI", club: "Independiente del Valle" },
    ],
    highlight: {
      name: "Moisés Caicedo",
      role: "Volante",
      reason: "Maior contratação da Premier League em 2023. Mid-fielder defensivo de elite mundial — futuro capitão da Tri.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Geração com Páez (16 anos é a Promessa do Chelsea). Beccacece traz pressão argentina ao esquema.",
    },
  },

  irn: {
    coach: { name: "Amir Galenoei", nationality: "Iraniano", since: "2023" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Alireza Beiranvand", position: "GOL", club: "Persepolis" },
      { name: "Sadegh Moharrami", position: "DEF", club: "Persepolis" },
      { name: "Morteza Pouraliganji", position: "DEF", club: "Sepahan" },
      { name: "Shojae Khalilzadeh", position: "DEF", club: "Tractor" },
      { name: "Milad Mohammadi", position: "DEF", club: "Persepolis" },
      { name: "Saeid Ezatolahi", position: "MEI", club: "Esteghlal" },
      { name: "Ali Karimi", position: "MEI", club: "Kayserispor" },
      { name: "Mehdi Torabi", position: "MEI", club: "Persepolis" },
      { name: "Sardar Azmoun", position: "ATA", club: "Shabab Al-Ahli" },
      { name: "Mehdi Taremi", position: "ATA", club: "Olympiakos" },
      { name: "Saman Ghoddos", position: "ATA", club: "Esteghlal" },
    ],
    reserves: [
      { name: "Hossein Hosseini", position: "GOL", club: "Esteghlal" },
      { name: "Allahyar Sayyadmanesh", position: "ATA", club: "Westerlo" },
    ],
    highlight: {
      name: "Mehdi Taremi",
      role: "Atacante / 9",
      reason: "Maior artilheiro iraniano da Champions League. Estrela do Olympiakos e líder da nova geração.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Azmoun retorna após lesão. Geração mais europeia-experiente da história iraniana.",
    },
  },

  sen: {
    coach: { name: "Pape Thiaw", nationality: "Senegalês", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Édouard Mendy", position: "GOL", club: "Al-Ahli" },
      { name: "Krépin Diatta", position: "DEF", club: "AS Monaco" },
      { name: "Kalidou Koulibaly", position: "DEF", club: "Al-Hilal" },
      { name: "Abdou Diallo", position: "DEF", club: "Al-Arabi" },
      { name: "Ismail Jakobs", position: "DEF", club: "Galatasaray" },
      { name: "Idrissa Gana Gueye", position: "MEI", club: "Everton" },
      { name: "Pape Matar Sarr", position: "MEI", club: "Tottenham" },
      { name: "Pape Gueye", position: "MEI", club: "Villarreal" },
      { name: "Iliman Ndiaye", position: "ATA", club: "Everton" },
      { name: "Sadio Mané", position: "ATA", club: "Al-Nassr" },
      { name: "Nicolas Jackson", position: "ATA", club: "Bayern de Munique" },
    ],
    reserves: [
      { name: "Mory Diaw", position: "GOL", club: "Clermont" },
      { name: "Boulaye Dia", position: "ATA", club: "Lazio" },
      { name: "Habib Diallo", position: "ATA", club: "Damac" },
    ],
    highlight: {
      name: "Sadio Mané",
      role: "Capitão / Atacante",
      reason: "Bola de Ouro Africana 2x. Aos 34 anos no Al-Nassr, ainda referência técnica e emocional dos 'Leões da Teranga'.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Pape Thiaw (auxiliar de Cissé) assumiu em 2024. Manteve a espinha dorsal de 2022.",
    },
  },

  alg: {
    coach: { name: "Vladimir Petković", nationality: "Sérvio", since: "2024" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Raïs M'Bolhi", position: "GOL", club: "USM Alger" },
      { name: "Aïssa Mandi", position: "DEF", club: "Lille" },
      { name: "Ramy Bensebaini", position: "DEF", club: "Borussia Dortmund" },
      { name: "Youcef Atal", position: "DEF", club: "Al Sadd" },
      { name: "Houssem Aouar", position: "DEF", club: "Al-Ittihad" },
      { name: "Ismaël Bennacer", position: "MEI", club: "Marseille" },
      { name: "Nabil Bentaleb", position: "MEI", club: "Lille" },
      { name: "Yacine Brahimi", position: "MEI", club: "Damac" },
      { name: "Riyad Mahrez", position: "ATA", club: "Al-Ahli" },
      { name: "Islam Slimani", position: "ATA", club: "Mechelen" },
      { name: "Said Benrahma", position: "ATA", club: "Olympique de Lyon" },
    ],
    reserves: [
      { name: "Anthony Mandrea", position: "GOL", club: "Angers" },
      { name: "Adam Ounas", position: "ATA", club: "Lille" },
    ],
    highlight: {
      name: "Riyad Mahrez",
      role: "Capitão / Atacante",
      reason: "Bola de Ouro Africana 2016. Vencedor de Premier League e Champions. Ídolo nacional aos 35 anos.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Petković (ex-Suíça campeã da Eurocopa) assumiu em 2024. Mahrez consagrado como capitão.",
    },
  },

  egy: {
    coach: { name: "Hossam Hassan", nationality: "Egípcio", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Mohamed Abou Gabal 'Gabaski'", position: "GOL", club: "Zamalek" },
      { name: "Mohamed Hamdy", position: "DEF", club: "Pyramids FC" },
      { name: "Mohamed Abdelmonem", position: "DEF", club: "Nice" },
      { name: "Mahmoud Hamdi 'El Wensh'", position: "DEF", club: "Zamalek" },
      { name: "Akram Tawfik", position: "DEF", club: "Al-Ahly" },
      { name: "Mohamed Elneny", position: "MEI", club: "Al-Jazira" },
      { name: "Tarek Hamed", position: "MEI", club: "Al-Tai" },
      { name: "Mahmoud 'Trezeguet' Hassan", position: "ATA", club: "Trabzonspor" },
      { name: "Mohamed Salah", position: "ATA", club: "Liverpool" },
      { name: "Mostafa Mohamed", position: "ATA", club: "Stade Rennais" },
      { name: "Omar Marmoush", position: "ATA", club: "Manchester City" },
    ],
    reserves: [
      { name: "Mohammed Sherif", position: "ATA", club: "Pyramids FC" },
      { name: "Mahmoud Saber", position: "MEI", club: "Al-Ahly" },
    ],
    highlight: {
      name: "Mohamed Salah",
      role: "Capitão / Atacante",
      reason: "Bola de Ouro Africana 3x. Lenda do Liverpool. Aos 33 anos, primeira Copa em 8 anos pode ser sua última grande chance.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Hossam Hassan (jogador histórico) assumiu em 2024. Marmoush do City é a maior promessa.",
    },
  },

  par: {
    coach: { name: "Gustavo Alfaro", nationality: "Argentino", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Roberto Junior Fernández", position: "GOL", club: "Olimpia" },
      { name: "Iván Cavellini", position: "DEF", club: "Cerro Porteño" },
      { name: "Gustavo Gómez", position: "DEF", club: "Palmeiras" },
      { name: "Junior Alonso", position: "DEF", club: "Atlético-MG" },
      { name: "Júnior Marabel", position: "DEF", club: "Olimpia" },
      { name: "Mathías Villasanti", position: "MEI", club: "Grêmio" },
      { name: "Andrés Cubas", position: "MEI", club: "Vancouver Whitecaps" },
      { name: "Damián Bobadilla", position: "MEI", club: "São Paulo" },
      { name: "Miguel Almirón", position: "ATA", club: "Atlanta United" },
      { name: "Antonio Sanabria", position: "ATA", club: "Cremonese" },
      { name: "Gustavo Bareiro", position: "ATA", club: "Athletico-PR" },
    ],
    reserves: [
      { name: "Julio Enciso", position: "ATA", club: "Ipswich Town" },
      { name: "Miguel Vázquez", position: "MEI", club: "Cerro Porteño" },
    ],
    highlight: {
      name: "Miguel Almirón",
      role: "Atacante / Meia",
      reason: "Capitão. Voltou ao Atlanta United após Newcastle. Líder técnico da geração que volta após 16 anos.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Alfaro (ex-Costa Rica e Equador) trouxe disciplina tática. Sanabria como referência ofensiva.",
    },
  },

  sco: {
    coach: { name: "Steve Clarke", nationality: "Escocês", since: "2019" },
    formation: "3-5-2",
    startingXI: [
      { name: "Angus Gunn", position: "GOL", club: "Norwich City" },
      { name: "Aaron Hickey", position: "DEF", club: "Brentford" },
      { name: "Jack Hendry", position: "DEF", club: "Al-Ettifaq" },
      { name: "Kieran Tierney", position: "DEF", club: "Celtic" },
      { name: "Andy Robertson", position: "DEF", club: "Liverpool" },
      { name: "John McGinn", position: "MEI", club: "Aston Villa" },
      { name: "Billy Gilmour", position: "MEI", club: "Brighton" },
      { name: "Scott McTominay", position: "MEI", club: "Napoli" },
      { name: "Ryan Christie", position: "MEI", club: "Bournemouth" },
      { name: "Ben Doak", position: "ATA", club: "Bournemouth" },
      { name: "Che Adams", position: "ATA", club: "Torino" },
    ],
    reserves: [
      { name: "Craig Gordon", position: "GOL", club: "Heart of Midlothian" },
      { name: "Lyndon Dykes", position: "ATA", club: "Birmingham" },
    ],
    highlight: {
      name: "Scott McTominay",
      role: "Volante / Meia ofensivo",
      reason: "Vencedor do Scudetto com Napoli em 2025 e melhor jogador do campeonato. Cérebro técnico da Tartan Army.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 28 anos)",
      note: "Robertson e McGinn capitanam. Doak é a promessa jovem. Tartan Army busca histórica passagem da fase de grupos.",
    },
  },

  swe: {
    coach: { name: "Jon Dahl Tomasson", nationality: "Dinamarquês", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Robin Olsen", position: "GOL", club: "Aston Villa" },
      { name: "Emil Krafth", position: "DEF", club: "Newcastle" },
      { name: "Victor Lindelöf", position: "DEF", club: "Aston Villa" },
      { name: "Isak Hien", position: "DEF", club: "Atalanta" },
      { name: "Gabriel Gudmundsson", position: "DEF", club: "Lille" },
      { name: "Mattias Svanberg", position: "MEI", club: "Wolfsburg" },
      { name: "Lucas Bergvall", position: "MEI", club: "Tottenham" },
      { name: "Hugo Larsson", position: "MEI", club: "Eintracht Frankfurt" },
      { name: "Anthony Elanga", position: "ATA", club: "Newcastle" },
      { name: "Alexander Isak", position: "ATA", club: "Liverpool" },
      { name: "Dejan Kulusevski", position: "ATA", club: "Tottenham" },
    ],
    reserves: [
      { name: "Viktor Gyökeres", position: "ATA", club: "Arsenal" },
      { name: "Jens Cajuste", position: "MEI", club: "Brentford" },
    ],
    highlight: {
      name: "Alexander Isak",
      role: "Centroavante",
      reason: "Maior contratação da história da Premier League em 2025 (Liverpool). Sucessor natural de Ibrahimović no manto sueco.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 8 anos)",
      note: "Tomasson reformulou a base. Trio ofensivo Isak-Gyökeres-Kulusevski pode ser o melhor da história sueca.",
    },
  },

  aut: {
    coach: { name: "Ralf Rangnick", nationality: "Alemão", since: "2022" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Patrick Pentz", position: "GOL", club: "Brøndby" },
      { name: "Stefan Posch", position: "DEF", club: "Como" },
      { name: "Philipp Lienhart", position: "DEF", club: "Freiburg" },
      { name: "David Alaba", position: "DEF", club: "Real Madrid" },
      { name: "Phillipp Mwene", position: "DEF", club: "PSV Eindhoven" },
      { name: "Marcel Sabitzer", position: "MEI", club: "Borussia Dortmund" },
      { name: "Nicolas Seiwald", position: "MEI", club: "RB Leipzig" },
      { name: "Konrad Laimer", position: "MEI", club: "Bayern de Munique" },
      { name: "Christoph Baumgartner", position: "MEI", club: "RB Leipzig" },
      { name: "Marko Arnautović", position: "ATA", club: "Red Star Belgrade" },
      { name: "Michael Gregoritsch", position: "ATA", club: "Freiburg" },
    ],
    reserves: [
      { name: "Heinz Lindner", position: "GOL", club: "Union Saint-Gilloise" },
      { name: "Romano Schmid", position: "MEI", club: "Werder Bremen" },
    ],
    highlight: {
      name: "David Alaba",
      role: "Capitão / Zagueiro",
      reason: "Vencedor da Champions com Bayern e Real Madrid. Aos 33 anos, primeira Copa em 28 anos pode ser sua única.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 28 anos)",
      note: "Rangnick reconstruiu a Áustria. Volta histórica às Copas com geração liderada por Alaba.",
    },
  },

  tur: {
    coach: { name: "Vincenzo Montella", nationality: "Italiano", since: "2023" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Mert Günok", position: "GOL", club: "Beşiktaş" },
      { name: "Zeki Çelik", position: "DEF", club: "Roma" },
      { name: "Merih Demiral", position: "DEF", club: "Al-Ahli" },
      { name: "Çağlar Söyüncü", position: "DEF", club: "Fenerbahçe" },
      { name: "Ferdi Kadıoğlu", position: "DEF", club: "Brighton" },
      { name: "Hakan Çalhanoğlu", position: "MEI", club: "Inter de Milão" },
      { name: "İsmail Yüksek", position: "MEI", club: "Fenerbahçe" },
      { name: "Arda Güler", position: "MEI", club: "Real Madrid" },
      { name: "Kerem Aktürkoğlu", position: "ATA", club: "Benfica" },
      { name: "Kenan Yıldız", position: "ATA", club: "Juventus" },
      { name: "Barış Alper Yılmaz", position: "ATA", club: "Galatasaray" },
    ],
    reserves: [
      { name: "Uğurcan Çakır", position: "GOL", club: "Galatasaray" },
      { name: "Salih Özcan", position: "MEI", club: "Borussia Dortmund" },
    ],
    highlight: {
      name: "Arda Güler",
      role: "Meia ofensivo",
      reason: "Joia do Real Madrid aos 21 anos. Comparado a Mesut Özil em técnica e visão. Maior promessa turca em décadas.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 24 anos)",
      note: "Montella renovou o futebol turco. Combinação Calhanoğlu/Güler é o cérebro do meio.",
    },
  },

  civ: {
    coach: { name: "Émerse Faé", nationality: "Marfinense", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Yahia Fofana", position: "GOL", club: "Angers" },
      { name: "Wilfried Singo", position: "DEF", club: "AS Monaco" },
      { name: "Evan Ndicka", position: "DEF", club: "Roma" },
      { name: "Willy Boly", position: "DEF", club: "Nottingham Forest" },
      { name: "Ghislain Konan", position: "DEF", club: "Reims" },
      { name: "Franck Kessié", position: "MEI", club: "Al-Ahli" },
      { name: "Ibrahim Sangaré", position: "MEI", club: "Nottingham Forest" },
      { name: "Seko Fofana", position: "MEI", club: "Al-Nassr" },
      { name: "Nicolas Pépé", position: "ATA", club: "Villarreal" },
      { name: "Sébastien Haller", position: "ATA", club: "Galatasaray" },
      { name: "Simon Adingra", position: "ATA", club: "Brighton" },
    ],
    reserves: [
      { name: "Badra Sangaré", position: "GOL", club: "Asec Mimosas" },
      { name: "Christian Kouamé", position: "ATA", club: "Empoli" },
      { name: "Karim Konaté", position: "ATA", club: "RB Salzburg" },
    ],
    highlight: {
      name: "Sébastien Haller",
      role: "Centroavante",
      reason: "Sobrevivente de câncer testicular em 2022. Marcou o gol do título da Copa Africana 2024 em casa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Faé (campeão africano em 2024) reformulou a seleção pós-Copa Africana. Adingra é a maior promessa.",
    },
  },

  tun: {
    coach: { name: "Sami Trabelsi", nationality: "Tunisiano", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Aymen Dahmen", position: "GOL", club: "CS Sfaxien" },
      { name: "Mortadha Ben Ouanes", position: "DEF", club: "USM Alger" },
      { name: "Yassine Meriah", position: "DEF", club: "Espérance Tunis" },
      { name: "Dylan Bronn", position: "DEF", club: "Salernitana" },
      { name: "Ali Maâloul", position: "DEF", club: "Al-Ahly" },
      { name: "Ellyes Skhiri", position: "MEI", club: "Eintracht Frankfurt" },
      { name: "Aïssa Laïdouni", position: "MEI", club: "Union Berlin" },
      { name: "Hannibal Mejbri", position: "MEI", club: "Burnley" },
      { name: "Wahbi Khazri", position: "ATA", club: "Bandirmaspor" },
      { name: "Issam Jebali", position: "ATA", club: "OB" },
      { name: "Anis Ben Slimane", position: "ATA", club: "Sheffield United" },
    ],
    reserves: [
      { name: "Mouez Hassen", position: "GOL", club: "Reims" },
      { name: "Naïm Sliti", position: "ATA", club: "Al-Ettifaq" },
    ],
    highlight: {
      name: "Hannibal Mejbri",
      role: "Meia ofensivo",
      reason: "Joia do Manchester United emprestada para Burnley. Capitão mais jovem da história tunisina aos 22 anos.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Trabelsi assumiu em 2024 com missão de finalmente passar da fase de grupos. Mejbri é o futuro.",
    },
  },

  nor: {
    coach: { name: "Ståle Solbakken", nationality: "Norueguês", since: "2020" },
    formation: "4-3-3",
    startingXI: [
      { name: "Ørjan Nyland", position: "GOL", club: "Sevilla" },
      { name: "Julian Ryerson", position: "DEF", club: "Borussia Dortmund" },
      { name: "Kristoffer Ajer", position: "DEF", club: "Brentford" },
      { name: "Leo Østigård", position: "DEF", club: "Stade Rennais" },
      { name: "Birger Meling", position: "DEF", club: "Stade Rennais" },
      { name: "Sander Berge", position: "MEI", club: "Fulham" },
      { name: "Patrick Berg", position: "MEI", club: "Bodø/Glimt" },
      { name: "Martin Ødegaard", position: "MEI", club: "Arsenal" },
      { name: "Antonio Nusa", position: "ATA", club: "RB Leipzig" },
      { name: "Erling Haaland", position: "ATA", club: "Manchester City" },
      { name: "Alexander Sørloth", position: "ATA", club: "Atlético de Madrid" },
    ],
    reserves: [
      { name: "Egil Selvik", position: "GOL", club: "Sarpsborg" },
      { name: "Oscar Bobb", position: "ATA", club: "Manchester City" },
    ],
    highlight: {
      name: "Erling Haaland",
      role: "Centroavante",
      reason: "Maior artilheiro da Premier League em uma temporada (36 gols). Recordista da Champions. Estreia em Copas em 2026.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 28 anos)",
      note: "Geração mais talentosa da história. Ødegaard capitão do Arsenal e da seleção. Volta histórica.",
    },
  },

  pan: {
    coach: { name: "Thomas Christiansen", nationality: "Espanhol", since: "2020" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Orlando Mosquera", position: "GOL", club: "Águilas Doradas" },
      { name: "Michael Amir Murillo", position: "DEF", club: "Marseille" },
      { name: "Andrés Andrade", position: "DEF", club: "Atlético Nacional" },
      { name: "César Blackman", position: "DEF", club: "Dynamo Kyiv" },
      { name: "Eric Davis", position: "DEF", club: "Universitario" },
      { name: "Aníbal Godoy", position: "MEI", club: "Nashville SC" },
      { name: "Yoel Bárcenas", position: "MEI", club: "Real Oviedo" },
      { name: "Édgar Bárcenas", position: "MEI", club: "Mazatlán" },
      { name: "Adalberto Carrasquilla", position: "MEI", club: "Pumas" },
      { name: "Ismael Díaz", position: "ATA", club: "León" },
      { name: "Cecilio Waterman", position: "ATA", club: "Coquimbo Unido" },
    ],
    reserves: [
      { name: "Iván Anderson", position: "GOL", club: "CAI" },
      { name: "Tony Taylor", position: "MEI", club: "FC Cincinnati" },
    ],
    highlight: {
      name: "Michael Amir Murillo",
      role: "Lateral-direito",
      reason: "Vencedor da Ligue 1 com Marseille em 2024. Maior estrela panamenha em ascensão na elite europeia.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Christiansen consolidado desde 2020. Murillo do Marseille é o salto de qualidade rumo às oitavas inéditas.",
    },
  },

  qat: {
    coach: { name: "Bartolomé Marquez", nationality: "Espanhol", since: "2025" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Saad Al Sheeb", position: "GOL", club: "Al-Sadd" },
      { name: "Pedro Miguel", position: "DEF", club: "Al-Sadd" },
      { name: "Boualem Khoukhi", position: "DEF", club: "Al-Arabi" },
      { name: "Bassam Al-Rawi", position: "DEF", club: "Al-Duhail" },
      { name: "Ismaeel Mohammad", position: "DEF", club: "Al-Duhail" },
      { name: "Karim Boudiaf", position: "MEI", club: "Al-Duhail" },
      { name: "Hassan Al-Haydos", position: "MEI", club: "Al-Sadd" },
      { name: "Abdulaziz Hatem", position: "MEI", club: "Al-Rayyan" },
      { name: "Akram Afif", position: "ATA", club: "Al-Sadd" },
      { name: "Almoez Ali", position: "ATA", club: "Al-Duhail" },
      { name: "Hamam Al-Mahdi", position: "ATA", club: "Al-Sadd" },
    ],
    reserves: [
      { name: "Meshaal Barsham", position: "GOL", club: "Al-Sadd" },
      { name: "Mohammed Muntari", position: "ATA", club: "Al-Wakrah" },
    ],
    highlight: {
      name: "Akram Afif",
      role: "Atacante / Capitão",
      reason: "Bola de Ouro Asiática 2023 e 2024 — primeiro catariano com a honra. Decisivo no bicampeonato asiático.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Bicampeão asiático (2019, 2023). Geração consagrada do Al-Sadd e Al-Duhail.",
    },
  },

  ksa: {
    coach: { name: "Hervé Renard", nationality: "Francês", since: "2025 (volta)" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Mohammed Al-Owais", position: "GOL", club: "Al-Hilal" },
      { name: "Saud Abdulhamid", position: "DEF", club: "Roma" },
      { name: "Hassan Tambakti", position: "DEF", club: "Al-Hilal" },
      { name: "Ali Al-Bulayhi", position: "DEF", club: "Al-Hilal" },
      { name: "Yasser Al-Shahrani", position: "DEF", club: "Al-Hilal" },
      { name: "Mohamed Kanno", position: "MEI", club: "Al-Ahli" },
      { name: "Salman Al-Faraj", position: "MEI", club: "Al-Hilal" },
      { name: "Nasser Al-Dawsari", position: "MEI", club: "Al-Hilal" },
      { name: "Salem Al-Dawsari", position: "ATA", club: "Al-Hilal" },
      { name: "Firas Al-Buraikan", position: "ATA", club: "Al-Ahli" },
      { name: "Saleh Al-Shehri", position: "ATA", club: "Al-Ittihad" },
    ],
    reserves: [
      { name: "Nawaf Al-Aqidi", position: "GOL", club: "Al-Nassr" },
      { name: "Abdullah Madu", position: "DEF", club: "Al-Hilal" },
    ],
    highlight: {
      name: "Salem Al-Dawsari",
      role: "Atacante (esquerda)",
      reason: "Marcou o gol da histórica vitória sobre a Argentina em 2022 (2×1). Símbolo do futebol saudita moderno.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Renard (técnico de 2022) voltou após passagem pela França feminina. Promessas de Al-Buraikan.",
    },
  },

  jor: {
    coach: { name: "Hussein Ammouta", nationality: "Marroquino", since: "2023" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Yazeed Abu Layla", position: "GOL", club: "Al-Wehdat" },
      { name: "Yazan Al-Arab", position: "DEF", club: "Al-Hussein" },
      { name: "Salem Al-Ajalin", position: "DEF", club: "Al-Wehdat" },
      { name: "Bahaa Al-Najjar", position: "DEF", club: "Al-Faisaly" },
      { name: "Ehsan Haddad", position: "DEF", club: "Al-Wehdat" },
      { name: "Mohammad Abu Hashish", position: "MEI", club: "Apollon" },
      { name: "Noor Al-Rawabdeh", position: "MEI", club: "Al-Wehdat" },
      { name: "Yazan Al-Naimat", position: "MEI", club: "Al-Wehdat" },
      { name: "Mahmoud Al-Mardi", position: "ATA", club: "Al-Faisaly" },
      { name: "Ali Olwan", position: "ATA", club: "Al-Salmiya" },
      { name: "Mousa Al-Tamari", position: "ATA", club: "Brest" },
    ],
    reserves: [
      { name: "Belal Al-Hafez", position: "GOL", club: "Al-Faisaly" },
      { name: "Anas Al-Awadat", position: "MEI", club: "Al-Hussein" },
    ],
    highlight: {
      name: "Mousa Al-Tamari",
      role: "Atacante (direita)",
      reason: "Maior estrela da Jordânia. Atacante do Brest na Ligue 1. Decisivo no vice da Copa Asiática 2023.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (estreia em Copa)",
      note: "Ammouta (marroquino) montou a seleção do vice asiático 2023. Estreia histórica em 2026.",
    },
  },

  rsa: {
    coach: { name: "Hugo Broos", nationality: "Belga", since: "2021" },
    formation: "3-4-3",
    startingXI: [
      { name: "Ronwen Williams", position: "GOL", club: "Mamelodi Sundowns" },
      { name: "Khuliso Mudau", position: "DEF", club: "Mamelodi Sundowns" },
      { name: "Aubrey Modiba", position: "DEF", club: "Mamelodi Sundowns" },
      { name: "Mothobi Mvala", position: "DEF", club: "Mamelodi Sundowns" },
      { name: "Sphephelo Sithole", position: "MEI", club: "Tondela" },
      { name: "Teboho Mokoena", position: "MEI", club: "Mamelodi Sundowns" },
      { name: "Mihlali Mayambela", position: "MEI", club: "Aris Limassol" },
      { name: "Themba Zwane", position: "MEI", club: "Mamelodi Sundowns" },
      { name: "Percy Tau", position: "ATA", club: "Qatar SC" },
      { name: "Lyle Foster", position: "ATA", club: "Burnley" },
      { name: "Mihlali Mayambela", position: "ATA", club: "Aris Limassol" },
    ],
    reserves: [
      { name: "Bongani Williams", position: "GOL", club: "Mamelodi Sundowns" },
      { name: "Bafana Bafana Shalulile", position: "ATA", club: "Mamelodi Sundowns" },
    ],
    highlight: {
      name: "Lyle Foster",
      role: "Centroavante",
      reason: "Atacante do Burnley na Premier League. Maior promessa sul-africana após anos sem expoentes globais.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Broos voltou às Copas após 16 anos. Time predominantemente do Mamelodi Sundowns (campeão sul-africano).",
    },
  },

  gha: {
    coach: { name: "Otto Addo", nationality: "Ganês", since: "2024 (volta)" },
    formation: "4-3-3",
    startingXI: [
      { name: "Lawrence Ati-Zigi", position: "GOL", club: "St. Gallen" },
      { name: "Tariq Lamptey", position: "DEF", club: "Brighton" },
      { name: "Mohammed Salisu", position: "DEF", club: "AS Monaco" },
      { name: "Daniel Amartey", position: "DEF", club: "Besiktaş" },
      { name: "Gideon Mensah", position: "DEF", club: "Auxerre" },
      { name: "Salis Abdul Samed", position: "MEI", club: "Lens" },
      { name: "Thomas Partey", position: "MEI", club: "Villarreal" },
      { name: "Mohammed Kudus", position: "MEI", club: "Tottenham" },
      { name: "Antoine Semenyo", position: "ATA", club: "Bournemouth" },
      { name: "Iñaki Williams", position: "ATA", club: "Athletic Bilbao" },
      { name: "Jordan Ayew", position: "ATA", club: "Crystal Palace" },
    ],
    reserves: [
      { name: "Joseph Wollacott", position: "GOL", club: "Charlton" },
      { name: "Ernest Nuamah", position: "ATA", club: "Olympique de Lyon" },
    ],
    highlight: {
      name: "Mohammed Kudus",
      role: "Meia ofensivo",
      reason: "Maior contratação ganesa da história (Tottenham 2025). Driblador único e estrela em ascensão mundial.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios",
      note: "Otto Addo voltou. Williams (nascido em Bilbao) e Kudus são as armas da nova geração.",
    },
  },

  cpv: {
    coach: { name: "Pedro 'Bubista' Brito Leão", nationality: "Cabo-verdiano", since: "2020" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Vozinha", position: "GOL", club: "Casa Pia" },
      { name: "Jeffry Fortes", position: "DEF", club: "Estoril" },
      { name: "Roberto Lopes", position: "DEF", club: "Shamrock Rovers" },
      { name: "Logan Costa", position: "DEF", club: "Toulouse" },
      { name: "Sténio Júnior", position: "DEF", club: "Famalicão" },
      { name: "Patrick Andrade", position: "MEI", club: "Famalicão" },
      { name: "Kevin Pina", position: "MEI", club: "Casa Pia" },
      { name: "Garry Rodrigues", position: "MEI", club: "AEK Atenas" },
      { name: "Bebe", position: "ATA", club: "Rayo Vallecano" },
      { name: "Heldon Ramos", position: "ATA", club: "Sporting Charleroi" },
      { name: "Ryan Mendes", position: "ATA", club: "Al-Wakrah" },
    ],
    reserves: [
      { name: "Stopira", position: "DEF", club: "Aves SAD" },
      { name: "Diney", position: "MEI", club: "Steaua Bucareste" },
    ],
    highlight: {
      name: "Logan Costa",
      role: "Zagueiro",
      reason: "Estrela em ascensão do Toulouse. Maior promessa cabo-verdiana de descendência francesa nascida na Europa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (estreia em Copa)",
      note: "Bubista é o técnico há 6 anos da estreia histórica. Time formado por descendentes na diáspora europeia.",
    },
  },

  hai: {
    coach: { name: "Sébastien Migné", nationality: "Francês", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Johnny Placide", position: "GOL", club: "FC Cincinnati" },
      { name: "Jean-Kévin Augustin", position: "DEF", club: "Quevilly-Rouen" },
      { name: "Carlens Arcus", position: "DEF", club: "Auxerre" },
      { name: "Garven Metusala", position: "DEF", club: "Crotone" },
      { name: "Ricardo Adé", position: "DEF", club: "Estoril" },
      { name: "Wilde-Donald Guerrier", position: "MEI", club: "Tigres" },
      { name: "Jeff Louis", position: "MEI", club: "Bromsgrove Sporting" },
      { name: "Steeven Saba", position: "MEI", club: "Belarus" },
      { name: "Frantzdy Pierrot", position: "ATA", club: "Mehlmann" },
      { name: "Duckens Nazon", position: "ATA", club: "Caen" },
      { name: "Derrick Etienne", position: "ATA", club: "FC Cincinnati" },
    ],
    reserves: [
      { name: "Josué Duverger", position: "GOL", club: "Sutton" },
      { name: "Mickael Cardona", position: "ATA", club: "Olympique Lyonnais" },
    ],
    highlight: {
      name: "Frantzdy Pierrot",
      role: "Centroavante",
      reason: "Atacante experiente da Bundesliga 2 e Ligue 2. Símbolo do futebol haitiano em meio à crise do país.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 52 anos)",
      note: "Time treina e joga em Cura çau e República Dominicana por causa da violência das gangues no Haiti.",
    },
  },

  nzl: {
    coach: { name: "Darren Bazeley", nationality: "Inglês", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Oliver Sail", position: "GOL", club: "Auckland FC" },
      { name: "Tyler Bindon", position: "DEF", club: "Reading" },
      { name: "Michael Boxall", position: "DEF", club: "Minnesota United" },
      { name: "Tommy Smith", position: "DEF", club: "Colorado Rapids" },
      { name: "Liberato Cacace", position: "DEF", club: "Empoli" },
      { name: "Joe Bell", position: "MEI", club: "Vancouver Whitecaps" },
      { name: "Marko Stamenić", position: "MEI", club: "Olympiakos" },
      { name: "Matthew Garbett", position: "MEI", club: "Cincinnati" },
      { name: "Sarpreet Singh", position: "ATA", club: "Hannover 96" },
      { name: "Chris Wood", position: "ATA", club: "Nottingham Forest" },
      { name: "Kosta Barbarouses", position: "ATA", club: "Sydney FC" },
    ],
    reserves: [
      { name: "Max Crocombe", position: "GOL", club: "Burton Albion" },
      { name: "Ben Old", position: "ATA", club: "St-Étienne" },
    ],
    highlight: {
      name: "Chris Wood",
      role: "Centroavante",
      reason: "Maior artilheiro da Premier League em 2024-25 com 20 gols pelo Nottingham Forest. Capitão e ícone neozelandês.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 16 anos)",
      note: "Bazeley assumiu em 2024. Wood em melhor forma da carreira. Volta histórica dos All Whites.",
    },
  },

  cur: {
    coach: { name: "Dick Advocaat", nationality: "Holandês", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Eloy Room", position: "GOL", club: "Columbus Crew" },
      { name: "Cuco Martina", position: "DEF", club: "ADO Den Haag" },
      { name: "Juriën Gaari", position: "DEF", club: "FC Eindhoven" },
      { name: "Roshon van Eijma", position: "DEF", club: "FC Twente" },
      { name: "Kerville Edmonds", position: "DEF", club: "ADO Den Haag" },
      { name: "Leandro Bacuna", position: "MEI", club: "Cardiff City" },
      { name: "Vurnon Anita", position: "MEI", club: "Aposentado" },
      { name: "Jürgen Locadia", position: "MEI", club: "Antalyaspor" },
      { name: "Tahith Chong", position: "ATA", club: "Sheffield United" },
      { name: "Daryl van Mieghem", position: "ATA", club: "Ural" },
      { name: "Liam Murray", position: "ATA", club: "Excelsior" },
    ],
    reserves: [
      { name: "Roel Janssen", position: "DEF", club: "VVV-Venlo" },
    ],
    highlight: {
      name: "Tahith Chong",
      role: "Atacante",
      reason: "Promessa do Manchester United. Capitão da geração que escreve história inédita aos 155 mil habitantes.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (estreia em Copa)",
      note: "Advocaat (técnico holandês) assumiu em 2024 para finalizar o sonho. Time todo de descendentes na Holanda.",
    },
  },

  cze: {
    coach: { name: "Ivan Hašek", nationality: "Tcheco", since: "2024" },
    formation: "4-3-3",
    startingXI: [
      { name: "Jindřich Staněk", position: "GOL", club: "Slavia Praha" },
      { name: "Tomáš Holeš", position: "DEF", club: "Slavia Praha" },
      { name: "Tomáš Vlček", position: "DEF", club: "Slavia Praha" },
      { name: "Robin Hranáč", position: "DEF", club: "1899 Hoffenheim" },
      { name: "Vladimír Coufal", position: "DEF", club: "West Ham" },
      { name: "Tomáš Souček", position: "MEI", club: "West Ham" },
      { name: "Lukáš Provod", position: "MEI", club: "Slavia Praha" },
      { name: "Pavel Bucha", position: "MEI", club: "Plzeň" },
      { name: "Adam Hložek", position: "ATA", club: "TSG Hoffenheim" },
      { name: "Patrik Schick", position: "ATA", club: "Bayer Leverkusen" },
      { name: "Mojmír Chytil", position: "ATA", club: "Slavia Praha" },
    ],
    reserves: [
      { name: "Tomáš Vaclík", position: "GOL", club: "Inverness" },
      { name: "David Doudera", position: "DEF", club: "Slavia Praha" },
    ],
    highlight: {
      name: "Patrik Schick",
      role: "Centroavante",
      reason: "Vencedor da Bundesliga invicta com Bayer Leverkusen 2024. Marcou 5 gols na Eurocopa 2020.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 20 anos)",
      note: "Hašek substituiu Šilhavý em 2024. Geração liderada por Schick e Souček busca repetir 2006.",
    },
  },

  bih: {
    coach: { name: "Sergej Barbarez", nationality: "Bósnio", since: "2024" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Nikola Vasilj", position: "GOL", club: "Hammarby" },
      { name: "Dennis Hadžikadunić", position: "DEF", club: "Karagümrük" },
      { name: "Sead Kolašinac", position: "DEF", club: "Atalanta" },
      { name: "Adrian Leon Barišić", position: "DEF", club: "Karagümrük" },
      { name: "Branimir Cipetić", position: "DEF", club: "Plzeň" },
      { name: "Edin Bahtić", position: "MEI", club: "Eintracht Frankfurt" },
      { name: "Ermedin Demirović", position: "MEI", club: "VfB Stuttgart" },
      { name: "Edin Vișca", position: "MEI", club: "Trabzonspor" },
      { name: "Smail Prevljak", position: "ATA", club: "Antwerp" },
      { name: "Edin Džeko", position: "ATA", club: "Fenerbahçe" },
      { name: "Anel Ahmedhodžić", position: "ATA", club: "Sheffield United" },
    ],
    reserves: [
      { name: "Asmir Begović", position: "GOL", club: "Leicester City" },
      { name: "Miralem Pjanić", position: "MEI", club: "CSKA Moscow" },
    ],
    highlight: {
      name: "Edin Džeko",
      role: "Capitão / Centroavante",
      reason: "Aos 39 anos, ainda titular no Fenerbahçe. Maior artilheiro da história da Bósnia em sua possível última Copa.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 12 anos)",
      note: "Barbarez (jogador histórico) reformulou a seleção. Džeko ainda é o líder.",
    },
  },

  irq: {
    coach: { name: "Jesús Casas", nationality: "Espanhol", since: "2022" },
    formation: "4-2-3-1",
    startingXI: [
      { name: "Jalal Hassan", position: "GOL", club: "Al-Quwa Al-Jawiya" },
      { name: "Mustafa Nadhim", position: "DEF", club: "Al-Quwa" },
      { name: "Frans Putros", position: "DEF", club: "Al-Hudood" },
      { name: "Saad Natiq", position: "DEF", club: "Al-Talaba" },
      { name: "Manaf Younis", position: "DEF", club: "Al-Quwa Al-Jawiya" },
      { name: "Bashar Resan", position: "MEI", club: "Persepolis" },
      { name: "Alā' Mhawi", position: "MEI", club: "Al-Shorta" },
      { name: "Ibrahim Bayesh", position: "MEI", club: "Al-Mubeer" },
      { name: "Mohanad Ali", position: "ATA", club: "Al-Duhail" },
      { name: "Aymen Hussein", position: "ATA", club: "Al-Najma" },
      { name: "Mohammed Qasim", position: "ATA", club: "Al-Quwa Al-Jawiya" },
    ],
    reserves: [
      { name: "Fahad Talib", position: "GOL", club: "Al-Karkh" },
      { name: "Amir Al-Ammari", position: "MEI", club: "Halmstad" },
    ],
    highlight: {
      name: "Mohanad Ali",
      role: "Centroavante",
      reason: "Maior promessa do futebol iraquiano em décadas. Atacante consistente do Al-Duhail no Catar.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 40 anos)",
      note: "Casas (espanhol) consolidou a equipe. Volta histórica após décadas marcadas por guerra.",
    },
  },

  cod: {
    coach: { name: "Sébastien Desabre", nationality: "Francês", since: "2023" },
    formation: "4-3-3",
    startingXI: [
      { name: "Lionel Mpasi", position: "GOL", club: "Rodez AF" },
      { name: "Gédéon Kalulu", position: "DEF", club: "Lorient" },
      { name: "Chancel Mbemba", position: "DEF", club: "Olympique de Marselha" },
      { name: "Joris Kayembe", position: "DEF", club: "Servette" },
      { name: "Arthur Masuaku", position: "DEF", club: "Sunderland" },
      { name: "Samuel Moutoussamy", position: "MEI", club: "Nantes" },
      { name: "Gaël Kakuta", position: "MEI", club: "Amiens" },
      { name: "Théo Bongonda", position: "MEI", club: "Spartak Moscou" },
      { name: "Yannick Bolasie", position: "ATA", club: "Wycombe" },
      { name: "Cédric Bakambu", position: "ATA", club: "Real Betis" },
      { name: "Yoane Wissa", position: "ATA", club: "Brentford" },
    ],
    reserves: [
      { name: "Timothy Fayulu", position: "GOL", club: "FC Sion" },
      { name: "Meschack Elia", position: "ATA", club: "Young Boys" },
    ],
    highlight: {
      name: "Chancel Mbemba",
      role: "Capitão / Zagueiro",
      reason: "Capitão experiente do Marseille. Eleito melhor jogador da Copa Africana de Nações 2023 (3º lugar).",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (1ª Copa em 52 anos)",
      note: "Desabre voltou a treinar Leopards. Bolasie e Bakambu na possível despedida em Copa.",
    },
  },

  uzb: {
    coach: { name: "Timur Kapadze", nationality: "Uzbeque", since: "2025" },
    formation: "4-3-3",
    startingXI: [
      { name: "Utkir Yusupov", position: "GOL", club: "Pakhtakor" },
      { name: "Khojimat Erkinov", position: "DEF", club: "Nasaf" },
      { name: "Husniddin Alikulov", position: "DEF", club: "Pakhtakor" },
      { name: "Sherzod Azamov", position: "DEF", club: "AGMK" },
      { name: "Akhror Aliqulov", position: "DEF", club: "Pakhtakor" },
      { name: "Otabek Shukurov", position: "MEI", club: "Sepahan" },
      { name: "Jasur Yakhshiboev", position: "MEI", club: "Dynamo Kyiv" },
      { name: "Jaloliddin Masharipov", position: "MEI", club: "Adana Demirspor" },
      { name: "Sardor Mirzaev", position: "ATA", club: "Pakhtakor" },
      { name: "Eldor Shomurodov", position: "ATA", club: "Roma" },
      { name: "Abbosbek Fayzullaev", position: "ATA", club: "CSKA Moscow" },
    ],
    reserves: [
      { name: "Igor Sergeev", position: "ATA", club: "Pakhtakor" },
      { name: "Khusayin Norchaev", position: "ATA", club: "AGMK" },
    ],
    highlight: {
      name: "Eldor Shomurodov",
      role: "Centroavante",
      reason: "Atacante da Roma na Itália. Maior estrela do futebol uzbeque na elite europeia.",
    },
    lastCallup: {
      period: "Março 2026",
      context: "Amistosos preparatórios (estreia em Copa)",
      note: "Kapadze assumiu em 2025 para a estreia histórica. Shomurodov e Fayzullaev são as armas.",
    },
  },
};

export const getTeamSquad = (id: string): CurrentSquad | undefined => teamSquads[id];
