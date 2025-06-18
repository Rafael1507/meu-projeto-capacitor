<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { dicionario, palavras, getRandomWord } from '$lib/dicio/data.js';
  
    let termoBusca = '';
    let prefixo = '';
    let destaque = '';
    let listaFiltrada = [];
  
    onMount(() => {
      destaque = getRandomWord();
      aplicarFiltro();
    });
  
    function aplicarFiltro() {
      listaFiltrada = palavras.filter((palavra) =>
        palavra.startsWith(prefixo.toLowerCase())
      );
    }
  
    function procurarPalavra() {
      if (termoBusca.toLowerCase() in dicionario) {
        goto(`/dicionario/${termoBusca.toLowerCase()}`);
      }
    }
  
    function navegarPara(palavra) {
      goto(`/dicionario/${palavra}`);
    }
  </script>
  
  <style global>
    /* Plano de fundo escuro e fonte clara */
    body {
      background-color: #121212;
      color: #f8f9fa;
      font-family: 'Segoe UI', Roboto, sans-serif;
    }
    a {
      text-decoration: none;
    }
    /* Scrollbar customizada */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #444;
      border-radius: 4px;
    }
  </style>
  
  <div class="container py-5">
    <div class="text-center mb-4">
      <h1 class="display-4 fst-italic text-white">Dicionário</h1>
    </div>
  
    <div class="card bg-dark text-white shadow-sm mb-4">
      <div class="card-body text-center">
        <h5 class="card-title mb-3">Palavra em Destaque</h5>
        <button
          class="btn btn-outline-info"
          on:click={() => navegarPara(destaque)}
        >
          {destaque}
        </button>
      </div>
    </div>
  
    <div class="row g-3 mb-4">
      <div class="col-md-5">
        <input
          type="text"
          class="form-control"
          placeholder="Digite uma palavra..."
          bind:value={termoBusca}
        />
      </div>
      <div class="col-md-2 d-grid">
        <button class="btn btn-primary" on:click={procurarPalavra}>
          Buscar
        </button>
      </div>
      <div class="col-md-5">
        <input
          type="text"
          class="form-control"
          placeholder="Filtrar prefixo..."
          bind:value={prefixo}
          on:input={aplicarFiltro}
        />
      </div>
    </div>
  
    <div class="card bg-dark text-white shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Resultados ({listaFiltrada.length})</h5>
        {#if listaFiltrada.length > 0}
          <ul class="list-group list-group-flush">
            {#each listaFiltrada as item}
              <li class="list-group-item list-group-item-dark">
                <a
                  class="text-info"
                  on:click={() => navegarPara(item)}
                  >{item}</a
                >
              </li>
            {/each}
          </ul>
        {:else}
          <p class="text-muted">Nenhuma palavra encontrada.</p>
        {/if}
      </div>
    </div>
  </div>
  