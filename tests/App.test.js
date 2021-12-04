import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer, { act } from 'react-test-renderer';

import App, {Tabs} from '../App.js';


describe('<App />', () => {
    act(() => {
        it('Renders correctly', () => {
            //expect.assertions(1)
            const tree = renderer.create(<App />).toJSON();
            //console.log(tree)
            expect(tree).toMatchSnapshot();
        });
    })
    
    act(() => {
        it('Has 1 child', () => {
            const tree = renderer.create(<App />).toJSON();
            console.log(tree)
            expect(tree.children.length).toBe(1);
        });
    })

    // act(() => {
    //     it('Navigation', ()=> {
            
    //         const nav = renderer.create(
    //             <NavigationContainer>
    //                 <Tabs />
    //             </NavigationContainer>
    //         );
    //         console.log(nav)
    //     })
    // })
})