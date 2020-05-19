import React from 'react'

import './Footer.css'

import logoRodape from '../../assets/img/logo-rodape.png'

const Footer = () => {
  return (
      <footer>
        <div class="container">
          <img src={logoRodape} alt="Logo da Mirror Fashion" />

          <ul class="social">
            <li><a href="http://facebook.com/mirrorfashion">Facebook</a></li>
            <li><a href="http://twitter.com/mirrorfashion">Twitter</a></li>
            <li><a href="http://plus.google.com/mirrorfashion">Google+</a></li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer