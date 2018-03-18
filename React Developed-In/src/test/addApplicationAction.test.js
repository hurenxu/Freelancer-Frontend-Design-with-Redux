import expect from 'expect';
import * as actions from '../redux/actions';
import { ADD_APPLICATION } from "../redux/actions";

describe('Add application action', () => {
    it('should create a ADD_APPLICATION action', () => {
        const id = 1;

        const expectedAction = {
            type: ADD_APPLICATION,
            id: id
        };

        const action = actions.addApplication(account);

        expect(action).toEqual(expectedAction);
    });
});
