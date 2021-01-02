import jwt from 'jsonwebtoken';

import Restaurant from '../models/Restaurant';

import authSession from '../../config/auth';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const restaurant = await Restaurant.findOne({ where: { email } });

    if (!restaurant) {
      return response.status(401).json({ error: 'Email not found' });
    }

    if (!(await restaurant.checkPassword(password))) {
      return response.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = restaurant;

    return response.json({
      restaurant: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authSession.secret, {
        expiresIn: authSession.expiresIn,
      }),
    });
  }
}

export default new SessionController();
