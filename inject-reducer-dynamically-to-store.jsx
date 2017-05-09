const { createStore,combineReducers } = Redux;


const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      break;
      case 'DECREMENT':
        return state - 1;
      break;
      default:
        return state;
    }
} 

const replaceCounter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 10;
      break;
      case 'DECREMENT':
        return state - 10;
      break;
      default:
        return state;
    }
} 

function createReducer(asyncReducers) {
  return combineReducers({
    count: counter,
    ...asyncReducers
  });
}

function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);
  store.asyncReducers = {};
  return store;
}

function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}


const store = configureStore();
const render = () => {
  document.body.innerText = store.getState().count;
  setTimeout(function() {
    injectAsyncReducer(store, 'count', replaceCounter);
//     injectReducer(store, { key: 'count', reducer: replaceCounter })
//     console.log(this.store);
  } , 2000);
}

store.subscribe(render);
render();

document.addEventListener('click', () =>{
  store.dispatch({type: 'INCREMENT'});
});
