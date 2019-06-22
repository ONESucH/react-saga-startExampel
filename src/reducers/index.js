import { combineReducers } from 'redux';
import models from '../models';
import prefixNameSpace from '../utils/prefixNameSpace';
import getReducer from '../utils/getReducer';
import main from '../pages/main/container';

const reducers = {
  main
};

for (let index = 0; index < models.length; index++) {
  const model = prefixNameSpace(models[index]);
  if (model.reducers) {
    reducers[model.namespace] = getReducer(model.reducers, {});
  }
}

const rootReducer = combineReducers(reducers);

export default rootReducer;