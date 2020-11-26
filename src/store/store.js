import { createStore } from "redux"
import reducer from "../reducer/reducer"

const initialState = {
  jobs: [],
  filterTitle: "",
  filterLocation: "",
  fullTime: false
}

const store = createStore(reducer, initialState)

export default store