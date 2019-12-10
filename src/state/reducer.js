import {
  SET_DEVICE,
  START,
  GET_HEIGHT,
  SET_LINEHEIGHT,
  SET_FIRSTLINE_STOP,
  SET_LANGUAGE,
  SET_WHITELINE_STOP,
  TRIGGER_NAV,
  LOADED_FRONTPAGE,
  SET_SKYRSLUR_FILTER,
  TRIGGER_SKYRSLU_FADE,
  INCREMENT_SKYRSLUR,
  SET_SKYRSLUR_COUNT,
} from "./actions"

const initialState = {
  device: undefined,
  started: false,
  height: undefined,
  lineHeight: 0,
  firstLineStop: 0,
  language: `icelandic`,
  whiteLineStop: undefined,
  navStatus: "closed",
  frontpageLoaded: false,
  skyrslurFilterBy: `date` /** default filtered by date from graphql query */,
  skyrslurFade: false /** skýrslu fade */,
  skyrslurShowCount: 4,
  skyrslurCount: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      var device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
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
    case TRIGGER_NAV:
      return { ...state, navStatus: action.trigger }
    case LOADED_FRONTPAGE:
      return { ...state, frontpageLoaded: true }
    case SET_SKYRSLUR_FILTER:
      return { ...state, skyrslurFilterBy: action.filter }
    case TRIGGER_SKYRSLU_FADE:
      return { ...state, skyrslurFade: !state.skyrslurFade }
    case INCREMENT_SKYRSLUR:
      return { ...state, skyrslurShowCount: state.skyrslurShowCount + 2 }
    case SET_SKYRSLUR_COUNT:
      return { ...state, skyrslurCount: action.number }
    default:
      return state
  }
}
