import { ActionTypes } from "../actions/actionTypes";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_DOG_DETAILS:
      return {...state, dogs:action.payload};
      break;
    case ActionTypes.SEARCH_BY_QUERY:
      return state.dogs?state.dogs.filter((obj) =>
      JSON.stringify(obj).toLowerCase().includes(action.payload.toLowerCase())
    ):state.filter((obj) =>
    JSON.stringify(obj).toLowerCase().includes(action.payload.toLowerCase()))
      break;
    case ActionTypes.FILTER_BY_PRICE_ASC:
      return state;
      break;
    case ActionTypes.FILTER_BY_PRICE_DESC:
      return state;
      break;
    default:
      return state;
      break;
  }
}

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DETAILS:
      return {...state, users:action.payload};
      break;
    case ActionTypes.LOGIN:
      return {...state,
        users:{
          ...state.users,
          [0]:{
            ...state.users[0],
            loggedIn: true
          }
        }
      };
      break;
    case ActionTypes.LOGOUT:
      return {...state,
        users:{
          ...state.users,
          [0]:{
            ...state.users[0],
            loggedIn: false,
            favorites: [...state.users[0].favorites]
          }
        }
      };
      break;
    case ActionTypes.ADD_FAVORITE:
      return {...state,
        users:{
          ...state.users,
          [0]:{
            ...state.users[0],
            favorites: [...state.users[0].favorites,
          action.payload]
          }
        }
      };;
      break;
    default:
      return state;
      break;
  }
}