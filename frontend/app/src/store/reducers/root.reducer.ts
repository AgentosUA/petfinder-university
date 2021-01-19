const initState = {
  isLoggedIn: false
};

const rootReducer = (state: typeof initState = initState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export { rootReducer }