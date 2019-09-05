import axios from 'axios';
import { SIGN_UP, SIGN_IN, AUTO_SIGN_IN } from '../types';
import { SIGN_UP_URL, SIGN_IN_URL, FIREBASE_URL, REFRESH_URL } from '../../utils/misc';

export const signUp = (data) => {
  const request = axios({
    method: 'POST',
    url: SIGN_UP_URL,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    header: {
      'Content-Type': 'application/json'
    }
  })
  .then(res =>  res.data)
  .catch(err => false)

  return {
    type: SIGN_UP,
    payload: request
  }
}

export const signIn = (data) => {
  const request = axios({
    method: 'POST',
    url: SIGN_IN_URL,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    header: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.data)
  .catch(err => false)

  return {
    type: SIGN_IN,
    payload: request
  }
}

export const autoSignIn = (refToken) => {
    const request = axios({
      method: 'POST',
      url: REFRESH_URL,
      data: "grant_type=refresh_token&refresh_token=" + refToken,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      console.log(res);
      return res.data
    })
    .catch(err => {
      console.log(err);
      return false
    })

    return {
      type: AUTO_SIGN_IN,
      payload: request
    }
}