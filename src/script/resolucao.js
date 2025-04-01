function ajustarAltura() {
    document.querySelector('.start').style.height = `${window.innerHeight}px`;
  }
  
  ajustarAltura(); // Ajusta ao carregar a página
  window.addEventListener('resize', ajustarAltura); // Reajusta no redimensionamento
  