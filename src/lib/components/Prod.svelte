<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let produtos = [];
  function add(item) {
    dispatch('add', item);
  }
</script>

<div class="row row-cols-3 g-3">
  {#each produtos as p}
    <div class="col">
      <div class="card h-100">
        <img src={p.img} class="card-img-top" alt={p.nome} />
        <div class="card-body">
          <h6 class="card-title">{p.nome}</h6>
          <p class="card-text">R$ {p.preco.toFixed(2)}</p>
          <button class="btn btn-primary" on:click={() => add(p)}>Comprar</button>
        </div>
      </div>
    </div>
  {/each}
</div>