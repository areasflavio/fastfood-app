import React from 'react';
import { FiMenu, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, MenuDiv, SearchInputDiv, UserDiv } from './styles';

function Header() {
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
          <span>2</span>
        </Link>
      </UserDiv>
    </Container>
  );
}

export default Header;
