import {put, call} from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './api';

const model = {
  namespace: 'main',
  state: {
    title: 'State load',
    items: []
  },
  subscriptions: {
    index(props) {
      props.dispatch(actions.loadIndex());
    }
  },
  effects: {
    * indexLoad() {
      const users = yield call(api.users, 'users');
      yield put(actions.updateState({
        items: users
      }));
    }
  },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
};

export default model;