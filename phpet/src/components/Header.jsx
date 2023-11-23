import React from "react";
import './Header.css';
import './img';

function Header() {
    return (
        <nav className="header">
        <div class="header1">
          <a  href=""><img id="logo" src="" alt="" /></a>
          <a  href=""><img id="telefone" src="/Solo/Img/telefone.png" alt="Contato"/></a>
          <a  href=""><img id="carrinhoCompra" src="/Solo/Img/carrinhoCompra.png" alt="Carrinho de Compra"/></a>
          <a  href=""><img id="usuario" src="/Solo/Img/user.png" alt="Usuário"/></a>
        </div>
        <div class="header2">
        <a href=""><p>Produtos</p></a>
        <a href=""><p>Veterináro</p></a>
        <a href=""><p>Banho</p></a>
        <a href=""><p>Contato</p></a>
        <a href=""><p>Sobre Nós</p></a>
        </div>
    </nav>

    )
}

export default Header;