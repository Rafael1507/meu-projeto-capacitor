export const dicionario = {
    "abismo": "Profundidade grande e assustadora.",
    "abrigar": "Oferecer proteção ou refúgio.",
    "acender": "Dar início a uma chama ou luz.",
    "alecrim": "Erva aromática usada em temperos.",
    "anjo": "Ser espiritual protetor e mensageiro.",
    "areia": "Grãos soltos encontrados em praias e desertos.",
    "asas": "Membros que permitem o voo de aves e insetos.",
    "beijo": "Toque com os lábios como sinal de afeto.",
    "beleza": "Qualidade do que agrada aos sentidos.",
    "bravo": "Que demonstra coragem ou fúria.",
    "caminhar": "Mover-se a pé de um lugar a outro.",
    "canção": "Composição musical com letra.",
    "carinho": "Demonstração de afeto e cuidado.",
    "céu": "Espaço acima da Terra, onde estão o Sol e as estrelas.",
    "chuveiro": "Equipamento usado para banho.",
    "colar": "Acessório usado ao redor do pescoço.",
    "coruja": "Ave noturna de olhos grandes.",
    "destino": "Conjunto de acontecimentos futuros.",
    "doar": "Entregar algo a alguém por generosidade.",
    "ecoar": "Propagar-se por meio de ecos.",
    "encontro": "Ato de se reunir com alguém.",
    "esperar": "Aguardar algo com paciência.",
    "estrela": "Corpo celeste que brilha no céu.",
    "fada": "Ser mágico do folclore com poderes especiais.",
    "fiel": "Que demonstra lealdade.",
    "folha": "Parte verde da planta que realiza fotossíntese.",
    "fundo": "Parte mais baixa ou distante.",
    "galho": "Ramo que nasce do tronco ou caule.",
    "giz": "Material usado para escrever em quadros.",
    "gota": "Pequena porção de líquido.",
    "grito": "Som forte emitido com a voz.",
    "hora": "Unidade de tempo com 60 minutos.",
    "iluminar": "Fazer brilhar ou clarear.",
    "imaginar": "Criar imagens mentais de algo.",
    "inseto": "Animal pequeno com seis patas.",
    "janela": "Abertura na parede que deixa passar luz e ar.",
    "jasmim": "Flor perfumada de cor branca.",
    "leão": "Grande felino considerado rei da selva.",
    "livro": "Conjunto de páginas escritas ou impressas.",
    "lobo": "Mamífero carnívoro semelhante ao cachorro.",
    "luar": "Clareza produzida pela luz da lua.",
    "mágico": "Pessoa que realiza truques ou encantamentos.",
    "marfim": "Material branco tirado das presas do elefante.",
    "melodia": "Sequência agradável de sons musicais.",
    "montanha": "Elevação natural de grande altitude.",
    "névoa": "Conjunto de gotículas de água no ar.",
    "ninho": "Abrigo feito por aves para seus ovos.",
    "noite": "Período escuro do dia após o pôr do sol.",
    "olhar": "Ato de direcionar os olhos a algo.",
    "onda": "Movimento que se forma na superfície da água.",
    "orvalho": "Gotas de água que se formam nas plantas ao amanhecer.",
    "pássaro": "Animal com penas, geralmente voador.",
    "pintura": "Arte de representar com tintas.",
    "poesia": "Texto que expressa sentimentos com beleza.",
    "pote": "Recipiente usado para guardar líquidos ou sólidos.",
    "riso": "Expressão de alegria com o rosto.",
    "rio": "Curso natural de água doce.",
    "rosa": "Flor perfumada e ornamental.",
    "sombra": "Escuridão formada pela obstrução da luz.",
    "silêncio": "Ausência de som.",
    "sol": "Estrela que ilumina e aquece a Terra.",
    "som": "Vibração percebida pelos ouvidos.",
    "sonho": "Sequência de imagens mentais durante o sono.",
    "tempo": "Dimensão em que os eventos ocorrem.",
    "terno": "Roupa formal masculina ou afetuoso.",
    "toque": "Contato físico com algo ou alguém.",
    "vento": "Ar em movimento.",
    "verão": "Estação do ano mais quente.",
    "vida": "Estado de existência dos seres vivos.",
    "voz": "Som emitido pelas cordas vocais.",
  };
  
  export const palavras = Object.keys(dicionario).sort();
  
  export function getRandomWord() {
    const idx = Math.floor(Math.random() * palavras.length);
    return palavras[idx];
  }
  