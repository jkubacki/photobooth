import Constants from "../constants"
const Actions = {};

Actions.toggle = (dispatch) => {
  dispatch({
    type: Constants.SAMPLE_ACTION
  })
}

export default Actions;
