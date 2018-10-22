import navReducer from './nav.js';

describe('nav reducer', () => {

      it(`should route to 'Home' screen when 'Login' action is dispatched after login is successful`, () => {
  
        let action = {type:'Login'};
        let initialState =   { key: 'StackRouterRoot',
        isTransitioning: false,
        index: 1,
        routes: [{ params: {}, key: 'id-1538454184189-0', routeName: 'Home' },
        { params: {}, routeName: 'Login', key: 'id-1538454184189-1' } ] }
  
        let state = navReducer(initialState, action);
  
        expect(state.routes[0].routeName).toBe('Home');
      });

      it(`should route to 'Login' screen when 'Logout' action is dispatched after user is logged out`, () => {
  
        let action = {type:'Logout'};
        let initialState =  {"index": 0, "isTransitioning": false, "key": "StackRouterRoot", "routes": [{"key": "id-1538454184189-0", "params": {}, "routeName": "Home"}]}
  
        let state = navReducer(initialState, action);
  
        expect(state.routes[1].routeName).toBe('Login');
      });

      it(`should pop a route from routes when 'BACK' action is performed`, () => {
  
        let action = {type:'Navigation/BACK'};
        let initialState ={ key: 'StackRouterRoot',
        isTransitioning: false,
        index: 2,
        routes:[{"key": "id-1538458716867-0", "params": {}, "routeName": "Home"},{"key": "id-1538458716867-1", "params": {}, "routeName": "Screen1"},{"key": "id-1538458716867-2", "params": {}, "routeName": "Screen2"}] }
  
        let state = navReducer(initialState,action);
  
        expect(state.routes.length).toBe(2);
      });


     

    })