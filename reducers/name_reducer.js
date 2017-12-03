import { GET_NAME } from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        name: action.payload
      };
    default:
      return state;
  }
}
