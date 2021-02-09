import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Container from '../../components/Container';
import { Panel, PopularRestaurants, Info } from './styles';

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
          <>
            <li key={restaurant.id}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 1}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 2}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 3}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 4}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 5}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 6}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 7}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 8}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 9}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
            <li key={restaurant.id + 10}>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <Info>
                <strong>{restaurant.name}</strong>
                <small>{restaurant.city} </small>
                <small>{restaurant.state} </small>
              </Info>
            </li>
          </>
        ))}
      </PopularRestaurants>
    </Container>
  );
}
