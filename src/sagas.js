import { all, takeLatest } from 'redux-saga/effects';
import models from './models';

const list = [];

for (let index = 0; index < models.length; index++) {
  const model = models[index];
  for (const key in model.effects) {
    const effect = model.effects[key];
    list.push(takeLatest(`${model.namespace}/${key}`, effect));
  }
}

export default function* rootSaga() {
  yield all(list);
}