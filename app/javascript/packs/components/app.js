import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        Sample app
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sample: state.sample
});

export default connect(mapStateToProps)(App);
