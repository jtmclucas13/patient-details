import React from 'react';
import { shallow } from 'enzyme';
import WhiskerPlot from './whisker-plot';

describe('component WhiskerPlot', () => {
    test('renders as expected', () => {
        const wrapper = renderWhiskerPlot();

        expect(wrapper).toMatchSnapshot();
    });
});

/**
* Helper function for rendering WhiskerPlot in tests without boilerplate required props
* @param {Object} [props={}] props for WhiskerPlot
* @return {ShallowWrapper} enzyme wrapper for WhiskerPlot 
*/
function renderWhiskerPlot(props = {}) {
    const propsToUse = {
        allValues: [1, 10],
        targetValue: 5,
        ...props,
    };

    return shallow(<WhiskerPlot {...propsToUse} />);
}
