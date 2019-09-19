import React from "react"
import { connect } from "react-redux"

class Setter extends React.Component {
  render() {
    return <div style={{ display: "none" }}></div>
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Setter)
