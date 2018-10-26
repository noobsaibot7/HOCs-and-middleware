export default ({ dispatch, getState, subscribe }) =>
  next =>
    action => {
      // we first handle if the middleware receives a synchronous or direct action
      if (!action.payload || !action.payload.then) return next(action);
      action.payload.then(response => {
        const newType = { ...action, payload: response };
        //the dispatch ensures the action is dispatched/spread to all reducers
        return dispatch(newType);
      })
    } 