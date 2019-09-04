import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button, Platform } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../utils/forms/input.js';

import validation from '../../utils/forms/validation';
import { signUp, signIn } from '../../store/actions/users_action.js';
import { bindActionCreators } from 'redux';



class AuthFormComponent extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to register',
    hasErrors: false,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          isEmail: true
        }
      }, 
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          minLength: 6
        }
      }, 
      confirmPassword: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPass: 'password'
        }
      }
    }
  }

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    })
    let formCopy = this.state.form;
    formCopy[name].value = value; 

    let rules = formCopy[name].rules;
    let valid = validation(value, rules, formCopy);
    
    console.log(valid);
    formCopy[name].valid = valid;


    this.setState({
      form: formCopy
    })
  }
 
  confirmPassword = () => (
    this.state.type != 'Login' ?
    <Input
          placeholder="Confirm password"
          placeholderTextColor='#cecece'
          autoCaptalize={"none"}
          type={this.state.form.confirmPassword.type}
          value={this.state.form.confirmPassword.value}
          onChangeText={value => this.updateInput("confirmPassword", value)}
          secureTextEntry
        />
        : null
  )

  formHasErrors = () => (
    this.state.hasErrors ?

    <View style={styles.errorContainer}>
      <Text style={styles.errorLabel}>Ooops, check your info</Text>
    </View>


    : null
  )

  changeFormType = () => {
   const type = this.state.type;

    this.setState({
      type: type === 'Login' ? 'Register' : 'Login',
      action: type === 'Login' ? 'Register' : 'Login',
      actionMode: type === 'Login' ? 'I want to Login' : 'I want to Register'
    })

  }

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for(let key in formCopy) {
      if(this.state.type === 'Login') {
        //Login
        if(key !== 'confirmPassword') {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value 
        }
      } else {
        //Register
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value 

      }
    }

    if(isFormValid) {
      if(this.state.type === 'Login') {
        this.props.signIn(formToSubmit);
      } else {
        this.props.signUp(formToSubmit);
      }
    } else {
      this.setState({
        hasErrors: true
      })
    }

  }
  render() {
    return (
      <View>
        <Input
          placeholder="Enter email"
          placeholderTextColor='#cecece'
          autoCaptalize={"none"}
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          keyboardType={"email-address"}
          onChangeText={value => this.updateInput("email", value)}
        />
        <Input
          placeholder="Enter your password"
          placeholderTextColor='#cecece'
          autoCaptalize={"none"}
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={value => this.updateInput("password", value)}
          secureTextEntry
        />

        {this.confirmPassword()}
        {this.formHasErrors()}

        <View style={{ marginTop: 20}}>
          <View style={styles.button}>
            <Button
              title={this.state.action}
              onPress={this.submitUser}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={this.state.actionMode}
              onPress={this.changeFormType}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="I'll do it later"
              onPress={() => this.props.goNext()}
            />
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f44336'
  }, 
  errorLabel: {
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  button: {
    ...Platform.select({
      ios: {
        marginBottom: 0
      },
      android: {
        marginBottom: 10,
        marginTop: 10
      }
    })
  }
});

const mapStateToProps = state => {
  console.log(state);
  return {
    User: state.User
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({signIn, signUp}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormComponent);