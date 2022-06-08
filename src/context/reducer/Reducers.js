import { ACTIONS } from '../action/Action';

export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_START:
      return {
        user: null,
        loading: true,
        error: null,
      };
    case ACTIONS.LOGIN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case ACTIONS.LOGIN_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case ACTIONS.LOGOUT:
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
