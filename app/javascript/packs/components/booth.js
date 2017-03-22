import React from "react"
import Webcam from "react-webcam"
import { connect } from "react-redux"
import Actions from "../actions/booth.js"
import ReactCountdownClock from "react-countdown-clock"

class Booth extends React.Component {

  _renderClock() {
    if (this.props.booth.timer) {
      return (
        <ReactCountdownClock
                  seconds={5}
                  color="#ffff"
                  alpha={0.9}
                  size={300}
                  onComplete={::this._timerCompleted}
                />
      )
    }
  }
  _startTimer() {
    Actions.showTimer(this.props.dispatch);
  }

  _timerCompleted() {
    this._takePicture();
    Actions.hideTimer(this.props.dispatch);

    if (this.props.booth.pictures.length < 3) {
      this._startTimer();
    }
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
        <div>
          <button onClick={::this._startTimer}>capture</button>
        </div>
        {::this._renderClock()}
        <Webcam
          ref="webcam"
          className="webcam"
          audio={false}
          screenshotFormat="image/jpeg"
        />
        {::this._renderPictures()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  booth: state.booth
});

export default connect(mapStateToProps)(Booth);
