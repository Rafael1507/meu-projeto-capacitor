<script>
  import { createEventDispatcher } from 'svelte';
  export let pergunta;
  const dispatch = createEventDispatcher();

  function escolher(idx) {
    const certo = idx === pergunta.correta;
    dispatch('answer', certo);
  }
</script>

<div class="card mx-auto" style="max-width: 500px;">
  <div class="card-body">
    <h5 class="card-title">{pergunta.texto}</h5>
    {#each pergunta.opcoes as opt, i}
      <button class="btn btn-outline-primary w-100 my-1" on:click={() => escolher(i)}>
        {opt}
      </button>
    {/each}
  </div>
</div>
