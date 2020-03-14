import {createStore} from 'redux';
import usarioReducer from './usarioReducer';

const store = createStore(usarioReducer);

export default store;
