import { combineReducers } from 'redux';
import tabledata from './tableData';
import query from './query';
export const reducers = combineReducers({ tabledata, query });
