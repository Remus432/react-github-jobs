export const filterByTitle = (text) => {
  return { type: "FILTER_TITLE", text }
}

export const filterByLocation = (text) => {
  return { type: "FILTER_LOCATION", text }
}

export const filterType = (isChecked) => {
  return { type: "FILTER_TYPE", isChecked }
}