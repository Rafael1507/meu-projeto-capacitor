<script>
  // Lista original de objetos
  let itens = [
    { nome: 'Banana', preco: 3.5 },
    { nome: 'Maçã', preco: 4.2 },
    { nome: 'Laranja', preco: 2.8 },
    { nome: 'Abacaxi', preco: 5.0 }
  ];

  // Critério atual de ordenação e direção
  let criterio = 'nome'; // ou 'preco'
  let asc = true;        // true = ascendente, false = descendente

  // Lista ordenada reativa
  $: sortedItens = itens
    .slice() // clona para não mexer no original
    .sort((a, b) => {
      let x = a[criterio];
      let y = b[criterio];

      // se for string, compara ignorando maiúsculas
      if (typeof x === 'string') {
        x = x.toLowerCase();
        y = y.toLowerCase();
      }

      if (x < y) return asc ? -1 : 1;
      if (x > y) return asc ? 1 : -1;
      return 0;
    });
</script>

<div class="container py-4">
  <h1>Ordenar Lista de Itens</h1>

  <div class="row g-2 mb-3" style="max-width: 400px;">
    <div class="col">
      <label class="form-label" for="crit">Critério</label>
      <select id="crit" class="form-select" bind:value={criterio}>
        <option value="nome">Nome</option>
        <option value="preco">Preço</option>
      </select>
    </div>
    <div class="col-auto d-flex align-items-end">
      <button
        class="btn btn-outline-primary"
        on:click={() => asc = !asc}
      >
        {asc ? 'Ascendente' : 'Descendente'}
      </button>
    </div>
  </div>

  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Preço (R$)</th>
      </tr>
    </thead>
    <tbody>
      {#each sortedItens as item}
        <tr>
          <td>{item.nome}</td>
          <td>{item.preco.toFixed(2)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
