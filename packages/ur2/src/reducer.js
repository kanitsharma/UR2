const getInitialState = {
  pathname: '/',
  search: '',
  queries: {},
  hash: ''
}

export const routerReducer = (state = getInitialState, action) => {
  switch (action.type) {
    case 'ROUTER/LOCATION_CHANGE':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
