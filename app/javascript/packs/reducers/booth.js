import Constants from "../constants"

const initialState = {
  pictures: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.TAKE_PICTURE:
      return { ...state, pictures: state.pictures.concat(action.picture) }
    default:
      return state;
  }
}
