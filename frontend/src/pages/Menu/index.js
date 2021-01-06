/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FiStar, FiShoppingBag } from 'react-icons/fi';

import Container from '../../components/Container';
import { DishesGrid, Title, Info } from './styles';

import api from '../../services/api';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/foods');

    this.setState({ foods: response.data });
  }

  handleAddFood = (food) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      food,
    });
  };

  render() {
    const { foods } = this.state;

    return (
      <Container>
        <h2>Popular dishes</h2>
        <DishesGrid>
          {foods.map((food) => (
            <li key={food.id}>
              <img src={food.image_url} alt={food.title} />
              <Title>
                <strong>{food.title}</strong>
                <button type="button" onClick={() => this.handleAddFood(food)}>
                  1 <FiShoppingBag size={16} />
                </button>
              </Title>
              <Info>
                <FiStar size={12} color="#999" /> 4.0
                <small>- {food.restaurant.name} </small>
                <small>- {food.category} </small>
              </Info>
            </li>
          ))}
        </DishesGrid>
      </Container>
    );
  }
}

export default connect()(Menu);
