import React from "react"
import Webcam from "react-webcam"
import { connect } from "react-redux"
import Actions from "../actions/booth.js"

class Booth extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  _takePicture() {
    let picture = this.refs.webcam.getScreenshot();
    Actions.takePicture(this.props.dispatch, picture);
  }

  _renderPictures() {
    return this.props.booth.pictures.map((picture, i) => {
      return (
        <div key={i}>
          <img src={picture} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Webcam
          ref="webcam"
          className="webcam"
          audio={false}
          screenshotFormat="image/jpeg"
        />
        {::this._renderPictures()}
        <button onClick={::this._takePicture}>capture</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  booth: state.booth
});

export default connect(mapStateToProps)(Booth);
