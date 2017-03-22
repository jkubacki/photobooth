import React from "react"
import Webcam from "react-webcam"

export default class Booth extends React.Component {
  screenshot() {
    var screenshot = this.refs.webcam.getScreenshot();
    console.log(screenshot);
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
        <button onClick={::this.screenshot}>capture</button>
      </div>
    )
  }
}
