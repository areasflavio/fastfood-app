import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';
import FoodController from './app/controllers/FoodController';

const routes = Router();

routes.get('/foods', FoodController.index);
routes.get('/foods/:id', FoodController.show);
routes.post('/foods', FoodController.store);
routes.put('/foods/:id', FoodController.update);
routes.delete('/foods/:id', FoodController.delete);

routes.get('/restaurants', RestaurantController.index);
routes.post('/restaurants', RestaurantController.store);
routes.put('/restaurants/:id', RestaurantController.update);
routes.delete('/restaurants/:id', RestaurantController.delete);

export default routes;
