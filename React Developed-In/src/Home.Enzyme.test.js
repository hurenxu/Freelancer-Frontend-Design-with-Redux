import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-dom/test-utils';
import Home from './Home.js';


Enzyme.configure({ adapter: new Adapter() });

function setup() {
    return shallow(<Home/>);
}

describe('Home via Enzyme', () => {
    it('Class Name of outer div should be Index', () => {
        const wrapper = setup(true);
        expect(wrapper.find('div').props().className).toBe('Index');
    });

    it('Should display 4 people images', () => {
        const wrapper = setup(true);
        expect(wrapper.find('#cardGroup').children().length).toEqual(4);
    });

    // it('For singin, the first input field should be Username', () => {
    //     const wrapper = setup(false);
    //     expect(wrapper.find('Form').childAt(0).props().placeholder).toBe("Username");
    // });

});