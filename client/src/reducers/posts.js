import {
  FETCH_POSTS,
  CREATE_POSTS,
  UPDATE_POST,
  DELETE,
  LIKE_POST,
} from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POSTS:
      return [...state, action.payload];
    case UPDATE_POST:
    case LIKE_POST:
      return state.map((post) => {
        return post._id === action.payload ? action.payload : post;
      });
    default:
      return state;
  }
};

export const currentIDReducer = (state = { id: "" }, action) => {
  switch (action.type) {
    case "SET_ID":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
