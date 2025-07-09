<script>
  export let itens = [];
  export let onRemove;
  $: total = itens.reduce((sum, i) => sum + i.preco, 0);
</script>

<div class="mt-4">
  <h5>Meu Carrinho</h5>
  <ul class="list-group mb-2">
    {#each itens as it, i}
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {it.nome} — R$ {it.preco.toFixed(2)}
        <button class="btn btn-sm btn-danger" on:click={() => onRemove(i)}>✕</button>
      </li>
    {/each}
    {#if itens.length === 0}
      <li class="list-group-item text-center text-muted">Vazio</li>
    {/if}
  </ul>
  <div>
    <strong>Total:</strong> R$ {total.toFixed(2)}
  </div>
</div>
