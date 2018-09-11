import React, { Component } from 'react'
import {findNodeHandle, ScrollView, Text, Image, View, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Animated, Keyboard  } from 'react-native'
import { Images } from '../../Themes';
import Register from '../Register';
// validate
import validate from '../../Lib/validate/validate_wrapper';

// navigation
import { NavigationActions } from 'react-navigation';

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
      buttonStyle: styles.button,
      user: null,
    },
    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(150);
    this.paddingForm = new Animated.Value(25);
    this.paddingForm1 = new Animated.Value(35);
  }
  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }
  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }
  componentWillReceiveProps(newProps, props) {
    if(newProps.information.user.data.length > 0) {
      this.setState({
        user: newProps.user
      }, () => {
        this.props.navigation.navigate('Register',
          {
            information: newProps.information.user.data,
            onSelect: this.onSelect
          }
        );
      })
    }
  }
  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: 40,
      }),
      Animated.timing(this.paddingForm, {
        duration: event.duration,
        toValue: 10,
      }),
      Animated.timing(this.paddingForm1, {
        duration: event.duration,
        toValue: 10,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: 150,
      }),
      Animated.timing(this.paddingForm, {
        duration: event.duration,
        toValue: 25,
      }),
      Animated.timing(this.paddingForm1, {
        duration: event.duration,
        toValue: 35,
      }),
    ]).start();
  };
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
  _scrollUp(ref){
    let scrollResponder = this.refs.scrollView.getScrollResponder();
    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      findNodeHandle(ref),
      180, //additionalOffset
      true
    );
  }
  onSelect(data) {
    console.log(data)
  };
  render () {
    console.log(this.props.navigation);
    return (
        <Animated.View style={{ marginBottom: this.keyboardHeight }}>
          <ScrollView style={styles.loginWrapper} ref="scrollView" keyboardDismissMode="interactive">
            <ImageBackground source={Images.header} style={styles.header}>
              <Text style={styles.headerText}>Login</Text>
            </ImageBackground>
            <Animated.View style={[styles.middle, {paddingBottom: this.paddingForm, paddingTop: this.paddingForm}]} >
              <Animated.Image source={Images.avatar} style={{ width: this.imageHeight, height: this.imageHeight }}/>
            </Animated.View>
            <Animated.View style={styles.loginForm}>
              <Animated.View style={[styles.items, {paddingTop: this.paddingForm}]}>
                <View style={styles.label}><Text style={styles.labelText}>Username</Text></View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Your username!"
                    autoCapitalize='none'
                    onChangeText={(value) => this._setValue('username', value)}
                    onBlur={() => this._checkValidate('username',this.state.username)}
                    blurOnSubmit={false}
                    returnKeyType = { "next" }
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    onFocus={this._scrollUp.bind(this, this.firstTextInput)}
                    ref={(input) => { this.firstTextInput = input; }}
                  />
                </View>
              </Animated.View>
              <Animated.View style={[styles.errorWrapper,{paddingTop: this.paddingForm1}]}>
                <Text style={styles.errorText}>{this.state.error.username}</Text>
              </Animated.View>
              <Animated.View style={[styles.items, {paddingTop: this.paddingForm}]}>
                <View style={styles.label}><Text style={styles.labelText}>Password</Text></View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    ref={(input) => { this.secondTextInput = input; }}
                    placeholder="*********"
                    secureTextEntry={true}
                    onChangeText={(value) => this._setValue('password', value)}
                    onBlur={() => this._checkValidate('password',this.state.password)}
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    onFocus={this._scrollUp.bind(this, this.secondTextInput)}
                  />
                </View>
              </Animated.View>
              <Animated.View style={[styles.errorWrapper,{paddingTop: this.paddingForm1}]}>
                <Text style={styles.errorText}>{this.state.error.password}</Text>
              </Animated.View>

            </Animated.View>


          </ScrollView>

          <TouchableOpacity onPress={() => { this._loginButton()}}>
            <View style={this.state.buttonStyle}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
    )
  }
}
