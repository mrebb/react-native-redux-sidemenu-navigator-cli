import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types'
import Wallpaper from './styles/Wallpaper.js'
import { connect } from 'react-redux';

export class Screen2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        this.props.isLoggedIn?<Wallpaper>
            <View style={styles.container}>
                <Text style={styles.text}>
                  Hello Screen2
            </Text>
            </View>
          </Wallpaper>:<Wallpaper>
            <View style={styles.container}>
                <Text style={styles.text}>
                 Show spinner or don't do anything
            </Text>
            </View>
          </Wallpaper>
      )
    }
}
Screen2.navigationOptions = {
  title: 'Screen2',
};
Screen2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Screen2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 300,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:30
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  
});