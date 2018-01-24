import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './app-header';

describe('component AppHeader', () => {
    test('renders as expected', () => {
        const wrapper = shallow(<AppHeader />);

        expect(wrapper).toMatchSnapshot();
    });
});
