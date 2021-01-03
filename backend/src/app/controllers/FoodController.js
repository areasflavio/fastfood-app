import * as Yup from 'yup';
import { Op } from 'sequelize';

import Food from '../models/Food';
import Restaurant from '../models/Restaurant';

class FoodController {
  async index(request, response) {
    const foods = await Food.findAll({
      attributes: ['title', 'description', 'ingredients', 'category'],
      include: {
        model: Restaurant,
        as: 'restaurant',
        attributes: ['name'],
      },
    });

    return response.json(foods);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      ingredients: Yup.string().required(),
      category: Yup.string().required(),
    });

    if (!schema.isValid(request.body)) {
      return response.status(400).json({ error: 'Validation failed' });
    }

    const { title } = request.body;

    const titleExists = await Food.findOne({
      where: { title, restaurant_id: request.restaurantId },
    });

    if (titleExists) {
      return response
        .status(400)
        .json({ error: 'There is already a food with this title' });
    }

    const {
      description,
      ingredients,
      category,
      restaurant_id,
    } = await Food.create({
      ...request.body,
      restaurant_id: request.restaurantId,
    });

    return response.status(201).json({
      title,
      description,
      ingredients,
      category,
      restaurant_id,
    });
  }

  async show(request, response) {
    const foods = await Food.findByPk(request.params.id, {
      attributes: [
        'title',
        'description',
        'ingredients',
        'category',
        'createdAt',
        'updatedAt',
      ],
      include: {
        model: Restaurant,
        as: 'restaurant',
        attributes: [
          'name',
          'email',
          'street',
          'number',
          'neighborhood',
          'city',
          'state',
        ],
      },
    });

    return response.json(foods);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      ingredients: Yup.string().required(),
      category: Yup.string().required(),
    });

    if (!schema.isValid(request.body)) {
      return response.status(400).json({ error: 'Validation failed' });
    }

    const { title, restaurant_id } = request.body;

    if (restaurant_id !== request.restaurantId) {
      return response
        .status(401)
        .json({ error: 'You can only edit the food that you created' });
    }

    const food = await Food.findByPk(request.params.id);

    if (!food) {
      return response.status(400).json({ error: 'Food not found' });
    }

    const duplicateFood = await Food.findAll({
      where: { title, [Op.not]: { id: { [Op.eq]: request.params.id } } },
    });

    if (duplicateFood.length !== 0) {
      return response
        .status(400)
        .json({ error: 'There is already a food with this title' });
    }

    const { description, ingredients, category } = await food.update({
      ...request.body,
    });

    return response.status(201).json({
      title,
      description,
      ingredients,
      category,
      restaurant_id,
    });
  }

  async delete(request, response) {
    const food = Food.findByPk(request.params.id);

    return response.json(food);
  }
}

export default new FoodController();
