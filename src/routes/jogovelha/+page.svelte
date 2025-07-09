<!DOCTYPE html>
<html>
<head>
  <style>
    #board { display:grid;grid-template:repeat(3,100px)/repeat(3,100px);gap:5px; }
    .cell { background:#eee; font-size:2em; display:flex;
      align-items:center;justify-content:center; cursor:pointer; }
  </style>
</head>
<body>
  <div id="board"></div>
  <script>
    const board = document.getElementById('board');
    let turn = 'X', cells = Array(9).fill('');
    const winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function draw() {
      board.innerHTML = '';
      cells.forEach((v,i) => {
        const btn = document.createElement('div');
        btn.className = 'cell';
        btn.textContent = v;
        btn.onclick = () => play(i);
        board.appendChild(btn);
      });
    }

    function play(i) {
      if (cells[i]) return;
      cells[i] = turn;
      if (checkWin()) return alert(turn + ' venceu!');
      if (!cells.includes('')) return alert('Empate!');
      turn = turn === 'X' ? 'O' : 'X';
      draw();
    }

    function checkWin() {
      return winCombos.some(c =>
        c.every(i => cells[i] === turn)
      );
    }

    draw();
  </script>
</body>
</html>
