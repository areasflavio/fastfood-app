import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.post('/restaurants', RestaurantController.store);

routes.use(authMiddleware);

routes.get('/restaurants', RestaurantController.index);
routes.put('/restaurants', RestaurantController.update);

export default routes;
