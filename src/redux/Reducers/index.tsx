import { CombinedState, combineReducers } from 'redux';
import listReducer from './listReducer';

const rootReducer = combineReducers({
    list: listReducer,
});

const appReducer = (
    state: CombinedState<{ list: { list: any } }> | undefined,
    action: { type: any; payload: any },
) => {
    return rootReducer(state, action);
};

export default appReducer;
