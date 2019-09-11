import React from "react"
import { connect } from "react-redux"
import { setDevice } from "../../state/actions"

class Setter extends React.Component {
  componentDidMount() {
    this.props.dispatch(setDevice(window.innerWidth))
  }
  render() {
    return <div style={{ display: "none" }}></div>
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Setter)
