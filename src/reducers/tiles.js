export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_POSITION': {
      return action.payload;
    }
    default: return state
  }
}
