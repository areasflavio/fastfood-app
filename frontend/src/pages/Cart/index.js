/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  FiEdit3,
  FiPlusCircle,
  FiMinusCircle,
  FiTrash,
  FiShoppingBag,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { HeadDiv, DishesList, Controls, Footer, EmptyCart } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function incrementAmount(food) {
    updateAmount(food.id, food.amount + 1);
  }

  function decrementAmount(food) {
    updateAmount(food.id, food.amount - 1);
  }

  if (cart.length === 0) {
    return (
      <Container>
        <h2>My order</h2>
        <FiShoppingBag size={128} color="#999" />
        <EmptyCart>
          <strong>You have not placed any order yet</strong>
          <Link to="/menu">Look the menu</Link>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <HeadDiv>
        <h2>My order</h2>
        <Link to="/menu">
          <FiEdit3 size={18} />
        </Link>
      </HeadDiv>
      <DishesList>
        {cart.map((food) => (
          <li key={food.id}>
            <Controls>
              <button type="button" onClick={() => incrementAmount(food)}>
                <FiPlusCircle size={16} />
              </button>
              <button type="button" onClick={() => decrementAmount(food)}>
                <FiMinusCircle size={16} />
              </button>
              <button type="button" onClick={() => removeFromCart(food.id)}>
                <FiTrash size={16} />
              </button>
            </Controls>
            <div>
              <img src={food.image_url} alt={food.title} />
              <h3>{food.amount}</h3>
              <small> X </small>
              <strong>{food.title}</strong>
            </div>
            <h3>{food.subtotal}</h3>
          </li>
        ))}
      </DishesList>
      <Footer>
        <button type="button">Checkout</button>
        <div>
          <strong>Total Amount:</strong>
          <h2>{total}</h2>
        </div>
      </Footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((food) => ({
    ...food,
    subtotal: formatPrice(food.price * food.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, food) => total + food.price * food.amount, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
