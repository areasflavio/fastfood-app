/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FiEdit3, FiPlusCircle, FiMinusCircle, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { HeadDiv, DishesList, Controls, Footer } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeFromCart }) {
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
              <button type="button">
                <FiPlusCircle size={12} />
              </button>
              <button type="button">
                <FiMinusCircle size={12} />
              </button>
              <button type="button" onClick={() => removeFromCart(food.id)}>
                <FiTrash size={12} />
              </button>
            </Controls>
            <div>
              <img src={food.image_url} alt={food.title} />
              <h3>{food.amount}</h3>
              <small> X </small>
              <strong>{food.title}</strong>
            </div>
            <h3>{food.priceFormatted}</h3>
          </li>
        ))}
      </DishesList>
      <Footer>
        <button type="button">Checkout</button>
        <div>
          <strong>Total Amount:</strong>
          <h2>R$126,00</h2>
        </div>
      </Footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
