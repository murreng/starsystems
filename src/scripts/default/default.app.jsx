import React from 'react';
import store from '../redux';
import { Provider } from 'react-redux';
import HomeContainer from './home.container';
import '../../css/main.css';
class Account extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}

export default Account;
