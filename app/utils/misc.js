import { AsyncStorage } from 'react-native';

export const FIREBASE_URL = `https://nba-rnative.firebaseio.com`;
export const FIREBASE_APIKEY = `AIzaSyCy4t19sLhTJQLj0kvUm599_YzBKy8EQzw`;
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_APIKEY}`;
export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_APIKEY}`;
export const REFRESH_URL = `https://securetoken.googleapis.com/v1/token?key=${FIREBASE_APIKEY}`;

export const setTokens  = (auth, cb) => {
  console.log('setToken action');
  const dateNow = new Date();
  const expiration = dateNow.getTime() + (3600 * 1000);
  AsyncStorage.multiSet([
    ['@nba_rnative@token', auth.token],
    ['@nba_rnative@refreshToken', auth.refToken],
    ['@nba_rnative@expireToken', expiration.toString()],
    ['@nba_rnative@uid', auth.uid]
  ]).then(res => {
    cb();
  })
}

export const getTokens = (cb) => {
  AsyncStorage.multiGet([
    '@nba_rnative@token',
    '@nba_rnative@refreshToken',
    '@nba_rnative@expireToken',
    '@nba_rnative@uid' 
  ]).then(values => {
    console.log(values)
    cb(values);
  })
}
