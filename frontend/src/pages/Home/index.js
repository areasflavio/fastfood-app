import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Container from '../../components/Container';
import { Panel, PopularRestaurants, Info, Location } from './styles';

export default function Menu() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await api.get('restaurants');

      setRestaurants(response.data);
    }

    getRestaurants();
  }, []);

  return (
    <Container>
      <Panel>
        <h1>Order with FASTFOOD APP</h1>
        <p>We provide super-fast delivery or pick-up</p>
      </Panel>

      <h2>Popular restaurants</h2>

      <PopularRestaurants>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <img src={restaurant.image_url} alt={restaurant.name} />
            <Info>
              <strong>{restaurant.name}</strong>
              <Location>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Location>
            </Info>
          </li>
        ))}
      </PopularRestaurants>
    </Container>
  );
}
