const initialAuthState = { isLoggedIn: false };

//reducer
export default function reducer(state = initialAuthState, action) {
  switch (action.type) {
    
    case 'Login':
      return { ...state, isLoggedIn: true };

    case 'Logout':
      return { ...state, isLoggedIn: false };

    default:
      return state;
  } 
}

//action creators

export const Login = ()=>{
  return {type:'Login'}
  
}

export const Logout = ()=>{
  return {type:'Logout'}
  
}

