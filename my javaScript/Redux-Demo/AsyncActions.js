const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

//State
const initialState = {
  loading: false,
  posts: [],
  error: '',
};

//Actions types
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
    info: 'Requesting Fetch Users',
  };
};

const fetchPostSuccess = users => {
  return {
    type: FETCH_POSTS_SUCCESS,
    info: 'Fetched Users Successfully',
    payload: users,
  };
};

const fetchPostFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    info: 'Fetched Users Failed',
    payload: error,
  };
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};
const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostRequest());

    axios
      .get('http://localhost:8080/post/type/trending')
      .then(response => {
        const posts = response.data.map(post => post);
        dispatch(fetchPostSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostFailure(error.message));
      });
  };
};
const store = createStore(postReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchPosts());
