<script>
  import ProductList from '$lib/components/Prod.svelte';
  import Cart from '$lib/components/Cart.svelte';

  const produtos = [
    { id:1, nome:'Caneca', preco:19.9, img:'/caneca.jpg' },
    { id:2, nome:'Camiseta', preco:49.9, img:'/camiseta.jpg' },
    { id:3, nome:'Livro', preco:29.9, img:'/livro.jpg' }
  ];

  let carrinho = [];

  function addItem(e) {
    carrinho = [...carrinho, e.detail];
  }
  function removeItem(idx) {
    carrinho.splice(idx, 1);
    carrinho = [...carrinho];
  }
</script>

<div class="container mt-4">
  <ProductList produtos={produtos} on:add={addItem} />
  <Cart itens={carrinho} onRemove={removeItem} />
</div>
