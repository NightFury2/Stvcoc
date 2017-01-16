const LOAD_NEWS = 'LOAD_NEWS';
const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
const LOAD_NEWS_FAIL = 'LOAD_NEWS_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_NEWS:
      return {
        ...state,
        loading: true
      };
    case LOAD_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_NEWS_FAIL:
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
  return globalState.news && globalState.news.loaded;
}

export function load() {
  return {
    types: [LOAD_NEWS, LOAD_NEWS_SUCCESS, LOAD_NEWS_FAIL],
    promise: (client) => client.get('/loadNews/')
  };
}
