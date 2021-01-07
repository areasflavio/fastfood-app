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

  handleAddFood = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { foods } = this.state;
    const { cartAmount } = this.props;

    return (
      <Container>
        <h2>Popular dishes</h2>
        <DishesGrid>
          {foods.map((food) => (
            <li key={food.id}>
              <img src={food.image_url} alt={food.title} />
              <Title>
                <strong>{food.title}</strong>
                <button
                  type="button"
                  onClick={() => this.handleAddFood(food.id)}
                >
                  {cartAmount[food.id]} <FiShoppingBag size={16} />
                </button>
              </Title>
              <Info>
                <div>
                  <FiStar size={14} color="#999" /> 4.0
                  <small>- {food.restaurant.name} </small>
                  <small>- {food.category} </small>
                </div>
                <strong>{food.priceFormatted}</strong>
              </Info>
            </li>
          ))}
        </DishesGrid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cartAmount: state.cart.reduce((amount, food) => {
    amount[food.id] = food.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
