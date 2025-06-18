<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let tarefas = [];
  export let tarefaEditando;
  export let conteudoTarefaEditando;
</script>

<ul class="list-group">
  {#each tarefas as t (t.id)}
    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <div class="flex-fill">
        {#if tarefaEditando === t}
          <input class="form-control me-2 mb-2" bind:value={conteudoTarefaEditando} />
        {:else}
          <span class={t.status===1?'text-decoration-line-through text-muted':''}>{t.conteudo}</span>
        {/if}
      </div>
      <div class="d-flex gap-1">
        {#if tarefaEditando === t}
          <button class="btn btn-sm btn-success" on:click={() => dispatch('confirmarEdicao')}>OK</button>
          <button class="btn btn-sm btn-secondary" on:click={() => dispatch('cancelarEdicao')}>✕</button>
        {:else}
          <button class="btn btn-sm btn-warning" on:click={() => dispatch('editar', t)}><i class="bi bi-pencil"></i></button>
          <button class="btn btn-sm btn-info text-white" on:click={() => dispatch('alterarStatus', { tarefa: t, status: t.status?0:1 })}>
            {t.status ? '↺' : '✔'}
          </button>
        {/if}
      </div>
    </li>
  {/each}
</ul>