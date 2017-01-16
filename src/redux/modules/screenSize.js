const SET_MOBILE = 'SET_MOBILE';
const SET_TABLET = 'SET_TABLET';
const SET_DESKTOP = 'SET_DESKTOP';

const initialState = {
  mobile: false,
  tablet: false,
  desktop: true,
};

export default function screenSize(state = initialState, action ) {
  switch (action.type) {
    case SET_MOBILE:
      return {
        ...state,
        mobile: true,
        tablet: false,
        desktop: false,
        scrHeight: action.scrHeight
      };
    case SET_TABLET:
      return {
        ...state,
        mobile: false,
        tablet: true,
        desktop: false,
        scrHeight: action.scrHeight
      };
    case SET_DESKTOP:
      return {
        ...state,
        mobile: false,
        tablet: false,
        desktop: true,
        scrHeight: action.scrHeight
      };
    default:
      return state;
  }
}

export function sizeUpdate(scrHeight, scrWidth) {
  if (scrWidth <= 600) {
    return {type: SET_MOBILE, scrHeight};
  } else if (scrWidth <= 992) {
    return {type: SET_TABLET, scrHeight};
  } else if (scrWidth > 992) {
    return {type: SET_DESKTOP, scrHeight};
  }
}

