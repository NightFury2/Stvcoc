const LOAD_NEWS = 'LOAD_NEWS';
const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
const LOAD_NEWS_FAIL = 'LOAD_NEWS_FAIL';

const initialState = {
  loadedNews: false,
  loadingNews: false,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_NEWS:
      return {
        ...state,
        loadingNews: true
      };
    case LOAD_NEWS_SUCCESS:
      return {
        ...state,
        loadingNews: false,
        loadedNews: true,
        data: action.result,
        error: null
      };
    case LOAD_NEWS_FAIL:
      return {
        ...state,
        loadingNews: false,
        loadedNews: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.news && globalState.news.loadedNews;
}

export function load() {
  return {
    types: [LOAD_NEWS, LOAD_NEWS_SUCCESS, LOAD_NEWS_FAIL],
    promise: (client) => client.get('/api/loadNews/')
  };
}
