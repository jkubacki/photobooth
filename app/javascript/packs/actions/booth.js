import Constants from "../constants"
const Actions = {};

Actions.takePicture = (dispatch, picture) => {
  dispatch({
    type: Constants.TAKE_PICTURE,
    picture: picture
  })
}

export default Actions;
