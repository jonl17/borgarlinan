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
