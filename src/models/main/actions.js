export function loadIndex() {
  return {
    type: 'main/indexLoad'
  }
}

export function updateState(payload) {
  return {
    type: 'main/updateState',
    payload
  }
}