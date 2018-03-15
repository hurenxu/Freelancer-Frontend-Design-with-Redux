import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-dom/test-utils';
import SignIn from '../SignIn.js';

Enzyme.configure({ adapter: new Adapter() });

function setup(isSignUp) {
    const props = {signUp: isSignUp};

    return shallow(<SignIn {...props} />);
}

describe('SignUp via Enzyme', () => {
    it('Children # should be 3 for signin', () => {
        const wrapper = setup(false);
        expect(wrapper.find('Form').children().length).toBe(3);
    });

    it('For singin, the first input field should be Username', () => {
        const wrapper = setup(false);
        expect(wrapper.find('Form').childAt(0).props().placeholder).toBe("Username");
    });

    it('For singin, the second input field should be Password', () => {
        const wrapper = setup(false);
        expect(wrapper.find('Form').childAt(1).props().placeholder).toBe("Password");
    });

    // Start testing signup

    it('Children # should be 5 for signup', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Form').children().length).toBe(5);
    });

    it('For singup, the first input field should be Email', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Form').childAt(0).props().placeholder).toBe("Email");
    });

    it('For singup, the second input field should be Username', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Form').childAt(1).props().placeholder).toBe("Username");
    });

    it('For singup, the first input field should be Password', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Form').childAt(2).props().placeholder).toBe("Password");
    });

    it('For singup, the second input field should be Repeat Password', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Form').childAt(3).props().placeholder).toBe("Repeat Password");
    });

    it('test Eznyme', () => {
        const wrapper = setup(false);
        expect(wrapper.find('Modal').props().size).toBe('tiny');
    })
});