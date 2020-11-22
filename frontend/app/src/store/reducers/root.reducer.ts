const initState = {
  title: 'Super value!',
  isLoggedIn: false
};

const rootReducer = (state: typeof initState = initState, action: any) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export { rootReducer }