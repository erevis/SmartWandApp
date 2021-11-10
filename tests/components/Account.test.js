import React from 'react';
import renderer, { act } from 'react-test-renderer';

import {Account} from '../../components/Account.js';

describe('<Account />', () => {
    act(() => {
        it('Renders correctly', () => {
            const tree = renderer.create(<Account />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
})