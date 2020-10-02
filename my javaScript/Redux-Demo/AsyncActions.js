const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

//State
const initialState = {
  loading: false,
  users: [],
  error: '',
};

//Actions types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    info: 'Requesting Fetch Users',
  };
};

const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    info: 'Fetched Users Successfully',
    payload: users,
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    info: 'Fetched Users Failed',
    payload: error,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data.map(user => user);
        dispatch(fetchUserSuccess(users));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
const store = createStore(userReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
