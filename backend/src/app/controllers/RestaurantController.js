import * as Yup from 'yup';

import Restaurant from '../models/Restaurant';

class RestaurantController {
  async index(request, response) {
    const restaurants = await Restaurant.findAll({
      attributes: [
        'id',
        'name',
        'image_url',
        'email',
        'street',
        'number',
        'neighborhood',
        'city',
        'state',
      ],
    });

    return response.json(restaurants);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      image_url: Yup.string().required(),
      email: Yup.string().email().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      neighborhood: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required().max(2),
    });

    if (!schema.isValid(request.body)) {
      return response.status(400).json({ error: 'Validation failed' });
    }

    const { name } = request.body;

    const nameExists = await Restaurant.findOne({ where: { name } });

    if (nameExists) {
      return response
        .status(400)
        .json({ error: 'Restaurant already registered' });
    }

    const {
      image_url,
      email,
      street,
      number,
      neighborhood,
      city,
      state,
    } = await Restaurant.create(request.body);

    return response.status(201).json({
      name,
      image_url,
      email,
      street,
      number,
      neighborhood,
      city,
      state,
    });
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      image_url: Yup.string().required(),
      email: Yup.string().email().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      neighborhood: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required().max(2),
    });

    if (!schema.isValid(request.body)) {
      return response.status(400).json({ error: 'Validation failed' });
    }

    const { email, oldPassword } = request.body;

    const restaurant = await Restaurant.findByPk(request.params.id);

    if (restaurant.email !== email) {
      const restaurantExists = await Restaurant.findOne({
        where: { email },
      });

      if (restaurantExists) {
        return response
          .status(400)
          .json({ error: 'Email is already being used' });
      }
    }

    if (oldPassword && !(await restaurant.checkPassword(oldPassword))) {
      return response.status(401).json({ error: 'Password does not match' });
    }

    const {
      id,
      name,
      image_url,
      street,
      number,
      neighborhood,
      city,
      state,
    } = await restaurant.update(request.body);

    return response.json({
      id,
      name,
      image_url,
      email,
      street,
      number,
      neighborhood,
      city,
      state,
    });
  }

  async delete(request, response) {
    await Restaurant.findByPk(request.params.id);

    return response.json();
  }
}

export default new RestaurantController();
