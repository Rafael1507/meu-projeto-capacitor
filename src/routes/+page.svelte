<script>
</script>

<main class="container">
  <div class="wallpaper"></div>
  
  <header>
    <h1>Conversores de Unidades</h1>
    <p>Escolha a conversão desejada:</p>
  </header>
<center>
    <nav class="nav-buttons">
    <a class="btn" href="/area">Conversor de Área</a>
    <a class="btn" href="/comprimento">Conversor de Comprimento</a>
  </nav>

      <h1>WIKI</h1>
    <a class="btn" href="/wiki">Entrar para Wiki</a>
</center>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .wallpaper {
    width: 100%;
    height: 200px;
    background-image: url('https://via.placeholder.com/600x200');
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  header h1 {
    font-size: 2em;
    margin: 0;
    color: #333;
  }
  
  header p {
    font-size: 1.1em;
    color: #555;
  }
  
  .nav-buttons {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  
  .btn {
    display: block;
    padding: 15px;
    text-align: center;
    background-color: #6200ea;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    font-weight: bold;
  }
  
  .btn:hover {
    background-color: #3700b3;
  }
  
  @media (max-width: 600px) {
    header h1 {
      font-size: 1.8em;
    }
    .btn {
      padding: 12px;
    }
  }
</style>
