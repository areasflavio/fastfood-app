import React from 'react';
import { FiStar, FiShoppingBag } from 'react-icons/fi';

import Container from '../../components/Container';
import { DishesGrid, Title, Info } from './styles';

function Menu() {
  return (
    <Container>
      <h2>Popular dishes</h2>
      <DishesGrid>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <Title>
            <strong>Pizza Marguerita</strong>
            <button type="button">
              1 <FiShoppingBag size={16} />
            </button>
          </Title>
          <Info>
            <FiStar size={12} color="#999" /> 4.0
            <small>- Neapolitan </small>
            <small>- Pizza </small>
          </Info>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <Title>
            <strong>Pizza Marguerita</strong>
            <button type="button">
              1 <FiShoppingBag size={16} />
            </button>
          </Title>
          <Info>
            <FiStar size={12} color="#999" /> 4.0
            <small>- Neapolitan </small>
            <small>- Pizza </small>
          </Info>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <Title>
            <strong>Pizza Marguerita</strong>
            <button type="button">
              1 <FiShoppingBag size={16} />
            </button>
          </Title>
          <Info>
            <FiStar size={12} color="#999" /> 4.0
            <small>- Neapolitan </small>
            <small>- Pizza </small>
          </Info>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <Title>
            <strong>Pizza Marguerita</strong>
            <button type="button">
              1 <FiShoppingBag size={16} />
            </button>
          </Title>
          <Info>
            <FiStar size={12} color="#999" /> 4.0
            <small>- Neapolitan </small>
            <small>- Pizza </small>
          </Info>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <Title>
            <strong>Pizza Marguerita</strong>
            <button type="button">
              1 <FiShoppingBag size={16} />
            </button>
          </Title>
          <Info>
            <FiStar size={12} color="#999" /> 4.0
            <small>- Neapolitan </small>
            <small>- Pizza </small>
          </Info>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="food"
          />
          <Title>
            <strong>Pizza Marguerita</strong>
            <button type="button">
              1 <FiShoppingBag size={16} />
            </button>
          </Title>
          <Info>
            <FiStar size={12} color="#999" /> 4.0
            <small>- Neapolitan </small>
            <small>- Pizza </small>
          </Info>
        </li>
      </DishesGrid>
    </Container>
  );
}

export default Menu;
