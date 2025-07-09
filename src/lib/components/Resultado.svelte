<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';
  const dispatch = createEventDispatcher();
  export let show = false;
  export let pontuacao = 0;
  export let total = 0;
  let bsModal;

  onMount(async () => {
    const { default: Modal } = await import('bootstrap/js/dist/modal');
    bsModal = new Modal(document.getElementById('quizResult'));
  });

  $: if (bsModal) {
    show ? bsModal.show() : bsModal.hide();
  }

  function restart() {
    dispatch('restart');
  }
</script>

<div class="modal fade" id="quizResult" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Resultado</h5>
        <button type="button" class="btn-close" on:click={() => bsModal.hide()} />
      </div>
      <div class="modal-body">
        Você acertou {pontuacao} de {total}.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" on:click={restart}>Reiniciar</button>
      </div>
    </div>
  </div>
</div>
