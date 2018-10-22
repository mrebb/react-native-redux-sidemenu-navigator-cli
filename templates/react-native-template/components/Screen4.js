import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types'
import Wallpaper from './styles/Wallpaper.js'
import { connect } from 'react-redux';

export class Screen4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        this.props.isLoggedIn?<Wallpaper>
            <View style={styles.container}>
                <Text style={styles.text}>
                  Hello Screen4
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
Screen4.navigationOptions = {
  title: 'Screen4',
};
Screen4.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Screen4);

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