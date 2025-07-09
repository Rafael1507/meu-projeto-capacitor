<script>
  // Variáveis para controlar eventos
  let mensagem = "Clique no botão abaixo!";
  let contador = 0;

  function clicarBotao() {
    contador += 1;
    mensagem = `Você clicou ${contador} ${contador === 1 ? 'vez' : 'vezes'}.`;
  }

  function mudarInput(event) {
    mensagem = `Você digitou: "${event.target.value}"`;
  }

  function focarInput() {
    mensagem = "Campo de texto focado!";
  }

  function desfocarInput() {
    mensagem = "Campo de texto desfocado!";
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

<h1>Eventos em JavaScript</h1>

<p>Eventos são ações que acontecem na página, como cliques, digitação ou foco em campos. Podemos executar código quando esses eventos acontecem.</p>

<hr />

<h2>Exemplo 1: Evento de clique</h2>
<div class="exemplo">
  <button class="btn btn-primary" on:click={clicarBotao}>Clique em mim</button>
  <p>{mensagem}</p>
</div>

<hr />

<h2>Exemplo 2: Evento de digitação (input)</h2>
<div class="exemplo">
  <input type="text" placeholder="Digite algo" on:input={mudarInput} />
  <p>{mensagem}</p>
</div>

<hr />

<h2>Exemplo 3: Evento de foco e desfoco</h2>
<div class="exemplo">
  <input type="text" placeholder="Foque aqui" on:focus={focarInput} on:blur={desfocarInput} />
  <p>{mensagem}</p>
</div>

<hr />

<h3>Como funcionam os eventos</h3>
<p>
  Para reagir a um evento, adicionamos um atributo no elemento HTML com o nome do evento precedido por <code>on:</code>. Por exemplo:
</p>

<pre><code>
&lt;button on:click=&#123;minhaFuncao&#125;&gt;Clique&lt;/button&gt;
</code></pre>

<p>Quando o botão for clicado, a função <code>minhaFuncao</code> será chamada.</p>

<hr />

<h3>Resumo rápido:</h3>
<ul>
  <li><code>click</code>: Quando o usuário clica em um elemento.</li>
  <li><code>input</code>: Quando o conteúdo de um campo muda.</li>
  <li><code>focus</code>: Quando o elemento ganha foco.</li>
  <li><code>blur</code>: Quando o elemento perde foco.</li>
  <li>Você pode usar <code>on:evento</code> para escutar qualquer evento padrão do HTML ou eventos customizados.</li>
</ul>
