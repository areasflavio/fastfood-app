import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiStar, FiShoppingBag } from 'react-icons/fi';

import Header from '../../components/Header';
import Container from '../../components/Container';
import { DishesGrid, Title, Info } from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

export default function Menu() {
  const [foods, setFoods] = useState([]);

  const cartAmount = useSelector((state) =>
    state.cart.reduce((amount, food) => {
      amount[food.id] = food.amount;

      return amount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getFoods() {
      const response = await api.get('/foods');

      const data = response.data.map((food) => ({
        ...food,
        priceFormatted: formatPrice(food.price),
      }));

      setFoods(data);
    }

    getFoods();
  }, []);

  function handleAddFood(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <>
      <Header title={['Order', 'something']} />

      <Container>
        <h2>Popular dishes</h2>
        <DishesGrid>
          {foods.map((food) => (
            <li key={food.id}>
              <img src={food.image_url} alt={food.title} />
              <Title>
                <strong>{food.title}</strong>
                <button type="button" onClick={() => handleAddFood(food.id)}>
                  {cartAmount[food.id]} <FiShoppingBag size={16} />
                </button>
              </Title>
              <Info>
                <div>
                  <FiStar size={14} color="#999" /> 4.0
                  <small>{food.restaurant.name}</small>
                  <small>{food.category}</small>
                </div>
                <strong>{food.priceFormatted}</strong>
              </Info>
            </li>
          ))}
        </DishesGrid>
      </Container>
    </>
  );
}
