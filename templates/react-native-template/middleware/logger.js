export default  store => next => action => {
    console.log('1. previous state: ', store.getState());
    console.log('2. action type: ', action.type);
    let result = next(action);
    console.log('3. new state: ', store.getState());
    return result;
  };