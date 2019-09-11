import {
  SET_DEVICE,
  START,
  GET_HEIGHT,
  SET_LINEHEIGHT,
  SET_FIRSTLINE_STOP,
  SET_LANGUAGE,
  SET_WHITELINE_STOP,
  TRIGGER_BURGER_MENU,
} from "./actions"

const initialState = {
  device: undefined,
  started: false,
  height: undefined,
  lineHeight: 0,
  firstLineStop: 0,
  language: `icelandic`,
  whiteLineStop: undefined,
  showBurgerMenu: false,
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
    case SET_FIRSTLINE_STOP:
      return { ...state, firstLineStop: action.stop }
    case SET_LANGUAGE:
      let language
      if (state.language === `icelandic`) {
        language = `english`
      } else {
        language = `icelandic`
      }
      return { ...state, language: language }
    case SET_WHITELINE_STOP:
      return { ...state, whiteLineStop: action.stop }
    case TRIGGER_BURGER_MENU:
      return { ...state, showBurgerMenu: action.trig }
    default:
      return state
  }
}
