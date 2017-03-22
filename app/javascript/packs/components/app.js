import React from "react"
import { connect } from "react-redux"
import Booth from "./booth"

class App extends React.Component {
  render() {
    return (
      <div>
        <Booth />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  booth: state.booth
});

export default connect(mapStateToProps)(App);
