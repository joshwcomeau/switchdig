/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import PrimaryNav from './index';

describe('PrimaryNav', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PrimaryNav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
