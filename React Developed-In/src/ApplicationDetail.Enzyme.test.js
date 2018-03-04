import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-dom/test-utils';
import ApplicationDetail from './ApplicationDetail.js';


Enzyme.configure({ adapter: new Adapter() });

function setup(specifiedProps) {
    if(specifiedProps === null) {
        return shallow(<ApplicationDetail/>);
    } else {
        return shallow(<ApplicationDetail { ...specifiedProps }/>)
    }
}

describe('Application Detail via Enzyme', () => {
    it('Test default props--should be one button in apply field', () => {
        const wrapper = setup(null);
        expect(wrapper.find('#applyButton').children().length).toBe(1);
    });

    it('Test default props--button should be apply', () => {
        const wrapper = setup(null);
        expect(wrapper.find('#applyButton').childAt(0).props().content).toBe('Apply');
    });

    it('Test non-null user--button should be Go Chat', () => {
        const wrapper = setup({user: 'Bezo'});
        expect(wrapper.find('#applyButton').childAt(0).props().content).toBe('Go Chat');
    });

    it('Test default props--contract button should be Save', () => {
        const wrapper = setup(null);
        expect(wrapper.find('#contractButton').childAt(0).props().content).toBe('Save');
    });

    it('Test non-null user--contract button should be Contract', () => {
        const wrapper = setup({user: 'Bezo'});
        expect(wrapper.find('#contractButton').childAt(0).props().content).toBe('Contract');
    });

    it('Test default props--date should be Today', () => {
        const wrapper = setup(null);
        expect(wrapper.find('#dateList').childAt(1).text()).toBe('Today');
    });

    it('Test non-null props-date should be Tomorrow', () => {
        const wrapper = setup({date: "Tomorrow"});
        expect(wrapper.find('#dateList').childAt(1).text()).toBe('Tomorrow');
    });
});