export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const START = "START"
export const setStart = () => ({
  type: START,
})
export const GET_HEIGHT = "GET_HEIGHT"
export const getHeight = height => ({
  type: GET_HEIGHT,
  height,
})
export const SET_LINEHEIGHT = "SET_LINEHEIGHT"
export const setLineHeight = height => ({
  type: SET_LINEHEIGHT,
  height,
})
export const SET_FIRSTLINE_STOP = "SET_FIRSTLINE_STOP"
export const setFirstlineStop = stop => ({
  type: SET_FIRSTLINE_STOP,
  stop,
})
export const SET_LANGUAGE = "SET_LANGUAGE"
export const setLanguage = () => ({
  type: SET_LANGUAGE,
})
export const SET_WHITELINE_STOP = "SET_WHITELINE_STOP"
export const setWhitelineStop = stop => ({
  type: SET_WHITELINE_STOP,
  stop,
})
export const TRIGGER_NAV = "TRIGGER_NAV"
export const triggerNav = trigger => ({
  type: TRIGGER_NAV,
  trigger,
})
export const LOADED_FRONTPAGE = "LOADED_FRONTPAGE"
export const loadedFrontpage = () => ({
  type: LOADED_FRONTPAGE,
})
/** skýrslur */
export const SET_SKYRSLUR_FILTER = "SET_SKYRSLUR_FILTER"
export const setSkyrslurFilter = filter => ({
  type: SET_SKYRSLUR_FILTER,
  filter,
})
export const TRIGGER_SKYRSLU_FADE = "TRIGGER_SKYRSLU_FADE"
export const triggerSkyrsluFade = () => ({
  type: TRIGGER_SKYRSLU_FADE,
})
export const INCREMENT_SKYRSLUR = "INCREMENT_SKYRSLUR"
export const incrementSkyrslur = () => ({
  type: INCREMENT_SKYRSLUR,
})
export const SET_SKYRSLUR_COUNT = "SET_SKYRSLUR_COUNT"
export const setSkyrslurCount = number => ({
  type: SET_SKYRSLUR_COUNT,
  number,
})
/** fréttir */
export const SET_FRETTIR_FILTER = "SET_FRETTIR_FILTER"
export const setFrettirFilter = filter => ({
  type: SET_FRETTIR_FILTER,
  filter,
})
export const TRIGGER_FRETTIR_FADE = "TRIGGER_FRETTIR_FADE"
export const triggerFrettirFade = () => ({
  type: TRIGGER_FRETTIR_FADE,
})
export const INCREMENT_FRETTIR = "INCREMENT_FRETTIR"
export const incrementFrettir = () => ({
  type: INCREMENT_FRETTIR,
})
export const SET_FRETTIR_COUNT = "SET_FRETTIR_COUNT"
export const setFrettirCount = number => ({
  type: SET_FRETTIR_COUNT,
  number,
})
export const PUSH_HISTORY = "PUSH_HISTORY"
export const pushHistory = location => ({
  type: PUSH_HISTORY,
  location,
})
