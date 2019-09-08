import { SET_DEVICE, START } from "./actions"

const initialState = {
  device: undefined,
  started: false,
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
    default:
      return state
  }
}
