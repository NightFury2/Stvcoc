const LOAD_PARTNERS = 'LOAD_PARTNERS';
const LOAD_PARTNERS_SUCCESS = 'LOAD_PARTNERS_SUCCESS';
const LOAD_PARTNERS_FAIL = 'LOAD_PARTNERS_FAIL';

const initialState = {
  loadedPartners: false,
  loadingPartners: false,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PARTNERS:
      return {
        ...state,
        loadingPartners: true
      };
    case LOAD_PARTNERS_SUCCESS:
      return {
        ...state,
        loadingPartners: false,
        loadedPartners: true,
        data: action.result,
        error: null
      };
    case LOAD_PARTNERS_FAIL:
      return {
        ...state,
        loadingPartners: false,
        loadedPartners: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.partners && globalState.partners.loadedPartners;
}

export function load() {
  return {
    types: [LOAD_PARTNERS, LOAD_PARTNERS_SUCCESS, LOAD_PARTNERS_FAIL],
    promise: (client) => client.get('/api/loadPartners/')
  };
}
