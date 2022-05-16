import React from 'react';

import Profile from 'containers/Profile';

import { render, screen } from 'test-utils';

describe('Profile', () => {
  it('should render properly', () => {
    render(<Profile />);

    expect(screen.getByTestId('Profile')).toMatchSnapshot();
  });
});
