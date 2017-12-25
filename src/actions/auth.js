import Http from './api';

async function login(loginData) {
  return await Http.post('oauth/login', loginData)
}

export { login }
