<script>
  // Função tradicional
  function saudacao(nome) {
    return 'Olá, ' + nome + '!';
  }

  // Arrow function
  const dobro = numero => numero * 2;

  let nomeDigitado = '';
  let resultadoSaudacao = '';

  let numeroDigitado = '';
  let resultadoDobro = '';

  function testarSaudacao() {
    resultadoSaudacao = saudacao(nomeDigitado);
  }

  function testarDobro() {
    const numero = parseFloat(numeroDigitado);
    if (!isNaN(numero)) {
      resultadoDobro = dobro(numero);
    } else {
      resultadoDobro = 'Digite um número válido.';
    }
  }
</script>

<style>
  .exemplo {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    border: 1px solid #ccc;
  }
  input {
    max-width: 250px;
  }
</style>

<h1>Funções no JavaScript</h1>

<p><strong>Imagine que você quer fazer um bolo.</strong> Toda vez que fizer o bolo, você segue os mesmos passos: misturar, assar, servir.  
Em programação, quando você quer repetir uma tarefa com passos definidos, você cria uma <strong>função</strong>.</p>

<p>Funções são blocos de código que podem receber valores (chamados <strong>parâmetros</strong>) e devolver um resultado (chamado <strong>retorno</strong>).</p>

<hr />

<h2>Como escrever uma função</h2>

<h3>1. Função tradicional:</h3>
<pre><code>
function saudacao(nome) &#123;
  return 'Olá, ' + nome + '!';
&#125;
</code></pre>


<p>Essa função recebe um nome e devolve uma frase de saudação.  
<br><strong>Exemplo:</strong> se você chamar <code>saudacao('Lucas')</code>, o resultado será <code>Olá, Lucas!</code>.</p>

<div class="exemplo">
  <h4>Testar na prática:</h4>
  <input
    type="number"
    class="form-control mb-2"
    placeholder="Digite um número"
    bind:value={numeroDigitado}
  />
  <button class="btn btn-success" on:click={testarDobro}>
    Calcular dobro
  </button>

  {#if resultadoDobro !== ''}
    <p><strong>Resultado:</strong> {resultadoDobro}</p>
  {/if}
</div>

<hr />

<h3>2. Arrow Function (Função de seta):</h3>

<pre><code>const dobro = numero => numero * 2;</code></pre>

<p>Essa é uma forma mais curta de escrever funções.  
Aqui, a função recebe um número e retorna o dobro.</p>

<p><strong>Exemplo:</strong> Se você chamar <code>dobro(5)</code>, o resultado será <code>10</code>.</p>

<div class="exemplo">
  <h4>Testar na prática:</h4>
  <input type="number" class="form-control mb-2" placeholder="Digite um número" bind:value={numeroDigitado} />
  <button class="btn btn-success" on:click={testarDobro}>Calcular dobro</button>
  {#if resultadoDobro !== ''}
    <p><strong>Resultado:</strong> {resultadoDobro}</p>
  {/if}
</div>

<hr />

<h2>🧠 Recapitulando</h2>
<ul>
  <li>Funções evitam repetir código.</li>
  <li>Você pode criar uma função com <code>function</code> ou com <code>=></code> (arrow function).</li>
  <li>Funções podem receber valores e devolver um resultado.</li>
</ul>

<p><strong>Dica:</strong> Se você entender funções, já consegue criar lógicas poderosas e reutilizar código em qualquer projeto.</p>
