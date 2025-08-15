const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    "enunciado": "Você foi recrutado para uma missão perigosa a bordo de uma nave alienígena abandonada, a Xylos, para encontrar um artefato lendário que vale bilhões. A missão é arriscada, mas a recompensa resolveria seus problemas para sempre. Qual o seu primeiro pensamento?",
    "alternativas": [
        {
            "texto": "Você se sente apreensivo, mas aceita a oferta.",
            "afirmacao": "O magnata lhe fornece um traje de última geração e dados de navegação incompletos, confiando em suas habilidades para improvisar."
        }
        {
            "texto": "Você recusa imediatamente, achando a proposta muito perigosa, mas algo em sua vida o obriga a voltar atrás.",
            "afirmacao": "Você é procurado por credores e, sem saída, aceita a missão. Os agentes do magnata o levam à força para a nave, deixando claro que não é um pedido, é uma ordem."
        }
    ]
}
{
    "enunciado": "A bordo da nave Xylos, você encontra o painel de controle principal. As coordenadas para o núcleo da nave estão em uma linguagem alienígena desconhecida. Você precisa decifrá-las para avançar.",
    "alternativas": [
        {
            "texto": "Você utiliza um decifrador de linguagens universais do seu traje. A ferramenta traduz a maior parte, mas com alguns erros, sugerindo um caminho mais longo.",
            "afirmacao": "O decifrador, embora imperfeito, traça um caminho seguro, porém lento. Você evita armadilhas, mas gasta recursos e tempo."
        }
        {
            "texto": "Você estuda os símbolos e os compara com padrões de energia e astrofísica, usando seu conhecimento para encontrar uma lógica na linguagem alienígena.",
            "afirmacao": "Sua persistência em usar a lógica e o conhecimento científico o leva a uma tradução precisa. Você descobre um atalho, mas ele passa por áreas de risco."
        }
    ]
}
{
    "enunciado": "No caminho para o núcleo, você e a equipe encontram um registro de tripulação. A última entrada fala sobre um vírus alienígena que teria 'devorado' o sistema nervoso da tripulação original. O registro também aponta para um novo dispositivo de defesa que, se ativado, poderia protegê-los do vírus.",
    "alternativas": [
        {
            "texto": "Você defende que o vírus pode ser uma lenda e que o dispositivo de defesa pode ser apenas uma armadilha. A equipe deve seguir em frente sem desvios.",
            "afirmacao": "Você inspira a equipe a continuar. Sua convicção se mostra correta: o vírus era apenas um sistema de defesa antigo. Você chega ao núcleo com sucesso."
        }
        {
            "texto": "Você se preocupa com o destino da tripulação original e defende a ideia de desviar o caminho para ativar o dispositivo de defesa, garantindo a segurança de todos.",
            "afirmacao": "Sua preocupação com a segurança da equipe o leva a ativar o dispositivo, que na verdade libera uma onda de choque eletromagnética que desativa o Coração da Nebulosa. A missão falha, mas a equipe está a salvo."
        }
    ]
}
{
    "enunciado": "Finalmente, você chega à câmara do 'Coração'. A entrada está protegida por um campo de força que só pode ser desativado com uma sequência de códigos. Os códigos são um mistério para sua equipe.",
    "alternativas": [
        {
            "texto": "Você tira uma foto dos símbolos e a envia para o magnata. Ele, em tempo real, usa um supercomputador para decifrar os códigos e o envia para você.",
            "afirmacao": "O magnata decifra os códigos e você consegue desativar o campo de força. A equipe dele, no entanto, já está no local esperando para traí-lo."
        }
        {
            "texto": "Você insiste em analisar os padrões e as conexões do campo de força com o próprio 'Coração', usando seu conhecimento de engenharia para encontrar a solução.",
            "afirmacao": "A sua insistência em resolver o problema com o seu próprio conhecimento o faz perceber uma falha de energia. Você reativa um circuito e desliga o campo de força. A equipe do magnata é pega de surpresa."
        }
    ]
}
{
    "enunciado": "Você e a equipe conseguem chegar ao 'Coração da Nebulosa'. No entanto, o magnata revela suas intenções de ficar com o artefato para si e usa sua equipe para roubá-lo. O que você faz?",
    "alternativas": [
        {
            "texto": "Você se opõe ao magnata e luta, usando suas habilidades de engenharia para criar uma falha no sistema de defesa da nave para se proteger e tomar o artefato.",
            "afirmacao": "Você e a equipe vencem o magnata, mas ele aciona a autodestruição da nave. Vocês fogem, mas sem o Coração, e agora são procurados pela corporação do magnata. Sua vida nunca mais será a mesma."
        }
        {
            "texto": "Você tenta negociar com o magnata, oferecendo a ele o 'Coração da Nebulosa' em troca de sua parte na recompensa. Você percebe que o artefato é poderoso e perigoso.",
            "afirmacao": "Você aceita o acordo. O magnata vai embora com o 'Coração da Nebulosa', e você recebe sua recompensa. No entanto, o magnata acaba usando o artefato para criar uma arma destrutiva, e você se arrepende de ter participado de tudo isso."
        }
    ]
} 
    {
        enunciado: "Você e a equipe conseguem chegar ao tesouro, que é um baú cheio de moedas e artefatos. No entanto, o caçador de tumbas tenta roubar tudo. O que você faz?",
        alternativas: [
            {
                texto: "Você luta contra o caçador de tumbas e o vence, pegando todo o tesouro para você e sua equipe.",
                afirmacao: "Você e sua equipe saem do deserto com o tesouro, mas com a polícia na cola. O caçador de tumbas, antes de ser preso, consegue escapar e jura vingança. Você, agora, está com a sua vida em risco."
            }
            {
                texto: "Você tenta negociar com o caçador de tumbas, oferecendo uma parte do tesouro para ele ir embora e deixar o restante para você e sua equipe.",
                afirmacao: "O caçador de tumbas aceita a oferta, mas antes de ir embora, avisa que o baú é amaldiçoado. Vocês conseguem sair do deserto, mas a maldição traz má sorte para a vida de todos os envolvidos. "
            }
        ]
    }
]


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

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
