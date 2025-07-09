<script>
  // Objeto inicial
  let pessoa = {
    nome: "João",
    idade: 30,
    ativo: true
  };

  // Variável para mostrar resultado da edição
  let resultado = "";

  // Campos para edição
  let novoNome = pessoa.nome;
  let novaIdade = pessoa.idade;
  let novoAtivo = pessoa.ativo;

  // Adicionar propriedade nova
  let novaPropNome = "";
  let novaPropValor = "";

  function editarPropriedades() {
    pessoa.nome = novoNome;
    pessoa.idade = Number(novaIdade);
    pessoa.ativo = novoAtivo;
    resultado = "Objeto atualizado!";
  }

  function adicionarPropriedade() {
    if (!novaPropNome.trim()) {
      resultado = "Nome da propriedade não pode ser vazio.";
      return;
    }
    pessoa[novaPropNome.trim()] = novaPropValor;
    resultado = `Propriedade &quot;${novaPropNome.trim()}&quot; adicionada!`;
    novaPropNome = "";
    novaPropValor = "";
  }

  // Remover propriedade (exemplo)
  function removerPropriedade(prop) {
    delete pessoa[prop];
    resultado = `Propriedade &quot;${prop}&quot; removida!`;
  }

  // Função para listar propriedades do objeto
  function propriedades() {
    return Object.entries(pessoa);
  }
</script>

<style>
  .exemplo {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
  }
</style>

<h1>Objetos em JavaScript</h1>

<p>Um objeto é uma coleção de propriedades, onde cada propriedade tem uma chave (nome) e um valor.</p>

<h2>Objeto inicial:</h2>
<pre><code>
&#123;<br>
&nbsp;&nbsp;nome: &quot;João&quot;,<br>
&nbsp;&nbsp;idade: 30,<br>
&nbsp;&nbsp;ativo: true<br>
&#125;
</code></pre>

<hr />

<h3>Editar propriedades:</h3>
<div class="exemplo">
  <label>
    Nome:
    <input type="text" bind:value={novoNome} />
  </label>
  <br />
  <label>
    Idade:
    <input type="number" bind:value={novaIdade} />
  </label>
  <br />
  <label>
    Ativo:
    <input type="checkbox" bind:checked={novoAtivo} />
  </label>
  <br />
  <button class="btn btn-primary mt-2" on:click={editarPropriedades}>Atualizar objeto</button>
</div>

<hr />

<h3>Adicionar nova propriedade:</h3>
<div class="exemplo">
  <label>
    Nome da propriedade:
    <input type="text" bind:value={novaPropNome} placeholder="ex: email" />
  </label>
  <br />
  <label>
    Valor da propriedade:
    <input type="text" bind:value={novaPropValor} placeholder="ex: joao@email.com" />
  </label>
  <br />
  <button class="btn btn-success mt-2" on:click={adicionarPropriedade}>Adicionar propriedade</button>
</div>

<hr />

<h3>Propriedades atuais do objeto:</h3>
<table class="table table-bordered table-sm">
  <thead class="table-light">
    <tr>
      <th>Chave (propriedade)</th>
      <th>Valor</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    {#each propriedades() as [chave, valor]}
      <tr>
        <td>{chave}</td>
        <td>{valor}</td>
        <td>
          <button class="btn btn-danger btn-sm" on:click={() => removerPropriedade(chave)}>Remover</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<hr />

<h3>Como acessar propriedades:</h3>
<p>
  Você pode acessar propriedades usando <code>objeto.propriedade</code> ou <code>objeto[&quot;propriedade&quot;]</code>.
</p>

<pre><code>
console.log(pessoa.nome); // &quot;João&quot;
console.log(pessoa[&quot;idade&quot;]); // 30
</code></pre>

<hr />

<h3>Resumo rápido:</h3>
<ul>
  <li>Objetos são coleções de pares chave:valor.</li>
  <li>Você pode adicionar, editar e remover propriedades.</li>
  <li>Propriedades podem ter qualquer tipo de valor (string, número, boolean, função, outro objeto, etc.).</li>
</ul>
