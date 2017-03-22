import Constants from "../constants"

const initialState = {
  sample: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SAMPLE:
      return { ...state, sample: false }
    default:
      return state;
  }
}
