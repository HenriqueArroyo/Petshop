import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    
<div>
  <nav>
    <div className="header1">
      <a href><img id="logo" src="/Solo/Img/Logo.png" alt="Logo" /></a>
      <a href><img id="telefone" src="/Solo/Img/telefone.png" alt="Contato" /></a>
      <a href><img id="carrinhoCompra" src="/Solo/Img/carrinhoCompra.png" alt="Carrinho de Compra" /></a>
      <a href><img id="usuario" src="/Solo/Img/user.png" alt="Usuário" /></a>
    </div>
    <div className="header2">
      <a href><p>Produtos</p></a>
      <a href><p>Veterináro</p></a>
      <a href><p>Banho</p></a>
      <a href><p>Contato</p></a>
      <a href><p>Sobre Nós</p></a>
    </div>
  </nav>
  {/* Carrossel */}
  <main>
    <img src="/Solo/Img/Banner1.png" className="slide" alt />
    <img src="/Solo/Img/Banner2.png" className="slide" alt />
    <img src="/Solo/Img/Banner3.png" className="slide" alt />
  </main>
  <button onclick="goRetornar()">
    <img id="retornar" src="/Solo/Img/arrow.png" alt />
  </button>
  <button onclick="goAvancar()">
    <img id="avancar" src="/Solo/Img/arrow.png" alt />
  </button>
  {/* Produtos */}
  <section>
    <h1>Produtos Recomendados</h1>
    <div className="card-1">
      <img id="img1" src="/Solo/Img/Produtos/1.jpg" alt />
      <p>Ração Golden Special para Cães Adultos</p>
      <p>R$ 154,99</p>
    </div>
    <div className="card-2">
      <img id="img1" src="/Solo/Img/Produtos/2.jpg" alt />
      <p>Refeição Natural Zee Dog Kitchen </p>
      <p>R$ 109,99</p>
    </div>
    <div className="card-3">
      <img id="img1" src="/Solo/Img/Produtos/3.jpg" alt />
      <p>Super Secão Citrus Tapete Higiênico</p>
      <p>R$ 99,99</p>
    </div>
  </section>
  <section>
    <div className="card-1">
      <img id="img1" src="/Solo/Img/Produtos/4.jpg" alt />
      <p>Ração Golden Special para Cães Adultos</p>
      <p>R$ 154,99</p>
    </div>
    <div className="card-2">
      <img id="img1" src="/Solo/Img/Produtos/5.jpg" alt />
      <p>Refeição Natural Zee Dog Kitchen </p>
      <p>R$ 109,99</p>
    </div>
    <div className="card-3">
      <img id="img1" src="/Solo/Img/Produtos/6.jpg" alt />
      <p>Super Secão Citrus Tapete Higiênico</p>
      <p>R$ 99,99</p>
    </div>
  </section>
  <section>
    <div className="card-1">
      <img id="img1" src="/Solo/Img/Produtos/7.jpg" alt />
      <p>Ração Golden Special para Cães Adultos</p>
      <p>R$ 154,99</p>
    </div>
    <div className="card-2">
      <img id="img1" src="/Solo/Img/Produtos/8.jpg" alt />
      <p>Refeição Natural Zee Dog Kitchen </p>
      <p>R$ 109,99</p>
    </div>
    <div className="card-3">
      <img id="img1" src="/Solo/Img/Produtos/9.jpg" alt />
      <p>Super Secão Citrus Tapete Higiênico</p>
      <p>R$ 99,99</p>
    </div>
  </section>
</div>

  );
}

export default App;
