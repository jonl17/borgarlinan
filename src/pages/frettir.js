import React from "react"
import { connect } from "react-redux"
import { pushHistory } from "../state/actions"

/** components */
import Frettir from "../components/frettir"

class frettir extends React.Component {
  componentDidMount() {
    this.props.dispatch(pushHistory(this.props.location.pathname))
  }
  render() {
    return <Frettir></Frettir>
  }
}

export default connect()(frettir)
