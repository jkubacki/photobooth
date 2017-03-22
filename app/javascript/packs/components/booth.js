import React from "react"
import Webcam from "react-webcam"

export default class Booth extends React.Component {
  render() {
    return (
      <div>
        <Webcam
          ref="webcam"
          className="webcam"
          audio={false}
          screenshotFormat="image/jpeg"
        />
      </div>
    )
  }
}
