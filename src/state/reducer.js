import { SET_DEVICE, START, GET_HEIGHT, SET_LINEHEIGHT } from "./actions"

const initialState = {
  device: undefined,
  started: false,
  height: undefined,
  lineHeight: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1200) {
        device = `tablet`
      }
      if (action.width > 1200) {
        device = `browser`
      }
      return { ...state, device: device }
    case START:
      return { ...state, started: true }
    case GET_HEIGHT:
      return { ...state, height: action.height }
    case SET_LINEHEIGHT:
      return { ...state, lineHeight: action.height }
    default:
      return state
  }
}
