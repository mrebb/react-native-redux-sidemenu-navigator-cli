import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,
  Text,
  Animated,
  Easing,Linking,ScrollView,TextInput,Image,TouchableOpacity,
  View } from 'react-native';
import Container from './styles/Container';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label from './styles/Label'
import Button from './styles/Button'
import spinner from '../assets/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;

const MARGIN = 60;
class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    };
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }
  
  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      this.props.navigation.dispatch({ type: 'Login' })
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.cubic,
    }).start();
  }
  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      
        <ScrollView style={styles.scroll}>
  <Container>
      <Label text="Username or Email" />
      <TextInput
          style={styles.textInput}
      />
  </Container>
  <Container>
      <Label text="Password" />
      <TextInput
          secureTextEntry={true}
          style={styles.textInput}
      />
  </Container>
   <Container>
      <Button 
          styles={{button: styles.transparentButton}}
          onPress={this._handlePressAsync}
      >
          <View style={styles.inline}>
              <Icon name="github" size={30} color="#3B5699" />
              <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
              <Text style={styles.buttonBlueText}>with Github</Text>
          </View>
      </Button>
  </Container> 
  <View style={styles.footer}>
  <View style={styles.container}>
      <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <View style={styles.inline} >
              <Text style={styles.text}>LOGIN</Text></View>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
        </View>
      <Container>
          <Button 
              label="CANCEL"
              styles={{label: styles.buttonBlackText}} 
              onPress={() => this.props.navigation.dispatch({ type: 'Home' })}/>
      </Container>
  </View>
      </ScrollView>
     
    )
  }
  

  _handlePressAsync = async () => {
    let githubURL = 'https://github.com/login/oauth/authorize';
    Linking.openURL(githubURL);
    // Continue logic here
  }
  _addLinkingListener = () => {
    
  };

  _removeLinkingListener = () => {
    
  };

};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

LoginScreen.navigationOptions = {
  headerTitle: <View style={{ flexDirection: 'row',
  alignItems: 'center',
justifyContent: 'center',}} >
  <Icon name="sign-in" size={40} color="#3B5699" /><Text style={{color: 'white',
    fontWeight:'bold',
    fontSize:20
    }}>      LOGIN </Text></View>,
};
//
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  },
  inline: {
      flexDirection: 'column',
      alignItems: 'center',
    justifyContent: 'center',
    },
    scroll: {
      backgroundColor: '#E1D7D8',
      padding: 30,
      flexDirection: 'column'
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  logo: {
    color: 'white',
    fontWeight:'bold',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
},
transparentButton: {
  marginTop: 30,
  borderColor: '#3B5699',
  borderWidth: 2
},
buttonBlueText: {
  fontSize: 20,
  color: '#3B5699'
},
textInput: {
  height: 80,
  fontSize: 30,
  backgroundColor: '#FFF'
},
label: {
  color: '#0d8898',
  fontSize: 20
},
alignRight: {
  alignSelf: 'flex-end'
},
scroll: {
  backgroundColor: '#c2a4e8',
  padding: 30,
  flexDirection: 'column'
},
buttonBigText: {
  fontSize: 20,
  fontWeight: 'bold'
},
inline: {
  flexDirection: 'row'
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#34A853'
},
footer: {
   marginTop: 75
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
});