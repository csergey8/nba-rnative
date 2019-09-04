import axios from 'axios';
import { SIGN_UP, SIGN_IN } from '../types';
import { SIGN_UP_URL, SIGN_IN_URL, FIREBASE_URL, REFRESH } from '../../utils/misc';

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
  console.log(data);
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
  .then(res =>  {
    console.log(res.data)
    return res.data})
  .catch(err => {
    console.log(err)
  })

  return {
    type: SIGN_IN,
    payload: request
  }
}