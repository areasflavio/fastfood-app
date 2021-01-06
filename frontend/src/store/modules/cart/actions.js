export function addToCart(food) {
  return {
    type: '@cart/ADD',
    food,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}
