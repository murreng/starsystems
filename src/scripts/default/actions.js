import { createActions } from 'redux-actions';

const types = {
  UPDATE_ITEM: 'UPDATE_ITEM',
  SET_PRODUCT_TYPE:'SET_PRODUCT_TYPE',
  GET_PRODUCT_TYPE:'GET_PRODUCT_TYPE'
};

const actions = createActions(...Object.keys(types).map(type => types[type]));

export default actions;
export { types };


