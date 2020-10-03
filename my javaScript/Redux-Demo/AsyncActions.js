const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const reduxLogger = require('redux-logger');
const axios = require('axios');
const logger = reduxLogger.createLogger();
const url = 'http://localhost:8080/post';

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

const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
    info: 'Requesting Fetch posts',
    status: 'orange',
  };
};

const fetchPostSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    info: 'Fetched posts Successfully',
    payload: posts,
    status: 'green',
  };
};

const fetchPostFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    info: 'Fetched posts Failed',
    payload: error,
    status: 'red',
  };
};

const addNewPostRequest = () => {
  return {
    type: ADD_POST_REQUEST,
    info: ' Requesting to add new post',
    status: 'orange',
  };
};

const addNewPostSuccess = post => {
  return {
    type: ADD_POST_SUCCESS,
    info: 'Post added Successfully',
    status: 'green',
    payload: {
      posts: post,
    },
  };
};
const addNewPostFailure = error => {
  return {
    type: ADD_POST_FAILURE,
    info: 'Failed to add Post',
    status: 'red',
    payload: error,
  };
};

const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
    info: 'Requesting to delete post',
    status: 'orange',
  };
};
const deletePostSuccess = id => {
  return {
    type: DELETE_POST_SUCCESS,
    info: 'Deleted post Successfully',
    status: 'green',
    payload: id,
  };
};
const deletePostFailure = error => {
  return {
    type: DELETE_POST_FAILURE,
    info: 'Failed to delete post',
    status: 'red',
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
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        posts: [...state.posts, action.payload.posts],
        loading: false,
      };

    case ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
         ...state,
        posts:  state.posts.filter(
            post => post.id !== action.payload
            ),
        loading: false,
      };
    case DELETE_POST_FAILURE:
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
      .get(url)
      .then(response => {
        const posts = response.data.map(post => post);
        dispatch(fetchPostSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostFailure(error.message));
      });
  };
};

const addPost = post => {
  return function (dispatch) {
    dispatch(addNewPostRequest());
    axios
      .post(url, post)
      .then(res => {
        dispatch(addNewPostSuccess(res.data));
      })
      .catch(error => {
        dispatch(addNewPostFailure(error.response.data));
      });
  };
};

const deletePost = id => {
  return function (dispatch) {
    dispatch(deletePostRequest());
    axios
      .delete(`http://localhost:8080/post/${id}`)
      .then(res => {
        // console.log(res.response)
        dispatch(deletePostSuccess(id));
      })
      .catch(err => {
        dispatch(deletePostFailure(err.response.data));
      });
  };
};
const store = createStore(postReducer, applyMiddleware(thunkMiddleware, logger));
store.subscribe(() => {});

const newPost = {
  title: ' Work load 2',
  description: ';knojn',
  content: 'ljhouhnuon',
  type: 'test',
  categoryId: '1',
};
store.dispatch(fetchPosts());
store.dispatch(addPost(newPost));
store.dispatch(deletePost(60));
