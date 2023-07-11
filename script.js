import { Fireworks } from './node_modules/fireworks-js/dist/index.es.js';

const emojis = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
  "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
  "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
  "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥",
  "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮",
  "🤡", "👹", "👺", "💩", "👻", "💀", "👽", "👾", "🤖", "🎃",
  "👑", "👒", "🎩", "🎓", "🧢", "⛑️", "💄", "💍", "💼", "🌂",
  "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
  "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊",
  "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉",
  "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞"
];

const generateBtn = document.getElementById("colorGenerateBtn");
const emoji = document.querySelector(".emoji");

generateBtn.addEventListener("click", () => {
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
});

const copyEmojiBtn = document.getElementById('copyEmojiBtn');

copyEmojiBtn.addEventListener('click', async () => {
  const emojiText = emoji.textContent.trim();

  try {
    await navigator.clipboard.writeText(emojiText);
    alert('Emoji Copiado Com Sucesso!');
  } catch (error) {
    alert('Erro ao copiar o emoji.');
  }
});

// Aguarde o carregamento completo da página
window.addEventListener('load', () => {
  // Selecione o elemento canvas
  const canvas = document.getElementById('my-canvas');

  // Inicialize a biblioteca de fogos de artifício
  const fireworksInstance = new Fireworks(canvas);

  // Defina as configurações dos fogos de artifício
  const fireworksOptions = {
    explosionMinHeight: 0.1 * window.innerHeight, // Adjust the value as needed
    explosionMaxHeight: 200 * window.innerHeight // Adjust the value as needed
  };

  // Inicie a animação dos fogos de artifício
  fireworksInstance.start(fireworksOptions);
});
