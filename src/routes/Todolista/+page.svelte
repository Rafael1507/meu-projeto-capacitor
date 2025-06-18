<script>
  import { onMount } from 'svelte';
  import Modal from '$lib/components/Modal.svelte';
  import ToDoList from '$lib/components/ToDoList.svelte';

  let novaTarefa = '';
  let tarefas = [];
  let conteudoTarefaEditando = '';
  let tarefaEditando;
  let tarefaExcluindo;
  let mensagemToast;

  let filtro = 'todas';
  let busca = '';

  onMount(async () => {
    const { Toast: BootstrapToast } = await import('bootstrap/js/dist/toast');
    const toastEl = document.getElementById('mensagemToast');
    if (toastEl) mensagemToast = new BootstrapToast(toastEl);
  });

  function adicionarTarefa(event) {
    event.preventDefault();
    const conteudo = novaTarefa.trim();
    if (!conteudo) {
      mensagemToast?.show();
      return;
    }
    tarefas = [...tarefas, { id: Date.now(), conteudo, status: 0 }];
    novaTarefa = '';
  }

  function editarTarefa(tarefa) {
    tarefaEditando = tarefa;
    conteudoTarefaEditando = tarefa.conteudo;
  }

  function confirmarEdicao() {
    const novoConteudo = conteudoTarefaEditando.trim();
    if (!novoConteudo) return mensagemToast?.show();
    tarefaEditando.conteudo = novoConteudo;
    cancelarEdicao();
  }

  function cancelarEdicao() {
    tarefaEditando = undefined;
    conteudoTarefaEditando = '';
  }

  function alterarStatus(tarefa, status) {
    tarefa.status = status;
    tarefas = [...tarefas];
  }

  function excluirTarefa(tarefa) {
    tarefaExcluindo = tarefa;
    import('bootstrap/js/dist/modal').then(({ default: ModalBootstrap }) => {
      new ModalBootstrap(document.getElementById('modalExcluir')).show();
    });
  }

  function confirmarExclusao() {
    tarefas = tarefas.filter(t => t !== tarefaExcluindo);
    tarefaExcluindo = undefined;
  }

  function marcarTodasComoConcluidas() {
    tarefas = tarefas.map(t => ({ ...t, status: 1 }));
  }

  function marcarTodasComoPendentes() {
    tarefas = tarefas.map(t => ({ ...t, status: 0 }));
  }

  function tarefasFiltradas() {
    return tarefas
      .filter(t => filtro === 'todas' || (filtro === 'pendentes' ? t.status === 0 : t.status === 1))
      .filter(t => t.conteudo.toLowerCase().includes(busca.toLowerCase()));
  }

  $: totais = {
    total: tarefas.length,
    concluidas: tarefas.filter(t => t.status === 1).length,
    pendentes: tarefas.filter(t => t.status === 0).length
  };
</script>

<style>
  body {
    background: linear-gradient(to right, #f0f2f5, #e0eafc);
    font-family: 'Segoe UI', sans-serif;
  }
  .form-container {
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 12px;
    margin: 1rem auto;
    max-width: 700px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .todo-section {
    padding: 1rem;
    max-width: 700px;
    margin: auto;
  }
  .toast {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 1055;
  }
  .active {
    font-weight: bold;
  }
</style>

<div class="form-container">
  <form on:submit={adicionarTarefa} class="d-flex gap-2">
    <input class="form-control" placeholder="Nova tarefa" bind:value={novaTarefa} />
    <button type="submit" class="btn btn-primary"><i class="bi bi-plus-lg"></i></button>
  </form>
</div>

<div class="d-flex justify-content-between align-items-center p-2 gap-2 flex-wrap" style="max-width: 700px; margin: auto">
  <div class="btn-group mb-2">
    <button class="btn btn-outline-success" on:click={marcarTodasComoConcluidas}>Concluir todas</button>
    <button class="btn btn-outline-secondary" on:click={marcarTodasComoPendentes}>Marcar pendentes</button>
  </div>
  <div class="btn-group mb-2">
    <button class="btn btn-outline-primary" on:click={() => filtro = 'todas'} class:active={filtro==='todas'}>Todas</button>
    <button class="btn btn-outline-primary" on:click={() => filtro = 'pendentes'} class:active={filtro==='pendentes'}>Pendentes</button>
    <button class="btn btn-outline-primary" on:click={() => filtro = 'concluidas'} class:active={filtro==='concluidas'}>Concluídas</button>
  </div>
  <input type="search" class="form-control w-auto mb-2" placeholder="Buscar" bind:value={busca} style="max-width: 200px" />
</div>

<div class="text-center text-muted p-2">
  Total: {totais.total} | Pendentes: {totais.pendentes} | Concluídas: {totais.concluidas}
</div>

<div class="todo-section">
  <ToDoList
    tarefas={tarefasFiltradas()}
    tarefaEditando={tarefaEditando}
    conteudoTarefaEditando={conteudoTarefaEditando}
    on:editar={e => editarTarefa(e.detail)}
    on:confirmarEdicao={confirmarEdicao}
    on:cancelarEdicao={cancelarEdicao}
    on:alterarStatus={e => alterarStatus(e.detail.tarefa, e.detail.status)}
    on:excluir={e => excluirTarefa(e.detail)}
  />
</div>

<div id="mensagemToast" class="toast text-bg-warning" role="alert">
  <div class="toast-body">Digite algo!</div>
</div>

<Modal id="modalExcluir" msg="Deseja excluir?" acao={confirmarExclusao} />