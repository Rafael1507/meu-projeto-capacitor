<script>        
  let pessoa = {
    nome: 'Rafael',
    saudacaoTradicional: function () {
      return 'Oi, eu sou ' + this.nome;
    },
    saudacaoArrow: () => {
      return 'Oi, eu sou ' + this.nome;
    }
  };

  let resultadoTradicional = '';
  let resultadoArrow = '';

  function testarSaudacoes() {
    resultadoTradicional = pessoa.saudacaoTradicional();
    resultadoArrow = pessoa.saudacaoArrow();
  }
</script>

<style>
  .exemplo {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 1.5rem 0;
  }
</style>

<h1>Diferença entre <code>function</code> e <code>=></code> (arrow function)</h1>

<p>Em JavaScript, existem duas formas principais de declarar funções: a função tradicional e a função de seta (arrow function).</p>

<hr />

<h2>🔧 Função tradicional</h2>
<p>Ela tem o seu próprio <code>this</code>, ou seja, ela sabe de onde foi chamada.</p>

<pre><code>
let pessoa = &#123;
  nome&#58; 'Rafael',
  saudacao&#58; function () &#123;
    return 'Oi, eu sou ' + this.nome;
  &#125;
&#125;;
</code></pre>   

<p>Essa função vai retornar corretamente <code>Oi, eu sou Rafael</code>.</p>

<hr />

<h2>⚠️ Arrow function</h2>
<p>Ela <strong>não</strong> tem seu próprio <code>this</code>. O <code>this</code> dela é o mesmo do lugar onde foi criada.</p>

<pre><code>
let pessoa = &#123;
  nome&#58; 'Rafael',
  saudacao&#58; function () &#123;
    return 'Oi, eu sou ' + this.nome;
  &#125;
&#125;;
</code></pre>


<p>Essa função provavelmente vai retornar <code>Oi, eu sou undefined</code> ou vazio, pois <code>this</code> não aponta para o objeto.</p>

<div class="exemplo">
  <p>Clique no botão abaixo para testar as duas versões de função:</p>

  <button class="btn btn-primary mb-2" on:click={testarSaudacoes}>Testar funções</button>

  {#if resultadoTradicional || resultadoArrow}
    <p><strong>Função tradicional:</strong> {resultadoTradicional}</p>
    <p><strong>Arrow function:</strong> {resultadoArrow}</p>
  {/if}
</div>

<hr />

<h2>Quando usar cada uma?</h2>
<ul>
  <li><strong>Use <code>function</code></strong> quando você precisa usar <code>this</code> corretamente (ex: objetos, classes).</li>
  <li><strong>Use <code>=></code></strong> para funções curtas, sem <code>this</code> (ex: <code>map</code>, <code>filter</code>, <code>forEach</code>).</li>
</ul>

<hr />

<h3>Resumo: Comparação</h3>
<table class="table table-bordered table-sm">
  <thead class="table-light">
    <tr>
      <th></th>
      <th><code>function</code></th>
      <th><code>=></code> (arrow)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Tem <code>this</code> próprio</strong></td>
      <td>Sim</td>
      <td>Não</td>
    </tr>
    <tr>
      <td><strong>Ideal para objetos</strong></td>
      <td>Sim</td>
      <td>Não</td>
    </tr>
    <tr>
      <td><strong>Sintaxe curta</strong></td>
      <td>Não</td>
      <td>Sim</td>
    </tr>
    <tr>
      <td><strong>Boa para callbacks</strong></td>
      <td>Sim</td>
      <td>Sim</td>
    </tr>
  </tbody>
</table>
