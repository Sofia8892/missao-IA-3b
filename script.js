const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você percebe que há muito lixo espalhado no pátio da escola. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Ajudar a recolher o lixo e incentivar outras pessoas.",
                afirmacao: "Demonstrou preocupação com a preservação do ambiente escolar."
            },
            {
                texto: "Achar que isso é responsabilidade apenas da equipe de limpeza.",
                afirmacao: "Percebeu depois que todos podem colaborar para manter os espaços limpos."
            }
        ]
    },
    {
        enunciado: "Sua turma precisa desenvolver um projeto sobre economia de água. O que você sugere?",
        alternativas: [
            {
                texto: "Criar uma campanha de conscientização sobre o uso responsável da água.",
                afirmacao: "Contribuiu para que mais pessoas adotassem hábitos sustentáveis."
            },
            {
                texto: "Pesquisar formas de reaproveitar a água da chuva.",
                afirmacao: "Aprendeu novas maneiras de economizar água e compartilhar esse conhecimento."
            }
        ]
    },
    {
        enunciado: "Durante um passeio, você vê uma área verde sendo mal utilizada. Como reage?",
        alternativas: [
            {
                texto: "Conversa com outras pessoas sobre a importância da preservação.",
                afirmacao: "Incentivou atitudes conscientes em relação ao meio ambiente."
            },
            {
                texto: "Participa de ações de plantio de árvores e recuperação do local.",
                afirmacao: "Ajudou diretamente na melhoria dos espaços naturais."
            }
        ]
    },
    {
        enunciado: "Na hora de comprar um produto, qual opção você prefere?",
        alternativas: [
            {
                texto: "Produtos recicláveis ou reutilizáveis.",
                afirmacao: "Passou a consumir de forma mais consciente."
            },
            {
                texto: "Produtos com menor impacto ambiental na fabricação.",
                afirmacao: "Escolheu apoiar empresas comprometidas com a sustentabilidade."
            }
        ]
    },
    {
        enunciado: "Ao final do ano, sua escola promove uma feira de sustentabilidade. Como você participa?",
        alternativas: [
            {
                texto: "Apresenta um projeto sobre reciclagem.",
                afirmacao: "Inspirou outras pessoas a reciclar e reduzir o desperdício."
            },
            {
                texto: "Cria uma campanha para reduzir o uso de plástico.",
                afirmacao: "Contribuiu para diminuir o consumo de materiais descartáveis."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}