import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, ImageBackground, TouchableOpacity  } from 'react-native'
import { Images } from '../../Themes'

// validate
import validate from '../../Lib/validate/validate_wrapper';

// Styles
import styles from './styles'

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: {
        username: '',
        password: '',
      },
      buttonStyle: styles.button
    }
  }
  _setValue(field, value) {
    this.setState({
      [field]: value
    }, () => {
      if( !validate('username', this.state.username) && !validate('password', this.state.password)){
        this.setState({buttonStyle: styles.buttonActive})
      } else {
        this.setState({buttonStyle: styles.button})
      }
    });
  }
  _checkValidate(field, value) {
    const valueError = validate(field, value);
    this.setState((previousState) => {
      return {
        error: {
          ...previousState.error,
          [field]: valueError
        }
      }
    })
  }
  _loginButton() {
    const usernameError = validate('username', this.state.username);
    const passwordError = validate('password', this.state.password);
    this.setState({
      error: {
        username: usernameError,
        password: passwordError
      }
    });
    if(!usernameError && !passwordError) {
      this.props.onLogin(this.state.username, this.state.password);
    }
  }
  render () {
    return (
      <ScrollView style={styles.loginWrapper}>
        <ImageBackground source={Images.header} style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </ImageBackground>
        <View style={styles.middle}>
          <Image source={Images.avatar} style={{width: 150, height: 150}}/>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.items}>
            <View style={styles.label}><Text style={styles.labelText}>Username</Text></View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Your username!"
                autoCapitalize='none'
                onChangeText={(value) => this._setValue('username', value)}
                onBlur={() => this._checkValidate('username',this.state.username)}
              />
            </View>
          </View>
          <View style={styles.errorWrapper}><Text style={styles.errorText}>{this.state.error.username}</Text></View>
          <View style={styles.items}>
            <View style={styles.label}><Text style={styles.labelText}>Password</Text></View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="*********"
                secureTextEntry={true}
                onChangeText={(value) => this._setValue('password', value)}
                onBlur={() => this._checkValidate('password',this.state.password)}
              />
            </View>
          </View>
          <View style={styles.errorWrapper}><Text style={styles.errorText}>{this.state.error.password}</Text></View>
        </View>
        <TouchableOpacity onPress={() => { this._loginButton()}}>
          <View style={this.state.buttonStyle}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
