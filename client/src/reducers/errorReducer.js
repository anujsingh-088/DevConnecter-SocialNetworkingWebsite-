import { GET_ERROR } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return action.payload;

    default:
      return state;
  }
}
