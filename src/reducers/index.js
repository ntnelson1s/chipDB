import { combineReducers } from 'redux';
import ActiveAccountReducer from './reducer_activeAccount';
import MainAccountReducer from './reducer_getAccounts';

const rootReducer = combineReducers({
  activeAccount: ActiveAccountReducer,
  Accounts: MainAccountReducer
});

export default rootReducer;