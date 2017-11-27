import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';


test('should correclty render login page', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLoginWithGithub = jest.fn();
  const wrapper = shallow(<LoginPage startLoginWithGithub={startLoginWithGithub} />);
  wrapper.find('.button--github').simulate('click');
  expect(startLoginWithGithub).toHaveBeenCalled();
});
