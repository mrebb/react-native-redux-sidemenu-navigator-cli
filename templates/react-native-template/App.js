import React from 'react'
import { StyleSheet, View,Image, StatusBar,TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AppReducer from './reducer/index.js';
import SideMenu from 'react-native-side-menu';
import Menu from './components/SideMenuBar.js'
import {AppNavigator,middleware} from './navigation/AppNavigation.js'
import image from './assets/menu.png'
import logger from './middleware/logger.js'
const middlewares = [thunk,middleware,logger]
// create store
const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(...middlewares)));


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'Home',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    
  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected}/>
    return (
      <Provider store={store}>
      <SideMenu
        menu={menu}
        menuPosition='right'
        isOpen={this.state.isOpen}
        openMenuOffset={210}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle='dark-content'  />
          <AppNavigator />
        </View>
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
        </SideMenu>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    top: 20,
    right:10,
    padding: 10,
  },
})










