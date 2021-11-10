import React from 'react';
import renderer, { act } from 'react-test-renderer';

import {Education} from '../../components/Education.js';

describe('<Education />', () => {
    act(() => {
        it('Renders correctly', () => {
            const tree = renderer.create(<Education />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
})