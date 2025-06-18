<script>
  let visor = '0';
  let memoria = 0;

  function adicionar(valor) {
    if (visor === '0' || visor === 'Erro') {
      visor = valor;
    } else {
      visor += valor;
    }
  }

  function limpar() {
    visor = '0';
  }

  function limparEntrada() {
    visor = '0';
  }

  function apagar() {
    visor = visor.length > 1 ? visor.slice(0, -1) : '0';
  }

  function calcular() {
    try {
      visor = eval(visor.replace('×', '*').replace('÷', '/').replace(',', '.')).toString().replace('.', ',');
    } catch {
      visor = 'Erro';
    }
  }

  function quadrado() {
    try {
      visor = (Math.pow(parseFloat(visor.replace(',', '.')), 2)).toString().replace('.', ',');
    } catch {
      visor = 'Erro';
    }
  }

  function raiz() {
    try {
      visor = (Math.sqrt(parseFloat(visor.replace(',', '.')))).toString().replace('.', ',');
    } catch {
      visor = 'Erro';
    }
  }

  function inverso() {
    try {
      visor = (1 / parseFloat(visor.replace(',', '.'))).toString().replace('.', ',');
    } catch {
      visor = 'Erro';
    }
  }

  function trocarSinal() {
    try {
      visor = (parseFloat(visor.replace(',', '.')) * -1).toString().replace('.', ',');
    } catch {
      visor = 'Erro';
    }
  }

  function memLimpar() {
    memoria = 0;
  }

  function memRecuperar() {
    visor = memoria.toString().replace('.', ',');
  }

  function memGuardar() {
    memoria = parseFloat(visor.replace(',', '.'));
  }

  function memSomar() {
    memoria += parseFloat(visor.replace(',', '.'));
  }

  function memSubtrair() {
    memoria -= parseFloat(visor.replace(',', '.'));
  }
</script>

<style>
  .calculadora {
    width: 100%;
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 1rem;
    background: #f4f9fb;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
  }

  .visor {
    font-size: 2.5rem;
    text-align: right;
    padding: 1rem;
    background: #fff;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    overflow-x: auto;
  }

  .botoes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }

  button {
    font-size: 1.2rem;
    padding: 1.2rem;
    border: none;
    border-radius: 0.75rem;
    background: #e9f0f5;
    color: #123;
    transition: 0.2s;
    width: 100%;
    height: 100%;
  }

  button:active {
    background: #c2dbe7;
  }

  .operador {
    background: #dbe4ea;
    color: #007b8a;
    font-weight: bold;
  }

  .igual {
    background: #ff7f50;
    color: white;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    .calculadora {
      padding: 0.5rem;
    }

    .visor {
      font-size: 2rem;
      padding: 0.75rem;
    }

    button {
      font-size: 1rem;
      padding: 1rem;
    }
  }
</style>

<div class="calculadora">
  <div class="visor">{visor}</div>
  <div class="botoes">
    <button on:click={memLimpar}>MC</button>
    <button on:click={memRecuperar}>MR</button>
    <button on:click={memSomar}>M+</button>
    <button on:click={memSubtrair}>M−</button>

    <button on:click={memGuardar}>MS</button>
    <button on:click={limparEntrada}>CE</button>
    <button on:click={limpar}>C</button>
    <button on:click={apagar}>⌫</button>

    <button on:click={inverso}>1/x</button>
    <button on:click={quadrado}>x²</button>
    <button on:click={raiz}>√x</button>
    <button class="operador" on:click={() => adicionar('÷')}>÷</button>

    <button on:click={() => adicionar('7')}>7</button>
    <button on:click={() => adicionar('8')}>8</button>
    <button on:click={() => adicionar('9')}>9</button>
    <button class="operador" on:click={() => adicionar('×')}>×</button>

    <button on:click={() => adicionar('4')}>4</button>
    <button on:click={() => adicionar('5')}>5</button>
    <button on:click={() => adicionar('6')}>6</button>
    <button class="operador" on:click={() => adicionar('-')}>−</button>

    <button on:click={() => adicionar('1')}>1</button>
    <button on:click={() => adicionar('2')}>2</button>
    <button on:click={() => adicionar('3')}>3</button>
    <button class="operador" on:click={() => adicionar('+')}>+</button>

    <button on:click={trocarSinal}>±</button>
    <button on:click={() => adicionar('0')}>0</button>
    <button on:click={() => adicionar(',')}>,</button>
    <button class="igual" on:click={calcular}>=</button>
  </div>
</div>
