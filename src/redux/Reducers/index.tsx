import {CombinedState, combineReducers} from 'redux';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  listArray: listReducer,
});

const appReducer = (
  state: CombinedState<{listArray: {list: any}}> | undefined,
  action: {type: any; payload: any},
) => {
  return rootReducer(state, action);
};

export default appReducer;
