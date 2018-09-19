import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import getTestStore from './mocks/testStoreSetup';

import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let store;

  beforeEach(() => {
    store = getTestStore();
  });

  test('App has a sitename', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(wrapper.find('.site-name')).toHaveLength(1);
  });
});