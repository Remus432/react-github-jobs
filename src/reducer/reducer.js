const reducer = (state, action) => {
  switch(action.type) {
    case "LOAD_API":
      return state
    case "FILTER_TITLE":
      return {
        ...state,
        filterTitle: action.text
      }
    case "FILTER_LOCATION":
      return {
        ...state,
        filterLocation: action.text
      }
    case "FILTER_TYPE":
      return {
        ...state,
        fullTime: action.isChecked
      }
    default:
      return state
  }
}

export default reducer