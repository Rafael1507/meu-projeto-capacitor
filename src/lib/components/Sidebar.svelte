<script>
  import * as bootstrap from 'bootstrap';
  import { onMount } from 'svelte';
  onMount(() => {
    document.querySelectorAll('.close-offcanvas').forEach((e) => e.addEventListener('click', () => bootstrap.Offcanvas.getInstance(document.getElementById('mySideBar')).hide()));
  });
</script>

<div class="offcanvas offcanvas-start" tabindex="-1" id="mySideBar" style="max-width: 80%;">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas</h5>
    <button class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item"><a class="nav-link active close-offcanvas" href="/todolist">Lista de Tarefas</a></li>
      <li class="nav-item"><a class="nav-link active close-offcanvas" href="/senha">Gerador de Senhas</a></li>
      <li class="nav-item"><a class="nav-link active close-offcanvas" href="/calc">Calculadora</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item close-offcanvas" href="/">Action</a></li>
          <li><a class="dropdown-item close-offcanvas" href="/">Another action</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item close-offcanvas" href="/">Something else here</a></li>
        </ul>
      </li>
    </ul>
    <form class="d-flex mt-3" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>