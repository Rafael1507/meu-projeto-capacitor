<script>
  let tamanho = 12;
  let senha = '';

  function gerarSenha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let s = '';
    for (let i = 0; i < tamanho; i++) {
      s += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    senha = s;
  }
</script>

<div class="container py-4">
  <h1>Gerador de Senha</h1>
  <div class="mb-3">
    <label for="tamanho" class="form-label">Tamanho</label>
    <input
      id="tamanho"
      type="number"
      class="form-control"
      min="4"
      max="32"
      bind:value={tamanho}
    />
  </div>
  <button class="btn btn-primary mb-3" on:click={gerarSenha}>
    Gerar Senha
  </button>
  {#if senha}
    <div class="alert alert-secondary">
      <strong>Sua senha:</strong> <code>{senha}</code>
    </div>
  {/if}
</div>