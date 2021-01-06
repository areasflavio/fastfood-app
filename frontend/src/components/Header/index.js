/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FiMenu, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, MenuDiv, SearchInputDiv, UserDiv } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <MenuDiv>
        <FiMenu size={24} color="#000" />
        <strong>Order</strong>
        something
      </MenuDiv>
      <SearchInputDiv>
        <input placeholder="Search" />
        <FiSearch size={16} color="#F7B90F" />
      </SearchInputDiv>
      <UserDiv>
        <Link to="/cart">
          <FiShoppingBag size={16} color="#F7B90F" />
          {cartSize > 0 && <span>{cartSize}</span>}
        </Link>
      </UserDiv>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
