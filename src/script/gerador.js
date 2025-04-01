// Seleciona os elementos
const botao = document.querySelector(".generate-button");
const textoDoBotao = document.querySelector(".button-text"); // Seleciona o texto estilizado
const textarea = document.querySelector(".campo-texto-grande");
const qrCodeImg = document.querySelector(".qrcode");


// Estado inicial para controlar o alternar
let mostrandoQrCode = false;

// Adiciona o evento de clique ao botão
botao.addEventListener("click", function () {
  if (mostrandoQrCode) {
    // Oculta o QR Code e mostra o campo de digitação novamente
    qrCodeImg.style.display = "none";
    textarea.style.display = "block";


    // Altera o texto do botão para "Gerar agora"
    textoDoBotao.innerText = "GERAR AGORA";

    // Atualiza o estado
    mostrandoQrCode = false;
  } else {
    // Captura o valor do textarea
    const texto = textarea.value;

    if (texto.trim() === "") {
      alert("Por favor, digite algo para gerar o QR Code.");
      return;
    }

    // Monta a URL da API com o texto inserido
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(texto)}&size=200x200`;

    // Atualiza o atributo 'src' da imagem com a URL gerada
    qrCodeImg.src = apiUrl;

    // Faz o QR Code aparecer e oculta o campo de digitação
    qrCodeImg.style.display = "block";
    qrCodeImg.style.position = "relative";
    qrCodeImg.style.animation = "girar 0.5s linear";
    qrCodeImg.style.transition = "all 0.5s ease-in-out";
    textarea.style.display = "none";


    // Altera o texto do botão para "Gerar novamente"
    textoDoBotao.innerText = "GERAR NOVAMENTE";
    textarea.value = "";

    // Atualiza o estado
    mostrandoQrCode = true;
  }
});





