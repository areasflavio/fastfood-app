import React from 'react';
import { useSelector } from 'react-redux';
import { FiMenu, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  MenuDiv,
  StyledPopup,
  SearchInputDiv,
  UserDiv,
} from './styles';

export default function Header({ title }) {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <MenuDiv>
        <StyledPopup
          trigger={
            <button className="button" type="button">
              <FiMenu size={24} />
            </button>
          }
          position="right top"
          closeOnDocumentClick
        >
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
        </StyledPopup>
        <div>
          <strong>{title[0]}</strong>
          {title[1]}
        </div>
      </MenuDiv>
      <SearchInputDiv>
        <input placeholder="Search" readOnly />
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

Header.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
};
