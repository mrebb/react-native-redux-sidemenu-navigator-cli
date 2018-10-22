import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
const window = Dimensions.get('window');
class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isLoading:true,
      uri:'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png',
      name:'TEST USER'
    }
  }
  

  dispathBoth=(item)=>{
    this.props.onItemSelected(item)
    this.props.dispatch(NavigationActions.navigate({ routeName: item }))
  }
  
  render(){
  if (!this.props.isLoggedIn) {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
      <Text
        onPress={()=>this.dispathBoth('Home')}
        style={styles.home}
      >Home
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Login')}
        style={styles.login}
      >Login
      </Text>
      </ScrollView>
    )
  }
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{uri:this.state.uri}}
        />
        <Text style={styles.name}>{this.state.name}</Text>
      </View>
      <Text
        onPress={()=>this.dispathBoth('Home')}
        style={styles.home}
      >
        Home
      </Text>
      <Text
       onPress={()=>this.dispathBoth('Screen1')}
        style={styles.item}
      >
        Screen1
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Screen2')}
        
        style={styles.item}
      >
        Screen2
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Screen3')}
        
        style={styles.item}
      >
        Screen3
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Screen4')}
        style={styles.item}
      >
        Screen4
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Screen5')}
        style={styles.item}
      >
        Screen5
      </Text>
    </ScrollView>
  );
    }
    
    
}

Menu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Menu);
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#9671bc',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    flex: 1,
    fontSize: 30,
    fontWeight: '400',
    paddingTop: 50,
    textDecorationLine: 'underline' ,
    color: '#FFFFFF',
    marginHorizontal: '5%',
  },
  home: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 30,
    marginHorizontal: '5%',
    fontWeight: '400',
    paddingTop: 35,
    flexDirection: 'row',
    textDecorationLine: 'underline' ,
    
  },
  login: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 30,
    marginHorizontal: '5%',
    textDecorationLine: 'underline' ,
    fontWeight: '400',
    paddingTop: 50,
  },
});