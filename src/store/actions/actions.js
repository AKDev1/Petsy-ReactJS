import { ActionTypes } from "./actionTypes";

export const setDogDetails = (dogs) => {
  return {
    type: ActionTypes.SET_DOG_DETAILS,
    payload: dogs
  };
};

export const setUserDetails = (users) => {
  return {
    type: ActionTypes.SET_USER_DETAILS,
    payload: users
  };
};

export const userLogin = (userId) => {
  return {
    type: ActionTypes.LOGIN,
    payload: userId
  };
};

export const userLogout = (userId) => {
  return {
    type: ActionTypes.LOGOUT,
    payload: userId
  };
};

export const addFavorite = (dog) => {
  return {
    type: ActionTypes.ADD_FAVORITE,
    payload: dog
  };
};

export const searchByQuery = (query) => {
  return {
    type: ActionTypes.SEARCH_BY_QUERY,
    payload: query
  };
};

export const fiterPriceAsc = (dogs) => {
  return {
    type: ActionTypes.FILTER_BY_PRICE_ASC,
    payload: dogs
  };
};

export const fiterPriceDesc = (dogs) => {
  return {
    type: ActionTypes.FILTER_BY_PRICE_DESC,
    payload: dogs
  };
};