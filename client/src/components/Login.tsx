import React, { useEffect, useReducer } from 'react';
import useToken from '../hooks/useToken';

//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
//https://www.bezkoder.com/react-typescript-login-example/
//https://surajsharma.net/blog/react-login-form-typescript

type State = {
  username: string
  password: string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload
      };
  }
}

// type Props = {
//   setToken : (token : string) => void
// }

const Login = () => {

  const { setToken } = useToken();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {


    
    setToken({token : "12345"});
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <form className="loginForm" noValidate autoComplete="off">
      <div >
        <div title="Login App" />
        <div>
          <div>
            <input
              id="username"
              type="email"      
              placeholder="Username"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <input            
              id="password"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleLogin}
            disabled={state.isButtonDisabled}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
