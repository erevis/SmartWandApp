import React from 'react';
import renderer, { act } from 'react-test-renderer';

import {Progress} from '../../components/Progress.js';

describe('<Progress />', () => {
    act(() => {
        it('Renders correctly', () => {
            const tree = renderer.create(<Progress />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
})