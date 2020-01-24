import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket, MdPerson } from 'react-icons/md';

import { Container, Cart } from './styles';

// import logo from '../../assets/images/logo.png';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <MdPerson size={36} color="#FFF" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
