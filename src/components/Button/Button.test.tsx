import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe("<Button />", () => {
  it("renders children", () => {
    const text = "button child";
    const wrapper = shallow(<Button to="/">${text}</Button>);
    expect(wrapper.children()).toHaveLength(1)
  });
});

