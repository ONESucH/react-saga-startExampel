import Api from '../../api/api';

export function users(method) {
  return Api.get(method);
}