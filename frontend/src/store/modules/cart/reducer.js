import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { food } = action;

        draft.push(food);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const foodIndex = draft.findIndex((f) => f.id === action.id);

        if (foodIndex >= 0) {
          draft.splice(foodIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT':
      return produce(state, (draft) => {
        const foodIndex = draft.findIndex((f) => f.id === action.id);

        if (foodIndex >= 0 && action.amount > 0) {
          draft[foodIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
