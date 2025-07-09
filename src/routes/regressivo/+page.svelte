<script>
  let minutos = 0;
  let segundos = 30;
  let intervalId;

  function iniciar() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      if (segundos > 0) {
        segundos--;
      } else if (minutos > 0) {
        minutos--;
        segundos = 59;
      } else {
        clearInterval(intervalId);
        alert('Tempo esgotado');
      }
    }, 1000);
  }

  function parar() {
    clearInterval(intervalId);
  }
</script>

<div class="container py-4">
  <h1>Contador Regressivo</h1>
  <div class="input-group mb-3" style="max-width: 200px;">
    <input
      type="number"
      class="form-control"
      min="0"
      bind:value={minutos}
      placeholder="Minutos"
    />
    <input
      type="number"
      class="form-control"
      min="0"
      max="59"
      bind:value={segundos}
      placeholder="Segundos"
    />
  </div>
  <div class="mb-3">
    <span class="display-6">
      {String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')}
    </span>
  </div>
  <button class="btn btn-success me-2" on:click={iniciar}>Iniciar</button>
  <button class="btn btn-danger" on:click={parar}>Parar</button>
</div>
