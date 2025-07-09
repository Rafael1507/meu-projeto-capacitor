<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Sort</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    input, button { margin: 0.5rem 0; }
  </style>
</head>
<body>
  <h1>Bubble Sort</h1>
  <label for="lista">Lista (números separados por vírgula):</label><br>
  <input id="lista" type="text" value="5,3,8,4,2"><br>
  <button id="btnOrdenar">Ordenar</button>
  <p>Resultado: <span id="resultado"></span></p>

  <script>
    function bubbleSort(arr) {
      let n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            // troca
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      return arr;
    }

    document.getElementById('btnOrdenar').onclick = () => {
      const texto = document.getElementById('lista').value;
      const arr = texto.split(',').map(x => Number(x.trim()));
      const ordenado = bubbleSort(arr);
      document.getElementById('resultado').textContent = ordenado.join(', ');
    };
  </script>
</body>
</html>
