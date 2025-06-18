<script>
  let inputValue = '';
  let result = null;
  let fromUnit = 'metros';
  let toUnit = 'centímetros';

  const units = ['metros', 'centímetros', 'polegadas', 'pés'];
  const pmetro = {
    'metros': 1,
    'centímetros': 0.01,
    'polegadas': 0.0254,
    'pés': 0.3048
  };
  const dmetro = {
    'metros': 1,
    'centímetros': 100,
    'polegadas': 39.3701,
    'pés': 3.28084
  };

  function convertLength() {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      result = null;
      return;
    }
    const valueInMeters = value * pmetro[fromUnit];
    const convertedValue = valueInMeters * dmetro[toUnit];
    result = convertedValue;
  }
</script>

<main class="container">
  <div class="wallpaper"></div>

  <header>
    <h1>Conversor de Comprimento</h1>
    <p>Escolha as unidades e insira o valor:</p>
  </header>

  <section class="converter">
    <input type="number" bind:value={inputValue} placeholder="Digite o valor" />

    <div class="select-group">
      <label>
        De:
        <select bind:value={fromUnit}>
          {#each units as unit}
            <option value={unit}>{unit}</option>
          {/each}
        </select>
      </label>
      <label>
        Para:
        <select bind:value={toUnit}>
          {#each units as unit}
            <option value={unit}>{unit}</option>
          {/each}
        </select>
      </label>
    </div>

    <button on:click={convertLength}>Converter</button>
  </section>

  {#if result !== null}
    <section class="result">
      <h2>Resultado:</h2>
      <p>{inputValue} {fromUnit} equivalem a {result.toFixed(4)} {toUnit}</p>
    </section>
  {/if}

  <nav class="nav-buttons">
    <a class="btn" href="/">Voltar ao Início</a>
  </nav>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
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
    color: #333;
  }
  header p {
    font-size: 1.1em;
    color: #555;
  }
  .converter {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    padding: 10px;
    font-size: 1em;
    margin-bottom: 10px;
    width: 100%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .select-group {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  label {
    font-size: 0.9em;
    color: #333;
  }
  select {
    padding: 5px;
    margin-left: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #6200ea;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #3700b3;
  }
  .result {
    text-align: center;
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 20px;
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

