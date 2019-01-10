const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.val
      }
    case 'SUBTRACT': 
      return {
        ...state,
        counter: state.counter - action.val
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) // Concat allows for array manipulation immutably
      }
    case 'DELETE_RESULT':
      const updatedArray = state.results.filter(result => result.id !== action.resultElId) // Filter allows for array manipulation immutably
      return {
        ...state,
        results: updatedArray

      }

  }
  return state
}

export default reducer