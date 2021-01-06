import React from 'react';
import { FiEdit3, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { HeadDiv, DishesList, Controls, Footer } from './styles';

function Cart() {
  return (
    <Container>
      <HeadDiv>
        <h2>My order</h2>
        <Link to="/menu">
          <FiEdit3 size={18} />
        </Link>
      </HeadDiv>
      <DishesList>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <div>
            <Controls>
              <button type="button">
                <FiPlusCircle size={12} />
              </button>
              <h3>2</h3>
              <button type="button">
                <FiMinusCircle size={12} />
              </button>
            </Controls>
            <small> X </small>
            <strong>Pizza Marguerita</strong>
          </div>
          <h3>R$45,00</h3>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <div>
            <Controls>
              <button type="button">
                <FiPlusCircle size={12} />
              </button>
              <h3>2</h3>
              <button type="button">
                <FiMinusCircle size={12} />
              </button>
            </Controls>
            <small> X </small>
            <strong>Pizza Marguerita</strong>
          </div>
          <h3>R$45,00</h3>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <div>
            <Controls>
              <button type="button">
                <FiPlusCircle size={12} />
              </button>
              <h3>2</h3>
              <button type="button">
                <FiMinusCircle size={12} />
              </button>
            </Controls>
            <small> X </small>
            <strong>Pizza Marguerita</strong>
          </div>
          <h3>R$45,00</h3>
        </li>
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

export default Cart;
