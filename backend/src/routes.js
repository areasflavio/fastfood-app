import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RestaurantController from './app/controllers/RestaurantController';
import FoodController from './app/controllers/FoodController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.get('/foods', FoodController.index);
routes.get('/foods/:id', FoodController.show);

routes.post('/sessions', SessionController.store);

routes.get('/restaurants', RestaurantController.index);
routes.post('/restaurants', RestaurantController.store);

routes.use(authMiddleware);

routes.put('/restaurants', RestaurantController.update);

routes.post('/foods', FoodController.store);
routes.put('/foods/:id', FoodController.update);
routes.delete('/foods/:id', FoodController.delete);

export default routes;
