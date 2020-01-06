import React from "react"
import { connect } from "react-redux"
import { pushHistory } from "../state/actions"

/** components */
import Skyrslur from "../components/skyrslur"

class skyrslur extends React.Component {
  componentDidMount() {
    this.props.dispatch(pushHistory(this.props.location.pathname))
  }
  render() {
    return <Skyrslur></Skyrslur>
  }
}

export default connect()(skyrslur)
