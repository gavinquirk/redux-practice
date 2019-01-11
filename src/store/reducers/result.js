import * as actionTypes from '../actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}) // Concat allows for array manipulation immutably
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultElId) // Filter allows for array manipulation immutably
      return {
        ...state,
        results: updatedArray

      }
  }
  return state
}

export default reducer