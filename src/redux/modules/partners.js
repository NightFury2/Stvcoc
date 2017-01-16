const LOAD_PARTNERS = 'LOAD_PARTNERS';
const LOAD_PARTNERS_SUCCESS = 'LOAD_PARTNERS_SUCCESS';
const LOAD_PARTNERS_FAIL = 'LOAD_PARTNERS_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PARTNERS:
      return {
        ...state,
        loading: true
      };
    case LOAD_PARTNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_PARTNERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.partners && globalState.partners.loaded;
}

export function load() {
  return {
    types: [LOAD_PARTNERS, LOAD_PARTNERS_SUCCESS, LOAD_PARTNERS_FAIL],
    promise: (client) => client.get('/loadPartners/')
  };
}
