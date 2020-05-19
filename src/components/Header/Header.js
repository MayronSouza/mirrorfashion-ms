import React from 'react'

import logo from '../../assets/img/logo.png'

import './Header.css'

const Header = () => {
  return (
    <header className="container">
      <h1><img src={logo} alt="Logo da Mirror Fashion MS"/></h1>

      <p className="sacola">
        Nenhum item na sacola de compras
      </p>

      <nav className="menu opcoes">
        <ul>
          <li><a href="#">Sua Conta</a></li>
          <li><a href="#">Lista de Desejos</a></li>
          <li><a href="#">Cartão Fidelidade</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default Header