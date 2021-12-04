import React from 'react';
import renderer, { act } from 'react-test-renderer';

import {Therapy} from '../../components/Therapy.js';

describe('<Therapy />', () => {
    act(() => {
        it('Renders correctly', () => {
            const tree = renderer.create(<Therapy />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
})