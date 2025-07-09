<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3">
  <div class="row row-cols-4 g-2" id="grid"></div>
  <script>
    const icons = ['🍎','🍌','🍇','🍒'];
    let cards = [...icons, ...icons].sort(() => Math.random()-0.5);
    let first=null, lock=false;
    const grid = document.getElementById('grid');

    cards.forEach((icon,i) => {
      const btn = document.createElement('button');
      btn.className='btn btn-outline-primary';
      btn.style.height='100px';
      btn.onclick = () => {
        if (lock || btn.textContent) return;
        btn.textContent = icon;
        if (!first) first = {icon, btn};
        else {
          lock = true;
          setTimeout(() => {
            if (first.icon !== icon) {
              first.btn.textContent = '';
              btn.textContent = '';
            }
            [first, lock] = [null, false];
          }, 500);
        }
      };
      grid.appendChild(btn);
    });
  </script>
</body>
</html>
