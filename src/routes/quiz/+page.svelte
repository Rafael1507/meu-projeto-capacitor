<script>
  import { onMount } from 'svelte';
  import Question from '$lib/components/Questao.svelte';
  import ResultModal from '$lib/components/Resultado.svelte';

  let perguntas = [
    { id: 1, texto: '2+2 é ?', opcoes: ['3','4','5'], correta: 1 },
    { id: 2, texto: 'Capital do Brasil?', opcoes: ['Brasília','São Paulo','Rio'], correta: 0 },
    { id: 3, texto: 'JS é linguagem de ?','opcoes': ['Frontend','Banco','Hardware'], correta: 0 }
  ];
  let indice = 0;
  let pontuacao = 0;
  let showResult = false;

  function responder(correto) {
    if (correto) pontuacao++;
    if (indice < perguntas.length - 1) {
      indice++;
    } else {
      showResult = true;
    }
  }

  function reiniciar() {
    indice = 0;
    pontuacao = 0;
    showResult = false;
  }
</script>

<div class="container mt-4">
  <Question
    pergunta={perguntas[indice]}
    on:answer={e => responder(e.detail)}
  />
</div>

<ResultModal
  show={showResult}
  pontuacao={pontuacao}
  total={perguntas.length}
  on:restart={reiniciar}
/>