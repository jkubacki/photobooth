import Constants from "../constants"

const initialState = {
  pictures: [],
  timer: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.TAKE_PICTURE:
      return { ...state, pictures: state.pictures.concat(action.picture) }
    case Constants.SHOW_TIMER:
      return { ...state, timer: true }
    case Constants.HIDE_TIMER:
      return { ...state, timer: false }
    default:
      return state;
  }
}
