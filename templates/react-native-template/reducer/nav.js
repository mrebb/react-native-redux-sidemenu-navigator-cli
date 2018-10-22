import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigation/AppNavigation.js';

const firstAction = RootNavigator.router.getActionForPathAndParams('Home');

const tempNavState = RootNavigator.router.getStateForAction(firstAction);

const secondAction = RootNavigator.router.getActionForPathAndParams('Login');

const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default function reducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
      case 'Home':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  
  return nextState || state;
}