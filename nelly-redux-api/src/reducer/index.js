import data from "../data.js/memeData"

const initialState = {
  memes: data,
  loading: false,
  err: "",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
