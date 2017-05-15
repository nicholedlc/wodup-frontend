import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { Container, Content, Button, Text, View } from 'native-base';
import { pickImage } from '../actions';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true
  }
};

// * The first arg is the options object for customization (it can also be null or omitted for default options),
// * The second arg is the callback which sends object: response

class PickImage extends Component {
  onButtonPress () {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.warn ('User cancelled image picker');
      } else if (response.error) {
        console.error(response.error);
      }
      this.props.pickImage(response.uri);
    });
  }

  render () {
    return (
      <Button light
        style={styles.buttonStyle}
        onPress={() => this.onButtonPress()} >
        <Text>Choose an Image</Text>
      </Button>
    );
  }
}

const styles = {
  buttonStyle: {
    marginLeft: 15
  }
}

export default connect(null, { pickImage })(PickImage);
