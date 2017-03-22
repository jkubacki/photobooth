import Constants from "../constants"
const Actions = {};

Actions.takePicture = (dispatch, picture) => {
  dispatch({
    type: Constants.TAKE_PICTURE,
    picture: picture
  })
}

Actions.showTimer = (dispatch) => {
  dispatch({
    type: Constants.SHOW_TIMER
  })
}

Actions.hideTimer = (dispatch) => {
  dispatch({
    type: Constants.HIDE_TIMER
  })
}

export default Actions;
