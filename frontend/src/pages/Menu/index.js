/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FiStar, FiShoppingBag } from 'react-icons/fi';

import Container from '../../components/Container';
import { DishesGrid, Title, Info } from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/foods');

    const data = response.data.map((food) => ({
      ...food,
      priceFormatted: formatPrice(food.price),
    }));

    this.setState({ foods: data });
  }

  handleAddFood = (food) => {
    const { addToCart } = this.props;

    addToCart(food);
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Menu);
