import  authReducer, {Login,Logout} from './auth.js';

describe('auth state', () => {

    describe('auth actions', () => {
        it('should create Login action', () => {

            const auth = { type: 'Login' };

            const action = Login();
      
            expect(action.type).toBe(auth.type);
    
          });
          it('should create Logout action', () => {

            const auth = { type: 'Logout' };

            const action = Logout();
      
            expect(action.type).toBe(auth.type);
          });
    })
    describe('auth reducer', () => {

        it('should update Login state when user logs in', () => {
      
            let action = {type:'Login'};
            
            let initialState = {isLoggedIn: false}
      
            let state = authReducer(initialState, action);
      
            expect(state.isLoggedIn).toBe(true);
          });
    
          it('should update Login state when user logs out', () => {
      
            let action = {type:'Logout'};
            
            let initialState = {isLoggedIn: true}
      
            let state = authReducer(initialState, action);
      
            expect(state.isLoggedIn).toBe(false);
          });
      });
    
})
  