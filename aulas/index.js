// Modificação para permitir que o usuário digite o nome do herói
const prompt = require('prompt-sync')();

// Solicitação do nome do herói ao usuário
let nomeDoHeroi = prompt("Digite o nome do herói: ");
let experiencia = 0; // Substitua 0 pela quantidade de experiência do herói

// Restante do código permanece inalterado
// Inicialização da variável que armazenará o nível do herói
let nivel = "";

// Estrutura de decisão para classificar o nível do herói baseado na sua experiência
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else if (experiencia >= 10001) {
    nivel = "Radiante";
}

// Exibição da mensagem com o nível do herói
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);