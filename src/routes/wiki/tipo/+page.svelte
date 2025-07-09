<script>
  // Valores iniciais para os tipos
  let valorString = "Olá mundo";
  let valorNumber = 123;
  let valorBoolean = true;
  let valorNull = null;
  let valorUndefined;
  let valorObjeto = { nome: "João", idade: 30 };
  let valorArray = [1, 2, 3, 4];

  // Função para mostrar o tipo (corrigindo null)
  function tipoDe(valor) {
    if (valor === null) return "null";
    return typeof valor;
  }

  // Funções para alterar valores interativamente
  function mudarString(event) {
    valorString = event.target.value;
  }
  function mudarNumber(event) {
    valorNumber = Number(event.target.value);
  }
  function mudarBoolean() {
    valorBoolean = !valorBoolean;
  }
  function mudarNull() {
    valorNull = valorNull === null ? "Agora não é null" : null;
  }
  function mudarUndefined() {
    valorUndefined = valorUndefined === undefined ? "Agora definido" : undefined;
  }
  function mudarObjeto() {
    valorObjeto = {
      nome: valorObjeto.nome === "João" ? "Maria" : "João",
      idade: valorObjeto.idade === 30 ? 25 : 30,
    };
  }
  function mudarArray() {
    if (valorArray.length === 4) valorArray = [5, 6];
    else valorArray = [1, 2, 3, 4];
  }
</script>

<style>
  .exemplo {
    background: #f8f9fa;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 1rem 0;
  }
  input[type="text"],
  input[type="number"] {
    max-width: 300px;
  }
</style>

<h1>📚 Tipos de Dados em JavaScript (Interativo)</h1>

<hr />

<h2>1. String (texto)</h2>
<input type="text" bind:value={valorString} on:input={mudarString} />
<p>Valor: <code>{valorString}</code></p>
<p>Tipo: <code>{tipoDe(valorString)}</code></p>

<hr />

<h2>2. Number (número)</h2>
<input type="number" bind:value={valorNumber} on:input={mudarNumber} />
<p>Valor: <code>{valorNumber}</code></p>
<p>Tipo: <code>{tipoDe(valorNumber)}</code></p>

<hr />

<h2>3. Boolean (verdadeiro ou falso)</h2>
<button class="btn btn-secondary" on:click={mudarBoolean}>
  Mudar boolean (atualmente: {valorBoolean ? 'true' : 'false'})
</button>
<p>Tipo: <code>{tipoDe(valorBoolean)}</code></p>

<hr />

<h2>4. Null (ausência intencional de valor)</h2>
<button class="btn btn-warning" on:click={mudarNull}>
  Mudar null (atualmente: {valorNull === null ? 'null' : valorNull})
</button>
<p>Tipo: <code>{tipoDe(valorNull)}</code></p>

<hr />

<h2>5. Undefined (valor não definido)</h2>
<button class="btn btn-warning" on:click={mudarUndefined}>
  Mudar undefined (atualmente: {valorUndefined === undefined ? 'undefined' : valorUndefined})
</button>
<p>Tipo: <code>{tipoDe(valorUndefined)}</code></p>

<hr />

<h2>6. Object (objeto)</h2>
<button class="btn btn-info" on:click={mudarObjeto}>
  Mudar objeto (atualmente: {JSON.stringify(valorObjeto).replace(/[{]/g,'&#123;').replace(/[}]/g,'&#125;')})
</button>
<p>Tipo: <code>{tipoDe(valorObjeto)}</code></p>

<hr />

<h2>7. Array (lista de valores)</h2>
<button class="btn btn-info" on:click={mudarArray}>
  Mudar array (atualmente: [&#91;{valorArray.join(", ")}&#93;])
</button>
<p>Tipo: <code>{tipoDe(valorArray)}</code></p>
<p><em>É array? </em> {Array.isArray(valorArray) ? "Sim" : "Não"}</p>

<hr />

<h3>📌 Resumo</h3>
<table class="table table-bordered table-sm">
  <thead class="table-light">
    <tr>
      <th>Tipo</th>
      <th>Descrição</th>
      <th>Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>string</td><td>Texto</td><td>&quot;Olá&quot;, &quot;JavaScript&quot;</td></tr>
    <tr><td>number</td><td>Números (inteiros e decimais)</td><td>10, 3.14, -5</td></tr>
    <tr><td>boolean</td><td>Verdadeiro ou falso</td><td>true, false</td></tr>
    <tr><td>null</td><td>Valor intencionalmente vazio</td><td>null</td></tr>
    <tr><td>undefined</td><td>Valor não definido</td><td>undefined</td></tr>
    <tr><td>object</td><td>Objetos e arrays</td><td>&#123; nome: &quot;Ana&quot; &#125;, &#91;1,2,3&#93;</td></tr>
  </tbody>
</table>
