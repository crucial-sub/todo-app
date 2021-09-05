const quotes = [
    {
        quote: "우리가 실패에서 배우면, 실패는 성공이 된다.",
        author: "-말콤 포브스-",
    },
    {
        quote: "자기 신뢰는 성공의 첫 번째 비결이다.",
        author: "-랄프 왈도 에머슨-",
    },
    {
        quote: "증기, 전기 및 원자력보다 더 강력한 원동력이 있다: 바로 인간의 의지이다.",
        author: "-알버트 아인슈타인-",
    },
    {
        quote: "무엇보다도, 준비가 성공의 열쇠이다.",
        author: "-알렉산더 그레이엄 벨-",
    },
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "-월트 디즈니-",
    },
    {
        quote: "모든 성취의 시작점은 갈망이다.",
        author: "-나폴레온 힐-",
    },
    {
        quote: "당신이 정말로 뭔가를 원한다면 기다리지 마라. 견디지 못하는 법을 스스로에게 가르쳐라.",
        author: "-구르박쉬 차할-",
    },
    {
        quote: "항상 갈구하라. 바보짓을 두려워마라.",
        author: "-스티브 잡스-",
    },
    {
        quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
        author: "-크리스 그로서-",
    },
    {
        quote: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
        author: "-존 록펠러-",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;