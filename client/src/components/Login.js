import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/bubble-page');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    if (localStorage.getItem('token')) return <Redirect to="bubblepage" />;

    return (
      <div>
        <h1>React Bubble App</h1>
        <div >
          <form>
            <input
              name="username"
              value={this.state.credentials.username}
              placeholder="username"
              autoComplete="username"
              onChange={this.onChange}
              type="text"
            />

            <input
              name="password"
              value={this.state.credentials.password}
              onChange={this.onChange}
              placeholder="password"
              autoComplete="current-password"
              type="password"
            />

            <button type="submit" onClick={this.onSubmit}>
              Login
						</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;