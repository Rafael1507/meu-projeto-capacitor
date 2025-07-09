<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Cor Aleatória</title>
  <style>
    body { text-align: center; font-family: sans-serif; padding: 2rem; }
    #box { width: 200px; height: 200px; margin: 1rem auto; border: 1px solid #ccc; }
  </style>
</head>
<body>
  <h1>Seletor de Cor Aleatória</h1>
  <div id="box"></div>
  <button id="btnCor">Mudar Cor</button>
  <p>Código: <span id="codigo"></span></p>

  <script>
    function corAleatoria() {
      const hex = '0123456789ABCDEF';
      let cor = '#';
      for (let i = 0; i < 6; i++) {
        cor += hex.charAt(Math.floor(Math.random() * 16));
      }
      return cor;
    }

    const box = document.getElementById('box');
    const codigo = document.getElementById('codigo');
    document.getElementById('btnCor').onclick = () => {
      const c = corAleatoria();
      box.style.backgroundColor = c;
      codigo.textContent = c;
    };
  </script>
</body>
</html>
