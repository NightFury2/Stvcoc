const LOAD_AUTH = 'LOAD_AUTH';
const LOAD_AUTH_SUCCESS = 'LOAD_AUTH_SUCCESS';
const LOAD_AUTH_FAIL = 'LOAD_AUTH_FAIL';
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'LOGOUT_FAIL';
const OPEN_LOGIN = 'OPEN_LOGIN';
const CLOSE_LOGIN = 'CLOSE_LOGIN';

const initialState = {
  loaded: false,
  openLogin: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_AUTH:
      return {
        ...state,
        loading: true
      };
    case LOAD_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result
      };
    case LOAD_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result,
        error: null
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        logged: false,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    case OPEN_LOGIN:
      return {
        ...state,
        openLogin: true
      };
    case CLOSE_LOGIN:
      return {
        ...state,
        openLogin: false
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD_AUTH, LOAD_AUTH_SUCCESS, LOAD_AUTH_FAIL],
    promise: (client) => client.get('/loadAuth/')
  };
}

export function login(username, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/api-token-auth/login/', {
      data: {
        username: username,
        password: password
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/api-token-auth/logout/')
  };
}

export function setOpenLogin() {
  return {type: OPEN_LOGIN};
}
export function setCloseLogin() {
  return {type: CLOSE_LOGIN};
}
