const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddelware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamsState = {
  numberOfIceCreams: 12,
};

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'bought a cake',
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: 'bought a ice cream',
  };
}

const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return initialCakeState;
  }
};

const IceCreamReducer = (state = initialIceCreamsState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return initialIceCreamsState;
  }
};

const rootReducer = combineReducers({
  cake: CakeReducer,
  IceCream: IceCreamReducer,
});
const store = createStore(rootReducer, applyMiddelware(logger));
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

