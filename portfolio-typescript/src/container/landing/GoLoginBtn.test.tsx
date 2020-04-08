import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import GoLoginBtnContainer from './GoLoginBtn';

const renderWithRouter = (component: React.ReactNode) => {
  const history = createMemoryHistory()
  return { 
  ...render (
  <Router history={history}>
      {component}
  </Router>
  )
}
}

describe('<GoLoginBtnContainer />', () => {
  it('matches snapshot', () => {
    const utils = renderWithRouter(<GoLoginBtnContainer text="Login" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('has a text', () => {
    const utils = renderWithRouter(<GoLoginBtnContainer text="Login" />);
    utils.getByText('Login');
  });

  it('onClick', () => {
    const utils = renderWithRouter(<GoLoginBtnContainer text="Login" />);
    const text = utils.getByText('Login');

    fireEvent.click(text);
  })
});